"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./src/resources/config.js");
var domino = require("domino");
var express = require("express");
var fs = require("fs");
var path = require("path");
var _a = require('fs'), readFileSync = _a.readFileSync, existsSync = _a.existsSync;
var createProxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;
var template = fs.readFileSync(path.join(process.cwd(), 'dist/mempool/browser/en-US/', 'index.html')).toString();
var win = domino.createWindow(template);
// @ts-ignore
win.__env = global.__env;
// @ts-ignore
win.matchMedia = function () {
    return {
        matches: true
    };
};
// @ts-ignore
win.setTimeout = function (fn) { fn(); };
win.document.body.scrollTo = (function () { });
// @ts-ignore
global['window'] = win;
global['document'] = win.document;
// @ts-ignore
global['history'] = { state: {} };
global['localStorage'] = {
    getItem: function () { return ''; },
    setItem: function () { },
    removeItem: function () { },
    clear: function () { },
    length: 0,
    key: function () { return ''; },
};
/**
 * Return the list of supported and actually active locales
 */
function getActiveLocales() {
    var angularConfig = JSON.parse(readFileSync('angular.json', 'utf8'));
    var supportedLocales = __spreadArray([
        angularConfig.projects.mempool.i18n.sourceLocale
    ], Object.keys(angularConfig.projects.mempool.i18n.locales), true);
    return supportedLocales.filter(function (locale) { return locale === 'en-US' && existsSync("./dist/mempool/server/".concat(locale)); });
    // return supportedLocales.filter(locale => existsSync(`./dist/mempool/server/${locale}`));
}
function app() {
    var server = express();
    // proxy websocket
    server.get('/api/v1/ws', createProxyMiddleware({
        target: 'ws://localhost:4200/api/v1/ws',
        changeOrigin: true,
        ws: true,
        logLevel: 'debug'
    }));
    // proxy API to nginx
    server.get('/api/**', createProxyMiddleware({
        // @ts-ignore
        target: win.__env.NGINX_PROTOCOL + '://' + win.__env.NGINX_HOSTNAME + ':' + win.__env.NGINX_PORT,
        changeOrigin: true,
    }));
    server.get('/resources/**', express.static('./src'));
    // map / and /en to en-US
    var defaultLocale = 'en-US';
    console.log("serving default locale: ".concat(defaultLocale));
    var appServerModule = require("./dist/mempool/server/".concat(defaultLocale, "/main.js"));
    server.use('/', appServerModule.app(defaultLocale));
    server.use('/en', appServerModule.app(defaultLocale));
    // map each locale to its localized main.js
    getActiveLocales().forEach(function (locale) {
        console.log('serving locale:', locale);
        var appServerModule = require("./dist/mempool/server/".concat(locale, "/main.js"));
        // map everything to itself
        server.use("/".concat(locale), appServerModule.app(locale));
    });
    return server;
}
function run() {
    var port = process.env.PORT || 4000;
    // Start up the Node server
    app().listen(port, function () {
        console.log("Node Express server listening on port ".concat(port));
    });
}
run();

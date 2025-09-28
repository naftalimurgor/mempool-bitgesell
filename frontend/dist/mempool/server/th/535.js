"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 438:
/*!*******************************************************************************!*\
  !*** ./src/app/components/liquid-master-page/liquid-master-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiquidMasterPageComponent: () => (/* binding */ LiquidMasterPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/language.service */ 65745);
/* harmony import */ var _app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/enterprise.service */ 27384);
/* harmony import */ var _app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/navigation.service */ 55585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/search-form/search-form.component */ 49222);
/* harmony import */ var _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/svg-images/svg-images.component */ 43606);
/* harmony import */ var _app_shared_components_testnet_alert_testnet_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/testnet-alert/testnet-alert.component */ 772);
/* harmony import */ var _app_shared_components_global_footer_global_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/components/global-footer/global-footer.component */ 8912);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);














const _c0 = a0 => ({
  val: a0
});
const _c1 = a0 => [a0];
const _c2 = () => ({
  exact: true
});
const _c3 = () => ["/about"];
const _c4 = a0 => ({
  "opacity": a0
});
const _c5 = a0 => ({
  "dropdown-menu-right": a0
});
function LiquidMasterPageComponent_ng_container_0_ng_container_5_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function LiquidMasterPageComponent_ng_container_0_ng_container_5_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function LiquidMasterPageComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "svg", 25)(3, "g", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "path", 27)(5, "path", 28)(6, "path", 29)(7, "path", 30)(8, "path", 31)(9, "path", 32)(10, "path", 33)(11, "path", 34)(12, "path", 35)(13, "path", 36)(14, "path", 37)(15, "path", 38)(16, "path", 39)(17, "path", 40)(18, "path", 41)(19, "path", 42)(20, "path", 43)(21, "path", 44)(22, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "defs")(24, "linearGradient", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "stop", 47)(26, "stop", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "clipPath", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "rect", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, LiquidMasterPageComponent_ng_container_0_ng_container_5_div_30_Template, 2, 0, "div", 52)(31, LiquidMasterPageComponent_ng_container_0_ng_container_5_div_31_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const connectionState_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c4, connectionState_r2.val === 2 ? 1 : 0.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", connectionState_r2.val === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", connectionState_r2.val === 1);
  }
}
function LiquidMasterPageComponent_ng_container_0_div_7_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-svg-images", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Signet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r3.env.MEMPOOL_WEBSITE_URL + ctx_r3.urlLanguage + (ctx_r3.networkPaths["signet"] || "/signet"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function LiquidMasterPageComponent_ng_container_0_div_7_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-svg-images", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Testnet3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r3.env.MEMPOOL_WEBSITE_URL + ctx_r3.urlLanguage + (ctx_r3.networkPaths["testnet"] || "/testnet"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function LiquidMasterPageComponent_ng_container_0_div_7_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-svg-images", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Testnet4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r3.env.MEMPOOL_WEBSITE_URL + ctx_r3.urlLanguage + (ctx_r3.networkPaths["testnet4"] || "/testnet4"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function LiquidMasterPageComponent_ng_container_0_div_7_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-svg-images", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Liquid Testnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const network_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", network_r5.val === "liquidtestnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r3.networkPaths["liquidtestnet"] || "/testnet");
  }
}
function LiquidMasterPageComponent_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("resize", function LiquidMasterPageComponent_ng_container_0_div_7_Template_div_resize_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.onResize());
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-svg-images", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 57)(4, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-svg-images", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Mainnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LiquidMasterPageComponent_ng_container_0_div_7_a_7_Template, 3, 1, "a", 60)(8, LiquidMasterPageComponent_ng_container_0_div_7_a_8_Template, 3, 1, "a", 61)(9, LiquidMasterPageComponent_ng_container_0_div_7_a_9_Template, 3, 1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](11, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-svg-images", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Liquid");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, LiquidMasterPageComponent_ng_container_0_div_7_a_15_Template, 3, 3, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const network_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", network_r5.val === "" ? "liquid" : network_r5.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c5, ctx_r3.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r3.env.MEMPOOL_WEBSITE_URL + ctx_r3.urlLanguage + (ctx_r3.networkPaths["mainnet"] || ""), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.env.SIGNET_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.env.TESTNET_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.env.TESTNET4_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", network_r5.val === "liquid");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r3.networkPaths["liquid"] || "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.env.LIQUID_TESTNET_ENABLED);
  }
}
function LiquidMasterPageComponent_ng_container_0_app_testnet_alert_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-testnet-alert");
  }
}
function LiquidMasterPageComponent_ng_container_0_app_global_footer_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-global-footer");
  }
}
function LiquidMasterPageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "header", 4)(2, "nav", 5)(3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LiquidMasterPageComponent_ng_container_0_ng_container_5_Template, 32, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LiquidMasterPageComponent_ng_container_0_div_7_Template, 16, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8)(9, "ul")(10, "li", 9)(11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LiquidMasterPageComponent_ng_container_0_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-svg-images", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "li", 13)(16, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LiquidMasterPageComponent_ng_container_0_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-svg-images", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "li", 15)(21, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LiquidMasterPageComponent_ng_container_0_Template_a_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "app-svg-images", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "li", 17)(26, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LiquidMasterPageComponent_ng_container_0_Template_a_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "app-svg-images", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "li", 19)(31, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LiquidMasterPageComponent_ng_container_0_Template_a_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "app-svg-images", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "li", 21)(36, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LiquidMasterPageComponent_ng_container_0_Template_a_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "app-svg-images", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "app-search-form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("searchTriggered", function LiquidMasterPageComponent_ng_container_0_Template_app_search_form_searchTriggered_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, LiquidMasterPageComponent_ng_container_0_app_testnet_alert_40_Template, 1, 0, "app-testnet-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, LiquidMasterPageComponent_ng_container_0_app_global_footer_43_Template, 1, 0, "app-global-footer", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const network_r5 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](29, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 15, "/")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](31, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 17, ctx_r3.connectionState$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.env.TESTNET_ENABLED || ctx_r3.env.SIGNET_ENABLED || ctx_r3.env.LIQUID_ENABLED || ctx_r3.env.LIQUID_TESTNET_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("navbar-nav ", network_r5.val, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](33, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](34, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 19, "/")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](36, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 21, "/blocks")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](38, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 23, "/graphs")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](40, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 25, "/assets")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](42, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 27, "/docs")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](44, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", network_r5.val === "liquidtestnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.footerVisible);
  }
}
let LiquidMasterPageComponent = /*#__PURE__*/(() => {
  class LiquidMasterPageComponent {
    constructor(stateService, languageService, enterpriseService, navigationService) {
      this.stateService = stateService;
      this.languageService = languageService;
      this.enterpriseService = enterpriseService;
      this.navigationService = navigationService;
      this.navCollapsed = false;
      this.isMobile = window.innerWidth <= 767.98;
      this.officialMempoolSpace = this.stateService.env.OFFICIAL_MEMPOOL_SPACE;
      this.footerVisible = true;
    }
    ngOnInit() {
      this.env = this.stateService.env;
      this.connectionState$ = this.stateService.connectionState$;
      this.network$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(''), this.stateService.networkChanged$);
      this.urlLanguage = this.languageService.getLanguageForUrl();
      this.navigationService.subnetPaths.subscribe(paths => {
        this.networkPaths = paths;
        if (paths.liquid.indexOf('docs') > -1) {
          this.footerVisible = false;
        } else {
          this.footerVisible = true;
        }
      });
    }
    collapse() {
      this.navCollapsed = !this.navCollapsed;
    }
    onResize() {
      this.isMobile = window.innerWidth <= 767.98;
    }
    static #_ = this.ɵfac = function LiquidMasterPageComponent_Factory(t) {
      return new (t || LiquidMasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_2__.EnterpriseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: LiquidMasterPageComponent,
      selectors: [["app-liquid-master-page"]],
      decls: 2,
      vars: 5,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.offline
           */
          const MSG_EXTERNAL_313850810538580916$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_0 = goog.getMsg("Offline");
          i18n_0 = MSG_EXTERNAL_313850810538580916$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u0E2D\u0E2D\u0E1F\u0E44\u0E25\u0E19\u0E4C";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.reconnecting
           */
          const MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_1 = goog.getMsg("Reconnecting...");
          i18n_1 = MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_1;
        } else {
          i18n_1 = "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E43\u0E2B\u0E21\u0E48...";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.layer2-networks-header
           */
          const MSG_EXTERNAL_3561369438070472144$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_2 = goog.getMsg("Layer 2 Networks");
          i18n_2 = MSG_EXTERNAL_3561369438070472144$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u0E42\u0E04\u0E23\u0E07\u0E02\u0E48\u0E32\u0E22\u0E40\u0E25\u0E40\u0E22\u0E2D\u0E23\u0E4C 2";
        }
        return [i18n_0, i18n_1, i18n_2, [4, "ngIf"], [1, "sticky-header"], [1, "navbar", "navbar-expand-md", "navbar-dark"], [1, "navbar-brand", 2, "position", "relative", 3, "routerLink"], ["ngbDropdown", "", "class", "dropdown-container", 3, "resize", 4, "ngIf"], ["id", "navbarCollapse", 1, "navbar-collapse"], ["routerLinkActive", "active", "id", "btn-home", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "nav-link", 3, "click", "routerLink"], [1, "svg-wrapper"], ["name", "nav-tachometer", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-blocks", 1, "nav-item"], ["name", "nav-cubes", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-graphs", 1, "nav-item"], ["name", "nav-chart-area", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-assets", 1, "nav-item"], ["name", "nav-database", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-docs", 1, "nav-item"], ["name", "nav-book", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-about", 1, "nav-item"], ["name", "nav-info-circle", "width", "21.59", "height", "100%"], ["location", "top", 1, "search-form-container", 3, "searchTriggered"], [1, "logo", 3, "ngStyle"], ["width", "140", "viewBox", "0 0 500 126", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["d", "M123.794 110.244C123.794 118.781 116.911 125.672 108.384 125.672H15.4101C6.88316 125.672 0 118.781 0 110.244V17.164C0 8.62734 6.93453 1.73633 15.4101 1.73633H108.384C116.911 1.73633 123.794 8.62734 123.794 17.164V110.244Z", "fill", "#2E3349"], ["d", "M0 63.8574V110.243C0 118.78 6.93453 125.671 15.4614 125.671H108.384C116.911 125.671 123.846 118.78 123.846 110.243V63.8574H0Z", "fill", "url(#paint0_linear)"], ["opacity", "0.3", "d", "M109.108 109.109C109.108 111.011 107.824 112.554 106.231 112.554H90.2047C88.6123 112.554 87.3281 111.011 87.3281 109.109V18.2912C87.3281 16.3885 88.6123 14.8457 90.2047 14.8457H106.231C107.824 14.8457 109.108 16.3885 109.108 18.2912V109.109Z", "fill", "white"], ["d", "M155.766 58.4592H163.422V5.30273H155.766V58.4592Z", "fill", "white"], ["d", "M173.413 58.4592H181.07V18.1358H173.413V58.4592Z", "fill", "white"], ["d", "M230.874 18.1358H223.217V23.9206H223.047C220.07 19.582 214.455 17.115 209.011 17.115C196.505 17.115 188.509 26.3876 188.509 38.2975C188.509 50.3775 196.59 59.48 209.011 59.48C214.796 59.48 220.325 56.8428 223.047 52.6744H223.217V70.525H230.874V18.1358ZM209.947 24.2609C218.113 24.2609 223.217 30.1307 223.217 38.2975C223.217 46.4642 218.113 52.3341 209.947 52.3341C201.78 52.3341 196.676 46.4642 196.676 38.2975C196.676 30.1307 201.78 24.2609 209.947 24.2609Z", "fill", "white"], ["d", "M275.412 18.1358H267.755V38.893C267.755 48.2507 262.906 52.3341 256.526 52.3341C251.677 52.3341 247.338 49.5268 247.338 41.9555V18.1358H239.682V44.0823C239.682 54.8011 246.488 59.48 254.314 59.48C260.524 59.48 265.629 56.5025 267.585 52.249H267.755V58.4592H275.412V18.1358Z", "fill", "white"], ["d", "M284.759 58.4592H292.415V18.1358H284.759V58.4592Z", "fill", "white"], ["d", "M340.825 5.30273H333.168V23.9206H332.998C330.276 19.7521 324.746 17.115 318.962 17.115C306.541 17.115 298.46 26.2175 298.46 38.2975C298.46 50.2073 306.456 59.48 318.962 59.48C324.406 59.48 330.021 57.013 332.998 52.6744H333.168V58.4592H340.825V5.30273ZM319.897 52.3341C311.731 52.3341 306.626 46.4642 306.626 38.2975C306.626 30.1307 311.731 24.2609 319.897 24.2609C328.064 24.2609 333.168 30.1307 333.168 38.2975C333.168 46.4642 328.064 52.3341 319.897 52.3341Z", "fill", "white"], ["d", "M177.161 9.93971C174.634 9.93971 172.527 7.83338 172.527 5.30579C172.527 2.7782 174.634 0.671875 177.161 0.671875C179.689 0.671875 181.795 2.7782 181.795 5.30579C181.795 7.83338 179.689 9.93971 177.161 9.93971Z", "fill", "white"], ["d", "M155.771 115.885C153.243 115.885 151.137 113.779 151.137 111.251C151.137 108.724 153.243 106.617 155.771 106.617C158.298 106.617 160.405 108.724 160.405 111.251C160.405 113.779 158.298 115.885 155.771 115.885Z", "fill", "#2CCCBF"], ["d", "M288.384 9.93971C285.856 9.93971 283.75 7.83338 283.75 5.30579C283.75 2.7782 285.856 0.671875 288.384 0.671875C290.912 0.671875 293.018 2.7782 293.018 5.30579C293.018 7.83338 290.912 9.93971 288.384 9.93971Z", "fill", "white"], ["d", "M166.199 115.799H173.856V95.042C173.856 85.6843 178.705 81.6009 185.085 81.6009C189.934 81.6009 194.272 84.4082 194.272 91.9795V115.799H201.929V89.8527C201.929 79.1339 195.123 74.455 187.297 74.455C181.087 74.455 175.982 77.4325 174.026 81.686H173.856V75.4758H166.199V115.799Z", "fill", "#2CCCBF"], ["d", "M247.398 98.4448V95.7226C247.398 85.344 241.953 74.455 227.746 74.455C215.666 74.455 206.904 83.5575 206.904 95.6375C206.904 107.632 214.901 116.82 227.661 116.82C235.403 116.82 241.272 114.098 245.526 108.568L239.741 104.145C236.764 107.803 233.361 110.185 228.682 110.185C221.621 110.185 215.071 105.506 215.071 98.4448H247.398ZM215.071 92.3198C215.071 86.9604 220.005 80.5801 227.576 80.5801C235.318 80.5801 239.061 85.5992 239.231 92.3198H215.071Z", "fill", "#2CCCBF"], ["d", "M275.375 75.4758H264.401V64.1615H256.745V75.4758H247.897V82.1113H256.745V103.124C256.745 109.589 256.915 116.82 268.74 116.82C270.271 116.82 273.844 116.48 275.63 115.459V108.483C274.099 109.419 271.972 109.674 270.186 109.674C264.401 109.674 264.401 104.91 264.401 100.401V82.1113H275.375V75.4758Z", "fill", "#2CCCBF"], ["d", "M293.675 115.799H301.927L311.54 85.6843H311.71L322.344 115.799H330.085L343.101 75.4758H335.02L326.342 105.591H326.172L315.964 75.4758H307.882L298.269 105.591H298.099L288.996 75.4758H280.404L293.675 115.799Z", "fill", "#2CCCBF"], ["d", "M353.225 95.6375C353.225 87.4708 358.329 81.6009 366.496 81.6009C374.663 81.6009 379.767 87.4708 379.767 95.6375C379.767 103.804 374.663 109.674 366.496 109.674C358.329 109.674 353.225 103.804 353.225 95.6375ZM345.058 95.6375C345.058 107.377 354.501 116.82 366.496 116.82C378.491 116.82 387.933 107.377 387.933 95.6375C387.933 83.8978 378.491 74.455 366.496 74.455C354.501 74.455 345.058 83.8978 345.058 95.6375Z", "fill", "#2CCCBF"], ["d", "M394.736 115.799H402.392V95.5525C402.392 86.7051 406.476 82.6218 413.962 82.6218C415.153 82.6218 416.429 82.877 417.705 83.2172L418.045 74.9654C417.024 74.6251 415.833 74.455 414.642 74.455C409.623 74.455 404.519 77.4325 402.562 81.686H402.392V75.4758H394.736V115.799Z", "fill", "#2CCCBF"], ["d", "M423.433 115.799H431.089V94.8719L449.805 115.799H460.694L440.277 93.8511L459.077 75.5609H448.443L431.089 93.0003V58.459H423.433V115.799Z", "fill", "#2CCCBF"], ["id", "paint0_linear", "x1", "61.9228", "y1", "63.8574", "x2", "61.9228", "y2", "137.373", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#64DED2"], ["offset", "1", "stop-color", "white"], ["id", "clip0"], ["width", "500", "height", "125", "fill", "white", "transform", "translate(0 0.671875)"], [1, "connection-badge"], ["class", "badge badge-warning", 4, "ngIf"], [1, "badge", "badge-warning"], ["ngbDropdown", "", 1, "dropdown-container", 3, "resize"], ["ngbDropdownToggle", "", "type", "button", "aria-haspopup", "true", 1, "btn", "btn-secondary", "dropdown-toggle-split", "d-flex", "justify-content-center", "align-items-center"], ["width", "20", "height", "20", "viewBox", "0 0 125 125", 1, "d-flex", "justify-content-center", "align-items-center", "current-network-svg", 3, "name"], ["ngbDropdownMenu", "", 3, "ngClass"], ["ngbDropdownItem", "", 1, "mainnet", 3, "href"], ["name", "bitcoin", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", "class", "signet", 3, "href", 4, "ngIf"], ["ngbDropdownItem", "", "class", "testnet", 3, "href", 4, "ngIf"], [1, "dropdown-header"], ["ngbDropdownItem", "", 1, "liquid", "mr-1", 3, "routerLink"], ["name", "liquid", "width", "22", "height", "22", "viewBox", "0 0 125 125", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", "class", "liquidtestnet", 3, "active", "routerLink", 4, "ngIf"], ["ngbDropdownItem", "", 1, "signet", 3, "href"], ["name", "signet", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", 1, "testnet", 3, "href"], ["name", "testnet", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["name", "testnet4", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", 1, "liquidtestnet", 3, "routerLink"], ["name", "liquidtestnet", "width", "22", "height", "22", "viewBox", "0 0 125 125", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"]];
      },
      template: function LiquidMasterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, LiquidMasterPageComponent_ng_container_0_Template, 44, 45, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.network$)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownItem, _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__.SearchFormComponent, _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_5__.SvgImagesComponent, _app_shared_components_testnet_alert_testnet_alert_component__WEBPACK_IMPORTED_MODULE_6__.TestnetAlertComponent, _app_shared_components_global_footer_global_footer_component__WEBPACK_IMPORTED_MODULE_7__.GlobalFooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__.RelativeUrlPipe],
      styles: [".sticky-header[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  background-color: var(--bg);\n}\n\nli.nav-item.active[_ngcontent-%COMP%] {\n  background-color: var(--tertiary);\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  font-size: 1.66em;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  z-index: 100;\n  min-height: 64px;\n  background-color: var(--nav-bg);\n}\n\nli.nav-item[_ngcontent-%COMP%] {\n  margin: auto 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-content: center;\n}\nli.nav-item[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  height: 19.2px;\n  width: auto;\n  margin-bottom: 8px;\n}\n@media (max-width: 991px) {\n  li.nav-item[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  li.nav-item[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n    height: 25.6px;\n    width: auto;\n    margin-bottom: 0;\n  }\n  li.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 12px 0;\n  }\n}\n@media (max-width: 429px) {\n  li.nav-item[_ngcontent-%COMP%] {\n    margin: auto 2px;\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0rem 2rem;\n  }\n  fa-icon[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .dropdown-container[_ngcontent-%COMP%] {\n    margin-right: 16px;\n  }\n  li.nav-item[_ngcontent-%COMP%] {\n    margin: auto 0px;\n    padding: 10px;\n  }\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  background: var(--nav-bg);\n  bottom: 0;\n  box-shadow: 0px 0px 15px 0px #000;\n  flex-direction: row;\n  left: 0;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%;\n}\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n}\n@media (min-width: 992px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    background: transparent;\n    box-shadow: none;\n    position: relative;\n    width: auto;\n  }\n}\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n@media (min-width: 375px) {\n  .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  flex-basis: auto;\n  justify-content: flex-end;\n}\n\n@media (min-width: 992px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n@media (min-width: 576px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    width: 130px;\n  }\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\nnav[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 15px 0px #000;\n}\n\n.connection-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 13px;\n  left: 0px;\n  width: 130px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: table;\n}\n\n.mainnet.active[_ngcontent-%COMP%] {\n  background-color: var(--tertiary);\n}\n\n.liquid.active[_ngcontent-%COMP%] {\n  background-color: var(--liquid);\n}\n\n.liquidtestnet.active[_ngcontent-%COMP%] {\n  background-color: var(--liquidtestnet);\n}\n\n.testnet.active[_ngcontent-%COMP%] {\n  background-color: var(--testnet);\n}\n\n.signet.active[_ngcontent-%COMP%] {\n  background-color: var(--signet);\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #121420;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  vertical-align: 0.1em;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media (min-width: 992px) {\n  .search-form-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 500px;\n    padding-left: 15px;\n  }\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--icon);\n}\n\n.current-network-svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.rtl-layout[_nghost-%COMP%]   .current-network-svg[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .current-network-svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 5px;\n  margin-right: 0px;\n}\n\n.beta-network[_ngcontent-%COMP%] {\n  font-size: 8px;\n}"]
    });
  }
  return LiquidMasterPageComponent;
})();

/***/ }),

/***/ 16977:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/liquid-reserves-audit/federation-addresses-list/federation-addresses-list.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FederationAddressesListComponent: () => (/* binding */ FederationAddressesListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/websocket.service */ 48246);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);










const _c0 = (a0, a1) => ({
  "widget": a0,
  "extra-margin-right": a1
});
const _c1 = a0 => ({
  "widget": a0
});
function FederationAddressesListComponent_tbody_9_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 17)(2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-truncate", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-amount", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const address_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx_r1.env.MEMPOOL_WEBSITE_URL + "/address/" + address_r1.bitcoinaddress, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", address_r1.bitcoinaddress)("lastChars", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("satoshis", +address_r1.balance)("noFiat", true)("forceBtc", true);
  }
}
function FederationAddressesListComponent_tbody_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FederationAddressesListComponent_tbody_9_ng_container_1_tr_1_Template, 6, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const addresses_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, addresses_r3, 0, 5));
  }
}
function FederationAddressesListComponent_tbody_9_ng_template_2_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 22)(2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-truncate", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-amount", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const address_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx_r1.env.MEMPOOL_WEBSITE_URL + "/address/" + address_r4.bitcoinaddress, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", address_r4.bitcoinaddress)("lastChars", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("satoshis", +address_r4.balance)("noFiat", true)("forceBtc", true);
  }
}
function FederationAddressesListComponent_tbody_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FederationAddressesListComponent_tbody_9_ng_template_2_tr_0_Template, 6, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "slice");
  }
  if (rf & 2) {
    const addresses_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](1, 1, addresses_r3, (ctx_r1.page - 1) * ctx_r1.pageSize, ctx_r1.page * ctx_r1.pageSize));
  }
}
function FederationAddressesListComponent_tbody_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FederationAddressesListComponent_tbody_9_ng_container_1_Template, 3, 5, "ng-container", 15)(2, FederationAddressesListComponent_tbody_9_ng_template_2_Template, 2, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const regularRows_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](ctx_r1.isLoading ? "opacity: 0.75" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.widget)("ngIfElse", regularRows_r5);
  }
}
function FederationAddressesListComponent_ng_template_11_tbody_0_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FederationAddressesListComponent_ng_template_11_tbody_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FederationAddressesListComponent_ng_template_11_tbody_0_tr_1_Template, 5, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.skeletonLines);
  }
}
function FederationAddressesListComponent_ng_template_11_ng_template_1_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FederationAddressesListComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FederationAddressesListComponent_ng_template_11_ng_template_1_tr_0_Template, 5, 0, "tr", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.skeletonLines);
  }
}
function FederationAddressesListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FederationAddressesListComponent_ng_template_11_tbody_0_Template, 2, 1, "tbody", 15)(1, FederationAddressesListComponent_ng_template_11_ng_template_1_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const regularRowsSkeleton_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.widget)("ngIfElse", regularRowsSkeleton_r6);
  }
}
function FederationAddressesListComponent_ngb_pagination_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngb-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("pageChange", function FederationAddressesListComponent_ngb_pagination_13_Template_ngb_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.page, $event) || (ctx_r1.page = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function FederationAddressesListComponent_ngb_pagination_13_Template_ngb_pagination_pageChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.pageChange(ctx_r1.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const addresses_r8 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.isLoading ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", addresses_r8.length)("rotate", true)("maxSize", ctx_r1.maxSize)("pageSize", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("page", ctx_r1.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boundaryLinks", true)("ellipses", false);
  }
}
function FederationAddressesListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 6)(1, "br");
  }
}
let FederationAddressesListComponent = /*#__PURE__*/(() => {
  class FederationAddressesListComponent {
    constructor(apiService, stateService, websocketService) {
      this.apiService = apiService;
      this.stateService = stateService;
      this.websocketService = websocketService;
      this.widget = false;
      this.isLoading = true;
      this.page = 1;
      this.pageSize = 15;
      this.maxSize = window.innerWidth <= 767.98 ? 3 : 5;
      this.skeletonLines = [];
      this.lastReservesBlockUpdate = 0;
      this.lastPegBlockUpdate = 0;
      this.lastPegAmount = '';
      this.isLoad = true;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
      this.isLoading = !this.widget;
      this.env = this.stateService.env;
      this.skeletonLines = this.widget === true ? [...Array(5).keys()] : [...Array(15).keys()];
      if (!this.widget) {
        this.websocketService.want(['blocks']);
        this.auditStatus$ = this.stateService.blocks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.throttleTime)(40000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delayWhen)(_ => this.isLoad ? (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(0) : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(2000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isLoad = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.apiService.federationAuditSynced$()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
        this.currentPeg$ = this.auditStatus$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(auditStatus => auditStatus.isAuditSynced === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(_ => this.apiService.liquidPegs$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(currentPegs => currentPegs.lastBlockUpdate >= this.lastPegBlockUpdate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(currentPegs => {
          this.lastPegBlockUpdate = currentPegs.lastBlockUpdate;
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
        this.auditUpdated$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.auditStatus$, this.currentPeg$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([auditStatus, _]) => auditStatus.isAuditSynced === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([auditStatus, currentPeg]) => ({
          lastBlockAudit: auditStatus.lastBlockAudit,
          currentPegAmount: currentPeg.amount
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({
          lastBlockAudit,
          currentPegAmount
        }) => {
          const blockAuditCheck = lastBlockAudit > this.lastReservesBlockUpdate;
          const amountCheck = currentPegAmount !== this.lastPegAmount;
          this.lastReservesBlockUpdate = lastBlockAudit;
          this.lastPegAmount = currentPegAmount;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(blockAuditCheck || amountCheck);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
        this.federationAddresses$ = this.auditUpdated$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(auditUpdated => auditUpdated === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.throttleTime)(40000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(_ => this.apiService.federationAddresses$()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(_ => this.isLoading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
      }
    }
    ngOnDestroy() {
      this.destroy$.next(1);
      this.destroy$.complete();
    }
    pageChange(page) {
      this.page = page;
    }
    static #_ = this.ɵfac = function FederationAddressesListComponent_Factory(t) {
      return new (t || FederationAddressesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FederationAddressesListComponent,
      selectors: [["app-federation-addresses-list"]],
      inputs: {
        widget: "widget",
        federationAddresses$: "federationAddresses$"
      },
      decls: 16,
      vars: 18,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.address
           */
          const MSG_EXTERNAL_6304432362546770951$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_ADDRESSES_LIST_FEDERATION_ADDRESSES_LIST_COMPONENT_TS_0 = goog.getMsg("Address");
          i18n_0 = MSG_EXTERNAL_6304432362546770951$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_ADDRESSES_LIST_FEDERATION_ADDRESSES_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u0E41\u0E2D\u0E14\u0E40\u0E14\u0E23\u0E2A";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc address.balance
           */
          const MSG_EXTERNAL_6888797559367695264$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_ADDRESSES_LIST_FEDERATION_ADDRESSES_LIST_COMPONENT_TS_1 = goog.getMsg("Balance");
          i18n_1 = MSG_EXTERNAL_6888797559367695264$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_ADDRESSES_LIST_FEDERATION_ADDRESSES_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D";
        }
        return [["skeleton", ""], ["regularRows", ""], ["regularRowsSkeleton", ""], i18n_0, i18n_1, [3, "ngClass"], [1, "clearfix"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [2, "vertical-align", "middle"], [1, "address", "text-left", 3, "ngClass"], [1, "amount", "text-right", 3, "ngClass"], [3, "style", 4, "ngIf", "ngIfElse"], ["class", "pagination-container float-right mt-2", 3, "class", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses", "pageChange", 4, "ngIf"], [3, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "address", "text-left", "widget"], ["target", "_blank", 2, "color", "var(--orange)", 3, "href"], [3, "text", "lastChars"], [1, "amount", "text-right", "widget"], [3, "satoshis", "noFiat", "forceBtc"], [1, "address", "text-left"], [1, "amount", "text-right"], [1, "skeleton-loader", 2, "max-width", "400px"], [1, "skeleton-loader", 2, "max-width", "350px"], [1, "skeleton-loader", 2, "max-width", "600px"], [1, "pagination-container", "float-right", "mt-2", 3, "pageChange", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses"]];
      },
      template: function FederationAddressesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7)(3, "table", 8)(4, "thead", 9)(5, "th", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](6, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](8, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, FederationAddressesListComponent_tbody_9_Template, 4, 4, "tbody", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FederationAddressesListComponent_ng_template_11_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FederationAddressesListComponent_ngb_pagination_13_Template, 1, 9, "ngb-pagination", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FederationAddressesListComponent_ng_template_15_Template, 2, 0, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const skeleton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c0, ctx.widget, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c1, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c1, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 7, ctx.federationAddresses$))("ngIfElse", skeleton_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 9, !ctx.widget && ctx.federationAddresses$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.widget);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__.AmountComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_4__.TruncateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe],
      styles: [".spinner-border[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  margin-top: 13px;\n}\n\n@media (max-width: 380px) {\n  .extra-margin-right[_ngcontent-%COMP%] {\n    margin-left: -10px;\n  }\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 0.65rem;\n  padding-bottom: 0.6rem;\n  padding-right: 2rem;\n}\n.widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n@media (max-width: 510px) {\n  .widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%] {\n    padding-right: 0.5rem;\n  }\n}\n\n.clear-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.progress[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n\n.address[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n\n.address.widget[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.amount[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.amount.widget[_ngcontent-%COMP%] {\n  width: 40%;\n}"],
      changeDetection: 0
    });
  }
  return FederationAddressesListComponent;
})();

/***/ }),

/***/ 14569:
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/liquid-reserves-audit/federation-utxos-list/federation-utxos-list.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FederationUtxosListComponent: () => (/* binding */ FederationUtxosListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/websocket.service */ 48246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_time_time_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/time/time.component */ 5214);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);














const _c0 = a0 => ({
  "widget": a0
});
const _c1 = a0 => ({
  "color": a0
});
const _c2 = (a0, a1) => [a0, a1];
function FederationUtxosListComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FederationUtxosListComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FederationUtxosListComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FederationUtxosListComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FederationUtxosListComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FederationUtxosListComponent_tbody_16_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 35)(2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-truncate", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-amount", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-time", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const utxo_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r1.env.MEMPOOL_WEBSITE_URL + "/tx/" + utxo_r1.txid + ":" + utxo_r1.txindex, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", utxo_r1.txid + ":" + utxo_r1.txindex)("lastChars", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("satoshis", utxo_r1.amount)("noFiat", true)("forceBtc", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("time", utxo_r1.blocktime)("showTooltip", true);
  }
}
function FederationUtxosListComponent_tbody_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FederationUtxosListComponent_tbody_16_ng_container_1_tr_1_Template, 8, 8, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const utxos_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](2, 1, utxos_r3, 0, 6));
  }
}
function FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-truncate", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const utxo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 4, "/tx"), utxo_r4.pegtxid))("fragment", "vin=" + utxo_r4.pegindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", utxo_r4.pegtxid + ":" + utxo_r4.pegindex)("lastChars", 6);
  }
}
function FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i")(1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_td_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " \u2714 ");
  }
}
function FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_td_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " \u2796 ");
  }
}
function FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_td_19_Conditional_1_Template, 1, 0)(2, FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_td_19_Conditional_2_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const utxo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, !utxo_r4.isDust ? "var(--red)" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, utxo_r4.isDust ? 1 : 2);
  }
}
function FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 42)(2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-truncate", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td", 29)(5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-truncate", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-amount", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_ng_container_10_Template, 4, 9, "ng-container", 33)(11, FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_ng_template_11_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-timestamp", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](18, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_td_19_Template, 3, 4, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const utxo_r4 = ctx.$implicit;
    const noPeginMessage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r1.env.MEMPOOL_WEBSITE_URL + "/tx/" + utxo_r4.txid + ":" + utxo_r4.txindex, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", utxo_r4.txid + ":" + utxo_r4.txindex)("lastChars", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r1.env.MEMPOOL_WEBSITE_URL + "/address/" + utxo_r4.bitcoinaddress, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", utxo_r4.bitcoinaddress)("lastChars", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("satoshis", utxo_r4.amount)("noFiat", true)("forceBtc", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", utxo_r4.pegtxid)("ngIfElse", noPeginMessage_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customFormat", "yyyy-MM-dd HH:mm")("unixTime", utxo_r4.blocktime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, ctx_r1.getGradientColor(utxo_r4.blocknumber + utxo_r4.timelock - ctx_r1.lastReservesBlockUpdate)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", utxo_r4.blocknumber + utxo_r4.timelock - ctx_r1.lastReservesBlockUpdate < 0 ? -(utxo_r4.blocknumber + utxo_r4.timelock - ctx_r1.lastReservesBlockUpdate) : utxo_r4.blocknumber + utxo_r4.timelock - ctx_r1.lastReservesBlockUpdate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.widget && ctx_r1.showExpiredUtxos === true);
  }
}
function FederationUtxosListComponent_tbody_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FederationUtxosListComponent_tbody_16_ng_template_2_tr_0_Template, 20, 18, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "slice");
  }
  if (rf & 2) {
    const utxos_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](1, 1, utxos_r3, (ctx_r1.page - 1) * ctx_r1.pageSize, ctx_r1.page * ctx_r1.pageSize));
  }
}
function FederationUtxosListComponent_tbody_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FederationUtxosListComponent_tbody_16_ng_container_1_Template, 3, 5, "ng-container", 33)(2, FederationUtxosListComponent_tbody_16_ng_template_2_Template, 2, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const regularRows_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](ctx_r1.isLoading ? "opacity: 0.75" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.widget)("ngIfElse", regularRows_r6);
  }
}
function FederationUtxosListComponent_ng_template_18_tbody_0_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function FederationUtxosListComponent_ng_template_18_tbody_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FederationUtxosListComponent_ng_template_18_tbody_0_tr_1_Template, 7, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.skeletonLines);
  }
}
function FederationUtxosListComponent_ng_template_18_ng_template_1_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function FederationUtxosListComponent_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FederationUtxosListComponent_ng_template_18_ng_template_1_tr_0_Template, 13, 0, "tr", 34);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.skeletonLines);
  }
}
function FederationUtxosListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FederationUtxosListComponent_ng_template_18_tbody_0_Template, 2, 1, "tbody", 33)(1, FederationUtxosListComponent_ng_template_18_ng_template_1_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const regularRowsSkeleton_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.widget)("ngIfElse", regularRowsSkeleton_r7);
  }
}
function FederationUtxosListComponent_ngb_pagination_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngb-pagination", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("pageChange", function FederationUtxosListComponent_ngb_pagination_20_Template_ngb_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.page, $event) || (ctx_r1.page = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function FederationUtxosListComponent_ngb_pagination_20_Template_ngb_pagination_pageChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.pageChange(ctx_r1.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const utxos_r9 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r1.isLoading ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", utxos_r9.length)("rotate", true)("maxSize", ctx_r1.maxSize)("pageSize", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("page", ctx_r1.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("boundaryLinks", true)("ellipses", false);
  }
}
function FederationUtxosListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 15)(1, "br");
  }
}
let FederationUtxosListComponent = /*#__PURE__*/(() => {
  class FederationUtxosListComponent {
    constructor(apiService, stateService, websocketService, route, router) {
      this.apiService = apiService;
      this.stateService = stateService;
      this.websocketService = websocketService;
      this.route = route;
      this.router = router;
      this.widget = false;
      this.isLoading = true;
      this.page = 1;
      this.pageSize = 15;
      this.maxSize = window.innerWidth <= 767.98 ? 3 : 5;
      this.skeletonLines = [];
      this.showExpiredUtxos = false;
      this.showExpiredUtxosToggleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(this.showExpiredUtxos);
      this.showExpiredUtxosToggle$ = this.showExpiredUtxosToggleSubject.asObservable();
      this.lastReservesBlockUpdate = 0;
      this.lastPegBlockUpdate = 0;
      this.lastPegAmount = '';
      this.isLoad = true;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    }
    ngOnInit() {
      this.isLoading = !this.widget;
      this.env = this.stateService.env;
      this.skeletonLines = this.widget === true ? [...Array(6).keys()] : [...Array(15).keys()];
      if (!this.widget) {
        this.route.fragment.subscribe(fragment => {
          this.showExpiredUtxosToggleSubject.next(['expired'].indexOf(fragment) > -1);
        });
        this.websocketService.want(['blocks']);
        this.auditStatus$ = this.stateService.blocks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.throttleTime)(40000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.delayWhen)(_ => this.isLoad ? (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(0) : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(2000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoad = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.apiService.federationAuditSynced$()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
        this.currentPeg$ = this.auditStatus$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(auditStatus => auditStatus.isAuditSynced === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(_ => this.apiService.liquidPegs$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(currentPegs => currentPegs.lastBlockUpdate >= this.lastPegBlockUpdate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(currentPegs => {
          this.lastPegBlockUpdate = currentPegs.lastBlockUpdate;
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
        this.auditUpdated$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.auditStatus$, this.currentPeg$, this.showExpiredUtxosToggle$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([auditStatus, _, __]) => auditStatus.isAuditSynced === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([auditStatus, currentPeg, showExpiredUtxos]) => ({
          lastBlockAudit: auditStatus.lastBlockAudit,
          currentPegAmount: currentPeg.amount,
          showExpiredUtxos: showExpiredUtxos
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(({
          lastBlockAudit,
          currentPegAmount,
          showExpiredUtxos
        }) => {
          const blockAuditCheck = lastBlockAudit > this.lastReservesBlockUpdate;
          const amountCheck = currentPegAmount !== this.lastPegAmount;
          const expiredCheck = showExpiredUtxos !== this.showExpiredUtxos;
          this.lastReservesBlockUpdate = lastBlockAudit;
          this.lastPegAmount = currentPegAmount;
          this.showExpiredUtxos = showExpiredUtxos;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(blockAuditCheck || amountCheck || expiredCheck);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
        this.federationUtxos$ = this.auditUpdated$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(auditUpdated => auditUpdated === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(_ => this.showExpiredUtxos ? this.apiService.expiredUtxos$() : this.apiService.federationUtxos$()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.isLoading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
      }
    }
    ngOnDestroy() {
      this.destroy$.next(1);
      this.destroy$.complete();
    }
    pageChange(page) {
      this.page = page;
    }
    getGradientColor(value) {
      const distanceToGreen = Math.abs(4032 - value);
      const green = '#3bcc49';
      const red = '#dc3545';
      if (value < 0) {
        return red;
      } else if (value >= 4032) {
        return green;
      } else {
        const scaleFactor = 1 - distanceToGreen / 4032;
        const r = parseInt(red.slice(1, 3), 16);
        const g = parseInt(green.slice(1, 3), 16);
        const b = parseInt(red.slice(5, 7), 16);
        const newR = Math.floor(r + (g - r) * scaleFactor);
        const newG = Math.floor(g - (g - r) * scaleFactor);
        const newB = b;
        return '#' + this.componentToHex(newR) + this.componentToHex(newG) + this.componentToHex(newB);
      }
    }
    componentToHex(c) {
      const hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }
    static #_ = this.ɵfac = function FederationUtxosListComponent_Factory(t) {
      return new (t || FederationUtxosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: FederationUtxosListComponent,
      selectors: [["app-federation-utxos-list"]],
      inputs: {
        widget: "widget",
        federationUtxos$: "federationUtxos$"
      },
      decls: 23,
      vars: 25,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc transaction.output
           */
          const MSG_EXTERNAL_8968030053137661433$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_0 = goog.getMsg("Output");
          i18n_0 = MSG_EXTERNAL_8968030053137661433$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u0E40\u0E2D\u0E32\u0E15\u0E4C\u0E1E\u0E38\u0E15";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.amount
           */
          const MSG_EXTERNAL_6533918067030990396$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_1 = goog.getMsg("Amount");
          i18n_1 = MSG_EXTERNAL_6533918067030990396$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "\u0E08\u0E33\u0E19\u0E27\u0E19";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.date
           */
          const MSG_EXTERNAL_3973931101896534797$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_2 = goog.getMsg("Date");
          i18n_2 = MSG_EXTERNAL_3973931101896534797$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.address
           */
          const MSG_EXTERNAL_6304432362546770951$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_3 = goog.getMsg("Address");
          i18n_3 = MSG_EXTERNAL_6304432362546770951$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_3;
        } else {
          i18n_3 = "\u0E41\u0E2D\u0E14\u0E40\u0E14\u0E23\u0E2A";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.related-peg-in
           */
          const MSG_EXTERNAL_914530987994674468$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_4 = goog.getMsg("Related Peg-In");
          i18n_4 = MSG_EXTERNAL_914530987994674468$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_4;
        } else {
          i18n_4 = "Related Peg-In";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.expires-in
           */
          const MSG_EXTERNAL_4230599882607893875$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_5 = goog.getMsg("Expires in");
          i18n_5 = MSG_EXTERNAL_4230599882607893875$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_5;
        } else {
          i18n_5 = "\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E20\u0E32\u0E22\u0E43\u0E19";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.expired-since
           */
          const MSG_EXTERNAL_2607619630227492289$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_6 = goog.getMsg("Expired since");
          i18n_6 = MSG_EXTERNAL_2607619630227492289$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_6;
        } else {
          i18n_6 = "\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E15\u0E31\u0E07\u0E41\u0E15\u0E48";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.dust
           */
          const MSG_EXTERNAL_1758060540708591492$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_7 = goog.getMsg("Dust");
          i18n_7 = MSG_EXTERNAL_1758060540708591492$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_7;
        } else {
          i18n_7 = "\u0E1D\u0E38\u0E48\u0E19";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.blocks
           */
          const MSG_EXTERNAL_159830827260771321$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_8 = goog.getMsg("blocks");
          i18n_8 = MSG_EXTERNAL_159830827260771321$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_8;
        } else {
          i18n_8 = "\u0E1A\u0E25\u0E47\u0E2D\u0E01";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.change-output
           */
          const MSG_EXTERNAL_5187346058705509976$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_9 = goog.getMsg("Change output");
          i18n_9 = MSG_EXTERNAL_5187346058705509976$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_UTXOS_LIST_FEDERATION_UTXOS_LIST_COMPONENT_TS_9;
        } else {
          i18n_9 = "Change output";
        }
        return [["skeleton", ""], ["regularRows", ""], ["noPeginMessage", ""], ["regularRowsSkeleton", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, [3, "ngClass"], [1, "clearfix"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [2, "vertical-align", "middle"], [1, "txid", "text-left", 3, "ngClass"], ["class", "address text-left", 4, "ngIf"], [1, "amount", "text-right", 3, "ngClass"], ["class", "pegin text-left", 4, "ngIf"], [1, "timestamp", "text-left", 3, "ngClass"], ["class", "expires-in text-left", 4, "ngIf"], ["class", "is-dust text-right", 4, "ngIf"], [3, "style", 4, "ngIf", "ngIfElse"], ["class", "pagination-container float-right mt-2", 3, "class", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses", "pageChange", 4, "ngIf"], [3, "ngIf"], [1, "address", "text-left"], [1, "pegin", "text-left"], [1, "expires-in", "text-left"], [1, "is-dust", "text-right"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "txid", "text-left", "widget"], ["target", "_blank", 2, "color", "var(--orange)", 3, "href"], [3, "text", "lastChars"], [1, "amount", "text-right", "widget"], [3, "satoshis", "noFiat", "forceBtc"], [1, "timestamp", "text-left", "widget"], ["kind", "since", 3, "time", "showTooltip"], [1, "txid", "text-left"], [1, "amount", "text-right"], [1, "timestamp", "text-left"], [3, "customFormat", "unixTime"], [1, "expires-in", "text-left", 3, "ngStyle"], [1, "symbol"], ["class", "is-dust text-right", 3, "ngStyle", 4, "ngIf"], [3, "routerLink", "fragment"], [1, "text-muted"], [1, "is-dust", "text-right", 3, "ngStyle"], [1, "skeleton-loader", 2, "max-width", "400px"], [1, "skeleton-loader", 2, "max-width", "300px"], [1, "skeleton-loader", 2, "max-width", "140px"], [1, "pagination-container", "float-right", "mt-2", 3, "pageChange", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses"]];
      },
      template: function FederationUtxosListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 16)(3, "table", 17)(4, "thead", 18)(5, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](6, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, FederationUtxosListComponent_th_7_Template, 2, 0, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](9, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FederationUtxosListComponent_th_10_Template, 2, 0, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](12, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, FederationUtxosListComponent_th_13_Template, 2, 0, "th", 24)(14, FederationUtxosListComponent_th_14_Template, 2, 0, "th", 24)(15, FederationUtxosListComponent_th_15_Template, 2, 0, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, FederationUtxosListComponent_tbody_16_Template, 4, 4, "tbody", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, FederationUtxosListComponent_ng_template_18_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, FederationUtxosListComponent_ngb_pagination_20_Template, 1, 9, "ngb-pagination", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, FederationUtxosListComponent_ng_template_22_Template, 2, 0, "ng-template", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const skeleton_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](17, _c0, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c0, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c0, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c0, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget && ctx.showExpiredUtxos === false);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget && ctx.showExpiredUtxos === true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget && ctx.showExpiredUtxos === true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 13, ctx.federationUtxos$))("ngIfElse", skeleton_r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 15, !ctx.widget && ctx.federationUtxos$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination, _components_time_time_component__WEBPACK_IMPORTED_MODULE_3__.TimeComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__.AmountComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_5__.TruncateComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_6__.TimestampComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.SlicePipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__.RelativeUrlPipe],
      styles: [".spinner-border[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  margin-top: 13px;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 0.65rem !important;\n  padding-bottom: 0.6rem !important;\n  padding-right: 2rem !important;\n}\ntr[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  padding-right: 1rem !important;\n}\n\n.clear-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.progress[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n\n.txid[_ngcontent-%COMP%] {\n  width: 25%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n\n.txid.widget[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.address[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 527px) {\n  .address[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.amount[_ngcontent-%COMP%] {\n  width: 12%;\n}\n\n.amount.widget[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pegin[_ngcontent-%COMP%] {\n  width: 25%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 872px) {\n  .pegin[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  width: 18%;\n}\n@media (max-width: 800px) {\n  .timestamp[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1190px) {\n  .timestamp[_ngcontent-%COMP%]   .relative-time[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.timestamp.widget[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 768px) and (max-width: 1050px) {\n  .timestamp.widget[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .timestamp.widget[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 500px) {\n  .timestamp.widget[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 987px) {\n  .expires-in[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 1090px) {\n  .is-dust[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"],
      changeDetection: 0
    });
  }
  return FederationUtxosListComponent;
})();

/***/ }),

/***/ 3885:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/liquid-reserves-audit/federation-wallet/federation-wallet.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FederationWalletComponent: () => (/* binding */ FederationWalletComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);




const _c0 = a0 => [a0];
const _c1 = a0 => ({
  matrixParams: "ignored",
  queryParams: "ignored",
  paths: "exact",
  fragment: a0
});
const _c2 = () => ({
  matrixParams: "ignored",
  queryParams: "ignored",
  paths: "exact",
  fragment: "exact"
});
let FederationWalletComponent = /*#__PURE__*/(() => {
  class FederationWalletComponent {
    constructor(seoService) {
      this.seoService = seoService;
      this.seoService.setTitle("Liquid Federation Wallet");
    }
    ngOnInit() {}
    isExpiredFragment() {
      return location.hash === '#expired';
    }
    static #_ = this.ɵfac = function FederationWalletComponent_Factory(t) {
      return new (t || FederationWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FederationWalletComponent,
      selectors: [["app-federation-wallet"]],
      decls: 23,
      vars: 21,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.federation-wallet
           */
          const MSG_EXTERNAL_7559374750093789210$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_WALLET_FEDERATION_WALLET_COMPONENT_TS_0 = goog.getMsg("Liquid Federation Wallet");
          i18n_0 = MSG_EXTERNAL_7559374750093789210$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_WALLET_FEDERATION_WALLET_COMPONENT_TS_0;
        } else {
          i18n_0 = "Liquid Federation Wallet";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.timelock-expired-utxos
           */
          const MSG_EXTERNAL_6389404781526180218$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_WALLET_FEDERATION_WALLET_COMPONENT_TS_1 = goog.getMsg("Timelock-Expired UTXOs");
          i18n_1 = MSG_EXTERNAL_6389404781526180218$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_WALLET_FEDERATION_WALLET_COMPONENT_TS_1;
        } else {
          i18n_1 = "Timelock-Expired UTXOs";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.addresses
           */
          const MSG_EXTERNAL_5159814115056353668$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_WALLET_FEDERATION_WALLET_COMPONENT_TS_2 = goog.getMsg("Addresses");
          i18n_2 = MSG_EXTERNAL_5159814115056353668$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_FEDERATION_WALLET_FEDERATION_WALLET_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u0E41\u0E2D\u0E14\u0E40\u0E14\u0E23\u0E2A";
        }
        return [i18n_0, i18n_1, i18n_2, [1, "container-xl", 2, "max-width", "1400px"], [1, "nav-container"], [1, "nav", "nav-pills"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "fragment", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "clearfix"]];
      },
      template: function FederationWalletComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div")(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "UTXOs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 6)(11, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](14, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 6)(16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](19, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 10)(21, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, "/audit/wallet/utxos")))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, ctx.isExpiredFragment() ? "exact" : "ignored"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, "/audit/wallet/utxos")))("fragment", "expired")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 10, "/audit/wallet/addresses")));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_1__.RelativeUrlPipe],
      styles: ["ul[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n@media (max-width: 767.98px) {\n  .nav-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: auto;\n  }\n}\n@media (max-width: 436px) {\n  .nav-link[_ngcontent-%COMP%] {\n    padding: 0.8rem 0.8rem;\n    font-size: 0.8rem;\n  }\n}"]
    });
  }
  return FederationWalletComponent;
})();

/***/ }),

/***/ 66283:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/liquid-reserves-audit/recent-pegs-list/recent-pegs-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentPegsListComponent: () => (/* binding */ RecentPegsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/websocket.service */ 48246);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_time_time_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/time/time.component */ 5214);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
















const _c0 = (a0, a1) => ({
  "container-xl": a0,
  "widget": a1
});
const _c1 = a0 => ({
  "widget": a0
});
const _c2 = (a0, a1, a2) => ({
  "credit": a0,
  "debit": a1,
  "glow-effect": a2
});
const _c3 = (a0, a1) => [a0, a1];
function RecentPegsListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function RecentPegsListComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RecentPegsListComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RecentPegsListComponent_tbody_14_ng_container_1_tr_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-truncate", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const peg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 3, "/tx"), peg_r1.txid))("fragment", "vin=" + peg_r1.txindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", peg_r1.txid);
  }
}
function RecentPegsListComponent_tbody_14_ng_container_1_tr_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-truncate", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const peg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 3, "/tx"), peg_r1.txid))("fragment", "vout=" + peg_r1.txindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", peg_r1.txid);
  }
}
function RecentPegsListComponent_tbody_14_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RecentPegsListComponent_tbody_14_ng_container_1_tr_1_ng_container_2_Template, 4, 8, "ng-container", 13)(3, RecentPegsListComponent_tbody_14_ng_container_1_tr_1_ng_container_3_Template, 4, 8, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-time", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-amount", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const peg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", peg_r1.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", peg_r1.amount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("time", peg_r1.blocktime)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](9, _c2, peg_r1.amount > 0, peg_r1.amount < 0, peg_r1.amount < 0 && peg_r1.bitcoinaddress && !peg_r1.bitcointxid));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", peg_r1.amount)("noFiat", true)("forceBtc", true)("addPlus", true);
  }
}
function RecentPegsListComponent_tbody_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RecentPegsListComponent_tbody_14_ng_container_1_tr_1_Template, 8, 13, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pegs_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](2, 1, pegs_r2, 0, 5));
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-truncate", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const peg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, "/tx"), peg_r3.txid))("fragment", "vin=" + peg_r3.txindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", peg_r3.txid)("lastChars", 6);
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-truncate", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const peg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, "/tx"), peg_r3.txid))("fragment", "vout=" + peg_r3.txindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", peg_r3.txid)("lastChars", 6);
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-truncate", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const peg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", ctx_r3.env.MEMPOOL_WEBSITE_URL + "/tx/" + peg_r3.bitcointxid + ":" + peg_r3.bitcoinindex, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", peg_r3.bitcointxid + ":" + peg_r3.bitcoinindex)("lastChars", 6);
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "i")(2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_template_10_ng_container_0_Template, 4, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const peg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const noRedeem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", peg_r3.bitcoinaddress)("ngIfElse", noRedeem_r5);
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-truncate", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const peg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", ctx_r3.env.MEMPOOL_WEBSITE_URL + "/address/" + peg_r3.bitcoinaddress, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", peg_r3.bitcoinaddress)("lastChars", 6);
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_2_Template, 4, 9, "ng-container", 13)(3, RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_3_Template, 4, 9, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-timestamp", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-amount", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_9_Template, 3, 3, "ng-container", 28)(10, RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_template_10_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, RecentPegsListComponent_tbody_14_ng_template_2_tr_0_ng_container_13_Template, 3, 3, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const peg_r3 = ctx.$implicit;
    const redeemInProgress_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const noRedeem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", peg_r3.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", peg_r3.amount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("customFormat", "yyyy-MM-dd HH:mm")("unixTime", peg_r3.blocktime);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](13, _c2, peg_r3.amount > 0, peg_r3.amount < 0, peg_r3.amount < 0 && peg_r3.bitcoinaddress && !peg_r3.bitcointxid));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", peg_r3.amount)("noFiat", true)("forceBtc", true)("addPlus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", peg_r3.bitcointxid)("ngIfElse", redeemInProgress_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", peg_r3.bitcoinaddress)("ngIfElse", noRedeem_r5);
  }
}
function RecentPegsListComponent_tbody_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RecentPegsListComponent_tbody_14_ng_template_2_tr_0_Template, 14, 17, "tr", 29);
  }
  if (rf & 2) {
    const pegs_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", pegs_r2);
  }
}
function RecentPegsListComponent_tbody_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RecentPegsListComponent_tbody_14_ng_container_1_Template, 3, 5, "ng-container", 28)(2, RecentPegsListComponent_tbody_14_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const regularRows_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](ctx_r3.isLoading ? "opacity: 0.75" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.widget)("ngIfElse", regularRows_r7);
  }
}
function RecentPegsListComponent_ng_template_16_tbody_0_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function RecentPegsListComponent_ng_template_16_tbody_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RecentPegsListComponent_ng_template_16_tbody_0_tr_1_Template, 7, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.skeletonLines);
  }
}
function RecentPegsListComponent_ng_template_16_ng_template_1_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function RecentPegsListComponent_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RecentPegsListComponent_ng_template_16_ng_template_1_tr_0_Template, 11, 0, "tr", 29);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.skeletonLines);
  }
}
function RecentPegsListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RecentPegsListComponent_ng_template_16_tbody_0_Template, 2, 1, "tbody", 28)(1, RecentPegsListComponent_ng_template_16_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const regularRowsSkeleton_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.widget)("ngIfElse", regularRowsSkeleton_r8);
  }
}
function RecentPegsListComponent_ngb_pagination_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngb-pagination", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("pageChange", function RecentPegsListComponent_ngb_pagination_18_Template_ngb_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.page, $event) || (ctx_r3.page = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function RecentPegsListComponent_ngb_pagination_18_Template_ngb_pagination_pageChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.pageChange(ctx_r3.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pegsCount_r10 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r3.isLoading || ctx_r3.isPegCountLoading ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", pegsCount_r10)("rotate", true)("maxSize", ctx_r3.maxSize)("pageSize", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("page", ctx_r3.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("boundaryLinks", true)("ellipses", false);
  }
}
function RecentPegsListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 14)(1, "br");
  }
}
function RecentPegsListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
let RecentPegsListComponent = /*#__PURE__*/(() => {
  class RecentPegsListComponent {
    constructor(apiService, cd, stateService, websocketService, seoService, route, router, locale) {
      this.apiService = apiService;
      this.cd = cd;
      this.stateService = stateService;
      this.websocketService = websocketService;
      this.seoService = seoService;
      this.route = route;
      this.router = router;
      this.locale = locale;
      this.widget = false;
      this.isLoading = true;
      this.isPegCountLoading = true;
      this.page = 1;
      this.pageSize = 15;
      this.maxSize = window.innerWidth <= 767.98 ? 3 : 5;
      this.skeletonLines = [];
      this.lastReservesBlockUpdate = 0;
      this.startingIndexSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(0);
      this.currentIndex = 0;
      this.lastPegBlockUpdate = 0;
      this.lastPegAmount = '';
      this.isLoad = true;
      this.dir = 'ltr';
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
      if (this.locale.startsWith('ar') || this.locale.startsWith('fa') || this.locale.startsWith('he')) {
        this.dir = 'rtl';
      }
    }
    ngOnInit() {
      this.isLoading = !this.widget;
      this.env = this.stateService.env;
      this.skeletonLines = this.widget === true ? [...Array(5).keys()] : [...Array(15).keys()];
      if (!this.widget) {
        this.seoService.setTitle("Recent Peg-In / Out's");
        this.websocketService.want(['blocks']);
        this.paramSubscription = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(params => {
          this.page = +params['page'] || 1;
          this.startingIndexSubject.next((this.page - 1) * 15);
        })).subscribe();
        const prevKey = this.dir === 'ltr' ? 'ArrowLeft' : 'ArrowRight';
        const nextKey = this.dir === 'ltr' ? 'ArrowRight' : 'ArrowLeft';
        this.keyNavigationSubscription = this.stateService.keyNavigation$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(event => event.key === prevKey || event.key === nextKey), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(event => {
          if (event.key === prevKey && this.page > 1) {
            this.page--;
            this.isLoading = true;
            this.cd.markForCheck();
          }
          if (event.key === nextKey && this.page < this.pegsCount / this.pageSize) {
            this.page++;
            this.isLoading = true;
            this.cd.markForCheck();
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.throttleTime)(1000, undefined, {
          leading: true,
          trailing: true
        })).subscribe(() => {
          this.pageChange(this.page);
        });
        this.auditStatus$ = this.stateService.blocks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.throttleTime)(40000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delayWhen)(_ => this.isLoad ? (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(0) : (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(2000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoad = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => this.apiService.federationAuditSynced$()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
        this.currentPeg$ = this.auditStatus$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(auditStatus => auditStatus.isAuditSynced === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(_ => this.apiService.liquidPegs$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(currentPegs => currentPegs.lastBlockUpdate >= this.lastPegBlockUpdate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(currentPegs => {
          this.lastPegBlockUpdate = currentPegs.lastBlockUpdate;
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
        this.auditUpdated$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.auditStatus$, this.currentPeg$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([auditStatus, _]) => auditStatus.isAuditSynced === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([auditStatus, currentPeg]) => ({
          lastBlockAudit: auditStatus.lastBlockAudit,
          currentPegAmount: currentPeg.amount
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(({
          lastBlockAudit,
          currentPegAmount
        }) => {
          const blockAuditCheck = lastBlockAudit > this.lastReservesBlockUpdate;
          const amountCheck = currentPegAmount !== this.lastPegAmount;
          this.lastReservesBlockUpdate = lastBlockAudit;
          this.lastPegAmount = currentPegAmount;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(blockAuditCheck || amountCheck);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
        this.pegsCount$ = this.auditUpdated$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(auditUpdated => auditUpdated === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isPegCountLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(_ => this.apiService.pegsCount$()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.pegs_count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(pegsCount => {
          this.isPegCountLoading = false;
          this.pegsCount = pegsCount;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
        this.recentPegsList$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.auditStatus$, this.auditUpdated$, this.startingIndexSubject]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([auditStatus, auditUpdated, startingIndex]) => {
          const auditStatusCheck = auditStatus.isAuditSynced === true;
          const auditUpdatedCheck = auditUpdated === true;
          const startingIndexCheck = startingIndex !== this.currentIndex;
          return auditStatusCheck && (auditUpdatedCheck || startingIndexCheck);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(([_, __, startingIndex]) => {
          this.currentIndex = startingIndex;
          this.isLoading = true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([_, __, startingIndex]) => this.apiService.recentPegsList$(startingIndex)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
      }
    }
    ngOnDestroy() {
      this.destroy$.next(1);
      this.destroy$.complete();
      this.paramSubscription?.unsubscribe();
      this.keyNavigationSubscription?.unsubscribe();
    }
    pageChange(page) {
      this.router.navigate(['audit', 'pegs', page]);
    }
    static #_ = this.ɵfac = function RecentPegsListComponent_Factory(t) {
      return new (t || RecentPegsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: RecentPegsListComponent,
      selectors: [["app-recent-pegs-list"]],
      inputs: {
        widget: "widget",
        recentPegsList$: "recentPegsList$"
      },
      decls: 24,
      vars: 24,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.transaction
           */
          const MSG_EXTERNAL_313854265968026491$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_0 = goog.getMsg("Transaction");
          i18n_0 = MSG_EXTERNAL_313854265968026491$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.date
           */
          const MSG_EXTERNAL_3973931101896534797$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_1 = goog.getMsg("Date");
          i18n_1 = MSG_EXTERNAL_3973931101896534797$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.amount
           */
          const MSG_EXTERNAL_6533918067030990396$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_2 = goog.getMsg("Amount");
          i18n_2 = MSG_EXTERNAL_6533918067030990396$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u0E08\u0E33\u0E19\u0E27\u0E19";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.recent-pegs
           */
          const MSG_EXTERNAL_6609526977284864851$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_3 = goog.getMsg("Recent Peg-In / Out's");
          i18n_3 = MSG_EXTERNAL_6609526977284864851$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_3;
        } else {
          i18n_3 = "Recent Peg-In / Out's";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.fund-redemption-tx
           */
          const MSG_EXTERNAL_6056346358503153686$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_4 = goog.getMsg("Fund / Redemption Tx");
          i18n_4 = MSG_EXTERNAL_6056346358503153686$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_4;
        } else {
          i18n_4 = "Fund / Redemption Tx";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.bitcoin-address
           */
          const MSG_EXTERNAL_5680113804058774591$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_5 = goog.getMsg("BTC Address");
          i18n_5 = MSG_EXTERNAL_5680113804058774591$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_5;
        } else {
          i18n_5 = "\u0E41\u0E2D\u0E14\u0E40\u0E14\u0E23\u0E2A BTC";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquid.redemption-in-progress
           */
          const MSG_EXTERNAL_4470548818013130858$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_6 = goog.getMsg("Peg out in progress...");
          i18n_6 = MSG_EXTERNAL_4470548818013130858$$SRC_APP_COMPONENTS_LIQUID_RESERVES_AUDIT_RECENT_PEGS_LIST_RECENT_PEGS_LIST_COMPONENT_TS_6;
        } else {
          i18n_6 = "Peg out in progress...";
        }
        return [["skeleton", ""], ["noRedeem", ""], ["regularRows", ""], ["redeemInProgress", ""], ["regularRowsSkeleton", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, [3, "ngClass"], [4, "ngIf"], [1, "clearfix"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [2, "vertical-align", "middle"], [1, "transaction", "text-left", 3, "ngClass"], [1, "timestamp", "text-left", 3, "ngClass"], [1, "amount", "text-right", 3, "ngClass"], ["class", "output text-left", 4, "ngIf"], ["class", "address text-left", 4, "ngIf"], [3, "style", 4, "ngIf", "ngIfElse"], ["class", "pagination-container float-right mt-2", 3, "class", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses", "pageChange", 4, "ngIf"], [3, "ngIf"], [1, "output", "text-left"], [1, "address", "text-left"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "transaction", "text-left", "widget"], [1, "timestamp", "text-left", "widget"], ["kind", "since", 3, "time", "showTooltip"], [1, "amount", "text-right", "widget", 3, "ngClass"], [3, "satoshis", "noFiat", "forceBtc", "addPlus"], [3, "routerLink", "fragment"], [3, "text"], [1, "transaction", "text-left"], [1, "timestamp", "text-left"], [3, "customFormat", "unixTime"], [3, "text", "lastChars"], ["target", "_blank", 2, "color", "var(--orange)", 3, "href"], [1, "text-muted"], [1, "skeleton-loader", 2, "max-width", "400px"], [1, "skeleton-loader", 2, "max-width", "300px"], [1, "amount", "text-right", "widget"], [1, "skeleton-loader", 2, "max-width", "240px"], [1, "amount", "text-right"], [1, "skeleton-loader", 2, "max-width", "140px"], [1, "pagination-container", "float-right", "mt-2", 3, "pageChange", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses"]];
      },
      template: function RecentPegsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RecentPegsListComponent_div_1_Template, 3, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 15)(4, "table", 16)(5, "thead", 17)(6, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](7, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](9, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](11, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, RecentPegsListComponent_th_12_Template, 2, 0, "th", 21)(13, RecentPegsListComponent_th_13_Template, 2, 0, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, RecentPegsListComponent_tbody_14_Template, 4, 4, "tbody", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, RecentPegsListComponent_ng_template_16_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, RecentPegsListComponent_ngb_pagination_18_Template, 1, 9, "ngb-pagination", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, RecentPegsListComponent_ng_template_20_Template, 2, 0, "ng-template", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, RecentPegsListComponent_ng_template_22_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const skeleton_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](15, _c0, !ctx.widget, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c1, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](20, _c1, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](22, _c1, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 11, ctx.recentPegsList$))("ngIfElse", skeleton_r11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 13, !ctx.widget && ctx.pegsCount$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.widget);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _components_time_time_component__WEBPACK_IMPORTED_MODULE_4__.TimeComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_5__.AmountComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_6__.TruncateComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_7__.TimestampComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__.RelativeUrlPipe],
      styles: [".spinner-border[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  margin-top: 13px;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 0.65rem;\n  padding-bottom: 0.6rem;\n  padding-right: 2rem;\n}\n.widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n@media (max-width: 510px) {\n  .widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%] {\n    padding-right: 0.5rem;\n  }\n}\n\n.clear-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.progress[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n\n.transaction[_ngcontent-%COMP%] {\n  width: 65%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 120px;\n}\n\n.transaction.widget[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.address[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 527px) {\n  .address[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.amount[_ngcontent-%COMP%] {\n  width: 0%;\n}\n\n.output[_ngcontent-%COMP%] {\n  width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 800px) {\n  .output[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.address[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 960px) {\n  .address[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  width: 0%;\n}\n@media (max-width: 650px) {\n  .timestamp[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1000px) {\n  .timestamp[_ngcontent-%COMP%]   .relative-time[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1050px) {\n  .timestamp.widget[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .timestamp.widget[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 510px) {\n  .timestamp.widget[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.credit[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n\n.debit[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n\n.glow-effect[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_color-oscillation 1s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_color-oscillation {\n  0% {\n    color: #777983;\n  }\n  100% {\n    color: var(--red);\n  }\n}"],
      changeDetection: 0
    });
  }
  return RecentPegsListComponent;
})();

/***/ }),

/***/ 60535:
/*!*****************************************************!*\
  !*** ./src/app/liquid/liquid-master-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiquidMasterPageModule: () => (/* binding */ LiquidMasterPageModule),
/* harmony export */   LiquidRoutingModule: () => (/* binding */ LiquidRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ 26800);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-echarts */ 57021);
/* harmony import */ var _components_liquid_master_page_liquid_master_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/liquid-master-page/liquid-master-page.component */ 438);
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/start/start.component */ 61730);
/* harmony import */ var _components_push_transaction_push_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/push-transaction/push-transaction.component */ 82158);
/* harmony import */ var _components_blocks_list_blocks_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/blocks-list/blocks-list.component */ 25433);
/* harmony import */ var _components_assets_asset_group_asset_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/assets/asset-group/asset-group.component */ 76998);
/* harmony import */ var _components_assets_assets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/assets/assets.component */ 71190);
/* harmony import */ var _components_assets_assets_featured_assets_featured_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/assets/assets-featured/assets-featured.component */ 57778);
/* harmony import */ var _components_asset_asset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/asset/asset.component */ 77082);
/* harmony import */ var _components_assets_assets_nav_assets_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/assets/assets-nav/assets-nav.component */ 626);
/* harmony import */ var _components_liquid_reserves_audit_recent_pegs_list_recent_pegs_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/liquid-reserves-audit/recent-pegs-list/recent-pegs-list.component */ 66283);
/* harmony import */ var _components_liquid_reserves_audit_federation_wallet_federation_wallet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/liquid-reserves-audit/federation-wallet/federation-wallet.component */ 3885);
/* harmony import */ var _components_liquid_reserves_audit_federation_utxos_list_federation_utxos_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/liquid-reserves-audit/federation-utxos-list/federation-utxos-list.component */ 14569);
/* harmony import */ var _components_liquid_reserves_audit_federation_addresses_list_federation_addresses_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/liquid-reserves-audit/federation-addresses-list/federation-addresses-list.component */ 16977);
/* harmony import */ var _components_server_health_server_health_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/server-health/server-health.component */ 87078);
/* harmony import */ var _components_server_health_server_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/server-health/server-status.component */ 41154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 39962);






















const routes = [{
  path: '',
  component: _components_liquid_master_page_liquid_master_page_component__WEBPACK_IMPORTED_MODULE_1__.LiquidMasterPageComponent,
  children: [{
    path: 'tx/push',
    component: _components_push_transaction_push_transaction_component__WEBPACK_IMPORTED_MODULE_3__.PushTransactionComponent
  }, {
    path: 'about',
    loadChildren: () => __webpack_require__.e(/*! import() */ 241).then(__webpack_require__.bind(__webpack_require__, /*! @components/about/about.module */ 29241)).then(m => m.AboutModule)
  }, {
    path: 'blocks/:page',
    component: _components_blocks_list_blocks_list_component__WEBPACK_IMPORTED_MODULE_4__.BlocksList
  }, {
    path: 'blocks',
    redirectTo: 'blocks/1'
  }, {
    path: 'terms-of-service',
    loadChildren: () => __webpack_require__.e(/*! import() */ 793).then(__webpack_require__.bind(__webpack_require__, /*! @components/terms-of-service/terms-of-service.module */ 83793)).then(m => m.TermsOfServiceModule)
  }, {
    path: 'privacy-policy',
    loadChildren: () => __webpack_require__.e(/*! import() */ 257).then(__webpack_require__.bind(__webpack_require__, /*! @components/privacy-policy/privacy-policy.module */ 5257)).then(m => m.PrivacyPolicyModule)
  }, {
    path: 'trademark-policy',
    loadChildren: () => __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(__webpack_require__, /*! @components/trademark-policy/trademark-policy.module */ 96039)).then(m => m.TrademarkModule)
  }, {
    path: 'tx',
    component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent,
    data: {
      preload: true,
      networkSpecific: true
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(__webpack_require__, /*! @components/transaction/transaction.module */ 66653)).then(m => m.TransactionModule)
  }, {
    path: 'block',
    component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent,
    data: {
      preload: true,
      networkSpecific: true
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ 857).then(__webpack_require__.bind(__webpack_require__, /*! @components/block/block.module */ 95857)).then(m => m.BlockModule)
  }, {
    path: 'audit/wallet',
    data: {
      networks: ['liquid']
    },
    component: _components_liquid_reserves_audit_federation_wallet_federation_wallet_component__WEBPACK_IMPORTED_MODULE_11__.FederationWalletComponent,
    children: [{
      path: 'utxos',
      data: {
        networks: ['liquid']
      },
      component: _components_liquid_reserves_audit_federation_utxos_list_federation_utxos_list_component__WEBPACK_IMPORTED_MODULE_12__.FederationUtxosListComponent
    }, {
      path: 'addresses',
      data: {
        networks: ['liquid']
      },
      component: _components_liquid_reserves_audit_federation_addresses_list_federation_addresses_list_component__WEBPACK_IMPORTED_MODULE_13__.FederationAddressesListComponent
    }, {
      path: '**',
      redirectTo: 'utxos'
    }]
  }, {
    path: 'audit/pegs/:page',
    data: {
      networks: ['liquid']
    },
    component: _components_liquid_reserves_audit_recent_pegs_list_recent_pegs_list_component__WEBPACK_IMPORTED_MODULE_10__.RecentPegsListComponent
  }, {
    path: 'audit/pegs',
    redirectTo: 'audit/pegs/1'
  }, {
    path: 'assets',
    data: {
      networks: ['liquid']
    },
    component: _components_assets_assets_nav_assets_nav_component__WEBPACK_IMPORTED_MODULE_9__.AssetsNavComponent,
    children: [{
      path: 'all',
      data: {
        networks: ['liquid']
      },
      component: _components_assets_assets_component__WEBPACK_IMPORTED_MODULE_6__.AssetsComponent
    }, {
      path: 'featured',
      data: {
        networks: ['liquid']
      },
      component: _components_assets_assets_featured_assets_featured_component__WEBPACK_IMPORTED_MODULE_7__.AssetsFeaturedComponent
    }, {
      path: 'asset/:id',
      data: {
        networkSpecific: true
      },
      component: _components_asset_asset_component__WEBPACK_IMPORTED_MODULE_8__.AssetComponent
    }, {
      path: 'group/:id',
      data: {
        networkSpecific: true
      },
      component: _components_assets_asset_group_asset_group_component__WEBPACK_IMPORTED_MODULE_5__.AssetGroupComponent
    }, {
      path: '**',
      redirectTo: 'featured'
    }]
  }, {
    path: 'docs',
    loadChildren: () => __webpack_require__.e(/*! import() */ 636).then(__webpack_require__.bind(__webpack_require__, /*! ../docs/docs.module */ 96636)).then(m => m.DocsModule),
    data: {
      preload: true
    }
  }, {
    path: 'api',
    loadChildren: () => __webpack_require__.e(/*! import() */ 636).then(__webpack_require__.bind(__webpack_require__, /*! ../docs/docs.module */ 96636)).then(m => m.DocsModule)
  }]
}];
if (window['__env']?.OFFICIAL_MEMPOOL_SPACE) {
  routes[0].children.push({
    path: 'monitoring',
    data: {
      networks: ['bitcoin', 'liquid']
    },
    component: _components_server_health_server_health_component__WEBPACK_IMPORTED_MODULE_14__.ServerHealthComponent
  });
  routes[0].children.push({
    path: 'nodes',
    data: {
      networks: ['bitcoin', 'liquid']
    },
    component: _components_server_health_server_status_component__WEBPACK_IMPORTED_MODULE_15__.ServerStatusComponent
  });
}
let LiquidRoutingModule = /*#__PURE__*/(() => {
  class LiquidRoutingModule {
    static #_ = this.ɵfac = function LiquidRoutingModule_Factory(t) {
      return new (t || LiquidRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
      type: LiquidRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
    });
  }
  return LiquidRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](LiquidRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();
let LiquidMasterPageModule = /*#__PURE__*/(() => {
  class LiquidMasterPageModule {
    static #_ = this.ɵfac = function LiquidMasterPageModule_Factory(t) {
      return new (t || LiquidMasterPageModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
      type: LiquidMasterPageModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, LiquidRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_19__.NgxEchartsModule.forRoot({
        echarts: () => __webpack_require__.e(/*! import() */ 683).then(__webpack_require__.bind(__webpack_require__, /*! ../graphs/echarts */ 80683)).then(m => m.echarts)
      })]
    });
  }
  return LiquidMasterPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](LiquidMasterPageModule, {
    declarations: [_components_liquid_master_page_liquid_master_page_component__WEBPACK_IMPORTED_MODULE_1__.LiquidMasterPageComponent, _components_liquid_reserves_audit_federation_wallet_federation_wallet_component__WEBPACK_IMPORTED_MODULE_11__.FederationWalletComponent, _components_liquid_reserves_audit_federation_utxos_list_federation_utxos_list_component__WEBPACK_IMPORTED_MODULE_12__.FederationUtxosListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, LiquidRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_19__.NgxEchartsModule]
  });
})();

/***/ }),

/***/ 57021:
/*!***********************************************************!*\
  !*** ./node_modules/ngx-echarts/fesm2022/ngx-echarts.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NGX_ECHARTS_CONFIG: () => (/* binding */ NGX_ECHARTS_CONFIG),
/* harmony export */   NgxEchartsDirective: () => (/* binding */ NgxEchartsDirective),
/* harmony export */   NgxEchartsModule: () => (/* binding */ NgxEchartsModule),
/* harmony export */   provideEcharts: () => (/* binding */ provideEcharts),
/* harmony export */   provideEchartsCore: () => (/* binding */ provideEchartsCore)
/* harmony export */ });
/* harmony import */ var _home_nmurgor_plot_plan_mempool_bitgesell_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 60444);





class ChangeFilterV2 {
  constructor() {
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  doFilter(changes) {
    this.subject.next(changes);
  }
  dispose() {
    this.subscriptions.unsubscribe();
  }
  notEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        if (value !== undefined && value !== null) {
          handler(value);
        }
      }
    }));
  }
  has(key, handler) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirst(key, handler) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirstAndEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        if (value !== undefined && value !== null) {
          handler(value);
        }
      }
    }));
  }
}
const NGX_ECHARTS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('NGX_ECHARTS_CONFIG');
let NgxEchartsDirective = /*#__PURE__*/(() => {
  class NgxEchartsDirective {
    constructor(config, el, ngZone) {
      this.el = el;
      this.ngZone = ngZone;
      this.options = null;
      this.theme = null;
      this.initOpts = null;
      this.merge = null;
      this.autoResize = true;
      this.loading = false;
      this.loadingType = 'default';
      this.loadingOpts = null;
      // ngx-echarts events
      this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      this.optionsError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      // echarts mouse events
      this.chartClick = this.createLazyEvent('click');
      this.chartDblClick = this.createLazyEvent('dblclick');
      this.chartMouseDown = this.createLazyEvent('mousedown');
      this.chartMouseMove = this.createLazyEvent('mousemove');
      this.chartMouseUp = this.createLazyEvent('mouseup');
      this.chartMouseOver = this.createLazyEvent('mouseover');
      this.chartMouseOut = this.createLazyEvent('mouseout');
      this.chartGlobalOut = this.createLazyEvent('globalout');
      this.chartContextMenu = this.createLazyEvent('contextmenu');
      // echarts events
      this.chartHighlight = this.createLazyEvent('highlight');
      this.chartDownplay = this.createLazyEvent('downplay');
      this.chartSelectChanged = this.createLazyEvent('selectchanged');
      this.chartLegendSelectChanged = this.createLazyEvent('legendselectchanged');
      this.chartLegendSelected = this.createLazyEvent('legendselected');
      this.chartLegendUnselected = this.createLazyEvent('legendunselected');
      this.chartLegendLegendSelectAll = this.createLazyEvent('legendselectall');
      this.chartLegendLegendInverseSelect = this.createLazyEvent('legendinverseselect');
      this.chartLegendScroll = this.createLazyEvent('legendscroll');
      this.chartDataZoom = this.createLazyEvent('datazoom');
      this.chartDataRangeSelected = this.createLazyEvent('datarangeselected');
      this.chartGraphRoam = this.createLazyEvent('graphroam');
      this.chartGeoRoam = this.createLazyEvent('georoam');
      this.chartTreeRoam = this.createLazyEvent('treeroam');
      this.chartTimelineChanged = this.createLazyEvent('timelinechanged');
      this.chartTimelinePlayChanged = this.createLazyEvent('timelineplaychanged');
      this.chartRestore = this.createLazyEvent('restore');
      this.chartDataViewChanged = this.createLazyEvent('dataviewchanged');
      this.chartMagicTypeChanged = this.createLazyEvent('magictypechanged');
      this.chartGeoSelectChanged = this.createLazyEvent('geoselectchanged');
      this.chartGeoSelected = this.createLazyEvent('geoselected');
      this.chartGeoUnselected = this.createLazyEvent('geounselected');
      this.chartAxisAreaSelected = this.createLazyEvent('axisareaselected');
      this.chartBrush = this.createLazyEvent('brush');
      this.chartBrushEnd = this.createLazyEvent('brushend');
      this.chartBrushSelected = this.createLazyEvent('brushselected');
      this.chartGlobalCursorTaken = this.createLazyEvent('globalcursortaken');
      this.chartRendered = this.createLazyEvent('rendered');
      this.chartFinished = this.createLazyEvent('finished');
      this.animationFrameID = null;
      this.chart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
      this.resize$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.changeFilter = new ChangeFilterV2();
      this.resizeObFired = false;
      this.echarts = config.echarts;
      this.theme = config.theme || null;
    }
    ngOnChanges(changes) {
      this.changeFilter.doFilter(changes);
    }
    ngOnInit() {
      if (!window.ResizeObserver) {
        throw new Error('please install a polyfill for ResizeObserver');
      }
      this.resizeSub = this.resize$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(100, rxjs__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler, {
        leading: false,
        trailing: true
      })).subscribe(() => this.resize());
      if (this.autoResize) {
        // https://github.com/xieziyu/ngx-echarts/issues/413
        this.resizeOb = this.ngZone.runOutsideAngular(() => new window.ResizeObserver(entries => {
          for (const entry of entries) {
            if (entry.target === this.el.nativeElement) {
              // Ignore first fire on insertion, no resize actually happened
              if (!this.resizeObFired) {
                this.resizeObFired = true;
              } else {
                this.animationFrameID = window.requestAnimationFrame(() => {
                  this.resize$.next();
                });
              }
            }
          }
        }));
        this.resizeOb.observe(this.el.nativeElement);
      }
      this.changeFilter.notFirstAndEmpty('options', opt => this.onOptionsChange(opt));
      this.changeFilter.notFirstAndEmpty('merge', opt => this.setOption(opt));
      this.changeFilter.has('loading', v => this.toggleLoading(!!v));
      this.changeFilter.notFirst('theme', () => this.refreshChart());
    }
    ngOnDestroy() {
      window.clearTimeout(this.initChartTimer);
      if (this.resizeSub) {
        this.resizeSub.unsubscribe();
      }
      if (this.animationFrameID) {
        window.cancelAnimationFrame(this.animationFrameID);
      }
      if (this.resizeOb) {
        this.resizeOb.unobserve(this.el.nativeElement);
      }
      if (this.loadingSub) {
        this.loadingSub.unsubscribe();
      }
      this.changeFilter.dispose();
      this.dispose();
    }
    ngAfterViewInit() {
      this.initChartTimer = window.setTimeout(() => this.initChart());
    }
    dispose() {
      if (this.chart) {
        if (!this.chart.isDisposed()) {
          this.chart.dispose();
        }
        this.chart = null;
      }
    }
    /**
     * resize chart
     */
    resize() {
      if (this.chart) {
        this.chart.resize();
      }
    }
    toggleLoading(loading) {
      if (this.chart) {
        loading ? this.chart.showLoading(this.loadingType, this.loadingOpts) : this.chart.hideLoading();
      } else {
        this.loadingSub = this.chart$.subscribe(chart => loading ? chart.showLoading(this.loadingType, this.loadingOpts) : chart.hideLoading());
      }
    }
    setOption(option, opts) {
      if (this.chart) {
        try {
          this.chart.setOption(option, opts);
        } catch (e) {
          console.error(e);
          this.optionsError.emit(e);
        }
      }
    }
    /**
     * dispose old chart and create a new one.
     */
    refreshChart() {
      var _this = this;
      return (0,_home_nmurgor_plot_plan_mempool_bitgesell_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.dispose();
        yield _this.initChart();
      })();
    }
    createChart() {
      const dom = this.el.nativeElement;
      if (window && window.getComputedStyle) {
        const prop = window.getComputedStyle(dom, null).getPropertyValue('height');
        if ((!prop || prop === '0px') && (!dom.style.height || dom.style.height === '0px')) {
          dom.style.height = '400px';
        }
      }
      // here a bit tricky: we check if the echarts module is provided as function returning native import('...') then use the promise
      // otherwise create the function that imitates behaviour above with a provided as is module
      return this.ngZone.runOutsideAngular(() => {
        const load = typeof this.echarts === 'function' ? this.echarts : () => Promise.resolve(this.echarts);
        return load().then(({
          init
        }) => init(dom, this.theme, this.initOpts));
      });
    }
    initChart() {
      var _this2 = this;
      return (0,_home_nmurgor_plot_plan_mempool_bitgesell_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this2.onOptionsChange(_this2.options);
        if (_this2.merge && _this2.chart) {
          _this2.setOption(_this2.merge);
        }
      })();
    }
    onOptionsChange(opt) {
      var _this3 = this;
      return (0,_home_nmurgor_plot_plan_mempool_bitgesell_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!opt) {
          return;
        }
        if (_this3.chart) {
          _this3.setOption(_this3.options, true);
        } else {
          _this3.chart = yield _this3.createChart();
          _this3.chart$.next(_this3.chart);
          _this3.chartInit.emit(_this3.chart);
          _this3.setOption(_this3.options, true);
        }
      })();
    }
    // allows to lazily bind to only those events that are requested through the `@Output` by parent components
    // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
    createLazyEvent(eventName) {
      return this.chartInit.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(chart => new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        chart.on(eventName, data => this.ngZone.run(() => observer.next(data)));
        return () => {
          if (this.chart) {
            if (!this.chart.isDisposed()) {
              chart.off(eventName);
            }
          }
        };
      })));
    }
    static #_ = this.ɵfac = function NgxEchartsDirective_Factory(t) {
      return new (t || NgxEchartsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NGX_ECHARTS_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
    };
    static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: NgxEchartsDirective,
      selectors: [["echarts"], ["", "echarts", ""]],
      inputs: {
        options: "options",
        theme: "theme",
        initOpts: "initOpts",
        merge: "merge",
        autoResize: "autoResize",
        loading: "loading",
        loadingType: "loadingType",
        loadingOpts: "loadingOpts"
      },
      outputs: {
        chartInit: "chartInit",
        optionsError: "optionsError",
        chartClick: "chartClick",
        chartDblClick: "chartDblClick",
        chartMouseDown: "chartMouseDown",
        chartMouseMove: "chartMouseMove",
        chartMouseUp: "chartMouseUp",
        chartMouseOver: "chartMouseOver",
        chartMouseOut: "chartMouseOut",
        chartGlobalOut: "chartGlobalOut",
        chartContextMenu: "chartContextMenu",
        chartHighlight: "chartHighlight",
        chartDownplay: "chartDownplay",
        chartSelectChanged: "chartSelectChanged",
        chartLegendSelectChanged: "chartLegendSelectChanged",
        chartLegendSelected: "chartLegendSelected",
        chartLegendUnselected: "chartLegendUnselected",
        chartLegendLegendSelectAll: "chartLegendLegendSelectAll",
        chartLegendLegendInverseSelect: "chartLegendLegendInverseSelect",
        chartLegendScroll: "chartLegendScroll",
        chartDataZoom: "chartDataZoom",
        chartDataRangeSelected: "chartDataRangeSelected",
        chartGraphRoam: "chartGraphRoam",
        chartGeoRoam: "chartGeoRoam",
        chartTreeRoam: "chartTreeRoam",
        chartTimelineChanged: "chartTimelineChanged",
        chartTimelinePlayChanged: "chartTimelinePlayChanged",
        chartRestore: "chartRestore",
        chartDataViewChanged: "chartDataViewChanged",
        chartMagicTypeChanged: "chartMagicTypeChanged",
        chartGeoSelectChanged: "chartGeoSelectChanged",
        chartGeoSelected: "chartGeoSelected",
        chartGeoUnselected: "chartGeoUnselected",
        chartAxisAreaSelected: "chartAxisAreaSelected",
        chartBrush: "chartBrush",
        chartBrushEnd: "chartBrushEnd",
        chartBrushSelected: "chartBrushSelected",
        chartGlobalCursorTaken: "chartGlobalCursorTaken",
        chartRendered: "chartRendered",
        chartFinished: "chartFinished"
      },
      exportAs: ["echarts"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
  }
  return NgxEchartsDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const provideEcharts = (config = {}) => {
  return {
    provide: NGX_ECHARTS_CONFIG,
    useFactory: () => ({
      ...config,
      echarts: () => __webpack_require__.e(/*! import() */ 506).then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 37506))
    })
  };
};
const provideEchartsCore = config => {
  return {
    provide: NGX_ECHARTS_CONFIG,
    useValue: config
  };
};
let NgxEchartsModule = /*#__PURE__*/(() => {
  class NgxEchartsModule {
    static forRoot(config) {
      return {
        ngModule: NgxEchartsModule,
        providers: [provideEchartsCore(config)]
      };
    }
    static forChild() {
      return {
        ngModule: NgxEchartsModule
      };
    }
    static #_ = this.ɵfac = function NgxEchartsModule_Factory(t) {
      return new (t || NgxEchartsModule)();
    };
    static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NgxEchartsModule
    });
    static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
  }
  return NgxEchartsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-echarts
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-echarts.mjs.map

/***/ })

};
;
"use strict";
exports.id = 806;
exports.ids = [806];
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
          i18n_0 = "Offline";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.reconnecting
           */
          const MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_1 = goog.getMsg("Reconnecting...");
          i18n_1 = MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_1;
        } else {
          i18n_1 = "Riconnessione...";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.layer2-networks-header
           */
          const MSG_EXTERNAL_3561369438070472144$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_2 = goog.getMsg("Layer 2 Networks");
          i18n_2 = MSG_EXTERNAL_3561369438070472144$$SRC_APP_COMPONENTS_LIQUID_MASTER_PAGE_LIQUID_MASTER_PAGE_COMPONENT_TS_2;
        } else {
          i18n_2 = "Reti Layer 2";
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

/***/ 47806:
/*!************************************************!*\
  !*** ./src/app/liquid/liquid-graphs.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiquidGraphsModule: () => (/* binding */ LiquidGraphsModule),
/* harmony export */   LiquidGraphsRoutingModule: () => (/* binding */ LiquidGraphsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_liquid_master_page_liquid_master_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/liquid-master-page/liquid-master-page.component */ 438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39962);





const routes = [{
  path: '',
  component: _components_liquid_master_page_liquid_master_page_component__WEBPACK_IMPORTED_MODULE_0__.LiquidMasterPageComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ 132).then(__webpack_require__.bind(__webpack_require__, /*! ../graphs/graphs.module */ 2132)).then(m => m.GraphsModule),
  data: {
    preload: true
  }
}];
let LiquidGraphsRoutingModule = /*#__PURE__*/(() => {
  class LiquidGraphsRoutingModule {
    static #_ = this.ɵfac = function LiquidGraphsRoutingModule_Factory(t) {
      return new (t || LiquidGraphsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LiquidGraphsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return LiquidGraphsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LiquidGraphsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();
let LiquidGraphsModule = /*#__PURE__*/(() => {
  class LiquidGraphsModule {
    static #_ = this.ɵfac = function LiquidGraphsModule_Factory(t) {
      return new (t || LiquidGraphsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LiquidGraphsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, LiquidGraphsRoutingModule]
    });
  }
  return LiquidGraphsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LiquidGraphsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, LiquidGraphsRoutingModule]
  });
})();

/***/ })

};
;
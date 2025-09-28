"use strict";
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 63042:
/*!*****************************************************************!*\
  !*** ./src/app/components/master-page/master-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterPageComponent: () => (/* binding */ MasterPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/menu/menu.component */ 86054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/language.service */ 65745);
/* harmony import */ var _app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/enterprise.service */ 27384);
/* harmony import */ var _app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/navigation.service */ 55585);
/* harmony import */ var _app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/storage.service */ 7368);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/search-form/search-form.component */ 49222);
/* harmony import */ var _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/svg-images/svg-images.component */ 43606);
/* harmony import */ var _app_shared_components_testnet_alert_testnet_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/components/testnet-alert/testnet-alert.component */ 772);
/* harmony import */ var _app_shared_components_global_footer_global_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/components/global-footer/global-footer.component */ 8912);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);

















const _c0 = a0 => ({
  val: a0
});
const _c1 = a0 => ({
  "dual-logos": a0
});
const _c2 = a0 => [a0];
const _c3 = (a0, a1) => ({
  "dual-logos": a0,
  "mr-0": a1
});
const _c4 = () => ({
  exact: true
});
const _c5 = a0 => ({
  "rounded": a0
});
const _c6 = a0 => ({
  "opacity": a0
});
const _c7 = a0 => ({
  "dropdown-menu-right": a0
});
function MasterPageComponent_ng_container_0_header_1_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_ng_container_2_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.hamburgerClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", "/api/v1/services/account/images/" + ctx_r2.user.username, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_ng_container_2_div_2_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.hamburgerClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-svg-images", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 39);
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MasterPageComponent_ng_container_0_header_1_ng_container_2_div_1_Template, 2, 1, "div", 34)(2, MasterPageComponent_ng_container_0_header_1_ng_container_2_div_2_Template, 2, 0, "div", 34)(3, MasterPageComponent_ng_container_0_header_1_ng_container_2_div_3_Template, 1, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf",  false && 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.user === undefined);
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.enterpriseInfo == null ? null : ctx_r2.enterpriseInfo.header_img, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", ctx_r2.enterpriseInfo.title);
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "div", 48);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c5, ctx_r2.enterpriseInfo.rounded_corner));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.enterpriseInfo.img || "/api/v1/services/enterprise/images/" + ctx_r2.subdomain + "/logo", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_app_svg_images_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-svg-images", 49);
  }
  if (rf & 2) {
    const connectionState_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c6, connectionState_r5.val === 2 ? 1 : 0.5));
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_app_svg_images_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-svg-images", 50);
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_ng_template_0_Template, 3, 5, "ng-template", 43)(1, MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_app_svg_images_1_Template, 1, 3, "app-svg-images", 44)(2, MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_app_svg_images_2_Template, 1, 0, "app-svg-images", 45);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.subdomain && ctx_r2.enterpriseInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.officialMempoolSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.officialMempoolSpace);
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function MasterPageComponent_ng_container_0_header_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_1_Template, 1, 2, "img", 40)(2, MasterPageComponent_ng_container_0_header_1_ng_container_5_Conditional_2_Template, 3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, MasterPageComponent_ng_container_0_header_1_ng_container_5_div_4_Template, 2, 0, "div", 42)(5, MasterPageComponent_ng_container_0_header_1_ng_container_5_div_5_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const connectionState_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](1, (ctx_r2.enterpriseInfo == null ? null : ctx_r2.enterpriseInfo.header_img) ? 1 : 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", connectionState_r5.val === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", connectionState_r5.val === 1);
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.enterpriseInfo == null ? null : ctx_r2.enterpriseInfo.header_img, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", ctx_r2.enterpriseInfo.title);
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "div", 48);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c5, ctx_r2.enterpriseInfo.rounded_corner));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.enterpriseInfo.img || "/api/v1/services/enterprise/images/" + ctx_r2.subdomain + "/logo", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.enterpriseInfo == null ? null : ctx_r2.enterpriseInfo.header_img, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", ctx_r2.enterpriseInfo.title);
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_2_app_svg_images_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-svg-images", 54);
  }
  if (rf & 2) {
    const connectionState_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c6, connectionState_r6.val === 2 ? 1 : 0.5));
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_2_app_svg_images_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-svg-images", 50);
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_2_app_svg_images_0_Template, 1, 3, "app-svg-images", 53)(1, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_2_app_svg_images_1_Template, 1, 0, "app-svg-images", 45);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.officialMempoolSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.officialMempoolSpace);
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_1_Template, 1, 2, "img", 52)(2, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Conditional_2_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_div_4_Template, 2, 0, "div", 42)(5, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_div_5_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const connectionState_r6 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](1, (ctx_r2.enterpriseInfo == null ? null : ctx_r2.enterpriseInfo.header_img) ? 1 : 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", connectionState_r6.val === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", connectionState_r6.val === 1);
  }
}
function MasterPageComponent_ng_container_0_header_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_template_0_Template, 3, 5, "ng-template", 43)(1, MasterPageComponent_ng_container_0_header_1_Conditional_10_ng_container_1_Template, 6, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.subdomain && ctx_r2.enterpriseInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, ctx_r2.connectionState$)));
  }
}
function MasterPageComponent_ng_container_0_header_1_div_11_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-svg-images", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Mainnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r2.networkPaths["mainnet"] || "/");
  }
}
function MasterPageComponent_ng_container_0_header_1_div_11_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-svg-images", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Signet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const network_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", network_r8.val === "signet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r2.networkPaths["signet"] || "/signet");
  }
}
function MasterPageComponent_ng_container_0_header_1_div_11_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-svg-images", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Testnet3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const network_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", network_r8.val === "testnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r2.networkPaths["testnet"] || "/testnet");
  }
}
function MasterPageComponent_ng_container_0_header_1_div_11_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-svg-images", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Testnet4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const network_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", network_r8.val === "testnet4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r2.networkPaths["testnet4"] || "/testnet4");
  }
}
function MasterPageComponent_ng_container_0_header_1_div_11_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-svg-images", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Liquid");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const network_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", network_r8.val === "liquid");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("href", ctx_r2.env.LIQUID_WEBSITE_URL + ctx_r2.urlLanguage + (ctx_r2.networkPaths["liquid"] || ""), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function MasterPageComponent_ng_container_0_header_1_div_11_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-svg-images", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Liquid Testnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const network_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", network_r8.val === "liquid");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("href", ctx_r2.env.LIQUID_WEBSITE_URL + ctx_r2.urlLanguage + (ctx_r2.networkPaths["liquidtestnet"] || "/testnet"), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function MasterPageComponent_ng_container_0_header_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("resize", function MasterPageComponent_ng_container_0_header_1_div_11_Template_div_resize_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onResize());
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-svg-images", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, MasterPageComponent_ng_container_0_header_1_div_11_a_4_Template, 3, 1, "a", 59)(5, MasterPageComponent_ng_container_0_header_1_div_11_a_5_Template, 3, 3, "a", 60)(6, MasterPageComponent_ng_container_0_header_1_div_11_a_6_Template, 3, 3, "a", 61)(7, MasterPageComponent_ng_container_0_header_1_div_11_a_7_Template, 3, 3, "a", 62)(8, MasterPageComponent_ng_container_0_header_1_div_11_a_8_Template, 3, 3, "a", 63)(9, MasterPageComponent_ng_container_0_header_1_div_11_a_9_Template, 3, 3, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const network_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", network_r8.val === "" ? "bitcoin" : network_r8.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](8, _c7, ctx_r2.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.env.MAINNET_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.env.SIGNET_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.env.TESTNET_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.env.TESTNET4_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.env.LIQUID_ENABLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.env.LIQUID_TESTNET_ENABLED);
  }
}
function MasterPageComponent_ng_container_0_header_1_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 19)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_li_19_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-svg-images", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "/acceleration")));
  }
}
function MasterPageComponent_ng_container_0_header_1_li_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 78)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_li_20_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-svg-images", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "/mining")));
  }
}
function MasterPageComponent_ng_container_0_header_1_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 80)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_li_21_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-svg-images", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "/lightning")));
  }
}
function MasterPageComponent_ng_container_0_header_1_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 82)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_li_22_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-svg-images", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "/blocks")));
  }
}
function MasterPageComponent_ng_container_0_header_1_li_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 84)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_li_28_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-svg-images", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "/faucet")));
  }
}
function MasterPageComponent_ng_container_0_header_1_app_menu_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-menu", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("loggedOut", function MasterPageComponent_ng_container_0_header_1_app_menu_35_Template_app_menu_loggedOut_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onLoggedOut());
    })("menuToggled", function MasterPageComponent_ng_container_0_header_1_app_menu_35_Template_app_menu_menuToggled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.menuToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("navOpen", ctx_r2.menuOpen);
  }
}
function MasterPageComponent_ng_container_0_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "header", 12)(1, "nav", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, MasterPageComponent_ng_container_0_header_1_ng_container_2_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_Template_a_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.brandClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, MasterPageComponent_ng_container_0_header_1_ng_container_5_Template, 6, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_Template_a_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.brandClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, MasterPageComponent_ng_container_0_header_1_Conditional_9_Template, 1, 2, "img", 16)(10, MasterPageComponent_ng_container_0_header_1_Conditional_10_Template, 3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, MasterPageComponent_ng_container_0_header_1_div_11_Template, 10, 10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 18)(13, "ul")(14, "li", 19)(15, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "app-svg-images", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, MasterPageComponent_ng_container_0_header_1_li_19_Template, 5, 7, "li", 23)(20, MasterPageComponent_ng_container_0_header_1_li_20_Template, 5, 7, "li", 24)(21, MasterPageComponent_ng_container_0_header_1_li_21_Template, 5, 7, "li", 25)(22, MasterPageComponent_ng_container_0_header_1_li_22_Template, 5, 5, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "li", 27)(24, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_Template_a_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "app-svg-images", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, MasterPageComponent_ng_container_0_header_1_li_28_Template, 5, 5, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "li", 30)(30, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MasterPageComponent_ng_container_0_header_1_Template_a_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "app-svg-images", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "app-search-form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("searchTriggered", function MasterPageComponent_ng_container_0_header_1_Template_app_search_form_searchTriggered_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.collapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, MasterPageComponent_ng_container_0_header_1_app_menu_35_Template, 1, 1, "app-menu", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const network_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.servicesEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](34, _c1, ctx_r2.subdomain))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](36, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 22, "/")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](38, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 24, ctx_r2.connectionState$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](40, _c3, ctx_r2.subdomain, ctx_r2.subdomain))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](43, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 26, "/")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](9, (ctx_r2.enterpriseInfo == null ? null : ctx_r2.enterpriseInfo.header_img) ? 9 : 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isDropdownVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"]("navbar-nav ", network_r8.val, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](45, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](46, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 28, "/")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", network_r8.val === "" && ctx_r2.stateService.env.ACCELERATOR);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.stateService.env.MINING_DASHBOARD);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.stateService.networkSupportsLightning());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.stateService.env.MINING_DASHBOARD);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](48, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 30, "/graphs")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.stateService.isMempoolSpaceBuild && ctx_r2.stateService.env.OFFICIAL_MEMPOOL_SPACE && ctx_r2.stateService.network === "testnet4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](50, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 32, "/docs")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hamburgerOpen", ctx_r2.enterpriseInfo === null && ctx_r2.user != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.servicesEnabled);
  }
}
function MasterPageComponent_ng_container_0_app_testnet_alert_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-testnet-alert");
  }
}
function MasterPageComponent_ng_container_0_app_global_footer_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-global-footer", 87);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("user", ctx_r2.user);
  }
}
function MasterPageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MasterPageComponent_ng_container_0_header_1_Template, 36, 52, "header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, MasterPageComponent_ng_container_0_app_testnet_alert_5_Template, 1, 0, "app-testnet-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "main", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, MasterPageComponent_ng_container_0_app_global_footer_9_Template, 1, 1, "app-global-footer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const network_r8 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.headerVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", network_r8.val === "testnet" || network_r8.val === "testnet4" || network_r8.val === "signet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.footerVisible);
  }
}
let MasterPageComponent = /*#__PURE__*/(() => {
  class MasterPageComponent {
    constructor(stateService, languageService, enterpriseService, navigationService, storageService, router) {
      this.stateService = stateService;
      this.languageService = languageService;
      this.enterpriseService = enterpriseService;
      this.navigationService = navigationService;
      this.storageService = storageService;
      this.router = router;
      this.headerVisible = true;
      this.footerVisibleOverride = null;
      this.navCollapsed = false;
      this.isMobile = window.innerWidth <= 767.98;
      this.officialMempoolSpace = this.stateService.env.OFFICIAL_MEMPOOL_SPACE;
      this.subdomain = '';
      this.footerVisible = true;
      this.user = undefined;
      this.servicesEnabled = false;
      this.menuOpen = false;
    }
    ngOnInit() {
      this.env = this.stateService.env;
      this.connectionState$ = this.stateService.connectionState$;
      this.network$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(''), this.stateService.networkChanged$);
      this.urlLanguage = this.languageService.getLanguageForUrl();
      this.subdomain = this.enterpriseService.getSubdomain();
      this.navigationService.subnetPaths.subscribe(paths => {
        this.networkPaths = paths;
        if (this.footerVisibleOverride === null) {
          if (paths.mainnet.indexOf('docs') > -1) {
            this.footerVisible = false;
          } else {
            this.footerVisible = true;
          }
        } else {
          this.footerVisible = this.footerVisibleOverride;
        }
      });
      this.enterpriseInfo$ = this.enterpriseService.info$.subscribe(info => {
        this.enterpriseInfo = info;
      });
      this.servicesEnabled = this.officialMempoolSpace && this.stateService.env.ACCELERATOR === true && this.stateService.network === '';
      this.refreshAuth();
      const isServicesPage = this.router.url.includes('/services/');
      this.menuOpen = isServicesPage && !this.isSmallScreen();
      this.setDropdownVisibility();
    }
    setDropdownVisibility() {
      const networks = [this.env.TESTNET_ENABLED, this.env.TESTNET4_ENABLED, this.env.SIGNET_ENABLED, this.env.LIQUID_ENABLED, this.env.LIQUID_TESTNET_ENABLED, this.env.MAINNET_ENABLED];
      const enabledNetworksCount = networks.filter(networkEnabled => networkEnabled).length;
      this.isDropdownVisible = enabledNetworksCount > 1;
    }
    collapse() {
      this.navCollapsed = !this.navCollapsed;
    }
    isSmallScreen() {
      return window.innerWidth <= 767.98;
    }
    onResize() {
      this.isMobile = this.isSmallScreen();
    }
    brandClick(e) {
      this.stateService.resetScroll$.next(true);
    }
    onLoggedOut() {
      this.refreshAuth();
    }
    refreshAuth() {
      this.user = this.storageService.getAuth()?.user ?? null;
    }
    hamburgerClick(event) {
      if (this.menuComponent) {
        this.menuComponent.hamburgerClick();
        this.menuOpen = this.menuComponent.navOpen;
        event.stopPropagation();
      }
    }
    menuToggled(isOpen) {
      this.menuOpen = isOpen;
    }
    ngOnDestroy() {
      if (this.enterpriseInfo$) {
        this.enterpriseInfo$.unsubscribe();
      }
    }
    static #_ = this.ɵfac = function MasterPageComponent_Factory(t) {
      return new (t || MasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__.EnterpriseService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: MasterPageComponent,
      selectors: [["app-master-page"]],
      viewQuery: function MasterPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.menuComponent = _t.first);
        }
      },
      inputs: {
        headerVisible: "headerVisible",
        footerVisibleOverride: "footerVisibleOverride"
      },
      decls: 2,
      vars: 5,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.offline
           */
          const MSG_EXTERNAL_313850810538580916$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_0 = goog.getMsg("Offline");
          i18n_0 = MSG_EXTERNAL_313850810538580916$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u0911\u092B\u0932\u093E\u0907\u0928";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.reconnecting
           */
          const MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_1 = goog.getMsg("Reconnecting...");
          i18n_1 = MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_1;
        } else {
          i18n_1 = "\u092B\u093F\u0930 \u0938\u0947 \u0915\u0928\u0947\u0915\u094D\u091F \u0939\u094B \u0930\u0939\u093E \u0939\u0948...";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.offline
           */
          const MSG_EXTERNAL_313850810538580916$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_2 = goog.getMsg("Offline");
          i18n_2 = MSG_EXTERNAL_313850810538580916$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u0911\u092B\u0932\u093E\u0907\u0928";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc master-page.reconnecting
           */
          const MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_3 = goog.getMsg("Reconnecting...");
          i18n_3 = MSG_EXTERNAL_2385197688904536915$$SRC_APP_COMPONENTS_MASTER_PAGE_MASTER_PAGE_COMPONENT_TS_3;
        } else {
          i18n_3 = "\u092B\u093F\u0930 \u0938\u0947 \u0915\u0928\u0947\u0915\u094D\u091F \u0939\u094B \u0930\u0939\u093E \u0939\u0948...";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, [4, "ngIf"], ["class", "sticky-header", 4, "ngIf"], [1, "d-flex", 2, "overflow", "clip"], [1, "empty-sidenav"], [1, "flex-grow-1", "d-flex", "flex-column"], [2, "min-width", "375px", "max-width", "100vw"], [1, "flex-grow-1"], [3, "user", 4, "ngIf"], [1, "sticky-header"], [1, "navbar", "navbar-expand-md", "navbar-dark"], [1, "navbar-brand", "d-none", "d-md-flex", 3, "click", "ngClass", "routerLink"], [1, "navbar-brand", "d-flex", "d-md-none", "justify-content-center", 3, "click", "ngClass", "routerLink"], ["height", "42px", 3, "src", "alt"], ["ngbDropdown", "", "class", "dropdown-container", 3, "resize", 4, "ngIf"], ["id", "navbarCollapse", 1, "navbar-collapse"], ["routerLinkActive", "active", "id", "btn-home", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "nav-link", 3, "click", "routerLink"], [1, "svg-wrapper"], ["name", "nav-tachometer", "width", "21.59", "height", "100%"], ["class", "nav-item", "routerLinkActive", "active", "id", "btn-home", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-item mining", "routerLinkActive", "active", "id", "btn-pools", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-item", "routerLinkActive", "active", "id", "btn-lightning", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-item", "routerLinkActive", "active", "id", "btn-blocks", 4, "ngIf"], ["routerLinkActive", "active", "id", "btn-graphs", 1, "nav-item"], ["name", "nav-chart-area", "width", "21.59", "height", "100%"], ["class", "nav-item", "routerLinkActive", "active", "id", "btn-faucet", 4, "ngIf"], ["routerLinkActive", "active", "id", "btn-docs", 1, "nav-item"], ["name", "nav-book", "width", "21.59", "height", "100%"], ["location", "top", 1, "search-form-container", 3, "searchTriggered", "hamburgerOpen"], [3, "navOpen", "loggedOut", "menuToggled", 4, "ngIf"], ["class", "profile_image_container", 3, "click", 4, "ngIf"], ["class", "profile_image_container", 4, "ngIf"], [1, "profile_image_container", 3, "click"], ["onError", "this.src = '/resources/anon.svg'; this.className = 'anon'", 1, "profile_image", 3, "src"], ["name", "hamburger", "height", "40"], [1, "profile_image_container"], ["height", "48px", 1, "mr-3", 3, "src", "alt"], [1, "connection-badge"], ["class", "badge badge-warning", 4, "ngIf"], [3, "ngIf"], ["name", "bitgesell", "height", "30px", "class", "mempool-logo", 3, "ngStyle", 4, "ngIf"], ["name", "officialMempoolSpace", "viewBox", "0 0 500 126", 4, "ngIf"], [1, "subdomain_container"], [1, "subdomain_logo", 3, "src"], [1, "vertical-line"], ["name", "bitgesell", "height", "30px", 1, "mempool-logo", 3, "ngStyle"], ["name", "officialMempoolSpace", "viewBox", "0 0 500 126"], [1, "badge", "badge-warning"], ["height", "36px", 3, "src", "alt"], ["name", "bitgesell", "viewBox", "0 0 500 126", "class", "mempool-logo", 3, "ngStyle", 4, "ngIf"], ["name", "bitgesell", "viewBox", "0 0 500 126", 1, "mempool-logo", 3, "ngStyle"], ["ngbDropdown", "", 1, "dropdown-container", 3, "resize"], ["ngbDropdownToggle", "", "type", "button", "aria-haspopup", "true", 1, "btn", "btn-secondary", "dropdown-toggle-split", "d-flex", "justify-content-center", "align-items-center"], ["width", "20", "height", "20", "viewBox", "0 0 65 65", 1, "d-flex", "justify-content-center", "align-items-center", "current-network-svg", 3, "name"], ["ngbDropdownMenu", "", 3, "ngClass"], ["ngbDropdownItem", "", "class", "mainnet", 3, "routerLink", 4, "ngIf"], ["ngbDropdownItem", "", "class", "signet", 3, "active", "routerLink", 4, "ngIf"], ["ngbDropdownItem", "", "class", "testnet", 3, "active", "routerLink", 4, "ngIf"], ["ngbDropdownItem", "", "class", "testnet4", 3, "active", "routerLink", 4, "ngIf"], ["ngbDropdownItem", "", "class", "liquid", 3, "href", "active", 4, "ngIf"], ["ngbDropdownItem", "", "class", "liquidtestnet", 3, "href", "active", 4, "ngIf"], ["ngbDropdownItem", "", 1, "mainnet", 3, "routerLink"], ["name", "bitcoin", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", 1, "signet", 3, "routerLink"], ["name", "signet", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", 1, "testnet", 3, "routerLink"], ["name", "testnet", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", 1, "testnet4", 3, "routerLink"], ["name", "testnet4", "width", "22", "height", "22", "viewBox", "0 0 65 65", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", 1, "liquid", 3, "href"], ["name", "liquid", "width", "22", "height", "22", "viewBox", "0 0 125 125", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["ngbDropdownItem", "", 1, "liquidtestnet", 3, "href"], ["name", "liquidtestnet", "width", "22", "height", "22", "viewBox", "0 0 125 125", 1, "mainnet", "mr-1", 2, "width", "25px", "height", "25px"], ["name", "nav-rocket", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-pools", 1, "nav-item", "mining", 3, "routerLinkActiveOptions"], ["name", "nav-pickaxe", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-lightning", 1, "nav-item", 3, "routerLinkActiveOptions"], ["name", "nav-bolt", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-blocks", 1, "nav-item"], ["name", "nav-cubes", "width", "21.59", "height", "100%"], ["routerLinkActive", "active", "id", "btn-faucet", 1, "nav-item"], ["name", "nav-faucet-drip", "width", "21.59", "height", "100%"], [3, "loggedOut", "menuToggled", "navOpen"], [3, "user"]];
      },
      template: function MasterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, MasterPageComponent_ng_container_0_Template, 10, 3, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx.network$)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownItem, _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_6__.SearchFormComponent, _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_7__.SvgImagesComponent, _app_shared_components_testnet_alert_testnet_alert_component__WEBPACK_IMPORTED_MODULE_8__.TestnetAlertComponent, _app_shared_components_global_footer_global_footer_component__WEBPACK_IMPORTED_MODULE_9__.GlobalFooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__.RelativeUrlPipe],
      styles: [".sticky-header[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  width: 100%;\n  background-color: var(--bg);\n  z-index: 100;\n}\n\nli.nav-item.active[_ngcontent-%COMP%] {\n  background-color: var(--tertiary);\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  font-size: 1.66em;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  z-index: 100;\n  min-height: 64px;\n  width: 100%;\n  background-color: var(--nav-bg);\n}\n\nli.nav-item[_ngcontent-%COMP%] {\n  margin: auto 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-content: center;\n}\nli.nav-item[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  height: 19.2px;\n  width: auto;\n  margin-bottom: 8px;\n}\n@media (max-width: 991px) {\n  li.nav-item[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  li.nav-item[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n    height: 25.6px;\n    width: auto;\n    margin-bottom: 0;\n  }\n  li.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 12px 0;\n  }\n}\n@media (max-width: 429px) {\n  li.nav-item[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-left: 6px;\n    padding-right: 6px;\n  }\n}\n@media (max-width: 369px) {\n  li.nav-item[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0rem 2rem;\n  }\n  fa-icon[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .dropdown-container[_ngcontent-%COMP%] {\n    margin-right: 16px;\n  }\n  li.nav-item[_ngcontent-%COMP%] {\n    margin: auto 0px;\n    padding: 10px;\n  }\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  background: var(--nav-bg);\n  bottom: 0;\n  box-shadow: 0px 0px 15px 0px #000;\n  flex-direction: row;\n  left: 0;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%;\n}\n@media (min-width: 992px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    background: transparent;\n    box-shadow: none;\n    position: relative;\n    width: auto;\n  }\n}\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n@media (min-width: 370px) {\n  .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n@media (min-width: 430px) {\n  .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex-grow: 1; \n\n  text-align: center; \n\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n@media (min-width: 564px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: auto;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 36px;\n  margin-top: 5px;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.navbar-brand.dual-logos[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n@media (max-width: 767.98px) {\n  .navbar-brand.dual-logos[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nnav[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 15px 0px #000;\n}\n\n.connection-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  width: 100%;\n}\n\n.badge[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: table;\n}\n\n.mainnet.active[_ngcontent-%COMP%] {\n  background-color: var(--tertiary);\n}\n\n.liquid.active[_ngcontent-%COMP%] {\n  background-color: var(--liquid);\n}\n\n.liquidtestnet.active[_ngcontent-%COMP%] {\n  background-color: var(--liquidtestnet);\n}\n\n.testnet.active[_ngcontent-%COMP%] {\n  background-color: var(--testnet);\n}\n\n.signet.active[_ngcontent-%COMP%] {\n  background-color: var(--signet);\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #121420;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  vertical-align: 0.1em;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media (min-width: 991px) {\n  .search-form-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 500px;\n    padding-left: 15px;\n  }\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--icon);\n}\n\n.subdomain_logo[_ngcontent-%COMP%] {\n  height: 35px;\n  overflow: clip;\n  max-width: 140px;\n  margin: auto;\n  align-self: center;\n}\n.subdomain_logo[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.subdomain_container[_ngcontent-%COMP%] {\n  max-width: 140px;\n  text-align: center;\n  align-self: center;\n}\n\n.vertical-line[_ngcontent-%COMP%] {\n  border-left: 1px solid #444;\n  height: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 3px;\n}\n\n.logo-holder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n}\n\n.mempool-logo[_ngcontent-%COMP%], app-svg-images[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 140px;\n  height: 35px;\n}\n\n.beta[_ngcontent-%COMP%] {\n  display: inline;\n  position: absolute;\n  margin: 24px 0px 0px -15px;\n  font-size: 8px;\n}\n@media (max-width: 767.98px) {\n  .beta[_ngcontent-%COMP%] {\n    margin: 30px 0px 0px -19px;\n    font-size: 7px;\n  }\n}\n@media (max-width: 3429px) {\n  .beta[_ngcontent-%COMP%] {\n    margin: 25px 0px 0px -19px;\n    font-size: 7px;\n  }\n}\n@media (max-width: 369px) {\n  .beta[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px -19px;\n    font-size: 7px;\n  }\n}\n\n.beta-network[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.current-network-svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.rtl-layout[_nghost-%COMP%]   .current-network-svg[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .current-network-svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 5px;\n  margin-right: 0px;\n}\n\n.profile_image_container[_ngcontent-%COMP%] {\n  width: 35px;\n  margin-right: 15px;\n  text-align: center;\n  align-self: center;\n  cursor: pointer;\n}\n.profile_image_container[_ngcontent-%COMP%]   .anon[_ngcontent-%COMP%] {\n  border: 1.5px solid lightgrey;\n  color: lightgrey;\n  border-radius: 5px;\n}\n\n.profile_image[_ngcontent-%COMP%] {\n  height: 35px;\n  border-radius: 5px;\n}\n\nmain[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  transition-property: max-width;\n}\n\n.empty-sidenav[_ngcontent-%COMP%] {\n  z-index: 1;\n  background-color: transparent;\n  width: 0px;\n  height: calc(100vh - 65px);\n  position: sticky;\n  top: 65px;\n  padding-bottom: 20px;\n}"]
    });
  }
  return MasterPageComponent;
})();

/***/ }),

/***/ 67579:
/*!***************************************!*\
  !*** ./src/app/master-page.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterPageModule: () => (/* binding */ MasterPageModule),
/* harmony export */   MasterPageRoutingModule: () => (/* binding */ MasterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/master-page/master-page.component */ 63042);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 26800);
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/start/start.component */ 61730);
/* harmony import */ var _components_push_transaction_push_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/push-transaction/push-transaction.component */ 82158);
/* harmony import */ var _components_test_transactions_test_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/test-transactions/test-transactions.component */ 40678);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/calculator/calculator.component */ 37436);
/* harmony import */ var _components_blocks_list_blocks_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/blocks-list/blocks-list.component */ 25433);
/* harmony import */ var _components_rbf_list_rbf_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/rbf-list/rbf-list.component */ 59062);
/* harmony import */ var _components_stratum_stratum_list_stratum_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/stratum/stratum-list/stratum-list.component */ 83321);
/* harmony import */ var _components_server_health_server_health_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/server-health/server-health.component */ 87078);
/* harmony import */ var _components_server_health_server_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/server-health/server-status.component */ 41154);
/* harmony import */ var _components_faucet_faucet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/faucet/faucet.component */ 49040);
/* harmony import */ var _components_simpleproof_widget_simpleproof_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/simpleproof-widget/simpleproof-widget.component */ 42446);
/* harmony import */ var _components_simpleproof_widget_simpleproof_cubo_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/simpleproof-widget/simpleproof-cubo-widget.component */ 5364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 39962);


















const browserWindow = window || {};
// @ts-ignore
const browserWindowEnv = browserWindow.__env || {};
const routes = [{
  path: '',
  component: _components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_0__.MasterPageComponent,
  children: [{
    path: 'mining/blocks',
    redirectTo: 'blocks',
    pathMatch: 'full'
  }, {
    path: 'tx/push',
    component: _components_push_transaction_push_transaction_component__WEBPACK_IMPORTED_MODULE_3__.PushTransactionComponent
  }, {
    path: 'pushtx',
    component: _components_push_transaction_push_transaction_component__WEBPACK_IMPORTED_MODULE_3__.PushTransactionComponent
  }, {
    path: 'tx/test',
    component: _components_test_transactions_test_transactions_component__WEBPACK_IMPORTED_MODULE_4__.TestTransactionsComponent
  }, {
    path: 'about',
    loadChildren: () => __webpack_require__.e(/*! import() */ 241).then(__webpack_require__.bind(__webpack_require__, /*! @components/about/about.module */ 29241)).then(m => m.AboutModule)
  }, {
    path: 'blocks/:page',
    component: _components_blocks_list_blocks_list_component__WEBPACK_IMPORTED_MODULE_6__.BlocksList
  }, {
    path: 'blocks',
    redirectTo: 'blocks/1'
  }, {
    path: 'rbf',
    component: _components_rbf_list_rbf_list_component__WEBPACK_IMPORTED_MODULE_7__.RbfList
  }, ...(browserWindowEnv.STRATUM_ENABLED ? [{
    path: 'stratum',
    component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent,
    children: [{
      path: '',
      component: _components_stratum_stratum_list_stratum_list_component__WEBPACK_IMPORTED_MODULE_8__.StratumList
    }]
  }] : []), {
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
    loadChildren: () => __webpack_require__.e(/*! import() */ 653).then(__webpack_require__.bind(__webpack_require__, /*! @components/transaction/transaction.module */ 66653)).then(m => m.TransactionModule)
  }, {
    path: 'block',
    component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent,
    data: {
      preload: true,
      networkSpecific: true
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ 857).then(__webpack_require__.bind(__webpack_require__, /*! @components/block/block.module */ 95857)).then(m => m.BlockModule)
  }, {
    path: 'docs',
    loadChildren: () => __webpack_require__.e(/*! import() */ 636).then(__webpack_require__.bind(__webpack_require__, /*! @app/docs/docs.module */ 96636)).then(m => m.DocsModule),
    data: {
      preload: true
    }
  }, {
    path: 'api',
    loadChildren: () => __webpack_require__.e(/*! import() */ 636).then(__webpack_require__.bind(__webpack_require__, /*! @app/docs/docs.module */ 96636)).then(m => m.DocsModule)
  }, {
    path: 'lightning',
    loadChildren: () => __webpack_require__.e(/*! import() */ 824).then(__webpack_require__.bind(__webpack_require__, /*! @app/lightning/lightning.module */ 30824)).then(m => m.LightningModule),
    data: {
      preload: browserWindowEnv && browserWindowEnv.LIGHTNING === true,
      networks: ['bitcoin']
    }
  }, {
    path: 'tools/calculator',
    component: _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_5__.CalculatorComponent
  }]
}];
if (window['__env']?.OFFICIAL_MEMPOOL_SPACE) {
  routes[0].children.push({
    path: 'monitoring',
    data: {
      networks: ['bitcoin', 'liquid']
    },
    component: _components_server_health_server_health_component__WEBPACK_IMPORTED_MODULE_9__.ServerHealthComponent
  });
  routes[0].children.push({
    path: 'nodes',
    data: {
      networks: ['bitcoin', 'liquid']
    },
    component: _components_server_health_server_status_component__WEBPACK_IMPORTED_MODULE_10__.ServerStatusComponent
  });
  if (window['isMempoolSpaceBuild']) {
    routes[0].children.push({
      path: 'faucet',
      canActivate: [(route, state) => {
        return state.url.startsWith('/testnet4/');
      }],
      component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent,
      data: {
        preload: true,
        networkSpecific: true
      },
      children: [{
        path: '',
        data: {
          networks: ['bitcoin']
        },
        component: _components_faucet_faucet_component__WEBPACK_IMPORTED_MODULE_11__.FaucetComponent
      }]
    });
  }
}
if (window['__env']?.customize?.dashboard.widgets?.some(w => w.component === 'simpleproof')) {
  routes[0].children.push({
    path: 'sp/verified',
    component: _components_simpleproof_widget_simpleproof_widget_component__WEBPACK_IMPORTED_MODULE_12__.SimpleProofWidgetComponent
  });
}
if (window['__env']?.customize?.dashboard.widgets?.some(w => w.component === 'simpleproof_cubo')) {
  routes[0].children.push({
    path: 'sp/cubo',
    component: _components_simpleproof_widget_simpleproof_cubo_widget_component__WEBPACK_IMPORTED_MODULE_13__.SimpleProofCuboWidgetComponent
  });
}
let MasterPageRoutingModule = /*#__PURE__*/(() => {
  class MasterPageRoutingModule {
    static #_ = this.ɵfac = function MasterPageRoutingModule_Factory(t) {
      return new (t || MasterPageRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: MasterPageRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
    });
  }
  return MasterPageRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](MasterPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();
let MasterPageModule = /*#__PURE__*/(() => {
  class MasterPageModule {
    static #_ = this.ɵfac = function MasterPageModule_Factory(t) {
      return new (t || MasterPageModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: MasterPageModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, MasterPageRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
  return MasterPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](MasterPageModule, {
    declarations: [_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_0__.MasterPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, MasterPageRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
    exports: [_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_0__.MasterPageComponent]
  });
})();

/***/ })

};
;
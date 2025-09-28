"use strict";
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 88338:
/*!**************************************************************!*\
  !*** ./src/app/components/about/about-sponsors.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutSponsorsComponent: () => (/* binding */ AboutSponsorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/enterprise.service */ 27384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);




const _c0 = () => ["fas", "check"];
let AboutSponsorsComponent = /*#__PURE__*/(() => {
  class AboutSponsorsComponent {
    constructor(enterpriseService) {
      this.enterpriseService = enterpriseService;
      this.host = 'https://mempool.space';
      this.context = 'about';
    }
    onSponsorClick(e) {
      this.enterpriseService.goal(5);
      return true;
    }
    onEnterpriseClick(e) {
      this.enterpriseService.goal(6);
      return true;
    }
    static #_ = this.ɵfac = function AboutSponsorsComponent_Factory(t) {
      return new (t || AboutSponsorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_0__.EnterpriseService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AboutSponsorsComponent,
      selectors: [["app-about-sponsors"]],
      inputs: {
        host: "host",
        context: "context"
      },
      decls: 29,
      vars: 15,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.community-sponsor-button
           */
          const MSG_EXTERNAL_1600222688675819631$$SRC_APP_COMPONENTS_ABOUT_ABOUT_SPONSORS_COMPONENT_TS_0 = goog.getMsg("Become a Community Sponsor");
          i18n_0 = MSG_EXTERNAL_1600222688675819631$$SRC_APP_COMPONENTS_ABOUT_ABOUT_SPONSORS_COMPONENT_TS_0;
        } else {
          i18n_0 = "Tapk Bendruomen\u0117s R\u0117meju";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.enterprise-sponsor-button
           */
          const MSG_EXTERNAL_296013377896859721$$SRC_APP_COMPONENTS_ABOUT_ABOUT_SPONSORS_COMPONENT_TS_1 = goog.getMsg("Become an Enterprise Sponsor");
          i18n_1 = MSG_EXTERNAL_296013377896859721$$SRC_APP_COMPONENTS_ABOUT_ABOUT_SPONSORS_COMPONENT_TS_1;
        } else {
          i18n_1 = "Tapk Verslo R\u0117meju";
        }
        return [i18n_0, i18n_1, ["id", "become-sponsor-container", 3, "ngClass"], [1, "become-sponsor", "community"], [2, "font-weight", "700", "font-size", "18px"], [1, "btn", 2, "background-color", "rgba(152, 88, 255, 0.75)", "box-shadow", "0px 0px 50px 5px rgba(152, 88, 255, 0.75)", 3, "click", "href"], [1, "sponsor-feature"], [3, "icon"], [1, "become-sponsor", "enterprise"]];
      },
      template: function AboutSponsorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "If you're an individual...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutSponsorsComponent_Template_a_click_4_listener($event) {
            return ctx.onSponsorClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Exclusive swag");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Your avatar on the About page");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " And more coming soon :)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "If you're a business...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutSponsorsComponent_Template_a_click_18_listener($event) {
            return ctx.onEnterpriseClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Increased API limits");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Co-branded instance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " 99% service-level agreement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.context);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.host + "/sponsor", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.host + "/enterprise", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
      styles: ["#become-sponsor-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin: 68px auto;\n  text-align: center;\n}\n\n#become-sponsor-container.account[_ngcontent-%COMP%] {\n  margin: 20px auto;\n}\n\n.become-sponsor[_ngcontent-%COMP%] {\n  background-color: var(--bg);\n  border-radius: 16px;\n  padding: 12px 20px;\n  width: 400px;\n  padding: 40px 20px;\n}\n\n.become-sponsor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n#become-sponsor-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n#become-sponsor-container[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  color: #2ecc71;\n  margin-right: 5px;\n}\n\n#become-sponsor-container[_ngcontent-%COMP%]   .sponsor-feature[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 250px;\n  margin: 12px auto;\n  white-space: nowrap;\n}\n\n@media (max-width: 992px) {\n  #become-sponsor-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}"]
    });
  }
  return AboutSponsorsComponent;
})();

/***/ }),

/***/ 1014:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/websocket.service */ 48246);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/opengraph.service */ 26857);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/enterprise.service */ 27384);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_about_about_sponsors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/about/about-sponsors.component */ 88338);













const _c0 = ["promoVideo"];
function AboutComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("[", ctx_r1.stateService.env.GIT_COMMIT_HASH_MEMPOOL_SPACE, "]");
  }
}
function AboutComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, " \u00AE");
  }
}
function AboutComponent_div_496_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 528);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sponsor_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "https://x.com/" + sponsor_r3.username, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("title", sponsor_r3.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "/api/v1/services/account/images/" + sponsor_r3.username, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AboutComponent_div_496_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 526)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AboutComponent_div_496_div_1_ng_template_5_Template, 2, 3, "ng-template", 527);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const profiles_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", profiles_r4.whales);
  }
}
function AboutComponent_div_496_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 528);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sponsor_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "https://x.com/" + sponsor_r5.username, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("title", sponsor_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "/api/v1/services/account/images/" + sponsor_r5.username, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AboutComponent_div_496_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 448)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AboutComponent_div_496_div_2_ng_template_4_Template, 2, 3, "ng-template", 527);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const profiles_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", profiles_r4.chads);
  }
}
function AboutComponent_div_496_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 523);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AboutComponent_div_496_div_1_Template, 6, 1, "div", 524)(2, AboutComponent_div_496_div_2_Template, 5, 1, "div", 525);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const profiles_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", profiles_r4.whales.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", profiles_r4.chads.length > 0);
  }
}
function AboutComponent_ng_container_502_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 528);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ogSponsor_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "https://x.com/" + ogSponsor_r6.handle, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("title", ogSponsor_r6.handle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "/api/v1/donations/images/" + ogSponsor_r6.handle, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AboutComponent_ng_container_502_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AboutComponent_ng_container_502_a_1_Template, 2, 3, "a", 530);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ogs_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ogs_r7);
  }
}
function AboutComponent_ng_container_626_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 532);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const translator_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "https://x.com/" + translator_r8.value, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("title", translator_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "/api/v1/translators/images/" + translator_r8.value, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AboutComponent_ng_container_626_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 531)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AboutComponent_ng_container_626_ng_template_5_Template, 2, 3, "ng-template", 527);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const translators_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", translators_r9);
  }
}
function AboutComponent_ng_container_629_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 532);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const contributor_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "https://github.com/" + contributor_r10.name, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("title", contributor_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "/api/v1/contributors/images/" + contributor_r10.id, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](contributor_r10.name);
  }
}
function AboutComponent_ng_container_629_div_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 532);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const contributor_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("project-member-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "https://github.com/" + contributor_r11.name, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("title", contributor_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "/api/v1/contributors/images/" + contributor_r11.id, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](contributor_r11.name);
  }
}
function AboutComponent_ng_container_629_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 535)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AboutComponent_ng_container_629_div_6_ng_template_4_Template, 4, 6, "ng-template", 527);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const contributors_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", contributors_r12.core);
  }
}
function AboutComponent_ng_container_629_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 533)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](3, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AboutComponent_ng_container_629_ng_template_5_Template, 4, 4, "ng-template", 527);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AboutComponent_ng_container_629_div_6_Template, 5, 1, "div", 534);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const contributors_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", contributors_r12.regular);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", contributors_r12.core.length);
  }
}
function AboutComponent_ng_template_677_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "br")(1, "div", 536);
  }
}
let AboutComponent = /*#__PURE__*/(() => {
  class AboutComponent {
    constructor(websocketService, seoService, ogService, stateService, enterpriseService, apiService, router, route, locale, document) {
      this.websocketService = websocketService;
      this.seoService = seoService;
      this.ogService = ogService;
      this.stateService = stateService;
      this.enterpriseService = enterpriseService;
      this.apiService = apiService;
      this.router = router;
      this.route = route;
      this.locale = locale;
      this.document = document;
      this.frontendGitCommitHash = this.stateService.env.GIT_COMMIT_HASH;
      this.packetJsonVersion = this.stateService.env.PACKAGE_JSON_VERSION;
      this.officialMempoolSpace = this.stateService.env.OFFICIAL_MEMPOOL_SPACE;
      this.showNavigateToSponsor = false;
    }
    ngOnInit() {
      this.backendInfo$ = this.stateService.backendInfo$;
      this.seoService.setTitle("Apie");
      this.seoService.setDescription("Learn more about The Mempool Open Source Project\xAE: enterprise sponsors, individual sponsors, integrations, who contributes, FOSS licensing, and more.");
      this.ogService.setManualOgImage('about.jpg');
      this.websocketService.want(['blocks']);
      this.profiles$ = this.apiService.getAboutPageProfiles$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(profiles => {
        const scrollToSponsors = this.route.snapshot.fragment === 'community-sponsors';
        if (scrollToSponsors && !profiles?.whales?.length && !profiles?.chads?.length) {
          return;
        } else {
          this.goToAnchor(scrollToSponsors);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
      this.translators$ = this.apiService.getTranslators$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(translators => {
        for (const t in translators) {
          if (translators[t] === '') {
            delete translators[t];
          }
        }
        return translators;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.goToAnchor()));
      this.ogs$ = this.apiService.getOgs$();
      this.allContributors$ = this.apiService.getContributor$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(contributors => {
        return {
          regular: contributors.filter(user => !user.core_constributor),
          core: contributors.filter(user => user.core_constributor)
        };
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.goToAnchor()));
    }
    ngAfterViewInit() {
      this.goToAnchor();
    }
    goToAnchor(scrollToSponsor = false) {
      if (!scrollToSponsor) {
        return;
      }
      setTimeout(() => {
        if (this.route.snapshot.fragment) {
          const el = scrollToSponsor ? this.document.getElementById('community-sponsors-anchor') : this.document.getElementById(this.route.snapshot.fragment);
          if (el) {
            if (scrollToSponsor) {
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
              });
            } else {
              el.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        }
      }, 1);
    }
    sponsor() {
      if (this.officialMempoolSpace && this.stateService.env.BASE_MODULE === 'mempool') {
        this.router.navigateByUrl('/enterprise');
      } else {
        this.showNavigateToSponsor = true;
      }
    }
    showSubtitles(language) {
      return this.locale.startsWith(language) && !this.locale.startsWith('en');
    }
    unmutePromoVideo() {
      this.promoVideo.nativeElement.muted = false;
    }
    onSponsorClick(e) {
      this.enterpriseService.goal(5);
      return true;
    }
    onEnterpriseClick(e) {
      this.enterpriseService.goal(6);
      return true;
    }
    static #_ = this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__.OpenGraphService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__.EnterpriseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      viewQuery: function AboutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.promoVideo = _t.first);
        }
      },
      decls: 679,
      vars: 40,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.about-the-project
           */
          const MSG_EXTERNAL_5931306339504494731$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_0 = goog.getMsg("The Mempool Open Source Project");
          i18n_0 = MSG_EXTERNAL_5931306339504494731$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u201EMempool\u201C Atviro Kodo Projektas";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @suppress {msgDescriptions}
           */
          const MSG_EXTERNAL_3179737128586380463$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_1 = goog.getMsg("Our mempool and blockchain explorer for the Bitcoin community, focusing on the transaction fee market and multi-layer ecosystem, completely self-hosted without any trusted third-parties.");
          i18n_1 = MSG_EXTERNAL_3179737128586380463$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_1;
        } else {
          i18n_1 = "Nuo tre\u010Di\u0173j\u0173 \u0161ali\u0173 nepriklausoma daugiasluoksn\u0117s Bitkoino ekosistemos ir transakcij\u0173 analizei skirta atminties telkinio bei blok\u0173 grandin\u0117s nar\u0161ykl\u0117 skirta Bitkoino bendruomenei.";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.sponsors.enterprise.withRocket
           */
          const MSG_EXTERNAL_6052527816314853503$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_2 = goog.getMsg("Enterprise Sponsors \uD83D\uDE80");
          i18n_2 = MSG_EXTERNAL_6052527816314853503$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_2;
        } else {
          i18n_2 = "Verslo R\u0117m\u0117jai \uD83D\uDE80";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.sponsors.withHeart
           */
          const MSG_EXTERNAL_1687681227105470891$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_3 = goog.getMsg("OG Sponsors \u2764\uFE0F");
          i18n_3 = MSG_EXTERNAL_1687681227105470891$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_3;
        } else {
          i18n_3 = "OG R\u0117mejai";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.community-integrations
           */
          const MSG_EXTERNAL_7796386351392692571$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_4 = goog.getMsg("Community Integrations");
          i18n_4 = MSG_EXTERNAL_7796386351392692571$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_4;
        } else {
          i18n_4 = "Bendruomen\u0117s Integracijos";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.alliances
           */
          const MSG_EXTERNAL_8035640906303705325$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_5 = goog.getMsg("Community Alliances");
          i18n_5 = MSG_EXTERNAL_8035640906303705325$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_5;
        } else {
          i18n_5 = "Bendruomen\u0117s Aljansai";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.maintainers
           */
          const MSG_EXTERNAL_2324634911062432639$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_6 = goog.getMsg("Project Maintainers");
          i18n_6 = MSG_EXTERNAL_2324634911062432639$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_6;
        } else {
          i18n_6 = "Projekto Pri\u017Ei\u016Br\u0117tojai";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.sponsors.withHeart
           */
          const MSG_EXTERNAL_1593489110275807992$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_7 = goog.getMsg("Whale Sponsors");
          i18n_7 = MSG_EXTERNAL_1593489110275807992$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_7;
        } else {
          i18n_7 = "Banginiai R\u0117m\u0117jai ";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.sponsors.withHeart
           */
          const MSG_EXTERNAL_7004030508625802004$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_8 = goog.getMsg("Chad Sponsors");
          i18n_8 = MSG_EXTERNAL_7004030508625802004$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_8;
        } else {
          i18n_8 = "\u010Cadai R\u0117mejai";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.translators
           */
          const MSG_EXTERNAL_4602422158722468607$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_9 = goog.getMsg("Project Translators");
          i18n_9 = MSG_EXTERNAL_4602422158722468607$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_9;
        } else {
          i18n_9 = "Projekto Vert\u0117jai";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.contributors
           */
          const MSG_EXTERNAL_5339984283943607375$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_10 = goog.getMsg("Project Contributors");
          i18n_10 = MSG_EXTERNAL_5339984283943607375$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_10;
        } else {
          i18n_10 = "Projekto Pagalbininkai";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about.project_members
           */
          const MSG_EXTERNAL_2304614617903385642$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_11 = goog.getMsg("Project Members");
          i18n_11 = MSG_EXTERNAL_2304614617903385642$$SRC_APP_COMPONENTS_ABOUT_ABOUT_COMPONENT_TS_11;
        } else {
          i18n_11 = "Projekto Nariai";
        }
        return [["promoVideo", ""], ["loadingSponsors", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, [1, "container-xl", "about-page"], [1, "intro"], [2, "margin-left", "auto", "margin-right", "-20px", "margin-bottom", "-20px"], ["src", "/resources/mempool-logo-bigger.png", 1, "logo"], [1, "version"], [3, "href"], [4, "ngIf"], [1, "about-text"], [3, "ngIf"], ["src", "/resources/promo-video/mempool-promo.mp4", "poster", "/resources/promo-video/mempool-promo.jpg", "controls", "", "loop", "", "playsinline", "", 3, "click", "touchstart", "autoplay", "muted"], ["label", "English", "kind", "captions", "srclang", "en", "src", "/resources/promo-video/en.vtt"], ["label", "\u65E5\u672C\u8A9E", "kind", "captions", "srclang", "ja", "src", "/resources/promo-video/ja.vtt"], ["label", "\u4E2D\u6587", "kind", "captions", "srclang", "zh", "src", "/resources/promo-video/zh.vtt"], ["label", "Svenska", "kind", "captions", "srclang", "sv", "src", "/resources/promo-video/sv.vtt"], ["label", "\u010Ce\u0161tina", "kind", "captions", "srclang", "cs", "src", "/resources/promo-video/cs.vtt"], ["label", "Suomi", "kind", "captions", "srclang", "fi", "src", "/resources/promo-video/fi.vtt"], ["label", "Fran\u00E7ais", "kind", "captions", "srclang", "fr", "src", "/resources/promo-video/fr.vtt"], ["label", "Deutsch", "kind", "captions", "srclang", "de", "src", "/resources/promo-video/de.vtt"], ["label", "Italiano", "kind", "captions", "srclang", "it", "src", "/resources/promo-video/it.vtt"], ["label", "Lietuvi\u0173", "kind", "captions", "srclang", "lt", "src", "/resources/promo-video/lt.vtt"], ["label", "Norsk", "kind", "captions", "srclang", "nb", "src", "/resources/promo-video/nb.vtt"], ["label", "\u0641\u0627\u0631\u0633\u06CC", "kind", "captions", "srclang", "fa", "src", "/resources/promo-video/fa.vtt"], ["label", "Polski", "kind", "captions", "srclang", "pl", "src", "/resources/promo-video/pl.vtt"], ["label", "Rom\u00E2n\u0103", "kind", "captions", "srclang", "ro", "src", "/resources/promo-video/ro.vtt"], ["label", "Portugu\u00EAs", "kind", "captions", "srclang", "pt", "src", "/resources/promo-video/pt.vtt"], ["id", "enterprise-sponsors", 1, "enterprise-sponsor"], [1, "wrapper"], ["href", "https://spiral.xyz/", "target", "_blank", "title", "Spiral"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "-115 -15 879 679", 1, "image", 2, "background-color", "rgb(27,20,100)"], ["id", "linear-gradient", "x1", "81.36", "y1", "311.35", "x2", "541.35", "y2", "311.35", "gradientUnits", "userSpaceOnUse"], ["offset", "0.18", "stop-color", "blue"], ["offset", "1", "stop-color", "#f0f"], ["d", "M326.4,572.09C201.2,572.09,141,503,112.48,445,84.26,387.47,81.89,330.44,81.69,322.31c-4.85-77,41-231.78,249.58-271.2a28.05,28.05,0,0,1,10.41,55.13c-213.12,40.28-204.44,206-204,213,0,.53.06,1.06.07,1.6C137.9,328.74,142.85,516,326.4,516,394.74,516,443,486.6,470,428.63c24.48-52.74,19.29-112.45-13.52-155.83-22.89-30.27-52.46-45-90.38-45-34.46,0-63.47,9.88-86.21,29.37A91.5,91.5,0,0,0,248,322.3c-1.41,25.4,7.14,49.36,24.07,67.49C287.27,406,305,413.9,326.4,413.9c27.46,0,45.52-9,53.66-26.81,8.38-18.3,3.61-38.93-.19-43.33-9.11-10-18.69-13.68-22.48-13-2.53.43-5.78,4.61-8.48,10.92a28,28,0,0,1-51.58-22c14.28-33.44,37.94-42,50.76-44.2,24.78-4.18,52.17,7.3,73.34,30.65s25.51,68.55,10.15,103.22C421.54,432,394.52,470,326.4,470c-36.72,0-69.67-14.49-95.29-41.92C203.64,398.68,189.77,360,192,319.19a149.1,149.1,0,0,1,51.31-104.6c33.19-28.45,74.48-42.87,122.71-42.87,55.12,0,101.85,23.25,135.12,67.23,45.36,60,52.9,141.71,19.66,213.3C495.45,506.92,441.12,572.09,326.4,572.09Z", 1, "cls-1"], ["href", "https://foundrydigital.com/", "target", "_blank", "title", "Foundry"], ["xmlns", "http://www.w3.org/2000/svg", "id", "b", "data-name", "Layer 2", "width", "32", "height", "90", "viewBox", "0 -5 32 90", 1, "image", 2, "zoom", "1"], ["id", "c", "data-name", "b"], ["cx", "24", "cy", "32", "r", "8", 1, "e"], ["cx", "24", "cy", "56", "r", "8", 1, "e"], ["cx", "8", "cy", "68", "r", "8", 1, "e"], ["cx", "24", "cy", "8", "r", "8", 1, "d"], ["cx", "8", "cy", "20", "r", "8", 1, "d"], ["cx", "8", "cy", "44", "r", "8", 1, "d"], ["href", "https://blockstream.com/", "target", "_blank", "title", "Blockstream"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.0", "x", "0px", "y", "0px", "viewBox", "200 200 600 600", 1, "image", 2, "enable-background", "new 0 0 1000 1000", "background-color", "#111316 !important"], ["type", "text/css"], ["d", "M659.7,392.3c10.2,14.3,18.4,29.9,24.5,46.4l21.8-7.1c-6.9-18.9-16.4-36.8-28.1-53.1L659.7,392.3z", 1, "st1"], ["d", "M510.6,289.2c-5.8-0.2-11.7-0.2-17.5,0l1.6,22.8c8.8-0.3,17.6-0.1,26.3,0.7c8.7,0.8,17.4,2.2,26,4.2l5.8-22.1  c-9.8-2.3-19.7-3.9-29.7-4.8C519,289.6,514.7,289.3,510.6,289.2z", 1, "st1"], ["d", "M297.1,605.5c-9.1-18.6-15.7-38.3-19.5-58.6l-23.9,3.8c4.2,23,11.6,45.3,22,66.2L297.1,605.5z", 1, "st1"], ["d", "M284.8,375.6l21.2,11.8c10.6-17.8,23.5-34,38.5-48.3l-16.2-18C311.3,337.2,296.7,355.5,284.8,375.6z", 1, "st1"], ["d", "M254.8,453.5l23.8,4.2c4.2-20.3,11.2-39.9,20.7-58.3l-21.2-11.7C267.3,408.5,259.5,430.6,254.8,453.5z", 1, "st1"], ["d", "M409.9,268.8l9.5,22.2c19.3-7.6,39.5-12.5,60.1-14.5l-1.7-24.1C454.5,254.6,431.7,260.1,409.9,268.8z", 1, "st1"], ["d", "M338.5,311.8l16.2,18c15.8-13.4,33.3-24.6,52.1-33.4l-9.5-22.2C376,283.9,356.2,296.6,338.5,311.8z", 1, "st1"], ["d", "M697.1,667.6l-18.9-15.1c-13.4,15.8-28.9,29.7-46,41.4l13,20.5C664.6,701.3,682.1,685.6,697.1,667.6z", 1, "st1"], ["d", "M402.5,710.7c-18.6-9.1-35.9-20.7-51.4-34.5l-16.5,17.7c17.4,15.6,37,28.6,58,38.8L402.5,710.7z", 1, "st1"], ["d", "M755.4,528.2c3.1-32.6-0.2-65.5-9.7-96.8l-23,7.6c13.2,44.4,12.7,91.7-1.3,135.8l22.8,8.1  C749.9,565.2,753.7,546.8,755.4,528.2z", 1, "st1"], ["d", "M614.2,689.2L602,670c-15.1,9-31.3,16-48.3,20.7l5.4,22.2C578.5,707.5,597,699.6,614.2,689.2z", 1, "st1"], ["d", "M314.5,528.8c-1.7-14.2-1.9-28.6-0.5-42.9c0.3-3.5,0.7-6.5,1.2-9.6l-22.5-4c-0.5,3.8-1,7.6-1.4,11.5  c-1.5,16.1-1.3,32.4,0.7,48.5L314.5,528.8z", 1, "st1"], ["d", "M568.2,284.7c19.9,5.8,38.9,14.4,56.4,25.4l13.5-20.2c-19.8-12.5-41.2-22.1-63.7-28.7L568.2,284.7z", 1, "st1"], ["d", "M469.8,755.8l2.3-24.1c-19.5-2.6-38.6-7.8-56.8-15.3l-10.1,22.2C425.8,747.1,447.6,752.9,469.8,755.8z", 1, "st1"], ["d", "M351.3,657.7l15.7-16.6c-12.4-12.5-23.1-26.5-31.8-41.8l-20.3,10.7C324.8,627.4,337.1,643.5,351.3,657.7z", 1, "st1"], ["d", "M649.5,297.7l-13.6,20.2c16.9,12,32,26.3,45.1,42.4l19.4-14.8C685.7,327.2,668.6,311.2,649.5,297.7z", 1, "st1"], ["d", "M672.7,633.2c12-16.1,21.8-33.7,29.1-52.5l-21.5-7.7c-6.4,16.4-15,31.9-25.5,46L672.7,633.2z", 1, "st1"], ["d", "M690.6,449.6l-21.6,7.2c6,20.7,8,42.4,6,63.8c-1.1,11.9-3.4,23.7-6.9,35.2l21.5,7.6c4.1-13.2,6.9-26.9,8.2-40.7  C700.1,498.1,697.6,473.3,690.6,449.6z", 1, "st2"], ["d", "M475.2,698l2.1-22.7c-13.3-2-26.4-5.5-38.9-10.5l-9.4,20.7C443.8,691.5,459.3,695.7,475.2,698z", 1, "st2"], ["d", "M631.8,456.2l20.4-6.9c-4.9-12.9-11.4-25.2-19.4-36.6l-17.1,13C622.3,435.2,627.7,445.4,631.8,456.2z", 1, "st2"], ["d", "M508.4,345.7h-11.2l1.5,21.4c11.5-0.3,22.9,0.7,34.2,3.2l5.5-20.7c-6.8-1.5-13.6-2.6-20.5-3.2  C514.8,346.1,511.6,345.9,508.4,345.7z", 1, "st2"], ["d", "M335.5,403.8l20,11.1c7.5-12.4,16.5-23.7,26.9-33.8L367,364.1C354.8,375.9,344.2,389.2,335.5,403.8z", 1, "st2"], ["d", "M553.8,339.5c13.8,4.2,27.1,10.2,39.4,17.7l12.7-19c-14.4-8.9-30-15.8-46.2-20.7L553.8,339.5z", 1, "st2"], ["d", "M635.9,394.5l18.1-13.8c-10.7-13.2-23.2-24.9-36.9-34.8l-12.7,19C616.2,373.4,626.7,383.3,635.9,394.5z", 1, "st2"], ["d", "M611.5,584.6l16.8,13.4c8.2-11.2,14.9-23.3,20.1-36.2l-20.2-7.2C623.8,565.2,618.2,575.3,611.5,584.6z", 1, "st2"], ["d", "M389.9,635.1l-15.6,16.6c12.8,11.2,26.9,20.7,42.2,28.2l9.4-20.7C412.9,652.8,400.8,644.6,389.9,635.1z", 1, "st2"], ["d", "M369.2,520.2c-1-9.7-1.1-19.5-0.2-29.2c0.2-1.7,0.4-3.5,0.6-5.1l-21.1-3.8c-0.3,2.3-0.6,4.6-0.8,6.9  c-1.1,11.5-0.9,23,0.3,34.5L369.2,520.2z", 1, "st2"], ["d", "M333.6,538l-22.6,3.5c3.2,16.7,8.6,33,16,48.3l20.2-10.7C340.9,566,336.4,552.2,333.6,538z", 1, "st2"], ["d", "M601.7,646.3l12.3,19.2c14-9.6,26.7-21,37.7-33.8l-17.9-14.2C624.4,628.4,613.6,638.1,601.7,646.3z", 1, "st2"], ["d", "M348.8,426.9l-19.9-11c-7.8,15.1-13.5,31.2-17,47.8l22.5,4C337.4,453.5,342.2,439.8,348.8,426.9z", 1, "st2"], ["d", "M540.6,636.9l5,20.7c13.3-3.8,26.1-9.2,38.1-16.2l-11.6-18.1C562.2,629,551.6,633.6,540.6,636.9z", 1, "st2"], ["d", "M384,573.5l-19,9.9c6.9,12,15.4,23,25.1,32.9l14.8-15.7C396.9,592.4,389.9,583.3,384,573.5z", 1, "st2"], ["d", "M496.7,677.1c-1.9,0-3.8-0.2-5.7-0.4l-2.1,22.7c17.9,1.3,35.9,0.1,53.4-3.5l-5.3-22.2  C523.8,676.5,510.2,677.6,496.7,677.1z", 1, "st2"], ["d", "M377.3,354.9l15.3,16.9c11.1-9.3,23.3-17.1,36.4-23.3l-9-21C404.6,334.7,390.3,343.9,377.3,354.9z", 1, "st2"], ["d", "M432.7,322.1l9,21c13.5-5.2,27.6-8.7,42-10.3L482,310C465.1,311.9,448.5,315.9,432.7,322.1z", 1, "st2"], ["d", "M490.3,757.5c21.5,0.7,43-1.1,64.2-5.2l-5-23.3c-18.3,3.8-37,5.3-55.8,4.6c-3,0-5.2-0.4-8.2-0.6l-2.1,24.4  c2.3,0.1,4.6,0.1,6.9,0L490.3,757.5z", 1, "st1"], ["href", "https://unchained.com/", "target", "_blank", "title", "Unchained"], ["id", "Layer_1", "width", "78", "height", "78", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 156.68 156.68", 1, "image"], ["d", "m78.34,0C35.07,0,0,35.07,0,78.34s35.07,78.34,78.34,78.34,78.34-35.07,78.34-78.34S121.6,0,78.34,0ZM20.23,109.5c-4.99-9.28-7.81-19.89-7.81-31.16C12.42,41.93,41.93,12.42,78.34,12.42c33.15,0,60.58,24.46,65.23,56.32h-37.48c-45.29,0-71.19,20.05-85.85,40.76Zm58.11,34.76c-12.42,0-24.04-3.44-33.96-9.41,3.94-8.85,9.11-18.7,15.84-28.9,20.99-31.8,52.2-31.19,76.49-31.19h7.45c.06,1.18.1,2.38.1,3.58,0,36.41-29.51,65.92-65.92,65.92Z", 1, "cls-unchained-1"], ["d", "m91.98,42.4l-3.62-1.18c-3.94-1.29-7.03-4.38-8.32-8.32l-1.18-3.63c-.13-.39-.68-.39-.81,0l-1.18,3.63c-1.29,3.94-4.38,7.03-8.32,8.32l-3.62,1.18c-.39.13-.39.68,0,.81l3.62,1.18c3.94,1.29,7.03,4.38,8.32,8.32l1.18,3.63c.13.39.68.39.81,0l1.18-3.63c1.29-3.94,4.38-7.03,8.32-8.32l3.62-1.18c.39-.13.39-.68,0-.81Z", 1, "cls-unchained-1"], ["href", "https://bitkey.world/", "target", "_blank", "title", "Bitkey"], ["src", "/resources/profile/bitkey.svg", 1, "image"], ["href", "https://metaplanet.jp", "target", "_blank", "title", "Metaplanet"], ["xmlns", "http://www.w3.org/2000/svg", "id", "mp-Layer_101", "viewBox", "0 0 85 85", "data-name", "Layer 101", "version", "1.1", 1, "image"], ["id", "mp-style1", "type", "text/css"], ["id", "mp-_005", "data-name", "5", "transform", "translate(-443.5 -.1)", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon1", "d", "M497.5 32.99h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon2", "d", "M496.49 36.03h.5v-.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon3", "d", "M496.49 34h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon4", "d", "m496.49 38.35.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon5", "d", "m496.49 32.28.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon6", "d", "m496.49 36.32.5.51v-.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon7", "d", "m495.47 29.24.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon8", "d", "M496.49 38.05h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon9", "d", "m496.49 30.25.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon10", "d", "M497.5 35.01h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon11", "d", "m497.5 35.31.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon12", "d", "M496.49 31.98h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon13", "d", "m497.5 33.29.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon14", "d", "M497.5 37.04h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon15", "d", "M495.47 30.96h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon16", "d", "m496.49 28.22.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon17", "d", "m497.5 37.34.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon18", "d", "m496.49 34.3.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon19", "d", "m494.46 34.3.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon20", "d", "M494.46 34h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon21", "d", "M494.46 36.03h.5v-.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon22", "d", "m494.46 32.28.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon23", "d", "M494.46 31.98h.5v-.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon24", "d", "m494.46 36.32.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon25", "d", "m494.46 38.35.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon26", "d", "M494.46 40.07h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon27", "d", "M494.46 38.05h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon28", "d", "m495.47 31.26.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon29", "d", "M495.47 35.01h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon30", "d", "m495.47 33.29.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon31", "d", "M495.48 32.99h.49v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon32", "d", "m495.47 35.31.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon33", "d", "m495.48 39.36.49.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon34", "d", "M495.47 39.06h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon35", "d", "M495.47 37.04h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon36", "d", "m495.47 37.34.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon37", "d", "m499.52 27.21.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon38", "d", "m494.46 40.37.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon39", "d", "M499.53 28.94h.49v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon40", "d", "m500.54 34.3.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon41", "d", "m499.52 25.19.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon42", "d", "M499.52 26.91h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon43", "d", "m499.53 31.26.49.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon44", "d", "M499.53 32.99h.49v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon45", "d", "m499.53 29.24.49.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon46", "d", "M499.52 30.96h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon47", "d", "M500.54 34h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon48", "d", "m500.54 28.22.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon49", "d", "M500.54 27.92h.5v-.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon50", "d", "m500.54 26.2.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon51", "d", "m497.5 31.26.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon52", "d", "m500.54 30.25.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon53", "d", "m500.54 32.28.5.49v-.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon54", "d", "m499.52 33.29.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon55", "d", "M500.54 31.98h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon56", "d", "M500.54 29.95h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon57", "d", "M499.53 35.01h.49v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon58", "d", "m497.5 27.21.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon59", "d", "m498.51 36.32.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon60", "d", "M498.51 34h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon61", "d", "m498.51 34.3.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon62", "d", "M497.5 30.96h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon63", "d", "m497.5 29.24.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon64", "d", "M497.5 28.94h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon65", "d", "M498.51 36.03h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon66", "d", "m498.51 26.2.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon67", "d", "M498.51 27.92h.5v-.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon68", "d", "m499.52 35.31.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon69", "d", "m498.51 28.22.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon70", "d", "M498.51 31.98h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon71", "d", "m498.51 32.28.5.49v-.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon72", "d", "m498.51 30.25.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon73", "d", "M498.51 29.95h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon74", "d", "m481.59 38.05-1.67-1.66-1.66 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon75", "d", "m483.76 36.17-1.66-1.66v3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon76", "d", "M485.64 38.35h-3.33l1.67 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon77", "d", "m483.76 40.23-1.66-1.67v3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon78", "d", "M478.26 34h3.33l-1.66-1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon79", "d", "M482.31 38.05h3.33l-1.66-1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon80", "d", "M500.54 25.9h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon81", "d", "M466.11 25.9h3.54v-3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon82", "d", "M485.64 42.4h-3.33l1.67 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon83", "d", "M482.31 46.15h3.33l-1.66-1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon84", "d", "m485.64 42.1-1.66-1.66-1.67 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon85", "d", "M477.54 34 474 30.46V34z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon86", "d", "m479.92 40.01 1.67-1.66h-3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon87", "d", "M477.54 29.95 474 26.41v3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon88", "d", "m473.49 29.95-3.54-3.54v3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon89", "d", "m473.49 25.9-3.54-3.54v3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon90", "d", "M481.59 34.3h-3.33l1.66 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon91", "d", "m479.71 36.17-1.66-1.66v3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon92", "d", "m479.71 32.12-1.66-1.66v3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon93", "d", "M469.44 46.45h-7.59v7.59z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon94", "d", "m465.75 26.26-3.69 3.69h7.38z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon95", "d", "M469.44 22.15h-7.38l3.69 3.69z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon96", "d", "M469.44 30.25h-7.38l3.69 3.69z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon97", "d", "m465.39 25.9-3.54-3.54v3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon98", "d", "M469.44 38.35h-7.38l3.69 3.69z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon99", "d", "m469.44 21.85-7.59-7.59v7.59z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon100", "d", "M465.39 26.2h-3.54v3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon101", "d", "m466.11 26.2 3.54 3.54V26.2z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon102", "d", "M462.06 46.15h7.38l-3.69-3.69z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon103", "d", "m469.44 38.05-3.69-3.69-3.69 3.69z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon104", "d", "M462.06 54.25h7.59v-7.59z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon105", "d", "m465.96 42.25 3.69 3.69v-7.38z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon106", "d", "m466.11 34.3 3.54 3.54V34.3z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon107", "d", "M469.65 30.46 466.11 34h3.54v-.21z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-rect107", "d", "M461.85 54.55h7.8v7.8h-7.8z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon108", "d", "m465.54 42.25-3.69-3.69v7.38z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon109", "d", "m473.49 34-3.54-3.54V34z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon110", "d", "m465.54 34.15-3.69-3.69v7.38z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon111", "d", "m481.59 42.1-1.67-1.66-1.66 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon112", "d", "m488.39 40.37 1.51 1.52v-1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon113", "d", "M488.39 44.13h1.51v-1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon114", "d", "m490.41 42.4 1.51 1.51V42.4z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon115", "d", "m488.39 44.42 1.51 1.52v-1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon116", "d", "M488.39 40.07h1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon117", "d", "M486.36 46.15h1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon118", "d", "m486.36 46.45 1.51 1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon119", "d", "m486.36 42.4 1.51 1.51V42.4z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon120", "d", "M486.36 42.1h1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon121", "d", "m486.36 38.35 1.51 1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon122", "d", "M492.44 40.07h1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon123", "d", "m492.44 40.37 1.51 1.52v-1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon124", "d", "m492.44 36.32 1.51 1.52v-1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon125", "d", "M490.41 42.1h1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon126", "d", "M492.44 36.03h1.51v-1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon127", "d", "m490.41 34.3 1.51 1.51V34.3z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon128", "d", "m490.41 38.35 1.51 1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon129", "d", "m470.16 34.3 3.54 3.54V34.3z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon130", "d", "M490.41 38.05h1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon131", "d", "m474.21 30.25 3.54 3.54v-3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon132", "d", "m474.21 38.35 3.54 3.54v-3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon133", "d", "m474.21 34.3 3.54 3.54V34.3z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon134", "d", "m479.71 40.22-1.66-1.66v3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon135", "d", "M477.54 38.05 474 34.51v3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon136", "d", "m492.44 32.28 1.51 1.51v-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon137", "d", "m470.16 30.25 3.54 3.54v-3.54z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon138", "d", "m470.16 26.2 3.54 3.54V26.2z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon139", "d", "m484.19 48.32 1.66 1.67v-3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon140", "d", "M485.64 46.45h-3.33l1.66 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon141", "d", "m483.76 44.28-1.66-1.67v3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon142", "d", "m484.19 40.23 1.66 1.66v-3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon143", "d", "M481.59 42.4h-3.33l1.66 1.66z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon144", "d", "m484.19 44.28 1.66 1.66v-3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon145", "d", "m480.14 44.28 1.66 1.66v-3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon146", "d", "m480.14 36.17 1.66 1.67v-3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon147", "d", "m480.14 40.22 1.66 1.67v-3.33z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon148", "d", "M496.49 29.95h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon149", "d", "m495.76 38.05-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon150", "d", "M495.76 36.32h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon151", "d", "m495.76 36.03-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon152", "d", "M495.76 38.35h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon153", "d", "M495.76 32.28h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon154", "d", "m495.76 31.98-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon155", "d", "m495.76 40.07-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon156", "d", "m495.76 34-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon157", "d", "M495.76 34.3h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon158", "d", "m494.75 30.96-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon159", "d", "M494.75 33.29h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon160", "d", "m494.75 32.99-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon161", "d", "M494.75 31.26h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon162", "d", "m494.75 35.01-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon163", "d", "M495.76 40.37h-.5v.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon164", "d", "M494.96 29.95v-.5l-.5.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon165", "d", "m500.54 24.17.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon166", "d", "M495.76 30.25h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon167", "d", "M494.96 30.75v-.5h-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon168", "d", "M496.77 29.24h-.49v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon169", "d", "m496.78 30.96-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon170", "d", "m496.78 28.94-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon171", "d", "M496.78 31.26h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon172", "d", "m497.79 38.05-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon173", "d", "M496.99 27.92v-.5l-.5.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon174", "d", "m496.78 32.99-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon175", "d", "M497.79 38.35h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon176", "d", "M496.77 33.29h-.49v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon177", "d", "M496.78 39.36h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon178", "d", "m496.78 39.06-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon179", "d", "M495.97 28.94v-.5l-.5.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon180", "d", "M496.77 37.34h-.49v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon181", "d", "M496.78 35.31h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon182", "d", "m496.77 35.01-.49-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon183", "d", "m496.78 37.04-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon184", "d", "m495.76 29.95-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon185", "d", "m493.74 34-1.51-1.51V34z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon186", "d", "M489.69 38.35h-1.52v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon187", "d", "m489.69 42.1-1.52-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon188", "d", "M489.69 42.4h-1.52v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon189", "d", "m489.69 46.15-1.52-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon190", "d", "M489.69 46.45h-1.52v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon191", "d", "m491.71 44.13-1.51-1.52v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon192", "d", "m489.69 38.05-1.52-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon193", "d", "M489.9 36.03v-1.52l-1.51 1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon194", "d", "M489.9 37.84v-1.52h-1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon195", "d", "M491.71 44.42h-1.51v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon196", "d", "M487.66 48.47h-1.51v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon197", "d", "m494.75 37.04-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon198", "d", "m487.66 48.17-1.51-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon199", "d", "m487.66 44.13-1.51-1.52v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon200", "d", "M487.87 38.05v-1.51l-1.51 1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon201", "d", "m487.66 40.07-1.51-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon202", "d", "M487.66 40.37h-1.51v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon203", "d", "M487.66 44.42h-1.51v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon204", "d", "M494.75 41.39h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon205", "d", "m494.75 41.09-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon206", "d", "M493.95 31.98v-1.52l-1.51 1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon207", "d", "M497.79 36.32h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon208", "d", "M494.75 39.36h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon209", "d", "M493.74 34.3h-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon210", "d", "M491.71 40.37h-1.51v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon211", "d", "m494.75 39.06-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon212", "d", "M494.75 37.34h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon213", "d", "M491.71 36.32h-1.51v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon214", "d", "m491.71 36.03-1.51-1.52v1.52z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon215", "d", "m491.71 40.07-1.51-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon216", "d", "M491.92 34v-1.51L490.41 34z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon217", "d", "m493.74 42.1-1.51-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon218", "d", "M493.74 38.35h-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon219", "d", "m493.74 38.05-1.51-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon220", "d", "M493.74 42.4h-1.51v1.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon221", "d", "M494.75 35.31h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon222", "d", "m501.84 34-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon223", "d", "M501.04 23.88v-.51l-.5.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon224", "d", "M501.84 34.3h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon225", "d", "M500.83 25.19h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon226", "d", "m500.83 24.89-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon227", "d", "m501.84 29.95-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon228", "d", "M501.84 30.25h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon229", "d", "m501.84 31.98-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon230", "d", "M501.84 32.28h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon231", "d", "M500.83 29.24h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon232", "d", "m500.83 32.99-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon233", "d", "M500.83 31.26h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon234", "d", "m500.83 30.96-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon235", "d", "M500.83 33.29h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon236", "d", "m500.83 28.94-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon237", "d", "M501.84 28.22h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon238", "d", "M500.83 27.21h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon239", "d", "m500.83 26.91-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon240", "d", "M501.55 28.94h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon241", "d", "M501.55 26.91h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon242", "d", "m500.83 35.01-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon243", "d", "m501.55 29.24.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon244", "d", "m501.55 27.21.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon245", "d", "M501.55 30.96h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon246", "d", "m501.55 31.26.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon247", "d", "m501.55 33.29.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon248", "d", "M501.55 32.99h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon249", "d", "M501.84 24.17h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon250", "d", "m501.84 27.92-.5-.49v.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon251", "d", "m501.84 25.9-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon252", "d", "M501.84 26.2h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon253", "d", "m501.84 23.88-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon254", "d", "M501.55 24.89h.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon255", "d", "m501.55 25.19.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon256", "d", "m501.55 23.16.5.5v-.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon257", "d", "M502.05 22.86v-.5l-.5.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon258", "d", "M499.81 32.28h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon259", "d", "m498.8 35.01-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon260", "d", "M498.8 35.31h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon261", "d", "m498.8 37.04-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon262", "d", "M500.83 35.31h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon263", "d", "M498.8 33.29h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon264", "d", "m498.8 30.96-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon265", "d", "M498 26.91v-.5l-.5.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon266", "d", "M498.8 31.26h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon267", "d", "m498.8 32.99-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon268", "d", "m497.79 27.92-.5-.49v.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon269", "d", "m497.79 34-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon270", "d", "M497.79 32.28h-.5v.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon271", "d", "M498.8 29.24h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon272", "d", "M497.79 34.3h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon273", "d", "m497.79 31.98-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon274", "d", "M497.79 28.22h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon275", "d", "m497.79 29.95-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon276", "d", "M497.79 30.25h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon277", "d", "M498.8 37.34h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon278", "d", "m498.8 28.94-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon279", "d", "m499.81 27.92-.5-.49v.49z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon280", "d", "M499.81 28.22h-.5v.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon281", "d", "M499.81 30.25h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon282", "d", "M499.81 26.2h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon283", "d", "m499.81 31.98-.5-.51v.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon284", "d", "M500.02 24.89v-.5l-.5.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon285", "d", "m499.81 25.9-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon286", "d", "m499.81 29.95-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon287", "d", "m498.8 26.91-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon288", "d", "M499.01 25.9v-.5l-.5.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon289", "d", "M499.81 36.32h-.5v.51z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon290", "d", "m497.79 36.03-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon291", "d", "M498.8 27.21h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon292", "d", "m499.81 36.03-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon293", "d", "m499.81 34-.5-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon294", "d", "M499.81 34.3h-.5v.5z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-g296", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-path294", "d", "M486 .1c-23.5 0-42.5 19-42.5 42.5s19 42.5 42.5 42.5 42.5-19 42.5-42.5S509.5.1 486 .1m-18.7 71.3h-1v-3.2l-1.8 1.8-1.8-1.8v3.2h-1v-5.7l2.8 2.8 2.8-2.8zm4.8-3.8H469v.6h2.9v1.1H469v1h3.1v1.1h-4.2v-4.9h4.2zm2 3.8v-3.8h-1.6v-1.1h4.2v1.1h-1.6v3.8zm2.4 0 2.3-5.7 2.3 5.7zm7.8-1.9h-1.5v1.9h-1.1v-4.9h2.6c1 0 1.6.6 1.6 1.5s-.6 1.5-1.6 1.5m6.4 1.9h-4.2v-4.9h1.1v3.8h3.1zm.5 0 2.3-5.7 2.3 5.7zm9.7.6v.1l-3.4-3.6v2.8h-1.1v-5.6l3.4 3.6v-2.9h1.1zm4.8-4.4h-3.1v.6h2.9v1.1h-2.9v1h3.1v1.1h-4.2v-4.9h4.2zm4.7 0h-1.6v3.8h-1v-3.8h-1.6v-1.1h4.2zm.05-4.95h-8.4V34.51L486 50.56l-16.05-16.05v28.14h-8.4V13.54L486 37.99l24.45-24.45Z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon295", "d", "m493.5 68.6-.7 1.7h1.4z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-polygon296", "d", "m478.8 68.6-.7 1.7h1.4z", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["id", "mp-path296", "d", "M484.3 67.6h-1.5v.8h1.5c.3 0 .5-.1.5-.4s0-.4-.5-.4", 1, "cls-1-mp", 2, "fill", "#f7931a", "fill-opacity", "1"], ["href", "https://bullbitcoin.com/", "target", "_blank", "title", "Bull Bitcoin"], ["aria-hidden", "true", "viewBox", "0 -5 40 40", "xmlns", "http://www.w3.org/2000/svg", 1, "image"], ["clip-path", "url(#a)", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "#e21924"], ["d", "M21.92 14.59a1.18 1.18 0 0 0-1.18-1.18h-1.82v2.36h1.82a1.18 1.18 0 0 0 1.18-1.18ZM21 17.07h-2v2.45h2a1.23 1.23 0 1 0 0-2.45Z"], ["d", "M36.43 0 35 5.59l-8 2.64-2.43-3.61-4.74 2.05-4.74-2.05-2.43 3.61-8-2.64L3.21 0 0 7.86l7.89 5.86-5.56 4 5.56 1.12 2.69-.49v3.17l3.59 4.38.68 3.19 5 2.87 5-2.87.68-3.19 3.59-4.38v-3.17l2.7.49 5.56-1.12-5.56-4 7.89-5.86zM24.69 18.45a2.5 2.5 0 0 1-2.5 2.5h-1.11v1.56h-1.26V21h-.9v1.56h-1.27V21H15.3v-1.42h.64a.9.9 0 0 0 .9-.9V14.3a.901.901 0 0 0-.9-.91h-.64V12h2.35v-1.5h1.27V12h.9v-1.5h1.26V12h.68A2.269 2.269 0 0 1 24 14.31a2.25 2.25 0 0 1-.92 1.82 2.52 2.52 0 0 1 1.58 2.32z"], ["id", "a"], ["fill", "#fff", "d", "M0 0h160v32H0z"], ["href", "https://fortris.com/", "target", "_blank", "title", "Fortris"], ["id", "fortris-logo", "viewBox", "0 0 140.08 129.13", "version", "1.1", "width", "74px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "svg", "http://www.w3.org/2000/svg"], ["x", "0", "y", "0", "width", "140.08", "height", "30.59", "rx", "15.29", "ry", "15.29", 1, "fortris-cls-2"], ["x", "0", "y", "98.540001", "width", "69.779999", "height", "30.59", "rx", "15.29", "ry", "15.29", 1, "fortris-cls-2"], ["x", "0", "y", "49.27", "width", "109.5", "height", "30.59", "rx", "15.29", "ry", "15.29", 1, "fortris-cls-2"], ["href", "https://exodus.com/", "target", "_blank", "title", "Exodus"], ["width", "80", "height", "80", "viewBox", "0 0 500 500", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "image"], ["cx", "250", "cy", "250", "r", "250", "fill", "#1F2033"], ["clip-path", "url(#clip0_2_14)"], ["d", "M411.042 178.303L271.79 87V138.048L361.121 196.097L350.612 229.351H271.79V271.648H350.612L361.121 304.903L271.79 362.952V414L411.042 322.989L388.271 250.646L411.042 178.303Z", "fill", "url(#paint0_linear_2_14)"], ["d", "M150.638 271.648H229.168V229.351H150.346L140.128 196.097L229.168 138.048V87L89.9159 178.303L112.687 250.646L89.9159 322.989L229.459 414V362.952L140.128 304.903L150.638 271.648Z", "fill", "url(#paint1_linear_2_14)"], ["id", "mask0_2_14", "maskUnits", "userSpaceOnUse", "x", "89", "y", "87", "width", "323", "height", "327", 2, "mask-type", "alpha"], ["d", "M411.042 178.303L271.79 87.0001V138.048L361.121 196.097L350.612 229.352H271.79V271.649H350.612L361.121 304.903L271.79 362.952V414L411.042 322.989L388.271 250.646L411.042 178.303Z", "fill", "url(#paint2_linear_2_14)"], ["d", "M150.638 271.649H229.168V229.352H150.346L140.128 196.097L229.168 138.048V87.0001L89.9161 178.303L112.687 250.646L89.9161 322.989L229.46 414V362.952L140.128 304.903L150.638 271.649Z", "fill", "url(#paint3_linear_2_14)"], ["mask", "url(#mask0_2_14)"], ["d", "M408.913 87.0001H90.0877V414H408.913V87.0001Z", "fill", "url(#paint4_linear_2_14)"], ["id", "paint0_linear_2_14", "x1", "365.994", "y1", "436.481", "x2", "272.717", "y2", "51.089", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#0B46F9"], ["offset", "1", "stop-color", "#BBFBE0"], ["id", "paint1_linear_2_14", "x1", "365.994", "y1", "436.481", "x2", "272.717", "y2", "51.089", "gradientUnits", "userSpaceOnUse"], ["id", "paint2_linear_2_14", "x1", "365.994", "y1", "436.481", "x2", "272.717", "y2", "51.0891", "gradientUnits", "userSpaceOnUse"], ["id", "paint3_linear_2_14", "x1", "365.994", "y1", "436.481", "x2", "272.717", "y2", "51.0891", "gradientUnits", "userSpaceOnUse"], ["id", "paint4_linear_2_14", "x1", "110.525", "y1", "160.575", "x2", "271.982", "y2", "281.156", "gradientUnits", "userSpaceOnUse"], ["offset", "0.119792", "stop-color", "#8952FF", "stop-opacity", "0.87"], ["offset", "1", "stop-color", "#DABDFF", "stop-opacity", "0"], ["id", "clip0_2_14"], ["width", "327", "height", "327", "fill", "white", "transform", "translate(86 87)"], ["href", "https://gemini.com/", "target", "_blank", "title", "Gemini"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", "width", "360", "height", "360", "viewBox", "0 0 360 360", 1, "image", 2, "background-color", "rgb(0,0,0)"], ["transform", "matrix(0.62 0 0 0.62 180 180)"], ["transform", " translate(-162, -162)", "d", "M 211.74 0 C 154.74 0 106.35 43.84 100.25 100.25 C 43.84 106.35 1.4210854715202004e-14 154.76 1.4210854715202004e-14 211.74 C 0.044122601308501076 273.7212006364817 50.27879936351834 323.95587739869154 112.26 324 C 169.26 324 217.84 280.15999999999997 223.75 223.75 C 280.15999999999997 217.65 324 169.24 324 112.26 C 323.95587739869154 50.278799363518324 273.72120063648174 0.04412260130848722 211.74 -1.4210854715202004e-14 z M 297.74 124.84 C 291.9644950552469 162.621439649343 262.2969457716857 192.26062994820046 224.51 198 L 224.51 124.84 z M 26.3 199.16 C 31.986912917108594 161.30935034910615 61.653433460549415 131.56986937804106 99.48999999999998 125.78999999999999 L 99.49 199 L 26.3 199 z M 198.21 224.51 C 191.87736076583954 267.0991541201681 155.312384597087 298.62923417787493 112.255 298.62923417787493 C 69.19761540291302 298.62923417787493 32.63263923416048 267.0991541201682 26.3 224.51 z M 199.16 124.83999999999999 L 199.16 199 L 124.84 199 L 124.84 124.84 z M 297.7 99.48999999999998 L 125.78999999999999 99.48999999999998 C 132.12263923416046 56.90084587983182 168.687615402913 25.37076582212505 211.745 25.37076582212505 C 254.80238459708698 25.37076582212505 291.3673607658395 56.900845879831834 297.7 99.49 z", "stroke-linecap", "round", 2, "fill", "rgb(0,220,250)"], ["href", "https://leather.io/", "target", "_blank", "title", "Leather"], ["src", "/resources/profile/leather.svg", 1, "image"], ["href", "https://taprootwizards.com/", "target", "_blank", "title", "Taproot Wizards"], ["src", "/resources/profile/wizardhat.png", 1, "image"], ["id", "community-sponsors-anchor", 4, "ngIf"], [1, "community-sponsor", 2, "margin-bottom", "68px"], [4, "ngIf", "ngIfElse"], ["id", "community-integrations", 1, "community-integrations-sponsor"], ["href", "https://github.com/getumbrel/umbrel", "target", "_blank", "title", "Umbrel"], ["src", "/resources/profile/umbrel.png", 1, "image"], ["href", "https://github.com/rootzoll/raspiblitz", "target", "_blank", "title", "RaspiBlitz"], ["src", "/resources/profile/raspiblitz.svg", 1, "image"], ["href", "https://github.com/mynodebtc/mynode", "target", "_blank", "title", "myNode"], ["src", "/resources/profile/mynodebtc.png", 1, "image"], ["href", "https://ronindojo.io/", "target", "_blank", "title", "RoninDojo"], ["src", "/resources/profile/ronindojo.png", 1, "image"], ["href", "https://github.com/runcitadel", "target", "_blank", "title", "Citadel"], ["src", "/resources/profile/runcitadel.svg", 1, "image"], ["href", "https://github.com/fort-nix/nix-bitcoin", "target", "_blank", "title", "nix-bitcoin"], ["src", "/resources/profile/nix-bitcoin.png", 1, "image"], ["href", "https://github.com/Start9Labs/start-os", "target", "_blank", "title", "StartOS"], ["src", "/resources/profile/start9.png", 1, "image"], ["href", "https://github.com/btcpayserver/btcpayserver", "target", "_blank", "title", "BTCPay Server"], ["src", "/resources/profile/btcpayserver.svg", 1, "image", "not-rounded"], ["href", "https://github.com/bisq-network/bisq", "target", "_blank", "title", "Bisq"], ["src", "/resources/profile/bisq_network.png", 1, "image"], ["href", "https://github.com/spesmilo/electrum", "target", "_blank", "title", "Electrum Wallet"], ["src", "/resources/profile/electrum.png", 1, "image"], ["href", "https://github.com/sparrowwallet/sparrow", "target", "_blank", "title", "Sparrow Wallet"], ["src", "/resources/profile/sparrow.png", 1, "image"], ["href", "https://github.com/ACINQ/phoenix", "target", "_blank", "title", "Phoenix Wallet by ACINQ"], ["src", "/resources/profile/phoenix.svg", 1, "image", "not-rounded"], ["href", "http://github.com/COLDCARD", "target", "_blank", "title", "COLDCARD"], ["src", "/resources/profile/coldcard.png", 1, "image", "coldcard"], ["href", "https://github.com/ZeusLN/zeus", "target", "_blank", "title", "ZEUS"], ["src", "/resources/profile/zeus.png", 1, "image"], ["href", "https://github.com/MutinyWallet", "target", "_blank", "title", "Mutiny"], ["src", "/resources/profile/mutiny.svg", 1, "image", "not-rounded"], ["href", "https://github.com/hsjoberg/blixt-wallet", "target", "_blank", "title", "Blixt Wallet"], ["src", "/resources/profile/blixt.png", 1, "image"], ["href", "https://github.com/nunchuk-io", "target", "_blank", "title", "Nunchuck"], ["src", "/resources/profile/nunchuk.svg", 1, "image"], ["href", "https://github.com/BlueWallet/BlueWallet", "target", "_blank", "title", "BlueWallet"], ["src", "/resources/profile/bluewallet.png", 1, "image"], ["href", "https://github.com/BoltzExchange", "target", "_blank", "title", "Boltz"], ["src", "/resources/profile/boltz.svg", 1, "image"], ["href", "https://github.com/lnbits/lnbits-legend", "target", "_blank", "title", "LNbits"], ["src", "/resources/profile/lnbits.svg", 1, "image"], ["href", "https://github.com/vulpemventures/marina", "target", "_blank", "title", "Marina Wallet"], ["src", "/resources/profile/marina.svg", 1, "image"], ["href", "https://github.com/bitcoin-wallet/bitcoin-wallet/", "target", "_blank", "title", "Bitcoin Wallet (Schildbach)"], ["src", "/resources/profile/schildbach.svg", 1, "image"], ["href", "https://github.com/cryptoadvance/specter-desktop", "target", "_blank", "title", "Specter Wallet"], ["src", "/resources/profile/specter.png", 1, "image"], ["href", "https://github.com/EdgeApp", "target", "_blank", "title", "Edge"], ["src", "/resources/profile/edge.svg", 1, "image", "not-rounded"], ["href", "https://github.com/GaloyMoney", "target", "_blank", "title", "Galoy"], ["src", "/resources/profile/galoy.svg", 1, "image"], ["href", "https://github.com/muun/apollo", "target", "_blank", "title", "Muun Wallet"], ["src", "/resources/profile/muun.png", 1, "image"], ["href", "https://github.com/bitcoin-s/bitcoin-s", "target", "_blank", "title", "bitcoin-s"], ["src", "/resources/profile/bitcoin-s.svg", 1, "image"], ["id", "community-alliances", 1, "alliances"], ["href", "https://liquid.net/", "title", "Liquid Network"], ["src", "/resources/profile/liquid.svg", 1, "liquid"], ["href", "https://opencrypto.org/", "title", "Copa - Crypto Open Patent Alliance"], ["src", "/resources/profile/copa.png", 1, "copa"], ["href", "https://bitcoin.gob.sv", "title", "Oficina Nacional del Bitcoin"], ["src", "/resources/profile/onbtc-full.svg", 1, "sv"], ["id", "project-maintainers", 1, "maintainers"], ["href", "https://x.com/softsimon_", "target", "_blank", "title", "softsimon"], ["src", "/resources/profile/softsimon.jpg", 1, "image"], ["href", "https://x.com/wiz", "target", "_blank", "title", "wiz"], ["src", "/resources/profile/wiz.png", 1, "image"], [1, "copyright"], [1, "title"], ["href", "https://github.com/mempool/mempool"], ["href", "https://www.gnu.org/licenses/agpl-3.0-standalone.html"], ["href", "/3rdpartylicenses.txt"], ["href", "https://mempool.space/trademark-policy"], ["id", "community-sponsors-anchor"], ["class", "community-sponsor whale-sponsor", "style", "margin-bottom: 68px", 4, "ngIf"], ["class", "community-sponsor", "style", "margin-bottom: 68px", 4, "ngIf"], [1, "community-sponsor", "whale-sponsor", 2, "margin-bottom", "68px"], ["ngFor", "", 3, "ngForOf"], ["target", "_blank", "rel", "sponsored", 3, "href", "title"], ["onError", "this.src = '/resources/profile/grumpy.svg'; this.className = 'image unknown'", 1, "image", 3, "src"], ["target", "_blank", "rel", "sponsored", 3, "href", "title", 4, "ngFor", "ngForOf"], ["id", "project-translators", 1, "project-translators"], ["target", "_blank", 3, "href", "title"], ["id", "project-contributors", 1, "contributors"], ["class", "maintainers", "id", "project-members", 4, "ngIf"], ["id", "project-members", 1, "maintainers"], [1, "spinner-border", "text-light"]];
      },
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00AE");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 18)(6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "]");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AboutComponent_span_11_Template, 2, 1, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 21)(13, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](15, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AboutComponent_ng_template_16_Template, 1, 0, "ng-template", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](18, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "video", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AboutComponent_Template_video_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.unmutePromoVideo());
          })("touchstart", function AboutComponent_Template_video_touchstart_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.unmutePromoVideo());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "track", 24)(22, "track", 25)(23, "track", 26)(24, "track", 27)(25, "track", 28)(26, "track", 29)(27, "track", 30)(28, "track", 31)(29, "track", 32)(30, "track", 33)(31, "track", 34)(32, "track", 35)(33, "track", 36)(34, "track", 37)(35, "track", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "app-about-sponsors");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 39)(39, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](40, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 40)(42, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "svg", 42)(44, "defs")(45, "style");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, ".cls-1{fill:url(#linear-gradient);}");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "linearGradient", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "stop", 44)(49, "stop", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "path", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Spiral");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "svg", 48)(55, "defs")(56, "style");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, " .d { fill: #fff; } .e { fill: #ff8200; } ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "g", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "circle", 50)(60, "circle", 51)(61, "circle", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "circle", 53)(64, "circle", 54)(65, "circle", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Foundry");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "svg", 57)(70, "style", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " .st0{fill:#111316;} .st1{fill:#00C3FF;} .st2{fill:#7EE0FF;} ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "path", 59)(73, "path", 60)(74, "path", 61)(75, "path", 62)(76, "path", 63)(77, "path", 64)(78, "path", 65)(79, "path", 66)(80, "path", 67)(81, "path", 68)(82, "path", 69)(83, "path", 70)(84, "path", 71)(85, "path", 72)(86, "path", 73)(87, "path", 74)(88, "path", 75)(89, "path", 76)(90, "path", 77)(91, "path", 78)(92, "path", 79)(93, "path", 80)(94, "path", 81)(95, "path", 82)(96, "path", 83)(97, "path", 84)(98, "path", 85)(99, "path", 86)(100, "path", 87)(101, "path", 88)(102, "path", 89)(103, "path", 90)(104, "path", 91)(105, "path", 92)(106, "path", 93)(107, "path", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Blockstream");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "a", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "svg", 96)(112, "defs")(113, "style");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, ".cls-unchained-1{fill:#fff;}");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](115, "path", 97)(116, "path", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Unchained");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "a", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](120, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "Bitkey");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "a", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "svg", 102)(125, "style", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, ".cls-1-mp{fill:#f7f7f7}");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "g", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](128, "path", 105)(129, "path", 106)(130, "path", 107)(131, "path", 108)(132, "path", 109)(133, "path", 110)(134, "path", 111)(135, "path", 112)(136, "path", 113)(137, "path", 114)(138, "path", 115)(139, "path", 116)(140, "path", 117)(141, "path", 118)(142, "path", 119)(143, "path", 120)(144, "path", 121)(145, "path", 122)(146, "path", 123)(147, "path", 124)(148, "path", 125)(149, "path", 126)(150, "path", 127)(151, "path", 128)(152, "path", 129)(153, "path", 130)(154, "path", 131)(155, "path", 132)(156, "path", 133)(157, "path", 134)(158, "path", 135)(159, "path", 136)(160, "path", 137)(161, "path", 138)(162, "path", 139)(163, "path", 140)(164, "path", 141)(165, "path", 142)(166, "path", 143)(167, "path", 144)(168, "path", 145)(169, "path", 146)(170, "path", 147)(171, "path", 148)(172, "path", 149)(173, "path", 150)(174, "path", 151)(175, "path", 152)(176, "path", 153)(177, "path", 154)(178, "path", 155)(179, "path", 156)(180, "path", 157)(181, "path", 158)(182, "path", 159)(183, "path", 160)(184, "path", 161)(185, "path", 162)(186, "path", 163)(187, "path", 164)(188, "path", 165)(189, "path", 166)(190, "path", 167)(191, "path", 168)(192, "path", 169)(193, "path", 170)(194, "path", 171)(195, "path", 172)(196, "path", 173)(197, "path", 174)(198, "path", 175)(199, "path", 176)(200, "path", 177)(201, "path", 178)(202, "path", 179)(203, "path", 180)(204, "path", 181)(205, "path", 182)(206, "path", 183)(207, "path", 184)(208, "path", 185)(209, "path", 186)(210, "path", 187)(211, "path", 188)(212, "path", 189)(213, "path", 190)(214, "path", 191)(215, "path", 192)(216, "path", 193)(217, "path", 194)(218, "path", 195)(219, "path", 196)(220, "path", 197)(221, "path", 198)(222, "path", 199)(223, "path", 200)(224, "path", 201)(225, "path", 202)(226, "path", 203)(227, "path", 204)(228, "path", 205)(229, "path", 206)(230, "path", 207)(231, "path", 208)(232, "path", 209)(233, "path", 210)(234, "path", 211)(235, "path", 212)(236, "path", 213)(237, "path", 214)(238, "path", 215)(239, "path", 216)(240, "path", 217)(241, "path", 218)(242, "path", 219)(243, "path", 220)(244, "path", 221)(245, "path", 222)(246, "path", 223)(247, "path", 224)(248, "path", 225)(249, "path", 226)(250, "path", 227)(251, "path", 228)(252, "path", 229)(253, "path", 230)(254, "path", 231)(255, "path", 232)(256, "path", 233)(257, "path", 234)(258, "path", 235)(259, "path", 236)(260, "path", 237)(261, "path", 238)(262, "path", 239)(263, "path", 240)(264, "path", 241)(265, "path", 242)(266, "path", 243)(267, "path", 244)(268, "path", 245)(269, "path", 246)(270, "path", 247)(271, "path", 248)(272, "path", 249)(273, "path", 250)(274, "path", 251)(275, "path", 252)(276, "path", 253)(277, "path", 254)(278, "path", 255)(279, "path", 256)(280, "path", 257)(281, "path", 258)(282, "path", 259)(283, "path", 260)(284, "path", 261)(285, "path", 262)(286, "path", 263)(287, "path", 264)(288, "path", 265)(289, "path", 266)(290, "path", 267)(291, "path", 268)(292, "path", 269)(293, "path", 270)(294, "path", 271)(295, "path", 272)(296, "path", 273)(297, "path", 274)(298, "path", 275)(299, "path", 276)(300, "path", 277)(301, "path", 278)(302, "path", 279)(303, "path", 280)(304, "path", 281)(305, "path", 282)(306, "path", 283)(307, "path", 284)(308, "path", 285)(309, "path", 286)(310, "path", 287)(311, "path", 288)(312, "path", 289)(313, "path", 290)(314, "path", 291)(315, "path", 292)(316, "path", 293)(317, "path", 294)(318, "path", 295)(319, "path", 296)(320, "path", 297)(321, "path", 298)(322, "path", 299)(323, "path", 300)(324, "path", 301)(325, "path", 302)(326, "path", 303)(327, "path", 304)(328, "path", 305)(329, "path", 306)(330, "path", 307)(331, "path", 308)(332, "path", 309)(333, "path", 310)(334, "path", 311)(335, "path", 312)(336, "path", 313)(337, "path", 314)(338, "path", 315)(339, "path", 316)(340, "path", 317)(341, "path", 318)(342, "path", 319)(343, "path", 320)(344, "path", 321)(345, "path", 322)(346, "path", 323)(347, "path", 324)(348, "path", 325)(349, "path", 326)(350, "path", 327)(351, "path", 328)(352, "path", 329)(353, "path", 330)(354, "path", 331)(355, "path", 332)(356, "path", 333)(357, "path", 334)(358, "path", 335)(359, "path", 336)(360, "path", 337)(361, "path", 338)(362, "path", 339)(363, "path", 340)(364, "path", 341)(365, "path", 342)(366, "path", 343)(367, "path", 344)(368, "path", 345)(369, "path", 346)(370, "path", 347)(371, "path", 348)(372, "path", 349)(373, "path", 350)(374, "path", 351)(375, "path", 352)(376, "path", 353)(377, "path", 354)(378, "path", 355)(379, "path", 356)(380, "path", 357)(381, "path", 358)(382, "path", 359)(383, "path", 360)(384, "path", 361)(385, "path", 362)(386, "path", 363)(387, "path", 364)(388, "path", 365)(389, "path", 366)(390, "path", 367)(391, "path", 368)(392, "path", 369)(393, "path", 370)(394, "path", 371)(395, "path", 372)(396, "path", 373)(397, "path", 374)(398, "path", 375)(399, "path", 376)(400, "path", 377)(401, "path", 378)(402, "path", 379)(403, "path", 380)(404, "path", 381)(405, "path", 382)(406, "path", 383)(407, "path", 384)(408, "path", 385)(409, "path", 386)(410, "path", 387)(411, "path", 388)(412, "path", 389)(413, "path", 390)(414, "path", 391)(415, "path", 392)(416, "path", 393)(417, "path", 394)(418, "path", 395)(419, "path", 396)(420, "path", 397)(421, "path", 398)(422, "path", 399);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](423, "g", 400);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](424, "path", 401)(425, "path", 402)(426, "path", 403)(427, "path", 404);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](428, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](429, "Metaplanet");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](430, "a", 405);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](431, "svg", 406)(432, "g", 407);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](433, "path", 408)(434, "path", 409);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](435, "defs")(436, "clipPath", 410);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](437, "path", 411);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](438, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](439, "Bull Bitcoin");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](440, "a", 412);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](441, "svg", 413)(442, "defs")(443, "style");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](444, ".fortris-cls-1{fill:#29384a;}.fortris-cls-1,.fortris-cls-2{stroke-width:0px;}.fortris-cls-2{fill:#ff6e72;}");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](445, "rect", 414)(446, "rect", 415)(447, "rect", 416);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](448, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](449, "Fortris");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](450, "a", 417);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](451, "svg", 418);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](452, "circle", 419);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](453, "g", 420);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](454, "path", 421)(455, "path", 422);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](456, "mask", 423);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](457, "path", 424)(458, "path", 425);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](459, "g", 426);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](460, "path", 427);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](461, "defs")(462, "linearGradient", 428);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](463, "stop", 429)(464, "stop", 430);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](465, "linearGradient", 431);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](466, "stop", 429)(467, "stop", 430);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](468, "linearGradient", 432);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](469, "stop", 429)(470, "stop", 430);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](471, "linearGradient", 433);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](472, "stop", 429)(473, "stop", 430);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](474, "linearGradient", 434);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](475, "stop", 435)(476, "stop", 436);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](477, "clipPath", 437);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](478, "rect", 438);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](479, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](480, "Exodus");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](481, "a", 439);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](482, "svg", 440)(483, "g", 441);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](484, "path", 442);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](485, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](486, "Gemini");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](487, "a", 443);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](488, "img", 444);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](489, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](490, "Leather");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](491, "a", 445);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](492, "img", 446);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](493, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](494, "Taproot Wizards");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](495);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](496, AboutComponent_div_496_Template, 3, 2, "div", 447);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](497, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](498, "div", 448)(499, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](500, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](501, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](502, AboutComponent_ng_container_502_Template, 2, 1, "ng-container", 449);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](503, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](504, "div", 450)(505, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](506, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](507, "div", 40)(508, "a", 451);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](509, "img", 452);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](510, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](511, "Umbrel");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](512, "a", 453);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](513, "img", 454);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](514, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](515, "RaspiBlitz");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](516, "a", 455);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](517, "img", 456);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](518, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](519, "myNode");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](520, "a", 457);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](521, "img", 458);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](522, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](523, "RoninDojo");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](524, "a", 459);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](525, "img", 460);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](526, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](527, "Citadel");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](528, "a", 461);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](529, "img", 462);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](530, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](531, "NixOS");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](532, "a", 463);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](533, "img", 464);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](534, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](535, "StartOS");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](536, "a", 465);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](537, "img", 466);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](538, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](539, "BTCPay");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](540, "a", 467);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](541, "img", 468);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](542, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](543, "Bisq");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](544, "a", 469);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](545, "img", 470);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](546, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](547, "Electrum");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](548, "a", 471);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](549, "img", 472);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](550, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](551, "Sparrow");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](552, "a", 473);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](553, "img", 474);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](554, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](555, "Phoenix");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](556, "a", 475);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](557, "img", 476);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](558, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](559, "COLDCARD");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](560, "a", 477);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](561, "img", 478);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](562, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](563, "ZEUS");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](564, "a", 479);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](565, "img", 480);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](566, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](567, "Mutiny");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](568, "a", 481);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](569, "img", 482);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](570, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](571, "Blixt");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](572, "a", 483);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](573, "img", 484);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](574, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](575, "Nunchuk");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](576, "a", 485);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](577, "img", 486);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](578, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](579, "BlueWallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](580, "a", 487);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](581, "img", 488);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](582, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](583, "Boltz");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](584, "a", 489);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](585, "img", 490);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](586, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](587, "LNBits");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](588, "a", 491);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](589, "img", 492);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](590, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](591, "Marina");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](592, "a", 493);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](593, "img", 494);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](594, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](595, "Schildbach");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](596, "a", 495);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](597, "img", 496);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](598, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](599, "Specter");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](600, "a", 497);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](601, "img", 498);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](602, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](603, "Edge");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](604, "a", 499);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](605, "img", 500);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](606, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](607, "Galoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](608, "a", 501);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](609, "img", 502);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](610, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](611, "Muun");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](612, "a", 503);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](613, "img", 504);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](614, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](615, "bitcoin-s");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](616, "div", 505)(617, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](618, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](619, "div", 40)(620, "a", 506);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](621, "img", 507);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](622, "a", 508);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](623, "img", 509);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](624, "a", 510);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](625, "img", 511);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](626, AboutComponent_ng_container_626_Template, 7, 1, "ng-container", 449);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](627, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](628, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](629, AboutComponent_ng_container_629_Template, 7, 2, "ng-container", 449);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](630, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](631, "div", 512)(632, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](633, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](634, "div", 40)(635, "a", 513);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](636, "img", 514);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](637, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](638, "softsimon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](639, "a", 515);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](640, "img", 516);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](641, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](642, "wiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](643, "div", 517)(644, "div", 518);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](645, " Copyright \u00A9 2019-2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](646, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](647, " Mempool Space K.K.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](648, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](649, " and other shadowy super-coders ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](650, "p")(651, "a", 519);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](652, "The Mempool Open Source Project");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](653, " is free software; you can redistribute it and/or modify it under the terms of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](654, "a", 520);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](655, "GNU Affero General Public License");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](656, " as published by the Free Software Foundation, either version 3 of the License or any later version approved by a proxy statement published on <https://mempool.space/about>.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](657, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](658, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](659, " This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the full license terms for more details.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](660, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](661, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](662, " This program incorporates software and other components licensed from third parties. See the full list of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](663, "a", 521);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](664, "Third-Party Licenses");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](665, " for legal notices from those projects. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](666, "div", 518);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](667, " Trademark Notice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](668, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](669, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](670, " The Mempool Open Source Project\u00AE, Mempool Accelerator\u00AE, Mempool Enterprise\u00AE, Mempool Wallet\u2122, mempool.space\u00AE, Be your own explorer\u2122, Explore the full Bitcoin ecosystem\u00AE, Mempool Goggles\u2122, the mempool Logo, the mempool Square Logo, the mempool block visualization Logo, the mempool Blocks Logo, the mempool transaction Logo, the mempool Blocks 3 | 2 Logo, the mempool research Logo, the mempool.space Vertical Logo, and the mempool.space Horizontal Logo are either registered trademarks or trademarks of Mempool Space K.K in Japan, the United States, and/or other countries. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](671, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](672, " While our software is available under an open source software license, the copyright license does not include an implied right or license to use our trademarks. See our ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](673, "a", 522);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](674, "Trademark Policy and Guidelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](675, " for more details, published on <https://mempool.space/trademark-policy>. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](676, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](677, AboutComponent_ng_template_677_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const loadingSponsors_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](678);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("v", ctx.packetJsonVersion, " [");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "https://github.com/mempool/mempool/commit/", ctx.frontendGitCommitHash, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.frontendGitCommitHash);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.stateService.env.GIT_COMMIT_HASH_MEMPOOL_SPACE);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.locale.substr(0, 2) === "en");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autoplay", true)("muted", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("en") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("ja") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("zh") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("sv") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("cs") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("fi") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("fr") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("de") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("it") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("lt") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("nb") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("fa") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("pl") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("ro") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("default", ctx.showSubtitles("pt") ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](461);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](497, 30, ctx.profiles$));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](503, 32, ctx.ogs$))("ngIfElse", loadingSponsors_r13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](628, 36, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](627, 34, ctx.translators$)))("ngIfElse", loadingSponsors_r13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](630, 38, ctx.allContributors$))("ngIfElse", loadingSponsors_r13);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_about_about_sponsors_component__WEBPACK_IMPORTED_MODULE_6__.AboutSponsorsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe],
      styles: [".about-page[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background-size: 100%, 100%;\n  border-radius: 50%;\n  margin: 25px;\n  line-height: 32px;\n}\n.about-page[_ngcontent-%COMP%]   .image.not-rounded[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.about-page[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  margin: 25px auto 30px;\n  margin-top: 25px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n}\n.about-page[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 62.5px;\n  width: 250px;\n  margin: auto;\n}\n.about-page[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  margin-top: -10px;\n}\n.about-page[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: auto;\n  padding: 10px 15px 15px;\n}\n.about-page[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 640px;\n  max-width: 90%;\n  margin-top: 0;\n}\n@media (min-width: 768px) {\n  .about-page[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    height: 360px;\n  }\n}\n.about-page[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: auto 10px;\n}\n.about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 68px;\n  scroll-margin: 30px;\n}\n@media (min-width: 768px) {\n  .about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%] {\n    margin-top: 68px;\n  }\n}\n.about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  margin: 20px auto;\n}\n.about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  max-width: 250px;\n  margin: auto;\n  height: 45px;\n  width: 100%;\n}\n.about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 57px;\n  height: 57px;\n}\n.about-page[_ngcontent-%COMP%]   .whale-sponsor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n}\n.about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  position: relative;\n  top: 10px;\n}\n.about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 15px auto;\n  height: 62px;\n}\n@media (min-width: 425px) {\n  .about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 15px 60px;\n  }\n}\n@media (min-width: 576px) {\n  .about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 15px 120px;\n  }\n}\n@media (min-width: 850px) {\n  .about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 50px 30px 0px;\n  }\n}\n.about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   .liquid[_ngcontent-%COMP%] {\n  top: 7px;\n  position: relative;\n}\n.about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   .copa[_ngcontent-%COMP%] {\n  height: auto;\n  top: 23px;\n  position: relative;\n  width: 300px;\n}\n.about-page[_ngcontent-%COMP%]   .alliances[_ngcontent-%COMP%]   .sv[_ngcontent-%COMP%] {\n  height: 85px;\n  width: auto;\n  position: relative;\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%] {\n  scroll-margin: 30px;\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  transition: 150ms all;\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 40px 29px 10px;\n}\n.about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .contributors[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .community-integrations-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.image.coldcard[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .maintainers[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg.image.coldcard[_ngcontent-%COMP%] {\n  border-radius: 0;\n  height: auto;\n  margin: 20px 29px 20px;\n}\n.about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  margin: 10px auto 20px;\n}\n.about-page[_ngcontent-%COMP%]   .community-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 6px;\n}\n.about-page[_ngcontent-%COMP%]   .project-translators[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n}\n.about-page[_ngcontent-%COMP%]   #project-members[_ngcontent-%COMP%]   a.project-member-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 40px 20px 10px;\n}\n.about-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: left;\n  max-width: 620px;\n  padding: 0px 15px;\n  margin: auto;\n  line-height: 1.8;\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;\n}\n.about-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 30px;\n}\n.about-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.about-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.about-page[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.about-page[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 15px auto 0px;\n}\n.about-page[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin: 20px auto 30px;\n}\n.about-page[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 45px 10px;\n}\n.about-page[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .bitcointv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: auto;\n  vertical-align: bottom;\n  margin-bottom: 2px;\n  margin-left: 5px;\n}\n.about-page[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .bitcointv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.about-page[_ngcontent-%COMP%]   .footer-version[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.no-about-margin[_ngcontent-%COMP%] {\n  height: 10px;\n}\n\n.community-integrations-sponsor[_ngcontent-%COMP%] {\n  max-width: 1110px;\n  margin: auto;\n}\n\n.community-integrations-sponsor[_ngcontent-%COMP%]   img.image[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n\n.enterprise-sponsor[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 850px;\n}"],
      changeDetection: 0
    });
  }
  return AboutComponent;
})();

/***/ }),

/***/ 29241:
/*!**************************************************!*\
  !*** ./src/app/components/about/about.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule),
/* harmony export */   AboutRoutingModule: () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/about/about.component */ 1014);
/* harmony import */ var _components_about_about_sponsors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/about/about-sponsors.component */ 88338);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ 26800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39962);







const routes = [{
  path: '',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}];
let AboutRoutingModule = /*#__PURE__*/(() => {
  class AboutRoutingModule {
    static #_ = this.ɵfac = function AboutRoutingModule_Factory(t) {
      return new (t || AboutRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
  return AboutRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();
let AboutModule = /*#__PURE__*/(() => {
  class AboutModule {
    static #_ = this.ɵfac = function AboutModule_Factory(t) {
      return new (t || AboutModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, AboutRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return AboutModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [_components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _components_about_about_sponsors_component__WEBPACK_IMPORTED_MODULE_1__.AboutSponsorsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, AboutRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
    exports: [_components_about_about_sponsors_component__WEBPACK_IMPORTED_MODULE_1__.AboutSponsorsComponent]
  });
})();

/***/ })

};
;
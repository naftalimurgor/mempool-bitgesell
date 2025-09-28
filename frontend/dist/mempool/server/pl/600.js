"use strict";
exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 492:
/*!************************************************************************!*\
  !*** ./src/app/lightning/channel/channel-box/channel-box.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelBoxComponent: () => (/* binding */ ChannelBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/clipboard/clipboard.component */ 97338);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/sats/sats.component */ 85852);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);









const _c0 = (a0, a1) => [a0, a1];
const _c1 = a0 => ({
  $implicit: a0
});
function ChannelBoxComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ChannelBoxComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, ctx_r0.channel.base_fee_mtokens, 0), " ");
  }
}
function ChannelBoxComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ChannelBoxComponent_ng_template_39_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ChannelBoxComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ChannelBoxComponent_ng_template_39_span_0_Template, 2, 0, "span", 32);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const nonZeroBaseFee_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.channel.base_fee_mtokens === 0)("ngIfElse", nonZeroBaseFee_r2);
  }
}
function ChannelBoxComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ChannelBoxComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ChannelBoxComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nStart"](0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](0);
  }
}
function ChannelBoxComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](0, 12);
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](0);
  }
}
let ChannelBoxComponent = /*#__PURE__*/(() => {
  class ChannelBoxComponent {
    constructor() {}
    static #_ = this.ɵfac = function ChannelBoxComponent_Factory(t) {
      return new (t || ChannelBoxComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ChannelBoxComponent,
      selectors: [["app-channel-box"]],
      inputs: {
        channel: "channel"
      },
      decls: 61,
      vars: 45,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction fee rate
           * @meaning transaction.fee-rate
           */
          const MSG_EXTERNAL_8610476630152321637$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_0 = goog.getMsg("Fee rate");
          i18n_0 = MSG_EXTERNAL_8610476630152321637$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_0;
        } else {
          i18n_0 = "Poziom op\u0142at";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.base-fee
           */
          const MSG_EXTERNAL_7880112049073973371$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_1 = goog.getMsg("Base fee");
          i18n_1 = MSG_EXTERNAL_7880112049073973371$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_1;
        } else {
          i18n_1 = "Op\u0142ata bazowa";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.min-htlc
           */
          const MSG_EXTERNAL_6560593439550497615$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_2 = goog.getMsg("Min HTLC");
          i18n_2 = MSG_EXTERNAL_6560593439550497615$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_2;
        } else {
          i18n_2 = "Min HTLC";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.max-htlc
           */
          const MSG_EXTERNAL_5448369930881782958$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_3 = goog.getMsg("Max HTLC");
          i18n_3 = MSG_EXTERNAL_5448369930881782958$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_3;
        } else {
          i18n_3 = "Max HTLC";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.timelock-delta
           */
          const MSG_EXTERNAL_2186279174593350285$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_4 = goog.getMsg("Timelock delta");
          i18n_4 = MSG_EXTERNAL_2186279174593350285$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_4;
        } else {
          i18n_4 = "Timelock delta";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.m-sats
           */
          const MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_5 = goog.getMsg("mSats");
          i18n_5 = MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_5;
        } else {
          i18n_5 = "mSats";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.zero-base-fee-tooltip
           */
          const MSG_EXTERNAL_6368280110177824890$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_6 = goog.getMsg("This channel supports zero base fee routing");
          i18n_6 = MSG_EXTERNAL_6368280110177824890$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_6;
        } else {
          i18n_6 = "Ten kana\u0142 wspiera routing bez op\u0142aty bazowej";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.zero-base-fee
           */
          const MSG_EXTERNAL_5793317177162168568$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_7 = goog.getMsg("Zero base fee");
          i18n_7 = MSG_EXTERNAL_5793317177162168568$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_7;
        } else {
          i18n_7 = "Zero op\u0142aty bazowej";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.non-zero-base-fee-tooltip
           */
          const MSG_EXTERNAL_4829569086006239962$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_8 = goog.getMsg("This channel does not support zero base fee routing");
          i18n_8 = MSG_EXTERNAL_4829569086006239962$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_8;
        } else {
          i18n_8 = "Ten kana\u0142 nie wspiera routingu bez op\u0142aty bazowej";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.non-zero-base-fee
           */
          const MSG_EXTERNAL_8778178753516317203$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_9 = goog.getMsg("Non-zero base fee");
          i18n_9 = MSG_EXTERNAL_8778178753516317203$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_9;
        } else {
          i18n_9 = "Niezerowa op\u0142ata bazowa";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.blocks
           */
          const MSG_EXTERNAL_4947628993404658948$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_10 = goog.getMsg("{$interpolation} {$startTagSpan}blocks{$closeTagSpan}", {
            "closeTagSpan": "\uFFFD/#1\uFFFD",
            "interpolation": "\uFFFD0\uFFFD",
            "startTagSpan": "\uFFFD#1\uFFFD"
          }, {
            original_code: {
              "closeTagSpan": "</span>",
              "interpolation": "{{ i }}",
              "startTagSpan": "<span class=\"shared-block\">"
            }
          });
          i18n_10 = MSG_EXTERNAL_4947628993404658948$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_10;
        } else {
          i18n_10 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD#1\uFFFD" + "bloki" + "\uFFFD/#1\uFFFD" + "";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.x-channels
           */
          const MSG_EXTERNAL_4973385904963492768$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_11 = goog.getMsg("{$interpolation} channels", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i }}"
            }
          });
          i18n_11 = MSG_EXTERNAL_4973385904963492768$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_BOX_CHANNEL_BOX_COMPONENT_TS_11;
        } else {
          i18n_11 = "" + "\uFFFD0\uFFFD" + " kana\u0142\xF3w";
        }
        return [["nonZeroBaseFee", ""], ["blocksPlural", ""], ["xChannels", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_7, i18n_9, i18n_10, i18n_11, [1, "mb-2", "box-top"], [1, "box-left", "text-truncate"], [1, "mb-0", "text-truncate"], [3, "text", "lastChars", "link"], [3, "text"], [1, "box-right"], [1, "second-line"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["digitsInfo", "1.2-2", 3, "satoshis", "noFiat"], [1, "box"], [1, "table", "table-borderless", "table-striped"], [1, "d-inline-block", "d-md-none"], [1, "symbol"], [1, "d-none", "d-md-inline-block"], [1, "base-fee"], [1, "d-flex", "justify-content-between", "align-items-center"], [4, "ngIf"], [3, "ngIf"], [3, "valueOverride", "satoshis"], ["class", "badge badge-success", "ngbTooltip", i18n_6, "placement", "bottom", 4, "ngIf", "ngIfElse"], ["ngbTooltip", i18n_6, "placement", "bottom", 1, "badge", "badge-success"], ["ngbTooltip", i18n_8, "placement", "bottom", 1, "badge", "badge-danger"], [1, "shared-block"]];
      },
      template: function ChannelBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "h3", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-truncate", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-clipboard", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 18)(8, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ChannelBoxComponent_ng_container_9_Template, 1, 0, "ng-container", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-amount", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 22)(13, "table", 23)(14, "tbody")(15, "tr")(16, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](17, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td")(19, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "amountShortener");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "amountShortener");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "tr")(32, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](33, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td", 27)(35, "span", 28)(36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ChannelBoxComponent_span_37_Template, 5, 4, "span", 29)(38, ChannelBoxComponent_span_38_Template, 2, 0, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ChannelBoxComponent_ng_template_39_Template, 1, 2, "ng-template", 30)(40, ChannelBoxComponent_ng_template_40_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "tr")(43, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](44, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "app-sats", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "tr")(48, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](49, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "app-sats", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "tr")(53, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](54, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, ChannelBoxComponent_ng_container_56_Template, 1, 0, "ng-container", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ChannelBoxComponent_ng_template_57_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(59, ChannelBoxComponent_ng_template_59_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_24_0;
          const blocksPlural_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](58);
          const xChannels_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.channel.alias || "?");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", ctx.channel.public_key)("lastChars", 6)("link", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](38, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 22, "/lightning/node"), ctx.channel.public_key));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", ctx.channel.public_key);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", xChannels_r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](41, _c1, ctx.channel.channels));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("satoshis", ctx.channel.capacity)("noFiat", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.channel.fee_rate !== null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](21, 24, ctx.channel.fee_rate, 2, undefined, true) : "-", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("ppm ", ctx.channel.fee_rate !== null ? "(" + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](24, 29, ctx.channel.fee_rate / 10000, 2, undefined, true) + "%)" : "", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.channel.fee_rate !== null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 34, ctx.channel.fee_rate) : "-", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("ppm ", ctx.channel.fee_rate !== null ? "(" + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 36, ctx.channel.fee_rate / 10000) + "%)" : "", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.channel.base_fee_mtokens !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.channel.base_fee_mtokens === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.channel.base_fee_mtokens !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("valueOverride", ctx.channel.min_htlc_mtokens === null ? "- " : undefined)("satoshis", ctx.channel.min_htlc_mtokens / 1000);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("valueOverride", ctx.channel.max_htlc_mtokens === null ? "- " : undefined)("satoshis", ctx.channel.max_htlc_mtokens / 1000);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", blocksPlural_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](43, _c1, (tmp_24_0 = ctx.channel.cltv_delta) !== null && tmp_24_0 !== undefined ? tmp_24_0 : "-"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_0__.ClipboardComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_1__.AmountComponent, _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_2__.SatsComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_3__.TruncateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_4__.RelativeUrlPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_5__.AmountShortenerPipe],
      styles: [".box-top[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.box-left[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.box-right[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: auto;\n  white-space: nowrap;\n}\n\n.shared-block[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n}\n\n@media (max-width: 768px) {\n  .box[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .base-fee[_ngcontent-%COMP%] {\n    padding-right: 0px;\n  }\n}"],
      changeDetection: 0
    });
  }
  return ChannelBoxComponent;
})();

/***/ }),

/***/ 55588:
/*!************************************************************************************!*\
  !*** ./src/app/lightning/channel/channel-close-box/channel-close-box.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelCloseBoxComponent: () => (/* binding */ ChannelCloseBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/sats/sats.component */ 85852);



function ChannelCloseBoxComponent_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r0.minStartingBalance, "1.0-0"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, ctx_r0.maxStartingBalance, "1.0-0"), "");
  }
}
function ChannelCloseBoxComponent_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.minStartingBalance, "1.0-0"));
  }
}
function ChannelCloseBoxComponent_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r0.channel.capacity - ctx_r0.maxStartingBalance, "1.0-0"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, ctx_r0.channel.capacity - ctx_r0.minStartingBalance, "1.0-0"), "");
  }
}
function ChannelCloseBoxComponent_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.channel.capacity - ctx_r0.maxStartingBalance, "1.0-0"));
  }
}
function ChannelCloseBoxComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChannelCloseBoxComponent_div_1_span_10_Template, 5, 8, "span", 10)(11, ChannelCloseBoxComponent_div_1_span_11_Template, 4, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ChannelCloseBoxComponent_div_1_span_13_Template, 5, 8, "span", 10)(14, ChannelCloseBoxComponent_div_1_span_14_Template, 4, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 13)(17, "div", 14)(18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.left.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.right.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minStartingBalance !== ctx_r0.maxStartingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minStartingBalance === ctx_r0.maxStartingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minStartingBalance !== ctx_r0.maxStartingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minStartingBalance === ctx_r0.maxStartingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r0.startingBalanceStyle.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide-value", ctx_r0.hideStartingLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r0.startingBalanceStyle.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r0.startingBalanceStyle.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide-value", ctx_r0.hideStartingRight);
  }
}
function ChannelCloseBoxComponent_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r0.minClosingBalance, "1.0-0"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, ctx_r0.maxClosingBalance, "1.0-0"), "");
  }
}
function ChannelCloseBoxComponent_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.minClosingBalance, "1.0-0"));
  }
}
function ChannelCloseBoxComponent_div_3_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r0.channel.capacity - ctx_r0.maxClosingBalance, "1.0-0"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, ctx_r0.channel.capacity - ctx_r0.minClosingBalance, "1.0-0"), "");
  }
}
function ChannelCloseBoxComponent_div_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sats", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.channel.capacity - ctx_r0.maxClosingBalance, "1.0-0"));
  }
}
function ChannelCloseBoxComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChannelCloseBoxComponent_div_3_span_5_Template, 5, 8, "span", 10)(6, ChannelCloseBoxComponent_div_3_span_6_Template, 4, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChannelCloseBoxComponent_div_3_span_8_Template, 5, 8, "span", 10)(9, ChannelCloseBoxComponent_div_3_span_9_Template, 4, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 13)(12, "div", 14)(13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minClosingBalance !== ctx_r0.maxClosingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minClosingBalance === ctx_r0.maxClosingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minClosingBalance !== ctx_r0.maxClosingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.minClosingBalance === ctx_r0.maxClosingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r0.closingBalanceStyle.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide-value", ctx_r0.hideClosingLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r0.closingBalanceStyle.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r0.closingBalanceStyle.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide-value", ctx_r0.hideClosingRight);
  }
}
let ChannelCloseBoxComponent = /*#__PURE__*/(() => {
  class ChannelCloseBoxComponent {
    constructor() {
      this.showStartingBalance = false;
      this.showClosingBalance = false;
      this.startingBalanceStyle = {
        left: '',
        center: '',
        right: ''
      };
      this.closingBalanceStyle = {
        left: '',
        center: '',
        right: ''
      };
      this.hideStartingLeft = false;
      this.hideStartingRight = false;
      this.hideClosingLeft = false;
      this.hideClosingRight = false;
    }
    ngOnChanges(changes) {
      let closingCapacity;
      if (this.channel && this.left && this.right) {
        this.showStartingBalance = (this.left.funding_balance || this.right.funding_balance) && this.channel.funding_ratio;
        this.showClosingBalance = this.left.closing_balance || this.right.closing_balance;
        if (this.channel.single_funded) {
          if (this.left.funding_balance) {
            this.minStartingBalance = this.channel.capacity;
            this.maxStartingBalance = this.channel.capacity;
          } else if (this.right.funding_balance) {
            this.minStartingBalance = 0;
            this.maxStartingBalance = 0;
          }
        } else {
          this.minStartingBalance = clampRound(0, this.channel.capacity, this.left.funding_balance * this.channel.funding_ratio);
          this.maxStartingBalance = clampRound(0, this.channel.capacity, this.channel.capacity - this.right.funding_balance * this.channel.funding_ratio);
        }
        closingCapacity = this.channel.capacity - this.channel.closing_fee;
        this.minClosingBalance = clampRound(0, closingCapacity, this.left.closing_balance);
        this.maxClosingBalance = clampRound(0, closingCapacity, closingCapacity - this.right.closing_balance);
        // margin of error to account for 2 x 330 sat anchor outputs
        if (Math.abs(this.minClosingBalance - this.maxClosingBalance) <= 660) {
          this.maxClosingBalance = this.minClosingBalance;
        }
      } else {
        this.showStartingBalance = false;
        this.showClosingBalance = false;
      }
      const startingMinPc = this.minStartingBalance / this.channel.capacity * 100;
      const startingMaxPc = this.maxStartingBalance / this.channel.capacity * 100;
      this.startingBalanceStyle = {
        left: `left: 0%; right: ${100 - startingMinPc}%;`,
        center: `left: ${startingMinPc}%; right: ${100 - startingMaxPc}%;`,
        right: `left: ${startingMaxPc}%; right: 0%;`
      };
      this.hideStartingLeft = startingMinPc < 15;
      this.hideStartingRight = startingMaxPc > 85;
      const closingMinPc = this.minClosingBalance / closingCapacity * 100;
      const closingMaxPc = this.maxClosingBalance / closingCapacity * 100;
      this.closingBalanceStyle = {
        left: `left: 0%; right: ${100 - closingMinPc}%;`,
        center: `left: ${closingMinPc}%; right: ${100 - closingMaxPc}%;`,
        right: `left: ${closingMaxPc}%; right: 0%;`
      };
      this.hideClosingLeft = closingMinPc < 15;
      this.hideClosingRight = closingMaxPc > 85;
    }
    static #_ = this.ɵfac = function ChannelCloseBoxComponent_Factory(t) {
      return new (t || ChannelCloseBoxComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChannelCloseBoxComponent,
      selectors: [["app-channel-close-box"]],
      inputs: {
        channel: "channel",
        left: "left",
        right: "right"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 2,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Channel starting balance
           * @meaning lightning.starting-balance
           */
          const MSG_EXTERNAL_300163310609180646$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_CLOSE_BOX_CHANNEL_CLOSE_BOX_COMPONENT_TS_0 = goog.getMsg("Starting balance");
          i18n_0 = MSG_EXTERNAL_300163310609180646$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_CLOSE_BOX_CHANNEL_CLOSE_BOX_COMPONENT_TS_0;
        } else {
          i18n_0 = "Saldo pocz\u0105tkowe";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Channel closing balance
           * @meaning lightning.closing-balance
           */
          const MSG_EXTERNAL_8092429752744493243$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_CLOSE_BOX_CHANNEL_CLOSE_BOX_COMPONENT_TS_1 = goog.getMsg("Closing balance");
          i18n_1 = MSG_EXTERNAL_8092429752744493243$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_CLOSE_BOX_CHANNEL_CLOSE_BOX_COMPONENT_TS_1;
        } else {
          i18n_1 = "Saldo ko\u0144cowe";
        }
        return [i18n_0, i18n_1, [1, "box"], ["class", "starting-balance", 4, "ngIf"], ["class", "closing-balance", 4, "ngIf"], [1, "starting-balance"], [1, "nodes"], [1, "alias"], [1, "balances"], [1, "balance", "left"], ["class", "value", 4, "ngIf"], [1, "balance", "right"], [1, "balance-bar"], [1, "bar", "left"], [1, "bar", "center"], [1, "bar", "right"], [1, "value"], [3, "valueOverride"], [1, "closing-balance"]];
      },
      template: function ChannelCloseBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChannelCloseBoxComponent_div_1_Template, 19, 16, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChannelCloseBoxComponent_div_3_Template, 14, 14, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showStartingBalance);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showClosingBalance);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_0__.SatsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
      styles: [".box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n@media (max-width: 768px) {\n  .box[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.starting-balance[_ngcontent-%COMP%], .closing-balance[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.starting-balance[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .closing-balance[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.nodes[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: row;\n  align-items: baseline;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .nodes[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n.balances[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.balances[_ngcontent-%COMP%]   .balance.left[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.balances[_ngcontent-%COMP%]   .balance.right[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.balance-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2em;\n  position: relative;\n}\n.balance-bar[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.balance-bar[_ngcontent-%COMP%]   .bar.left[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.balance-bar[_ngcontent-%COMP%]   .bar.center[_ngcontent-%COMP%] {\n  background: repeating-linear-gradient(60deg, var(--primary) 0, var(--primary) 12px, var(--success) 12px, var(--success) 24px);\n}\n.balance-bar[_ngcontent-%COMP%]   .bar.right[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.balance-bar[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex: 0;\n  white-space: nowrap;\n}\n.balance-bar[_ngcontent-%COMP%]   .bar.hide-value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .balance-bar[_ngcontent-%COMP%] {\n    height: 1em;\n  }\n  .balance-bar[_ngcontent-%COMP%]   .bar.center[_ngcontent-%COMP%] {\n    background: repeating-linear-gradient(60deg, var(--primary) 0, var(--primary) 8px, var(--success) 8px, var(--success) 16px);\n  }\n}"],
      changeDetection: 0
    });
  }
  return ChannelCloseBoxComponent;
})();
function clampRound(min, max, value) {
  return Math.max(0, Math.min(max, Math.round(value)));
}

/***/ }),

/***/ 52249:
/*!****************************************************************!*\
  !*** ./src/app/lightning/channel/channel-preview.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelPreviewComponent: () => (/* binding */ ChannelPreviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/opengraph.service */ 26857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/sats/sats.component */ 85852);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/master-page-preview/preview-title.component */ 20570);
/* harmony import */ var _app_shared_components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/components/http-error/http-error.component */ 4560);
/* harmony import */ var _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/lightning/channel/closing-type/closing-type.component */ 694);
/* harmony import */ var _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/lightning/nodes-channels-map/nodes-channels-map.component */ 96984);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);

















const _c0 = (a0, a1) => [a0, a1];
const _c1 = () => ["fas", "arrow-right-arrow-left"];
function ChannelPreviewComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ChannelPreviewComponent_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ChannelPreviewComponent_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ChannelPreviewComponent_div_0_app_closing_type_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-closing-type", 41);
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", channel_r1.closing_reason);
  }
}
function ChannelPreviewComponent_div_0_app_nodes_channels_map_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-nodes-channels-map", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("readyEvent", function ChannelPreviewComponent_div_0_app_nodes_channels_map_53_Template_app_nodes_channels_map_readyEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onMapReady());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"]("channelpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("channel", ctx_r2.channelGeo)("fitContainer", true)("placeholder", true)("disableSpinner", true);
  }
}
function ChannelPreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 13)(1, "app-preview-title")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 14)(5, "div", 15)(6, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ChannelPreviewComponent_div_0_span_9_Template, 2, 0, "span", 18)(10, ChannelPreviewComponent_div_0_span_10_Template, 2, 0, "span", 19)(11, ChannelPreviewComponent_div_0_span_11_Template, 2, 0, "span", 20)(12, ChannelPreviewComponent_div_0_app_closing_type_12_Template, 1, 1, "app-closing-type", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 22)(14, "div", 23)(15, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "table", 25)(19, "tbody")(20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](22, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "app-timestamp", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](27, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "app-amount", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "tr")(31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](32, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "td")(34, "div", 28)(35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](38, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](43, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "tr")(45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](46, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "td")(48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](49, "app-sats", 31)(50, "fa-icon", 30)(51, "app-sats", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, ChannelPreviewComponent_div_0_app_nodes_channels_map_53_Template, 1, 6, "app-nodes-channels-map", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 34)(55, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const channel_r1 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](channel_r1.short_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", channel_r1.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", channel_r1.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", channel_r1.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", channel_r1.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](27, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 25, "/lightning/channel"), channel_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](channel_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("customFormat", "yyyy-MM-dd HH:mm")("unixTime", channel_r1.created)("hideTimeSince", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", channel_r1.capacity)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", channel_r1.node_left.fee_rate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](30, _c1))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", channel_r1.node_right.fee_rate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", channel_r1.node_left.base_fee_mtokens / 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](31, _c1))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", channel_r1.node_right.base_fee_mtokens / 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", channel_r1.node_left.alias || "?", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](32, _c1))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", channel_r1.node_right.alias || "?", " ");
  }
}
function ChannelPreviewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-http-error", 43)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("error", ctx_r2.error);
  }
}
let ChannelPreviewComponent = /*#__PURE__*/(() => {
  class ChannelPreviewComponent {
    constructor(lightningApiService, activatedRoute, seoService, openGraphService) {
      this.lightningApiService = lightningApiService;
      this.activatedRoute = activatedRoute;
      this.seoService = seoService;
      this.openGraphService = openGraphService;
      this.error = null;
      this.channelGeo = [];
    }
    ngOnInit() {
      this.channel$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(params => {
        this.shortId = params.get('short_id') || '';
        this.ogSession = this.openGraphService.waitFor('channel-map-' + this.shortId);
        this.ogSession = this.openGraphService.waitFor('channel-data-' + this.shortId);
        this.error = null;
        this.seoService.setTitle(`Channel: ${params.get('short_id')}`);
        this.seoService.setDescription("Przegl\u0105d kana\u0142u Lightning " + params.get('short_id') + ". Zobacz przepustowo\u015B\u0107 kana\u0142u, zaanga\u017Cowane w\u0119z\u0142y Lightning, powi\u0105zane transakcje w \u0142a\u0144cuchu i nie tylko.");
        return this.lightningApiService.getChannel$(params.get('short_id')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(data => {
          if (!data.node_left.longitude || !data.node_left.latitude || !data.node_right.longitude || !data.node_right.latitude) {
            this.channelGeo = [];
          } else {
            this.channelGeo = [data.node_left.public_key, data.node_left.alias, data.node_left.longitude, data.node_left.latitude, data.node_right.public_key, data.node_right.alias, data.node_right.longitude, data.node_right.latitude];
          }
          this.openGraphService.waitOver({
            event: 'channel-data-' + this.shortId,
            sessionId: this.ogSession
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => {
          this.error = err;
          this.seoService.logSoft404();
          this.openGraphService.fail({
            event: 'channel-map-' + this.shortId,
            sessionId: this.ogSession
          });
          this.openGraphService.fail({
            event: 'channel-data-' + this.shortId,
            sessionId: this.ogSession
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null);
        }));
      }));
    }
    onMapReady() {
      this.openGraphService.waitOver({
        event: 'channel-map-' + this.shortId,
        sessionId: this.ogSession
      });
    }
    static #_ = this.ɵfac = function ChannelPreviewComponent_Factory(t) {
      return new (t || ChannelPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__.OpenGraphService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ChannelPreviewComponent,
      selectors: [["app-channel-preview"]],
      decls: 3,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channel
           */
          const MSG_EXTERNAL_5269921298608822104$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_0 = goog.getMsg("lightning channel");
          i18n_0 = MSG_EXTERNAL_5269921298608822104$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_0;
        } else {
          i18n_0 = "kana\u0142 lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.created
           */
          const MSG_EXTERNAL_4207916966377787111$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_1 = goog.getMsg("Created");
          i18n_1 = MSG_EXTERNAL_4207916966377787111$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_1;
        } else {
          i18n_1 = "Stworzony";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_2 = goog.getMsg("Capacity");
          i18n_2 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_2;
        } else {
          i18n_2 = "Pojemno\u015B\u0107";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction fee rate
           * @meaning transaction.fee-rate
           */
          const MSG_EXTERNAL_8610476630152321637$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_3 = goog.getMsg("Fee rate");
          i18n_3 = MSG_EXTERNAL_8610476630152321637$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_3;
        } else {
          i18n_3 = "Poziom op\u0142at";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.ppm
           */
          const MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_4 = goog.getMsg("ppm");
          i18n_4 = MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_4;
        } else {
          i18n_4 = "ppm";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.ppm
           */
          const MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_5 = goog.getMsg("ppm");
          i18n_5 = MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_5;
        } else {
          i18n_5 = "ppm";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc channel.base-fee
           */
          const MSG_EXTERNAL_7880112049073973371$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_6 = goog.getMsg("Base fee");
          i18n_6 = MSG_EXTERNAL_7880112049073973371$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_6;
        } else {
          i18n_6 = "Op\u0142ata bazowa";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.inactive
           */
          const MSG_EXTERNAL_1859131936150262113$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_7 = goog.getMsg("Inactive");
          i18n_7 = MSG_EXTERNAL_1859131936150262113$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_7;
        } else {
          i18n_7 = "Nieaktywny";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.active
           */
          const MSG_EXTERNAL_8204176479746810612$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_8 = goog.getMsg("Active");
          i18n_8 = MSG_EXTERNAL_8204176479746810612$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_8;
        } else {
          i18n_8 = "Aktywny";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.closed
           */
          const MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_9 = goog.getMsg("Closed");
          i18n_9 = MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_9;
        } else {
          i18n_9 = "Zamkni\u0119ty";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc error.general-loading-data
           */
          const MSG_EXTERNAL_2612543646528354459$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_10 = goog.getMsg("Error loading data.");
          i18n_10 = MSG_EXTERNAL_2612543646528354459$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_PREVIEW_COMPONENT_TS_10;
        } else {
          i18n_10 = "B\u0142\u0105d \u0142adowania danych.";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, ["class", "box preview-box", 4, "ngIf"], [3, "ngIf"], [1, "box", "preview-box"], [1, "row", "d-flex", "justify-content-between", "full-width-row"], [1, "title-wrapper"], [1, "title"], [1, "badges", "mb-2"], ["class", "badge rounded-pill badge-secondary", 4, "ngIf"], ["class", "badge rounded-pill badge-success", 4, "ngIf"], ["class", "badge rounded-pill badge-danger", 4, "ngIf"], [3, "type", 4, "ngIf"], [1, "row"], [1, "col-md", "table-col"], [1, "subtitle", 3, "routerLink"], [1, "table", "table-borderless", "table-striped"], [3, "customFormat", "unixTime", "hideTimeSince"], [3, "satoshis", "noFiat"], [1, "dual-cell"], [1, "symbol"], [1, "between-arrow", 3, "icon", "fixedWidth"], ["digitsInfo", "1.0-2", 3, "satoshis"], [1, "col-md", "map-col"], [3, "style", "channel", "fitContainer", "placeholder", "disableSpinner", "readyEvent", 4, "ngIf"], [1, "row", "d-flex", "justify-content-between", "full-width-row", "nodes"], [1, "node", "left"], ["title", "channel between", 1, "between-arrow", 3, "icon", "fixedWidth"], [1, "node", "right"], [1, "badge", "rounded-pill", "badge-secondary"], [1, "badge", "rounded-pill", "badge-success"], [1, "badge", "rounded-pill", "badge-danger"], [3, "type"], [3, "readyEvent", "channel", "fitContainer", "placeholder", "disableSpinner"], [3, "error"]];
      },
      template: function ChannelPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ChannelPreviewComponent_div_0_Template, 60, 33, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ChannelPreviewComponent_ng_template_2_Template, 3, 1, "ng-template", 12);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, ctx.channel$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__.AmountComponent, _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_4__.SatsComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__.TimestampComponent, _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_6__.PreviewTitleComponent, _app_shared_components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_7__.HttpErrorComponent, _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_8__.ClosingTypeComponent, _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_9__.NodesChannelsMap, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__.RelativeUrlPipe],
      styles: [".table-col[_ngcontent-%COMP%] {\n  max-width: calc(100% - 470px);\n  overflow: hidden;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-top: 10px;\n}\n\n.badges[_ngcontent-%COMP%] {\n  font-size: 28px;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: baseline;\n  justify-content: flex-end;\n}\n.badges[_ngcontent-%COMP%]     .badge {\n  margin-left: 0.5em;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.full-width-row[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n  flex-wrap: nowrap;\n}\n\n.row.nodes[_ngcontent-%COMP%] {\n  background: var(--stat-box-bg);\n  margin: 15px 0 0;\n}\n\n.nodes[_ngcontent-%COMP%] {\n  font-size: 36px;\n  align-items: center;\n}\n\n.between-arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.map-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 470px;\n  min-width: 470px;\n  padding: 0;\n  background: var(--stat-box-bg);\n  max-height: 350px;\n  overflow: hidden;\n}\n\n  .symbol {\n  font-size: 24px;\n}\n\n.dual-cell[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.dual-cell[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 0;\n  flex-grow: 1;\n}\n.dual-cell[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: center;\n  max-width: 1.5em;\n}\n.dual-cell[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3) {\n  text-align: right;\n}"],
      changeDetection: 0
    });
  }
  return ChannelPreviewComponent;
})();

/***/ }),

/***/ 69136:
/*!********************************************************!*\
  !*** ./src/app/lightning/channel/channel.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelComponent: () => (/* binding */ ChannelComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/electrs-api.service */ 62596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/clipboard/clipboard.component */ 97338);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/transactions-list/transactions-list.component */ 5754);
/* harmony import */ var _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/sats/sats.component */ 85852);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_lightning_channel_channel_box_channel_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/lightning/channel/channel-box/channel-box.component */ 492);
/* harmony import */ var _app_lightning_channel_channel_close_box_channel_close_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/lightning/channel/channel-close-box/channel-close-box.component */ 55588);
/* harmony import */ var _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/lightning/channel/closing-type/closing-type.component */ 694);
/* harmony import */ var _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/lightning/nodes-channels-map/nodes-channels-map.component */ 96984);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);


















const _c0 = (a0, a1) => [a0, a1];
const _c1 = a0 => [a0];
function ChannelComponent_div_0_ng_container_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ChannelComponent_div_0_ng_container_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ChannelComponent_div_0_ng_container_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ChannelComponent_div_0_ng_container_1_app_closing_type_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-closing-type", 40);
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", channel_r1.closing_reason);
  }
}
function ChannelComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 27)(4, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span", 29)(7, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "app-clipboard", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, ChannelComponent_div_0_ng_container_1_span_12_Template, 2, 0, "span", 33)(13, ChannelComponent_div_0_ng_container_1_span_13_Template, 2, 0, "span", 34)(14, ChannelComponent_div_0_ng_container_1_span_14_Template, 2, 0, "span", 35)(15, ChannelComponent_div_0_ng_container_1_app_closing_type_15_Template, 1, 1, "app-closing-type", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](channel_r1.short_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 8, "/lightning/channel"), channel_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](channel_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("text", channel_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.closing_reason);
  }
}
function ChannelComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 41)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("No channel found for ID \"", channel_r1.short_id, "\"");
  }
}
function ChannelComponent_div_0_app_nodes_channels_map_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-nodes-channels-map", 43);
  }
  if (rf & 2) {
    const channelGeo_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleMap"]("channelpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("channel", channelGeo_r2);
  }
}
function ChannelComponent_div_0_div_6_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "app-timestamp", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dateString", channel_r1.updated_at);
  }
}
function ChannelComponent_div_0_div_6_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "app-timestamp", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dateString", channel_r1.closing_date);
  }
}
function ChannelComponent_div_0_div_6_tr_22_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](channel_r1.node_left.alias);
  }
}
function ChannelComponent_div_0_div_6_tr_22_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](channel_r1.node_right.alias);
  }
}
function ChannelComponent_div_0_div_6_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td")(4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ChannelComponent_div_0_div_6_tr_22_ng_container_6_Template, 2, 1, "ng-container", 19)(7, ChannelComponent_div_0_div_6_tr_22_ng_container_7_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 3, "/lightning/node"), channel_r1.closed_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.closed_by === channel_r1.node_left.public_key);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.closed_by === channel_r1.node_right.public_key);
  }
}
function ChannelComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "table", 47)(4, "tbody")(5, "tr")(6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "app-timestamp", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ChannelComponent_div_0_div_6_tr_10_Template, 5, 1, "tr", 19)(11, ChannelComponent_div_0_div_6_tr_11_Template, 5, 1, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 46)(14, "table", 47)(15, "tbody")(16, "tr")(17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](18, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "app-sats", 50)(21, "app-fiat", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, ChannelComponent_div_0_div_6_tr_22_Template, 8, 8, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dateString", channel_r1.created);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.status !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("satoshis", channel_r1.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", channel_r1.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", channel_r1.closed_by);
  }
}
function ChannelComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-channel-box", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "app-channel-box", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("channel", channel_r1.node_left);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("channel", channel_r1.node_right);
  }
}
function ChannelComponent_div_0_app_channel_close_box_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-channel-close-box", 54);
  }
  if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("channel", channel_r1)("left", channel_r1.node_left)("right", channel_r1.node_right);
  }
}
function ChannelComponent_div_0_ng_container_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 56)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChannelComponent_div_0_ng_container_11_ng_template_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const txList1_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](txList1_r4.toggleDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "app-transactions-list", 58, 1);
  }
  if (rf & 2) {
    const transactions_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("transactions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](3, _c1, transactions_r5[0]))("showConfirmations", true)("rowLimit", 5);
  }
}
function ChannelComponent_div_0_ng_container_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 59)(1, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "app-closing-type", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChannelComponent_div_0_ng_container_11_ng_template_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const txList2_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](txList2_r7.toggleDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](6, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "app-transactions-list", 58, 2);
  }
  if (rf & 2) {
    const transactions_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", channel_r1.closing_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("transactions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c1, transactions_r5[1]))("showConfirmations", true)("rowLimit", 5);
  }
}
function ChannelComponent_div_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ChannelComponent_div_0_ng_container_11_ng_template_1_Template, 7, 5, "ng-template", 55)(2, ChannelComponent_div_0_ng_container_11_ng_template_2_Template, 9, 6, "ng-template", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transactions_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", transactions_r5[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", transactions_r5[1]);
  }
}
function ChannelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ChannelComponent_div_0_ng_container_1_Template, 16, 13, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ChannelComponent_div_0_div_3_Template, 3, 1, "div", 21)(4, ChannelComponent_div_0_app_nodes_channels_map_4_Template, 1, 3, "app-nodes-channels-map", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ChannelComponent_div_0_div_6_Template, 23, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, ChannelComponent_div_0_div_8_Template, 5, 2, "div", 24)(9, ChannelComponent_div_0_app_channel_close_box_9_Template, 1, 3, "app-channel-close-box", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ChannelComponent_div_0_ng_container_11_Template, 3, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channel_r1 = ctx.ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r7.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r7.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r7.error && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, ctx_r7.channelGeo$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r7.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r7.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r7.showCloseBoxes(channel_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 9, ctx_r7.transactions$));
  }
}
function ChannelComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18)(1, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 27)(4, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 64)(12, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 44)(16, "div", 45)(17, "div", 46)(18, "table", 47)(19, "tbody")(20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 46)(32, "table", 47)(33, "tbody")(34, "tr")(35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
  }
}
let ChannelComponent = /*#__PURE__*/(() => {
  class ChannelComponent {
    constructor(lightningApiService, activatedRoute, seoService, electrsApiService) {
      this.lightningApiService = lightningApiService;
      this.activatedRoute = activatedRoute;
      this.seoService = seoService;
      this.electrsApiService = electrsApiService;
      this.error = null;
    }
    ngOnInit() {
      this.channel$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(params => {
        this.error = null;
        return this.lightningApiService.getChannel$(params.get('short_id')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(value => {
          this.seoService.setTitle("Kana\u0142: " + value.short_id + "");
          this.seoService.setDescription("Przegl\u0105d kana\u0142u Lightning " + value.short_id + ". Zobacz przepustowo\u015B\u0107 kana\u0142u, zaanga\u017Cowane w\u0119z\u0142y Lightning, powi\u0105zane transakcje w \u0142a\u0144cuchu i nie tylko.");
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(err => {
          this.error = err;
          this.seoService.logSoft404();
          return [{
            short_id: params.get('short_id')
          }];
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)());
      this.channelGeo$ = this.channel$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(data => {
        if (!data.node_left.longitude || !data.node_left.latitude || !data.node_right.longitude || !data.node_right.latitude) {
          return [];
        } else {
          return [data.node_left.public_key, data.node_left.alias, data.node_left.longitude, data.node_left.latitude, data.node_right.public_key, data.node_right.alias, data.node_right.longitude, data.node_right.latitude];
        }
      }));
      this.transactions$ = this.channel$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(channel => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.zip)([channel.transaction_id ? this.electrsApiService.getTransaction$(channel.transaction_id) : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null), channel.closing_transaction_id ? this.electrsApiService.getTransaction$(channel.closing_transaction_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(tx => {
          tx._channels = {
            inputs: {
              0: channel
            },
            outputs: {}
          };
          return tx;
        })) : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null)]);
      }));
    }
    showCloseBoxes(channel) {
      return !!(channel.node_left.funding_balance || channel.node_left.closing_balance || channel.node_right.funding_balance || channel.node_right.closing_balance);
    }
    static #_ = this.ɵfac = function ChannelComponent_Factory(t) {
      return new (t || ChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_2__.ElectrsApiService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: ChannelComponent,
      selectors: [["app-channel"]],
      decls: 5,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channel
           */
          const MSG_EXTERNAL_5208354993629797963$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_0 = goog.getMsg("Lightning channel");
          i18n_0 = MSG_EXTERNAL_5208354993629797963$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_0;
        } else {
          i18n_0 = "Kana\u0142 Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.inactive
           */
          const MSG_EXTERNAL_1859131936150262113$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_1 = goog.getMsg("Inactive");
          i18n_1 = MSG_EXTERNAL_1859131936150262113$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_1;
        } else {
          i18n_1 = "Nieaktywny";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.active
           */
          const MSG_EXTERNAL_8204176479746810612$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_2 = goog.getMsg("Active");
          i18n_2 = MSG_EXTERNAL_8204176479746810612$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_2;
        } else {
          i18n_2 = "Aktywny";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.closed
           */
          const MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_3 = goog.getMsg("Closed");
          i18n_3 = MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_3;
        } else {
          i18n_3 = "Zamkni\u0119ty";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.created
           */
          const MSG_EXTERNAL_4207916966377787111$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_4 = goog.getMsg("Created");
          i18n_4 = MSG_EXTERNAL_4207916966377787111$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_4;
        } else {
          i18n_4 = "Stworzony";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_5 = goog.getMsg("Capacity");
          i18n_5 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_5;
        } else {
          i18n_5 = "Pojemno\u015B\u0107";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.last-update
           */
          const MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_6 = goog.getMsg("Last update");
          i18n_6 = MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_6;
        } else {
          i18n_6 = "Ostatnia aktualizacja";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.closing_date
           */
          const MSG_EXTERNAL_4494424754501469379$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_7 = goog.getMsg("Closing date");
          i18n_7 = MSG_EXTERNAL_4494424754501469379$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_7;
        } else {
          i18n_7 = "Data zamkni\u0119cia";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.closed_by
           */
          const MSG_EXTERNAL_4523527635464224567$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_8 = goog.getMsg("Closed by");
          i18n_8 = MSG_EXTERNAL_4523527635464224567$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_8;
        } else {
          i18n_8 = "Zamkni\u0119ty przez";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.opening-transaction
           */
          const MSG_EXTERNAL_7562034013628970815$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_9 = goog.getMsg("Opening transaction");
          i18n_9 = MSG_EXTERNAL_7562034013628970815$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_9;
        } else {
          i18n_9 = "Transakcja otwarcia";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction Details
           * @meaning transaction.details
           */
          const MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_10 = goog.getMsg("Details");
          i18n_10 = MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_10;
        } else {
          i18n_10 = "Szczeg\xF3\u0142y";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.closing-transaction
           */
          const MSG_EXTERNAL_335568611259508955$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_11 = goog.getMsg("Closing transaction");
          i18n_11 = MSG_EXTERNAL_335568611259508955$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_11;
        } else {
          i18n_11 = "Transakcja zamkni\u0119cia";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction Details
           * @meaning transaction.details
           */
          const MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_12 = goog.getMsg("Details");
          i18n_12 = MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_12;
        } else {
          i18n_12 = "Szczeg\xF3\u0142y";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channel
           */
          const MSG_EXTERNAL_5208354993629797963$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_13 = goog.getMsg("Lightning channel");
          i18n_13 = MSG_EXTERNAL_5208354993629797963$$SRC_APP_LIGHTNING_CHANNEL_CHANNEL_COMPONENT_TS_13;
        } else {
          i18n_13 = "Kana\u0142 Lightning";
        }
        return [["skeletonLoader", ""], ["txList1", ""], ["txList2", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, ["class", "container-xl", 4, "ngIf", "ngIfElse"], [1, "container-xl"], [4, "ngIf"], [1, "clearfix"], ["class", "d-flex flex-column justify-content-around align-items-center mt-5 w-100", "style", "min-height: 100px", 4, "ngIf"], [3, "style", "channel", 4, "ngIf"], ["class", "box", 4, "ngIf"], ["class", "row row-cols-1 row-cols-md-2", 4, "ngIf"], [3, "channel", "left", "right", 4, "ngIf"], [1, "mb-0", 2, "color", "var(--transparent-fg)"], [1, "title-container"], [1, "mb-0"], [1, "tx-link"], [3, "routerLink"], [3, "text"], [1, "badges", "mb-2"], ["class", "badge rounded-pill badge-secondary", 4, "ngIf"], ["class", "badge rounded-pill badge-success", 4, "ngIf"], ["class", "badge rounded-pill badge-danger", 4, "ngIf"], [3, "type", 4, "ngIf"], [1, "badge", "rounded-pill", "badge-secondary"], [1, "badge", "rounded-pill", "badge-success"], [1, "badge", "rounded-pill", "badge-danger"], [3, "type"], [1, "d-flex", "flex-column", "justify-content-around", "align-items-center", "mt-5", "w-100", 2, "min-height", "100px"], [1, "text-center"], [3, "channel"], [1, "box"], [1, "row"], [1, "col-md"], [1, "table", "table-borderless", "table-striped"], [3, "dateString"], [1, "w-100", "d-block", "d-md-none"], [3, "satoshis"], ["digitsInfo", "1.0-0", 3, "value"], [1, "row", "row-cols-1", "row-cols-md-2"], [1, "col"], [3, "channel", "left", "right"], [3, "ngIf"], [1, "d-flex"], ["type", "button", 1, "btn", "btn-outline-info", "details-button", "btn-sm", 3, "click"], [3, "transactions", "showConfirmations", "rowLimit"], [1, "closing-header", "d-flex"], [2, "margin", "0"], [1, "skeleton-loader", 2, "width", "275px", "height", "25px"], [1, "skeleton-loader", 2, "margin-bottom", "5px", "width", "210px"], [1, "skeleton-loader", 2, "width", "50px", "height", "22px", "margin-top", "5px"], [2, "height", "413px", "padding", "15px"], [1, "text-center", "loading-spinner"], [1, "spinner-border", "text-light"], [1, "skeleton-loader"]];
      },
      template: function ChannelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, ChannelComponent_div_0_Template, 13, 11, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ChannelComponent_ng_template_3_Template, 39, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const skeletonLoader_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, ctx.channel$))("ngIfElse", skeletonLoader_r9);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_3__.ClipboardComponent, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_4__.FiatComponent, _components_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_5__.TransactionsListComponent, _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_6__.SatsComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_7__.TimestampComponent, _app_lightning_channel_channel_box_channel_box_component__WEBPACK_IMPORTED_MODULE_8__.ChannelBoxComponent, _app_lightning_channel_channel_close_box_channel_close_box_component__WEBPACK_IMPORTED_MODULE_9__.ChannelCloseBoxComponent, _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_10__.ClosingTypeComponent, _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_11__.NodesChannelsMap, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_12__.RelativeUrlPipe],
      styles: [".title-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 767.98px) {\n  .title-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.tx-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n@media (min-width: 768px) {\n  .tx-link[_ngcontent-%COMP%] {\n    top: 1px;\n    position: relative;\n    align-self: end;\n    margin-left: 15px;\n    margin-top: 0px;\n    margin-bottom: 4px;\n  }\n}\n@media (max-width: 768px) {\n  .tx-link[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n.badges[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\napp-fiat[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n}\n@media (min-width: 768px) {\n  app-fiat[_ngcontent-%COMP%] {\n    font-size: 14px;\n    display: inline-block;\n    margin-left: 10px;\n  }\n}\n\n.closing-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n  margin-bottom: 1rem;\n  align-items: center;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n@media (max-width: 768px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    white-space: nowrap;\n  }\n  .closing-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  app-closing-type[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    order: 1;\n  }\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 400px;\n  z-index: 99;\n  width: 100%;\n  left: 0;\n}\n@media (max-width: 767.98px) {\n  .loading-spinner[_ngcontent-%COMP%] {\n    top: 450px;\n  }\n}\n\n.details-button[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-inline-start: auto;\n}"],
      changeDetection: 0
    });
  }
  return ChannelComponent;
})();

/***/ }),

/***/ 694:
/*!**************************************************************************!*\
  !*** ./src/app/lightning/channel/closing-type/closing-type.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClosingTypeComponent: () => (/* binding */ ClosingTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 39962);

let ClosingTypeComponent = /*#__PURE__*/(() => {
  class ClosingTypeComponent {
    constructor() {
      this.type = 0;
    }
    ngOnChanges() {
      this.label = this.getLabelFromType(this.type);
    }
    getLabelFromType(type) {
      switch (type) {
        case 1:
          return {
            label: "Obustronnie zamkni\u0119ty",
            class: 'success'
          };
        case 2:
          return {
            label: "Wymuszone zamkni\u0119cie",
            class: 'warning'
          };
        case 3:
          return {
            label: "Wymuszone zamkni\u0119cie z kar\u0105",
            class: 'danger'
          };
        default:
          return {
            label: "Nieznany",
            class: 'secondary'
          };
      }
    }
    static #_ = this.ɵfac = function ClosingTypeComponent_Factory(t) {
      return new (t || ClosingTypeComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClosingTypeComponent,
      selectors: [["app-closing-type"]],
      inputs: {
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 4,
      template: function ClosingTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-", ctx.label.class, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label.label);
        }
      },
      changeDetection: 0
    });
  }
  return ClosingTypeComponent;
})();

/***/ }),

/***/ 36560:
/*!********************************************************************!*\
  !*** ./src/app/lightning/channels-list/channels-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelsListComponent: () => (/* binding */ ChannelsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 13054);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/clipboard/clipboard.component */ 97338);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/channel/closing-type/closing-type.component */ 694);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);

















const _c0 = (a0, a1) => ({
  $implicit: a0,
  node: a1
});
const _c1 = (a0, a1) => [a0, a1];
const _c2 = a0 => ({
  $implicit: a0
});
const _c3 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ChannelsListComponent_div_0_table_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function ChannelsListComponent_div_0_table_11_tr_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function ChannelsListComponent_div_0_table_11_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChannelsListComponent_div_0_table_11_tr_3_ng_container_1_Template, 1, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const tableTemplate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", tableTemplate_r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c0, channel_r1, channel_r1.node));
  }
}
function ChannelsListComponent_div_0_table_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChannelsListComponent_div_0_table_11_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ChannelsListComponent_div_0_table_11_tr_3_Template, 2, 5, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const response_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const tableHeader_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](ctx_r3.isLoading ? "opacity: 0.75" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", tableHeader_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", response_r3.channels);
  }
}
function ChannelsListComponent_div_0_ngb_pagination_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngb-pagination", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("pageChange", function ChannelsListComponent_div_0_ngb_pagination_12_Template_ngb_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.page, $event) || (ctx_r3.page = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function ChannelsListComponent_div_0_ngb_pagination_12_Template_ngb_pagination_pageChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.pageChange(ctx_r3.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const response_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("size", ctx_r3.paginationSize)("collectionSize", response_r3.totalItems)("rotate", true)("pageSize", ctx_r3.itemsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("page", ctx_r3.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("maxSize", ctx_r3.paginationMaxSize)("boundaryLinks", true)("ellipses", false);
  }
}
function ChannelsListComponent_div_0_table_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 33)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ChannelsListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23)(1, "form", 24)(2, "div", 25)(3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ChannelsListComponent_div_0_table_11_Template, 4, 4, "table", 29)(12, ChannelsListComponent_div_0_ngb_pagination_12_Template, 1, 8, "ngb-pagination", 30)(13, ChannelsListComponent_div_0_table_13_Template, 3, 0, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "div", 32)(15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const response_r3 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r3.channelStatusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r3.channelStatusForm.get("status").value === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r3.channelStatusForm.get("status").value === "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", response_r3.channels.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", response_r3.channels.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", response_r3.channels.length === 0);
  }
}
function ChannelsListComponent_ng_template_2_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChannelsListComponent_ng_template_2_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChannelsListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "thead")(1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ChannelsListComponent_ng_template_2_th_7_Template, 2, 0, "th", 42)(8, ChannelsListComponent_ng_template_2_th_8_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](10, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.status !== "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.status === "closed");
  }
}
function ChannelsListComponent_ng_template_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function ChannelsListComponent_ng_template_4_app_amount_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-amount", 56);
  }
  if (rf & 2) {
    const node_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().node;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", node_r7.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function ChannelsListComponent_ng_template_4_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().node;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 1, node_r7.capacity, 1), " ");
  }
}
function ChannelsListComponent_ng_template_4_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChannelsListComponent_ng_template_4_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChannelsListComponent_ng_template_4_ng_template_16_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChannelsListComponent_ng_template_4_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-closing-type", 61);
  }
  if (rf & 2) {
    const channel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", channel_r8.closing_reason);
  }
}
function ChannelsListComponent_ng_template_4_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ChannelsListComponent_ng_template_4_ng_template_16_span_0_Template, 2, 0, "span", 60)(1, ChannelsListComponent_ng_template_4_ng_template_16_ng_template_1_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const closingReason_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const channel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !channel_r8.closing_reason)("ngIfElse", closingReason_r9);
  }
}
function ChannelsListComponent_ng_template_4_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const channel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", channel_r8.fee_rate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("ppm (", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 2, channel_r8.fee_rate / 10000), "%)");
  }
}
function ChannelsListComponent_ng_template_4_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-timestamp", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("unixTime", channel_r8.closing_date);
  }
}
function ChannelsListComponent_ng_template_4_app_amount_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-amount", 56);
  }
  if (rf & 2) {
    const channel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", channel_r8.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function ChannelsListComponent_ng_template_4_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 1, channel_r8.capacity, 1), " ");
  }
}
function ChannelsListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-truncate", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 47)(3, "app-truncate", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-clipboard", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 40)(7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ChannelsListComponent_ng_template_4_ng_container_8_Template, 1, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ChannelsListComponent_ng_template_4_app_amount_10_Template, 1, 3, "app-amount", 50)(11, ChannelsListComponent_ng_template_4_ng_template_11_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ChannelsListComponent_ng_template_4_span_14_Template, 2, 0, "span", 52)(15, ChannelsListComponent_ng_template_4_span_15_Template, 2, 0, "span", 53)(16, ChannelsListComponent_ng_template_4_ng_template_16_Template, 3, 2, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ChannelsListComponent_ng_template_4_td_17_Template, 5, 4, "td", 42)(18, ChannelsListComponent_ng_template_4_td_18_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ChannelsListComponent_ng_template_4_app_amount_20_Template, 1, 3, "app-amount", 50)(21, ChannelsListComponent_ng_template_4_ng_template_21_Template, 4, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td", 44)(24, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const channel_r8 = ctx.$implicit;
    const node_r7 = ctx.node;
    const smallnode_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);
    const smallchannel_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](22);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const xChannels_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", node_r7.alias || "?")("maxWidth", 200)("lastChars", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", node_r7.public_key)("maxWidth", 200)("lastChars", 6)("link", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](25, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 21, "/lightning/node"), node_r7.public_key));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", node_r7.public_key);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", xChannels_r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](28, _c2, node_r7.channels));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", node_r7.capacity > 100000000)("ngIfElse", smallnode_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", channel_r8.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", channel_r8.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", channel_r8.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.status !== "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.status === "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", channel_r8.capacity > 100000000)("ngIfElse", smallchannel_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](30, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 23, "/lightning/channel"), channel_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](channel_r8.short_id);
  }
}
function ChannelsListComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function ChannelsListComponent_ng_template_6_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ChannelsListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChannelsListComponent_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ChannelsListComponent_ng_template_6_tr_3_Template, 13, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const tableHeader_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", tableHeader_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](2, _c3));
  }
}
function ChannelsListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](0, 21);
  }
  if (rf & 2) {
    const i_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nExp"](i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nApply"](0);
  }
}
let ChannelsListComponent = /*#__PURE__*/(() => {
  class ChannelsListComponent {
    constructor(lightningApiService, formBuilder) {
      this.lightningApiService = lightningApiService;
      this.formBuilder = formBuilder;
      this.channelsStatusChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
      this.loadingEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(false);
      // @ts-ignore
      this.paginationSize = 'md';
      this.paginationMaxSize = 10;
      this.itemsPerPage = 10;
      this.page = 1;
      this.channelsPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(1);
      this.defaultStatus = 'open';
      this.status = 'open';
      this.publicKeySize = 25;
      this.isLoading = false;
      this.channelStatusForm = this.formBuilder.group({
        status: [this.defaultStatus]
      });
      if ((0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
        this.publicKeySize = 12;
      }
    }
    ngOnInit() {
      if (document.body.clientWidth < 670) {
        this.paginationSize = 'sm';
        this.paginationMaxSize = 3;
      }
    }
    ngOnChanges() {
      this.channelStatusForm.get('status').setValue(this.defaultStatus, {
        emitEvent: true
      });
      this.channelsPage$.next(1);
      this.channels$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.channelsPage$, this.channelStatusForm.get('status').valueChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(val => {
        this.isLoading = true;
        this.loadingEvent.emit(true);
        if (typeof val === 'string') {
          this.status = val;
          this.page = 1;
        } else if (typeof val === 'number') {
          this.page = val;
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => {
        this.channelsStatusChangedEvent.emit(this.status);
        return this.lightningApiService.getChannelsByNodeId$(this.publicKey, (this.page - 1) * this.itemsPerPage, this.status);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
        this.isLoading = false;
        this.loadingEvent.emit(false);
        return {
          channels: response.body,
          totalItems: parseInt(response.headers.get('x-total-count'), 10)
        };
      }));
    }
    pageChange(page) {
      this.channelsPage$.next(page);
    }
    static #_ = this.ɵfac = function ChannelsListComponent_Factory(t) {
      return new (t || ChannelsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_1__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormBuilder));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ChannelsListComponent,
      selectors: [["app-channels-list"]],
      inputs: {
        publicKey: "publicKey"
      },
      outputs: {
        channelsStatusChangedEvent: "channelsStatusChangedEvent",
        loadingEvent: "loadingEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
      decls: 10,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc open
           */
          const MSG_EXTERNAL_7593555694782789615$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_0 = goog.getMsg("Open");
          i18n_0 = MSG_EXTERNAL_7593555694782789615$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "Otwarty";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc closed
           */
          const MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_1 = goog.getMsg("Closed");
          i18n_1 = MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "Zamkni\u0119ty";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.empty-channels-list
           */
          const MSG_EXTERNAL_1907185332227280527$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_2 = goog.getMsg("No channels to display");
          i18n_2 = MSG_EXTERNAL_1907185332227280527$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_2;
        } else {
          i18n_2 = "Brak kana\u0142\xF3w do wy\u015Bwietlenia";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_3 = goog.getMsg("Alias");
          i18n_3 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_3;
        } else {
          i18n_3 = "Alias";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction Status
           * @meaning transaction.status
           */
          const MSG_EXTERNAL_3952626993965091011$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_4 = goog.getMsg("Status");
          i18n_4 = MSG_EXTERNAL_3952626993965091011$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_4;
        } else {
          i18n_4 = "Status";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_5 = goog.getMsg("Capacity");
          i18n_5 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_5;
        } else {
          i18n_5 = "Pojemno\u015B\u0107";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc channels.id
           */
          const MSG_EXTERNAL_4680877724920952974$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_6 = goog.getMsg("Channel ID");
          i18n_6 = MSG_EXTERNAL_4680877724920952974$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_6;
        } else {
          i18n_6 = "ID kana\u0142u";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction fee rate
           * @meaning transaction.fee-rate
           */
          const MSG_EXTERNAL_8610476630152321637$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_7 = goog.getMsg("Fee rate");
          i18n_7 = MSG_EXTERNAL_8610476630152321637$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_7;
        } else {
          i18n_7 = "Poziom op\u0142at";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc channels.closing_date
           */
          const MSG_EXTERNAL_4494424754501469379$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_8 = goog.getMsg("Closing date");
          i18n_8 = MSG_EXTERNAL_4494424754501469379$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_8;
        } else {
          i18n_8 = "Data zamkni\u0119cia";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_9 = goog.getMsg("sats");
          i18n_9 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_9;
        } else {
          i18n_9 = "sats";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.inactive
           */
          const MSG_EXTERNAL_1859131936150262113$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_10 = goog.getMsg("Inactive");
          i18n_10 = MSG_EXTERNAL_1859131936150262113$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_10;
        } else {
          i18n_10 = "Nieaktywny";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.active
           */
          const MSG_EXTERNAL_8204176479746810612$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_11 = goog.getMsg("Active");
          i18n_11 = MSG_EXTERNAL_8204176479746810612$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_11;
        } else {
          i18n_11 = "Aktywny";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc status.closed
           */
          const MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_12 = goog.getMsg("Closed");
          i18n_12 = MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_12;
        } else {
          i18n_12 = "Zamkni\u0119ty";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_13 = goog.getMsg("sats");
          i18n_13 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_13;
        } else {
          i18n_13 = "sats";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.x-channels
           */
          const MSG_EXTERNAL_4973385904963492768$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_14 = goog.getMsg("{$interpolation} channels", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i }}"
            }
          });
          i18n_14 = MSG_EXTERNAL_4973385904963492768$$SRC_APP_LIGHTNING_CHANNELS_LIST_CHANNELS_LIST_COMPONENT_TS_14;
        } else {
          i18n_14 = "" + "\uFFFD0\uFFFD" + " kana\u0142\xF3w";
        }
        return [["tableHeader", ""], ["tableTemplate", ""], ["skeleton", ""], ["xChannels", ""], ["smallnode", ""], ["smallchannel", ""], ["closingReason", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, ["style", "position: relative;", 4, "ngIf", "ngIfElse"], [2, "position", "relative"], [1, "formRadioGroup", 3, "formGroup"], ["name", "radioBasic", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-primary", "btn-sm"], ["type", "radio", "fragment", "open", "formControlName", "status", 3, "value"], ["type", "radio", "fragment", "closed", "formControlName", "status", 3, "value"], ["class", "table table-borderless", 3, "style", 4, "ngIf"], ["class", "pagination-container float-right", 3, "size", "collectionSize", "rotate", "pageSize", "page", "maxSize", "boundaryLinks", "ellipses", "pageChange", 4, "ngIf"], ["class", "table table-borderless", 4, "ngIf"], [1, "clearfix"], [1, "table", "table-borderless"], [4, "ngTemplateOutlet"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-container", "float-right", 3, "pageChange", "size", "collectionSize", "rotate", "pageSize", "page", "maxSize", "boundaryLinks", "ellipses"], [1, "d-flex", "justify-content-center"], [1, "alias", "text-left"], [1, "nodedetails", "text-left"], [1, "status", "text-left"], ["class", "feerate text-left", 4, "ngIf"], [1, "liquidity", "text-right"], [1, "channelid", "text-right"], [1, "feerate", "text-left"], [3, "text", "maxWidth", "lastChars"], [1, "second-line"], [3, "text", "maxWidth", "lastChars", "link"], ["size", "small", 3, "text"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [1, "status"], ["class", "badge rounded-pill badge-secondary", 4, "ngIf"], ["class", "badge rounded-pill badge-success", 4, "ngIf"], [3, "ngIf"], [3, "routerLink"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "sats"], [1, "badge", "rounded-pill", "badge-secondary"], [1, "badge", "rounded-pill", "badge-success"], ["class", "badge rounded-pill badge-secondary", 4, "ngIf", "ngIfElse"], [3, "type"], [1, "symbol"], [3, "unixTime"], [1, "alias", "text-left", 2, "width", "370px"], [1, "skeleton-loader"], [1, "channelid", "text-left"]];
      },
      template: function ChannelsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ChannelsListComponent_div_0_Template, 16, 10, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ChannelsListComponent_ng_template_2_Template, 13, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(4, ChannelsListComponent_ng_template_4_Template, 27, 33, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(6, ChannelsListComponent_ng_template_6_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(8, ChannelsListComponent_ng_template_8_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const skeleton_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx.channels$))("ngIfElse", skeleton_r14);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbPagination, _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_2__.ClipboardComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__.AmountComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_4__.TruncateComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__.TimestampComponent, _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_6__.ClosingTypeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__.RelativeUrlPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__.AmountShortenerPipe],
      styles: [".second-line[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.sats[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n  top: 0px;\n}\n\n@media (min-width: 435px) {\n  .formRadioGroup[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: -46px;\n  }\n}\n@media (max-width: 435px) {\n  .formRadioGroup[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n.rtl-layout[_nghost-%COMP%]   .formRadioGroup[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .formRadioGroup[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n@media (min-width: 435px) {\n  .rtl-layout[_nghost-%COMP%]   .formRadioGroup[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .formRadioGroup[_ngcontent-%COMP%] {\n    right: unset;\n    left: 0;\n  }\n}\n\n@media (max-width: 435px) {\n  .btn-group[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n}\n\n.alias[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n@media (max-width: 815px) {\n  .feerate[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 710px) {\n  .status[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 600px) {\n  .nodedetails[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 500px) {\n  .liquidity[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.channelid[_ngcontent-%COMP%] {\n  padding-right: 0;\n}"],
      changeDetection: 0
    });
  }
  return ChannelsListComponent;
})();

/***/ }),

/***/ 25808:
/*!********************************************************************************!*\
  !*** ./src/app/lightning/channels-statistics/channels-statistics.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelsStatisticsComponent: () => (/* binding */ ChannelsStatisticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_change_change_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/change/change.component */ 29480);





const _c0 = a0 => ({
  "inactive": a0
});
function ChannelsStatisticsComponent_div_9_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-fiat", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", statistics_r2.latest == null ? null : statistics_r2.latest.avg_capacity);
  }
}
function ChannelsStatisticsComponent_div_9_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-change", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("current", statistics_r2.latest == null ? null : statistics_r2.latest.avg_fee_rate)("previous", statistics_r2.previous == null ? null : statistics_r2.previous.avg_fee_rate);
  }
}
function ChannelsStatisticsComponent_div_9_div_1_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-change", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("current", statistics_r2.latest == null ? null : statistics_r2.latest.avg_base_fee_mtokens)("previous", statistics_r2.previous == null ? null : statistics_r2.previous.avg_base_fee_mtokens);
  }
}
function ChannelsStatisticsComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](9, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChannelsStatisticsComponent_div_9_div_1_span_10_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 25)(12, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](13, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 30)(15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](19, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ChannelsStatisticsComponent_div_9_div_1_span_20_Template, 2, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 25)(22, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](23, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 31)(25, "div", 27)(26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](30, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ChannelsStatisticsComponent_div_9_div_1_span_31_Template, 2, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 18, (statistics_r2.latest == null ? null : statistics_r2.latest.avg_capacity) || 0, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", statistics_r2.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 21, (statistics_r2.latest == null ? null : statistics_r2.latest.avg_fee_rate) || 0, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", statistics_r2.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 24, (statistics_r2.latest == null ? null : statistics_r2.latest.avg_base_fee_mtokens) || 0, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", statistics_r2.previous);
  }
}
function ChannelsStatisticsComponent_div_9_div_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-fiat", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", statistics_r2.latest == null ? null : statistics_r2.latest.med_capacity);
  }
}
function ChannelsStatisticsComponent_div_9_div_2_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-change", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("current", statistics_r2.latest == null ? null : statistics_r2.latest.med_fee_rate)("previous", statistics_r2.previous == null ? null : statistics_r2.previous.med_fee_rate);
  }
}
function ChannelsStatisticsComponent_div_9_div_2_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-change", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("current", statistics_r2.latest == null ? null : statistics_r2.latest.med_base_fee_mtokens)("previous", statistics_r2.previous == null ? null : statistics_r2.previous.med_base_fee_mtokens);
  }
}
function ChannelsStatisticsComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChannelsStatisticsComponent_div_9_div_2_span_10_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 25)(12, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](13, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 35)(15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](19, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ChannelsStatisticsComponent_div_9_div_2_span_20_Template, 2, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 25)(22, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](23, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 36)(25, "div", 27)(26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](30, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ChannelsStatisticsComponent_div_9_div_2_span_31_Template, 2, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const statistics_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 18, (statistics_r2.latest == null ? null : statistics_r2.latest.med_capacity) || 0, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", statistics_r2.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 21, (statistics_r2.latest == null ? null : statistics_r2.latest.med_fee_rate) || 0, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", statistics_r2.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](!statistics_r2.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 24, (statistics_r2.latest == null ? null : statistics_r2.latest.med_base_fee_mtokens) || 0, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", statistics_r2.previous);
  }
}
function ChannelsStatisticsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChannelsStatisticsComponent_div_9_div_1_Template, 32, 27, "div", 23)(2, ChannelsStatisticsComponent_div_9_div_2_Template, 32, 27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mode === "avg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mode === "med");
  }
}
function ChannelsStatisticsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "div", 25)(2, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 38)(6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 25)(8, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](9, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 38)(12, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 25)(14, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](15, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 38)(18, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
let ChannelsStatisticsComponent = /*#__PURE__*/(() => {
  class ChannelsStatisticsComponent {
    constructor() {
      this.mode = 'avg';
    }
    ngOnInit() {}
    switchMode(mode) {
      this.mode = mode;
      return false;
    }
    static #_ = this.ɵfac = function ChannelsStatisticsComponent_Factory(t) {
      return new (t || ChannelsStatisticsComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChannelsStatisticsComponent,
      selectors: [["app-channels-statistics"]],
      inputs: {
        statistics$: "statistics$"
      },
      decls: 13,
      vars: 10,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc statistics.average-small
           */
          const MSG_EXTERNAL_8092916518865734192$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_0 = goog.getMsg("avg");
          i18n_0 = MSG_EXTERNAL_8092916518865734192$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u015Brednia";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc statistics.median-small
           */
          const MSG_EXTERNAL_8341911665393829104$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_1 = goog.getMsg("med");
          i18n_1 = MSG_EXTERNAL_8341911665393829104$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_1;
        } else {
          i18n_1 = "mediana";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-feerate-desc
           */
          const MSG_EXTERNAL_5325336734240189090$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_2 = goog.getMsg("The average fee rate charged by routing nodes, ignoring fee rates > 0.5% or 5000ppm");
          i18n_2 = MSG_EXTERNAL_5325336734240189090$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u015Aredni poziom op\u0142at pobieranych przez w\u0119z\u0142y routuj\u0105ce, z wy\u0142\u0105czeniem op\u0142at > 0.5% lub 5000ppm";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-basefee-desc
           */
          const MSG_EXTERNAL_1082106035508105899$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_3 = goog.getMsg("The average base fee charged by routing nodes, ignoring base fees > 5000ppm");
          i18n_3 = MSG_EXTERNAL_1082106035508105899$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_3;
        } else {
          i18n_3 = "\u015Aredni poziom op\u0142aty bazowej pobieranej przez w\u0119z\u0142y routuj\u0105ce, z wy\u0142\u0105czeniem op\u0142at > 5000ppm";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-capacity
           */
          const MSG_EXTERNAL_8132520850003093900$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_4 = goog.getMsg("Avg Capacity");
          i18n_4 = MSG_EXTERNAL_8132520850003093900$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_4;
        } else {
          i18n_4 = "\u015Ar. pojemno\u015B\u0107";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_5 = goog.getMsg("sats");
          i18n_5 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_5;
        } else {
          i18n_5 = "sats";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-feerate
           */
          const MSG_EXTERNAL_7540362405929098857$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_6 = goog.getMsg("Avg Fee Rate");
          i18n_6 = MSG_EXTERNAL_7540362405929098857$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_6;
        } else {
          i18n_6 = "\u015Ar. poziom op\u0142at";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.ppm
           */
          const MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_7 = goog.getMsg("ppm");
          i18n_7 = MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_7;
        } else {
          i18n_7 = "ppm";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-basefee
           */
          const MSG_EXTERNAL_519039155324377650$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_8 = goog.getMsg("Avg Base Fee");
          i18n_8 = MSG_EXTERNAL_519039155324377650$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_8;
        } else {
          i18n_8 = "\u015Ar. op\u0142ata bazowa";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.m-sats
           */
          const MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_9 = goog.getMsg("mSats");
          i18n_9 = MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_9;
        } else {
          i18n_9 = "mSats";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.median-feerate-desc
           */
          const MSG_EXTERNAL_4706298392475388959$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_10 = goog.getMsg("The median fee rate charged by routing nodes, ignoring fee rates > 0.5% or 5000ppm");
          i18n_10 = MSG_EXTERNAL_4706298392475388959$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_10;
        } else {
          i18n_10 = "Mediana poziomu op\u0142at pobieranych przez w\u0119z\u0142y routuj\u0105ce, z wy\u0142\u0105czeniem op\u0142at > 0.5% lub 5000ppm";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.median-basefee-desc
           */
          const MSG_EXTERNAL_339039760323250235$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_11 = goog.getMsg("The median base fee charged by routing nodes, ignoring base fees > 5000ppm");
          i18n_11 = MSG_EXTERNAL_339039760323250235$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_11;
        } else {
          i18n_11 = "Mediana op\u0142aty bazowej pobieranej przez w\u0119z\u0142y routuj\u0105ce, z wy\u0142\u0105czniem op\u0142at > 5000ppm";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.median-capacity
           */
          const MSG_EXTERNAL_3245783259066214030$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_12 = goog.getMsg("Med Capacity");
          i18n_12 = MSG_EXTERNAL_3245783259066214030$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_12;
        } else {
          i18n_12 = "Mediana pojemno\u015Bci";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_13 = goog.getMsg("sats");
          i18n_13 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_13;
        } else {
          i18n_13 = "sats";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-feerate
           */
          const MSG_EXTERNAL_4916388817133903191$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_14 = goog.getMsg("Med Fee Rate");
          i18n_14 = MSG_EXTERNAL_4916388817133903191$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_14;
        } else {
          i18n_14 = "Mediana poziomu op\u0142at";
        }
        let i18n_15;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.ppm
           */
          const MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_15 = goog.getMsg("ppm");
          i18n_15 = MSG_EXTERNAL_9170018471911053274$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_15;
        } else {
          i18n_15 = "ppm";
        }
        let i18n_16;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.median-basefee
           */
          const MSG_EXTERNAL_3294099939634385499$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_16 = goog.getMsg("Med Base Fee");
          i18n_16 = MSG_EXTERNAL_3294099939634385499$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_16;
        } else {
          i18n_16 = "Mediana op\u0142aty bazowej";
        }
        let i18n_17;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.m-sats
           */
          const MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_17 = goog.getMsg("mSats");
          i18n_17 = MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_17;
        } else {
          i18n_17 = "mSats";
        }
        let i18n_18;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-capacity
           */
          const MSG_EXTERNAL_8132520850003093900$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_18 = goog.getMsg("Avg Capacity");
          i18n_18 = MSG_EXTERNAL_8132520850003093900$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_18;
        } else {
          i18n_18 = "\u015Ar. pojemno\u015B\u0107";
        }
        let i18n_19;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-feerate
           */
          const MSG_EXTERNAL_7540362405929098857$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_19 = goog.getMsg("Avg Fee Rate");
          i18n_19 = MSG_EXTERNAL_7540362405929098857$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_19;
        } else {
          i18n_19 = "\u015Ar. poziom op\u0142at";
        }
        let i18n_20;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc ln.average-basefee
           */
          const MSG_EXTERNAL_519039155324377650$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_20 = goog.getMsg("Avg Base Fee");
          i18n_20 = MSG_EXTERNAL_519039155324377650$$SRC_APP_LIGHTNING_CHANNELS_STATISTICS_CHANNELS_STATISTICS_COMPONENT_TS_20;
        } else {
          i18n_20 = "\u015Ar. op\u0142ata bazowa";
        }
        return [["loadingReward", ""], i18n_0, i18n_1, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_17, i18n_18, i18n_19, i18n_20, [1, "widget-toggler"], ["href", "", 1, "toggler-option", 3, "click", "ngClass"], [2, "color", "var(--transparent-fg)", "font-size", "8px"], ["class", "fee-estimation-wrapper", 4, "ngIf", "ngIfElse"], [1, "fee-estimation-wrapper"], ["class", "fee-estimation-container", 4, "ngIf"], [1, "fee-estimation-container"], [1, "item"], [1, "card-title"], [1, "card-text"], [1, "fee-text"], ["class", "fiat", 4, "ngIf"], ["ngbTooltip", i18n_2, "placement", "bottom", 1, "card-text"], ["ngbTooltip", i18n_3, "placement", "bottom", 1, "card-text"], [1, "fiat"], ["digitsInfo", "1.0-0", 3, "value"], [3, "current", "previous"], ["ngbTooltip", i18n_10, "placement", "bottom", 1, "card-text"], ["ngbTooltip", i18n_11, "placement", "bottom", 1, "card-text"], [1, "fee-estimation-container", "loading-container"], [1, "skeleton-loader"]];
      },
      template: function ChannelsStatisticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChannelsStatisticsComponent_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.switchMode("avg"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " | ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChannelsStatisticsComponent_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.switchMode("med"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ChannelsStatisticsComponent_div_9_Template, 3, 2, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ChannelsStatisticsComponent_ng_template_11_Template, 19, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const loadingReward_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.mode === "avg"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.mode === "med"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 4, ctx.statistics$))("ngIfElse", loadingReward_r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_0__.FiatComponent, _components_change_change_component__WEBPACK_IMPORTED_MODULE_1__.ChangeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
      styles: [".card-title[_ngcontent-%COMP%] {\n  color: var(--title-fg);\n  font-size: 10px;\n  margin-bottom: 4px;\n  font-size: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  position: relative;\n  top: -2px;\n  display: inline-flex;\n}\n.card-text[_ngcontent-%COMP%]   .green-color[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fee-estimation-wrapper[_ngcontent-%COMP%] {\n  min-height: 77px;\n}\n\n.fee-estimation-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media (min-width: 376px) {\n  .fee-estimation-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  max-width: 150px;\n  margin: 0;\n  width: -webkit-fill-available;\n}\n@media (min-width: 376px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    margin: 0 auto 0px;\n  }\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item.more-padding[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n  display: none;\n}\n@media (min-width: 485px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n    display: block;\n  }\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n  top: 0px;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .fee-text[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1098039216);\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  line-height: 1.45;\n  padding: 0px 2px;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .fee-text.no-border[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .fiat[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px !important;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  min-height: 76px;\n}\n\n.card-text[_ngcontent-%COMP%]   .skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.card-text[_ngcontent-%COMP%]   .skeleton-loader[_ngcontent-%COMP%]:first-child {\n  max-width: 90px;\n  margin: 15px auto 3px;\n}\n.card-text[_ngcontent-%COMP%]   .skeleton-loader[_ngcontent-%COMP%]:last-child {\n  margin: 10px auto 3px;\n  max-width: 55px;\n}\n\n.widget-toggler[_ngcontent-%COMP%] {\n  font-size: 12px;\n  position: absolute;\n  top: -20px;\n  right: 3px;\n  text-align: right;\n}\n\n.toggler-option[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n}"],
      changeDetection: 0
    });
  }
  return ChannelsStatisticsComponent;
})();

/***/ }),

/***/ 35905:
/*!************************************************************!*\
  !*** ./src/app/lightning/group/group-preview.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupPreviewComponent: () => (/* binding */ GroupPreviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/opengraph.service */ 26857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/svg-images/svg-images.component */ 43606);
/* harmony import */ var _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/sats/sats.component */ 85852);
/* harmony import */ var _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/master-page-preview/preview-title.component */ 20570);
/* harmony import */ var _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/nodes-map/nodes-map.component */ 48296);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);













function GroupPreviewComponent_div_0_app_amount_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-amount", 26);
  }
  if (rf & 2) {
    const nodes_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", nodes_r2.sumLiquidity)("digitsInfo", "1.2-2")("noFiat", false);
  }
}
function GroupPreviewComponent_div_0_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nodes_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 1, nodes_r2.sumLiquidity, 1), " ");
  }
}
function GroupPreviewComponent_div_0_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-sats", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const nodes_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", nodes_r2.sumLiquidity / nodes_r2.sumChannels);
  }
}
function GroupPreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8)(1, "app-preview-title")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 9)(5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-svg-images", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 12)(8, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 14)(11, "div", 15)(12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 17)(15, "div", 18)(16, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](22, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](27, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, GroupPreviewComponent_div_0_app_amount_29_Template, 1, 3, "app-amount", 21)(30, GroupPreviewComponent_div_0_ng_template_30_Template, 4, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "tr")(35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](36, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, GroupPreviewComponent_div_0_tr_39_Template, 5, 1, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 24)(41, "app-nodes-map", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("readyEvent", function GroupPreviewComponent_div_0_Template_app_nodes_map_readyEvent_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onMapReady());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const nodes_r2 = ctx.ngIf;
    const smallnode_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.group.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.group.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](nodes_r2.nodes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", nodes_r2.sumLiquidity > 100000000)("ngIfElse", smallnode_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](nodes_r2.sumChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", nodes_r2.sumChannels > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("widget", true)("nodes", nodes_r2.nodes)("fitContainer", true);
  }
}
let GroupPreviewComponent = /*#__PURE__*/(() => {
  class GroupPreviewComponent {
    constructor(lightningApiService, activatedRoute, seoService, openGraphService) {
      this.lightningApiService = lightningApiService;
      this.activatedRoute = activatedRoute;
      this.seoService = seoService;
      this.openGraphService = openGraphService;
      this.group = {
        name: '',
        description: ''
      };
    }
    ngOnInit() {
      this.seoService.setTitle(`Mempool.Space Lightning Nodes`);
      this.seoService.setDescription(`See all Lightning nodes run by mempool.space -- these are the nodes that provide the data on the mempool.space Lightning dashboard.`);
      this.nodes$ = this.activatedRoute.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(params => {
        this.slug = params.get('slug');
        this.ogSession = this.openGraphService.waitFor('ln-group-map-' + this.slug);
        this.ogSession = this.openGraphService.waitFor('ln-group-data-' + this.slug);
        if (this.slug === 'the-mempool-open-source-project') {
          this.groupId = 'mempool.space';
          this.group = {
            name: 'The Mempool Open Source Project',
            description: 'These are the Lightning nodes operated by The Mempool Open Source Project that provide data for the mempool.space website. Connect to us!'
          };
        } else {
          this.group = {
            name: this.slug.replace(/-/gi, ' '),
            description: ''
          };
          this.seoService.logSoft404();
          this.openGraphService.fail({
            event: 'ln-group-map-' + this.slug,
            sessionId: this.ogSession
          });
          this.openGraphService.fail({
            event: 'ln-group-data-' + this.slug,
            sessionId: this.ogSession
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
        }
        return this.lightningApiService.getNodeGroup$(this.groupId);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(nodes => {
        for (const node of nodes) {
          const socketsObject = [];
          for (const socket of node.sockets.split(',')) {
            if (socket === '') {
              continue;
            }
            let label = '';
            if (socket.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)) {
              label = 'IPv4';
            } else if (socket.indexOf('[') > -1) {
              label = 'IPv6';
            } else if (socket.indexOf('onion') > -1) {
              label = 'Tor';
            }
            socketsObject.push({
              label: label,
              socket: node.public_key + '@' + socket
            });
          }
          // @ts-ignore
          node.socketsObject = socketsObject;
          if (!node?.country && !node?.city && !node?.subdivision) {
            // @ts-ignore
            node.geolocation = null;
          } else {
            // @ts-ignore
            node.geolocation = {
              country: node.country?.en,
              city: node.city?.en,
              subdivision: node.subdivision?.en,
              iso: node.iso_code
            };
          }
        }
        const sumLiquidity = nodes.reduce((partialSum, a) => partialSum + parseInt(a.capacity, 10), 0);
        const sumChannels = nodes.reduce((partialSum, a) => partialSum + a.opened_channel_count, 0);
        this.openGraphService.waitOver({
          event: 'ln-group-data-' + this.slug,
          sessionId: this.ogSession
        });
        return {
          nodes: nodes,
          sumLiquidity: sumLiquidity,
          sumChannels: sumChannels
        };
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
        this.seoService.logSoft404();
        this.openGraphService.fail({
          event: 'ln-group-map-' + this.slug,
          sessionId: this.ogSession
        });
        this.openGraphService.fail({
          event: 'ln-group-data-' + this.slug,
          sessionId: this.ogSession
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          nodes: [],
          sumLiquidity: 0,
          sumChannels: 0
        });
      }));
    }
    onMapReady() {
      this.openGraphService.waitOver({
        event: 'ln-group-map-' + this.slug,
        sessionId: this.ogSession
      });
    }
    static #_ = this.ɵfac = function GroupPreviewComponent_Factory(t) {
      return new (t || GroupPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__.OpenGraphService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: GroupPreviewComponent,
      selectors: [["app-group-preview"]],
      decls: 2,
      vars: 3,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-group
           */
          const MSG_EXTERNAL_570306833186579406$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_0 = goog.getMsg("Lightning node group");
          i18n_0 = MSG_EXTERNAL_570306833186579406$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_0;
        } else {
          i18n_0 = "Grupa w\u0119z\u0142\xF3w Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_1 = goog.getMsg("Nodes");
          i18n_1 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_1;
        } else {
          i18n_1 = "W\u0119zly";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity
           */
          const MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_2 = goog.getMsg("Liquidity");
          i18n_2 = MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_2;
        } else {
          i18n_2 = "P\u0142ynno\u015B\u0107";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_3 = goog.getMsg("Channels");
          i18n_3 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_3;
        } else {
          i18n_3 = "Kana\u0142y";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_4 = goog.getMsg("sats");
          i18n_4 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_4;
        } else {
          i18n_4 = "sats";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-channels-avg
           */
          const MSG_EXTERNAL_3402158431296516222$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_5 = goog.getMsg("Average size");
          i18n_5 = MSG_EXTERNAL_3402158431296516222$$SRC_APP_LIGHTNING_GROUP_GROUP_PREVIEW_COMPONENT_TS_5;
        } else {
          i18n_5 = "\u015Aredni rozmiar";
        }
        return [["smallnode", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, ["class", "box preview-box", 4, "ngIf"], [1, "box", "preview-box"], [1, "row", "d-flex", "justify-content-between", "full-width-row"], [1, "logo-wrapper"], ["name", "officialMempoolSpace", "viewBox", "0 0 125 126"], [1, "title-wrapper"], [1, "title"], [1, "row", "full-width-row"], [1, "description-wrapper"], [1, "description-text"], [1, "row"], [1, "col-md"], [1, "table", "table-borderless", "table-striped", "table-fixed"], ["span", "1", "width", "250px"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [1, "d-none", "d-md-inline-block"], [4, "ngIf"], [1, "col-md", "map-col"], ["type", "isp", 3, "readyEvent", "widget", "nodes", "fitContainer"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "sats"], [3, "satoshis"]];
      },
      template: function GroupPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, GroupPreviewComponent_div_0_Template, 42, 10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.nodes$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_3__.AmountComponent, _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_4__.SvgImagesComponent, _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_5__.SatsComponent, _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_6__.PreviewTitleComponent, _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__.NodesMap, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__.AmountShortenerPipe],
      styles: [".table[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-top: 0px;\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 62px;\n  height: 62px;\n  margin-right: 1em;\n}\n.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.description-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px 0 0;\n  padding: 20px 12px;\n  background: var(--stat-box-bg);\n  font-size: 32px;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  width: 100%;\n  line-height: 36px;\n  height: 72px;\n  max-height: 72px;\n  min-height: 72px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: ellipsis;\n}\n\n.map-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 470px;\n  height: 272px;\n  min-width: 470px;\n  min-height: 272px;\n  max-height: 272px;\n  padding: 0;\n  background: var(--stat-box-bg);\n  overflow: hidden;\n  margin-top: 16px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.full-width-row[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  flex-wrap: nowrap;\n}\n\n  .symbol {\n  font-size: 24px;\n}"]
    });
  }
  return GroupPreviewComponent;
})();

/***/ }),

/***/ 52184:
/*!****************************************************!*\
  !*** ./src/app/lightning/group/group.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupComponent: () => (/* binding */ GroupComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 13054);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/clipboard/clipboard.component */ 97338);
/* harmony import */ var _components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/qrcode/qrcode.component */ 97824);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/svg-images/svg-images.component */ 43606);
/* harmony import */ var _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/components/geolocation/geolocation.component */ 23456);
/* harmony import */ var _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/lightning/nodes-map/nodes-map.component */ 48296);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);

















const _c0 = (a0, a1) => [a0, a1];
const _c1 = () => ["fas", "qrcode"];
function GroupComponent_div_9_app_amount_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-amount", 42);
  }
  if (rf & 2) {
    const nodes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", nodes_r1.sumLiquidity)("digitsInfo", "1.2-2")("noFiat", false);
  }
}
function GroupComponent_div_9_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nodes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](1, 1, nodes_r1.sumLiquidity, 1), " ");
  }
}
function GroupComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "table", 33)(3, "tbody")(4, "tr")(5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td")(8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "These are the Lightning nodes operated by The Mempool Open Source Project that provide data for the mempool.space website. Connect to us! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "tr")(11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](12, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "tr")(16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](17, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, GroupComponent_div_9_app_amount_19_Template, 1, 3, "app-amount", 35)(20, GroupComponent_div_9_ng_template_20_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "span", 37)(25, "app-fiat", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "tr")(27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](28, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 39)(32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "app-nodes-map", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const nodes_r1 = ctx.ngIf;
    const smallnode_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](nodes_r1.nodes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", nodes_r1.sumLiquidity > 100000000)("ngIfElse", smallnode_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", nodes_r1.sumLiquidity);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](nodes_r1.sumChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("widget", true)("nodes", nodes_r1.nodes);
  }
}
function GroupComponent_tbody_30_tr_1_app_amount_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-amount", 42);
  }
  if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", node_r3.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function GroupComponent_tbody_30_tr_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](3, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](1, 1, node_r3.capacity, 1), " ");
  }
}
function GroupComponent_tbody_30_tr_1_div_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](node_r3.socketsObject[ctx_r4.selectedSocketIndex].label);
  }
}
function GroupComponent_tbody_30_tr_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, GroupComponent_tbody_30_tr_1_div_12_ng_template_1_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mouseover", function GroupComponent_tbody_30_tr_1_div_12_Template_button_mouseover_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.qrCodeVisible[i_r6] = 1);
    })("mouseout", function GroupComponent_tbody_30_tr_1_div_12_Template_button_mouseout_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.qrCodeVisible[i_r6] = 0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "fa-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "app-qrcode", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "app-clipboard", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const node_r3 = ctx_r6.$implicit;
    const i_r6 = ctx_r6.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", node_r3.socketsObject[ctx_r4.selectedSocketIndex].socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c1))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", !ctx_r4.qrCodeVisible[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 200)("data", node_r3.socketsObject[ctx_r4.selectedSocketIndex].socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("button", true)("text", node_r3.socketsObject[ctx_r4.selectedSocketIndex].socket)("leftPadding", false);
  }
}
function GroupComponent_tbody_30_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 27)(2, "div", 45)(3, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, GroupComponent_tbody_30_tr_1_app_amount_8_Template, 1, 3, "app-amount", 35)(9, GroupComponent_tbody_30_tr_1_ng_template_9_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, GroupComponent_tbody_30_tr_1_div_12_Template, 9, 10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "app-geolocation", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const smallnode_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 8, "/lightning/node/"), node_r3.public_key));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](node_r3.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", node_r3.opened_channel_count, " channel(s), ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", node_r3.capacity > 100000000)("ngIfElse", smallnode_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", node_r3.socketsObject.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data", node_r3.geolocation)("type", "list-isp");
  }
}
function GroupComponent_tbody_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, GroupComponent_tbody_30_tr_1_Template, 15, 13, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const response_r9 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", response_r9.nodes)("ngForTrackBy", ctx_r4.trackByPublicKey);
  }
}
function GroupComponent_ng_template_32_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function GroupComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, GroupComponent_ng_template_32_tr_1_Template, 7, 0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.skeletonLines);
  }
}
let GroupComponent = /*#__PURE__*/(() => {
  class GroupComponent {
    constructor(lightningApiService, seoService, formBuilder) {
      this.lightningApiService = lightningApiService;
      this.seoService = seoService;
      this.formBuilder = formBuilder;
      this.skeletonLines = [];
      this.selectedSocketIndex = 0;
      this.qrCodeVisible = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 20; ++i) {
        this.skeletonLines.push(i);
      }
    }
    ngOnInit() {
      this.socketToggleForm = this.formBuilder.group({
        socket: [this.selectedSocketIndex]
      });
      this.socketToggleForm.get('socket').valueChanges.subscribe(val => {
        this.selectedSocketIndex = val;
      });
      this.seoService.setTitle(`Mempool.space Lightning Nodes`);
      this.seoService.setDescription(`See all Lightning nodes run by mempool.space -- these are the nodes that provide the data on the mempool.space Lightning dashboard.`);
      this.nodes$ = this.lightningApiService.getNodeGroup$('mempool.space').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(nodes => {
        for (const node of nodes) {
          const socketsObject = [];
          for (const socket of node.sockets.split(',')) {
            if (socket === '') {
              continue;
            }
            let label = '';
            if (socket.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)) {
              label = 'IPv4';
            } else if (socket.indexOf('[') > -1) {
              label = 'IPv6';
            } else if (socket.indexOf('onion') > -1) {
              label = 'Tor';
            }
            socketsObject.push({
              label: label,
              socket: node.public_key + '@' + socket
            });
          }
          // @ts-ignore
          node.socketsObject = socketsObject;
          if (!node?.country && !node?.city && !node?.subdivision) {
            // @ts-ignore
            node.geolocation = null;
          } else {
            // @ts-ignore
            node.geolocation = {
              country: node.country?.en,
              city: node.city?.en,
              subdivision: node.subdivision?.en,
              iso: node.iso_code
            };
          }
        }
        nodes.map(node => {
          node.channels = node.opened_channel_count;
          return node;
        });
        const sumLiquidity = nodes.reduce((partialSum, a) => partialSum + parseInt(a.capacity, 10), 0);
        const sumChannels = nodes.reduce((partialSum, a) => partialSum + a.opened_channel_count, 0);
        return {
          nodes: nodes,
          sumLiquidity: sumLiquidity,
          sumChannels: sumChannels
        };
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.share)());
    }
    trackByPublicKey(index, node) {
      return node.public_key;
    }
    changeSocket(index) {
      this.selectedSocketIndex = index;
    }
    static #_ = this.ɵfac = function GroupComponent_Factory(t) {
      return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormBuilder));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: GroupComponent,
      selectors: [["app-group"]],
      decls: 34,
      vars: 14,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-group
           */
          const MSG_EXTERNAL_570306833186579406$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_0 = goog.getMsg("Lightning node group");
          i18n_0 = MSG_EXTERNAL_570306833186579406$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_0;
        } else {
          i18n_0 = "Grupa w\u0119z\u0142\xF3w Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_1 = goog.getMsg("Alias");
          i18n_1 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_1;
        } else {
          i18n_1 = "Alias";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Connect
           * @meaning lightning.connect-to-node
           */
          const MSG_EXTERNAL_626665295305038799$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_2 = goog.getMsg("Connect");
          i18n_2 = MSG_EXTERNAL_626665295305038799$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_2;
        } else {
          i18n_2 = "Po\u0142\u0105cz";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_3 = goog.getMsg("Location");
          i18n_3 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_3;
        } else {
          i18n_3 = "Lokalizacja";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @suppress {msgDescriptions}
           */
          const MSG_EXTERNAL_4902817035128594900$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_4 = goog.getMsg("Description");
          i18n_4 = MSG_EXTERNAL_4902817035128594900$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_4;
        } else {
          i18n_4 = "Opis";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_5 = goog.getMsg("Nodes");
          i18n_5 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_5;
        } else {
          i18n_5 = "W\u0119zly";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity
           */
          const MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_6 = goog.getMsg("Liquidity");
          i18n_6 = MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_6;
        } else {
          i18n_6 = "P\u0142ynno\u015B\u0107";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_7 = goog.getMsg("Channels");
          i18n_7 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_7;
        } else {
          i18n_7 = "Kana\u0142y";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_8 = goog.getMsg("sats");
          i18n_8 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_8;
        } else {
          i18n_8 = "sats";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_9 = goog.getMsg("sats");
          i18n_9 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_GROUP_GROUP_COMPONENT_TS_9;
        } else {
          i18n_9 = "sats";
        }
        return [["skeleton", ""], ["smallnode", ""], ["noDropdown", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, [1, "container-xl", "full-height", 2, "min-height", "335px"], [1, "mb-1", 2, "color", "var(--transparent-fg)"], [1, "header"], [1, "logo-container"], ["name", "officialMempoolSpace", "viewBox", "0 0 125 126"], [1, "box"], ["class", "row", 4, "ngIf"], [1, "toggle-holder"], [1, "formRadioGroup", 3, "formGroup"], ["name", "radioBasic", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-primary", "btn-sm"], ["type", "radio", "formControlName", "socket", 3, "value"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [1, "alias", "text-left"], [1, "text-left"], [1, "city", "text-right", "d-none", "d-md-table-cell"], [4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-12", "col-md-6"], [1, "table", "table-borderless", "table-striped"], [1, "description-text"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [1, "d-none", "d-md-inline-block"], [1, "d-block", "d-md-none"], ["digitsInfo", "1.0-0", 3, "value"], [1, "col-12", "col-md-6", "p-3", "p-md-0", "pr-md-3"], [2, "background-color", "var(--stat-box-bg)"], ["type", "isp", 3, "widget", "nodes"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "sats"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-truncate"], [3, "routerLink"], [1, "second-line"], [1, "timestamp-first", "text-left"], ["class", "input-group", 4, "ngIf"], [1, "city", "text-right", "text-truncate", "d-none", "d-md-table-cell"], [3, "data", "type"], [1, "input-group"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control", 3, "value"], ["type", "button", "id", "inputGroupFileAddon04", 1, "btn", "btn-secondary", 3, "mouseover", "mouseout"], [3, "icon", "fixedWidth"], [1, "qr-wrapper", 3, "hidden"], [3, "size", "data"], [3, "button", "text", "leftPadding"], ["id", "basic-addon3", 1, "input-group-text"], [4, "ngFor", "ngForOf"], [1, "alias"], [1, "skeleton-loader"], [1, "timestamp-update", "d-none", "d-md-table-cell"]];
      },
      template: function GroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 13)(1, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 15)(4, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "app-svg-images", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "The Mempool Open Source Project");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, GroupComponent_div_9_Template, 34, 7, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 20)(13, "form", 21)(14, "div", 22)(15, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "IPv4 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "IPv6 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 25)(22, "table", 26)(23, "thead")(24, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](25, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](27, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](29, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, GroupComponent_tbody_30_Template, 2, 2, "tbody", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, GroupComponent_ng_template_32_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const skeleton_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 10, ctx.nodes$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.socketToggleForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.socketToggleForm.get("socket").value === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.socketToggleForm.get("socket").value === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 12, ctx.nodes$))("ngIfElse", skeleton_r10);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_2__.ClipboardComponent, _components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_3__.QrcodeComponent, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_4__.FiatComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_5__.AmountComponent, _components_svg_images_svg_images_component__WEBPACK_IMPORTED_MODULE_6__.SvgImagesComponent, _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_7__.GeolocationComponent, _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_8__.NodesMap, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_9__.RelativeUrlPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_10__.AmountShortenerPipe],
      styles: [".logo-container[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-inline-start: 15px;\n}\n\n.qr-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--fg);\n  padding: 10px;\n  padding-bottom: 5px;\n  display: inline-block;\n  position: absolute;\n  bottom: 50px;\n  left: -175px;\n  z-index: 100;\n}\n\n.dropdownLabel[_ngcontent-%COMP%] {\n  min-width: 50px;\n  display: inline-block;\n}\n\n#inputGroupFileAddon04[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.toggle-holder[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n@media (max-width: 767.98px) {\n  .text-truncate[_ngcontent-%COMP%] {\n    width: 120px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n  }\n}\n.second-line[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  white-space: break-spaces;\n}\n\n.timestamp-first[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-inline-end: 0.25rem;\n}\n\n.rtl-layout[_nghost-%COMP%]   .timestamp-first[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .timestamp-first[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-inline-end: 0.25rem;\n}"]
    });
  }
  return GroupComponent;
})();

/***/ }),

/***/ 13954:
/*!******************************************************************!*\
  !*** ./src/app/lightning/justice-list/justice-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JusticeList: () => (/* binding */ JusticeList)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/electrs-api.service */ 62596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _components_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/transactions-list/transactions-list.component */ 5754);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/channel/closing-type/closing-type.component */ 694);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);













const _c0 = (a0, a1) => [a0, a1];
const _c1 = a0 => [a0];
function JusticeList_tbody_17_ng_container_1_app_amount_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-amount", 33);
  }
  if (rf & 2) {
    const channel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", channel_r2.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function JusticeList_tbody_17_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 1, channel_r2.capacity, 1), " ");
  }
}
function JusticeList_tbody_17_ng_container_1_tr_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function JusticeList_tbody_17_ng_container_1_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, JusticeList_tbody_17_ng_container_1_tr_19_ng_container_1_Template, 1, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const channelTransactions_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", channelTransactions_r4);
  }
}
function JusticeList_tbody_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tr")(2, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-timestamp", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, JusticeList_tbody_17_ng_container_1_app_amount_5_Template, 1, 3, "app-amount", 27)(6, JusticeList_tbody_17_ng_container_1_ng_template_6_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-truncate", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-truncate", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td", 22)(13, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "td", 31)(17, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JusticeList_tbody_17_ng_container_1_Template_button_click_17_listener() {
      const channel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleDetails(channel_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](18, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, JusticeList_tbody_17_ng_container_1_tr_19_Template, 2, 1, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const channel_r2 = ctx.$implicit;
    const smallnode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("customFormat", "yyyy-MM-dd HH:mm")("unixTime", channel_r2.closing_date)("hideTimeSince", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", channel_r2.capacity > 100000000)("ngIfElse", smallnode_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", channel_r2.alias_left || "?")("maxWidth", 200)("lastChars", 6)("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", channel_r2.alias_right || "?")("maxWidth", 200)("lastChars", 6)("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 16, "/lightning/channel"), channel_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](channel_r2.short_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", channel_r2.short_id === ctx_r2.expanded);
  }
}
function JusticeList_tbody_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, JusticeList_tbody_17_ng_container_1_Template, 20, 21, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channels_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", channels_r6);
  }
}
function JusticeList_ng_template_21_td_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-transactions-list", 40, 3);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("transactions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c1, ctx_r2.transactions[0]))("showConfirmations", true)("rowLimit", 5);
  }
}
function JusticeList_ng_template_21_td_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-closing-type", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-transactions-list", 40, 4);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("transactions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c1, ctx_r2.transactions[1]))("showConfirmations", true)("rowLimit", 5);
  }
}
function JusticeList_ng_template_21_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, JusticeList_ng_template_21_td_0_ng_template_1_Template, 5, 5, "ng-template", 38)(2, JusticeList_ng_template_21_td_0_ng_template_2_Template, 7, 6, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.transactions[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.transactions[1]);
  }
}
function JusticeList_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, JusticeList_ng_template_21_td_0_Template, 3, 2, "td", 36);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const loadingTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.transactions && !ctx_r2.loadingTransactions)("ngIfElse", loadingTemplate_r7);
  }
}
function JusticeList_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 37)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
let JusticeList = /*#__PURE__*/(() => {
  class JusticeList {
    constructor(apiService, electrsApiService, cd) {
      this.apiService = apiService;
      this.electrsApiService = electrsApiService;
      this.cd = cd;
      this.fetchTransactions$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
      this.expanded = null;
      this.loadingTransactions = true;
    }
    ngOnInit() {
      this.justiceChannels$ = this.apiService.getPenaltyClosedChannels$();
      this.transactionsSubscription = this.fetchTransactions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
        this.loadingTransactions = true;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(channel => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.zip)([channel.transaction_id ? this.electrsApiService.getTransaction$(channel.transaction_id) : (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null), channel.closing_transaction_id ? this.electrsApiService.getTransaction$(channel.closing_transaction_id) : (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null)]);
      })).subscribe(transactions => {
        this.transactions = transactions;
        this.loadingTransactions = false;
        this.cd.markForCheck();
      });
    }
    toggleDetails(channel) {
      if (this.expanded === channel.short_id) {
        this.expanded = null;
      } else {
        this.expanded = channel.short_id;
        this.fetchTransactions$.next(channel);
      }
    }
    ngOnDestroy() {
      this.transactionsSubscription.unsubscribe();
    }
    static #_ = this.ɵfac = function JusticeList_Factory(t) {
      return new (t || JusticeList)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_1__.ElectrsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: JusticeList,
      selectors: [["app-justice-list"]],
      decls: 25,
      vars: 3,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity-ranking
           */
          const MSG_EXTERNAL_4065103841771908719$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_0 = goog.getMsg("Penalties");
          i18n_0 = MSG_EXTERNAL_4065103841771908719$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "Kary";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.closed-at
           */
          const MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_1 = goog.getMsg("Closed");
          i18n_1 = MSG_EXTERNAL_7860418101283165917$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "Zamkni\u0119ty";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_2 = goog.getMsg("Capacity");
          i18n_2 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_2;
        } else {
          i18n_2 = "Pojemno\u015B\u0107";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_3 = goog.getMsg("Nodes");
          i18n_3 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_3;
        } else {
          i18n_3 = "W\u0119zly";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc channels.id
           */
          const MSG_EXTERNAL_4680877724920952974$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_4 = goog.getMsg("Channel ID");
          i18n_4 = MSG_EXTERNAL_4680877724920952974$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_4;
        } else {
          i18n_4 = "ID kana\u0142u";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction Details
           * @meaning transaction.details
           */
          const MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_5 = goog.getMsg("Details");
          i18n_5 = MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_5;
        } else {
          i18n_5 = "Szczeg\xF3\u0142y";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_6 = goog.getMsg("sats");
          i18n_6 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_6;
        } else {
          i18n_6 = "sats";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.opening-transaction
           */
          const MSG_EXTERNAL_7562034013628970815$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_7 = goog.getMsg("Opening transaction");
          i18n_7 = MSG_EXTERNAL_7562034013628970815$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_7;
        } else {
          i18n_7 = "Transakcja otwarcia";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.closing-transaction
           */
          const MSG_EXTERNAL_335568611259508955$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_8 = goog.getMsg("Closing transaction");
          i18n_8 = MSG_EXTERNAL_335568611259508955$$SRC_APP_LIGHTNING_JUSTICE_LIST_JUSTICE_LIST_COMPONENT_TS_8;
        } else {
          i18n_8 = "Transakcja zamkni\u0119cia";
        }
        return [["channelTransactions", ""], ["loadingTemplate", ""], ["smallnode", ""], ["txList1", ""], ["txList2", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, [1, "container-xl", "full-height", 2, "min-height", "335px"], [1, "float-left"], [1, "clearfix"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [1, "timestamp"], [1, "channels", "text-right"], [1, "node", "text-right"], [1, "channelid", "text-right"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "customFormat", "unixTime", "hideTimeSince"], [1, "capacity", "text-right"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [1, "alias", "text-right"], ["textAlign", "end", 3, "text", "maxWidth", "lastChars", "inline"], [3, "routerLink"], [1, "text-right"], ["type", "button", 1, "btn", "btn-outline-info", "details-button", "btn-sm", 3, "click"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "sats"], [4, "ngTemplateOutlet"], ["colspan", "6", 4, "ngIf", "ngIfElse"], ["colspan", "6"], [3, "ngIf"], [1, "d-flex"], [3, "transactions", "showConfirmations", "rowLimit"], [1, "closing-header", "d-flex"], [2, "margin", "0"], [3, "type"], [1, "text-center"], [1, "spinner-border", "text-light"]];
      },
      template: function JusticeList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "h1", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 17)(5, "table", 18)(6, "thead")(7, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](8, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](10, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](13, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](15, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, JusticeList_tbody_17_Template, 2, 1, "tbody", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "div", 16)(20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, JusticeList_ng_template_21_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(23, JusticeList_ng_template_23_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 1, ctx.justiceChannels$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_2__.AmountComponent, _components_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_3__.TransactionsListComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_4__.TruncateComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__.TimestampComponent, _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_6__.ClosingTypeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__.RelativeUrlPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__.AmountShortenerPipe],
      styles: [".container-xl[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n\n.container-xl.widget[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 0.65rem !important;\n  padding-bottom: 0.7rem !important;\n}\n\n.clear-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.pool[_ngcontent-%COMP%] {\n  width: 15%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 575px) {\n  .pool[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n\n.pool-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.liquidity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 575px) {\n  .liquidity[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.fiat[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .fiat[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 575px) {\n  .fiat[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}"],
      changeDetection: 0
    });
  }
  return JusticeList;
})();

/***/ }),

/***/ 84352:
/*!********************************************************************************!*\
  !*** ./src/app/lightning/lightning-dashboard/lightning-dashboard.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningDashboardComponent: () => (/* binding */ LightningDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/opengraph.service */ 26857);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _app_lightning_node_statistics_node_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/node-statistics/node-statistics.component */ 84932);
/* harmony import */ var _app_lightning_statistics_chart_lightning_statistics_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/lightning/statistics-chart/lightning-statistics-chart.component */ 48575);
/* harmony import */ var _app_lightning_nodes_networks_chart_nodes_networks_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/nodes-networks-chart/nodes-networks-chart.component */ 38798);
/* harmony import */ var _app_lightning_channels_statistics_channels_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/channels-statistics/channels-statistics.component */ 25808);
/* harmony import */ var _app_lightning_nodes_per_isp_chart_nodes_per_isp_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/lightning/nodes-per-isp-chart/nodes-per-isp-chart.component */ 12800);
/* harmony import */ var _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/lightning/nodes-channels-map/nodes-channels-map.component */ 96984);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-channels/top-nodes-per-channels.component */ 84243);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-capacity/top-nodes-per-capacity.component */ 19995);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);


















const _c0 = a0 => [a0];
const _c1 = () => ["fas", "external-link-alt"];
let LightningDashboardComponent = /*#__PURE__*/(() => {
  class LightningDashboardComponent {
    constructor(lightningApiService, seoService, ogService, stateService, cd) {
      this.lightningApiService = lightningApiService;
      this.seoService = seoService;
      this.ogService = ogService;
      this.stateService = stateService;
      this.cd = cd;
      this.officialMempoolSpace = this.stateService.env.OFFICIAL_MEMPOOL_SPACE;
      this.graphHeight = 300;
    }
    ngOnInit() {
      this.onResize();
      this.seoService.setTitle("Eksplorator Lightning");
      this.seoService.setDescription("Uzyskaj statystyki dotycz\u0105ce sieci Lightning (\u0142\u0105czna pojemno\u015B\u0107, \u0142\u0105czno\u015B\u0107 itp.), w\u0119z\u0142\xF3w Lightning (kana\u0142y, p\u0142ynno\u015B\u0107 finansowa itp.) oraz kana\u0142\xF3w Lightning (status, op\u0142aty itp.).");
      this.ogService.setManualOgImage('lightning.jpg');
      this.nodesRanking$ = this.lightningApiService.getNodesRanking$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
      this.statistics$ = this.lightningApiService.getLatestStatistics$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
      if (!this.stateService.isBrowser) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(this.nodesRanking$, this.statistics$).subscribe(() => {
          this.cd.markForCheck();
        });
      }
    }
    ngAfterViewInit() {
      this.stateService.focusSearchInputDesktop();
    }
    onResize() {
      if (window.innerWidth >= 992) {
        this.graphHeight = 340;
      } else if (window.innerWidth >= 768) {
        this.graphHeight = 245;
      } else {
        this.graphHeight = 210;
      }
    }
    static #_ = this.ɵfac = function LightningDashboardComponent_Factory(t) {
      return new (t || LightningDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_2__.OpenGraphService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: LightningDashboardComponent,
      selectors: [["app-lightning-dashboard"]],
      hostBindings: function LightningDashboardComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("resize", function LightningDashboardComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresolveWindow"]);
        }
      },
      decls: 64,
      vars: 43,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.network-statistics-title
           */
          const MSG_EXTERNAL_5444124222500430816$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_0 = goog.getMsg("Network Statistics");
          i18n_0 = MSG_EXTERNAL_5444124222500430816$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_0;
        } else {
          i18n_0 = "Statystyki sieci";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channel-statistics-title
           */
          const MSG_EXTERNAL_2063952957923618850$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_1 = goog.getMsg("Channels Statistics");
          i18n_1 = MSG_EXTERNAL_2063952957923618850$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_1;
        } else {
          i18n_1 = "Statystyki kana\u0142\xF3w";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc dashboard.view-more
           */
          const MSG_EXTERNAL_2173964791553126730$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_2 = goog.getMsg("View more \u00BB");
          i18n_2 = MSG_EXTERNAL_2173964791553126730$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_2;
        } else {
          i18n_2 = "Poka\u017C wi\u0119cej \xBB";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.network-history
           */
          const MSG_EXTERNAL_6960946577821894318$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_3 = goog.getMsg("Lightning Network History");
          i18n_3 = MSG_EXTERNAL_6960946577821894318$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_3;
        } else {
          i18n_3 = "Historia Lightning Network";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc dashboard.view-more
           */
          const MSG_EXTERNAL_2173964791553126730$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_4 = goog.getMsg("View more \u00BB");
          i18n_4 = MSG_EXTERNAL_2173964791553126730$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_4;
        } else {
          i18n_4 = "Poka\u017C wi\u0119cej \xBB";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity-ranking
           */
          const MSG_EXTERNAL_6592478544940252608$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_5 = goog.getMsg("Liquidity Ranking");
          i18n_5 = MSG_EXTERNAL_6592478544940252608$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_5;
        } else {
          i18n_5 = "Ranking p\u0142ynno\u015Bci";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.connectivity-ranking
           */
          const MSG_EXTERNAL_3006432067351761102$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_6 = goog.getMsg("Connectivity Ranking");
          i18n_6 = MSG_EXTERNAL_3006432067351761102$$SRC_APP_LIGHTNING_LIGHTNING_DASHBOARD_LIGHTNING_DASHBOARD_COMPONENT_TS_6;
        } else {
          i18n_6 = "Ranking \u0142\u0105czno\u015Bci";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, [1, "container-xl", "dashboard-container"], [1, "row", "row-cols-1", "row-cols-md-2"], [1, "col"], [1, "main-title"], [1, "card-wrapper"], [1, "card", 2, "height", "123px"], [1, "card-body", "more-padding"], [3, "statistics$"], [1, "col", 2, "margin-bottom", "1.47rem"], [1, "card"], [1, "card-body", "pl-2", "pr-2"], [1, "mempool-graph"], [3, "height", "widget"], [2, "margin-top", "5px"], [3, "routerLink"], [1, "card-body", "pl-2", "pr-2", "pt-1"], [1, "card-title", "mt-3"], [1, "col", 2, "max-height", "410px"], [1, "card-body"], ["href", "", 1, "title-link", 3, "routerLink"], [1, "card-title", "d-inline"], [2, "vertical-align", "text-top", "font-size", "13px", "color", "var(--title-fg)", 3, "icon", "fixedWidth"], [3, "nodes$", "statistics$", "widget"]];
      },
      template: function LightningDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-nodes-channels-map");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 11)(9, "div", 12)(10, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "app-node-statistics", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](15, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "app-channels-statistics", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "app-nodes-per-isp-chart", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 20)(27, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](28, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](29, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 9)(31, "div", 16)(32, "div", 22)(33, "div", 18)(34, "h5", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](35, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](36, "app-lightning-statistics-chart", 19)(37, "app-nodes-networks-chart", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div")(39, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](40, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](41, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 24)(43, "div", 16)(44, "div", 25)(45, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](46, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "h5", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](48, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](51, "fa-icon", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](52, "app-top-nodes-per-capacity", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 24)(54, "div", 16)(55, "div", 25)(56, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](57, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "h5", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](59, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](62, "fa-icon", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](63, "app-top-nodes-per-channels", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleMap"]("widget");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("statistics$", ctx.statistics$);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("statistics$", ctx.statistics$);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("height", ctx.graphHeight)("widget", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](33, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](28, 25, "/graphs/lightning/nodes-per-isp")));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "pool-distribution-view-more");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("height", ctx.graphHeight / 1.7)("widget", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("height", ctx.graphHeight / 1.7)("widget", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](35, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](40, 27, "/graphs/lightning/nodes-networks")));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](37, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](46, 29, "/lightning/nodes/rankings/liquidity")));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](39, _c1))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("nodes$", ctx.nodesRanking$)("statistics$", ctx.statistics$)("widget", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](40, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](57, 31, "/lightning/nodes/rankings/connectivity")));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](42, _c1))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("nodes$", ctx.nodesRanking$)("statistics$", ctx.statistics$)("widget", true);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _app_lightning_node_statistics_node_statistics_component__WEBPACK_IMPORTED_MODULE_4__.NodeStatisticsComponent, _app_lightning_statistics_chart_lightning_statistics_chart_component__WEBPACK_IMPORTED_MODULE_5__.LightningStatisticsChartComponent, _app_lightning_nodes_networks_chart_nodes_networks_chart_component__WEBPACK_IMPORTED_MODULE_6__.NodesNetworksChartComponent, _app_lightning_channels_statistics_channels_statistics_component__WEBPACK_IMPORTED_MODULE_7__.ChannelsStatisticsComponent, _app_lightning_nodes_per_isp_chart_nodes_per_isp_chart_component__WEBPACK_IMPORTED_MODULE_8__.NodesPerISPChartComponent, _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_9__.NodesChannelsMap, _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_10__.TopNodesPerChannels, _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_11__.TopNodesPerCapacity, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_12__.RelativeUrlPipe],
      styles: [".dashboard-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n}\n@media (min-width: 992px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n  }\n}\n.dashboard-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--bg);\n}\n\n.graph-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@media (min-width: 992px) {\n  .graph-card[_ngcontent-%COMP%] {\n    height: 385px;\n  }\n}\n\n.fixed-mempool-graph[_ngcontent-%COMP%] {\n  height: 330px;\n}\n\n@media (min-width: 768px) {\n  .mempool-graph[_ngcontent-%COMP%], .fixed-mempool-graph[_ngcontent-%COMP%] {\n    height: 345px;\n  }\n}\n@media (min-width: 992px) {\n  .mempool-graph[_ngcontent-%COMP%], .fixed-mempool-graph[_ngcontent-%COMP%] {\n    height: 439px;\n  }\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--title-fg);\n}\n\n.card-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--title-fg);\n}\n\n.card-body.pool-ranking[_ngcontent-%COMP%] {\n  padding: 1.25rem 0.25rem 0.75rem 0.25rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n#blockchain-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n#blockchain-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.fade-border[_ngcontent-%COMP%] {\n  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 80%, transparent 100%);\n}\n\n.main-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--fg);\n  opacity: var(--opacity);\n  margin-top: -13px;\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 3px;\n}\n\n.more-padding[_ngcontent-%COMP%] {\n  padding: 24px 20px !important;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.card-wrapper[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: inherit;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 22px 20px;\n}\n\n.skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.skeleton-loader[_ngcontent-%COMP%]:first-child {\n  max-width: 90px;\n  margin: 15px auto 3px;\n}\n.skeleton-loader[_ngcontent-%COMP%]:last-child {\n  margin: 10px auto 3px;\n  max-width: 55px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.title-link[_ngcontent-%COMP%], .title-link[_ngcontent-%COMP%]:hover, .title-link[_ngcontent-%COMP%]:focus, .title-link[_ngcontent-%COMP%]:active {\n  display: block;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: inherit;\n}"],
      changeDetection: 0
    });
  }
  return LightningDashboardComponent;
})();

/***/ }),

/***/ 87600:
/*!********************************************************!*\
  !*** ./src/app/lightning/lightning-previews.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningPreviewsModule: () => (/* binding */ LightningPreviewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ 26800);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_graphs_graphs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/graphs/graphs.module */ 2132);
/* harmony import */ var _app_lightning_lightning_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/lightning.module */ 30824);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_lightning_node_node_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/node/node-preview.component */ 82511);
/* harmony import */ var _app_lightning_lightning_previews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/lightning/lightning-previews.routing.module */ 61808);
/* harmony import */ var _app_lightning_channel_channel_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/channel/channel-preview.component */ 52249);
/* harmony import */ var _app_lightning_nodes_per_isp_nodes_per_isp_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/nodes-per-isp/nodes-per-isp-preview.component */ 91909);
/* harmony import */ var _app_lightning_group_group_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/lightning/group/group-preview.component */ 35905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39962);












let LightningPreviewsModule = /*#__PURE__*/(() => {
  class LightningPreviewsModule {
    static #_ = this.ɵfac = function LightningPreviewsModule_Factory(t) {
      return new (t || LightningPreviewsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: LightningPreviewsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_3__.LightningApiService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _app_graphs_graphs_module__WEBPACK_IMPORTED_MODULE_1__.GraphsModule, _app_lightning_lightning_previews_routing_module__WEBPACK_IMPORTED_MODULE_5__.LightningPreviewsRoutingModule, _app_lightning_lightning_module__WEBPACK_IMPORTED_MODULE_2__.LightningModule]
    });
  }
  return LightningPreviewsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LightningPreviewsModule, {
    declarations: [_app_lightning_node_node_preview_component__WEBPACK_IMPORTED_MODULE_4__.NodePreviewComponent, _app_lightning_channel_channel_preview_component__WEBPACK_IMPORTED_MODULE_6__.ChannelPreviewComponent, _app_lightning_nodes_per_isp_nodes_per_isp_preview_component__WEBPACK_IMPORTED_MODULE_7__.NodesPerISPPreview, _app_lightning_group_group_preview_component__WEBPACK_IMPORTED_MODULE_8__.GroupPreviewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _app_graphs_graphs_module__WEBPACK_IMPORTED_MODULE_1__.GraphsModule, _app_lightning_lightning_previews_routing_module__WEBPACK_IMPORTED_MODULE_5__.LightningPreviewsRoutingModule, _app_lightning_lightning_module__WEBPACK_IMPORTED_MODULE_2__.LightningModule]
  });
})();

/***/ }),

/***/ 61808:
/*!****************************************************************!*\
  !*** ./src/app/lightning/lightning-previews.routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningPreviewsRoutingModule: () => (/* binding */ LightningPreviewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_lightning_node_node_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/node/node-preview.component */ 82511);
/* harmony import */ var _app_lightning_channel_channel_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lightning/channel/channel-preview.component */ 52249);
/* harmony import */ var _app_lightning_nodes_per_isp_nodes_per_isp_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/nodes-per-isp/nodes-per-isp-preview.component */ 91909);
/* harmony import */ var _app_lightning_group_group_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/lightning/group/group-preview.component */ 35905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39962);







const routes = [{
  path: 'node/:public_key',
  component: _app_lightning_node_node_preview_component__WEBPACK_IMPORTED_MODULE_0__.NodePreviewComponent
}, {
  path: 'channel/:short_id',
  component: _app_lightning_channel_channel_preview_component__WEBPACK_IMPORTED_MODULE_1__.ChannelPreviewComponent
}, {
  path: 'nodes/isp/:isp',
  component: _app_lightning_nodes_per_isp_nodes_per_isp_preview_component__WEBPACK_IMPORTED_MODULE_2__.NodesPerISPPreview
}, {
  path: 'group/:slug',
  component: _app_lightning_group_group_preview_component__WEBPACK_IMPORTED_MODULE_3__.GroupPreviewComponent
}, {
  path: '**',
  redirectTo: ''
}];
let LightningPreviewsRoutingModule = /*#__PURE__*/(() => {
  class LightningPreviewsRoutingModule {
    static #_ = this.ɵfac = function LightningPreviewsRoutingModule_Factory(t) {
      return new (t || LightningPreviewsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: LightningPreviewsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
  return LightningPreviewsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LightningPreviewsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 14472:
/*!****************************************************************************!*\
  !*** ./src/app/lightning/lightning-wrapper/lightning-wrapper.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningWrapperComponent: () => (/* binding */ LightningWrapperComponent)
/* harmony export */ });
/* harmony import */ var _shared_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/common.utils */ 75903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/websocket.service */ 48246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 18134);




let LightningWrapperComponent = /*#__PURE__*/(() => {
  class LightningWrapperComponent {
    constructor(websocketService, router, route) {
      this.websocketService = websocketService;
      this.router = router;
      this.route = route;
    }
    ngOnInit() {
      this.websocketService.want(['blocks']);
      (0,_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__.handleDemoRedirect)(this.route, this.router);
    }
    static #_ = this.ɵfac = function LightningWrapperComponent_Factory(t) {
      return new (t || LightningWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LightningWrapperComponent,
      selectors: [["app-lightning-wrapper"]],
      decls: 1,
      vars: 0,
      template: function LightningWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
      changeDetection: 0
    });
  }
  return LightningWrapperComponent;
})();

/***/ }),

/***/ 30824:
/*!***********************************************!*\
  !*** ./src/app/lightning/lightning.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningModule: () => (/* binding */ LightningModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ 26800);
/* harmony import */ var _app_lightning_lightning_dashboard_lightning_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lightning/lightning-dashboard/lightning-dashboard.component */ 84352);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_lightning_nodes_list_nodes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/lightning/nodes-list/nodes-list.component */ 12370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_lightning_node_statistics_node_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/node-statistics/node-statistics.component */ 84932);
/* harmony import */ var _app_lightning_node_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/lightning/node/node.component */ 68642);
/* harmony import */ var _app_lightning_lightning_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/lightning.routing.module */ 89448);
/* harmony import */ var _app_lightning_channels_list_channels_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/channels-list/channels-list.component */ 36560);
/* harmony import */ var _app_lightning_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/lightning/channel/channel.component */ 69136);
/* harmony import */ var _app_lightning_lightning_wrapper_lightning_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/lightning/lightning-wrapper/lightning-wrapper.component */ 14472);
/* harmony import */ var _app_lightning_channel_channel_box_channel_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/lightning/channel/channel-box/channel-box.component */ 492);
/* harmony import */ var _app_lightning_channel_channel_close_box_channel_close_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/lightning/channel/channel-close-box/channel-close-box.component */ 55588);
/* harmony import */ var _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/lightning/channel/closing-type/closing-type.component */ 694);
/* harmony import */ var _app_lightning_statistics_chart_lightning_statistics_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/lightning/statistics-chart/lightning-statistics-chart.component */ 48575);
/* harmony import */ var _app_lightning_node_statistics_chart_node_statistics_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/lightning/node-statistics-chart/node-statistics-chart.component */ 59880);
/* harmony import */ var _app_lightning_node_fee_chart_node_fee_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/lightning/node-fee-chart/node-fee-chart.component */ 52778);
/* harmony import */ var _app_graphs_graphs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/graphs/graphs.module */ 2132);
/* harmony import */ var _app_lightning_nodes_networks_chart_nodes_networks_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/lightning/nodes-networks-chart/nodes-networks-chart.component */ 38798);
/* harmony import */ var _app_lightning_channels_statistics_channels_statistics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/lightning/channels-statistics/channels-statistics.component */ 25808);
/* harmony import */ var _app_lightning_nodes_per_isp_chart_nodes_per_isp_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/lightning/nodes-per-isp-chart/nodes-per-isp-chart.component */ 12800);
/* harmony import */ var _app_lightning_nodes_per_country_nodes_per_country_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/lightning/nodes-per-country/nodes-per-country.component */ 8184);
/* harmony import */ var _app_lightning_nodes_per_isp_nodes_per_isp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/lightning/nodes-per-isp/nodes-per-isp.component */ 94580);
/* harmony import */ var _app_lightning_nodes_per_country_chart_nodes_per_country_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/lightning/nodes-per-country-chart/nodes-per-country-chart.component */ 53480);
/* harmony import */ var _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/lightning/nodes-map/nodes-map.component */ 48296);
/* harmony import */ var _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/lightning/nodes-channels-map/nodes-channels-map.component */ 96984);
/* harmony import */ var _app_lightning_nodes_ranking_nodes_ranking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/lightning/nodes-ranking/nodes-ranking.component */ 7264);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-channels/top-nodes-per-channels.component */ 84243);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-capacity/top-nodes-per-capacity.component */ 19995);
/* harmony import */ var _app_lightning_justice_list_justice_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/lightning/justice-list/justice-list.component */ 13954);
/* harmony import */ var _app_lightning_nodes_ranking_oldest_nodes_oldest_nodes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/lightning/nodes-ranking/oldest-nodes/oldest-nodes.component */ 59953);
/* harmony import */ var _app_lightning_nodes_rankings_dashboard_nodes_rankings_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @app/lightning/nodes-rankings-dashboard/nodes-rankings-dashboard.component */ 19330);
/* harmony import */ var _app_lightning_nodes_channels_node_channels_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @app/lightning/nodes-channels/node-channels.component */ 35813);
/* harmony import */ var _app_lightning_group_group_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/lightning/group/group.component */ 52184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 39962);




































let LightningModule = /*#__PURE__*/(() => {
  class LightningModule {
    static #_ = this.ɵfac = function LightningModule_Factory(t) {
      return new (t || LightningModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({
      type: LightningModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({
      providers: [_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_2__.LightningApiService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule, _app_lightning_lightning_routing_module__WEBPACK_IMPORTED_MODULE_6__.LightningRoutingModule, _app_graphs_graphs_module__WEBPACK_IMPORTED_MODULE_16__.GraphsModule]
    });
  }
  return LightningModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](LightningModule, {
    declarations: [_app_lightning_lightning_dashboard_lightning_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.LightningDashboardComponent, _app_lightning_nodes_list_nodes_list_component__WEBPACK_IMPORTED_MODULE_3__.NodesListComponent, _app_lightning_node_statistics_node_statistics_component__WEBPACK_IMPORTED_MODULE_4__.NodeStatisticsComponent, _app_lightning_node_statistics_chart_node_statistics_chart_component__WEBPACK_IMPORTED_MODULE_14__.NodeStatisticsChartComponent, _app_lightning_node_fee_chart_node_fee_chart_component__WEBPACK_IMPORTED_MODULE_15__.NodeFeeChartComponent, _app_lightning_node_node_component__WEBPACK_IMPORTED_MODULE_5__.NodeComponent, _app_lightning_channels_list_channels_list_component__WEBPACK_IMPORTED_MODULE_7__.ChannelsListComponent, _app_lightning_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__.ChannelComponent, _app_lightning_lightning_wrapper_lightning_wrapper_component__WEBPACK_IMPORTED_MODULE_9__.LightningWrapperComponent, _app_lightning_channel_channel_box_channel_box_component__WEBPACK_IMPORTED_MODULE_10__.ChannelBoxComponent, _app_lightning_channel_channel_close_box_channel_close_box_component__WEBPACK_IMPORTED_MODULE_11__.ChannelCloseBoxComponent, _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_12__.ClosingTypeComponent, _app_lightning_statistics_chart_lightning_statistics_chart_component__WEBPACK_IMPORTED_MODULE_13__.LightningStatisticsChartComponent, _app_lightning_nodes_networks_chart_nodes_networks_chart_component__WEBPACK_IMPORTED_MODULE_17__.NodesNetworksChartComponent, _app_lightning_channels_statistics_channels_statistics_component__WEBPACK_IMPORTED_MODULE_18__.ChannelsStatisticsComponent, _app_lightning_nodes_per_isp_chart_nodes_per_isp_chart_component__WEBPACK_IMPORTED_MODULE_19__.NodesPerISPChartComponent, _app_lightning_nodes_per_country_nodes_per_country_component__WEBPACK_IMPORTED_MODULE_20__.NodesPerCountry, _app_lightning_nodes_per_isp_nodes_per_isp_component__WEBPACK_IMPORTED_MODULE_21__.NodesPerISP, _app_lightning_nodes_per_country_chart_nodes_per_country_chart_component__WEBPACK_IMPORTED_MODULE_22__.NodesPerCountryChartComponent, _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_23__.NodesMap, _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_24__.NodesChannelsMap, _app_lightning_nodes_ranking_nodes_ranking_component__WEBPACK_IMPORTED_MODULE_25__.NodesRanking, _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_26__.TopNodesPerChannels, _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_27__.TopNodesPerCapacity, _app_lightning_justice_list_justice_list_component__WEBPACK_IMPORTED_MODULE_28__.JusticeList, _app_lightning_nodes_ranking_oldest_nodes_oldest_nodes_component__WEBPACK_IMPORTED_MODULE_29__.OldestNodes, _app_lightning_nodes_rankings_dashboard_nodes_rankings_dashboard_component__WEBPACK_IMPORTED_MODULE_30__.NodesRankingsDashboard, _app_lightning_nodes_channels_node_channels_component__WEBPACK_IMPORTED_MODULE_31__.NodeChannels, _app_lightning_group_group_component__WEBPACK_IMPORTED_MODULE_32__.GroupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule, _app_lightning_lightning_routing_module__WEBPACK_IMPORTED_MODULE_6__.LightningRoutingModule, _app_graphs_graphs_module__WEBPACK_IMPORTED_MODULE_16__.GraphsModule],
    exports: [_app_lightning_lightning_dashboard_lightning_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.LightningDashboardComponent, _app_lightning_nodes_list_nodes_list_component__WEBPACK_IMPORTED_MODULE_3__.NodesListComponent, _app_lightning_node_statistics_node_statistics_component__WEBPACK_IMPORTED_MODULE_4__.NodeStatisticsComponent, _app_lightning_node_statistics_chart_node_statistics_chart_component__WEBPACK_IMPORTED_MODULE_14__.NodeStatisticsChartComponent, _app_lightning_node_fee_chart_node_fee_chart_component__WEBPACK_IMPORTED_MODULE_15__.NodeFeeChartComponent, _app_lightning_node_node_component__WEBPACK_IMPORTED_MODULE_5__.NodeComponent, _app_lightning_channels_list_channels_list_component__WEBPACK_IMPORTED_MODULE_7__.ChannelsListComponent, _app_lightning_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__.ChannelComponent, _app_lightning_lightning_wrapper_lightning_wrapper_component__WEBPACK_IMPORTED_MODULE_9__.LightningWrapperComponent, _app_lightning_channel_channel_box_channel_box_component__WEBPACK_IMPORTED_MODULE_10__.ChannelBoxComponent, _app_lightning_channel_channel_close_box_channel_close_box_component__WEBPACK_IMPORTED_MODULE_11__.ChannelCloseBoxComponent, _app_lightning_channel_closing_type_closing_type_component__WEBPACK_IMPORTED_MODULE_12__.ClosingTypeComponent, _app_lightning_statistics_chart_lightning_statistics_chart_component__WEBPACK_IMPORTED_MODULE_13__.LightningStatisticsChartComponent, _app_lightning_nodes_networks_chart_nodes_networks_chart_component__WEBPACK_IMPORTED_MODULE_17__.NodesNetworksChartComponent, _app_lightning_channels_statistics_channels_statistics_component__WEBPACK_IMPORTED_MODULE_18__.ChannelsStatisticsComponent, _app_lightning_nodes_per_isp_chart_nodes_per_isp_chart_component__WEBPACK_IMPORTED_MODULE_19__.NodesPerISPChartComponent, _app_lightning_nodes_per_country_nodes_per_country_component__WEBPACK_IMPORTED_MODULE_20__.NodesPerCountry, _app_lightning_nodes_per_isp_nodes_per_isp_component__WEBPACK_IMPORTED_MODULE_21__.NodesPerISP, _app_lightning_nodes_per_country_chart_nodes_per_country_chart_component__WEBPACK_IMPORTED_MODULE_22__.NodesPerCountryChartComponent, _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_23__.NodesMap, _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_24__.NodesChannelsMap, _app_lightning_nodes_ranking_nodes_ranking_component__WEBPACK_IMPORTED_MODULE_25__.NodesRanking, _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_26__.TopNodesPerChannels, _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_27__.TopNodesPerCapacity, _app_lightning_justice_list_justice_list_component__WEBPACK_IMPORTED_MODULE_28__.JusticeList, _app_lightning_nodes_ranking_oldest_nodes_oldest_nodes_component__WEBPACK_IMPORTED_MODULE_29__.OldestNodes, _app_lightning_nodes_rankings_dashboard_nodes_rankings_dashboard_component__WEBPACK_IMPORTED_MODULE_30__.NodesRankingsDashboard, _app_lightning_nodes_channels_node_channels_component__WEBPACK_IMPORTED_MODULE_31__.NodeChannels]
  });
})();

/***/ }),

/***/ 89448:
/*!*******************************************************!*\
  !*** ./src/app/lightning/lightning.routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningRoutingModule: () => (/* binding */ LightningRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_lightning_lightning_dashboard_lightning_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-dashboard/lightning-dashboard.component */ 84352);
/* harmony import */ var _app_lightning_lightning_wrapper_lightning_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lightning/lightning-wrapper/lightning-wrapper.component */ 14472);
/* harmony import */ var _app_lightning_node_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/node/node.component */ 68642);
/* harmony import */ var _app_lightning_channel_channel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/lightning/channel/channel.component */ 69136);
/* harmony import */ var _app_lightning_nodes_per_country_nodes_per_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/nodes-per-country/nodes-per-country.component */ 8184);
/* harmony import */ var _app_lightning_nodes_per_isp_nodes_per_isp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/lightning/nodes-per-isp/nodes-per-isp.component */ 94580);
/* harmony import */ var _app_lightning_nodes_ranking_nodes_ranking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/nodes-ranking/nodes-ranking.component */ 7264);
/* harmony import */ var _app_lightning_nodes_rankings_dashboard_nodes_rankings_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/nodes-rankings-dashboard/nodes-rankings-dashboard.component */ 19330);
/* harmony import */ var _app_lightning_group_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/lightning/group/group.component */ 52184);
/* harmony import */ var _app_lightning_justice_list_justice_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/lightning/justice-list/justice-list.component */ 13954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39962);













const routes = [{
  path: '',
  component: _app_lightning_lightning_wrapper_lightning_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.LightningWrapperComponent,
  children: [{
    path: '',
    component: _app_lightning_lightning_dashboard_lightning_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.LightningDashboardComponent
  }, {
    path: 'node/:public_key',
    data: {
      networkSpecific: true
    },
    component: _app_lightning_node_node_component__WEBPACK_IMPORTED_MODULE_2__.NodeComponent
  }, {
    path: 'channel/:short_id',
    data: {
      networkSpecific: true
    },
    component: _app_lightning_channel_channel_component__WEBPACK_IMPORTED_MODULE_3__.ChannelComponent
  }, {
    path: 'nodes/country/:country',
    component: _app_lightning_nodes_per_country_nodes_per_country_component__WEBPACK_IMPORTED_MODULE_4__.NodesPerCountry
  }, {
    path: 'nodes/isp/:isp',
    component: _app_lightning_nodes_per_isp_nodes_per_isp_component__WEBPACK_IMPORTED_MODULE_5__.NodesPerISP
  }, {
    path: 'group/the-mempool-open-source-project',
    component: _app_lightning_group_group_component__WEBPACK_IMPORTED_MODULE_8__.GroupComponent
  }, {
    path: 'nodes/rankings',
    component: _app_lightning_nodes_rankings_dashboard_nodes_rankings_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.NodesRankingsDashboard
  }, {
    path: 'nodes/rankings/liquidity',
    component: _app_lightning_nodes_ranking_nodes_ranking_component__WEBPACK_IMPORTED_MODULE_6__.NodesRanking,
    data: {
      type: 'capacity'
    }
  }, {
    path: 'nodes/rankings/connectivity',
    component: _app_lightning_nodes_ranking_nodes_ranking_component__WEBPACK_IMPORTED_MODULE_6__.NodesRanking,
    data: {
      type: 'channels'
    }
  }, {
    path: 'nodes/oldest',
    component: _app_lightning_nodes_ranking_nodes_ranking_component__WEBPACK_IMPORTED_MODULE_6__.NodesRanking,
    data: {
      type: 'oldest'
    }
  }, {
    path: 'penalties',
    component: _app_lightning_justice_list_justice_list_component__WEBPACK_IMPORTED_MODULE_9__.JusticeList
  }, {
    path: '**',
    redirectTo: ''
  }]
}, {
  path: '**',
  redirectTo: ''
}];
let LightningRoutingModule = /*#__PURE__*/(() => {
  class LightningRoutingModule {
    static #_ = this.ɵfac = function LightningRoutingModule_Factory(t) {
      return new (t || LightningRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: LightningRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    });
  }
  return LightningRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](LightningRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 52778:
/*!**********************************************************************!*\
  !*** ./src/app/lightning/node-fee-chart/node-fee-chart.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeFeeChartComponent: () => (/* binding */ NodeFeeChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ 57021);










function NodeFeeChartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chartInit", function NodeFeeChartComponent_div_3_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodeFeeChartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let NodeFeeChartComponent = /*#__PURE__*/(() => {
  class NodeFeeChartComponent {
    constructor(locale, lightningApiService, stateService, activatedRoute, amountShortenerPipe) {
      this.locale = locale;
      this.lightningApiService = lightningApiService;
      this.stateService = stateService;
      this.activatedRoute = activatedRoute;
      this.amountShortenerPipe = amountShortenerPipe;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
      this.dir = 'ltr';
      this.isLoading = true;
      this.chartInstance = undefined;
    }
    ngOnInit() {
      this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => {
        this.isLoading = true;
        return this.lightningApiService.getNodeFeeHistogram$(params.get('public_key'));
      })).subscribe(data => {
        if (data && data.incoming && data.outgoing) {
          const outgoingHistogram = this.bucketsToHistogram(data.outgoing);
          const incomingHistogram = this.bucketsToHistogram(data.incoming);
          this.prepareChartOptions(outgoingHistogram, incomingHistogram);
        }
        this.isLoading = false;
      });
    }
    bucketsToHistogram(buckets) {
      const histogram = [];
      let increment = 1;
      let lower = -increment;
      let upper = 0;
      let nullBucket;
      if (buckets.length && buckets[0] && buckets[0].bucket == null) {
        nullBucket = buckets.shift();
      }
      while (upper <= 5000) {
        let bucket;
        if (buckets.length && buckets[0] && upper >= Number(buckets[0].bucket)) {
          bucket = buckets.shift();
        }
        histogram.push({
          label: upper === 0 ? '0 ppm' : `${lower} - ${upper} ppm`,
          count: Number(bucket?.count || 0) + (upper === 0 ? Number(nullBucket?.count || 0) : 0),
          capacity: Number(bucket?.capacity || 0) + (upper === 0 ? Number(nullBucket?.capacity || 0) : 0)
        });
        if (upper >= increment * 10) {
          increment *= 10;
          lower = increment;
          upper = increment + increment;
        } else {
          lower += increment;
          upper += increment;
        }
      }
      const rest = buckets.reduce((acc, bucket) => {
        acc.count += Number(bucket.count);
        acc.capacity += Number(bucket.capacity);
        return acc;
      }, {
        count: 0,
        capacity: 0
      });
      histogram.push({
        label: `5000+ ppm`,
        count: rest.count,
        capacity: rest.capacity
      });
      return histogram;
    }
    prepareChartOptions(outgoingData, incomingData) {
      let sum = outgoingData.reduce((accumulator, object) => {
        return accumulator + object.count;
      }, 0);
      sum += incomingData.reduce((accumulator, object) => {
        return accumulator + object.count;
      }, 0);
      let title;
      if (sum === 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 15
          },
          text: "Brak danych do wy\u015Bwietlenia. Spr\xF3buj ponownie p\xF3\u017Aniej.",
          left: 'center',
          top: 'center'
        };
      }
      this.chartOptions = {
        title: sum === 0 ? title : undefined,
        animation: false,
        grid: {
          top: 30,
          bottom: 20,
          right: 20,
          left: 65
        },
        tooltip: {
          show: !this.isMobile(),
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          backgroundColor: 'rgba(17, 19, 31, 1)',
          borderRadius: 4,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          textStyle: {
            color: 'var(--tooltip-grey)',
            align: 'left'
          },
          borderColor: '#000',
          formatter: ticks => {
            return `
            <b style="color: white; margin-left: 2px">${ticks[0].data.label}</b><br>
            <br>
            <b style="color: white; margin-left: 2px">${ticks[0].marker} Outgoing</b><br>
            <span>Capacity: ${this.amountShortenerPipe.transform(ticks[0].data.capacity, 2, undefined, true)} sats</span><br>
            <span>Channels: ${ticks[0].data.count}</span><br>
            <br>
            <b style="color: white; margin-left: 2px">${ticks[1].marker} Incoming</b><br>
            <span>Capacity: ${this.amountShortenerPipe.transform(ticks[1].data.capacity, 2, undefined, true)} sats</span><br>
            <span>Channels: ${ticks[1].data.count}</span><br>
          `;
          }
        },
        xAxis: sum === 0 ? undefined : {
          type: 'category',
          axisLine: {
            onZero: true
          },
          axisLabel: {
            align: 'center',
            fontSize: 11,
            lineHeight: 12,
            hideOverlap: true,
            padding: [0, 5]
          },
          data: outgoingData.map(bucket => bucket.label)
        },
        legend: sum === 0 ? undefined : {
          padding: 10,
          data: [{
            name: "Op\u0142aty wychodz\u0105ce",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Op\u0142aty przychodz\u0105ce",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }]
        },
        yAxis: sum === 0 ? undefined : [{
          type: 'value',
          axisLabel: {
            color: 'rgb(110, 112, 121)',
            formatter: val => {
              return `${this.amountShortenerPipe.transform(Math.abs(val), 2, undefined, true)} sats`;
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: 'var(--transparent-fg)',
              opacity: 0.25
            }
          }
        }],
        series: sum === 0 ? undefined : [{
          zlevel: 0,
          name: "Op\u0142aty wychodz\u0105ce",
          data: outgoingData.map(bucket => ({
            value: bucket.capacity,
            label: bucket.label,
            capacity: bucket.capacity,
            count: bucket.count
          })),
          type: 'bar',
          barWidth: '90%',
          barMaxWidth: 50,
          stack: 'fees'
        }, {
          zlevel: 0,
          name: "Op\u0142aty przychodz\u0105ce",
          data: incomingData.map(bucket => ({
            value: -bucket.capacity,
            label: bucket.label,
            capacity: bucket.capacity,
            count: bucket.count
          })),
          type: 'bar',
          barWidth: '90%',
          barMaxWidth: 50,
          stack: 'fees'
        }]
      };
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
    }
    isMobile() {
      return window.innerWidth <= 767.98;
    }
    static #_ = this.ɵfac = function NodeFeeChartComponent_Factory(t) {
      return new (t || NodeFeeChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_2__.AmountShortenerPipe));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NodeFeeChartComponent,
      selectors: [["app-node-fee-chart"]],
      hostVars: 1,
      hostBindings: function NodeFeeChartComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("dir", ctx.dir);
        }
      },
      decls: 5,
      vars: 1,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-fee-distribution
           */
          const MSG_EXTERNAL_5747349158393283438$$SRC_APP_LIGHTNING_NODE_FEE_CHART_NODE_FEE_CHART_COMPONENT_TS_0 = goog.getMsg("Fee distribution");
          i18n_0 = MSG_EXTERNAL_5747349158393283438$$SRC_APP_LIGHTNING_NODE_FEE_CHART_NODE_FEE_CHART_COMPONENT_TS_0;
        } else {
          i18n_0 = "Rozk\u0142ad op\u0142at";
        }
        return [i18n_0, [1, "full-container"], ["class", "chart", "echarts", "", 3, "initOpts", "options", "chartInit", 4, "browserOnly"], ["class", "text-center loadingGraphs", 4, "ngIf"], ["echarts", "", 1, "chart", 3, "chartInit", "initOpts", "options"], [1, "text-center", "loadingGraphs"], [1, "spinner-border", "text-light"]];
      },
      template: function NodeFeeChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NodeFeeChartComponent_div_3_Template, 1, 2, "div", 2)(4, NodeFeeChartComponent_div_4_Template, 2, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_3__.BrowserOnlyDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_8__.NgxEchartsDirective],
      styles: [".full-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  min-height: 100%;\n  min-height: 450px;\n}", ".loadingGraphs[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 15px);\n      z-index: 99;\n    }"]
    });
  }
  return NodeFeeChartComponent;
})();

/***/ }),

/***/ 59880:
/*!************************************************************************************!*\
  !*** ./src/app/lightning/node-statistics-chart/node-statistics-chart.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeStatisticsChartComponent: () => (/* binding */ NodeStatisticsChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/storage.service */ 7368);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ 57021);











function NodeStatisticsChartComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chartInit", function NodeStatisticsChartComponent_div_1_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](!ctx_r1.widget ? "chart" : "chart-widget");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodeStatisticsChartComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let NodeStatisticsChartComponent = /*#__PURE__*/(() => {
  class NodeStatisticsChartComponent {
    constructor(locale, lightningApiService, storageService, stateService, activatedRoute) {
      this.locale = locale;
      this.lightningApiService = lightningApiService;
      this.storageService = storageService;
      this.stateService = stateService;
      this.activatedRoute = activatedRoute;
      this.right = 65;
      this.left = 45;
      this.widget = false;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
      this.dir = 'ltr';
      this.isLoading = true;
      this.formatNumber = _angular_common__WEBPACK_IMPORTED_MODULE_5__.formatNumber;
      this.timespan = '';
      this.chartInstance = undefined;
    }
    ngOnInit() {
      this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(params => {
        this.isLoading = true;
        return this.lightningApiService.listNodeStats$(params.get('public_key')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
          this.prepareChartOptions({
            channels: data.map(val => [val.added * 1000, val.channels]),
            capacity: data.map(val => [val.added * 1000, val.capacity])
          });
          this.isLoading = false;
        }));
      })).subscribe(() => {});
    }
    prepareChartOptions(data) {
      let title;
      if (data.channels.length < 2) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 15
          },
          text: "Brak danych do wy\u015Bwietlenia. Spr\xF3buj ponownie p\xF3\u017Aniej.",
          left: 'center',
          top: 'center'
        };
      }
      this.chartOptions = {
        title: title,
        animation: false,
        color: ['#FDD835', '#D81B60'],
        grid: {
          top: 30,
          bottom: 20,
          right: this.right,
          left: this.left
        },
        tooltip: {
          show: !this.isMobile(),
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          backgroundColor: 'rgba(17, 19, 31, 1)',
          borderRadius: 4,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          textStyle: {
            color: 'var(--tooltip-grey)',
            align: 'left'
          },
          borderColor: '#000',
          formatter: ticks => {
            let sizeString = '';
            let weightString = '';
            for (const tick of ticks) {
              if (tick.seriesIndex === 0) {
                // Channels
                sizeString = `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatNumber)(tick.data[1], this.locale, '1.0-0')}`;
              } else if (tick.seriesIndex === 1) {
                // Capacity
                weightString = `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatNumber)(tick.data[1] / 100000000, this.locale, '1.0-0')} BTC`;
              }
            }
            const date = new Date(ticks[0].data[0]).toLocaleDateString(this.locale, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            const tooltip = `<b style="color: white; margin-left: 18px">${date}</b><br>
            <span>${sizeString}</span><br>
            <span>${weightString}</span>`;
            return tooltip;
          }
        },
        xAxis: data.channels.length < 2 ? undefined : {
          type: 'time',
          splitNumber: this.isMobile() ? 5 : 10,
          axisLabel: {
            hideOverlap: true
          }
        },
        legend: data.channels.length < 2 ? undefined : {
          padding: 10,
          data: [{
            name: "Kana\u0142y",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Pojemno\u015B\u0107",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }],
          selected: JSON.parse(this.storageService.getValue('sizes_ln_legend')) ?? {
            'Channels': true,
            'Capacity': true
          }
        },
        yAxis: data.channels.length < 2 ? undefined : [{
          type: 'value',
          axisLabel: {
            color: 'rgb(110, 112, 121)',
            formatter: val => {
              return `${Math.round(val)}`;
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: 'var(--transparent-fg)',
              opacity: 0.25
            }
          }
        }, {
          type: 'value',
          position: 'right',
          axisLabel: {
            color: 'rgb(110, 112, 121)',
            formatter: val => {
              return `${val / 100000000} BTC`;
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: data.channels.length < 2 ? [] : [{
          zlevel: 1,
          name: "Kana\u0142y",
          showSymbol: false,
          symbol: 'none',
          data: data.channels,
          type: 'line',
          step: 'middle',
          lineStyle: {
            width: 2
          },
          markLine: {
            silent: true,
            symbol: 'none',
            lineStyle: {
              type: 'solid',
              color: 'var(--transparent-fg)',
              opacity: 1,
              width: 1
            }
          }
        }, {
          zlevel: 0,
          yAxisIndex: 1,
          name: "Pojemno\u015B\u0107",
          showSymbol: false,
          symbol: 'none',
          stack: 'Total',
          data: data.capacity,
          areaStyle: {},
          type: 'line',
          step: 'middle'
        }]
      };
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
      this.chartInstance.on('legendselectchanged', e => {
        this.storageService.setValue('sizes_ln_legend', JSON.stringify(e.selected));
      });
    }
    isMobile() {
      return window.innerWidth <= 767.98;
    }
    static #_ = this.ɵfac = function NodeStatisticsChartComponent_Factory(t) {
      return new (t || NodeStatisticsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NodeStatisticsChartComponent,
      selectors: [["app-node-statistics-chart"]],
      hostVars: 1,
      hostBindings: function NodeStatisticsChartComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("dir", ctx.dir);
        }
      },
      inputs: {
        publicKey: "publicKey",
        right: "right",
        left: "left",
        widget: "widget"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "full-container"], ["echarts", "", 3, "class", "initOpts", "options", "chartInit", 4, "browserOnly"], ["class", "text-center loadingGraphs", 4, "ngIf"], ["echarts", "", 3, "chartInit", "initOpts", "options"], [1, "text-center", "loadingGraphs"], [1, "spinner-border", "text-light"]],
      template: function NodeStatisticsChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NodeStatisticsChartComponent_div_1_Template, 1, 4, "div", 1)(2, NodeStatisticsChartComponent_div_2_Template, 2, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_3__.BrowserOnlyDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_8__.NgxEchartsDirective],
      styles: [".full-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  min-height: 100%;\n}", ".loadingGraphs[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 15px);\n      z-index: 99;\n    }"]
    });
  }
  return NodeStatisticsChartComponent;
})();

/***/ }),

/***/ 84932:
/*!************************************************************************!*\
  !*** ./src/app/lightning/node-statistics/node-statistics.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeStatisticsComponent: () => (/* binding */ NodeStatisticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _components_change_change_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/change/change.component */ 29480);






function NodeStatisticsComponent_div_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-fiat", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", statistics_r1.latest == null ? null : statistics_r1.latest.total_capacity);
  }
}
function NodeStatisticsComponent_div_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-change", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("current", statistics_r1.latest == null ? null : statistics_r1.latest.node_count)("previous", statistics_r1.previous == null ? null : statistics_r1.previous.node_count);
  }
}
function NodeStatisticsComponent_div_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-change", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statistics_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("current", statistics_r1.latest == null ? null : statistics_r1.latest.channel_count)("previous", statistics_r1.previous == null ? null : statistics_r1.previous.channel_count);
  }
}
function NodeStatisticsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 12)(6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NodeStatisticsComponent_div_0_span_8_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 10)(10, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](11, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 16)(13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NodeStatisticsComponent_div_0_span_16_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10)(18, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](19, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 17)(21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, NodeStatisticsComponent_div_0_span_24_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const statistics_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!statistics_r1.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableTooltip", !statistics_r1.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!statistics_r1.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("satoshis", statistics_r1.latest == null ? null : statistics_r1.latest.total_capacity)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", statistics_r1.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!statistics_r1.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableTooltip", !statistics_r1.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!statistics_r1.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 22, (statistics_r1.latest == null ? null : statistics_r1.latest.node_count) || 0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", statistics_r1.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!statistics_r1.previous ? "more-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableTooltip", !statistics_r1.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!statistics_r1.previous ? "no-border" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 24, (statistics_r1.latest == null ? null : statistics_r1.latest.channel_count) || 0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", statistics_r1.previous);
  }
}
function NodeStatisticsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "div", 10)(2, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 23)(6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10)(8, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](9, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 23)(12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](15, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 23)(18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
let NodeStatisticsComponent = /*#__PURE__*/(() => {
  class NodeStatisticsComponent {
    constructor() {}
    ngOnInit() {}
    static #_ = this.ɵfac = function NodeStatisticsComponent_Factory(t) {
      return new (t || NodeStatisticsComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NodeStatisticsComponent,
      selectors: [["app-node-statistics"]],
      inputs: {
        statistics$: "statistics$"
      },
      decls: 4,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.percentage-change-last-week
           */
          const MSG_EXTERNAL_9065098847325230593$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_0 = goog.getMsg("Percentage change past week");
          i18n_0 = MSG_EXTERNAL_9065098847325230593$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_0;
        } else {
          i18n_0 = "Zmiana procentowa w zesz\u0142ym tygodniu";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.percentage-change-last-week
           */
          const MSG_EXTERNAL_9065098847325230593$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_1 = goog.getMsg("Percentage change past week");
          i18n_1 = MSG_EXTERNAL_9065098847325230593$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_1;
        } else {
          i18n_1 = "Zmiana procentowa w zesz\u0142ym tygodniu";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.percentage-change-last-week
           */
          const MSG_EXTERNAL_9065098847325230593$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_2 = goog.getMsg("Percentage change past week");
          i18n_2 = MSG_EXTERNAL_9065098847325230593$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_2;
        } else {
          i18n_2 = "Zmiana procentowa w zesz\u0142ym tygodniu";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_3 = goog.getMsg("Capacity");
          i18n_3 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_3;
        } else {
          i18n_3 = "Pojemno\u015B\u0107";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_4 = goog.getMsg("Nodes");
          i18n_4 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_4;
        } else {
          i18n_4 = "W\u0119zly";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_5 = goog.getMsg("Channels");
          i18n_5 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_5;
        } else {
          i18n_5 = "Kana\u0142y";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_6 = goog.getMsg("Capacity");
          i18n_6 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_6;
        } else {
          i18n_6 = "Pojemno\u015B\u0107";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_7 = goog.getMsg("Nodes");
          i18n_7 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_7;
        } else {
          i18n_7 = "W\u0119zly";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_8 = goog.getMsg("Channels");
          i18n_8 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODE_STATISTICS_NODE_STATISTICS_COMPONENT_TS_8;
        } else {
          i18n_8 = "Kana\u0142y";
        }
        return [["loadingReward", ""], i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, ["class", "fee-estimation-wrapper", 4, "ngIf", "ngIfElse"], [1, "fee-estimation-wrapper"], [1, "fee-estimation-container"], [1, "item"], [1, "card-title"], ["ngbTooltip", i18n_0, "placement", "bottom", 1, "card-text", 3, "disableTooltip"], [1, "fee-text"], ["digitsInfo", "1.2-2", 3, "satoshis", "noFiat"], ["class", "fiat", 4, "ngIf"], ["ngbTooltip", i18n_1, 1, "card-text", 3, "disableTooltip"], ["ngbTooltip", i18n_2, 1, "card-text", 3, "disableTooltip"], [1, "fiat"], ["digitsInfo", "1.0-0", 3, "value"], [3, "current", "previous"], [1, "fee-estimation-container", "loading-container"], [1, "card-text"], [1, "skeleton-loader"]];
      },
      template: function NodeStatisticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NodeStatisticsComponent_div_0_Template, 25, 26, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NodeStatisticsComponent_ng_template_2_Template, 19, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const loadingReward_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.statistics$))("ngIfElse", loadingReward_r2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_0__.FiatComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_1__.AmountComponent, _components_change_change_component__WEBPACK_IMPORTED_MODULE_2__.ChangeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
      styles: [".card-title[_ngcontent-%COMP%] {\n  color: var(--title-fg);\n  font-size: 10px;\n  margin-bottom: 4px;\n  font-size: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  position: relative;\n  top: -2px;\n  display: inline-flex;\n}\n.card-text[_ngcontent-%COMP%]   .green-color[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fee-estimation-wrapper[_ngcontent-%COMP%] {\n  min-height: 77px;\n}\n\n.fee-estimation-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media (min-width: 376px) {\n  .fee-estimation-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  max-width: 150px;\n  margin: 0;\n  width: -webkit-fill-available;\n}\n@media (min-width: 376px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    margin: 0 auto 0px;\n  }\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item.more-padding[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  display: none;\n}\n@media (min-width: 485px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n    display: block;\n  }\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n  top: 0px;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .fee-text[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1098039216);\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  line-height: 1.45;\n  padding: 0px 2px;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .fee-text.no-border[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.fee-estimation-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .fiat[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px !important;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  min-height: 76px;\n}\n\n.card-text[_ngcontent-%COMP%]   .skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.card-text[_ngcontent-%COMP%]   .skeleton-loader[_ngcontent-%COMP%]:first-child {\n  max-width: 90px;\n  margin: 15px auto 3px;\n}\n.card-text[_ngcontent-%COMP%]   .skeleton-loader[_ngcontent-%COMP%]:last-child {\n  margin: 10px auto 3px;\n  max-width: 55px;\n}"],
      changeDetection: 0
    });
  }
  return NodeStatisticsComponent;
})();

/***/ }),

/***/ 96853:
/*!************************************************!*\
  !*** ./src/app/lightning/node/liquidity-ad.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseLiquidityAdHex: () => (/* binding */ parseLiquidityAdHex)
/* harmony export */ });
function parseLiquidityAdHex(compact_lease) {
  if (!compact_lease || compact_lease.length < 20 || compact_lease.length > 28) {
    return false;
  }
  try {
    const liquidityAd = {
      funding_weight: parseInt(compact_lease.slice(0, 4), 16),
      lease_fee_basis: parseInt(compact_lease.slice(4, 8), 16),
      channel_fee_max_rate: parseInt(compact_lease.slice(8, 12), 16),
      lease_fee_base_sat: parseInt(compact_lease.slice(12, 20), 16),
      channel_fee_max_base: compact_lease.length > 20 ? parseInt(compact_lease.slice(20), 16) : 0
    };
    if (Object.values(liquidityAd).reduce((valid, value) => valid && !isNaN(value) && value >= 0, true)) {
      liquidityAd.compact_lease = compact_lease;
      return liquidityAd;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}

/***/ }),

/***/ 82511:
/*!**********************************************************!*\
  !*** ./src/app/lightning/node/node-preview.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodePreviewComponent: () => (/* binding */ NodePreviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/opengraph.service */ 26857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/master-page-preview/preview-title.component */ 20570);
/* harmony import */ var _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/nodes-channels-map/nodes-channels-map.component */ 96984);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);













const _c0 = (a0, a1) => [a0, a1];
function NodePreviewComponent_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const socketType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](socketType_r1);
  }
}
function NodePreviewComponent_div_0_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](node_r2.city.en);
  }
}
function NodePreviewComponent_div_0_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", node_r2.country.en, " ", node_r2.flag, " ");
  }
}
function NodePreviewComponent_div_0_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function NodePreviewComponent_div_0_app_nodes_channels_map_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-nodes-channels-map", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("readyEvent", function NodePreviewComponent_div_0_app_nodes_channels_map_37_Template_app_nodes_channels_map_readyEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.onMapReady());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"]("nodepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publicKey", node_r2.public_key)("fitContainer", true)("placeholder", true)("hasLocation", !!node_r2.as_number)("disableSpinner", true);
  }
}
function NodePreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "app-preview-title")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 14)(7, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, NodePreviewComponent_div_0_span_10_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 17)(12, "div", 18)(13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "table", 20)(17, "tbody")(18, "tr")(19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](20, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "app-amount", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "tr")(24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](25, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "tr")(29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](30, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "app-amount", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, NodePreviewComponent_div_0_tr_33_Template, 6, 1, "tr", 22)(34, NodePreviewComponent_div_0_tr_34_Template, 5, 2, "tr", 22)(35, NodePreviewComponent_div_0_tr_35_Template, 6, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, NodePreviewComponent_div_0_app_nodes_channels_map_37_Template, 1, 7, "app-nodes-channels-map", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r2 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](node_r2.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.socketTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 13, "/lightning/node"), node_r2.public_key));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](node_r2.public_key);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("satoshis", node_r2.capacity)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", node_r2.active_channel_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("satoshis", node_r2.avgCapacity)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", node_r2.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", node_r2.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !node_r2.city && !node_r2.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.error);
  }
}
function NodePreviewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
let NodePreviewComponent = /*#__PURE__*/(() => {
  class NodePreviewComponent {
    constructor(lightningApiService, activatedRoute, seoService, openGraphService) {
      this.lightningApiService = lightningApiService;
      this.activatedRoute = activatedRoute;
      this.seoService = seoService;
      this.openGraphService = openGraphService;
      this.selectedSocketIndex = 0;
      this.qrCodeVisible = false;
      this.publicKeySize = 99;
      if ((0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
        this.publicKeySize = 12;
      }
    }
    ngOnInit() {
      this.node$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(params => {
        this.publicKey = params.get('public_key');
        this.ogSession = this.openGraphService.waitFor('node-map-' + this.publicKey);
        this.ogSession = this.openGraphService.waitFor('node-data-' + this.publicKey);
        return this.lightningApiService.getNode$(params.get('public_key'));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(node => {
        this.seoService.setTitle(`Node: ${node.alias}`);
        this.seoService.setDescription("Przegl\u0105d w\u0119z\u0142a sieci Lightning o nazwie " + node.alias + ". Zobacz kana\u0142y, pojemno\u015B\u0107, lokalizacj\u0119, statystyki op\u0142at i nie tylko.");
        const socketsObject = [];
        const socketTypesMap = {};
        for (const socket of node.sockets.split(',')) {
          if (socket === '') {
            continue;
          }
          let label = '';
          if (socket.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)) {
            label = 'IPv4';
          } else if (socket.indexOf('[') > -1) {
            label = 'IPv6';
          } else if (socket.indexOf('onion') > -1) {
            label = 'Tor';
          }
          node.flag = (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__.getFlagEmoji)(node.iso_code);
          socketsObject.push({
            label: label,
            socket: node.public_key + '@' + socket
          });
          socketTypesMap[label] = true;
        }
        node.socketsObject = socketsObject;
        this.socketTypes = Object.keys(socketTypesMap);
        node.avgCapacity = node.capacity / Math.max(1, node.active_channel_count);
        this.openGraphService.waitOver({
          event: 'node-data-' + this.publicKey,
          sessionId: this.ogSession
        });
        return node;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
        this.error = err;
        this.seoService.logSoft404();
        this.openGraphService.fail({
          event: 'node-map-' + this.publicKey,
          sessionId: this.ogSession
        });
        this.openGraphService.fail({
          event: 'node-data-' + this.publicKey,
          sessionId: this.ogSession
        });
        return [{
          alias: this.publicKey,
          public_key: this.publicKey
        }];
      }));
    }
    changeSocket(index) {
      this.selectedSocketIndex = index;
    }
    onChannelsListStatusChanged(e) {
      this.channelsListStatus = e;
    }
    onMapReady() {
      this.openGraphService.waitOver({
        event: 'node-map-' + this.publicKey,
        sessionId: this.ogSession
      });
    }
    static #_ = this.ɵfac = function NodePreviewComponent_Factory(t) {
      return new (t || NodePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_1__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_3__.OpenGraphService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: NodePreviewComponent,
      selectors: [["app-node-preview"]],
      decls: 3,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node
           */
          const MSG_EXTERNAL_1750520787245156853$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_0 = goog.getMsg("Lightning node");
          i18n_0 = MSG_EXTERNAL_1750520787245156853$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_0;
        } else {
          i18n_0 = "W\u0119ze\u0142 lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-capacity
           */
          const MSG_EXTERNAL_3714579052384911155$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_1 = goog.getMsg("Active capacity");
          i18n_1 = MSG_EXTERNAL_3714579052384911155$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_1;
        } else {
          i18n_1 = "Aktywna pojemno\u015B\u0107";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-channels
           */
          const MSG_EXTERNAL_3405348321947937732$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_2 = goog.getMsg("Active channels");
          i18n_2 = MSG_EXTERNAL_3405348321947937732$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_2;
        } else {
          i18n_2 = "Aktywne kana\u0142y";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.avg-size
           */
          const MSG_EXTERNAL_3402158431296516222$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_3 = goog.getMsg("Average size");
          i18n_3 = MSG_EXTERNAL_3402158431296516222$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_3;
        } else {
          i18n_3 = "\u015Aredni rozmiar";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_4 = goog.getMsg("Location");
          i18n_4 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_4;
        } else {
          i18n_4 = "Lokalizacja";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc country
           */
          const MSG_EXTERNAL_516176798986294299$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_5 = goog.getMsg("Country");
          i18n_5 = MSG_EXTERNAL_516176798986294299$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_5;
        } else {
          i18n_5 = "Pa\u0144stwo";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_6 = goog.getMsg("Location");
          i18n_6 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_6;
        } else {
          i18n_6 = "Lokalizacja";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc unknown
           */
          const MSG_EXTERNAL_4467323362722952678$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_7 = goog.getMsg("Unknown");
          i18n_7 = MSG_EXTERNAL_4467323362722952678$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_7;
        } else {
          i18n_7 = "Nieznany";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc error.general-loading-data
           */
          const MSG_EXTERNAL_2612543646528354459$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_8 = goog.getMsg("Error loading data.");
          i18n_8 = MSG_EXTERNAL_2612543646528354459$$SRC_APP_LIGHTNING_NODE_NODE_PREVIEW_COMPONENT_TS_8;
        } else {
          i18n_8 = "B\u0142\u0105d \u0142adowania danych.";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, ["class", "box preview-box", 4, "ngIf"], [3, "ngIf"], [1, "box", "preview-box"], [1, "row", "d-flex", "justify-content-between", "full-width-row"], [1, "title"], [1, "title-wrapper"], [1, "badges", "mb-2"], ["class", "badge rounded-pill badge-success", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md", "table-col"], [1, "subtitle", 3, "routerLink"], [1, "table", "table-borderless", "table-striped"], [3, "satoshis", "noFiat"], [4, "ngIf"], [1, "col-md", "map-col"], [3, "style", "publicKey", "fitContainer", "placeholder", "hasLocation", "disableSpinner", "readyEvent", 4, "ngIf"], [1, "badge", "rounded-pill", "badge-success"], [3, "readyEvent", "publicKey", "fitContainer", "placeholder", "hasLocation", "disableSpinner"], [1, "text-center"]];
      },
      template: function NodePreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, NodePreviewComponent_div_0_Template, 38, 18, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NodePreviewComponent_ng_template_2_Template, 3, 0, "ng-template", 10);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx.node$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__.AmountComponent, _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_5__.PreviewTitleComponent, _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_6__.NodesChannelsMap, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__.RelativeUrlPipe],
      styles: [".table-col[_ngcontent-%COMP%] {\n  max-width: calc(100% - 470px);\n  overflow: hidden;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 32px;\n}\n\n.badges[_ngcontent-%COMP%] {\n  font-size: 28px;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: baseline;\n  justify-content: flex-end;\n}\n.badges[_ngcontent-%COMP%]     .badge {\n  margin-left: 0.5em;\n}\n\n.map-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 470px;\n  height: 408px;\n  min-width: 470px;\n  min-height: 408px;\n  max-height: 408px;\n  padding: 0;\n  background: var(--stat-box-bg);\n  overflow: hidden;\n  margin-top: 6px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.full-width-row[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  flex-wrap: nowrap;\n}\n\n  .symbol {\n  font-size: 24px;\n}"],
      changeDetection: 0
    });
  }
  return NodePreviewComponent;
})();

/***/ }),

/***/ 68642:
/*!**************************************************!*\
  !*** ./src/app/lightning/node/node.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeComponent: () => (/* binding */ NodeComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _app_lightning_node_liquidity_ad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/node/liquidity-ad */ 96853);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/services-api.service */ 1598);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/clipboard/clipboard.component */ 97338);
/* harmony import */ var _components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/qrcode/qrcode.component */ 97824);
/* harmony import */ var _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/components/sats/sats.component */ 85852);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/components/geolocation/geolocation.component */ 23456);
/* harmony import */ var _app_lightning_node_statistics_chart_node_statistics_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/lightning/node-statistics-chart/node-statistics-chart.component */ 59880);
/* harmony import */ var _app_lightning_node_fee_chart_node_fee_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/lightning/node-fee-chart/node-fee-chart.component */ 52778);
/* harmony import */ var _app_lightning_channels_list_channels_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/lightning/channels-list/channels-list.component */ 36560);
/* harmony import */ var _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/lightning/nodes-channels-map/nodes-channels-map.component */ 96984);
/* harmony import */ var _app_lightning_nodes_channels_node_channels_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/lightning/nodes-channels/node-channels.component */ 35813);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_pipes_bytes_pipe_wubytes_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/shared/pipes/bytes-pipe/wubytes.pipe */ 94371);
/* harmony import */ var _app_shared_pipes_shorten_string_pipe_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/shared/pipes/shorten-string-pipe/shorten-string.pipe */ 49861);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);



























const _c0 = (a0, a1) => [a0, a1];
const _c1 = a0 => ({
  "color": a0
});
const _c2 = a0 => ({
  bits: a0
});
const _c3 = () => ["fas", "qrcode"];
function NodeComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 46)(4, "div", 47)(5, "h1", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 49)(8, "span", 50)(9, "app-truncate", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "app-clipboard", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](node_r1.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("text", node_r1.public_key)("lastChars", 8)("link", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](10, 5, "/lightning/node"), node_r1.public_key));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("text", node_r1.public_key);
  }
}
function NodeComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 53)(1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "shortenString");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("No node found for public key \"", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 1, node_r1.public_key, 12), "\"");
  }
}
function NodeComponent_div_0_div_4_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "app-geolocation", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("data", node_r1.geolocation)("type", "node");
  }
}
function NodeComponent_div_0_div_4_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function NodeComponent_div_0_div_4_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "km");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "mi");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const avgDistance_r2 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 2, avgDistance_r2, 1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](11, 5, ctx_r2.kmToMiles(avgDistance_r2), 1), " ");
  }
}
function NodeComponent_div_0_div_4_tr_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function NodeComponent_div_0_div_4_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, NodeComponent_div_0_div_4_tr_27_ng_container_1_Template, 1, 0, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const featurebits_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", featurebits_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](2, _c2, node_r1.featuresBits));
  }
}
function NodeComponent_div_0_div_4_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 3, "/lightning/nodes/isp"), node_r1.as_number));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", node_r1.as_organization, " [ASN ", node_r1.as_number, "] ");
  }
}
function NodeComponent_div_0_div_4_ng_template_52_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function NodeComponent_div_0_div_4_ng_template_52_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function NodeComponent_div_0_div_4_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, NodeComponent_div_0_div_4_ng_template_52_td_0_Template, 3, 0, "td", 37)(1, NodeComponent_div_0_div_4_ng_template_52_td_1_Template, 3, 0, "td", 37);
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.clearnetSocketCount === 0 && ctx_r2.torSocketCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", node_r1.sockets.length === 0);
  }
}
function NodeComponent_div_0_div_4_tr_54_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function NodeComponent_div_0_div_4_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, NodeComponent_div_0_div_4_tr_54_ng_container_1_Template, 1, 0, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const featurebits_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", featurebits_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](2, _c2, node_r1.featuresBits));
  }
}
function NodeComponent_div_0_div_4_tr_55_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function NodeComponent_div_0_div_4_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, NodeComponent_div_0_div_4_tr_55_ng_container_1_Template, 1, 0, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const featurebits_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", featurebits_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](2, _c2, node_r1.featuresBits));
  }
}
function NodeComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "table", 58)(4, "tbody")(5, "tr")(6, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "app-sats", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "tr")(11, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](12, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "tr")(16, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](17, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](19, "app-sats", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "tr")(21, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](22, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](23, NodeComponent_div_0_div_4_td_23_Template, 2, 2, "td", 37)(24, NodeComponent_div_0_div_4_td_24_Template, 3, 0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, NodeComponent_div_0_div_4_tr_25_Template, 14, 8, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](27, NodeComponent_div_0_div_4_tr_27_Template, 2, 4, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 57)(30, "table", 58)(31, "tbody")(32, "tr")(33, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](34, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](36, "app-timestamp", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "tr")(38, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](39, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](41, "app-timestamp", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "tr")(43, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](44, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "td")(46, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "tr")(49, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](50, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](51, NodeComponent_div_0_div_4_td_51_Template, 4, 8, "td", 67)(52, NodeComponent_div_0_div_4_ng_template_52_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](54, NodeComponent_div_0_div_4_tr_54_Template, 2, 4, "tr", 37)(55, NodeComponent_div_0_div_4_tr_55_Template, 2, 4, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const unknownAS_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](53);
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("satoshis", node_r1.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", node_r1.active_channel_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("satoshis", node_r1.avgCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", node_r1.geolocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !node_r1.geolocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](26, 15, ctx_r2.avgChannelDistance$));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !node_r1.geolocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("unixTime", node_r1.first_seen);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("unixTime", node_r1.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](17, _c1, node_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](node_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", node_r1.as_number)("ngIfElse", unknownAS_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", node_r1.geolocation && node_r1.featuresBits);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !node_r1.geolocation && node_r1.featuresBits);
  }
}
function NodeComponent_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "td", 78)(3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function NodeComponent_div_0_ng_template_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.toggleFeatures());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](6, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bits_r7 = ctx.bits;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](bits_r7);
  }
}
function NodeComponent_div_0_div_7_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](feature_r8.bit);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](feature_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](feature_r8.is_required);
  }
}
function NodeComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 81)(1, "div", 56)(2, "div", 57)(3, "div", 82)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Raw bits");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 83)(7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](10, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "table", 58)(12, "thead")(13, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Bit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](16, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, NodeComponent_div_0_div_7_tr_20_Template, 7, 3, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](node_r1.featuresBits);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", node_r1.features);
  }
}
function NodeComponent_div_0_div_8_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function NodeComponent_div_0_div_8_div_1_button_6_Template_button_click_0_listener() {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r12).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.changeSocket(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const socket_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](socket_r14.label);
  }
}
function NodeComponent_div_0_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 95, 4)(2, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("focus", function NodeComponent_div_0_div_8_div_1_Template_button_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r10);
      const myDrop_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](myDrop_r11.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, NodeComponent_div_0_div_8_div_1_button_6_Template, 2, 1, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](node_r1.socketsObject[ctx_r2.selectedSocketIndex].label);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", node_r1.socketsObject);
  }
}
function NodeComponent_div_0_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](node_r1.socketsObject[ctx_r2.selectedSocketIndex].label);
  }
}
function NodeComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, NodeComponent_div_0_div_8_div_1_Template, 7, 2, "div", 88)(2, NodeComponent_div_0_div_8_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("mouseover", function NodeComponent_div_0_div_8_Template_button_mouseover_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.qrCodeVisible = true);
    })("mouseout", function NodeComponent_div_0_div_8_Template_button_mouseout_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.qrCodeVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "fa-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "app-qrcode", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "app-clipboard", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const noDropdown_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3);
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", node_r1.socketsObject.length > 1)("ngIfElse", noDropdown_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", node_r1.socketsObject[ctx_r2.selectedSocketIndex].socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](11, _c3))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", !ctx_r2.qrCodeVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 200)("data", node_r1.socketsObject[ctx_r2.selectedSocketIndex].socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("button", true)("text", node_r1.socketsObject[ctx_r2.selectedSocketIndex].socket)("leftPadding", false);
  }
}
function NodeComponent_div_0_div_9_ng_template_2_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](4, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, ctx_r2.liquidityAd.channel_fee_max_base, 0), " ");
  }
}
function NodeComponent_div_0_div_9_ng_template_2_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function NodeComponent_div_0_div_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 104)(1, "h5", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 56)(4, "div", 57)(5, "table", 105)(6, "tbody")(7, "tr")(8, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](9, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "td")(11, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](13, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](16, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "tr")(18, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](19, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](21, "app-sats", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "tr")(23, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](26, "wuBytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 57)(28, "table", 105)(29, "tbody")(30, "tr")(31, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](32, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "td")(34, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](36, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](39, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "tr")(41, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](42, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](44, NodeComponent_div_0_div_9_ng_template_2_span_44_Template, 5, 4, "span", 37)(45, NodeComponent_div_0_div_9_ng_template_2_span_45_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "tr")(47, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](48, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r2.liquidityAd.lease_fee_basis !== null ? _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind4"](13, 10, ctx_r2.liquidityAd.lease_fee_basis * 1000, 2, undefined, true) : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("ppm ", ctx_r2.liquidityAd.lease_fee_basis !== null ? "(" + _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind4"](16, 15, ctx_r2.liquidityAd.lease_fee_basis / 10, 2, undefined, true) + "%)" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("valueOverride", ctx_r2.liquidityAd.lease_fee_base_sat === null ? "- " : undefined)("satoshis", ctx_r2.liquidityAd.lease_fee_base_sat);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", "\u200E" + _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](26, 20, ctx_r2.liquidityAd.funding_weight, 2), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r2.liquidityAd.channel_fee_max_rate !== null ? _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind4"](36, 23, ctx_r2.liquidityAd.channel_fee_max_rate * 1000, 2, undefined, true) : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("ppm ", ctx_r2.liquidityAd.channel_fee_max_rate !== null ? "(" + _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind4"](39, 28, ctx_r2.liquidityAd.channel_fee_max_rate / 10, 2, undefined, true) + "%)" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.liquidityAd.channel_fee_max_base !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.liquidityAd.channel_fee_max_base === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r2.liquidityAd.compact_lease);
  }
}
function NodeComponent_div_0_div_9_ng_template_3_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const recordItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](recordItem_r16.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](recordItem_r16.payload);
  }
}
function NodeComponent_div_0_div_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 104)(1, "h5", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 56)(4, "div", 111)(5, "table", 105)(6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, NodeComponent_div_0_div_9_ng_template_3_tr_7_Template, 5, 2, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r2.tlvRecords);
  }
}
function NodeComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 102)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, NodeComponent_div_0_div_9_ng_template_2_Template, 51, 33, "ng-template", 103)(3, NodeComponent_div_0_div_9_ng_template_3_Template, 8, 1, "ng-template", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", !ctx_r2.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.liquidityAd);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.tlvRecords == null ? null : ctx_r2.tlvRecords.length);
  }
}
function NodeComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 114)(1, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function NodeComponent_div_0_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.toggleShowDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function NodeComponent_div_0_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 56)(1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "app-nodes-channels-map", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "app-node-statistics-chart", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleMap"]("nodepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("publicKey", node_r1.public_key)("hasLocation", !!node_r1.as_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("publicKey", node_r1.public_key);
  }
}
function NodeComponent_div_0_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "app-node-statistics-chart", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("publicKey", node_r1.public_key);
  }
}
function NodeComponent_div_0_div_11_h2_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h2")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" (", node_r1.opened_channel_count, ")");
  }
}
function NodeComponent_div_0_div_11_h2_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h2")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" (", node_r1.closed_channel_count, ")");
  }
}
function NodeComponent_div_0_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "div", 125);
  }
}
function NodeComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, NodeComponent_div_0_div_11_div_1_Template, 5, 5, "div", 116)(2, NodeComponent_div_0_div_11_div_2_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "app-node-channels", 117)(4, "app-node-fee-chart", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, NodeComponent_div_0_div_11_h2_6_Template, 5, 1, "h2", 37)(7, NodeComponent_div_0_div_11_h2_7_Template, 5, 1, "h2", 37)(8, NodeComponent_div_0_div_11_div_8_Template, 1, 0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "app-channels-list", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("channelsStatusChangedEvent", function NodeComponent_div_0_div_11_Template_app_channels_list_channelsStatusChangedEvent_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.onChannelsListStatusChanged($event));
    })("loadingEvent", function NodeComponent_div_0_div_11_Template_app_channels_list_loadingEvent_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.onLoadingEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", node_r1.as_number && node_r1.active_channel_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !node_r1.as_number || !node_r1.active_channel_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("publicKey", node_r1.public_key);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.channelsListStatus === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.channelsListStatus === "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.channelListLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("publicKey", node_r1.public_key);
  }
}
function NodeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, NodeComponent_div_0_ng_container_1_Template, 12, 10, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, NodeComponent_div_0_div_3_Template, 4, 4, "div", 39)(4, NodeComponent_div_0_div_4_Template, 56, 19, "div", 40)(5, NodeComponent_div_0_ng_template_5_Template, 7, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"])(7, NodeComponent_div_0_div_7_Template, 21, 2, "div", 41)(8, NodeComponent_div_0_div_8_Template, 10, 12, "div", 42)(9, NodeComponent_div_0_div_9_Template, 4, 3, "div", 43)(10, NodeComponent_div_0_div_10_Template, 3, 0, "div", 44)(11, NodeComponent_div_0_div_11_Template, 10, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r2.error && ctx_r2.showFeatures);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r2.error && node_r1.socketsObject.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.hasDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.hasDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r2.error);
  }
}
function NodeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 36)(1, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 46)(4, "h1", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 55)(10, "div", 56)(11, "div", 57)(12, "table", 105)(13, "tbody")(14, "tr")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](18, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "tr")(20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](21, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](23, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "tr")(25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](26, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "tr")(30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](31, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](33, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](34, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 57)(36, "table", 105)(37, "tbody")(38, "tr")(39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](40, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](42, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "tr")(44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](45, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](47, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "tr")(49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](50, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](52, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "tr")(54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](55, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](57, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](58, "div", 87)(59, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](60, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](61, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](63, "fa-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](64, "app-clipboard", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](66, "div", 56)(67, "div", 122)(68, "div", 135)(69, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](70, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](71, "div", 122)(72, "div", 135)(73, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](74, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c3))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("button", true)("text", "");
  }
}
let NodeComponent = /*#__PURE__*/(() => {
  class NodeComponent {
    constructor(apiService, servicesApiService, lightningApiService, activatedRoute, seoService, cd) {
      this.apiService = apiService;
      this.servicesApiService = servicesApiService;
      this.lightningApiService = lightningApiService;
      this.activatedRoute = activatedRoute;
      this.seoService = seoService;
      this.cd = cd;
      this.selectedSocketIndex = 0;
      this.qrCodeVisible = false;
      this.channelListLoading = false;
      this.clearnetSocketCount = 0;
      this.torSocketCount = 0;
      this.hasDetails = false;
      this.showDetails = false;
      this.showFeatures = false;
      this.kmToMiles = _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.kmToMiles;
    }
    ngOnInit() {
      this.node$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(params => {
        this.publicKey = params.get('public_key');
        this.tlvRecords = [];
        this.liquidityAd = null;
        return this.lightningApiService.getNode$(params.get('public_key'));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(node => {
        this.seoService.setTitle("W\u0119ze\u0142: " + node.alias + "");
        this.seoService.setDescription("Przegl\u0105d w\u0119z\u0142a sieci Lightning o nazwie " + node.alias + ". Zobacz kana\u0142y, pojemno\u015B\u0107, lokalizacj\u0119, statystyki op\u0142at i nie tylko.");
        this.clearnetSocketCount = 0;
        this.torSocketCount = 0;
        const socketsObject = [];
        for (const socket of node.sockets.split(',')) {
          if (socket === '') {
            continue;
          }
          let label = '';
          if (socket.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)) {
            label = 'IPv4';
            this.clearnetSocketCount++;
          } else if (socket.indexOf('[') > -1) {
            label = 'IPv6';
            this.clearnetSocketCount++;
          } else if (socket.indexOf('onion') > -1) {
            label = 'Tor';
            this.torSocketCount++;
          }
          socketsObject.push({
            label: label,
            socket: node.public_key + '@' + socket
          });
        }
        node.socketsObject = socketsObject;
        node.avgCapacity = node.capacity / Math.max(1, node.active_channel_count);
        if (!node?.country && !node?.city && !node?.subdivision && !node?.iso) {
          node.geolocation = null;
        } else {
          node.geolocation = {
            country: node.country?.en,
            city: node.city?.en,
            subdivision: node.subdivision?.en,
            iso: node.iso_code
          };
        }
        return node;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(node => {
        this.hasDetails = Object.keys(node.custom_records).length > 0;
        for (const [type, payload] of Object.entries(node.custom_records)) {
          if (typeof payload !== 'string') {
            break;
          }
          let parsed = false;
          if (type === '1') {
            const ad = (0,_app_lightning_node_liquidity_ad__WEBPACK_IMPORTED_MODULE_0__.parseLiquidityAdHex)(payload);
            if (ad) {
              parsed = true;
              this.liquidityAd = ad;
            }
          }
          if (!parsed) {
            this.tlvRecords.push({
              type,
              payload
            });
          }
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.catchError)(err => {
        this.error = err;
        this.seoService.logSoft404();
        return [{
          alias: this.publicKey,
          public_key: this.publicKey
        }];
      }));
      this.avgChannelDistance$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(params => {
        return this.apiService.getChannelsGeo$(params.get('public_key'), 'nodepage');
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(channelsGeo => {
        if (channelsGeo?.length) {
          const totalDistance = channelsGeo.reduce((sum, chan) => {
            return sum + (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.haversineDistance)(chan[3], chan[2], chan[7], chan[6]);
          }, 0);
          return totalDistance / channelsGeo.length;
        } else {
          return null;
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.catchError)(() => {
        return null;
      }));
    }
    toggleShowDetails() {
      this.showDetails = !this.showDetails;
    }
    changeSocket(index) {
      this.selectedSocketIndex = index;
    }
    onChannelsListStatusChanged(e) {
      this.channelsListStatus = e;
    }
    onLoadingEvent(e) {
      this.channelListLoading = e;
    }
    toggleFeatures() {
      this.showFeatures = !this.showFeatures;
      return false;
    }
    static #_ = this.ɵfac = function NodeComponent_Factory(t) {
      return new (t || NodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_app_services_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ServicesApiServices), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_4__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
      type: NodeComponent,
      selectors: [["app-node"]],
      decls: 4,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node
           */
          const MSG_EXTERNAL_1750520787245156853$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_0 = goog.getMsg("Lightning node");
          i18n_0 = MSG_EXTERNAL_1750520787245156853$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_0;
        } else {
          i18n_0 = "W\u0119ze\u0142 lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-capacity
           */
          const MSG_EXTERNAL_3714579052384911155$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_1 = goog.getMsg("Active capacity");
          i18n_1 = MSG_EXTERNAL_3714579052384911155$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_1;
        } else {
          i18n_1 = "Aktywna pojemno\u015B\u0107";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-channels
           */
          const MSG_EXTERNAL_3405348321947937732$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_2 = goog.getMsg("Active channels");
          i18n_2 = MSG_EXTERNAL_3405348321947937732$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_2;
        } else {
          i18n_2 = "Aktywne kana\u0142y";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-channels-avg
           */
          const MSG_EXTERNAL_4993603209982194516$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_3 = goog.getMsg("Average channel size");
          i18n_3 = MSG_EXTERNAL_4993603209982194516$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_3;
        } else {
          i18n_3 = "\u015Aredni rozmiar kana\u0142u";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_4 = goog.getMsg("Location");
          i18n_4 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_4;
        } else {
          i18n_4 = "Lokalizacja";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction first seen
           * @meaning transaction.first-seen
           */
          const MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_5 = goog.getMsg("First seen");
          i18n_5 = MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_5;
        } else {
          i18n_5 = "Widziana pierwszy raz";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.last_update
           */
          const MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_6 = goog.getMsg("Last update");
          i18n_6 = MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_6;
        } else {
          i18n_6 = "Ostatnia aktualizacja";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.color
           */
          const MSG_EXTERNAL_9011959596901584887$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_7 = goog.getMsg("Color");
          i18n_7 = MSG_EXTERNAL_9011959596901584887$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_7;
        } else {
          i18n_7 = "Kolor";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc isp
           */
          const MSG_EXTERNAL_6534480732067499471$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_8 = goog.getMsg("ISP");
          i18n_8 = MSG_EXTERNAL_6534480732067499471$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_8;
        } else {
          i18n_8 = "ISP";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc unknown
           */
          const MSG_EXTERNAL_4467323362722952678$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_9 = goog.getMsg("Unknown");
          i18n_9 = MSG_EXTERNAL_4467323362722952678$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_9;
        } else {
          i18n_9 = "Nieznany";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.avg-distance
           */
          const MSG_EXTERNAL_798395072229732501$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_10 = goog.getMsg("Avg channel distance");
          i18n_10 = MSG_EXTERNAL_798395072229732501$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_10;
        } else {
          i18n_10 = "\u015Ar. oddalenie kana\u0142\xF3w";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc tor
           */
          const MSG_EXTERNAL_1581288411240815305$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_11 = goog.getMsg("Exclusively on Tor");
          i18n_11 = MSG_EXTERNAL_1581288411240815305$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_11;
        } else {
          i18n_11 = "Wy\u0142\u0105cznie na sieci Tor";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc unknown
           */
          const MSG_EXTERNAL_4467323362722952678$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_12 = goog.getMsg("Unknown");
          i18n_12 = MSG_EXTERNAL_4467323362722952678$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_12;
        } else {
          i18n_12 = "Nieznany";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction features
           * @meaning transaction.features
           */
          const MSG_EXTERNAL_4608339192901335312$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_13 = goog.getMsg("Features");
          i18n_13 = MSG_EXTERNAL_4608339192901335312$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_13;
        } else {
          i18n_13 = "Cechy";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction Details
           * @meaning transaction.details
           */
          const MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_14 = goog.getMsg("Details");
          i18n_14 = MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_14;
        } else {
          i18n_14 = "Szczeg\xF3\u0142y";
        }
        let i18n_15;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Decoded
           * @meaning lightning.decoded
           */
          const MSG_EXTERNAL_8727704113130348780$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_15 = goog.getMsg("Decoded");
          i18n_15 = MSG_EXTERNAL_8727704113130348780$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_15;
        } else {
          i18n_15 = "Zdekodowane";
        }
        let i18n_16;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.as-name
           */
          const MSG_EXTERNAL_8953033926734869941$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_16 = goog.getMsg("Name");
          i18n_16 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_16;
        } else {
          i18n_16 = "Nazwa";
        }
        let i18n_17;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc node.liquidity-ad
           */
          const MSG_EXTERNAL_3182431702472816712$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_17 = goog.getMsg("Liquidity ad");
          i18n_17 = MSG_EXTERNAL_3182431702472816712$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_17;
        } else {
          i18n_17 = "Reklama p\u0142ynno\u015Bci";
        }
        let i18n_18;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Liquidity ad lease fee rate
           * @meaning liquidity-ad.lease-fee-rate
           */
          const MSG_EXTERNAL_7960101312207899200$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_18 = goog.getMsg("Lease fee rate");
          i18n_18 = MSG_EXTERNAL_7960101312207899200$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_18;
        } else {
          i18n_18 = "Stawka op\u0142at dzier\u017Cawy";
        }
        let i18n_19;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquidity-ad.lease-base-fee
           */
          const MSG_EXTERNAL_6400312484233105935$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_19 = goog.getMsg("Lease base fee");
          i18n_19 = MSG_EXTERNAL_6400312484233105935$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_19;
        } else {
          i18n_19 = "Op\u0142ata bazowa dzier\u017Cawy";
        }
        let i18n_20;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquidity-ad.funding-weight
           */
          const MSG_EXTERNAL_4941722435222111062$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_20 = goog.getMsg("Funding weight");
          i18n_20 = MSG_EXTERNAL_4941722435222111062$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_20;
        } else {
          i18n_20 = "Blok finansuj\u0105cy";
        }
        let i18n_21;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Liquidity ad channel fee rate
           * @meaning liquidity-ad.channel-fee-rate
           */
          const MSG_EXTERNAL_3069875101155439052$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_21 = goog.getMsg("Channel fee rate");
          i18n_21 = MSG_EXTERNAL_3069875101155439052$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_21;
        } else {
          i18n_21 = "Stawka op\u0142at kana\u0142u";
        }
        let i18n_22;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquidity-ad.channel-base-fee
           */
          const MSG_EXTERNAL_6046423735271311226$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_22 = goog.getMsg("Channel base fee");
          i18n_22 = MSG_EXTERNAL_6046423735271311226$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_22;
        } else {
          i18n_22 = "Op\u0142ata bazowa kana\u0142u";
        }
        let i18n_23;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc liquidity-ad.compact-lease
           */
          const MSG_EXTERNAL_1582985559984399930$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_23 = goog.getMsg("Compact lease");
          i18n_23 = MSG_EXTERNAL_1582985559984399930$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_23;
        } else {
          i18n_23 = "Kompaktowa dzier\u017Cawa";
        }
        let i18n_24;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.m-sats
           */
          const MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_24 = goog.getMsg("mSats");
          i18n_24 = MSG_EXTERNAL_4044107193979978209$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_24;
        } else {
          i18n_24 = "mSats";
        }
        let i18n_25;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc node.tlv.records
           */
          const MSG_EXTERNAL_4901039688092133733$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_25 = goog.getMsg("TLV extension records");
          i18n_25 = MSG_EXTERNAL_4901039688092133733$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_25;
        } else {
          i18n_25 = "Rekordy rozszerze\u0144 TLV";
        }
        let i18n_26;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction Details
           * @meaning transaction.details
           */
          const MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_26 = goog.getMsg("Details");
          i18n_26 = MSG_EXTERNAL_283587625204414083$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_26;
        } else {
          i18n_26 = "Szczeg\xF3\u0142y";
        }
        let i18n_27;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.open-channels
           */
          const MSG_EXTERNAL_7107737488680414201$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_27 = goog.getMsg("Open channels");
          i18n_27 = MSG_EXTERNAL_7107737488680414201$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_27;
        } else {
          i18n_27 = "Otwarte kana\u0142y";
        }
        let i18n_28;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.open-channels
           */
          const MSG_EXTERNAL_1505008836564619877$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_28 = goog.getMsg("Closed channels");
          i18n_28 = MSG_EXTERNAL_1505008836564619877$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_28;
        } else {
          i18n_28 = "Zamkni\u0119te kana\u0142y";
        }
        let i18n_29;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node
           */
          const MSG_EXTERNAL_1750520787245156853$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_29 = goog.getMsg("Lightning node");
          i18n_29 = MSG_EXTERNAL_1750520787245156853$$SRC_APP_LIGHTNING_NODE_NODE_COMPONENT_TS_29;
        } else {
          i18n_29 = "W\u0119ze\u0142 lightning";
        }
        return [["skeletonLoader", ""], ["featurebits", ""], ["unknownAS", ""], ["noDropdown", ""], ["myDrop", "ngbDropdown"], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_17, i18n_18, i18n_19, i18n_20, i18n_21, i18n_22, i18n_23, i18n_24, i18n_25, i18n_26, i18n_27, i18n_28, i18n_29, ["class", "container-xl", 4, "ngIf", "ngIfElse"], [1, "container-xl"], [4, "ngIf"], [1, "clearfix"], ["class", "d-flex flex-column justify-content-around align-items-center mt-5 w-100", "style", "min-height: 100px", 4, "ngIf"], ["class", "box", 4, "ngIf"], ["class", "box mt-2", 4, "ngIf"], ["class", "input-group mt-3", 4, "ngIf"], ["id", "details", "class", "details mt-3", 3, "hidden", 4, "ngIf"], ["class", "text-right mt-3", 4, "ngIf"], [1, "mb-0", 2, "color", "var(--transparent-fg)"], [1, "title-container", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0", "text-truncate"], [1, "tx-link", "justify-content-between", "align-items-center"], [1, "node-id"], [3, "text", "lastChars", "link"], [3, "text"], [1, "d-flex", "flex-column", "justify-content-around", "align-items-center", "mt-5", "w-100", 2, "min-height", "100px"], [1, "text-center"], [1, "box"], [1, "row"], [1, "col-md"], [1, "table", "table-borderless", "table-striped", "table-fixed"], [1, "text-truncate", "label"], [3, "satoshis"], [1, "text-wrap", "label"], [1, "text-truncate"], ["class", "d-none d-md-table-row", 4, "ngIf"], [1, "w-100", "d-block", "d-md-none"], [3, "unixTime"], [3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["class", "d-table-row d-md-none", 4, "ngIf"], [3, "data", "type"], [1, "direction-ltr"], [1, "symbol"], [1, "separator"], [1, "d-none", "d-md-table-row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-block", "text-wrap", 3, "routerLink"], ["placement", "bottom", 1, "badge", "badge-success"], [1, "d-table-row", "d-md-none"], [1, "d-flex", "justify-content-between"], [1, "text-truncate", "w-90"], ["type", "button", 1, "btn", "btn-outline-info", "btn-xs", 3, "click"], [1, "box", "mt-2"], [1, "mb-3"], [1, "text-wrap", "w-100"], [2, "width", "13%"], [2, "width", "25%", "text-align", "right"], [4, "ngFor", "ngForOf"], [1, "input-group", "mt-3"], ["class", "d-inline-block", "ngbDropdown", "", 4, "ngIf", "ngIfElse"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control", 3, "value"], ["type", "button", "id", "inputGroupFileAddon04", 1, "btn", "btn-secondary", "ml-1", 3, "mouseover", "mouseout"], [3, "icon", "fixedWidth"], [1, "qr-wrapper", 3, "hidden"], [3, "size", "data"], [3, "button", "text", "leftPadding"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "aria-expanded", "false", "ngbDropdownAnchor", "", 1, "btn", "btn-secondary", "dropdown-toggle", 3, "focus"], [1, "dropdownLabel"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click"], ["id", "basic-addon3", 1, "input-group-text"], ["id", "details", 1, "details", "mt-3", 3, "hidden"], [3, "ngIf"], [1, "detail-section"], [1, "table", "table-borderless", "table-striped"], [1, "label"], [1, "d-inline-block"], [3, "valueOverride", "satoshis"], [3, "innerHTML"], [1, "compact-lease"], [1, "col"], [1, "tlv-type"], [1, "tlv-payload"], [1, "text-right", "mt-3"], ["type", "button", 1, "btn", "btn-outline-info", "btn-sm", "btn-details", 3, "click"], ["class", "row", 4, "ngIf"], [2, "display", "block", "margin-bottom", "40px", 3, "publicKey"], [2, "display", "block", "margin-bottom", "40px"], [1, "d-flex"], ["class", "spinner-border ml-3", "role", "status", 4, "ngIf"], [3, "channelsStatusChangedEvent", "loadingEvent", "publicKey"], [1, "col-sm"], [3, "publicKey", "hasLocation"], [3, "publicKey"], ["role", "status", 1, "spinner-border", "ml-3"], [1, "mb-0"], [1, "skeleton-loader", 2, "width", "250px", "height", "36px", "margin-top", "5px", "margin-bottom", "5px"], [1, "tx-link"], [1, "skeleton-loader", 2, "margin-bottom", "3px", "width", "80%"], [1, "skeleton-loader"], [1, "skeleton-loader", 2, "width", "75px"], ["type", "text", "disabled", "", 1, "form-control", 2, "opacity", "0.3"], ["type", "button", "id", "inputGroupFileAddon04", 1, "btn", "btn-secondary", "ml-1", 3, "disabled"], [3, "button", "text"], [2, "height", "400px"], [1, "text-center", "loadingGraphs"], [1, "spinner-border", "text-light"]];
      },
      template: function NodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, NodeComponent_div_0_Template, 12, 8, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, NodeComponent_ng_template_2_Template, 75, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const skeletonLoader_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 2, ctx.node$))("ngIfElse", skeletonLoader_r19);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownAnchor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownButtonItem, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__.FaIconComponent, _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_6__.ClipboardComponent, _components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_7__.QrcodeComponent, _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_8__.SatsComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_9__.TruncateComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_10__.TimestampComponent, _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_11__.GeolocationComponent, _app_lightning_node_statistics_chart_node_statistics_chart_component__WEBPACK_IMPORTED_MODULE_12__.NodeStatisticsChartComponent, _app_lightning_node_fee_chart_node_fee_chart_component__WEBPACK_IMPORTED_MODULE_13__.NodeFeeChartComponent, _app_lightning_channels_list_channels_list_component__WEBPACK_IMPORTED_MODULE_14__.ChannelsListComponent, _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_15__.NodesChannelsMap, _app_lightning_nodes_channels_node_channels_component__WEBPACK_IMPORTED_MODULE_16__.NodeChannels, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_17__.RelativeUrlPipe, _app_shared_pipes_bytes_pipe_wubytes_pipe__WEBPACK_IMPORTED_MODULE_18__.WuBytesPipe, _app_shared_pipes_shorten_string_pipe_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_19__.ShortenStringPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_20__.AmountShortenerPipe],
      styles: [".title-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.tx-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.node-id[_ngcontent-%COMP%] {\n  width: 0;\n  flex-grow: 1;\n}\n\n.qr-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--fg);\n  padding: 10px;\n  padding-bottom: 5px;\n  display: inline-block;\n  position: absolute;\n  bottom: 50px;\n  left: -175px;\n  z-index: 100;\n}\n\n.dropdownLabel[_ngcontent-%COMP%] {\n  min-width: 50px;\n  display: inline-block;\n}\n\n#inputGroupFileAddon04[_ngcontent-%COMP%] {\n  position: relative;\n}\n\napp-fiat[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n}\n@media (min-width: 768px) {\n  app-fiat[_ngcontent-%COMP%] {\n    font-size: 14px;\n    display: inline-block;\n    margin-left: 10px;\n  }\n}\n\n@media (min-width: 768px) {\n  .spinner-border[_ngcontent-%COMP%] {\n    margin-top: 6.5px;\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .spinner-border[_ngcontent-%COMP%] {\n    margin-top: 2.3px;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n}\n\n.loadingGraphs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 15px);\n  z-index: 100;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (min-width: 576px) {\n  .label[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n@media (max-width: 767.98px) {\n  h1[_ngcontent-%COMP%]    > .skeleton-loader[_ngcontent-%COMP%] {\n    height: 28px !important;\n  }\n}\n.details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.details[_ngcontent-%COMP%]   .tlv-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--transparent-fg);\n}\n.details[_ngcontent-%COMP%]   .tlv-payload[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  word-break: break-all;\n  white-space: normal;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.details[_ngcontent-%COMP%]   .compact-lease[_ngcontent-%COMP%] {\n  word-break: break-all;\n  white-space: normal;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.separator[_ngcontent-%COMP%] {\n  margin: 0 0.25em;\n  color: slategrey;\n}\n\n.claim-btn[_ngcontent-%COMP%] {\n  max-height: 32px;\n}\n@media (min-width: 850px) {\n  .claim-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.claim-btn-mobile[_ngcontent-%COMP%] {\n  max-height: 32px;\n}\n@media (max-width: 850px) {\n  .claim-btn-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"],
      changeDetection: 0
    });
  }
  return NodeComponent;
})();

/***/ }),

/***/ 96984:
/*!******************************************************************************!*\
  !*** ./src/app/lightning/nodes-channels-map/nodes-channels-map.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesChannelsMap: () => (/* binding */ NodesChannelsMap)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/graphs/echarts */ 80683);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_assets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/assets.service */ 23230);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-echarts */ 57021);

















function NodesChannelsMap_div_0_ng_container_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("chartInit", function NodesChannelsMap_div_0_ng_container_1_div_1_div_1_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onChartInit($event));
    })("chartFinished", function NodesChannelsMap_div_0_ng_container_1_div_1_div_1_Template_div_chartFinished_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onChartFinished($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodesChannelsMap_div_0_ng_container_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 11);
  }
}
function NodesChannelsMap_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesChannelsMap_div_0_ng_container_1_div_1_div_1_Template, 1, 4, "div", 8)(2, NodesChannelsMap_div_0_ng_container_1_div_1_div_2_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("full-container " + ctx_r1.style + (ctx_r1.fitContainer ? " fit-container" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.chartOptions && ctx_r1.style === "nodepage");
  }
}
function NodesChannelsMap_div_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r1.style);
  }
}
function NodesChannelsMap_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesChannelsMap_div_0_ng_container_1_div_1_Template, 3, 3, "div", 6)(2, NodesChannelsMap_div_0_ng_container_1_div_2_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.chartOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (!ctx_r1.stateService.isBrowser || ctx_r1.isLoading) && !ctx_r1.disableSpinner);
  }
}
function NodesChannelsMap_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesChannelsMap_div_0_ng_container_1_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, ctx_r1.channelsObservable));
  }
}
function NodesChannelsMap_div_1_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("chartInit", function NodesChannelsMap_div_1_ng_container_7_div_1_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onChartInit($event));
    })("chartFinished", function NodesChannelsMap_div_1_ng_container_7_div_1_Template_div_chartFinished_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onChartFinished($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodesChannelsMap_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesChannelsMap_div_1_ng_container_7_div_1_Template, 1, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function NodesChannelsMap_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, NodesChannelsMap_div_1_ng_container_7_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 1, ctx_r1.channelsObservable));
  }
}
let NodesChannelsMap = /*#__PURE__*/(() => {
  class NodesChannelsMap {
    constructor(seoService, apiService, stateService, assetsService, router, zone, activatedRoute, amountShortenerPipe) {
      this.seoService = seoService;
      this.apiService = apiService;
      this.stateService = stateService;
      this.assetsService = assetsService;
      this.router = router;
      this.zone = zone;
      this.activatedRoute = activatedRoute;
      this.amountShortenerPipe = amountShortenerPipe;
      this.style = 'graph';
      this.channel = [];
      this.fitContainer = false;
      this.hasLocation = true;
      this.placeholder = false;
      this.disableSpinner = false;
      this.readyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
      this.channelWidth = 0.6;
      this.channelOpacity = 0.1;
      this.channelColor = '#466d9d';
      this.channelCurve = 0;
      this.nodeSize = 4;
      this.isLoading = false;
      this.chartInstance = undefined;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'canvas'
      };
    }
    ngOnInit() {
      this.center = this.style === 'widget' ? [0, 40] : [0, 5];
      this.zoom = 1.3;
      if (this.style === 'widget' && !(0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)()) {
        this.zoom = 3.5;
      }
      if (this.style === 'widget' && (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)()) {
        this.zoom = 1.4;
        this.center = [0, 10];
      }
      if (this.style === 'graph') {
        this.center = [0, 5];
        this.seoService.setTitle("Mapa \u015Bwiatowa kana\u0142\xF3w w\u0119z\u0142\xF3w sieci Lightning");
        this.seoService.setDescription("Zobacz kana\u0142y w\u0119z\u0142\xF3w Lightning w sieci innych ni\u017C Tor zwizualizowane na mapie \u015Bwiata. Najed\u017A kursorem/dotknij punkt\xF3w na mapie, aby wy\u015Bwietli\u0107 nazwy w\u0119z\u0142\xF3w i szczeg\xF3\u0142y.");
      }
      if (['nodepage', 'channelpage'].includes(this.style)) {
        this.nodeSize = 8;
      }
      this.channelsObservable = this.activatedRoute.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.delay)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(params => {
        this.isLoading = true;
        if (this.style === 'channelpage' && this.channel.length === 0 || !this.hasLocation) {
          this.isLoading = false;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.zip)(this.assetsService.getWorldMapJson$, this.style !== 'channelpage' ? this.apiService.getChannelsGeo$(params.get('public_key') ?? undefined, this.style) : [''], [params.get('public_key') ?? undefined], this.style === 'widget' ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(undefined) : this.apiService.getWorldNodes$()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(data => {
          _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_1__.echarts.registerMap('world', data[0]);
          let maxLiquidity = data[3]?.maxLiquidity;
          const channelsLoc = [];
          const nodes = [];
          const nodesPubkeys = {};
          let thisNodeGPS = undefined;
          let geoloc = data[1];
          if (this.style === 'channelpage') {
            if (this.channel.length === 0) {
              geoloc = [];
            } else {
              geoloc = [this.channel];
            }
          }
          for (const channel of geoloc) {
            if (this.style === 'nodepage' && !thisNodeGPS) {
              if (data[2] === channel[0]) {
                thisNodeGPS = [channel[2], channel[3]];
              } else if (data[2] === channel[4]) {
                thisNodeGPS = [channel[6], channel[7]];
              }
            }
            // 0 - node1 pubkey
            // 1 - node1 alias
            // 2,3 - node1 GPS
            // 4 - node2 pubkey
            // 5 - node2 alias
            // 6,7 - node2 GPS
            const node1PubKey = 0;
            const node1Alias = 1;
            let node1GpsLat = 2;
            let node1GpsLgt = 3;
            const node2PubKey = 4;
            const node2Alias = 5;
            let node2GpsLat = 6;
            let node2GpsLgt = 7;
            let node1UniqueId = channel[node1PubKey];
            let node2UniqueId = channel[node2PubKey];
            if (this.style === 'widget') {
              node1GpsLat = 0;
              node1GpsLgt = 1;
              node2GpsLat = 2;
              node2GpsLgt = 3;
              node1UniqueId = channel[node1GpsLat].toString() + channel[node1GpsLgt].toString();
              node2UniqueId = channel[node2GpsLat].toString() + channel[node2GpsLgt].toString();
            }
            // We add a bit of noise so nodes at the same location are not all
            // on top of each other
            let random = Math.random() * 2 * Math.PI;
            let random2 = Math.random() * 0.01;
            if (!nodesPubkeys[node1UniqueId]) {
              nodes.push([channel[node1GpsLat] + random2 * Math.cos(random), channel[node1GpsLgt] + random2 * Math.sin(random), 1, channel[node1PubKey], channel[node1Alias]]);
              nodesPubkeys[node1UniqueId] = nodes[nodes.length - 1];
            }
            random = Math.random() * 2 * Math.PI;
            random2 = Math.random() * 0.01;
            if (!nodesPubkeys[node2UniqueId]) {
              nodes.push([channel[node2GpsLat] + random2 * Math.cos(random), channel[node2GpsLgt] + random2 * Math.sin(random), 1, channel[node2PubKey], channel[node2Alias]]);
              nodesPubkeys[node2UniqueId] = nodes[nodes.length - 1];
            }
            const channelLoc = [];
            channelLoc.push(nodesPubkeys[node1UniqueId].slice(0, 2));
            channelLoc.push(nodesPubkeys[node2UniqueId].slice(0, 2));
            channelsLoc.push(channelLoc);
          }
          if (this.style === 'nodepage' && thisNodeGPS) {
            this.center = [thisNodeGPS[0], thisNodeGPS[1]];
            this.zoom = 5;
            this.channelWidth = 1;
            this.channelOpacity = 1;
          }
          if (this.style === 'channelpage' && this.channel.length > 0) {
            this.channelWidth = 2;
            this.channelOpacity = 1;
            this.channelColor = '#bafcff';
            this.channelCurve = 0.1;
            this.center = [(this.channel[2] + this.channel[6]) / 2, (this.channel[3] + this.channel[7]) / 2];
            const distance = Math.sqrt(Math.pow(this.channel[7] - this.channel[3], 2) + Math.pow(this.channel[6] - this.channel[2], 2));
            this.zoom = -0.05 * distance + 8;
          }
          if (data[3]) {
            for (const node of nodes) {
              const foundNode = data[3].nodes.find(n => n[2] === node[3]);
              if (foundNode) {
                node.push(foundNode[4], foundNode[5], foundNode[6]?.en, foundNode[7]);
                maxLiquidity = Math.max(maxLiquidity ?? 0, foundNode[4]);
              }
            }
          }
          maxLiquidity = Math.max(1, maxLiquidity);
          this.prepareChartOptions(nodes, channelsLoc, maxLiquidity);
        }));
      }));
    }
    prepareChartOptions(nodes, channels, maxLiquidity) {
      let title;
      if (channels.length === 0) {
        if (!this.placeholder) {
          this.isLoading = false;
          title = {
            textStyle: {
              color: 'white',
              fontSize: 18
            },
            text: "Brak danych do wy\u015Bwietlenia. Spr\xF3buj ponownie p\xF3\u017Aniej.",
            left: 'center',
            top: 'center'
          };
          this.zoom = 1.5;
          this.center = [0, 20];
        } else {
          // used for Node and Channel preview components
          title = {
            textStyle: {
              color: 'white',
              fontSize: 18
            },
            text: "Brak danych geolokalizacyjnych",
            left: 'center',
            top: 'center'
          };
          this.zoom = 1.5;
          this.center = [0, 20];
        }
      }
      this.chartOptions = {
        silent: this.style === 'widget',
        title: title ?? undefined,
        tooltip: {},
        geo: {
          animation: false,
          silent: true,
          center: this.center,
          zoom: this.zoom,
          tooltip: {
            show: false
          },
          map: 'world',
          roam: this.style === 'widget' ? false : true,
          itemStyle: {
            borderColor: 'black',
            color: '#272b3f'
          },
          scaleLimit: {
            min: 1.3,
            max: 100000
          },
          emphasis: {
            disabled: true
          }
        },
        series: [{
          large: true,
          type: 'scatter',
          data: nodes,
          coordinateSystem: 'geo',
          geoIndex: 0,
          symbolSize: params => {
            if (maxLiquidity) {
              return 10 * Math.pow(params[5] / maxLiquidity, 0.2) + 3;
            }
            return this.nodeSize;
          },
          tooltip: {
            show: true,
            backgroundColor: 'rgba(17, 19, 31, 1)',
            borderRadius: 4,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            textStyle: {
              color: 'var(--tooltip-grey)',
              align: 'left'
            },
            borderColor: '#000',
            formatter: value => {
              const data = value.data;
              const alias = data[4].length > 0 ? data[4] : data[3].slice(0, 20);
              const liquidity = data[5] >= 100000000 ? `${this.amountShortenerPipe.transform(data[5] / 100000000)} BTC` : `${this.amountShortenerPipe.transform(data[5], 2)} sats`;
              return `
              <b style="color: white">${alias}</b><br>
              ${liquidity}<br>` + "" + data[6] + " kana\u0142\xF3w" + `<br>
              ${(0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.getFlagEmoji)(data[8])} ${data[7]}
            `;
            }
          },
          itemStyle: {
            color: params => {
              if (!maxLiquidity) {
                return 'white';
              }
              return `${(0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_3__.lerpColor)('#1E88E5', '#D81B60', Math.pow(params.data[5] / maxLiquidity, 0.2))}`;
            },
            opacity: 1,
            borderColor: 'black',
            borderWidth: 0
          },
          blendMode: 'lighter',
          zlevel: 2
        }, {
          large: false,
          progressive: this.style === 'widget' ? 500 : 200,
          silent: true,
          type: 'lines',
          coordinateSystem: 'geo',
          data: channels,
          lineStyle: {
            opacity: this.channelOpacity,
            width: this.channelWidth,
            curveness: this.channelCurve,
            color: this.channelColor
          },
          blendMode: 'lighter',
          tooltip: {
            show: false
          },
          zlevel: 1
        }]
      };
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
      this.chartInstance.on('finished', () => {
        this.isLoading = false;
      });
      if (this.style === 'widget') {
        this.chartInstance.getZr().on('click', e => {
          this.zone.run(() => {
            const url = new _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeUrlPipe(this.stateService).transform(`/graphs/lightning/nodes-channels-map`);
            this.router.navigate([url]);
          });
        });
      }
      this.chartInstance.on('click', e => {
        if (e.data) {
          this.zone.run(() => {
            const url = new _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeUrlPipe(this.stateService).transform(`/lightning/node/${e.data[3]}`);
            this.router.navigate([url]);
          });
        }
      });
      this.chartInstance.on('georoam', e => {
        if (!e.zoom || this.style === 'nodepage') {
          return;
        }
        const speed = 0.005;
        const chartOptions = {
          series: this.chartOptions.series
        };
        let nodeBorder = 0;
        if (this.chartInstance.getOption().geo[0].zoom > 5000) {
          nodeBorder = 2;
        }
        chartOptions.series[0].itemStyle.borderWidth = nodeBorder;
        chartOptions.series[1].lineStyle.opacity += e.zoom > 1 ? speed : -speed;
        chartOptions.series[1].lineStyle.width += e.zoom > 1 ? speed : -speed;
        chartOptions.series[1].lineStyle.opacity = Math.max(0.05, Math.min(0.5, chartOptions.series[1].lineStyle.opacity));
        chartOptions.series[1].lineStyle.width = Math.max(0.5, Math.min(1, chartOptions.series[1].lineStyle.width));
        this.chartInstance.setOption(chartOptions);
      });
    }
    onChartFinished(e) {
      this.readyEvent.emit();
    }
    static #_ = this.ɵfac = function NodesChannelsMap_Factory(t) {
      return new (t || NodesChannelsMap)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_assets_service__WEBPACK_IMPORTED_MODULE_7__.AssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__.AmountShortenerPipe));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: NodesChannelsMap,
      selectors: [["app-nodes-channels-map"]],
      inputs: {
        style: "style",
        publicKey: "publicKey",
        channel: "channel",
        fitContainer: "fitContainer",
        hasLocation: "hasLocation",
        placeholder: "placeholder",
        disableSpinner: "disableSpinner"
      },
      outputs: {
        readyEvent: "readyEvent"
      },
      decls: 2,
      vars: 2,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-channels-world-map
           */
          const MSG_EXTERNAL_8199511328474154549$$SRC_APP_LIGHTNING_NODES_CHANNELS_MAP_NODES_CHANNELS_MAP_COMPONENT_TS_0 = goog.getMsg("Lightning Nodes Channels World Map");
          i18n_0 = MSG_EXTERNAL_8199511328474154549$$SRC_APP_LIGHTNING_NODES_CHANNELS_MAP_NODES_CHANNELS_MAP_COMPONENT_TS_0;
        } else {
          i18n_0 = "Mapa \u015Bwiatowa kana\u0142\xF3w w\u0119z\u0142\xF3w sieci Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_CHANNELS_MAP_NODES_CHANNELS_MAP_COMPONENT_TS_1 = goog.getMsg("(Tor nodes excluded)");
          i18n_1 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_CHANNELS_MAP_NODES_CHANNELS_MAP_COMPONENT_TS_1;
        } else {
          i18n_1 = "(bez w\u0119z\u0142\xF3w Tor)";
        }
        return [i18n_0, i18n_1, ["class", "map-wrapper", 3, "class", 4, "ngIf"], ["class", "full-container-graph", 4, "ngIf"], [1, "map-wrapper"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "text-center loading-spinner", 3, "class", 4, "ngIf"], ["class", "chart", "echarts", "", 3, "class", "initOpts", "options", "chartInit", "chartFinished", 4, "browserOnly"], ["style", "padding-top: 30px", 4, "ngIf"], ["echarts", "", 1, "chart", 3, "chartInit", "chartFinished", "initOpts", "options"], [2, "padding-top", "30px"], [1, "text-center", "loading-spinner"], [1, "spinner-border", "text-light"], [1, "full-container-graph"], [1, "card-header"], [1, "d-flex", "d-md-block", "align-items-baseline", 2, "margin-bottom", "-5px"], [2, "color", "var(--transparent-fg)"], ["class", "chart-graph", "echarts", "", 3, "initOpts", "options", "chartInit", "chartFinished", 4, "browserOnly"], ["echarts", "", 1, "chart-graph", 3, "chartInit", "chartFinished", "initOpts", "options"]];
      },
      template: function NodesChannelsMap_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, NodesChannelsMap_div_0_Template, 3, 5, "div", 2)(1, NodesChannelsMap_div_1_Template, 9, 3, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.style !== "graph");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.style === "graph");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__.BrowserOnlyDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_14__.NgxEchartsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
      styles: [".map-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.map-wrapper.widget[_ngcontent-%COMP%] {\n  height: 250px;\n}\n.map-wrapper.graph[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  font-size: 18px;\n}\n@media (min-width: 465px) {\n  .card-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n.full-container[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  width: 100%;\n  min-height: 600px;\n  height: calc(100% - 150px);\n}\n\n.full-container.nodepage[_ngcontent-%COMP%] {\n  min-height: 400px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.full-container.channelpage[_ngcontent-%COMP%] {\n  min-height: 400px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.full-container.widget[_ngcontent-%COMP%] {\n  height: 250px;\n  min-height: 250px;\n}\n\n.full-container.fit-container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  min-height: 100px;\n}\n.full-container.fit-container[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  padding: 0;\n  min-height: 100px;\n}\n\n.chart[_ngcontent-%COMP%] {\n  min-height: 500px;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 992px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 829px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 629px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n@media (max-width: 567px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n\n.chart.graph[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n\n.chart.nodepage[_ngcontent-%COMP%] {\n  min-height: 100%;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 0px;\n}\n\n.chart.channelpage[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n\n.widget[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 250px;\n  -webkit-mask: linear-gradient(0deg, rgba(17, 19, 31, 0) 5%, #11131f 25%);\n}\n\n.widget[_ngcontent-%COMP%]    > .chart[_ngcontent-%COMP%] {\n  min-height: 250px;\n  -webkit-mask: linear-gradient(180deg, rgba(17, 19, 31, 0) 0%, #11131f 20%);\n}\n@media (max-width: 767.98px) {\n  .widget[_ngcontent-%COMP%]    > .chart[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n  }\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 15px);\n  z-index: 99;\n}\n@media (max-width: 767.98px) {\n  .loading-spinner[_ngcontent-%COMP%] {\n    top: 550px;\n  }\n}\n\n.loading-spinner.widget[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 200px;\n  z-index: 99;\n  width: 100%;\n  left: 0;\n}\n@media (max-width: 767.98px) {\n  .loading-spinner.widget[_ngcontent-%COMP%] {\n    top: 250px;\n  }\n}\n\n.loading-spinner.nodepage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 200px;\n  z-index: 99;\n  width: 100%;\n  left: 0;\n}\n\n.loading-spinner.channelpage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 400px;\n  z-index: 99;\n  width: 100%;\n  left: 0;\n}\n@media (max-width: 767.98px) {\n  .loading-spinner.channelpage[_ngcontent-%COMP%] {\n    top: 450px;\n  }\n}\n\n.indexing-message[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  margin-top: 100px;\n}\n\n.full-container-graph[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 15px;\n  width: 100%;\n  height: calc(100vh - 225px);\n  min-height: 400px;\n}\n@media (min-width: 992px) {\n  .full-container-graph[_ngcontent-%COMP%] {\n    height: calc(100vh - 150px);\n  }\n}\n\n.full-container-graph.widget[_ngcontent-%COMP%] {\n  min-height: 240px;\n  height: 240px;\n  padding: 0px;\n}\n\n.full-container-graph.fit-container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  min-height: 100px;\n}\n.full-container-graph.fit-container[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  padding: 0;\n  min-height: 100px;\n}\n\n.chart-graph[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  padding-top: 30px;\n  padding-bottom: 20px;\n  padding-right: 10px;\n}\n@media (max-width: 992px) {\n  .chart-graph[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 829px) {\n  .chart-graph[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .chart-graph[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 629px) {\n  .chart-graph[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n@media (max-width: 567px) {\n  .chart-graph[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}"],
      changeDetection: 0
    });
  }
  return NodesChannelsMap;
})();

/***/ }),

/***/ 35813:
/*!*********************************************************************!*\
  !*** ./src/app/lightning/nodes-channels/node-channels.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeChannels: () => (/* binding */ NodeChannels)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ 57021);













function NodeChannels_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("chartInit", function NodeChannels_div_1_div_3_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodeChannels_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NodeChannels_div_1_div_3_Template, 1, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NodeChannels_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
let NodeChannels = /*#__PURE__*/(() => {
  class NodeChannels {
    constructor(locale, lightningApiService, amountShortenerPipe, zone, router, stateService) {
      this.locale = locale;
      this.lightningApiService = lightningApiService;
      this.amountShortenerPipe = amountShortenerPipe;
      this.zone = zone;
      this.router = router;
      this.stateService = stateService;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
      this.isLoading = true;
    }
    ngOnChanges() {
      this.prepareChartOptions(null);
      this.channelsObservable$ = this.lightningApiService.getChannelsByNodeId$(this.publicKey, -1, 'active').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(response => {
        this.isLoading = true;
        if ((response.body?.length ?? 0) <= 0) {
          this.isLoading = false;
          return [''];
        }
        return [response.body];
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(body => {
        if (body.length === 0 || body[0].length === 0) {
          return;
        }
        const biggestCapacity = body[0].capacity;
        this.prepareChartOptions(body.map(channel => {
          return {
            name: channel.node.alias,
            value: channel.capacity,
            shortId: channel.short_id,
            id: channel.id,
            itemStyle: {
              color: (0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_0__.lerpColor)('#1E88E5', '#D81B60', Math.pow(channel.capacity / biggestCapacity, 0.4))
            }
          };
        }));
        this.isLoading = false;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.share)());
    }
    prepareChartOptions(data) {
      this.chartOptions = {
        tooltip: {
          trigger: 'item',
          textStyle: {
            align: 'left'
          }
        },
        series: [{
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          roam: false,
          type: 'treemap',
          data: data,
          nodeClick: 'link',
          progressive: 100,
          tooltip: {
            show: true,
            backgroundColor: 'rgba(17, 19, 31, 1)',
            borderRadius: 4,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            textStyle: {
              color: 'var(--tooltip-grey)'
            },
            borderColor: '#000',
            formatter: value => {
              if (value.data.name === undefined) {
                return ``;
              }
              let capacity = '';
              if (value.data.value > 100000000) {
                capacity = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(Math.round(value.data.value / 100000000), this.locale, '1.2-2') + ' BTC';
              } else {
                capacity = this.amountShortenerPipe.transform(value.data.value, 2) + ' sats';
              }
              return `
                <b style="color: white; margin-left: 2px">${value.data.shortId}</b><br>
                <span>Node: ${value.name}</span><br>
                <span>Capacity: ${capacity}</span>
              `;
            }
          },
          itemStyle: {
            borderColor: 'black',
            borderWidth: 1
          },
          breadcrumb: {
            show: false
          }
        }]
      };
    }
    onChartInit(ec) {
      this.chartInstance = ec;
      this.chartInstance.on('click', e => {
        //@ts-ignore
        if (!e.data.id) {
          return;
        }
        this.zone.run(() => {
          //@ts-ignore
          const url = new _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_1__.RelativeUrlPipe(this.stateService).transform(`/lightning/channel/${e.data.id}`);
          this.router.navigate([url]);
        });
      });
    }
    static #_ = this.ɵfac = function NodeChannels_Factory(t) {
      return new (t || NodeChannels)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_2__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_3__.AmountShortenerPipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__.StateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NodeChannels,
      selectors: [["app-node-channels"]],
      inputs: {
        publicKey: "publicKey"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-channels-map
           */
          const MSG_EXTERNAL_586176474570378141$$SRC_APP_LIGHTNING_NODES_CHANNELS_NODE_CHANNELS_COMPONENT_TS_0 = goog.getMsg("Active channels map");
          i18n_0 = MSG_EXTERNAL_586176474570378141$$SRC_APP_LIGHTNING_NODES_CHANNELS_NODE_CHANNELS_COMPONENT_TS_0;
        } else {
          i18n_0 = "Mapa aktywnych kana\u0142\xF3w";
        }
        return [i18n_0, [1, "node-channels-container"], ["style", "min-height: 455px", 4, "ngIf"], ["class", "text-center loading-spinner", 4, "ngIf"], [2, "min-height", "455px"], ["echarts", "", 3, "initOpts", "options", "chartInit", 4, "browserOnly"], ["echarts", "", 3, "chartInit", "initOpts", "options"], [1, "text-center", "loading-spinner"], [1, "spinner-border", "text-light"]];
      },
      template: function NodeChannels_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NodeChannels_div_1_Template, 4, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NodeChannels_div_3_Template, 2, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx.channelsObservable$));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_5__.BrowserOnlyDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      styles: [".node-channels-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 99;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  position: relative;\n  top: 225px;\n}"],
      changeDetection: 0
    });
  }
  return NodeChannels;
})();

/***/ }),

/***/ 12370:
/*!**************************************************************!*\
  !*** ./src/app/lightning/nodes-list/nodes-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesListComponent: () => (/* binding */ NodesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);





const _c0 = (a0, a1) => [a0, a1];
const _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function NodesListComponent_tbody_9_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 6)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-amount", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, "/lightning/node"), node_r1.public_key));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](node_r1.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("satoshis", node_r1.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, node_r1.channels), " ");
  }
}
function NodesListComponent_tbody_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NodesListComponent_tbody_9_tr_1_Template, 10, 15, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nodes_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", nodes_r3);
  }
}
function NodesListComponent_ng_template_11_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NodesListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NodesListComponent_ng_template_11_tr_1_Template, 7, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
  }
}
let NodesListComponent = /*#__PURE__*/(() => {
  class NodesListComponent {
    constructor() {}
    ngOnInit() {}
    static #_ = this.ɵfac = function NodesListComponent_Factory(t) {
      return new (t || NodesListComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NodesListComponent,
      selectors: [["app-nodes-list"]],
      inputs: {
        nodes$: "nodes$",
        show: "show"
      },
      decls: 13,
      vars: 8,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nodes.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_LIST_NODES_LIST_COMPONENT_TS_0 = goog.getMsg("Alias");
          i18n_0 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_LIST_NODES_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "Alias";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_LIST_NODES_LIST_COMPONENT_TS_1 = goog.getMsg("Capacity");
          i18n_1 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_LIST_NODES_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "Pojemno\u015B\u0107";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_LIST_NODES_LIST_COMPONENT_TS_2 = goog.getMsg("Channels");
          i18n_2 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_LIST_NODES_LIST_COMPONENT_TS_2;
        } else {
          i18n_2 = "Kana\u0142y";
        }
        return [["skeleton", ""], i18n_0, i18n_1, i18n_2, [2, "min-height", "295px"], [1, "table", "table-borderless"], [1, "alias", "text-left"], [1, "capacity", "text-right"], [1, "channels", "text-right"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["digitsInfo", "1.2-2", 3, "satoshis"], [1, "skeleton-loader"]];
      },
      template: function NodesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "table", 5)(2, "thead")(3, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](6, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](8, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NodesListComponent_tbody_9_Template, 2, 1, "tbody", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NodesListComponent_ng_template_11_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const skeleton_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.show);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.show);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, ctx.nodes$))("ngIfElse", skeleton_r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_0__.AmountComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_1__.RelativeUrlPipe],
      styles: ["@media (max-width: 767.98px) {\n  .capacity.mobile-channels[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .channels.mobile-capacity[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"],
      changeDetection: 0
    });
  }
  return NodesListComponent;
})();

/***/ }),

/***/ 48296:
/*!************************************************************!*\
  !*** ./src/app/lightning/nodes-map/nodes-map.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesMap: () => (/* binding */ NodesMap)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/graphs/echarts */ 80683);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_assets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/assets.service */ 23230);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-echarts */ 57021);
















function NodesMap_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function NodesMap_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("chartInit", function NodesMap_ng_container_2_div_1_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onChartInit($event));
    })("chartFinished", function NodesMap_ng_container_2_div_1_Template_div_chartFinished_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onChartFinished($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r1.widget ? "widget" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodesMap_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesMap_ng_container_2_div_1_Template, 1, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function NodesMap_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
let NodesMap = /*#__PURE__*/(() => {
  class NodesMap {
    constructor(locale, seoService, apiService, stateService, assetsService, router, zone, amountShortenerPipe) {
      this.locale = locale;
      this.seoService = seoService;
      this.apiService = apiService;
      this.stateService = stateService;
      this.assetsService = assetsService;
      this.router = router;
      this.zone = zone;
      this.amountShortenerPipe = amountShortenerPipe;
      this.widget = false;
      this.nodes = undefined;
      this.type = 'none';
      this.fitContainer = false;
      this.readyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
      this.isLoading = true;
      this.chartInstance = undefined;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
    }
    ngOnInit() {
      if (!this.widget) {
        this.seoService.setTitle("Mapa \u015Bwiatowa w\u0119z\u0142\xF3w sieci Lightning");
        this.seoService.setDescription("Zobacz lokalizacje w\u0119z\u0142\xF3w sieci innych ni\u017C Tor Lightning wizualizowane na mapie \u015Bwiata. Najed\u017A kursorem/dotknij punkt\xF3w na mapie, aby wy\u015Bwietli\u0107 nazwy w\u0119z\u0142\xF3w i szczeg\xF3\u0142y.");
      }
      if (!this.inputNodes$) {
        this.inputNodes$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(this.nodes);
      }
      this.nodes$ = this.inputNodes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(nodes => nodes ? [nodes] : this.apiService.getWorldNodes$()));
      this.observable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)(this.assetsService.getWorldMapJson$, this.nodes$).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(data => {
        _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__.echarts.registerMap('world', data[0]);
        let maxLiquidity = data[1].maxLiquidity;
        let inputNodes = data[1].nodes;
        let mapCenter = [0, 5];
        if (this.type === 'country') {
          mapCenter = [0, 0];
        } else if (this.type === 'isp') {
          mapCenter = [0, 10];
        }
        let mapZoom = 1.3;
        if (!inputNodes) {
          inputNodes = [];
          for (const node of data[1]) {
            if (this.type === 'country') {
              mapCenter[0] += node.longitude;
              mapCenter[1] += node.latitude;
            }
            inputNodes.push([node.longitude, node.latitude, node.public_key, node.alias, node.capacity, node.channels, node.country, node.iso_code]);
            maxLiquidity = Math.max(maxLiquidity ?? 0, node.capacity);
          }
          if (this.type === 'country') {
            mapCenter[0] /= data[1].length;
            mapCenter[1] /= data[1].length;
            mapZoom = 6;
          }
        }
        const nodes = [];
        for (const node of inputNodes) {
          // We add a bit of noise so nodes at the same location are not all
          // on top of each other
          const random = Math.random() * 2 * Math.PI;
          const random2 = Math.random() * 0.01;
          nodes.push([node[0] + random2 * Math.cos(random), node[1] + random2 * Math.sin(random), node[4],
          // Liquidity
          node[3],
          // Alias
          node[2],
          // Public key
          node[5],
          // Channels
          node[6]?.en,
          // Country
          node[7] // ISO Code
          ]);
        }
        maxLiquidity = Math.max(1, maxLiquidity);
        this.prepareChartOptions(nodes, maxLiquidity, mapCenter, mapZoom);
      }));
    }
    ngOnChanges(changes) {
      if (changes.nodes) {
        if (!this.inputNodes$) {
          this.inputNodes$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(changes.nodes.currentValue);
        } else {
          this.inputNodes$.next(changes.nodes.currentValue);
        }
      }
    }
    prepareChartOptions(nodes, maxLiquidity, mapCenter, mapZoom) {
      let title;
      if (nodes.length === 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 15
          },
          text: "Brak danych do wy\u015Bwietlenia. Spr\xF3buj ponownie p\xF3\u017Aniej.",
          left: 'center',
          top: 'center'
        };
      }
      this.chartOptions = {
        silent: false,
        title: title ?? undefined,
        tooltip: {},
        geo: {
          animation: false,
          silent: true,
          center: mapCenter,
          zoom: mapZoom,
          tooltip: {
            show: false
          },
          map: 'world',
          roam: true,
          itemStyle: {
            borderColor: 'black',
            color: '#272b3f'
          },
          scaleLimit: {
            min: 1.3,
            max: 100000
          },
          emphasis: {
            disabled: true
          }
        },
        series: [{
          large: false,
          type: 'scatter',
          data: nodes,
          coordinateSystem: 'geo',
          geoIndex: 0,
          progressive: 500,
          symbolSize: function (params) {
            return 10 * Math.pow(params[2] / maxLiquidity, 0.2) + 3;
          },
          tooltip: {
            position: function (point, params, dom, rect, size) {
              return point;
            },
            trigger: 'item',
            show: true,
            backgroundColor: 'rgba(17, 19, 31, 1)',
            borderRadius: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            textStyle: {
              color: 'var(--tooltip-grey)',
              align: 'left'
            },
            borderColor: '#000',
            formatter: value => {
              const data = value.data;
              const alias = data[3].length > 0 ? data[3] : data[4].slice(0, 20);
              const liquidity = data[2] >= 100000000 ? `${this.amountShortenerPipe.transform(data[2] / 100000000)} BTC` : `${this.amountShortenerPipe.transform(data[2], 2)} sats`;
              return `
                <b style="color: white">${alias}</b><br>
                ${liquidity}<br>` + "" + data[5] + " kana\u0142\xF3w" + `<br>
                ${(0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_3__.getFlagEmoji)(data[7])} ${data[6]}
              `;
            }
          },
          itemStyle: {
            color: function (params) {
              return `${(0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__.lerpColor)('#1E88E5', '#D81B60', Math.pow(params.data[2] / maxLiquidity, 0.2))}`;
            },
            opacity: 1,
            borderColor: 'black',
            borderWidth: 0
          },
          zlevel: 2
        }]
      };
      this.isLoading = false;
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
      this.chartInstance.on('finished', () => {
        this.isLoading = false;
      });
      this.chartInstance.on('click', e => {
        if (e.data) {
          this.zone.run(() => {
            const url = new _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeUrlPipe(this.stateService).transform(`/lightning/node/${e.data[4]}`);
            this.router.navigate([url]);
          });
        }
      });
      this.chartInstance.on('georoam', e => {
        this.chartInstance.resize();
      });
    }
    onChartFinished(e) {
      this.readyEvent.emit();
    }
    static #_ = this.ɵfac = function NodesMap_Factory(t) {
      return new (t || NodesMap)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_assets_service__WEBPACK_IMPORTED_MODULE_7__.AssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__.AmountShortenerPipe));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: NodesMap,
      selectors: [["app-nodes-map"]],
      inputs: {
        widget: "widget",
        nodes: "nodes",
        type: "type",
        fitContainer: "fitContainer"
      },
      outputs: {
        readyEvent: "readyEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 9,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-world-map
           */
          const MSG_EXTERNAL_355005720923335419$$SRC_APP_LIGHTNING_NODES_MAP_NODES_MAP_COMPONENT_TS_0 = goog.getMsg("Lightning Nodes World Map");
          i18n_0 = MSG_EXTERNAL_355005720923335419$$SRC_APP_LIGHTNING_NODES_MAP_NODES_MAP_COMPONENT_TS_0;
        } else {
          i18n_0 = "Mapa \u015Bwiatowa w\u0119z\u0142\xF3w sieci Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_MAP_NODES_MAP_COMPONENT_TS_1 = goog.getMsg("(Tor nodes excluded)");
          i18n_1 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_MAP_NODES_MAP_COMPONENT_TS_1;
        } else {
          i18n_1 = "(bez w\u0119z\u0142\xF3w Tor)";
        }
        return [i18n_0, i18n_1, [1, "full-container"], ["class", "card-header", 4, "ngIf"], [4, "ngIf"], ["class", "text-center loading-spinner", 4, "ngIf"], [1, "card-header"], [1, "d-flex", "d-md-block", "align-items-baseline", 2, "margin-bottom", "-5px"], [2, "color", "var(--transparent-fg)"], ["class", "chart", "echarts", "", 3, "class", "initOpts", "options", "chartInit", "chartFinished", 4, "browserOnly"], ["echarts", "", 1, "chart", 3, "chartInit", "chartFinished", "initOpts", "options"], [1, "text-center", "loading-spinner"], [1, "spinner-border", "text-light"]];
      },
      template: function NodesMap_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesMap_div_1_Template, 6, 0, "div", 3)(2, NodesMap_ng_container_2_Template, 2, 0, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, NodesMap_div_4_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.widget ? "widget" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("fit-container", ctx.fitContainer);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 7, ctx.observable$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__.BrowserOnlyDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_14__.NgxEchartsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
      styles: [".card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  font-size: 18px;\n}\n@media (min-width: 465px) {\n  .card-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (min-width: 992px) {\n  .card-header[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\n\n.full-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 15px;\n  width: 100%;\n  height: calc(100vh - 225px);\n  min-height: 400px;\n}\n@media (min-width: 992px) {\n  .full-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 150px);\n  }\n}\n\n.full-container.widget[_ngcontent-%COMP%] {\n  min-height: 240px;\n  height: 240px;\n  padding: 0px;\n}\n\n.full-container.fit-container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  min-height: 100px;\n}\n.full-container.fit-container[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  padding: 0;\n  min-height: 100px;\n}\n\n.chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  padding-top: 30px;\n  padding-bottom: 20px;\n  padding-right: 10px;\n}\n@media (max-width: 992px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 829px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 629px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n@media (max-width: 567px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n\n.chart.widget[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 15px);\n  z-index: 99;\n}\n@media (max-width: 767.98px) {\n  .loading-spinner[_ngcontent-%COMP%] {\n    top: 550px;\n  }\n}"],
      changeDetection: 0
    });
  }
  return NodesMap;
})();

/***/ }),

/***/ 38798:
/*!**********************************************************************************!*\
  !*** ./src/app/lightning/nodes-networks-chart/nodes-networks-chart.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesNetworksChartComponent: () => (/* binding */ NodesNetworksChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/graphs/echarts */ 80683);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 13054);
/* harmony import */ var _app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/storage.service */ 7368);
/* harmony import */ var _app_services_mining_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/mining.service */ 64235);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-echarts */ 57021);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);




















const _c0 = () => ["fas", "download"];
const _c1 = a0 => [a0];
const _c2 = a0 => ({
  height: a0
});
function NodesNetworksChartComponent_form_7_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 1M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "1m");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "1m")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/nodes-networks")));
  }
}
function NodesNetworksChartComponent_form_7_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 3M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "3d");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "3m")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/nodes-networks")));
  }
}
function NodesNetworksChartComponent_form_7_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 6M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "6m");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "6m")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/nodes-networks")));
  }
}
function NodesNetworksChartComponent_form_7_label_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 1Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "1y")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/nodes-networks")));
  }
}
function NodesNetworksChartComponent_form_7_label_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 2Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "2y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "2y")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/nodes-networks")));
  }
}
function NodesNetworksChartComponent_form_7_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 3Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "3y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "3y")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/nodes-networks")));
  }
}
function NodesNetworksChartComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, NodesNetworksChartComponent_form_7_label_2_Template, 4, 8, "label", 10)(3, NodesNetworksChartComponent_form_7_label_3_Template, 4, 8, "label", 10)(4, NodesNetworksChartComponent_form_7_label_4_Template, 4, 8, "label", 10)(5, NodesNetworksChartComponent_form_7_label_5_Template, 4, 8, "label", 10)(6, NodesNetworksChartComponent_form_7_label_6_Template, 4, 8, "label", 10)(7, NodesNetworksChartComponent_form_7_label_7_Template, 4, 8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " ALL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stats_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.radioGroupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 730);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 1095);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "all")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](13, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 11, "/graphs/lightning/nodes-networks")));
  }
}
function NodesNetworksChartComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("chartInit", function NodesNetworksChartComponent_div_9_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c2, ctx_r0.widget ? ctx_r0.height + "px" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](!ctx_r0.widget ? "chart" : "chart-widget");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("initOpts", ctx_r0.chartInitOptions)("options", ctx_r0.chartOptions);
  }
}
function NodesNetworksChartComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
let NodesNetworksChartComponent = /*#__PURE__*/(() => {
  class NodesNetworksChartComponent {
    constructor(locale, seoService, lightningApiService, formBuilder, storageService, miningService, stateService, amountShortenerPipe) {
      this.locale = locale;
      this.seoService = seoService;
      this.lightningApiService = lightningApiService;
      this.formBuilder = formBuilder;
      this.storageService = storageService;
      this.miningService = miningService;
      this.stateService = stateService;
      this.amountShortenerPipe = amountShortenerPipe;
      this.height = 150;
      this.right = 45;
      this.left = 45;
      this.widget = false;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
      this.dir = 'ltr';
      this.isLoading = true;
      this.formatNumber = _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber;
      this.timespan = '';
      this.chartInstance = undefined;
    }
    ngOnInit() {
      let firstRun = true;
      if (this.widget) {
        this.miningWindowPreference = '3y';
      } else {
        this.seoService.setTitle("W\u0119z\u0142y Lightning wg sieci");
        this.seoService.setDescription("Zobacz liczb\u0119 w\u0119z\u0142\xF3w sieci Lightning wizualizowanych w czasie wed\u0142ug sieci: tylko clearnet (IPv4, IPv6), darknet (Tor, I2p, cjdns) lub obie.");
        this.miningWindowPreference = this.miningService.getDefaultTimespan('all');
      }
      this.radioGroupForm = this.formBuilder.group({
        dateSpan: this.miningWindowPreference
      });
      this.radioGroupForm.controls.dateSpan.setValue(this.miningWindowPreference);
      this.nodesNetworkObservable$ = this.radioGroupForm.get('dateSpan').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this.miningWindowPreference), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(timespan => {
        this.timespan = timespan;
        if (!this.widget && !firstRun) {
          this.storageService.setValue('lightningWindowPreference', timespan);
        }
        firstRun = false;
        this.miningWindowPreference = timespan;
        this.isLoading = true;
        return this.lightningApiService.cachedRequest(this.lightningApiService.listStatistics$, 250, timespan).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(response => {
          const data = response.body;
          this.chartData = {
            tor_nodes: data.map(val => [val.added * 1000, val.tor_nodes]),
            clearnet_nodes: data.map(val => [val.added * 1000, val.clearnet_nodes]),
            unannounced_nodes: data.map(val => [val.added * 1000, val.unannounced_nodes]),
            clearnet_tor_nodes: data.map(val => [val.added * 1000, val.clearnet_tor_nodes])
          };
          this.maxYAxis = 0;
          for (const day of data) {
            this.maxYAxis = Math.max(this.maxYAxis, day.tor_nodes + day.clearnet_nodes + day.unannounced_nodes + day.clearnet_tor_nodes);
          }
          this.maxYAxis = Math.ceil(this.maxYAxis / 3000) * 3000;
          this.prepareChartOptions(this.chartData, this.maxYAxis);
          this.isLoading = false;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
          return {
            days: parseInt(response.headers.get('x-total-count'), 10)
          };
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
    }
    ngOnChanges(changes) {
      if (changes.height && this.chartData && this.maxYAxis != null) {
        this.prepareChartOptions(this.chartData, this.maxYAxis);
      }
    }
    prepareChartOptions(data, maxYAxis) {
      let title;
      if (!this.widget && data.tor_nodes.length === 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 15
          },
          text: "Indeksowanie w toku",
          left: 'center',
          top: 'center'
        };
      } else if (this.widget && data.tor_nodes.length > 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 11
          },
          text: "W\u0119z\u0142y Lightning wg sieci",
          left: 'center',
          top: 0,
          zlevel: 10
        };
      }
      const series = [{
        zlevel: 1,
        yAxisIndex: 0,
        name: "Nieznany",
        showSymbol: false,
        symbol: 'none',
        data: data.unannounced_nodes,
        type: 'line',
        lineStyle: {
          width: 2
        },
        areaStyle: {
          opacity: 0.5
        },
        stack: 'Total',
        color: new _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__.echarts.graphic.LinearGradient(0, 0.75, 0, 1, [{
          offset: 0,
          color: '#D81B60'
        }, {
          offset: 1,
          color: '#D81B60AA'
        }]),
        smooth: false
      }, {
        zlevel: 1,
        yAxisIndex: 0,
        name: "Clearnet i Darknet",
        showSymbol: false,
        symbol: 'none',
        data: data.clearnet_tor_nodes,
        type: 'line',
        lineStyle: {
          width: 2
        },
        areaStyle: {
          opacity: 0.5
        },
        stack: 'Total',
        color: new _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__.echarts.graphic.LinearGradient(0, 0.75, 0, 1, [{
          offset: 0,
          color: '#be7d4c'
        }, {
          offset: 1,
          color: '#be7d4cAA'
        }]),
        smooth: false
      }, {
        zlevel: 1,
        yAxisIndex: 0,
        name: "Tylko Clearnet (IPv4, IPv6)",
        showSymbol: false,
        symbol: 'none',
        data: data.clearnet_nodes,
        type: 'line',
        lineStyle: {
          width: 2
        },
        areaStyle: {
          opacity: 0.5
        },
        stack: 'Total',
        color: new _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__.echarts.graphic.LinearGradient(0, 0.75, 0, 1, [{
          offset: 0,
          color: '#FFB300'
        }, {
          offset: 1,
          color: '#FFB300AA'
        }]),
        smooth: false
      }, {
        zlevel: 1,
        yAxisIndex: 0,
        name: "Tylko Darknet (Tor, I2P, cjdns)",
        showSymbol: false,
        symbol: 'none',
        data: data.tor_nodes,
        type: 'line',
        lineStyle: {
          width: 2
        },
        areaStyle: {
          opacity: 0.5
        },
        stack: 'Total',
        color: new _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__.echarts.graphic.LinearGradient(0, 0.75, 0, 1, [{
          offset: 0,
          color: '#7D4698'
        }, {
          offset: 1,
          color: '#7D4698AA'
        }]),
        smooth: false
      }];
      this.chartOptions = {
        title: title,
        animation: false,
        grid: {
          height: this.widget ? (this.height || 120) - 60 : undefined,
          top: this.widget ? 20 : 40,
          bottom: this.widget ? 0 : 70,
          right: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() && this.widget ? 35 : this.right,
          left: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() && this.widget ? 40 : this.left
        },
        tooltip: {
          show: !(0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() || !this.widget,
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          backgroundColor: 'rgba(17, 19, 31, 1)',
          borderRadius: 4,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          textStyle: {
            color: 'var(--tooltip-grey)',
            align: 'left'
          },
          borderColor: '#000',
          formatter: ticks => {
            let total = 0;
            const date = new Date(ticks[0].data[0]).toLocaleDateString(this.locale, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            let tooltip = `<b style="color: white; margin-left: 2px">${date}</b><br>`;
            for (const tick of ticks.reverse()) {
              if (tick.seriesName.indexOf('ignored') !== -1) {
                continue;
              }
              if (tick.seriesIndex === 0) {
                // Tor
                tooltip += `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(tick.data[1], this.locale, '1.0-0')}`;
              } else if (tick.seriesIndex === 1) {
                // Clearnet
                tooltip += `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(tick.data[1], this.locale, '1.0-0')}`;
              } else if (tick.seriesIndex === 2) {
                // Unannounced
                tooltip += `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(tick.data[1], this.locale, '1.0-0')}`;
              } else if (tick.seriesIndex === 3) {
                // Tor + Clearnet
                tooltip += `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(tick.data[1], this.locale, '1.0-0')}`;
              }
              tooltip += `<br>`;
              total += tick.data[1];
            }
            tooltip += `<b>Total:</b> ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(total, this.locale, '1.0-0')} nodes`;
            return tooltip;
          }
        },
        xAxis: data.tor_nodes.length === 0 ? undefined : {
          type: 'time',
          splitNumber: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() || this.widget ? 5 : 10,
          axisLabel: {
            hideOverlap: true
          }
        },
        legend: this.widget || data.tor_nodes.length === 0 ? undefined : {
          padding: 10,
          data: [{
            name: "Tylko Darknet (Tor, I2P, cjdns)",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Tylko Clearnet (IPv4, IPv6)",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Clearnet i Darknet",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Nieznany",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }],
          selected: this.widget ? undefined : JSON.parse(this.storageService.getValue('nodes_networks_legend')) ?? {
            '$localize`Darknet Only (Tor, I2P, cjdns)`': true,
            '$localize`Clearnet Only (IPv4, IPv6)`': true,
            '$localize`Clearnet and Darknet`': true,
            '$localize`:@@e5d8bb389c702588877f039d72178f219453a72d:Unknown`': true
          }
        },
        yAxis: data.tor_nodes.length === 0 ? undefined : [{
          type: 'value',
          position: 'left',
          axisLabel: {
            color: 'rgb(110, 112, 121)',
            formatter: val => {
              if (this.widget) {
                return `${this.amountShortenerPipe.transform(val, 0)}`;
              } else {
                return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(Math.round(val), this.locale, '1.0-0')}`;
              }
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: 'var(--transparent-fg)',
              opacity: 0.25
            }
          },
          min: 0,
          interval: 3000
        }, {
          type: 'value',
          position: 'right',
          axisLabel: {
            color: 'rgb(110, 112, 121)',
            formatter: val => {
              if (this.widget) {
                return `${this.amountShortenerPipe.transform(val, 0)}`;
              } else {
                return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(Math.round(val), this.locale, '1.0-0')}`;
              }
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: 'var(--transparent-fg)',
              opacity: 0.25
            }
          },
          min: 0,
          interval: 3000
        }],
        series: data.tor_nodes.length === 0 ? [] : series.concat(series.map(serie => {
          // We create dummy duplicated series so when we use the data zoom, the y axis
          // both scales properly
          const invisibleSerie = {
            ...serie
          };
          invisibleSerie.name = 'ignored' + Math.random().toString();
          invisibleSerie.stack = 'ignored';
          invisibleSerie.yAxisIndex = 1;
          invisibleSerie.lineStyle = {
            opacity: 0
          };
          invisibleSerie.areaStyle = {
            opacity: 0
          };
          return invisibleSerie;
        })),
        dataZoom: this.widget ? null : [{
          type: 'inside',
          realtime: true,
          zoomLock: true,
          maxSpan: 100,
          minSpan: 5,
          moveOnMouseMove: false
        }, {
          showDetail: false,
          show: true,
          type: 'slider',
          brushSelect: false,
          realtime: true,
          left: 20,
          right: 15,
          selectedDataBackground: {
            lineStyle: {
              color: '#fff',
              opacity: 0.45
            },
            areaStyle: {
              opacity: 0
            }
          }
        }]
      };
      if ((0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() && this.chartOptions.legend) {
        // @ts-ignore
        this.chartOptions.legend.left = 50;
      }
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
      this.chartInstance.on('legendselectchanged', e => {
        this.storageService.setValue('nodes_networks_legend', JSON.stringify(e.selected));
      });
    }
    onSaveChart() {
      // @ts-ignore
      const prevBottom = this.chartOptions.grid.bottom;
      const now = new Date();
      // @ts-ignore
      this.chartOptions.grid.bottom = 40;
      this.chartOptions.backgroundColor = 'var(--active-bg)';
      this.chartInstance.setOption(this.chartOptions);
      (0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__.download)(this.chartInstance.getDataURL({
        pixelRatio: 2,
        excludeComponents: ['dataZoom']
      }), `lightning-nodes-per-network-${Math.round(now.getTime() / 1000)}.svg`);
      // @ts-ignore
      this.chartOptions.grid.bottom = prevBottom;
      this.chartOptions.backgroundColor = 'none';
      this.chartInstance.setOption(this.chartOptions);
    }
    static #_ = this.ɵfac = function NodesNetworksChartComponent_Factory(t) {
      return new (t || NodesNetworksChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_4__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_mining_service__WEBPACK_IMPORTED_MODULE_6__.MiningService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__.AmountShortenerPipe));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: NodesNetworksChartComponent,
      selectors: [["app-nodes-networks-chart"]],
      hostVars: 1,
      hostBindings: function NodesNetworksChartComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("dir", ctx.dir);
        }
      },
      inputs: {
        height: "height",
        right: "right",
        left: "left",
        widget: "widget"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
      decls: 11,
      vars: 11,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-networks
           */
          const MSG_EXTERNAL_3012683614791775125$$SRC_APP_LIGHTNING_NODES_NETWORKS_CHART_NODES_NETWORKS_CHART_COMPONENT_TS_0 = goog.getMsg("Lightning Nodes Per Network");
          i18n_0 = MSG_EXTERNAL_3012683614791775125$$SRC_APP_LIGHTNING_NODES_NETWORKS_CHART_NODES_NETWORKS_CHART_COMPONENT_TS_0;
        } else {
          i18n_0 = "W\u0119z\u0142y Lightning wg sieci";
        }
        return [i18n_0, [1, "card-header", "mb-0", "mb-md-4"], [1, "d-flex", "d-md-block", "align-items-baseline"], [1, "btn", "p-0", "pl-2", 2, "margin", "0 0 4px 0px", 3, "click"], [3, "icon", "fixedWidth"], ["class", "formRadioGroup", 3, "formGroup", 4, "ngIf"], ["echarts", "", 3, "class", "style", "initOpts", "options", "chartInit", 4, "browserOnly"], ["class", "text-center loadingGraphs", 4, "ngIf"], [1, "formRadioGroup", 3, "formGroup"], ["name", "radioBasic", 1, "btn-group", "btn-group-toggle"], ["class", "btn btn-primary btn-sm", 3, "active", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm"], ["type", "radio", "fragment", "all", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "1m", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "3m", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "6m", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "1y", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "2y", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "3y", "formControlName", "dateSpan", 3, "value", "routerLink"], ["echarts", "", 3, "chartInit", "initOpts", "options"], [1, "text-center", "loadingGraphs"], [1, "spinner-border", "text-light"]];
      },
      template: function NodesNetworksChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NodesNetworksChartComponent_Template_button_click_5_listener() {
            return ctx.onSaveChart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "fa-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, NodesNetworksChartComponent_form_7_Template, 12, 15, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, NodesNetworksChartComponent_div_9_Template, 1, 8, "div", 6)(10, NodesNetworksChartComponent_div_10_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.widget === false ? "full-container" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](ctx.widget ? "display:none" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](10, _c0))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 8, ctx.nodesNetworkObservable$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__.BrowserOnlyDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_17__.NgxEchartsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__.RelativeUrlPipe],
      styles: [".card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  font-size: 18px;\n}\n@media (min-width: 465px) {\n  .card-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (min-width: 992px) {\n  .card-header[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\n\n.main-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--fg);\n  opacity: var(--opacity);\n  margin-top: -13px;\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 3px;\n}\n\n.full-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 15px;\n  width: 100%;\n  height: calc(100vh - 225px);\n  min-height: 400px;\n}\n@media (min-width: 992px) {\n  .full-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 150px);\n  }\n}\n\n.chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  padding-bottom: 20px;\n  padding-right: 10px;\n}\n@media (max-width: 992px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 829px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 629px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n@media (max-width: 567px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n\n.chart-widget[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.pool-distribution[_ngcontent-%COMP%] {\n  min-height: 56px;\n  display: block;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  margin: 0px auto 20px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2) {\n  order: 2;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2) {\n    order: 3;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n  order: 3;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    order: 2;\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    display: block;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--title-fg);\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n}\n\n.skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  max-width: 80px;\n  margin: 15px auto 3px;\n}", ".loadingGraphs[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 15px);\n      z-index: 99;\n    }"],
      changeDetection: 0
    });
  }
  return NodesNetworksChartComponent;
})();

/***/ }),

/***/ 53480:
/*!****************************************************************************************!*\
  !*** ./src/app/lightning/nodes-per-country-chart/nodes-per-country-chart.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesPerCountryChartComponent: () => (/* binding */ NodesPerCountryChartComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app.constants */ 17539);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-echarts */ 57021);

















const _c0 = () => ["fas", "download"];
const _c1 = (a0, a1) => [a0, a1];
function NodesPerCountryChartComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("chartInit", function NodesPerCountryChartComponent_div_11_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodesPerCountryChartComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function NodesPerCountryChartComponent_tbody_26_tr_1_app_amount_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-amount", 35);
  }
  if (rf & 2) {
    const country_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("satoshis", country_r3.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function NodesPerCountryChartComponent_tbody_26_tr_1_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](3, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const country_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 1, (tmp_6_0 = country_r3.capacity) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0, 1), " ");
  }
}
function NodesPerCountryChartComponent_tbody_26_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 30)(4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, NodesPerCountryChartComponent_tbody_26_tr_1_app_amount_16_Template, 1, 3, "app-amount", 34)(17, NodesPerCountryChartComponent_tbody_26_tr_1_ng_template_17_Template, 4, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r3 = ctx.$implicit;
    const smallchannel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](country_r3.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 8, "/lightning/nodes/country"), country_r3.iso));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](country_r3.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](country_r3.name.en);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", country_r3.share, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](country_r3.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", country_r3.capacity > 100000000)("ngIfElse", smallchannel_r4);
  }
}
function NodesPerCountryChartComponent_tbody_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesPerCountryChartComponent_tbody_26_tr_1_Template, 19, 13, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const countries_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "pools-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", countries_r5);
  }
}
let NodesPerCountryChartComponent = /*#__PURE__*/(() => {
  class NodesPerCountryChartComponent {
    constructor(apiService, seoService, amountShortenerPipe, zone, stateService, router) {
      this.apiService = apiService;
      this.seoService = seoService;
      this.amountShortenerPipe = amountShortenerPipe;
      this.zone = zone;
      this.stateService = stateService;
      this.router = router;
      this.isLoading = true;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
      this.timespan = '';
      this.chartInstance = undefined;
      this.dir = 'ltr';
    }
    ngOnInit() {
      this.seoService.setTitle("W\u0119z\u0142y Lightning wg pa\u0144stw");
      this.seoService.setDescription("Zobacz rozk\u0142ad geograficzny sieci Lightning: ile w\u0119z\u0142\xF3w Lightning jest hostowanych w krajach na ca\u0142ym \u015Bwiecie, \u0142\u0105czn\u0105 pojemno\u015B\u0107 BTC dla ka\u017Cdego kraju i nie tylko.");
      this.nodesPerCountryObservable$ = this.apiService.getNodesPerCountry$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(data => {
        for (let i = 0; i < data.length; ++i) {
          data[i].rank = i + 1;
          data[i].iso = data[i].iso.toLowerCase();
          data[i].flag = (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_3__.getFlagEmoji)(data[i].iso);
        }
        return data.slice(0, 100);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(data => {
        this.isLoading = false;
        this.prepareChartOptions(data);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    generateChartSerieData(country) {
      const shareThreshold = this.isMobile() ? 2 : 1;
      const data = [];
      let totalShareOther = 0;
      let totalNodeOther = 0;
      let edgeDistance = '10%';
      if (this.isMobile()) {
        edgeDistance = 0;
      }
      country.forEach(country => {
        if (country.share < shareThreshold) {
          totalShareOther += country.share;
          totalNodeOther += country.count;
          return;
        }
        data.push({
          value: country.share,
          name: country.name.en + (this.isMobile() ? `` : ` (${country.share}%)`),
          label: {
            overflow: 'truncate',
            color: 'var(--tooltip-grey)',
            alignTo: 'edge',
            edgeDistance: edgeDistance
          },
          tooltip: {
            show: !this.isMobile(),
            backgroundColor: 'rgba(17, 19, 31, 1)',
            borderRadius: 4,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            textStyle: {
              color: 'var(--tooltip-grey)'
            },
            borderColor: '#000',
            formatter: () => {
              const nodeCount = country.count.toString();
              return `<b style="color: white">${country.name.en} (${country.share}%)</b><br>` + "" + nodeCount + " w\u0119z\u0142\xF3w" + `<br>` + "" + this.amountShortenerPipe.transform(country.capacity / 100000000, 2) + " pojemno\u015B\u0107 BTC";
            }
          },
          data: country.iso
        });
      });
      // 'Other'
      data.push({
        itemStyle: {
          color: 'grey'
        },
        value: totalShareOther,
        name: "Inne (" + (totalShareOther.toFixed(2) + '%') + ")",
        label: {
          overflow: 'truncate',
          color: 'var(--tooltip-grey)',
          alignTo: 'edge',
          edgeDistance: edgeDistance
        },
        tooltip: {
          backgroundColor: 'rgba(17, 19, 31, 1)',
          borderRadius: 4,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          textStyle: {
            color: 'var(--tooltip-grey)'
          },
          borderColor: '#000',
          formatter: () => {
            const nodeCount = totalNodeOther.toString();
            return `<b style="color: white">` + "Inne (" + (totalShareOther.toFixed(2) + '%') + ")" + `</b><br>` + "" + nodeCount + " w\u0119z\u0142\xF3w";
          }
        },
        data: 9999
      });
      return data;
    }
    prepareChartOptions(country) {
      let pieSize = ['20%', '80%']; // Desktop
      if (this.isMobile()) {
        pieSize = ['15%', '60%'];
      }
      this.chartOptions = {
        animation: false,
        color: _app_app_constants__WEBPACK_IMPORTED_MODULE_0__.originalChartColors,
        tooltip: {
          trigger: 'item',
          textStyle: {
            align: 'left'
          }
        },
        series: [{
          zlevel: 0,
          minShowLabelAngle: 3.6,
          name: 'Mining pool',
          type: 'pie',
          radius: pieSize,
          data: this.generateChartSerieData(country),
          labelLine: {
            lineStyle: {
              width: 2
            },
            length: this.isMobile() ? 1 : 20,
            length2: this.isMobile() ? 1 : undefined
          },
          label: {
            fontSize: 14
          },
          itemStyle: {
            borderRadius: 1,
            borderWidth: 1,
            borderColor: '#000'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 40,
              shadowColor: 'rgba(0, 0, 0, 0.75)'
            },
            labelLine: {
              lineStyle: {
                width: 4
              }
            }
          }
        }]
      };
    }
    isMobile() {
      return window.innerWidth <= 767.98;
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
      this.chartInstance.on('click', e => {
        if (e.data.data === 9999) {
          // "Other"
          return;
        }
        this.zone.run(() => {
          const url = new _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeUrlPipe(this.stateService).transform(`/lightning/nodes/country/${e.data.data}`);
          this.router.navigate([url]);
        });
      });
    }
    onSaveChart() {
      const now = new Date();
      this.chartOptions.backgroundColor = 'var(--active-bg)';
      this.chartInstance.setOption(this.chartOptions);
      (0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__.download)(this.chartInstance.getDataURL({
        pixelRatio: 2,
        excludeComponents: ['dataZoom']
      }), `lightning-nodes-per-country-${Math.round(now.getTime() / 1000)}.svg`);
      this.chartOptions.backgroundColor = 'none';
      this.chartInstance.setOption(this.chartOptions);
    }
    isEllipsisActive(e) {
      return e.offsetWidth < e.scrollWidth;
    }
    static #_ = this.ɵfac = function NodesPerCountryChartComponent_Factory(t) {
      return new (t || NodesPerCountryChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_6__.AmountShortenerPipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: NodesPerCountryChartComponent,
      selectors: [["app-nodes-per-country-chart"]],
      hostVars: 1,
      hostBindings: function NodesPerCountryChartComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("dir", ctx.dir);
        }
      },
      decls: 28,
      vars: 7,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-per-country
           */
          const MSG_EXTERNAL_8598075584049503402$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_0 = goog.getMsg("Lightning Nodes Per Country");
          i18n_0 = MSG_EXTERNAL_8598075584049503402$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_0;
        } else {
          i18n_0 = "W\u0119z\u0142y Lightning wg pa\u0144stw";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_1 = goog.getMsg("(Tor nodes excluded)");
          i18n_1 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_1;
        } else {
          i18n_1 = "(bez w\u0119z\u0142\xF3w Tor)";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.rank
           */
          const MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_2 = goog.getMsg("Rank");
          i18n_2 = MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_2;
        } else {
          i18n_2 = "Ranga";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.as-name
           */
          const MSG_EXTERNAL_8953033926734869941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_3 = goog.getMsg("Name");
          i18n_3 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_3;
        } else {
          i18n_3 = "Nazwa";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.share
           */
          const MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_4 = goog.getMsg("Share");
          i18n_4 = MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_4;
        } else {
          i18n_4 = "Udost\u0119pnij";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_5 = goog.getMsg("Nodes");
          i18n_5 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_5;
        } else {
          i18n_5 = "W\u0119zly";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_6 = goog.getMsg("Capacity");
          i18n_6 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_6;
        } else {
          i18n_6 = "Pojemno\u015B\u0107";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_7 = goog.getMsg("sats");
          i18n_7 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_7;
        } else {
          i18n_7 = "sats";
        }
        return [["smallchannel", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, [1, "full-container", "h-100"], [1, "card-header"], [1, "d-flex", "d-md-block", "align-items-baseline", 2, "margin-bottom", "-5px"], [1, "btn", "p-0", "pl-2", 2, "margin", "0 0 4px 0px", 3, "click"], [3, "icon", "fixedWidth"], [2, "color", "var(--transparent-fg)"], [1, "container", "pb-lg-0"], [1, "pb-lg-5"], ["class", "chart w-100", "echarts", "", 3, "initOpts", "options", "chartInit", 4, "browserOnly"], ["class", "text-center loadingGraphs", 4, "ngIf"], [1, "table", "table-borderless", "table-fixed", "text-center", "m-auto", 2, "max-width", "900px"], [1, "text-left", "rank"], [1, "text-left", "name"], [1, "text-right", "share"], [1, "text-right", "nodes"], [1, "text-right", "capacity"], [4, "ngIf"], ["echarts", "", 1, "chart", "w-100", 3, "chartInit", "initOpts", "options"], [1, "text-center", "loadingGraphs"], [1, "spinner-border", "text-light"], [4, "ngFor", "ngForOf"], [1, "text-left", "text-truncate", "name"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "flag"], [1, "link"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "sats"]];
      },
      template: function NodesPerCountryChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NodesPerCountryChartComponent_Template_button_click_5_listener() {
            return ctx.onSaveChart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "fa-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "small", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 15)(10, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, NodesPerCountryChartComponent_div_11_Template, 1, 2, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, NodesPerCountryChartComponent_div_12_Template, 2, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "table", 19)(14, "thead")(15, "tr")(16, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](17, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](19, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](21, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](23, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](25, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, NodesPerCountryChartComponent_tbody_26_Template, 2, 2, "tbody", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c0))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 4, ctx.nodesPerCountryObservable$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_8__.BrowserOnlyDirective, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_9__.AmountComponent, ngx_echarts__WEBPACK_IMPORTED_MODULE_15__.NgxEchartsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeUrlPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_6__.AmountShortenerPipe],
      styles: [".sats[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n  top: 0px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  font-size: 18px;\n}\n@media (min-width: 465px) {\n  .card-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n.full-container[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  width: 100%;\n  height: calc(100% - 140px);\n}\n@media (max-width: 992px) {\n  .full-container[_ngcontent-%COMP%] {\n    height: calc(100% - 190px);\n  }\n}\n@media (max-width: 575px) {\n  .full-container[_ngcontent-%COMP%] {\n    height: calc(100% - 230px);\n  }\n}\n\n.chart[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n@media (max-width: 767.98px) {\n  .chart[_ngcontent-%COMP%] {\n    max-height: 230px;\n    margin-top: -35px;\n  }\n}\n\n.rank[_ngcontent-%COMP%] {\n  width: 8%;\n}\n@media (max-width: 576px) {\n  .rank[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.name[_ngcontent-%COMP%] {\n  width: 36%;\n}\n@media (max-width: 576px) {\n  .name[_ngcontent-%COMP%] {\n    width: 80%;\n    max-width: 150px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.share[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 576px) {\n  .share[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nodes[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 576px) {\n  .nodes[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.capacity[_ngcontent-%COMP%] {\n  width: 26%;\n}\n@media (max-width: 576px) {\n  .capacity[_ngcontent-%COMP%] {\n    width: 10%;\n    max-width: 100px;\n  }\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.flag[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.text-truncate[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"],
      changeDetection: 0
    });
  }
  return NodesPerCountryChartComponent;
})();

/***/ }),

/***/ 8184:
/*!****************************************************************************!*\
  !*** ./src/app/lightning/nodes-per-country/nodes-per-country.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesPerCountry: () => (/* binding */ NodesPerCountry)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/geolocation/geolocation.component */ 23456);
/* harmony import */ var _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/nodes-map/nodes-map.component */ 48296);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);















const _c0 = (a0, a1) => [a0, a1];
function NodesPerCountry_div_7_app_amount_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-amount", 43);
  }
  if (rf & 2) {
    const countryNodes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("satoshis", countryNodes_r1.sumLiquidity)("digitsInfo", "1.2-2")("noFiat", false);
  }
}
function NodesPerCountry_div_7_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](3, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const countryNodes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 1, countryNodes_r1.sumLiquidity, 1), " ");
  }
}
function NodesPerCountry_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "table", 33)(3, "tbody")(4, "tr")(5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](6, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "tr")(10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, NodesPerCountry_div_7_app_amount_13_Template, 1, 3, "app-amount", 34)(14, NodesPerCountry_div_7_ng_template_14_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "span", 36)(19, "app-fiat", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](22, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](27, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "tr")(31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](32, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "td", 38)(34, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 40)(38, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "app-nodes-map", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const countryNodes_r1 = ctx.ngIf;
    const smallnode_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](countryNodes_r1.nodes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", countryNodes_r1.sumLiquidity > 100000000)("ngIfElse", smallnode_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", countryNodes_r1.sumLiquidity);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](countryNodes_r1.sumChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](countryNodes_r1.ispCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 11, "/lightning/nodes/isp"), countryNodes_r1.topIsp.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", countryNodes_r1.topIsp.name, " [ASN ", countryNodes_r1.topIsp.id, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("widget", true)("nodes", countryNodes_r1.nodes);
  }
}
function NodesPerCountry_tbody_24_tr_1_app_amount_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-amount", 43);
  }
  if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("satoshis", node_r3.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function NodesPerCountry_tbody_24_tr_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 1, node_r3.capacity, 1), " ");
  }
}
function NodesPerCountry_tbody_24_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 46)(2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-timestamp", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-timestamp", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, NodesPerCountry_tbody_24_tr_1_app_amount_10_Template, 1, 3, "app-amount", 34)(11, NodesPerCountry_tbody_24_tr_1_ng_template_11_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-geolocation", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const smallchannel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 11, "/lightning/node/"), node_r3.public_key));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](node_r3.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r3.first_seen);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r3.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", node_r3.capacity > 100000000)("ngIfElse", smallchannel_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", node_r3.channels, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", node_r3.geolocation)("type", "list-country");
  }
}
function NodesPerCountry_tbody_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesPerCountry_tbody_24_tr_1_Template, 17, 16, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const countryNodes_r5 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", countryNodes_r5)("ngForTrackBy", ctx_r5.trackByPublicKey);
  }
}
function NodesPerCountry_ng_template_26_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function NodesPerCountry_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesPerCountry_ng_template_26_tr_1_Template, 13, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.skeletonLines);
  }
}
function NodesPerCountry_ngb_pagination_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ngb-pagination", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("pageChange", function NodesPerCountry_ngb_pagination_28_Template_ngb_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r5.page, $event) || (ctx_r5.page = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function NodesPerCountry_ngb_pagination_28_Template_ngb_pagination_pageChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.pageChange(ctx_r5.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const countryNodes_r8 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r5.isLoading ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", countryNodes_r8.nodes.length)("rotate", true)("maxSize", ctx_r5.maxSize)("pageSize", ctx_r5.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("page", ctx_r5.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("boundaryLinks", true)("ellipses", false);
  }
}
let NodesPerCountry = /*#__PURE__*/(() => {
  class NodesPerCountry {
    constructor(apiService, seoService, cd, route) {
      this.apiService = apiService;
      this.seoService = seoService;
      this.cd = cd;
      this.route = route;
      this.startingIndexSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(0);
      this.page = 1;
      this.pageSize = 15;
      this.maxSize = window.innerWidth <= 767.98 ? 3 : 5;
      this.isLoading = true;
      this.skeletonLines = [];
      for (let i = 0; i < this.pageSize; ++i) {
        this.skeletonLines.push(i);
      }
    }
    ngOnInit() {
      this.nodes$ = this.apiService.getNodeForCountry$(this.route.snapshot.params.country).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoading = true), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
        this.seoService.setTitle("W\u0119z\u0142y Lightning w " + response.country.en + "");
        this.seoService.setDescription("Przegl\u0105daj wszystkie w\u0119z\u0142y Lightning hostowane w " + response.country.en + " i zobacz przegl\u0105d pojemno\u015Bci ka\u017Cdego w\u0119z\u0142a, liczb\u0119 otwartych kana\u0142\xF3w i nie tylko.");
        this.country = {
          name: response.country.en,
          flag: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__.getFlagEmoji)(this.route.snapshot.params.country)
        };
        for (const i in response.nodes) {
          response.nodes[i].geolocation = {
            country: response.nodes[i].country?.en,
            city: response.nodes[i].city?.en,
            subdivision: response.nodes[i].subdivision?.en,
            iso: response.nodes[i].iso_code
          };
        }
        const sumLiquidity = response.nodes.reduce((partialSum, a) => partialSum + a.capacity, 0);
        const sumChannels = response.nodes.reduce((partialSum, a) => partialSum + a.channels, 0);
        const isps = {};
        const topIsp = {
          count: 0,
          id: '',
          name: ''
        };
        for (const node of response.nodes) {
          if (!node.isp) {
            continue;
          }
          if (!isps[node.isp]) {
            isps[node.isp] = {
              count: 0,
              asns: []
            };
          }
          if (isps[node.isp].asns.indexOf(node.as_number) === -1) {
            isps[node.isp].asns.push(node.as_number);
          }
          isps[node.isp].count++;
          if (isps[node.isp].count > topIsp.count) {
            topIsp.count = isps[node.isp].count;
            topIsp.id = isps[node.isp].asns.join(',');
            topIsp.name = node.isp;
          }
        }
        return {
          nodes: response.nodes,
          sumLiquidity: sumLiquidity,
          sumChannels: sumChannels,
          topIsp: topIsp,
          ispCount: Object.keys(isps).length
        };
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => {
        this.isLoading = false;
        this.cd.markForCheck();
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.share)());
      this.nodesPagination$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.nodes$, this.startingIndexSubject]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([response, startingIndex]) => response.nodes.slice(startingIndex, startingIndex + this.pageSize)));
    }
    trackByPublicKey(index, node) {
      return node.public_key;
    }
    pageChange(page) {
      this.startingIndexSubject.next((page - 1) * this.pageSize);
      this.page = page;
    }
    static #_ = this.ɵfac = function NodesPerCountry_Factory(t) {
      return new (t || NodesPerCountry)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: NodesPerCountry,
      selectors: [["app-nodes-per-country"]],
      decls: 30,
      vars: 12,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-in-country
           */
          const MSG_EXTERNAL_7293053159126047167$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_0 = goog.getMsg("Lightning nodes in {$interpolation}", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ country?.name }}"
            }
          });
          i18n_0 = MSG_EXTERNAL_7293053159126047167$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_0;
        } else {
          i18n_0 = "W\u0119z\u0142y Lightning w " + "\uFFFD0\uFFFD" + "";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_1 = goog.getMsg("Alias");
          i18n_1 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_1;
        } else {
          i18n_1 = "Alias";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction first seen
           * @meaning transaction.first-seen
           */
          const MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_2 = goog.getMsg("First seen");
          i18n_2 = MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_2;
        } else {
          i18n_2 = "Widziana pierwszy raz";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.last_update
           */
          const MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_3 = goog.getMsg("Last update");
          i18n_3 = MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_3;
        } else {
          i18n_3 = "Ostatnia aktualizacja";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_4 = goog.getMsg("Capacity");
          i18n_4 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_4;
        } else {
          i18n_4 = "Pojemno\u015B\u0107";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_5 = goog.getMsg("Channels");
          i18n_5 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_5;
        } else {
          i18n_5 = "Kana\u0142y";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_6 = goog.getMsg("Location");
          i18n_6 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_6;
        } else {
          i18n_6 = "Lokalizacja";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_7 = goog.getMsg("Nodes");
          i18n_7 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_7;
        } else {
          i18n_7 = "W\u0119zly";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity
           */
          const MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_8 = goog.getMsg("Liquidity");
          i18n_8 = MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_8;
        } else {
          i18n_8 = "P\u0142ynno\u015B\u0107";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_9 = goog.getMsg("Channels");
          i18n_9 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_9;
        } else {
          i18n_9 = "Kana\u0142y";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.isp-count
           */
          const MSG_EXTERNAL_2589643288462868374$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_10 = goog.getMsg("ISP Count");
          i18n_10 = MSG_EXTERNAL_2589643288462868374$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_10;
        } else {
          i18n_10 = "Liczba ISP";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-isp
           */
          const MSG_EXTERNAL_7264238918517591080$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_11 = goog.getMsg("Top ISP");
          i18n_11 = MSG_EXTERNAL_7264238918517591080$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_11;
        } else {
          i18n_11 = "Wiod\u0105cy ISP";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_12 = goog.getMsg("sats");
          i18n_12 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_12;
        } else {
          i18n_12 = "sats";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_13 = goog.getMsg("sats");
          i18n_13 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_NODES_PER_COUNTRY_COMPONENT_TS_13;
        } else {
          i18n_13 = "sats";
        }
        return [["skeleton", ""], ["smallnode", ""], ["smallchannel", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, [1, "container-xl", "full-height", 2, "min-height", "335px"], [2, "font-size", "50px", "vertical-align", "sub"], [1, "box"], ["class", "row", 4, "ngIf"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [1, "alias", "text-left"], [1, "timestamp-first", "text-left"], [1, "timestamp-update", "text-left"], [1, "capacity", "text-right"], [1, "channels", "text-right"], [1, "city", "text-right"], [4, "ngIf", "ngIfElse"], ["class", "pagination-container float-right mt-2", 3, "class", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses", "pageChange", 4, "ngIf"], [1, "row"], [1, "col-12", "col-md-6"], [1, "table", "table-borderless", "table-striped"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [1, "d-none", "d-md-inline-block"], [1, "d-block", "d-md-none"], ["digitsInfo", "1.0-0", 3, "value"], [1, "text-truncate"], [1, "d-block", "text-wrap", 3, "routerLink"], [1, "col-12", "col-md-6", "p-3", "p-md-0", "pr-md-3"], [2, "background-color", "var(--stat-box-bg)"], ["type", "country", 3, "widget", "nodes"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "sats"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "alias", "text-left", "text-truncate"], [3, "routerLink"], [3, "customFormat", "unixTime"], [1, "city", "text-right", "text-truncate"], [3, "data", "type"], [4, "ngFor", "ngForOf"], [1, "skeleton-loader"], [1, "pagination-container", "float-right", "mt-2", 3, "pageChange", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses"]];
      },
      template: function NodesPerCountry_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "h1")(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](3, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, NodesPerCountry_div_7_Template, 40, 16, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 21)(10, "table", 22)(11, "thead")(12, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](13, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](15, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](17, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](19, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](21, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](23, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, NodesPerCountry_tbody_24_Template, 2, 2, "tbody", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, NodesPerCountry_ng_template_26_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, NodesPerCountry_ngb_pagination_28_Template, 1, 9, "ngb-pagination", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const skeleton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nExp"](ctx.country == null ? null : ctx.country.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nApply"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.country == null ? null : ctx.country.flag, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 6, ctx.nodes$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 8, ctx.nodesPagination$))("ngIfElse", skeleton_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 10, ctx.nodes$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__.FiatComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__.AmountComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__.TimestampComponent, _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__.GeolocationComponent, _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__.NodesMap, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__.RelativeUrlPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_9__.AmountShortenerPipe],
      styles: [".container-xl[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  padding-bottom: 100px;\n}\n\n.sats[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n  top: 0px;\n}\n\n.alias[_ngcontent-%COMP%] {\n  width: 30%;\n  max-width: 400px;\n  padding-right: 70px;\n}\n@media (max-width: 576px) {\n  .alias[_ngcontent-%COMP%] {\n    width: 50%;\n    max-width: 150px;\n    padding-right: 0px;\n  }\n}\n\n.timestamp-first[_ngcontent-%COMP%] {\n  width: 20%;\n}\n@media (max-width: 1060px) {\n  .timestamp-first[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.timestamp-update[_ngcontent-%COMP%] {\n  width: 16%;\n}\n@media (max-width: 1060px) {\n  .timestamp-update[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.capacity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 576px) {\n  .capacity[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.channels[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 576px) {\n  .channels[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.city[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n@media (max-width: 675px) {\n  .city[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"],
      changeDetection: 0
    });
  }
  return NodesPerCountry;
})();

/***/ }),

/***/ 12800:
/*!********************************************************************************!*\
  !*** ./src/app/lightning/nodes-per-isp-chart/nodes-per-isp-chart.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesPerISPChartComponent: () => (/* binding */ NodesPerISPChartComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app.constants */ 17539);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/components/toggle/toggle.component */ 64338);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-echarts */ 57021);



















const _c0 = () => ["fas", "download"];
const _c1 = a0 => ({
  height: a0
});
const _c2 = a0 => [a0];
function NodesPerISPChartComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "app-amount", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 22)(7, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](8, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "app-amount", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 22)(12, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](13, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-amount", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stats_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", stats_r1.clearnetCapacity)("digitsInfo", "1.2-2")("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", stats_r1.unknownCapacity)("digitsInfo", "1.2-2")("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", stats_r1.torCapacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function NodesPerISPChartComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, NodesPerISPChartComponent_div_1_div_1_Template, 16, 9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const loadingReward_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, ctx_r1.nodesPerAsObservable$))("ngIfElse", loadingReward_r3);
  }
}
function NodesPerISPChartComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NodesPerISPChartComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onSaveChart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "small", 32)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](8, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](2, _c0))("fixedWidth", true);
  }
}
function NodesPerISPChartComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("chartInit", function NodesPerISPChartComponent_div_3_div_1_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, ctx_r1.widget ? ctx_r1.height + "px" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r1.widget ? "chart-widget" : "chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("initOpts", ctx_r1.chartInitOptions)("options", ctx_r1.chartOptions);
  }
}
function NodesPerISPChartComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "app-toggle", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("toggleStatusChanged", function NodesPerISPChartComponent_div_3_div_2_Template_app_toggle_toggleStatusChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onGroupToggleStatusChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("textLeft", "Sort by nodes")("textRight", "capacity")("checked", true);
  }
}
function NodesPerISPChartComponent_div_3_table_3_tbody_13_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 47)(4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "app-amount", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const isp_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](isp_r7[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](10, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 8, "/lightning/nodes/isp/" + isp_r7[0])));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](isp_r7[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r1.sortBy === "capacity" ? isp_r7[7] : isp_r7[6], "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](isp_r7[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("satoshis", isp_r7[2])("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function NodesPerISPChartComponent_div_3_table_3_tbody_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, NodesPerISPChartComponent_div_3_table_3_tbody_13_tr_1_Template, 13, 12, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("data-cy", "pools-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", result_r8.ispRanking);
  }
}
function NodesPerISPChartComponent_div_3_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "table", 40)(1, "thead")(2, "tr")(3, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](10, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, NodesPerISPChartComponent_div_3_table_3_tbody_13_Template, 2, 2, "tbody", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 1, ctx_r1.nodesPerAsObservable$));
  }
}
function NodesPerISPChartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, NodesPerISPChartComponent_div_3_div_1_Template, 1, 8, "div", 34)(2, NodesPerISPChartComponent_div_3_div_2_Template, 2, 3, "div", 35)(3, NodesPerISPChartComponent_div_3_table_3_Template, 15, 3, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](!ctx_r1.widget ? "" : "pb-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.widget);
  }
}
function NodesPerISPChartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function NodesPerISPChartComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](3, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 22)(7, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 22)(12, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function NodesPerISPChartComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
let NodesPerISPChartComponent = /*#__PURE__*/(() => {
  class NodesPerISPChartComponent {
    constructor(apiService, seoService, amountShortenerPipe, router, zone, stateService) {
      this.apiService = apiService;
      this.seoService = seoService;
      this.amountShortenerPipe = amountShortenerPipe;
      this.router = router;
      this.zone = zone;
      this.stateService = stateService;
      this.height = 300;
      this.widget = false;
      this.isLoading = true;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
      this.timespan = '';
      this.sortBy = 'capacity';
      this.showUnknown = false;
      this.chartInstance = undefined;
      this.indexingInProgress = false;
      this.dir = 'ltr';
      this.sortBySubject = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
      this.showUnknownSubject = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    }
    ngOnInit() {
      if (!this.widget) {
        this.seoService.setTitle("W\u0119z\u0142y Lightning wg ISP");
        this.seoService.setDescription("Przegl\u0105daj 100 wiod\u0105cych ISP hostuj\u0105cych w\u0119z\u0142y Lightning wraz ze statystykami takimi jak \u0142\u0105czna liczba w\u0119z\u0142\xF3w na dostawc\u0119, \u0142\u0105czna pojemno\u015B\u0107 BTC na dostawc\u0119 i wi\u0119cej.");
      }
      this.nodesPerAsObservable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.sortBySubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.startWith)(true))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(selectedFilters => {
        this.sortBy = selectedFilters[0] ? 'capacity' : 'node-count';
        return this.apiService.getNodesPerIsp().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
          this.isLoading = false;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(data => {
          let nodeCount = 0;
          let totalCapacity = 0;
          for (let i = 0; i < data.ispRanking.length; ++i) {
            nodeCount += data.ispRanking[i][4];
            totalCapacity += data.ispRanking[i][2];
            data.ispRanking[i][5] = i;
          }
          for (let i = 0; i < data.ispRanking.length; ++i) {
            data.ispRanking[i][6] = Math.round(data.ispRanking[i][4] / nodeCount * 10000) / 100;
            data.ispRanking[i][7] = Math.round(data.ispRanking[i][2] / totalCapacity * 10000) / 100;
          }
          if (selectedFilters[0] === true) {
            data.ispRanking.sort((a, b) => b[7] - a[7]);
          } else {
            data.ispRanking.sort((a, b) => b[6] - a[6]);
          }
          for (let i = 0; i < data.ispRanking.length; ++i) {
            data.ispRanking[i][5] = i + 1;
          }
          this.prepareChartOptions(data.ispRanking);
          this.indexingInProgress = !data.ispRanking.length;
          return {
            taggedISP: data.ispRanking.length,
            clearnetCapacity: data.clearnetCapacity,
            unknownCapacity: data.unknownCapacity,
            torCapacity: data.torCapacity,
            ispRanking: data.ispRanking.slice(0, 100)
          };
        }));
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.share)());
      if (this.widget) {
        this.sortBySubject.next(false);
      }
    }
    generateChartSerieData(ispRanking) {
      let shareThreshold = 0.4;
      if (this.widget && (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() || (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
        shareThreshold = 1;
      } else if (this.widget) {
        shareThreshold = 0.75;
      }
      const data = [];
      let totalShareOther = 0;
      let nodeCountOther = 0;
      let capacityOther = 0;
      let edgeDistance = '10%';
      if ((0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() && this.widget) {
        edgeDistance = 0;
      } else if ((0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() && !this.widget || this.widget) {
        edgeDistance = 10;
      }
      ispRanking.forEach(isp => {
        if ((this.sortBy === 'capacity' ? isp[7] : isp[6]) < shareThreshold) {
          totalShareOther += this.sortBy === 'capacity' ? isp[7] : isp[6];
          nodeCountOther += isp[4];
          capacityOther += isp[2];
          return;
        }
        data.push({
          value: this.sortBy === 'capacity' ? isp[7] : isp[6],
          name: isp[1].replace('&', '') + ((0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() || this.widget ? `` : ` (${this.sortBy === 'capacity' ? isp[7] : isp[6]}%)`),
          label: {
            overflow: 'truncate',
            width: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() ? 75 : this.widget ? 125 : 250,
            color: 'var(--tooltip-grey)',
            alignTo: 'edge',
            edgeDistance: edgeDistance
          },
          tooltip: {
            show: !(0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)(),
            backgroundColor: 'rgba(17, 19, 31, 1)',
            borderRadius: 4,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            textStyle: {
              color: 'var(--tooltip-grey)'
            },
            borderColor: '#000',
            formatter: () => {
              const nodeCount = isp[4].toString();
              return `<b style="color: white">${isp[1]} (${this.sortBy === 'capacity' ? isp[7] : isp[6]}%)</b><br>` + "" + nodeCount + " w\u0119z\u0142\xF3w" + `<br>` + "" + this.amountShortenerPipe.transform(isp[2] / 100000000, 2) + " BTC";
            }
          },
          data: isp[0]
        });
      });
      // 'Other'
      data.push({
        itemStyle: {
          color: 'grey'
        },
        value: totalShareOther,
        name: "Inne (" + (totalShareOther.toFixed(2) + '%') + ")",
        label: {
          overflow: 'truncate',
          color: 'var(--tooltip-grey)',
          alignTo: 'edge',
          edgeDistance: edgeDistance
        },
        tooltip: {
          backgroundColor: 'rgba(17, 19, 31, 1)',
          borderRadius: 4,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          textStyle: {
            color: 'var(--tooltip-grey)'
          },
          borderColor: '#000',
          formatter: () => {
            const nodeCount = nodeCountOther.toString();
            return `<b style="color: white">` + "Inne (" + (totalShareOther.toFixed(2) + '%') + ")" + `</b><br>` + "" + nodeCount + " w\u0119z\u0142\xF3w" + `<br>` + "" + this.amountShortenerPipe.transform(capacityOther / 100000000, 2) + " BTC";
          }
        },
        data: 9999
      });
      return data;
    }
    prepareChartOptions(ispRanking) {
      let pieSize = ['20%', '80%']; // Desktop
      if ((0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() && !this.widget) {
        pieSize = ['15%', '60%'];
      }
      this.chartOptions = {
        color: _app_app_constants__WEBPACK_IMPORTED_MODULE_0__.originalChartColors.filter(color => color != '#5E35B1'),
        // Remove color that looks like Tor
        tooltip: {
          trigger: 'item',
          textStyle: {
            align: 'left'
          }
        },
        series: [{
          zlevel: 0,
          minShowLabelAngle: 0.9,
          name: 'Lightning nodes',
          type: 'pie',
          radius: pieSize,
          data: this.generateChartSerieData(ispRanking),
          labelLine: {
            lineStyle: {
              width: 2
            },
            length: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() ? 1 : 20,
            length2: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() ? 1 : undefined
          },
          label: {
            fontSize: 14
          },
          itemStyle: {
            borderRadius: 1,
            borderWidth: 1,
            borderColor: '#000'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 40,
              shadowColor: 'rgba(0, 0, 0, 0.75)'
            },
            labelLine: {
              lineStyle: {
                width: 4
              }
            }
          }
        }]
      };
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
      this.chartInstance.on('click', e => {
        if (e.data.data === 9999 || e.data.data === null) {
          // "Other" or Tor
          return;
        }
        this.zone.run(() => {
          const url = new _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_3__.RelativeUrlPipe(this.stateService).transform(`/lightning/nodes/isp/${e.data.data}`);
          this.router.navigate([url]);
        });
      });
    }
    onSaveChart() {
      const now = new Date();
      this.chartOptions.backgroundColor = 'var(--active-bg)';
      this.chartInstance.setOption(this.chartOptions);
      (0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_2__.download)(this.chartInstance.getDataURL({
        pixelRatio: 2,
        excludeComponents: ['dataZoom']
      }), `ln-nodes-per-as-${this.timespan}-${Math.round(now.getTime() / 1000)}.svg`);
      this.chartOptions.backgroundColor = 'none';
      this.chartInstance.setOption(this.chartOptions);
    }
    onGroupToggleStatusChanged(e) {
      this.sortBySubject.next(e);
    }
    static #_ = this.ɵfac = function NodesPerISPChartComponent_Factory(t) {
      return new (t || NodesPerISPChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_6__.AmountShortenerPipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__.StateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: NodesPerISPChartComponent,
      selectors: [["app-nodes-per-isp-chart"]],
      hostVars: 1,
      hostBindings: function NodesPerISPChartComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("dir", ctx.dir);
        }
      },
      inputs: {
        height: "height",
        widget: "widget"
      },
      decls: 9,
      vars: 7,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.clearnet-capacity-desc
           */
          const MSG_EXTERNAL_7569027185553567024$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_0 = goog.getMsg("How much liquidity is running on nodes advertising at least one clearnet IP address");
          i18n_0 = MSG_EXTERNAL_7569027185553567024$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_0;
        } else {
          i18n_0 = "Jaka jest p\u0142ynno\u015B\u0107 w\u0119z\u0142\xF3w og\u0142aszaj\u0105cych co najmniej jeden adres IP w Clearnecie";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.unknown-capacity-desc
           */
          const MSG_EXTERNAL_3628210247533431778$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_1 = goog.getMsg("How much liquidity is running on nodes which ISP was not identifiable");
          i18n_1 = MSG_EXTERNAL_3628210247533431778$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_1;
        } else {
          i18n_1 = "Jaka jest p\u0142ynno\u015B\u0107 w\u0119z\u0142\xF3w, kt\xF3rych ISP nie zosta\u0142 zidentyfikowany";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-capacity-desc
           */
          const MSG_EXTERNAL_7908336338297306934$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_2 = goog.getMsg("How much liquidity is running on nodes advertising only Tor addresses");
          i18n_2 = MSG_EXTERNAL_7908336338297306934$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_2;
        } else {
          i18n_2 = "Jaka jest p\u0142ynno\u015B\u0107 w\u0119z\u0142\xF3w og\u0142aszaj\u0105cych tylko adresy Tor";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.clearnet-capacity
           */
          const MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_3 = goog.getMsg("Clearnet Capacity");
          i18n_3 = MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_3;
        } else {
          i18n_3 = "Pojemno\u015B\u0107 w Clearnecie";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.unknown-capacity
           */
          const MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_4 = goog.getMsg("Unknown Capacity");
          i18n_4 = MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_4;
        } else {
          i18n_4 = "Pojemno\u015B\u0107 na nieokre\u015Blonej sieci";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-capacity
           */
          const MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_5 = goog.getMsg("Tor Capacity");
          i18n_5 = MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_5;
        } else {
          i18n_5 = "Pojemno\u015B\u0107 na sieci Tor";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-100-isp-ln
           */
          const MSG_EXTERNAL_4223190098988681304$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_6 = goog.getMsg("Top 100 ISPs hosting LN nodes");
          i18n_6 = MSG_EXTERNAL_4223190098988681304$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_6;
        } else {
          i18n_6 = "Ranking 100 ISP hostuj\u0105cych w\u0119z\u0142y LN";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_7 = goog.getMsg("(Tor nodes excluded)");
          i18n_7 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_7;
        } else {
          i18n_7 = "(bez w\u0119z\u0142\xF3w Tor)";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.rank
           */
          const MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_8 = goog.getMsg("Rank");
          i18n_8 = MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_8;
        } else {
          i18n_8 = "Ranga";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.isp
           */
          const MSG_EXTERNAL_6534480732067499471$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_9 = goog.getMsg("ISP");
          i18n_9 = MSG_EXTERNAL_6534480732067499471$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_9;
        } else {
          i18n_9 = "ISP";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.share
           */
          const MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_10 = goog.getMsg("Share");
          i18n_10 = MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_10;
        } else {
          i18n_10 = "Udost\u0119pnij";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_11 = goog.getMsg("Nodes");
          i18n_11 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_11;
        } else {
          i18n_11 = "W\u0119zly";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_12 = goog.getMsg("Capacity");
          i18n_12 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_12;
        } else {
          i18n_12 = "Pojemno\u015B\u0107";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.clearnet-capacity
           */
          const MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_13 = goog.getMsg("Clearnet Capacity");
          i18n_13 = MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_13;
        } else {
          i18n_13 = "Pojemno\u015B\u0107 w Clearnecie";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.unknown-capacity
           */
          const MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_14 = goog.getMsg("Unknown Capacity");
          i18n_14 = MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_14;
        } else {
          i18n_14 = "Pojemno\u015B\u0107 na nieokre\u015Blonej sieci";
        }
        let i18n_15;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-capacity
           */
          const MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_15 = goog.getMsg("Tor Capacity");
          i18n_15 = MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_15;
        } else {
          i18n_15 = "Pojemno\u015B\u0107 na sieci Tor";
        }
        let i18n_16;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.indexing-in-progress
           */
          const MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_16 = goog.getMsg("Indexing in progress");
          i18n_16 = MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_16;
        } else {
          i18n_16 = "Indeksowanie w toku";
        }
        return [["loadingReward", ""], ["indexing", ""], i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, [4, "ngIf"], ["class", "card-header", 4, "ngIf"], ["class", "container pb-lg-0", 3, "class", 4, "ngIf", "ngIfElse"], ["class", "text-center loadingGraphs", 4, "ngIf"], ["class", "pool-distribution", 4, "ngIf", "ngIfElse"], [1, "pool-distribution"], [1, "item"], [1, "card-title"], ["ngbTooltip", i18n_0, "placement", "bottom", 1, "card-text"], [3, "satoshis", "digitsInfo", "noFiat"], ["ngbTooltip", i18n_1, "placement", "bottom", 1, "card-text"], ["ngbTooltip", i18n_2, "placement", "bottom", 1, "card-text"], [1, "card-header"], [1, "d-flex", "d-md-block", "align-items-baseline", 2, "margin-bottom", "-5px"], [1, "btn", "p-0", "pl-2", 2, "margin", "0 0 4px 0px", 3, "click"], [3, "icon", "fixedWidth"], [1, "d-block", 2, "color", "var(--transparent-fg)", "min-height", "25px"], [1, "container", "pb-lg-0"], ["echarts", "", 3, "class", "style", "initOpts", "options", "chartInit", 4, "browserOnly"], ["class", "d-flex justify-content-md-end toggle", 4, "ngIf"], ["class", "table table-borderless table-fixed text-center m-auto", "style", "max-width: 900px", 4, "ngIf"], ["echarts", "", 3, "chartInit", "initOpts", "options"], [1, "d-flex", "justify-content-md-end", "toggle"], [3, "toggleStatusChanged", "textLeft", "textRight", "checked"], [1, "table", "table-borderless", "table-fixed", "text-center", "m-auto", 2, "max-width", "900px"], [1, "rank", "text-left", "pl-0"], [1, "name", "text-left"], [1, "share", "text-right"], [1, "nodes", "text-right"], [1, "capacity", "text-right", "pr-0"], [4, "ngFor", "ngForOf"], [1, "name", "text-left", "text-truncate"], [3, "routerLink"], [1, "text-center", "loadingGraphs"], [1, "spinner-border", "text-light"], [1, "card-text"], [1, "skeleton-loader", "skeleton-loader-big"], [1, "indexing-message"]];
      },
      template: function NodesPerISPChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, NodesPerISPChartComponent_div_1_Template, 3, 4, "div", 16)(2, NodesPerISPChartComponent_div_2_Template, 9, 3, "div", 17)(3, NodesPerISPChartComponent_div_3_Template, 4, 4, "div", 18)(4, NodesPerISPChartComponent_div_4_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, NodesPerISPChartComponent_ng_template_5_Template, 16, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(7, NodesPerISPChartComponent_ng_template_7_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const indexing_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.widget === false ? "full-container" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.indexingInProgress)("ngIfElse", indexing_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_8__.BrowserOnlyDirective, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_9__.AmountComponent, _app_shared_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_10__.ToggleComponent, ngx_echarts__WEBPACK_IMPORTED_MODULE_17__.NgxEchartsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_3__.RelativeUrlPipe],
      styles: [".card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  font-size: 18px;\n}\n@media (min-width: 465px) {\n  .card-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n.full-container[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  width: 100%;\n  height: calc(100% - 140px);\n  margin-bottom: 25px;\n}\n@media (max-width: 992px) {\n  .full-container[_ngcontent-%COMP%] {\n    height: calc(100% - 190px);\n  }\n}\n@media (max-width: 575px) {\n  .full-container[_ngcontent-%COMP%] {\n    height: calc(100% - 230px);\n  }\n}\n\n.chart[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n@media (max-width: 767.98px) {\n  .chart[_ngcontent-%COMP%] {\n    max-height: 230px;\n    margin-top: -40px;\n  }\n}\n\n.chart-widget[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  height: 240px;\n}\n@media (max-width: 485px) {\n  .chart-widget[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .pools-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .pools-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.3em !important;\n  }\n}\n.loadingGraphs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 15px);\n  z-index: 99;\n}\n\n.pool-distribution[_ngcontent-%COMP%] {\n  min-height: 56px;\n  display: block;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  max-width: 150px;\n  width: 50%;\n  display: inline-block;\n  margin: 0px auto 20px;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    max-width: 160px;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2) {\n  order: 2;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2) {\n    order: 3;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n  width: 50%;\n  order: 3;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    order: 2;\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    display: block;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--title-fg);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n}\n\n.skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  max-width: 80px;\n  margin: 15px auto 3px;\n}\n\n.rank[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 576px) {\n  .rank[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.name[_ngcontent-%COMP%] {\n  width: 35%;\n  max-width: 300px;\n}\n@media (max-width: 576px) {\n  .name[_ngcontent-%COMP%] {\n    width: 70%;\n    max-width: 150px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.share[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 576px) {\n  .share[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nodes[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 576px) {\n  .nodes[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.capacity[_ngcontent-%COMP%] {\n  width: 20%;\n}\n@media (max-width: 576px) {\n  .capacity[_ngcontent-%COMP%] {\n    width: 20%;\n    max-width: 100px;\n  }\n}\n\n.toggle[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding-top: 15px;\n}\n@media (min-width: 576px) {\n  .toggle[_ngcontent-%COMP%] {\n    padding-bottom: 15px;\n    padding-left: 105px;\n    padding-right: 105px;\n  }\n}\n\n.indexing-message[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: grey;\n  font-weight: bold;\n  width: 100%;\n  padding-top: 100px;\n  text-align: center;\n  height: 240px;\n}"],
      changeDetection: 0
    });
  }
  return NodesPerISPChartComponent;
})();

/***/ }),

/***/ 91909:
/*!****************************************************************************!*\
  !*** ./src/app/lightning/nodes-per-isp/nodes-per-isp-preview.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesPerISPPreview: () => (/* binding */ NodesPerISPPreview)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/opengraph.service */ 26857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/sats/sats.component */ 85852);
/* harmony import */ var _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/master-page-preview/preview-title.component */ 20570);
/* harmony import */ var _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/nodes-map/nodes-map.component */ 48296);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);













const _c0 = (a0, a1) => [a0, a1];
function NodesPerISPPreview_div_0_app_amount_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-amount", 25);
  }
  if (rf & 2) {
    const ispNodes_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", ispNodes_r2.sumLiquidity)("digitsInfo", "1.2-2")("noFiat", false);
  }
}
function NodesPerISPPreview_div_0_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-sats", 26);
  }
  if (rf & 2) {
    const ispNodes_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("satoshis", ispNodes_r2.sumLiquidity);
  }
}
function NodesPerISPPreview_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10)(1, "app-preview-title")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 11)(5, "div", 12)(6, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 16)(13, "div", 17)(14, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "tbody")(17, "tr")(18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](19, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "tr")(23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](24, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, NodesPerISPPreview_div_0_app_amount_26_Template, 1, 3, "app-amount", 20)(27, NodesPerISPPreview_div_0_ng_template_27_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "tr")(30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](31, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "tr")(35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](36, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "td", 21)(38, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "tr")(41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](42, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 23)(46, "app-nodes-map", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("readyEvent", function NodesPerISPPreview_div_0_Template_app_nodes_map_readyEvent_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onMapReady());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ispNodes_r2 = ctx.ngIf;
    const smallnode_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](28);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.isp == null ? null : ctx_r2.isp.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 13, "/lightning/nodes/isp/"), ctx_r2.isp == null ? null : ctx_r2.isp.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ASN ", ctx_r2.isp == null ? null : ctx_r2.isp.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ispNodes_r2.nodes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ispNodes_r2.sumLiquidity > 100000000)("ngIfElse", smallnode_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ispNodes_r2.sumChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ispNodes_r2.topCountry.country, " ", ispNodes_r2.topCountry.flag, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ispNodes_r2.nodes[0].alias, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("widget", true)("nodes", ispNodes_r2.nodes)("fitContainer", true);
  }
}
function NodesPerISPPreview_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
let NodesPerISPPreview = /*#__PURE__*/(() => {
  class NodesPerISPPreview {
    constructor(apiService, seoService, openGraphService, route) {
      this.apiService = apiService;
      this.seoService = seoService;
      this.openGraphService = openGraphService;
      this.route = route;
    }
    ngOnInit() {
      this.nodes$ = this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(params => {
        this.id = params.get('isp');
        this.isp = null;
        this.ogSession = this.openGraphService.waitFor('isp-map-' + this.id);
        this.ogSession = this.openGraphService.waitFor('isp-data-' + this.id);
        return this.apiService.getNodeForISP$(params.get('isp'));
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(response => {
        this.isp = {
          name: response.isp,
          id: this.route.snapshot.params.isp.split(',').join(', ')
        };
        this.seoService.setTitle("W\u0119z\u0142y lightning na ISP: " + response.isp + " [AS" + this.route.snapshot.params.isp + "]");
        this.seoService.setDescription("Przegl\u0105daj wszystkie w\u0119z\u0142y Bitcoin Lightning korzystaj\u0105ce z ISP " + response.isp + " [AS" + this.route.snapshot.params.isp + "] i zobacz zbiorcze statystyki, takie jak \u0142\u0105czna liczba w\u0119z\u0142\xF3w, \u0142\u0105czna pojemno\u015B\u0107 i wi\u0119cej dla tego dostawcy.");
        for (const i in response.nodes) {
          response.nodes[i].geolocation = {
            country: response.nodes[i].country?.en,
            city: response.nodes[i].city?.en,
            subdivision: response.nodes[i].subdivision?.en,
            iso: response.nodes[i].iso_code
          };
        }
        const sumLiquidity = response.nodes.reduce((partialSum, a) => partialSum + a.capacity, 0);
        const sumChannels = response.nodes.reduce((partialSum, a) => partialSum + a.channels, 0);
        const countries = {};
        const topCountry = {
          count: 0,
          country: '',
          iso: '',
          flag: ''
        };
        for (const node of response.nodes) {
          if (!node.geolocation.iso) {
            continue;
          }
          countries[node.geolocation.iso] = countries[node.geolocation.iso] ?? 0 + 1;
          if (countries[node.geolocation.iso] > topCountry.count) {
            topCountry.count = countries[node.geolocation.iso];
            topCountry.country = node.geolocation.country;
            topCountry.iso = node.geolocation.iso;
          }
        }
        topCountry.flag = (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__.getFlagEmoji)(topCountry.iso);
        this.openGraphService.waitOver({
          event: 'isp-data-' + this.id,
          sessionId: this.ogSession
        });
        return {
          nodes: response.nodes,
          sumLiquidity: sumLiquidity,
          sumChannels: sumChannels,
          topCountry: topCountry
        };
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(err => {
        this.error = err;
        this.seoService.logSoft404();
        this.openGraphService.fail({
          event: 'isp-map-' + this.id,
          sessionId: this.ogSession
        });
        this.openGraphService.fail({
          event: 'isp-data-' + this.id,
          sessionId: this.ogSession
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          nodes: [],
          sumLiquidity: 0,
          sumChannels: 0,
          topCountry: {}
        });
      }));
    }
    onMapReady() {
      this.openGraphService.waitOver({
        event: 'isp-map-' + this.id,
        sessionId: this.ogSession
      });
    }
    static #_ = this.ɵfac = function NodesPerISPPreview_Factory(t) {
      return new (t || NodesPerISPPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_services_opengraph_service__WEBPACK_IMPORTED_MODULE_3__.OpenGraphService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: NodesPerISPPreview,
      selectors: [["app-nodes-per-isp-preview"]],
      decls: 3,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-isp
           */
          const MSG_EXTERNAL_4128560255370736581$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_0 = goog.getMsg("Lightning ISP");
          i18n_0 = MSG_EXTERNAL_4128560255370736581$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_0;
        } else {
          i18n_0 = "ISP Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.node-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_1 = goog.getMsg("Nodes");
          i18n_1 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_1;
        } else {
          i18n_1 = "W\u0119zly";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity
           */
          const MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_2 = goog.getMsg("Liquidity");
          i18n_2 = MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_2;
        } else {
          i18n_2 = "P\u0142ynno\u015B\u0107";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_3 = goog.getMsg("Channels");
          i18n_3 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_3;
        } else {
          i18n_3 = "Kana\u0142y";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-country
           */
          const MSG_EXTERNAL_4911373093955989700$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_4 = goog.getMsg("Top country");
          i18n_4 = MSG_EXTERNAL_4911373093955989700$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_4;
        } else {
          i18n_4 = "Wiod\u0105ce pa\u0144stwo";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-node
           */
          const MSG_EXTERNAL_1015115823441589042$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_5 = goog.getMsg("Top node");
          i18n_5 = MSG_EXTERNAL_1015115823441589042$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_5;
        } else {
          i18n_5 = "Wiod\u0105cy w\u0119ze\u0142";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc error.general-loading-data
           */
          const MSG_EXTERNAL_2612543646528354459$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_6 = goog.getMsg("Error loading data.");
          i18n_6 = MSG_EXTERNAL_2612543646528354459$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_PREVIEW_COMPONENT_TS_6;
        } else {
          i18n_6 = "B\u0142\u0105d \u0142adowania danych.";
        }
        return [["smallnode", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, ["class", "box preview-box", 4, "ngIf"], [3, "ngIf"], [1, "box", "preview-box"], [1, "row", "d-flex", "justify-content-between", "full-width-row"], [1, "title-wrapper"], [1, "title"], [1, "subtitle", 3, "routerLink"], [1, "logo-wrapper"], [1, "row"], [1, "col-md"], [1, "table", "table-borderless", "table-striped", "table-fixed"], ["span", "1", "width", "250px"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [1, "text-truncate"], [1, ""], [1, "col-md", "map-col"], ["type", "isp", 3, "readyEvent", "widget", "nodes", "fitContainer"], [3, "satoshis", "digitsInfo", "noFiat"], ["digitsInfo", "1.0-2", 3, "satoshis"], [1, "text-center"]];
      },
      template: function NodesPerISPPreview_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NodesPerISPPreview_div_0_Template, 47, 18, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NodesPerISPPreview_ng_template_2_Template, 3, 0, "ng-template", 9);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx.nodes$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__.AmountComponent, _app_shared_components_sats_sats_component__WEBPACK_IMPORTED_MODULE_5__.SatsComponent, _components_master_page_preview_preview_title_component__WEBPACK_IMPORTED_MODULE_6__.PreviewTitleComponent, _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__.NodesMap, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__.RelativeUrlPipe],
      styles: [".table[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-top: 0px;\n}\n\n.map-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 470px;\n  height: 360px;\n  min-width: 470px;\n  min-height: 360px;\n  max-height: 360px;\n  padding: 0;\n  background: var(--stat-box-bg);\n  overflow: hidden;\n  margin-top: 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.full-width-row[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  flex-wrap: nowrap;\n}\n\n  .symbol {\n  font-size: 24px;\n}"],
      changeDetection: 0
    });
  }
  return NodesPerISPPreview;
})();

/***/ }),

/***/ 94580:
/*!********************************************************************!*\
  !*** ./src/app/lightning/nodes-per-isp/nodes-per-isp.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesPerISP: () => (/* binding */ NodesPerISP)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/geolocation/geolocation.component */ 23456);
/* harmony import */ var _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/lightning/nodes-map/nodes-map.component */ 48296);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);















const _c0 = (a0, a1) => [a0, a1];
function NodesPerISP_div_4_app_amount_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-amount", 43);
  }
  if (rf & 2) {
    const ispNodes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("satoshis", ispNodes_r1.sumLiquidity)("digitsInfo", "1.2-2")("noFiat", false);
  }
}
function NodesPerISP_div_4_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](3, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ispNodes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 1, ispNodes_r1.sumLiquidity, 1), " ");
  }
}
function NodesPerISP_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "table", 32)(3, "tbody")(4, "tr")(5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](6, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "tr")(10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "tr")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](16, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, NodesPerISP_div_4_app_amount_18_Template, 1, 3, "app-amount", 33)(19, NodesPerISP_div_4_ng_template_19_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "span", 35)(24, "app-fiat", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](27, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "tr")(31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](32, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "td", 37)(34, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 40)(39, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "app-nodes-map", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ispNodes_r1 = ctx.ngIf;
    const smallnode_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](20);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.isp == null ? null : ctx_r2.isp.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ispNodes_r1.nodes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ispNodes_r1.sumLiquidity > 100000000)("ngIfElse", smallnode_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ispNodes_r1.sumLiquidity);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ispNodes_r1.sumChannels);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 11, "/lightning/nodes/country"), ispNodes_r1.topCountry.iso));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ispNodes_r1.topCountry.country, " ", ispNodes_r1.topCountry.flag, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("widget", true)("nodes", ispNodes_r1.nodes);
  }
}
function NodesPerISP_tbody_21_tr_1_app_amount_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-amount", 43);
  }
  if (rf & 2) {
    const node_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("satoshis", node_r4.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function NodesPerISP_tbody_21_tr_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 1, node_r4.capacity, 1), " ");
  }
}
function NodesPerISP_tbody_21_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 46)(2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-timestamp", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-timestamp", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, NodesPerISP_tbody_21_tr_1_app_amount_10_Template, 1, 3, "app-amount", 33)(11, NodesPerISP_tbody_21_tr_1_ng_template_11_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-geolocation", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const smallchannel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 11, "/lightning/node/"), node_r4.public_key));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](node_r4.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r4.first_seen);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r4.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", node_r4.capacity > 100000000)("ngIfElse", smallchannel_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", node_r4.channels, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", node_r4.geolocation)("type", "list-isp");
  }
}
function NodesPerISP_tbody_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesPerISP_tbody_21_tr_1_Template, 17, 16, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ispNodes_r6 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ispNodes_r6)("ngForTrackBy", ctx_r2.trackByPublicKey);
  }
}
function NodesPerISP_ng_template_23_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function NodesPerISP_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NodesPerISP_ng_template_23_tr_1_Template, 13, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.skeletonLines);
  }
}
function NodesPerISP_ngb_pagination_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ngb-pagination", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("pageChange", function NodesPerISP_ngb_pagination_25_Template_ngb_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r2.page, $event) || (ctx_r2.page = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function NodesPerISP_ngb_pagination_25_Template_ngb_pagination_pageChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.pageChange(ctx_r2.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ispNodes_r8 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r2.isLoading ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ispNodes_r8.nodes.length)("rotate", true)("maxSize", ctx_r2.maxSize)("pageSize", ctx_r2.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("page", ctx_r2.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("boundaryLinks", true)("ellipses", false);
  }
}
let NodesPerISP = /*#__PURE__*/(() => {
  class NodesPerISP {
    constructor(apiService, seoService, route) {
      this.apiService = apiService;
      this.seoService = seoService;
      this.route = route;
      this.startingIndexSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(0);
      this.page = 1;
      this.pageSize = 15;
      this.maxSize = window.innerWidth <= 767.98 ? 3 : 5;
      this.isLoading = true;
      this.skeletonLines = [];
      for (let i = 0; i < this.pageSize; ++i) {
        this.skeletonLines.push(i);
      }
    }
    ngOnInit() {
      this.nodes$ = this.apiService.getNodeForISP$(this.route.snapshot.params.isp).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoading = true), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
        this.isp = {
          name: response.isp,
          id: this.route.snapshot.params.isp.split(',').join(', ')
        };
        this.seoService.setTitle("W\u0119z\u0142y lightning na ISP: " + response.isp + " [AS" + this.route.snapshot.params.isp + "]");
        this.seoService.setDescription("Przegl\u0105daj wszystkie w\u0119z\u0142y Bitcoin Lightning korzystaj\u0105ce z ISP " + response.isp + " [AS" + this.route.snapshot.params.isp + "] i zobacz zbiorcze statystyki, takie jak \u0142\u0105czna liczba w\u0119z\u0142\xF3w, \u0142\u0105czna pojemno\u015B\u0107 i wi\u0119cej dla tego dostawcy.");
        for (const i in response.nodes) {
          response.nodes[i].geolocation = {
            country: response.nodes[i].country?.en,
            city: response.nodes[i].city?.en,
            subdivision: response.nodes[i].subdivision?.en,
            iso: response.nodes[i].iso_code
          };
        }
        const sumLiquidity = response.nodes.reduce((partialSum, a) => partialSum + a.capacity, 0);
        const sumChannels = response.nodes.reduce((partialSum, a) => partialSum + a.channels, 0);
        const countries = {};
        const topCountry = {
          count: 0,
          country: '',
          iso: '',
          flag: ''
        };
        for (const node of response.nodes) {
          if (!node.geolocation.iso) {
            continue;
          }
          countries[node.geolocation.iso] = countries[node.geolocation.iso] ?? 0 + 1;
          if (countries[node.geolocation.iso] > topCountry.count) {
            topCountry.count = countries[node.geolocation.iso];
            topCountry.country = node.geolocation.country;
            topCountry.iso = node.geolocation.iso;
          }
        }
        topCountry.flag = (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_0__.getFlagEmoji)(topCountry.iso);
        return {
          nodes: response.nodes,
          sumLiquidity: sumLiquidity,
          sumChannels: sumChannels,
          topCountry: topCountry
        };
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoading = false), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.share)());
      this.nodesPagination$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.nodes$, this.startingIndexSubject]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([response, startingIndex]) => response.nodes.slice(startingIndex, startingIndex + this.pageSize)));
    }
    trackByPublicKey(index, node) {
      return node.public_key;
    }
    pageChange(page) {
      this.startingIndexSubject.next((page - 1) * this.pageSize);
      this.page = page;
    }
    static #_ = this.ɵfac = function NodesPerISP_Factory(t) {
      return new (t || NodesPerISP)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: NodesPerISP,
      selectors: [["app-nodes-per-isp"]],
      decls: 27,
      vars: 11,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-for-isp
           */
          const MSG_EXTERNAL_8956569266784751993$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_0 = goog.getMsg("Lightning nodes on ISP: {$interpolation}", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ isp?.name }}"
            }
          });
          i18n_0 = MSG_EXTERNAL_8956569266784751993$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_0;
        } else {
          i18n_0 = "W\u0119z\u0142y Lightning na ISP: " + "\uFFFD0\uFFFD" + "";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_1 = goog.getMsg("Alias");
          i18n_1 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_1;
        } else {
          i18n_1 = "Alias";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction first seen
           * @meaning transaction.first-seen
           */
          const MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_2 = goog.getMsg("First seen");
          i18n_2 = MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_2;
        } else {
          i18n_2 = "Widziana pierwszy raz";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.last_update
           */
          const MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_3 = goog.getMsg("Last update");
          i18n_3 = MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_3;
        } else {
          i18n_3 = "Ostatnia aktualizacja";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_4 = goog.getMsg("Capacity");
          i18n_4 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_4;
        } else {
          i18n_4 = "Pojemno\u015B\u0107";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_5 = goog.getMsg("Channels");
          i18n_5 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_5;
        } else {
          i18n_5 = "Kana\u0142y";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_6 = goog.getMsg("Location");
          i18n_6 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_6;
        } else {
          i18n_6 = "Lokalizacja";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.asn
           */
          const MSG_EXTERNAL_7517688192215738656$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_7 = goog.getMsg("ASN");
          i18n_7 = MSG_EXTERNAL_7517688192215738656$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_7;
        } else {
          i18n_7 = "ASN";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.active-node-count
           */
          const MSG_EXTERNAL_5547080085304814621$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_8 = goog.getMsg("Active nodes");
          i18n_8 = MSG_EXTERNAL_5547080085304814621$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_8;
        } else {
          i18n_8 = "Aktywne w\u0119z\u0142y";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity
           */
          const MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_9 = goog.getMsg("Liquidity");
          i18n_9 = MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_9;
        } else {
          i18n_9 = "P\u0142ynno\u015B\u0107";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_10 = goog.getMsg("Channels");
          i18n_10 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_10;
        } else {
          i18n_10 = "Kana\u0142y";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-country
           */
          const MSG_EXTERNAL_4911373093955989700$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_11 = goog.getMsg("Top country");
          i18n_11 = MSG_EXTERNAL_4911373093955989700$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_11;
        } else {
          i18n_11 = "Wiod\u0105ce pa\u0144stwo";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_12 = goog.getMsg("sats");
          i18n_12 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_12;
        } else {
          i18n_12 = "sats";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.sats
           */
          const MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_13 = goog.getMsg("sats");
          i18n_13 = MSG_EXTERNAL_5550185768674078941$$SRC_APP_LIGHTNING_NODES_PER_ISP_NODES_PER_ISP_COMPONENT_TS_13;
        } else {
          i18n_13 = "sats";
        }
        return [["skeleton", ""], ["smallnode", ""], ["smallchannel", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, [1, "container-xl", "full-height", 2, "min-height", "335px"], [1, "box"], ["class", "row", 4, "ngIf"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [1, "alias", "text-left"], [1, "timestamp-first", "text-left"], [1, "timestamp-update", "text-left"], [1, "capacity", "text-right"], [1, "channels", "text-right"], [1, "city", "text-right"], [4, "ngIf", "ngIfElse"], ["class", "pagination-container float-right mt-2", 3, "class", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses", "pageChange", 4, "ngIf"], [1, "row"], [1, "col-12", "col-md-6"], [1, "table", "table-borderless", "table-striped"], [3, "satoshis", "digitsInfo", "noFiat", 4, "ngIf", "ngIfElse"], [1, "d-none", "d-md-inline-block"], [1, "d-block", "d-md-none"], ["digitsInfo", "1.0-0", 3, "value"], [1, "text-truncate"], [1, "d-block", "text-wrap", 3, "routerLink"], [1, ""], [1, "col-12", "col-md-6", "p-3", "p-md-0", "pr-md-3"], [2, "background-color", "var(--stat-box-bg)"], ["type", "isp", 3, "widget", "nodes"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "sats"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "alias", "text-left", "text-truncate"], [3, "routerLink"], [3, "customFormat", "unixTime"], [1, "city", "text-right", "text-truncate"], [3, "data", "type"], [4, "ngFor", "ngForOf"], [1, "skeleton-loader"], [1, "pagination-container", "float-right", "mt-2", 3, "pageChange", "collectionSize", "rotate", "maxSize", "pageSize", "page", "boundaryLinks", "ellipses"]];
      },
      template: function NodesPerISP_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, NodesPerISP_div_4_Template, 41, 16, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 20)(7, "table", 21)(8, "thead")(9, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](10, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](12, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](14, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](16, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](18, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](20, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, NodesPerISP_tbody_21_Template, 2, 2, "tbody", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, NodesPerISP_ng_template_23_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, NodesPerISP_ngb_pagination_25_Template, 1, 9, "ngb-pagination", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const skeleton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nExp"](ctx.isp == null ? null : ctx.isp.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nApply"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 5, ctx.nodes$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 7, ctx.nodesPagination$))("ngIfElse", skeleton_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 9, ctx.nodes$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__.FiatComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__.AmountComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__.TimestampComponent, _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__.GeolocationComponent, _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_7__.NodesMap, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_8__.RelativeUrlPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_9__.AmountShortenerPipe],
      styles: [".container-xl[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  padding-bottom: 100px;\n}\n\n.sats[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n  top: 0px;\n}\n\n.alias[_ngcontent-%COMP%] {\n  width: 30%;\n  max-width: 400px;\n  padding-right: 70px;\n}\n@media (max-width: 576px) {\n  .alias[_ngcontent-%COMP%] {\n    width: 50%;\n    max-width: 150px;\n    padding-right: 0px;\n  }\n}\n\n.timestamp-first[_ngcontent-%COMP%] {\n  width: 20%;\n}\n@media (max-width: 1060px) {\n  .timestamp-first[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.timestamp-update[_ngcontent-%COMP%] {\n  width: 16%;\n}\n@media (max-width: 1060px) {\n  .timestamp-update[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.capacity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 576px) {\n  .capacity[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.channels[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 576px) {\n  .channels[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.city[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n@media (max-width: 675px) {\n  .city[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"],
      changeDetection: 0
    });
  }
  return NodesPerISP;
})();

/***/ }),

/***/ 7264:
/*!********************************************************************!*\
  !*** ./src/app/lightning/nodes-ranking/nodes-ranking.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesRanking: () => (/* binding */ NodesRanking)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-channels/top-nodes-per-channels.component */ 84243);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-capacity/top-nodes-per-capacity.component */ 19995);
/* harmony import */ var _app_lightning_nodes_ranking_oldest_nodes_oldest_nodes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/lightning/nodes-ranking/oldest-nodes/oldest-nodes.component */ 59953);








function NodesRanking_app_top_nodes_per_capacity_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-top-nodes-per-capacity", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nodes$", null)("statistics$", ctx_r0.statistics$)("widget", false);
  }
}
function NodesRanking_app_top_nodes_per_channels_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-top-nodes-per-channels", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nodes$", null)("statistics$", ctx_r0.statistics$)("widget", false);
  }
}
function NodesRanking_app_oldest_nodes_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-oldest-nodes", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("widget", false);
  }
}
let NodesRanking = /*#__PURE__*/(() => {
  class NodesRanking {
    constructor(route, lightningApiService) {
      this.route = route;
      this.lightningApiService = lightningApiService;
    }
    ngOnInit() {
      this.statistics$ = this.lightningApiService.getLatestStatistics$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
      this.route.data.subscribe(data => {
        this.type = data.type;
      });
    }
    static #_ = this.ɵfac = function NodesRanking_Factory(t) {
      return new (t || NodesRanking)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NodesRanking,
      selectors: [["app-nodes-ranking"]],
      decls: 3,
      vars: 3,
      consts: [[3, "nodes$", "statistics$", "widget", 4, "ngIf"], [3, "widget", 4, "ngIf"], [3, "nodes$", "statistics$", "widget"], [3, "widget"]],
      template: function NodesRanking_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NodesRanking_app_top_nodes_per_capacity_0_Template, 1, 3, "app-top-nodes-per-capacity", 0)(1, NodesRanking_app_top_nodes_per_channels_1_Template, 1, 3, "app-top-nodes-per-channels", 0)(2, NodesRanking_app_oldest_nodes_2_Template, 1, 1, "app-oldest-nodes", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.type === "capacity");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.type === "channels");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.type === "oldest");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_1__.TopNodesPerChannels, _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_2__.TopNodesPerCapacity, _app_lightning_nodes_ranking_oldest_nodes_oldest_nodes_component__WEBPACK_IMPORTED_MODULE_3__.OldestNodes],
      changeDetection: 0
    });
  }
  return NodesRanking;
})();

/***/ }),

/***/ 59953:
/*!********************************************************************************!*\
  !*** ./src/app/lightning/nodes-ranking/oldest-nodes/oldest-nodes.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OldestNodes: () => (/* binding */ OldestNodes)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/geolocation/geolocation.component */ 23456);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);










const _c0 = (a0, a1) => [a0, a1];
function OldestNodes_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function OldestNodes_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_tbody_14_tr_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-amount", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("satoshis", node_r1.capacity)("digitsInfo", "1.2-2")("noFiat", true);
  }
}
function OldestNodes_tbody_14_tr_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, node_r1.channels), " ");
  }
}
function OldestNodes_tbody_14_tr_1_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-timestamp", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r1.updatedAt);
  }
}
function OldestNodes_tbody_14_tr_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-geolocation", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", node_r1.geolocation)("type", "list-isp");
  }
}
function OldestNodes_tbody_14_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 11)(4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, OldestNodes_tbody_14_tr_1_td_10_Template, 2, 3, "td", 13)(11, OldestNodes_tbody_14_tr_1_td_11_Template, 3, 3, "td", 14)(12, OldestNodes_tbody_14_tr_1_td_12_Template, 2, 2, "td", 15)(13, OldestNodes_tbody_14_tr_1_td_13_Template, 2, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, "/lightning/node"), node_r1.publicKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](node_r1.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u200E", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 10, node_r1.firstSeen * 1000, "yyyy-MM-dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
  }
}
function OldestNodes_tbody_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OldestNodes_tbody_14_tr_1_Template, 14, 16, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nodes_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", nodes_r4);
  }
}
function OldestNodes_ng_template_16_tr_1_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_ng_template_16_tr_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_ng_template_16_tr_1_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_ng_template_16_tr_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OldestNodes_ng_template_16_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, OldestNodes_ng_template_16_tr_1_td_7_Template, 2, 0, "td", 14)(8, OldestNodes_ng_template_16_tr_1_td_8_Template, 2, 0, "td", 32)(9, OldestNodes_ng_template_16_tr_1_td_9_Template, 2, 0, "td", 15)(10, OldestNodes_ng_template_16_tr_1_td_10_Template, 2, 0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
  }
}
function OldestNodes_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OldestNodes_ng_template_16_tr_1_Template, 11, 4, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.skeletonRows);
  }
}
let OldestNodes = /*#__PURE__*/(() => {
  class OldestNodes {
    constructor(apiService, seoService) {
      this.apiService = apiService;
      this.seoService = seoService;
      this.widget = false;
      this.skeletonRows = [];
    }
    ngOnInit() {
      if (!this.widget) {
        this.seoService.setTitle("Najstarsze w\u0119z\u0142y Lightning");
        this.seoService.setDescription("Zobacz najstarsze w\u0119z\u0142y w sieci Lightning wraz z ich pojemno\u015Bci\u0105, liczb\u0105 kana\u0142\xF3w, lokalizacj\u0105 itp.");
      }
      for (let i = 1; i <= (this.widget ? 10 : 100); ++i) {
        this.skeletonRows.push(i);
      }
      if (this.widget === false) {
        this.oldestNodes$ = this.apiService.getOldestNodes$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ranking => {
          for (const i in ranking) {
            ranking[i].geolocation = {
              country: ranking[i].country?.en,
              city: ranking[i].city?.en,
              subdivision: ranking[i].subdivision?.en,
              iso: ranking[i].iso_code
            };
          }
          return ranking;
        }));
      } else {
        this.oldestNodes$ = this.apiService.getOldestNodes$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(nodes => {
          return nodes.slice(0, 7);
        }));
      }
    }
    static #_ = this.ɵfac = function OldestNodes_Factory(t) {
      return new (t || OldestNodes)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: OldestNodes,
      selectors: [["app-oldest-nodes"]],
      inputs: {
        widget: "widget"
      },
      decls: 18,
      vars: 13,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nodes.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_0 = goog.getMsg("Alias");
          i18n_0 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_0;
        } else {
          i18n_0 = "Alias";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction first seen
           * @meaning transaction.first-seen
           */
          const MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_1 = goog.getMsg("First seen");
          i18n_1 = MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_1;
        } else {
          i18n_1 = "Widziana pierwszy raz";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-100-oldest-nodes
           */
          const MSG_EXTERNAL_6664761092390129582$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_2 = goog.getMsg("Top 100 oldest lightning nodes");
          i18n_2 = MSG_EXTERNAL_6664761092390129582$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_2;
        } else {
          i18n_2 = "Ranking 100 w\u0119z\u0142\xF3w wg wieku";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc node.liquidity
           */
          const MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_3 = goog.getMsg("Liquidity");
          i18n_3 = MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_3;
        } else {
          i18n_3 = "P\u0142ynno\u015B\u0107";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_4 = goog.getMsg("Channels");
          i18n_4 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_4;
        } else {
          i18n_4 = "Kana\u0142y";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.last_update
           */
          const MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_5 = goog.getMsg("Last update");
          i18n_5 = MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_5;
        } else {
          i18n_5 = "Ostatnia aktualizacja";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_6 = goog.getMsg("Location");
          i18n_6 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_RANKING_OLDEST_NODES_OLDEST_NODES_COMPONENT_TS_6;
        } else {
          i18n_6 = "Lokalizacja";
        }
        return [["skeleton", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, ["class", "float-left", 4, "ngIf"], [1, "table", "table-borderless"], [1, "rank"], [1, "alias", "text-left"], [1, "timestamp-first", "text-right"], ["class", "capacity text-right", 4, "ngIf"], ["class", "channels text-right", 4, "ngIf"], ["class", "timestamp-update text-left", 4, "ngIf"], ["class", "location text-right", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "float-left"], [1, "capacity", "text-right"], [1, "channels", "text-right"], [1, "timestamp-update", "text-left"], [1, "location", "text-right"], [4, "ngFor", "ngForOf"], [1, "rank", "text-left"], [3, "routerLink"], ["class", "location text-right text-truncate", 4, "ngIf"], [3, "satoshis", "digitsInfo", "noFiat"], [3, "customFormat", "unixTime"], [1, "location", "text-right", "text-truncate"], [3, "data", "type"], [1, "skeleton-loader"], ["class", "timestamp-first text-left", 4, "ngIf"], [1, "timestamp-first", "text-left"]];
      },
      template: function OldestNodes_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OldestNodes_h1_1_Template, 3, 0, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "table", 9)(4, "thead");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "th", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](9, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, OldestNodes_th_10_Template, 2, 0, "th", 13)(11, OldestNodes_th_11_Template, 2, 0, "th", 14)(12, OldestNodes_th_12_Template, 2, 0, "th", 15)(13, OldestNodes_th_13_Template, 2, 0, "th", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, OldestNodes_tbody_14_Template, 2, 1, "tbody", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, OldestNodes_ng_template_16_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const skeleton_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](!ctx.widget ? "container-xl full-height" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.widget ? "widget" : "full");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 11, ctx.oldestNodes$))("ngIfElse", skeleton_r5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_2__.AmountComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_3__.TimestampComponent, _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_4__.GeolocationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_5__.RelativeUrlPipe],
      styles: [".container-xl[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  padding-bottom: 100px;\n}\n@media (min-width: 767.98px) {\n  .container-xl[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n\n.full[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n  width: 5%;\n}\n\n@media (min-width: 767.98px) {\n  .widget[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n    width: 13%;\n  }\n}\n@media (max-width: 767.98px) {\n  .widget[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n\n.full[_ngcontent-%COMP%]   .alias[_ngcontent-%COMP%] {\n  width: 10%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 350px;\n}\n@media (max-width: 767.98px) {\n  .full[_ngcontent-%COMP%]   .alias[_ngcontent-%COMP%] {\n    max-width: 175px;\n  }\n}\n\n.widget[_ngcontent-%COMP%]   .alias[_ngcontent-%COMP%] {\n  width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n@media (max-width: 767.98px) {\n  .widget[_ngcontent-%COMP%]   .alias[_ngcontent-%COMP%] {\n    max-width: 170px;\n  }\n}\n\n.full[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 767.98px) {\n  .full[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.widget[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 767.98px) {\n  .widget[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n\n.full[_ngcontent-%COMP%]   .channels[_ngcontent-%COMP%] {\n  width: 15%;\n  padding-right: 50px;\n}\n@media (max-width: 767.98px) {\n  .full[_ngcontent-%COMP%]   .channels[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.full[_ngcontent-%COMP%]   .timestamp-first[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.full[_ngcontent-%COMP%]   .timestamp-update[_ngcontent-%COMP%] {\n  width: 20%;\n}\n@media (max-width: 767.98px) {\n  .full[_ngcontent-%COMP%]   .timestamp-update[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.full[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 767.98px) {\n  .full[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"],
      changeDetection: 0
    });
  }
  return OldestNodes;
})();

/***/ }),

/***/ 19995:
/*!****************************************************************************************************!*\
  !*** ./src/app/lightning/nodes-ranking/top-nodes-per-capacity/top-nodes-per-capacity.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNodesPerCapacity: () => (/* binding */ TopNodesPerCapacity)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/geolocation/geolocation.component */ 23456);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);












const _c0 = (a0, a1) => ({
  "widget": a0,
  "full-height": a1
});
const _c1 = a0 => ({
  "widget": a0
});
const _c2 = (a0, a1) => [a0, a1];
function TopNodesPerCapacity_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerCapacity_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerCapacity_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerCapacity_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerCapacity_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerCapacity_tbody_17_tr_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, node_r1.channels), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0(", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 4, (node_r1 == null ? null : node_r1.channels) / data_r2.statistics.totalChannels * 100, "1.1-1"), "%)");
  }
}
function TopNodesPerCapacity_tbody_17_tr_1_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-timestamp", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r1.firstSeen)("hideTimeSince", true);
  }
}
function TopNodesPerCapacity_tbody_17_tr_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-timestamp", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r1.updatedAt)("hideTimeSince", true);
  }
}
function TopNodesPerCapacity_tbody_17_tr_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-geolocation", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", node_r1.geolocation)("type", "list-isp");
  }
}
function TopNodesPerCapacity_tbody_17_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 25)(2, "div", 26)(3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-amount", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-fiat", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, TopNodesPerCapacity_tbody_17_tr_1_td_14_Template, 6, 7, "td", 17)(15, TopNodesPerCapacity_tbody_17_tr_1_td_15_Template, 2, 3, "td", 17)(16, TopNodesPerCapacity_tbody_17_tr_1_td_16_Template, 2, 3, "td", 17)(17, TopNodesPerCapacity_tbody_17_tr_1_td_17_Template, 2, 2, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](17, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 12, "/lightning/node"), node_r1.publicKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](node_r1.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("satoshis", node_r1.capacity)("digitsInfo", "1.2-2")("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0(", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 14, (node_r1 == null ? null : node_r1.capacity) / data_r2.statistics.totalCapacity * 100, "1.1-1"), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c1, ctx_r2.widget));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", node_r1.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.widget);
  }
}
function TopNodesPerCapacity_tbody_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TopNodesPerCapacity_tbody_17_tr_1_Template, 18, 22, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r2.nodes);
  }
}
function TopNodesPerCapacity_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 9)(1, "br");
  }
}
let TopNodesPerCapacity = /*#__PURE__*/(() => {
  class TopNodesPerCapacity {
    constructor(apiService, seoService, stateService) {
      this.apiService = apiService;
      this.seoService = seoService;
      this.stateService = stateService;
      this.widget = false;
      this.skeletonRows = [];
    }
    ngOnInit() {
      this.currency$ = this.stateService.fiatCurrency$;
      if (!this.widget) {
        this.seoService.setTitle("Ranking p\u0142ynno\u015Bci");
        this.seoService.setDescription("Zobacz w\u0119z\u0142y Lightning z najwi\u0119ksz\u0105 p\u0142ynno\u015Bci\u0105 BTC wraz z kluczowymi statystykami, takimi jak liczba otwartych kana\u0142\xF3w, lokalizacja, wiek w\u0119z\u0142a i wi\u0119cej.");
      }
      for (let i = 1; i <= (this.widget ? 6 : 100); ++i) {
        this.skeletonRows.push(i);
      }
      if (this.widget === false) {
        this.topNodesPerCapacity$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.apiService.getTopNodesByCapacity$(), this.statistics$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([ranking, statistics]) => {
          for (const i in ranking) {
            ranking[i].geolocation = {
              country: ranking[i].country?.en,
              city: ranking[i].city?.en,
              subdivision: ranking[i].subdivision?.en,
              iso: ranking[i].iso_code
            };
          }
          return {
            nodes: ranking,
            statistics: {
              totalCapacity: statistics.latest.total_capacity,
              totalChannels: statistics.latest.channel_count
            }
          };
        }));
      } else {
        this.topNodesPerCapacity$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.nodes$, this.statistics$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([ranking, statistics]) => {
          return {
            nodes: ranking.topByCapacity.slice(0, 6),
            statistics: {
              totalCapacity: statistics.latest.total_capacity
            }
          };
        }));
      }
    }
    static #_ = this.ɵfac = function TopNodesPerCapacity_Factory(t) {
      return new (t || TopNodesPerCapacity)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: TopNodesPerCapacity,
      selectors: [["app-top-nodes-per-capacity"]],
      inputs: {
        nodes$: "nodes$",
        statistics$: "statistics$",
        widget: "widget"
      },
      decls: 20,
      vars: 20,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nodes.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_0 = goog.getMsg("Alias");
          i18n_0 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_0;
        } else {
          i18n_0 = "Alias";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc node.liquidity
           */
          const MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_1 = goog.getMsg("Liquidity");
          i18n_1 = MSG_EXTERNAL_67933701892581429$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_1;
        } else {
          i18n_1 = "P\u0142ynno\u015B\u0107";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity-ranking
           */
          const MSG_EXTERNAL_6592478544940252608$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_2 = goog.getMsg("Liquidity Ranking");
          i18n_2 = MSG_EXTERNAL_6592478544940252608$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_2;
        } else {
          i18n_2 = "Ranking p\u0142ynno\u015Bci";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_3 = goog.getMsg("Channels");
          i18n_3 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_3;
        } else {
          i18n_3 = "Kana\u0142y";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction first seen
           * @meaning transaction.first-seen
           */
          const MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_4 = goog.getMsg("First seen");
          i18n_4 = MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_4;
        } else {
          i18n_4 = "Widziana pierwszy raz";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.last_update
           */
          const MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_5 = goog.getMsg("Last update");
          i18n_5 = MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_5;
        } else {
          i18n_5 = "Ostatnia aktualizacja";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_6 = goog.getMsg("Location");
          i18n_6 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CAPACITY_TOP_NODES_PER_CAPACITY_COMPONENT_TS_6;
        } else {
          i18n_6 = "Lokalizacja";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, [1, "container-xl", 2, "min-height", "335px", 3, "ngClass"], ["class", "float-left", 4, "ngIf"], [1, "clearfix"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [1, "text-left"], [1, "liquidity", "text-right"], [1, "d-table-cell", "fiat", "text-right"], ["class", "d-none d-md-table-cell channels text-right", 4, "ngIf"], ["class", "d-none d-md-table-cell timestamp text-right", 4, "ngIf"], ["class", "d-none d-md-table-cell text-right", 4, "ngIf"], [4, "ngIf"], [3, "ngIf"], [1, "float-left"], [1, "d-none", "d-md-table-cell", "channels", "text-right"], [1, "d-none", "d-md-table-cell", "timestamp", "text-right"], [1, "d-none", "d-md-table-cell", "text-right"], [4, "ngFor", "ngForOf"], [1, "pool", "text-left"], [1, "tooltip-custom", "d-block", "w-100"], [1, "link", "d-block", "w-100", 3, "routerLink"], [1, "pool-name", "w-100"], [1, "text-right"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "capacity-ratio"], [1, "d-table-cell", "fiat", "text-right", 3, "ngClass"], [3, "value"], ["class", "d-none d-md-table-cell text-right text-truncate", 4, "ngIf"], [3, "customFormat", "unixTime", "hideTimeSince"], [1, "d-none", "d-md-table-cell", "text-right", "text-truncate"], [3, "data", "type"]];
      },
      template: function TopNodesPerCapacity_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TopNodesPerCapacity_h1_1_Template, 2, 0, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10)(4, "table", 11)(5, "thead")(6, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](9, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, TopNodesPerCapacity_th_13_Template, 2, 0, "th", 15)(14, TopNodesPerCapacity_th_14_Template, 2, 0, "th", 16)(15, TopNodesPerCapacity_th_15_Template, 2, 0, "th", 16)(16, TopNodesPerCapacity_th_16_Template, 2, 0, "th", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, TopNodesPerCapacity_tbody_17_Template, 2, 1, "tbody", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, TopNodesPerCapacity_ng_template_19_Template, 2, 0, "ng-template", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](15, _c0, ctx.widget, !ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c1, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 11, ctx.currency$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 13, ctx.topNodesPerCapacity$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__.FiatComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__.AmountComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__.TimestampComponent, _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__.GeolocationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__.RelativeUrlPipe],
      styles: [".container-xl[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n\n.container-xl.widget[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 0.65rem !important;\n  padding-bottom: 0.7rem !important;\n}\n\n.clear-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.pool[_ngcontent-%COMP%] {\n  width: 15%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 575px) {\n  .pool[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n\n.pool-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.liquidity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 575px) {\n  .liquidity[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.capacity-ratio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: darkgrey;\n}\n\n.fiat[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .fiat[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 575px) {\n  .fiat[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}"],
      changeDetection: 0
    });
  }
  return TopNodesPerCapacity;
})();

/***/ }),

/***/ 84243:
/*!****************************************************************************************************!*\
  !*** ./src/app/lightning/nodes-ranking/top-nodes-per-channels/top-nodes-per-channels.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNodesPerChannels: () => (/* binding */ TopNodesPerChannels)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/geolocation/geolocation.component */ 23456);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);












const _c0 = (a0, a1) => ({
  "widget": a0,
  "full-height": a1
});
const _c1 = a0 => ({
  "widget": a0
});
const _c2 = (a0, a1) => [a0, a1];
function TopNodesPerChannels_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerChannels_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerChannels_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r0.currency$));
  }
}
function TopNodesPerChannels_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerChannels_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TopNodesPerChannels_tbody_16_tr_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-amount", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("satoshis", node_r2.capacity)("digitsInfo", "1.2-2")("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0(", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 4, node_r2.capacity / data_r3.statistics.totalCapacity * 100, "1.1-1"), "%)");
  }
}
function TopNodesPerChannels_tbody_16_tr_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-fiat", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", node_r2.capacity);
  }
}
function TopNodesPerChannels_tbody_16_tr_1_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-timestamp", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r2.firstSeen)("hideTimeSince", true);
  }
}
function TopNodesPerChannels_tbody_16_tr_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-timestamp", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customFormat", "yyyy-MM-dd")("unixTime", node_r2.updatedAt)("hideTimeSince", true);
  }
}
function TopNodesPerChannels_tbody_16_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 25)(2, "div", 26)(3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, TopNodesPerChannels_tbody_16_tr_1_td_13_Template, 5, 7, "td", 31)(14, TopNodesPerChannels_tbody_16_tr_1_td_14_Template, 2, 1, "td", 32)(15, TopNodesPerChannels_tbody_16_tr_1_td_15_Template, 2, 3, "td", 15)(16, TopNodesPerChannels_tbody_16_tr_1_td_16_Template, 2, 3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-geolocation", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](17, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 10, "/lightning/node"), node_r2.publicKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](node_r2.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", node_r2.channels ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 12, node_r2.channels) : "~", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0(", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 14, (node_r2 == null ? null : node_r2.channels) / data_r3.statistics.totalChannels * 100, "1.1-1"), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", node_r2.geolocation)("type", "list-isp");
  }
}
function TopNodesPerChannels_tbody_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TopNodesPerChannels_tbody_16_tr_1_Template, 19, 20, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r3.nodes);
  }
}
function TopNodesPerChannels_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 9)(1, "br");
  }
}
let TopNodesPerChannels = /*#__PURE__*/(() => {
  class TopNodesPerChannels {
    constructor(apiService, stateService, seoService) {
      this.apiService = apiService;
      this.stateService = stateService;
      this.seoService = seoService;
      this.widget = false;
      this.skeletonRows = [];
    }
    ngOnInit() {
      this.currency$ = this.stateService.fiatCurrency$;
      for (let i = 1; i <= (this.widget ? 6 : 100); ++i) {
        this.skeletonRows.push(i);
      }
      if (this.widget === false) {
        this.seoService.setTitle("Ranking \u0142\u0105czno\u015Bci");
        this.seoService.setDescription("Zobacz w\u0119z\u0142y Lightning z najwi\u0119ksz\u0105 liczb\u0105 otwartych kana\u0142\xF3w wraz z kluczowymi statystykami, takimi jak ca\u0142kowita pojemno\u015B\u0107 w\u0119z\u0142a, jego wiek i wi\u0119cej.");
        this.topNodesPerChannels$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.apiService.getTopNodesByChannels$(), this.statistics$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([ranking, statistics]) => {
          for (const i in ranking) {
            ranking[i].geolocation = {
              country: ranking[i].country?.en,
              city: ranking[i].city?.en,
              subdivision: ranking[i].subdivision?.en,
              iso: ranking[i].iso_code
            };
          }
          return {
            nodes: ranking,
            statistics: {
              totalChannels: statistics.latest.channel_count,
              totalCapacity: statistics.latest.total_capacity
            }
          };
        }));
      } else {
        this.topNodesPerChannels$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.nodes$, this.statistics$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([ranking, statistics]) => {
          for (const i in ranking.topByChannels) {
            ranking.topByChannels[i].geolocation = {
              country: ranking.topByChannels[i].country?.en,
              city: ranking.topByChannels[i].city?.en,
              subdivision: ranking.topByChannels[i].subdivision?.en,
              iso: ranking.topByChannels[i].iso_code
            };
          }
          return {
            nodes: ranking.topByChannels.slice(0, 6),
            statistics: {
              totalChannels: statistics.latest.channel_count
            }
          };
        }));
      }
    }
    static #_ = this.ɵfac = function TopNodesPerChannels_Factory(t) {
      return new (t || TopNodesPerChannels)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: TopNodesPerChannels,
      selectors: [["app-top-nodes-per-channels"]],
      inputs: {
        nodes$: "nodes$",
        statistics$: "statistics$",
        widget: "widget"
      },
      decls: 19,
      vars: 16,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nodes.alias
           */
          const MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_0 = goog.getMsg("Alias");
          i18n_0 = MSG_EXTERNAL_1965206604774400$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_0;
        } else {
          i18n_0 = "Alias";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc node.channels
           */
          const MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_1 = goog.getMsg("Channels");
          i18n_1 = MSG_EXTERNAL_8181077408762380407$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_1;
        } else {
          i18n_1 = "Kana\u0142y";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.location
           */
          const MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_2 = goog.getMsg("Location");
          i18n_2 = MSG_EXTERNAL_471816275243265264$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_2;
        } else {
          i18n_2 = "Lokalizacja";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.connectivity-ranking
           */
          const MSG_EXTERNAL_3006432067351761102$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_3 = goog.getMsg("Connectivity Ranking");
          i18n_3 = MSG_EXTERNAL_3006432067351761102$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_3;
        } else {
          i18n_3 = "Ranking \u0142\u0105czno\u015Bci";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.channels
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_4 = goog.getMsg("Capacity");
          i18n_4 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_4;
        } else {
          i18n_4 = "Pojemno\u015B\u0107";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction first seen
           * @meaning transaction.first-seen
           */
          const MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_5 = goog.getMsg("First seen");
          i18n_5 = MSG_EXTERNAL_6901614037118888421$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_5;
        } else {
          i18n_5 = "Widziana pierwszy raz";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.last_update
           */
          const MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_6 = goog.getMsg("Last update");
          i18n_6 = MSG_EXTERNAL_8670565817959078431$$SRC_APP_LIGHTNING_NODES_RANKING_TOP_NODES_PER_CHANNELS_TOP_NODES_PER_CHANNELS_COMPONENT_TS_6;
        } else {
          i18n_6 = "Ostatnia aktualizacja";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, [1, "container-xl", 2, "min-height", "335px", 3, "ngClass"], ["class", "float-left", 4, "ngIf"], [1, "clearfix"], [2, "min-height", "295px"], [1, "table", "table-borderless"], [1, "pool", "text-left", 3, "ngClass"], [1, "liquidity", "text-right"], ["class", "d-none d-md-table-cell channels text-right", 4, "ngIf"], ["class", "d-none d-md-table-cell text-right", 4, "ngIf"], ["class", "d-none d-md-table-cell timestamp text-right", 4, "ngIf"], [1, "geolocation", "d-table-cell", "text-right"], [4, "ngIf"], [3, "ngIf"], [1, "float-left"], [1, "d-none", "d-md-table-cell", "channels", "text-right"], [1, "d-none", "d-md-table-cell", "text-right"], [1, "d-none", "d-md-table-cell", "timestamp", "text-right"], [4, "ngFor", "ngForOf"], [1, "pool", "text-left"], [1, "tooltip-custom", "d-block", "w-100"], [1, "link", "d-block", "w-100", 3, "routerLink"], [1, "pool-name", "w-100"], [1, "text-right"], [1, "capacity-ratio"], ["class", "d-none d-md-table-cell capacity text-right", 4, "ngIf"], ["class", "fiat d-none d-md-table-cell text-right", 4, "ngIf"], [1, "geolocation", "d-table-cell", "text-right", "text-truncate"], [3, "data", "type"], [1, "d-none", "d-md-table-cell", "capacity", "text-right"], [3, "satoshis", "digitsInfo", "noFiat"], [1, "fiat", "d-none", "d-md-table-cell", "text-right"], [3, "value"], [3, "customFormat", "unixTime", "hideTimeSince"]];
      },
      template: function TopNodesPerChannels_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TopNodesPerChannels_h1_1_Template, 2, 0, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10)(4, "table", 11)(5, "thead")(6, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](9, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, TopNodesPerChannels_th_10_Template, 2, 0, "th", 14)(11, TopNodesPerChannels_th_11_Template, 3, 3, "th", 15)(12, TopNodesPerChannels_th_12_Template, 2, 0, "th", 16)(13, TopNodesPerChannels_th_13_Template, 2, 0, "th", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](15, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, TopNodesPerChannels_tbody_16_Template, 2, 1, "tbody", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, TopNodesPerChannels_ng_template_18_Template, 2, 0, "ng-template", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](11, _c0, ctx.widget, !ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c1, ctx.widget));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 9, ctx.topNodesPerChannels$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.widget);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_3__.FiatComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_4__.AmountComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__.TimestampComponent, _app_shared_components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__.GeolocationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_7__.RelativeUrlPipe],
      styles: [".container-xl[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n\n.container-xl.widget[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 0.65rem !important;\n  padding-bottom: 0.7rem !important;\n}\n\n.clear-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.pool[_ngcontent-%COMP%] {\n  width: 15%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 160px;\n}\n@media (max-width: 576px) {\n  .pool[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n\n.pool-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.pool.widget[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.liquidity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 576px) {\n  .liquidity[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.capacity-ratio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: darkgrey;\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .geolocation[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 575px) {\n  .geolocation[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}"],
      changeDetection: 0
    });
  }
  return TopNodesPerChannels;
})();

/***/ }),

/***/ 19330:
/*!******************************************************************************************!*\
  !*** ./src/app/lightning/nodes-rankings-dashboard/nodes-rankings-dashboard.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodesRankingsDashboard: () => (/* binding */ NodesRankingsDashboard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-channels/top-nodes-per-channels.component */ 84243);
/* harmony import */ var _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/lightning/nodes-ranking/top-nodes-per-capacity/top-nodes-per-capacity.component */ 19995);
/* harmony import */ var _app_lightning_nodes_ranking_oldest_nodes_oldest_nodes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/nodes-ranking/oldest-nodes/oldest-nodes.component */ 59953);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);










const _c0 = a0 => [a0];
const _c1 = () => ["fas", "external-link-alt"];
let NodesRankingsDashboard = /*#__PURE__*/(() => {
  class NodesRankingsDashboard {
    constructor(lightningApiService, seoService) {
      this.lightningApiService = lightningApiService;
      this.seoService = seoService;
    }
    ngOnInit() {
      this.seoService.setTitle("Ranking w\u0119z\u0142\xF3w lightning");
      this.seoService.setDescription("Zobacz wiod\u0105ce w\u0119z\u0142y sieci Lightning, klasyfikowane wed\u0142ug p\u0142ynno\u015Bci finansowej, \u0142\u0105czno\u015Bci i wieku.");
      this.nodesRanking$ = this.lightningApiService.getNodesRanking$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.share)());
    }
    static #_ = this.ɵfac = function NodesRankingsDashboard_Factory(t) {
      return new (t || NodesRankingsDashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_0__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NodesRankingsDashboard,
      selectors: [["app-nodes-rankings-dashboard"]],
      decls: 35,
      vars: 29,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.liquidity-ranking
           */
          const MSG_EXTERNAL_6592478544940252608$$SRC_APP_LIGHTNING_NODES_RANKINGS_DASHBOARD_NODES_RANKINGS_DASHBOARD_COMPONENT_TS_0 = goog.getMsg("Liquidity Ranking");
          i18n_0 = MSG_EXTERNAL_6592478544940252608$$SRC_APP_LIGHTNING_NODES_RANKINGS_DASHBOARD_NODES_RANKINGS_DASHBOARD_COMPONENT_TS_0;
        } else {
          i18n_0 = "Ranking p\u0142ynno\u015Bci";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.connectivity-ranking
           */
          const MSG_EXTERNAL_3006432067351761102$$SRC_APP_LIGHTNING_NODES_RANKINGS_DASHBOARD_NODES_RANKINGS_DASHBOARD_COMPONENT_TS_1 = goog.getMsg("Connectivity Ranking");
          i18n_1 = MSG_EXTERNAL_3006432067351761102$$SRC_APP_LIGHTNING_NODES_RANKINGS_DASHBOARD_NODES_RANKINGS_DASHBOARD_COMPONENT_TS_1;
        } else {
          i18n_1 = "Ranking \u0142\u0105czno\u015Bci";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-channels-age
           */
          const MSG_EXTERNAL_6393371071121341017$$SRC_APP_LIGHTNING_NODES_RANKINGS_DASHBOARD_NODES_RANKINGS_DASHBOARD_COMPONENT_TS_2 = goog.getMsg("Oldest nodes");
          i18n_2 = MSG_EXTERNAL_6393371071121341017$$SRC_APP_LIGHTNING_NODES_RANKINGS_DASHBOARD_NODES_RANKINGS_DASHBOARD_COMPONENT_TS_2;
        } else {
          i18n_2 = "Najstarsze w\u0119z\u0142y";
        }
        return [i18n_0, i18n_1, i18n_2, [1, "container", "main"], [1, "row", "row-cols-1", "row-cols-md-3"], [1, "col"], [1, "card"], [1, "card-body"], ["href", "", 1, "title-link", 3, "routerLink"], [1, "card-title", "d-inline"], [2, "vertical-align", "text-top", "font-size", "13px", "color", "var(--title-fg)", 3, "icon", "fixedWidth"], [3, "nodes$", "widget"], [3, "widget"]];
      },
      template: function NodesRankingsDashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "fa-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "app-top-nodes-per-capacity", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 5)(14, "div", 6)(15, "div", 7)(16, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](19, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "fa-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "app-top-nodes-per-channels", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 5)(25, "div", 6)(26, "div", 7)(27, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](30, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "fa-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "app-oldest-nodes", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](20, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 14, "/lightning/nodes/rankings/liquidity")));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c1))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nodes$", ctx.nodesRanking$)("widget", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 16, "/lightning/nodes/rankings/connectivity")));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c1))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nodes$", ctx.nodesRanking$)("widget", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 18, "/lightning/nodes/oldest")));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](28, _c1))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("widget", true);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _app_lightning_nodes_ranking_top_nodes_per_channels_top_nodes_per_channels_component__WEBPACK_IMPORTED_MODULE_2__.TopNodesPerChannels, _app_lightning_nodes_ranking_top_nodes_per_capacity_top_nodes_per_capacity_component__WEBPACK_IMPORTED_MODULE_3__.TopNodesPerCapacity, _app_lightning_nodes_ranking_oldest_nodes_oldest_nodes_component__WEBPACK_IMPORTED_MODULE_4__.OldestNodes, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_5__.RelativeUrlPipe],
      styles: [".main[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--bg);\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--title-fg);\n}\n\n.card-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--title-fg);\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.title-link[_ngcontent-%COMP%], .title-link[_ngcontent-%COMP%]:hover, .title-link[_ngcontent-%COMP%]:focus, .title-link[_ngcontent-%COMP%]:active {\n  text-align: center;\n  display: block;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: inherit;\n}"],
      changeDetection: 0
    });
  }
  return NodesRankingsDashboard;
})();

/***/ }),

/***/ 48575:
/*!************************************************************************************!*\
  !*** ./src/app/lightning/statistics-chart/lightning-statistics-chart.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningStatisticsChartComponent: () => (/* binding */ LightningStatisticsChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/graphs/echarts */ 80683);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/lightning-api.service */ 47784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 13054);
/* harmony import */ var _app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/storage.service */ 7368);
/* harmony import */ var _app_services_mining_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/mining.service */ 64235);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/directives/browser-only.directive */ 50072);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-echarts */ 57021);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);




















const _c0 = () => ["fas", "download"];
const _c1 = a0 => [a0];
const _c2 = a0 => ({
  height: a0
});
function LightningStatisticsChartComponent_form_7_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 1M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "1m");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "1m")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/capacity")));
  }
}
function LightningStatisticsChartComponent_form_7_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 3M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "3m")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/capacity")));
  }
}
function LightningStatisticsChartComponent_form_7_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 6M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "6m");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "6m")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/capacity")));
  }
}
function LightningStatisticsChartComponent_form_7_label_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 1Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "1y")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/capacity")));
  }
}
function LightningStatisticsChartComponent_form_7_label_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 2Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "2y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "2y")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/capacity")));
  }
}
function LightningStatisticsChartComponent_form_7_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 3Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "3y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "3y")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "/graphs/lightning/capacity")));
  }
}
function LightningStatisticsChartComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, LightningStatisticsChartComponent_form_7_label_2_Template, 4, 8, "label", 12)(3, LightningStatisticsChartComponent_form_7_label_3_Template, 4, 8, "label", 12)(4, LightningStatisticsChartComponent_form_7_label_4_Template, 4, 8, "label", 12)(5, LightningStatisticsChartComponent_form_7_label_5_Template, 4, 8, "label", 12)(6, LightningStatisticsChartComponent_form_7_label_6_Template, 4, 8, "label", 12)(7, LightningStatisticsChartComponent_form_7_label_7_Template, 4, 8, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " ALL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stats_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.radioGroupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 730);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r2.days >= 1095);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.radioGroupForm.get("dateSpan").value === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", "all")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](13, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 11, "/graphs/lightning/capacity")));
  }
}
function LightningStatisticsChartComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("chartInit", function LightningStatisticsChartComponent_div_9_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c2, ctx_r0.widget ? ctx_r0.height + "px" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](!ctx_r0.widget ? "chart" : "chart-widget");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("initOpts", ctx_r0.chartInitOptions)("options", ctx_r0.chartOptions);
  }
}
function LightningStatisticsChartComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function LightningStatisticsChartComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function LightningStatisticsChartComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, LightningStatisticsChartComponent_div_11_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stats_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stats_r4.days === 0);
  }
}
let LightningStatisticsChartComponent = /*#__PURE__*/(() => {
  class LightningStatisticsChartComponent {
    constructor(locale, seoService, lightningApiService, formBuilder, storageService, miningService, stateService, amountShortenerPipe) {
      this.locale = locale;
      this.seoService = seoService;
      this.lightningApiService = lightningApiService;
      this.formBuilder = formBuilder;
      this.storageService = storageService;
      this.miningService = miningService;
      this.stateService = stateService;
      this.amountShortenerPipe = amountShortenerPipe;
      this.height = 150;
      this.right = 45;
      this.left = 45;
      this.widget = false;
      this.chartOptions = {};
      this.chartInitOptions = {
        renderer: 'svg'
      };
      this.dir = 'ltr';
      this.isLoading = true;
      this.formatNumber = _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber;
      this.timespan = '';
      this.chartInstance = undefined;
    }
    ngOnInit() {
      let firstRun = true;
      if (this.widget) {
        this.miningWindowPreference = '3y';
      } else {
        this.seoService.setTitle("Pojemno\u015B\u0107 Lightning Network");
        this.seoService.setDescription("Zobacz pojemno\u015B\u0107 sieci Lightning wizualizowan\u0105 w czasie pod wzgl\u0119dem liczby otwartych kana\u0142\xF3w i ca\u0142kowitej ilo\u015Bci bitcoin\xF3w.");
        this.miningWindowPreference = this.miningService.getDefaultTimespan('all');
      }
      this.radioGroupForm = this.formBuilder.group({
        dateSpan: this.miningWindowPreference
      });
      this.radioGroupForm.controls.dateSpan.setValue(this.miningWindowPreference);
      this.capacityObservable$ = this.radioGroupForm.get('dateSpan').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this.miningWindowPreference), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(timespan => {
        this.timespan = timespan;
        if (!this.widget && !firstRun) {
          this.storageService.setValue('lightningWindowPreference', timespan);
        }
        firstRun = false;
        this.miningWindowPreference = timespan;
        this.isLoading = true;
        return this.lightningApiService.cachedRequest(this.lightningApiService.listStatistics$, 250, timespan).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(response => {
          const data = response.body;
          this.chartData = {
            channel_count: data.map(val => [val.added * 1000, val.channel_count]),
            capacity: data.map(val => [val.added * 1000, val.total_capacity])
          };
          this.prepareChartOptions(this.chartData);
          this.isLoading = false;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
          return {
            days: parseInt(response.headers.get('x-total-count'), 10)
          };
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
    }
    ngOnChanges(changes) {
      if (changes.height && this.chartData) {
        this.prepareChartOptions(this.chartData);
      }
    }
    prepareChartOptions(data) {
      let title;
      if (!this.widget && data.channel_count.length === 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 15
          },
          text: "Indeksowanie w toku",
          left: 'center',
          top: 'center'
        };
      } else if (this.widget && data.channel_count.length > 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 11
          },
          text: "Pojemno\u015B\u0107 Lightning Network",
          left: 'center',
          top: 0,
          zlevel: 10
        };
      }
      this.chartOptions = {
        title: title,
        animation: false,
        color: ['#FFB300', new _app_graphs_echarts__WEBPACK_IMPORTED_MODULE_0__.echarts.graphic.LinearGradient(0, 0.75, 0, 1, [{
          offset: 0,
          color: '#D81B60'
        }, {
          offset: 1,
          color: '#D81B60AA'
        }])],
        grid: {
          height: this.widget ? (this.height || 120) - 60 : undefined,
          top: this.widget ? 20 : 40,
          bottom: this.widget ? 0 : 70,
          right: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() && this.widget ? 35 : this.right,
          left: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() && this.widget ? 40 : this.left
        },
        tooltip: {
          show: !(0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)(),
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          backgroundColor: 'rgba(17, 19, 31, 1)',
          borderRadius: 4,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          textStyle: {
            color: 'var(--tooltip-grey)',
            align: 'left'
          },
          borderColor: '#000',
          formatter: ticks => {
            let sizeString = '';
            let weightString = '';
            for (const tick of ticks) {
              if (tick.seriesIndex === 0) {
                // Channels
                sizeString = `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(tick.data[1], this.locale, '1.0-0')}`;
              } else if (tick.seriesIndex === 1) {
                // Capacity
                weightString = `${tick.marker} ${tick.seriesName}: ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(tick.data[1] / 100000000, this.locale, '1.0-0')} BTC`;
              }
            }
            const date = new Date(ticks[0].data[0]).toLocaleDateString(this.locale, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            const tooltip = `
            <b style="color: white; margin-left: 18px">${date}</b><br>
            <span>${sizeString}</span><br>
            <span>${weightString}</span>
          `;
            return tooltip;
          }
        },
        xAxis: data.channel_count.length === 0 ? undefined : {
          type: 'time',
          splitNumber: (0,_app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)() || this.widget ? 5 : 10,
          axisLabel: {
            hideOverlap: true
          }
        },
        legend: this.widget || data.channel_count.length === 0 ? undefined : {
          padding: 10,
          data: [{
            name: "Kana\u0142y",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Pojemno\u015B\u0107",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }],
          selected: JSON.parse(this.storageService.getValue('sizes_ln_legend')) ?? {
            'Channels': true,
            'Capacity': true
          }
        },
        yAxis: data.channel_count.length === 0 ? undefined : [{
          type: 'value',
          axisLabel: {
            color: 'rgb(110, 112, 121)',
            formatter: val => {
              if (this.widget) {
                return `${this.amountShortenerPipe.transform(val, 0)}`;
              } else {
                return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(Math.round(val), this.locale, '1.0-0')}`;
              }
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: 'var(--transparent-fg)',
              opacity: 0.25
            }
          },
          minInterval: this.widget ? 20000 : undefined
        }, {
          min: 0,
          type: 'value',
          position: 'right',
          axisLabel: {
            color: 'rgb(110, 112, 121)',
            formatter: val => {
              if (this.widget) {
                return `${this.amountShortenerPipe.transform(Math.round(val / 100000000), 0)}`;
              } else {
                return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(Math.round(val / 100000000), this.locale, '1.0-0')}`;
              }
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: data.channel_count.length === 0 ? [] : [{
          zlevel: 1,
          name: "Kana\u0142y",
          showSymbol: false,
          symbol: 'none',
          data: data.channel_count,
          type: 'line',
          lineStyle: {
            width: 2
          },
          markLine: {
            silent: true,
            symbol: 'none',
            lineStyle: {
              type: 'solid',
              color: 'var(--transparent-fg)',
              opacity: 1,
              width: 1
            }
          },
          smooth: false
        }, {
          zlevel: 0,
          yAxisIndex: 1,
          name: "Pojemno\u015B\u0107",
          showSymbol: false,
          symbol: 'none',
          stack: 'Total',
          data: data.capacity,
          areaStyle: {
            opacity: 0.5
          },
          type: 'line',
          smooth: false
        }],
        dataZoom: this.widget ? null : [{
          type: 'inside',
          realtime: true,
          zoomLock: true,
          maxSpan: 100,
          minSpan: 5,
          moveOnMouseMove: false
        }, {
          showDetail: false,
          show: true,
          type: 'slider',
          brushSelect: false,
          realtime: true,
          left: 20,
          right: 15,
          selectedDataBackground: {
            lineStyle: {
              color: '#fff',
              opacity: 0.45
            },
            areaStyle: {
              opacity: 0
            }
          }
        }]
      };
    }
    onChartInit(ec) {
      if (this.chartInstance !== undefined) {
        return;
      }
      this.chartInstance = ec;
      this.chartInstance.on('legendselectchanged', e => {
        this.storageService.setValue('sizes_ln_legend', JSON.stringify(e.selected));
      });
    }
    onSaveChart() {
      // @ts-ignore
      const prevBottom = this.chartOptions.grid.bottom;
      const now = new Date();
      // @ts-ignore
      this.chartOptions.grid.bottom = 40;
      this.chartOptions.backgroundColor = 'var(--active-bg)';
      this.chartInstance.setOption(this.chartOptions);
      (0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__.download)(this.chartInstance.getDataURL({
        pixelRatio: 2
      }), `lightning-network-capacity-${this.timespan}-${Math.round(now.getTime() / 1000)}.svg`);
      // @ts-ignore
      this.chartOptions.grid.bottom = prevBottom;
      this.chartOptions.backgroundColor = 'none';
      this.chartInstance.setOption(this.chartOptions);
    }
    static #_ = this.ɵfac = function LightningStatisticsChartComponent_Factory(t) {
      return new (t || LightningStatisticsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_lightning_lightning_api_service__WEBPACK_IMPORTED_MODULE_4__.LightningApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_mining_service__WEBPACK_IMPORTED_MODULE_6__.MiningService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_8__.AmountShortenerPipe));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: LightningStatisticsChartComponent,
      selectors: [["app-lightning-statistics-chart"]],
      hostVars: 1,
      hostBindings: function LightningStatisticsChartComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("dir", ctx.dir);
        }
      },
      inputs: {
        height: "height",
        right: "right",
        left: "left",
        widget: "widget"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 14,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.network-capacity
           */
          const MSG_EXTERNAL_6906613697588581338$$SRC_APP_LIGHTNING_STATISTICS_CHART_LIGHTNING_STATISTICS_CHART_COMPONENT_TS_0 = goog.getMsg("Lightning Network Capacity");
          i18n_0 = MSG_EXTERNAL_6906613697588581338$$SRC_APP_LIGHTNING_STATISTICS_CHART_LIGHTNING_STATISTICS_CHART_COMPONENT_TS_0;
        } else {
          i18n_0 = "Pojemno\u015B\u0107 Lightning Network";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.indexing-in-progress
           */
          const MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_STATISTICS_CHART_LIGHTNING_STATISTICS_CHART_COMPONENT_TS_1 = goog.getMsg("Indexing in progress");
          i18n_1 = MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_STATISTICS_CHART_LIGHTNING_STATISTICS_CHART_COMPONENT_TS_1;
        } else {
          i18n_1 = "Indeksowanie w toku";
        }
        return [i18n_0, i18n_1, [1, "card-header", "mb-0", "mb-md-4"], [1, "d-flex", "d-md-block", "align-items-baseline"], [1, "btn", "p-0", "pl-2", 2, "margin", "0 0 4px 0px", 3, "click"], [3, "icon", "fixedWidth"], ["class", "formRadioGroup", 3, "formGroup", 4, "ngIf"], ["echarts", "", 3, "class", "style", "initOpts", "options", "chartInit", 4, "browserOnly"], ["class", "text-center loadingGraphs", 4, "ngIf"], [4, "ngIf"], [1, "formRadioGroup", 3, "formGroup"], ["name", "radioBasic", 1, "btn-group", "btn-group-toggle"], ["class", "btn btn-primary btn-sm", 3, "active", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm"], ["type", "radio", "fragment", "all", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "1m", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "3m", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "6m", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "1y", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "2y", "formControlName", "dateSpan", 3, "value", "routerLink"], ["type", "radio", "fragment", "3y", "formControlName", "dateSpan", 3, "value", "routerLink"], ["echarts", "", 3, "chartInit", "initOpts", "options"], [1, "text-center", "loadingGraphs"], [1, "spinner-border", "text-light"], ["class", "indexing-message d-flex", 4, "ngIf"], [1, "indexing-message", "d-flex"]];
      },
      template: function LightningStatisticsChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LightningStatisticsChartComponent_Template_button_click_5_listener() {
            return ctx.onSaveChart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, LightningStatisticsChartComponent_form_7_Template, 12, 15, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, LightningStatisticsChartComponent_div_9_Template, 1, 8, "div", 7)(10, LightningStatisticsChartComponent_div_10_Template, 2, 0, "div", 8)(11, LightningStatisticsChartComponent_div_11_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.widget === false ? "full-container" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](ctx.widget ? "display:none" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c0))("fixedWidth", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 9, ctx.capacityObservable$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.stateService.isBrowser || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.widget && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 11, ctx.capacityObservable$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _app_shared_directives_browser_only_directive__WEBPACK_IMPORTED_MODULE_9__.BrowserOnlyDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_17__.NgxEchartsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_10__.RelativeUrlPipe],
      styles: [".card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  font-size: 18px;\n}\n@media (min-width: 465px) {\n  .card-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (min-width: 992px) {\n  .card-header[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\n\n.main-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--fg);\n  opacity: var(--opacity);\n  margin-top: -13px;\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 3px;\n}\n\n.full-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 15px;\n  width: 100%;\n  height: calc(100vh - 225px);\n  min-height: 400px;\n}\n@media (min-width: 992px) {\n  .full-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 150px);\n  }\n}\n\n.chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  padding-bottom: 20px;\n  padding-right: 10px;\n}\n@media (max-width: 992px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 829px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n@media (max-width: 629px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n@media (max-width: 567px) {\n  .chart[_ngcontent-%COMP%] {\n    padding-bottom: 55px;\n  }\n}\n\n.chart-widget[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.pool-distribution[_ngcontent-%COMP%] {\n  min-height: 56px;\n  display: block;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  margin: 0px auto 20px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2) {\n  order: 2;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2) {\n    order: 3;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n  order: 3;\n}\n@media (min-width: 485px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    order: 2;\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3) {\n    display: block;\n  }\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--title-fg);\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pool-distribution[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--transparent-fg);\n  font-size: 12px;\n}\n\n.skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  max-width: 80px;\n  margin: 15px auto 3px;\n}\n\n.indexing-message[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 15px;\n  color: grey;\n  font-weight: bold;\n  margin-left: calc(50% - 85px);\n  margin-top: -10px;\n}", ".loadingGraphs[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 15px);\n      z-index: 99;\n    }"]
    });
  }
  return LightningStatisticsChartComponent;
})();

/***/ })

};
;
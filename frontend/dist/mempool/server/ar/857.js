"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 23172:
/*!******************************************************************!*\
  !*** ./src/app/components/block/block-transactions.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockTransactionsComponent: () => (/* binding */ BlockTransactionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/electrs-api.service */ 62596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _components_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/transactions-list/transactions-list.component */ 5754);
/* harmony import */ var _app_shared_components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/http-error/http-error.component */ 4560);










const _c0 = a0 => ({
  $implicit: a0
});
const _c1 = a0 => ({
  "width": a0
});
function BlockTransactionsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function BlockTransactionsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](0, 5);
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](0);
  }
}
function BlockTransactionsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](0, 6);
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](0);
  }
}
function BlockTransactionsComponent_app_transactions_list_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-transactions-list", 15);
  }
  if (rf & 2) {
    const transactions_r5 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transactions", transactions_r5)("paginated", true)("blockTime", ctx_r5.timestamp);
  }
}
function BlockTransactionsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-http-error", 16)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br")(5, "br");
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("error", ctx_r5.transactionsError);
  }
}
function BlockTransactionsComponent_ng_template_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const txsLoadingStatus_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, txsLoadingStatus_r7 + "%"));
  }
}
function BlockTransactionsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BlockTransactionsComponent_ng_template_14_ng_container_1_Template, 4, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19)(4, "div", 20)(5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 22)(9, "span", 22)(10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const headerLoader_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r5.txsLoadingStatus$))("ngIfElse", headerLoader_r8);
  }
}
function BlockTransactionsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let BlockTransactionsComponent = /*#__PURE__*/(() => {
  class BlockTransactionsComponent {
    constructor(stateService, route, router, electrsApiService) {
      this.stateService = stateService;
      this.route = route;
      this.router = router;
      this.electrsApiService = electrsApiService;
      this.blockReward = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
      this.itemsPerPage = this.stateService.env.ITEMS_PER_PAGE;
      this.page = 1;
      this.isLoadingTransactions = true;
      this.transactionsError = null;
    }
    ngOnInit() {
      this.transactions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.block$, this.route.queryParams]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(([_, queryParams]) => {
        this.page = +queryParams['page'] || 1;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(([block, _]) => this.electrsApiService.getBlockTransactions$(block.id, (this.page - 1) * this.itemsPerPage).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        this.transactionsError = err;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(transactions => {
        // The block API doesn't contain the block rewards on Liquid
        if (this.stateService.isLiquid() && transactions && transactions[0] && transactions[0].vin[0].is_coinbase) {
          const blockReward = transactions[0].vout.reduce((acc, curr) => acc + curr.value, 0) / 100000000;
          this.blockReward.emit(blockReward);
        }
      }));
      this.txsLoadingStatus$ = this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.stateService.loadingIndicators$), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(indicators => indicators['blocktxs-' + this.blockHash] !== undefined ? indicators['blocktxs-' + this.blockHash] : 0));
    }
    pageChange(page, target) {
      target.scrollIntoView(); // works for chrome
      this.router.navigate([], {
        queryParams: {
          page: page
        },
        queryParamsHandling: 'merge'
      });
    }
    static #_ = this.ɵfac = function BlockTransactionsComponent_Factory(t) {
      return new (t || BlockTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_1__.ElectrsApiService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BlockTransactionsComponent,
      selectors: [["app-block-transactions"]],
      inputs: {
        txCount: "txCount",
        timestamp: "timestamp",
        blockHash: "blockHash",
        previousBlockHash: "previousBlockHash",
        block$: "block$",
        paginationMaxSize: "paginationMaxSize"
      },
      outputs: {
        blockReward: "blockReward"
      },
      decls: 19,
      vars: 25,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.transaction-count.singular
           */
          const MSG_EXTERNAL_5691509156839267286$$SRC_APP_COMPONENTS_BLOCK_BLOCK_TRANSACTIONS_COMPONENT_TS_0 = goog.getMsg("{$interpolation} transaction", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i }}"
            }
          });
          i18n_0 = MSG_EXTERNAL_5691509156839267286$$SRC_APP_COMPONENTS_BLOCK_BLOCK_TRANSACTIONS_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u0645\u0639\u0627\u0645\u0644\u0629 " + "\uFFFD0\uFFFD" + "";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.transaction-count.plural
           */
          const MSG_EXTERNAL_6372919304279023858$$SRC_APP_COMPONENTS_BLOCK_BLOCK_TRANSACTIONS_COMPONENT_TS_1 = goog.getMsg("{$interpolation} transactions", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i }}"
            }
          });
          i18n_1 = MSG_EXTERNAL_6372919304279023858$$SRC_APP_COMPONENTS_BLOCK_BLOCK_TRANSACTIONS_COMPONENT_TS_1;
        } else {
          i18n_1 = "" + "\uFFFD0\uFFFD" + " \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc error.general-loading-data
           */
          const MSG_EXTERNAL_2612543646528354459$$SRC_APP_COMPONENTS_BLOCK_BLOCK_TRANSACTIONS_COMPONENT_TS_2 = goog.getMsg("Error loading data.");
          i18n_2 = MSG_EXTERNAL_2612543646528354459$$SRC_APP_COMPONENTS_BLOCK_BLOCK_TRANSACTIONS_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.";
        }
        return [["blockTxTitle", ""], ["transactionsSingular", ""], ["transactionsPlural", ""], ["loading", ""], ["headerLoader", ""], i18n_0, i18n_1, i18n_2, ["id", "block-tx-title", 1, "block-tx-title"], [1, "text-left"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-container", "float-right", 3, "pageChange", "collectionSize", "rotate", "pageSize", "page", "maxSize", "boundaryLinks", "ellipses"], [1, "clearfix"], [3, "transactions", "paginated", "blockTime", 4, "ngIf", "ngIfElse"], [3, "ngIf"], [3, "transactions", "paginated", "blockTime"], [3, "error"], [1, "tx-skeleton"], [4, "ngIf", "ngIfElse"], [1, "header-bg", "box"], [1, "row"], [1, "col-sm"], [1, "skeleton-loader"], [1, "progress", "progress-dark", 2, "margin", "4px", "height", "14px"], ["role", "progressbar", 1, "progress-bar", "progress-light", 3, "ngStyle"]];
      },
      template: function BlockTransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8, 0)(2, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BlockTransactionsComponent_ng_container_3_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BlockTransactionsComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(7, BlockTransactionsComponent_ng_template_7_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngb-pagination", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("pageChange", function BlockTransactionsComponent_Template_ngb_pagination_pageChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function BlockTransactionsComponent_Template_ngb_pagination_pageChange_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const blockTxTitle_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.pageChange(ctx.page, blockTxTitle_r4));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, BlockTransactionsComponent_app_transactions_list_11_Template, 1, 3, "app-transactions-list", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, BlockTransactionsComponent_ng_template_13_Template, 6, 1, "ng-template", 14)(14, BlockTransactionsComponent_ng_template_14_Template, 11, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(16, BlockTransactionsComponent_ng_template_16_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ngb-pagination", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("pageChange", function BlockTransactionsComponent_Template_ngb_pagination_pageChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function BlockTransactionsComponent_Template_ngb_pagination_pageChange_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const blockTxTitle_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.pageChange(ctx.page, blockTxTitle_r4));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const transactionsSingular_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
          const transactionsPlural_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
          const loading_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.txCount === 1 ? transactionsSingular_r9 : transactionsPlural_r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 19, ctx.txCount)));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", ctx.txCount)("rotate", true)("pageSize", ctx.itemsPerPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxSize", ctx.paginationMaxSize)("boundaryLinks", true)("ellipses", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 21, ctx.transactions$))("ngIfElse", loading_r11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.transactionsError);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", ctx.txCount)("rotate", true)("pageSize", ctx.itemsPerPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxSize", ctx.paginationMaxSize)("boundaryLinks", true)("ellipses", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPagination, _components_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_2__.TransactionsListComponent, _app_shared_components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_3__.HttpErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
      styles: [".block-tx-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-top: -15px;\n  position: relative;\n}\n@media (min-width: 550px) {\n  .block-tx-title[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    flex-direction: row;\n  }\n}\n.block-tx-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin: 0;\n  position: relative;\n  padding-bottom: 10px;\n}\n@media (min-width: 550px) {\n  .block-tx-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n    align-self: end;\n  }\n}\n\n.tx-skeleton[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.tx-skeleton[_ngcontent-%COMP%]   .header-bg[_ngcontent-%COMP%]:first-child {\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.tx-skeleton[_ngcontent-%COMP%]   .header-bg[_ngcontent-%COMP%]:nth-child(2)   .row[_ngcontent-%COMP%] {\n  height: 107px;\n}"],
      changeDetection: 0
    });
  }
  return BlockTransactionsComponent;
})();

/***/ }),

/***/ 16990:
/*!*****************************************************!*\
  !*** ./src/app/components/block/block.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockComponent: () => (/* binding */ BlockComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 60444);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/pipes/relative-url/relative-url.pipe */ 76150);
/* harmony import */ var _app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/graphs.utils */ 19643);
/* harmony import */ var _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/common.utils */ 75903);
/* harmony import */ var _app_shared_transaction_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/transaction.utils */ 25678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 39962);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/electrs-api.service */ 62596);
/* harmony import */ var _app_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/state.service */ 19836);
/* harmony import */ var _app_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/seo.service */ 5912);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/websocket.service */ 48246);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/api.service */ 88957);
/* harmony import */ var _app_services_price_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/price.service */ 9316);
/* harmony import */ var _app_services_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/cache.service */ 68647);
/* harmony import */ var _app_services_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/services-api.service */ 1598);
/* harmony import */ var _app_services_preload_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/preload.service */ 11336);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 40804);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 57056);
/* harmony import */ var _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/clipboard/clipboard.component */ 97338);
/* harmony import */ var _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/fiat/fiat.component */ 68091);
/* harmony import */ var _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/amount/amount.component */ 85964);
/* harmony import */ var _components_block_overview_graph_block_overview_graph_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/block-overview-graph/block-overview-graph.component */ 89668);
/* harmony import */ var _app_shared_components_fee_rate_fee_rate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/shared/components/fee-rate/fee-rate.component */ 52556);
/* harmony import */ var _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/shared/components/truncate/truncate.component */ 76206);
/* harmony import */ var _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/shared/components/timestamp/timestamp.component */ 27400);
/* harmony import */ var _app_shared_components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/shared/components/http-error/http-error.component */ 4560);
/* harmony import */ var _app_shared_pipes_bytes_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/shared/pipes/bytes-pipe/bytes.pipe */ 42108);
/* harmony import */ var _app_shared_pipes_bytes_pipe_wubytes_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/shared/pipes/bytes-pipe/wubytes.pipe */ 94371);
/* harmony import */ var _app_shared_pipes_shorten_string_pipe_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/shared/pipes/shorten-string-pipe/shorten-string.pipe */ 49861);
/* harmony import */ var _app_shared_pipes_decimal2hex_decimal2hex_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/shared/pipes/decimal2hex/decimal2hex.pipe */ 60464);
/* harmony import */ var _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/shared/pipes/amount-shortener.pipe */ 65524);
/* harmony import */ var _components_block_block_transactions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @components/block/block-transactions.component */ 23172);



































const _c0 = ["blockGraphProjected"];
const _c1 = ["blockGraphActual"];
const BlockComponent_ng_template_26_Defer_28_DepsFn = () => [_components_block_block_transactions_component__WEBPACK_IMPORTED_MODULE_26__.BlockTransactionsComponent];
const _c2 = (a0, a1) => [a0, a1];
const _c3 = a0 => [a0];
const _c4 = () => ["fas", "angle-left"];
const _c5 = () => ["fas", "angle-right"];
const _c6 = () => ["fas", "info-circle"];
const _c7 = () => ["replacement"];
const _c8 = () => ["fas", "external-link-alt"];
const _c9 = a0 => ({
  $implicit: a0
});
function BlockComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 76)(1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "app-truncate", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("text", ctx_r1.block.canonical)("lastChars", 12)("link", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction2"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](4, 4, "/block/"), ctx_r1.block.canonical))("maxWidth", 480);
  }
}
function BlockComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
}
function BlockComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](0, 18);
  }
}
function BlockComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function BlockComponent_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.navigateToNextBlock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 3, "/block/"), ctx_r1.nextBlockHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](8, _c4))("fixedWidth", true);
  }
}
function BlockComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](2, _c4))("fixedWidth", true);
  }
}
function BlockComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function BlockComponent_a_13_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.navigateToPreviousBlock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 3, "/block/"), ctx_r1.block.previousblockhash));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](8, _c5))("fixedWidth", true);
  }
}
function BlockComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](2, _c5))("fixedWidth", true);
  }
}
function BlockComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
}
function BlockComponent_div_21_ng_container_5_tr_26_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("badge-success", (ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.matchRate) >= 99)("badge-warning", (ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.matchRate) >= 75 && (ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.matchRate) < 99)("badge-danger", (ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.matchRate) < 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"]("", ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.matchRate, "%");
  }
}
function BlockComponent_div_21_ng_container_5_tr_26_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
}
function BlockComponent_div_21_ng_container_5_tr_26_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, BlockComponent_div_21_ng_container_5_tr_26_ng_template_9_ng_container_0_Template, 3, 0, "ng-container", 62);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const loadingHealth_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingOverview && (ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.id) === ctx_r1.block.id)("ngIfElse", loadingHealth_r5);
  }
}
function BlockComponent_div_21_ng_container_5_tr_26_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "span", 101);
  }
}
function BlockComponent_div_21_ng_container_5_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](3, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](5, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, BlockComponent_div_21_ng_container_5_tr_26_span_8_Template, 2, 7, "span", 98)(9, BlockComponent_div_21_ng_container_5_tr_26_ng_template_9_Template, 1, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(11, BlockComponent_div_21_ng_container_5_tr_26_ng_template_11_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const nullHealth_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](5, 5, "/docs/faq")));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](9, _c6))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", (ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.matchRate) != null && (ctx_r1.blockAudit == null ? null : ctx_r1.blockAudit.id) === ctx_r1.block.id)("ngIfElse", nullHealth_r6);
  }
}
function BlockComponent_div_21_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "tr")(2, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](3, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](5, "\u200E");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](7, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](9, "shortenString");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](10, "app-clipboard", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](11, "tr")(12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](13, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](15, "app-timestamp", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](16, "tr")(17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](18, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](19, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](20, "bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](21, "tr")(22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](23, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](24, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](25, "wuBytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](26, BlockComponent_div_21_ng_container_5_tr_26_Template, 13, 10, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("title", ctx_r1.block.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction2"](21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](7, 10, "/block/"), ctx_r1.block.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](9, 12, ctx_r1.block.id, 13));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("text", ctx_r1.block.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("customFormat", "yyyy-MM-dd HH:mm:ss")("unixTime", ctx_r1.block.timestamp)("precision", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("innerHTML", "\u200E" + _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](20, 15, ctx_r1.block.size, 2), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("innerHTML", "\u200E" + _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](25, 18, ctx_r1.block.weight, 2), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.auditAvailable);
  }
}
function BlockComponent_div_21_ng_template_6_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
}
function BlockComponent_div_21_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "tr")(4, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "tr")(7, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](8, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](9, "tr")(10, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](11, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](12, BlockComponent_div_21_ng_template_6_tr_12_Template, 3, 0, "tr", 74);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.showAudit);
  }
}
function BlockComponent_div_21_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_div_21_table_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_div_21_table_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "table", 88)(1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, BlockComponent_div_21_table_10_ng_container_2_Template, 1, 0, "ng-container", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    const restOfTable_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", restOfTable_r7);
  }
}
function BlockComponent_div_21_div_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_div_21_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 106)(1, "app-block-overview-graph", 107, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("txClickEvent", function BlockComponent_div_21_div_11_Template_app_block_overview_graph_txClickEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.onTxClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, BlockComponent_div_21_div_11_ng_container_3_Template, 1, 0, "ng-container", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    const emptyBlockInfo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("isLoading", !ctx_r1.stateService.isBrowser || ctx_r1.isLoadingOverview)("resolution", 86)("blockLimit", ctx_r1.stateService.blockVSize)("orientation", "top")("flip", false)("blockConversion", ctx_r1.blockConversion)("showFilters", true)("excludeFilters", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](10, _c7))("relativeTime", ctx_r1.block == null ? null : ctx_r1.block.timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", emptyBlockInfo_r9);
  }
}
function BlockComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "table", 88)(4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, BlockComponent_div_21_ng_container_5_Template, 27, 24, "ng-container", 62)(6, BlockComponent_div_21_ng_template_6_Template, 13, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(8, BlockComponent_div_21_ng_container_8_Template, 1, 0, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](9, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](10, BlockComponent_div_21_table_10_Template, 3, 1, "table", 90)(11, BlockComponent_div_21_div_11_Template, 4, 11, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skeletonRows_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](7);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const restOfTable_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.block && !ctx_r1.isLoadingBlock)("ngIfElse", skeletonRows_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.isMobile || ctx_r1.webGlEnabled && !ctx_r1.showAudit)("ngIfThen", restOfTable_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("graph-col", ctx_r1.webGlEnabled && !ctx_r1.showAudit);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isMobile && !(ctx_r1.webGlEnabled && !ctx_r1.showAudit));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.webGlEnabled && !ctx_r1.showAudit);
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "app-fee-rate", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](5, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "app-fee-rate", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("fee", ctx_r1.block.extras == null ? null : ctx_r1.block.extras.minFee)("showUnit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("fee", ctx_r1.block.extras == null ? null : ctx_r1.block.extras.maxFee);
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](4, "~");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "app-fee-rate", 111)(6, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("fee", ctx_r1.block.extras == null ? null : ctx_r1.block.extras.medianFee);
  }
}
function BlockComponent_ng_template_22_ng_container_0_ng_template_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "app-amount", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "app-fiat", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("satoshis", ctx_r1.block.extras.totalFees)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("blockConversion", ctx_r1.blockConversion)("value", ctx_r1.block.extras.totalFees);
  }
}
function BlockComponent_ng_template_22_ng_container_0_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "app-amount", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "app-fiat", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("satoshis", ctx_r1.fees * 100000000)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("blockConversion", ctx_r1.blockConversion)("value", ctx_r1.fees * 100000000);
  }
}
function BlockComponent_ng_template_22_ng_container_0_ng_template_3_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "app-amount", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "app-fiat", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("satoshis", ctx_r1.block.extras.reward)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("blockConversion", ctx_r1.blockConversion)("value", (ctx_r1.blockSubsidy + ctx_r1.fees) * 100000000);
  }
}
function BlockComponent_ng_template_22_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, BlockComponent_ng_template_22_ng_container_0_ng_template_3_td_3_Template, 4, 4, "td", 62)(4, BlockComponent_ng_template_22_ng_container_0_ng_template_3_ng_template_4_Template, 4, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, BlockComponent_ng_template_22_ng_container_0_ng_template_3_tr_6_Template, 7, 4, "tr", 74);
  }
  if (rf & 2) {
    const liquidTotalFees_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet")("ngIfElse", liquidTotalFees_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet");
  }
}
function BlockComponent_ng_template_22_ng_container_0_ng_template_4_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
}
function BlockComponent_ng_template_22_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, BlockComponent_ng_template_22_ng_container_0_ng_template_4_tr_5_Template, 5, 0, "tr", 74);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet");
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_span_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r1.block.extras.pool.minerNames[1].slice(0, 15), "\u2026 ");
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_span_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r1.block.extras.pool.minerNames[1], " ");
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_span_3_Conditional_1_Template, 1, 1)(2, BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_span_3_Conditional_2_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵconditional"](1, ctx_r1.block.extras.pool.minerNames[1].length > 16 ? 1 : 2);
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "td")(1, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_span_3_Template, 3, 1, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction2"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](2, 5, "/mining/pool"), ctx_r1.block.extras.pool.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", (ctx_r1.block.extras.pool.minerNames == null ? null : ctx_r1.block.extras.pool.minerNames.length) > 1 && ctx_r1.block.extras.pool.minerNames[1] != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("src", "/resources/mining-pools/" + ctx_r1.block.extras.pool.slug + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"])("alt", "Logo of " + ctx_r1.block.extras.pool.name + " mining pool");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r1.block.extras.pool.name, " ");
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_6_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "td")(1, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassMap"](ctx_r1.block.extras.pool.slug === "unknown" ? "badge-secondary" : "badge-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r1.block.extras.pool.name, " ");
  }
}
function BlockComponent_ng_template_22_ng_container_0_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, BlockComponent_ng_template_22_ng_container_0_tr_6_td_3_Template, 6, 10, "td", 74)(4, BlockComponent_ng_template_22_ng_container_0_tr_6_td_4_Template, 3, 3, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.stateService.env.MINING_DASHBOARD);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.stateService.env.MINING_DASHBOARD && ctx_r1.stateService.env.BASE_MODULE === "mempool");
  }
}
function BlockComponent_ng_template_22_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, BlockComponent_ng_template_22_ng_container_0_tr_1_Template, 7, 3, "tr", 74)(2, BlockComponent_ng_template_22_ng_container_0_tr_2_Template, 7, 1, "tr", 74)(3, BlockComponent_ng_template_22_ng_container_0_ng_template_3_Template, 7, 3, "ng-template", 108)(4, BlockComponent_ng_template_22_ng_container_0_ng_template_4_Template, 6, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(6, BlockComponent_ng_template_22_ng_container_0_tr_6_Template, 5, 2, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const loadingFees_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", (ctx_r1.block.extras == null ? null : ctx_r1.block.extras.medianFee) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.fees !== undefined)("ngIfElse", loadingFees_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet");
  }
}
function BlockComponent_ng_template_22_ng_template_1_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
}
function BlockComponent_ng_template_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "tr")(4, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "tr")(7, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](8, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](9, "tr")(10, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](11, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](12, BlockComponent_ng_template_22_ng_template_1_tr_12_Template, 3, 0, "tr", 74);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet");
  }
}
function BlockComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, BlockComponent_ng_template_22_ng_container_0_Template, 7, 5, "ng-container", 62)(1, BlockComponent_ng_template_22_ng_template_1_Template, 13, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const loadingRest_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.block && !ctx_r1.isLoadingBlock)("ngIfElse", loadingRest_r13);
  }
}
function BlockComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "span", 123)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
}
function BlockComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 130)(1, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function BlockComponent_div_25_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.changeMode("projected"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](3, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function BlockComponent_div_25_div_1_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.changeMode("actual"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](5, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("active", ctx_r1.mode === "projected");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("active", ctx_r1.mode === "actual");
  }
}
function BlockComponent_div_25_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "h3", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
}
function BlockComponent_div_25_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_div_25_ng_container_9_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_div_25_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, BlockComponent_div_25_ng_container_9_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 105);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    const expectedDetails_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](31);
    const actualDetails_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.isMobile && ctx_r1.mode === "actual" ? actualDetails_r17 : expectedDetails_r16);
  }
}
function BlockComponent_div_25_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, BlockComponent_div_25_ng_container_9_ng_template_1_Template, 1, 1, "ng-template", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    const loadingDetailsSkeletons_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingOverview)("ngIfElse", loadingDetailsSkeletons_r18);
  }
}
function BlockComponent_div_25_div_10_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "h3", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "a", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](4, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](4, 3, "/docs/faq")));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](7, _c6))("fixedWidth", true);
  }
}
function BlockComponent_div_25_div_10_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_div_25_div_10_ng_container_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_div_25_div_10_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, BlockComponent_div_25_div_10_ng_container_6_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 105);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    const actualDetails_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", actualDetails_r17);
  }
}
function BlockComponent_div_25_div_10_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, BlockComponent_div_25_div_10_ng_container_6_ng_template_1_Template, 1, 1, "ng-template", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    const loadingDetailsSkeletons_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingOverview)("ngIfElse", loadingDetailsSkeletons_r18);
  }
}
function BlockComponent_div_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, BlockComponent_div_25_div_10_h3_1_Template, 6, 8, "h3", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "div", 127)(3, "app-block-overview-graph", 135, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("txClickEvent", function BlockComponent_div_25_div_10_Template_app_block_overview_graph_txClickEvent_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.onTxClick($event));
    })("txHoverEvent", function BlockComponent_div_25_div_10_Template_app_block_overview_graph_txHoverEvent_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.onTxHover($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, BlockComponent_div_25_div_10_ng_container_5_Template, 1, 0, "ng-container", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, BlockComponent_div_25_div_10_ng_container_6_Template, 2, 2, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    const emptyBlockInfo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("isLoading", !ctx_r1.stateService.isBrowser || ctx_r1.isLoadingOverview)("resolution", 86)("blockLimit", ctx_r1.stateService.blockVSize)("orientation", "top")("flip", false)("mirrorTxid", ctx_r1.hoverTx)("auditHighlighting", ctx_r1.showAudit)("unavailable", ctx_r1.isMobile && !ctx_r1.showAudit)("showFilters", true)("excludeFilters", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](14, _c7))("relativeTime", ctx_r1.block == null ? null : ctx_r1.block.timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", emptyBlockInfo_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid");
  }
}
function BlockComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, BlockComponent_div_25_div_1_Template, 6, 4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "div", 86)(3, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, BlockComponent_div_25_h3_4_Template, 3, 0, "h3", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "div", 127)(6, "app-block-overview-graph", 128, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("txClickEvent", function BlockComponent_div_25_Template_app_block_overview_graph_txClickEvent_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.onTxClick($event));
    })("txHoverEvent", function BlockComponent_div_25_Template_app_block_overview_graph_txHoverEvent_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.onTxHover($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, BlockComponent_div_25_ng_container_8_Template, 1, 0, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](9, BlockComponent_div_25_ng_container_9_Template, 2, 2, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](10, BlockComponent_div_25_div_10_Template, 7, 15, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const emptyBlockInfo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.isMobile && ctx_r1.showAudit);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("mobile", ctx_r1.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("isLoading", !ctx_r1.stateService.isBrowser || ctx_r1.isLoadingOverview)("resolution", 86)("blockLimit", ctx_r1.stateService.blockVSize)("orientation", "top")("flip", false)("mirrorTxid", ctx_r1.hoverTx)("auditHighlighting", ctx_r1.showAudit)("unavailable", !ctx_r1.isMobile && !ctx_r1.showAudit)("showFilters", true)("excludeFilters", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](19, _c7))("relativeTime", ctx_r1.block == null ? null : ctx_r1.block.timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isMobile || ctx_r1.mode !== "actual")("ngIfElse", emptyBlockInfo_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r1.isMobile);
  }
}
function BlockComponent_ng_template_26_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
}
function BlockComponent_ng_template_26_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](5, "decimal2hex");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](5, 1, ctx_r1.block.bits));
  }
}
function BlockComponent_ng_template_26_div_21_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "tr");
  }
}
function BlockComponent_ng_template_26_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 87)(1, "table", 88)(2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, BlockComponent_ng_template_26_div_21_tr_3_Template, 1, 0, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "tr")(5, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](6, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](9, "tr")(10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](11, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](14, "decimal2hex");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](15, "tr")(16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](17, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](18, "td")(19, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](20, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r1.block.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](14, 8, ctx_r1.block.nonce));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate2"]("href", "", ctx_r1.network === "" ? "" : "/" + ctx_r1.network, "/api/block/", ctx_r1.block.id, "/header", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](10, _c8))("fixedWidth", true);
  }
}
function BlockComponent_ng_template_26_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function BlockComponent_ng_template_26_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.toggleAuditMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("active", ctx_r1.auditModeEnabled);
  }
}
function BlockComponent_ng_template_26_Defer_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "app-block-transactions", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("blockReward", function BlockComponent_ng_template_26_Defer_26_Template_app_block_transactions_blockReward_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.updateBlockReward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("paginationMaxSize", ctx_r1.paginationMaxSize)("block$", ctx_r1.block$)("txCount", ctx_r1.block.tx_count)("timestamp", ctx_r1.block.timestamp)("blockHash", ctx_r1.blockHash)("previousBlockHash", ctx_r1.block.previousblockhash);
  }
}
function BlockComponent_ng_template_26_DeferPlaceholder_27_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}
function BlockComponent_ng_template_26_DeferPlaceholder_27_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](0, 46);
  }
  if (rf & 2) {
    const i_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](0);
  }
}
function BlockComponent_ng_template_26_DeferPlaceholder_27_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](0, 47);
  }
  if (rf & 2) {
    const i_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](0);
  }
}
function BlockComponent_ng_template_26_DeferPlaceholder_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div")(1, "div", 149)(2, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, BlockComponent_ng_template_26_DeferPlaceholder_27_ng_container_3_Template, 1, 0, "ng-container", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, BlockComponent_ng_template_26_DeferPlaceholder_27_ng_template_5_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(7, BlockComponent_ng_template_26_DeferPlaceholder_27_ng_template_7_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](9, "ngb-pagination", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](10, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](11, "div", 153)(12, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](13, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](14, "div", 154)(15, "div", 86)(16, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](17, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](19, "span", 103)(20, "span", 103)(21, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const transactionsSingular_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](6);
    const transactionsPlural_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.block.tx_count === 1 ? transactionsSingular_r25 : transactionsPlural_r26)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](11, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](4, 9, ctx_r1.block.tx_count)));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("disabled", true)("collectionSize", ctx_r1.block.tx_count)("rotate", true)("pageSize", ctx_r1.stateService.env.ITEMS_PER_PAGE)("maxSize", ctx_r1.paginationMaxSize)("boundaryLinks", true)("ellipses", false);
  }
}
function BlockComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "div", 85)(3, "div", 86)(4, "div", 87)(5, "table", 88)(6, "tbody")(7, "tr")(8, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](9, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](12, "decimal2hex");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](13, BlockComponent_ng_template_26_span_13_Template, 2, 0, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](14, BlockComponent_ng_template_26_tr_14_Template, 6, 3, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](15, "tr")(16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](17, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](18, "td")(19, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](21, BlockComponent_ng_template_26_div_21_Template, 21, 11, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](22, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](23, BlockComponent_ng_template_26_button_23_Template, 2, 2, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](24, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function BlockComponent_ng_template_26_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.toggleShowDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](25, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](26, BlockComponent_ng_template_26_Defer_26_Template, 1, 6)(27, BlockComponent_ng_template_26_DeferPlaceholder_27_Template, 22, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefer"](28, 26, BlockComponent_ng_template_26_Defer_28_DepsFn, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdeferOnViewport"](0, -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](30, "div", 72)(31, "br");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("hidden", !ctx_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](12, 9, ctx_r1.block.version), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.displayTaprootStatus() && ctx_r1.hasTaproot(ctx_r1.block.version));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r1.block.merkle_root);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network !== "liquid" && ctx_r1.network !== "liquidtestnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.webGlEnabled && ctx_r1.auditAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("active", ctx_r1.showDetails);
  }
}
function BlockComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "app-http-error", 155)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("error", ctx_r1.error);
  }
}
function BlockComponent_ng_template_28_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "relativeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](4, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 3, "/docs/faq/")));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction0"](7, _c6))("fixedWidth", true);
  }
}
function BlockComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, BlockComponent_ng_template_28_a_0_Template, 5, 8, "a", 156);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.network === "" && ctx_r1.block && ctx_r1.block.height > 100000 && ctx_r1.block.tx_count <= 1);
  }
}
function BlockComponent_ng_template_30_table_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "table", 159)(1, "tbody")(2, "tr")(3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](4, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "app-amount", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "tr")(8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](9, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](10, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](11, "wuBytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "tr")(13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](14, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("satoshis", ctx_r1.blockAudit.expectedFees)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("innerHTML", "\u200E" + _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](11, 4, ctx_r1.blockAudit.expectedWeight, 2), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"]((ctx_r1.blockAudit.template == null ? null : ctx_r1.blockAudit.template.length) || 0);
  }
}
function BlockComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, BlockComponent_ng_template_30_table_0_Template, 17, 7, "table", 158);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.block && ctx_r1.blockAudit && ctx_r1.blockAudit.expectedFees != null);
  }
}
function BlockComponent_ng_template_32_table_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "app-amount", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("satoshis", ctx_r1.oobFees)("noFiat", true)("addPlus", true);
  }
}
function BlockComponent_ng_template_32_table_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("positive", ctx_r1.blockAudit.feeDelta <= 0)("negative", ctx_r1.blockAudit.feeDelta > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"](" ", ctx_r1.blockAudit.feeDelta < 0 ? "+" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](2, 6, -ctx_r1.blockAudit.feeDelta * 100, 2), "% ");
  }
}
function BlockComponent_ng_template_32_table_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("positive", ctx_r1.blockAudit.weightDelta <= 0)("negative", ctx_r1.blockAudit.weightDelta > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"](" ", ctx_r1.blockAudit.weightDelta < 0 ? "+" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](2, 6, -ctx_r1.blockAudit.weightDelta * 100, 2), "% ");
  }
}
function BlockComponent_ng_template_32_table_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "amountShortener");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("positive", ctx_r1.blockAudit.txDelta <= 0)("negative", ctx_r1.blockAudit.txDelta > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"](" ", ctx_r1.blockAudit.txDelta < 0 ? "+" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](2, 6, -ctx_r1.blockAudit.txDelta * 100, 2), "% ");
  }
}
function BlockComponent_ng_template_32_table_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "table", 159)(1, "tbody")(2, "tr")(3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](4, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "app-amount", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](7, BlockComponent_ng_template_32_table_0_span_7_Template, 2, 3, "span", 161)(8, BlockComponent_ng_template_32_table_0_span_8_Template, 3, 9, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](9, "tr")(10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](11, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](13, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](14, "wuBytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](15, BlockComponent_ng_template_32_table_0_span_15_Template, 3, 9, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](16, "tr")(17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](18, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](21, BlockComponent_ng_template_32_table_0_span_21_Template, 3, 9, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("satoshis", ctx_r1.block.extras.totalFees)("noFiat", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.oobFees);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.blockAudit.feeDelta);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("innerHTML", "\u200E" + _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](14, 8, ctx_r1.block.weight, 2), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.blockAudit.weightDelta);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r1.block.tx_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.blockAudit.txDelta);
  }
}
function BlockComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, BlockComponent_ng_template_32_table_0_Template, 22, 11, "table", 158);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.block && ctx_r1.blockAudit && ctx_r1.blockAudit.expectedFees != null);
  }
}
function BlockComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "table", 159)(1, "tbody")(2, "tr")(3, "td", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](4, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "tr")(8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](9, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](11, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "tr")(13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](14, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](16, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
  }
}
let BlockComponent = /*#__PURE__*/(() => {
  class BlockComponent {
    constructor(route, location, router, electrsApiService, stateService, seoService, websocketService, relativeUrlPipe, apiService, priceService, cacheService, servicesApiService, cd, preloadService) {
      this.route = route;
      this.location = location;
      this.router = router;
      this.electrsApiService = electrsApiService;
      this.stateService = stateService;
      this.seoService = seoService;
      this.websocketService = websocketService;
      this.relativeUrlPipe = relativeUrlPipe;
      this.apiService = apiService;
      this.priceService = priceService;
      this.cacheService = cacheService;
      this.servicesApiService = servicesApiService;
      this.cd = cd;
      this.preloadService = preloadService;
      this.network = '';
      this.blockAudit = undefined;
      this.isLoadingBlock = true;
      this.latestBlocks = [];
      this.oobFees = 0;
      this.isLoadingOverview = true;
      this.showDetails = false;
      this.showPreviousBlocklink = true;
      this.showNextBlocklink = true;
      this.overviewError = null;
      this.webGlEnabled = true;
      this.auditParamEnabled = false;
      this.auditSupported = this.stateService.env.AUDIT && this.stateService.env.BASE_MODULE === 'mempool' && this.stateService.env.MINING_DASHBOARD === true;
      this.auditModeEnabled = !this.stateService.hideAudit.value;
      this.auditAvailable = true;
      this.isMobile = window.innerWidth <= 767.98;
      this.numMissing = 0;
      this.paginationMaxSize = window.matchMedia('(max-width: 670px)').matches ? 3 : 5;
      this.numUnexpected = 0;
      this.mode = 'projected';
      this.webGlEnabled = this.stateService.isBrowser && (0,_app_shared_graphs_utils__WEBPACK_IMPORTED_MODULE_1__.detectWebGL)();
    }
    ngOnInit() {
      this.websocketService.want(['blocks', 'mempool-blocks']);
      this.network = this.stateService.network;
      this.timeLtrSubscription = this.stateService.timeLtr.subscribe(ltr => {
        this.timeLtr = !!ltr;
      });
      this.setAuditAvailable(this.auditSupported);
      if (this.auditSupported) {
        this.isAuditEnabledSubscription = this.isAuditEnabledFromParam().subscribe(auditParam => {
          if (this.auditParamEnabled) {
            this.auditModeEnabled = auditParam;
          } else {
            this.auditPrefSubscription = this.stateService.hideAudit.subscribe(hide => {
              this.auditModeEnabled = !hide;
              this.showAudit = this.auditAvailable && this.auditModeEnabled;
            });
          }
        });
      }
      this.cacheBlocksSubscription = this.cacheService.loadedBlocks$.subscribe(block => {
        this.loadedCacheBlock(block);
      });
      this.blocksSubscription = this.stateService.blocks$.subscribe(blocks => {
        this.latestBlock = blocks[0];
        this.latestBlocks = blocks;
        this.setNextAndPreviousBlockLink();
        for (const block of blocks) {
          if (block.id === this.blockHash) {
            this.block = block;
            if (block.extras) {
              block.extras.minFee = this.getMinBlockFee(block);
              block.extras.maxFee = this.getMaxBlockFee(block);
              if (block?.extras?.reward != undefined) {
                this.fees = block.extras.reward / 100000000 - this.blockSubsidy;
              }
            }
          } else if (block.height === this.block?.height) {
            this.block.stale = true;
            this.block.canonical = block.id;
          }
        }
      });
      this.block$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(params => {
        const blockHash = params.get('id') || '';
        this.block = undefined;
        this.error = undefined;
        this.fees = undefined;
        this.oobFees = 0;
        if (history.state.data && history.state.data.blockHeight) {
          this.blockHeight = history.state.data.blockHeight;
          this.updateAuditAvailableFromBlockHeight(this.blockHeight);
        }
        let isBlockHeight = false;
        if (/^[0-9]+$/.test(blockHash)) {
          isBlockHeight = true;
          this.stateService.markBlock$.next({
            blockHeight: parseInt(blockHash, 10)
          });
        } else {
          this.blockHash = blockHash;
        }
        document.body.scrollTo(0, 0);
        if (history.state.data && history.state.data.block) {
          this.blockHeight = history.state.data.block.height;
          this.updateAuditAvailableFromBlockHeight(this.blockHeight);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(history.state.data.block);
        } else {
          this.isLoadingBlock = true;
          this.isLoadingOverview = true;
          this.strippedTransactions = undefined;
          this.blockAudit = undefined;
          this.accelerations = undefined;
          let blockInCache;
          if (isBlockHeight) {
            blockInCache = this.latestBlocks.find(block => block.height === parseInt(blockHash, 10));
            if (blockInCache) {
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(blockInCache);
            }
            return this.electrsApiService.getBlockHashFromHeight$(parseInt(blockHash, 10)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(hash => {
              this.blockHash = hash;
              this.location.replaceState(this.router.createUrlTree([(this.network ? '/' + this.network : '') + '/block/', hash]).toString());
              this.seoService.updateCanonical(this.location.path());
              return this.apiService.getBlock$(hash).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(err => {
                this.error = err;
                this.isLoadingBlock = false;
                this.isLoadingOverview = false;
                this.seoService.logSoft404();
                return rxjs__WEBPACK_IMPORTED_MODULE_29__.EMPTY;
              }));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(err => {
              this.error = err;
              this.isLoadingBlock = false;
              this.isLoadingOverview = false;
              this.seoService.logSoft404();
              return rxjs__WEBPACK_IMPORTED_MODULE_29__.EMPTY;
            }));
          }
          blockInCache = this.latestBlocks.find(block => block.id === this.blockHash);
          if (blockInCache) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(blockInCache);
          }
          return this.apiService.getBlock$(blockHash).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(err => {
            this.error = err;
            this.isLoadingBlock = false;
            this.isLoadingOverview = false;
            this.seoService.logSoft404();
            return rxjs__WEBPACK_IMPORTED_MODULE_29__.EMPTY;
          }));
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.tap)(block => {
        if (block.previousblockhash) {
          this.preloadService.block$.next(block.previousblockhash);
          if (this.auditSupported) {
            this.preloadService.blockAudit$.next(block.previousblockhash);
          }
        }
        this.updateAuditAvailableFromBlockHeight(block.height);
        this.block = block;
        if (block.extras) {
          block.extras.minFee = this.getMinBlockFee(block);
          block.extras.maxFee = this.getMaxBlockFee(block);
        }
        this.blockHeight = block.height;
        this.lastBlockHeight = this.blockHeight;
        this.nextBlockHeight = block.height + 1;
        this.setNextAndPreviousBlockLink();
        this.seoService.setTitle("\u0627\u0644\u0643\u062A\u0644\u0629 " + block.height + ": " + block.id + "");
        if (this.stateService.network === 'liquid' || this.stateService.network === 'liquidtestnet') {
          this.seoService.setDescription("\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0627\u0644\u062D\u062C\u0645 \u0648\u0627\u0644\u0648\u0632\u0646 \u0648\u0646\u0637\u0627\u0642 \u0627\u0644\u0631\u0633\u0648\u0645 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0636\u0645\u0646\u0629 \u0648\u0627\u0644\u0645\u0632\u064A\u062F \u0644\u0643\u062A\u0644\u0629 Liquid" + (0, _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.seoDescriptionNetwork)(this.stateService.network) + " " + block.height + " (" + block.id + ").");
        } else {
          this.seoService.setDescription("\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0627\u0644\u062D\u062C\u0645 \u0648\u0627\u0644\u0648\u0632\u0646 \u0648\u0646\u0637\u0627\u0642 \u0627\u0644\u0631\u0633\u0648\u0645 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0636\u0645\u0646\u0629 \u0648\u0627\u0644\u062A\u062F\u0642\u064A\u0642 (\u0627\u0644\u0645\u062A\u0648\u0642\u0639 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0641\u0639\u0644\u064A)\u060C \u0648\u0627\u0644\u0645\u0632\u064A\u062F \u0644\u0643\u062A\u0644\u0629 Bitcoin" + (0, _app_shared_common_utils__WEBPACK_IMPORTED_MODULE_2__.seoDescriptionNetwork)(this.stateService.network) + " " + block.height + " ( " + block.id + ").");
        }
        this.isLoadingBlock = false;
        this.setBlockSubsidy();
        if (block?.extras?.reward !== undefined) {
          this.fees = block.extras.reward / 100000000 - this.blockSubsidy;
        }
        this.stateService.markBlock$.next({
          blockHeight: this.blockHeight
        });
        this.isLoadingOverview = true;
        this.overviewError = null;
        const cachedBlock = this.cacheService.getCachedBlock(block.height);
        if (!cachedBlock) {
          this.cacheService.loadBlock(block.height);
        } else {
          this.loadedCacheBlock(cachedBlock);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.throttleTime)(300, rxjs__WEBPACK_IMPORTED_MODULE_29__.asyncScheduler, {
        leading: true,
        trailing: true
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.shareReplay)({
        bufferSize: 1,
        refCount: true
      }));
      this.overviewSubscription = this.block$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(block => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.forkJoin)([this.apiService.getStrippedBlockTransactions$(block.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(err => {
          this.overviewError = err;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(null);
        })), !this.isAuditAvailableFromBlockHeight(block.height) ? (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(null) : this.apiService.getBlockAudit$(block.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(err => {
          this.overviewError = err;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(null);
        }))]);
      })).subscribe(([transactions, blockAudit]) => {
        if (transactions) {
          this.strippedTransactions = transactions;
        } else {
          this.strippedTransactions = [];
        }
        this.blockAudit = blockAudit;
        this.setupBlockAudit();
        this.isLoadingOverview = false;
      });
      this.accelerationsSubscription = this.block$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(block => {
        return this.stateService.env.ACCELERATOR === true && block.height > 819500 ? this.servicesApiService.getAllAccelerationHistory$({
          blockHeight: block.height
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(() => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)([]);
        })) : (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)([]);
      })).subscribe(accelerations => {
        this.accelerations = accelerations;
        if (accelerations.length && this.strippedTransactions) {
          // Don't call setupBlockAudit if we don't have transactions yet; it will be called later in overviewSubscription
          this.setupBlockAudit();
        }
      });
      this.oobSubscription = this.block$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.filter)(() => this.stateService.env.PUBLIC_ACCELERATIONS === true && this.stateService.network === ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(block => this.apiService.getAccelerationsByHeight$(block.height).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(accelerations => {
        return {
          block,
          accelerations
        };
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)({
          block,
          accelerations: []
        });
      })))).subscribe(({
        block,
        accelerations
      }) => {
        let totalFees = 0;
        for (const acc of accelerations) {
          totalFees += acc.boost_cost;
        }
        this.oobFees = totalFees;
        if (block && this.block && this.blockAudit && block?.height === this.block?.height) {
          this.blockAudit.feeDelta = this.blockAudit.expectedFees > 0 ? (this.blockAudit.expectedFees - (this.block.extras.totalFees + this.oobFees)) / this.blockAudit.expectedFees : 0;
        }
      }, error => {
        this.error = error;
        this.isLoadingBlock = false;
        this.isLoadingOverview = false;
      });
      this.networkChangedSubscription = this.stateService.networkChanged$.subscribe(network => this.network = network);
      this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
        this.currentQueryParams = params;
        if (params.showDetails === 'true') {
          this.showDetails = true;
        } else {
          this.showDetails = false;
        }
        if (params.view === 'projected') {
          this.mode = 'projected';
        } else {
          this.mode = 'actual';
        }
        this.setupBlockGraphs();
      });
      this.keyNavigationSubscription = this.stateService.keyNavigation$.subscribe(event => {
        const prevKey = this.timeLtr ? 'ArrowLeft' : 'ArrowRight';
        const nextKey = this.timeLtr ? 'ArrowRight' : 'ArrowLeft';
        if (this.showPreviousBlocklink && event.key === prevKey && this.nextBlockHeight - 2 >= 0) {
          this.navigateToPreviousBlock();
        }
        if (event.key === nextKey) {
          if (this.showNextBlocklink) {
            this.navigateToNextBlock();
          } else {
            this.router.navigate([this.relativeUrlPipe.transform('/mempool-block'), '0']);
          }
        }
      });
      if (this.priceSubscription) {
        this.priceSubscription.unsubscribe();
      }
      this.priceSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.combineLatest)([this.stateService.fiatCurrency$, this.block$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(([currency, block]) => {
        return this.priceService.getBlockPrice$(block.timestamp, true, currency).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.tap)(price => {
          this.blockConversion = price;
        }));
      })).subscribe();
    }
    ngAfterViewInit() {
      this.childChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.combineLatest)([this.blockGraphProjected.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.startWith)(null)), this.blockGraphActual.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.startWith)(null))]).subscribe(() => {
        this.setupBlockGraphs();
      });
    }
    ngOnDestroy() {
      this.stateService.markBlock$.next({});
      this.overviewSubscription?.unsubscribe();
      this.accelerationsSubscription?.unsubscribe();
      this.keyNavigationSubscription?.unsubscribe();
      this.blocksSubscription?.unsubscribe();
      this.cacheBlocksSubscription?.unsubscribe();
      this.networkChangedSubscription?.unsubscribe();
      this.queryParamsSubscription?.unsubscribe();
      this.timeLtrSubscription?.unsubscribe();
      this.childChangeSubscription?.unsubscribe();
      this.auditPrefSubscription?.unsubscribe();
      this.isAuditEnabledSubscription?.unsubscribe();
      this.oobSubscription?.unsubscribe();
      this.priceSubscription?.unsubscribe();
      this.blockGraphProjected.forEach(graph => {
        graph.destroy();
      });
      this.blockGraphActual.forEach(graph => {
        graph.destroy();
      });
    }
    // TODO - Refactor this.fees/this.reward for liquid because it is not
    // used anymore on Bitcoin networks (we use block.extras directly)
    setBlockSubsidy() {
      this.blockSubsidy = 0;
    }
    toggleShowDetails() {
      if (this.showDetails) {
        this.showDetails = false;
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            showDetails: false,
            view: this.mode
          },
          queryParamsHandling: 'merge',
          fragment: 'block'
        });
      } else {
        this.showDetails = true;
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            showDetails: true,
            view: this.mode
          },
          queryParamsHandling: 'merge',
          fragment: 'details'
        });
      }
    }
    hasTaproot(version) {
      const versionBit = 2; // Taproot
      return (Number(version) & 1 << versionBit) === 1 << versionBit;
    }
    displayTaprootStatus() {
      if (this.stateService.network !== '') {
        return false;
      }
      return this.block && this.block.height > 681393 && new Date().getTime() / 1000 < 1628640000;
    }
    navigateToPreviousBlock() {
      if (!this.block) {
        return;
      }
      const block = this.latestBlocks.find(b => b.height === this.nextBlockHeight - 2);
      this.router.navigate([this.relativeUrlPipe.transform('/block/'), block ? block.id : this.block.previousblockhash], {
        state: {
          data: {
            block,
            blockHeight: this.nextBlockHeight - 2
          }
        }
      });
    }
    navigateToNextBlock() {
      const block = this.latestBlocks.find(b => b.height === this.nextBlockHeight);
      this.router.navigate([this.relativeUrlPipe.transform('/block/'), block ? block.id : this.nextBlockHeight], {
        state: {
          data: {
            block,
            blockHeight: this.nextBlockHeight
          }
        }
      });
    }
    setNextAndPreviousBlockLink() {
      if (this.latestBlock) {
        if (!this.blockHeight) {
          this.showPreviousBlocklink = false;
        } else {
          this.showPreviousBlocklink = true;
        }
        if (this.latestBlock.height && this.latestBlock.height === this.blockHeight) {
          this.showNextBlocklink = false;
        } else {
          this.showNextBlocklink = true;
        }
      }
    }
    setupBlockAudit() {
      const transactions = this.strippedTransactions || [];
      const blockAudit = this.blockAudit;
      const accelerations = this.accelerations || [];
      const acceleratedInBlock = {};
      for (const acc of accelerations) {
        if (acc.pools?.some(pool => pool === this.block?.extras?.pool.id)) {
          acceleratedInBlock[acc.txid] = acc;
        }
      }
      for (const tx of transactions) {
        if (acceleratedInBlock[tx.txid]) {
          tx.acc = true;
          const acceleration = acceleratedInBlock[tx.txid];
          const boostCost = acceleration.boostCost || acceleration.bidBoost;
          const acceleratedFeeRate = Math.max(acceleration.effectiveFee, acceleration.effectiveFee + boostCost) / acceleration.effectiveVsize;
          if (acceleratedFeeRate > tx.rate) {
            tx.rate = acceleratedFeeRate;
          }
        } else {
          tx.acc = false;
        }
      }
      if (transactions && blockAudit) {
        const inTemplate = {};
        const inBlock = {};
        const isUnseen = {};
        const isAdded = {};
        const isPrioritized = {};
        const isDeprioritized = {};
        const isCensored = {};
        const isMissing = {};
        const isSelected = {};
        const isFresh = {};
        const isSigop = {};
        const isRbf = {};
        const isAccelerated = {};
        this.numMissing = 0;
        this.numUnexpected = 0;
        if (blockAudit?.template) {
          // augment with locally calculated *de*prioritized transactions if possible
          const {
            prioritized,
            deprioritized
          } = (0,_app_shared_transaction_utils__WEBPACK_IMPORTED_MODULE_3__.identifyPrioritizedTransactions)(transactions);
          // but if the local calculation produces returns unexpected results, don't use it
          let useLocalDeprioritized = deprioritized.length < transactions.length * 0.1;
          for (const tx of prioritized) {
            if (!isPrioritized[tx] && !isAccelerated[tx]) {
              useLocalDeprioritized = false;
              break;
            }
          }
          for (const tx of blockAudit.template) {
            inTemplate[tx.txid] = true;
            if (tx.acc) {
              isAccelerated[tx.txid] = true;
            }
          }
          for (const tx of transactions) {
            inBlock[tx.txid] = true;
          }
          for (const txid of blockAudit.unseenTxs || []) {
            isUnseen[txid] = true;
          }
          for (const txid of blockAudit.addedTxs) {
            isAdded[txid] = true;
          }
          for (const txid of blockAudit.prioritizedTxs) {
            isPrioritized[txid] = true;
          }
          if (useLocalDeprioritized) {
            for (const txid of deprioritized || []) {
              isDeprioritized[txid] = true;
            }
          }
          for (const txid of blockAudit.missingTxs) {
            isCensored[txid] = true;
          }
          for (const txid of blockAudit.freshTxs || []) {
            isFresh[txid] = true;
          }
          for (const txid of blockAudit.sigopTxs || []) {
            isSigop[txid] = true;
          }
          for (const txid of blockAudit.fullrbfTxs || []) {
            isRbf[txid] = true;
          }
          for (const txid of blockAudit.acceleratedTxs || []) {
            isAccelerated[txid] = true;
          }
          // set transaction statuses
          for (const tx of blockAudit.template) {
            tx.context = 'projected';
            if (isCensored[tx.txid] && tx.rate >= 1) {
              tx.status = 'censored';
            } else if (inBlock[tx.txid]) {
              tx.status = 'found';
            } else {
              if (isFresh[tx.txid]) {
                if (tx.rate - tx.fee / tx.vsize >= 0.1) {
                  tx.status = 'freshcpfp';
                } else {
                  tx.status = 'fresh';
                }
              } else if (isSigop[tx.txid]) {
                tx.status = 'sigop';
              } else if (isRbf[tx.txid]) {
                tx.status = 'rbf';
              } else {
                tx.status = 'missing';
              }
              isMissing[tx.txid] = true;
              this.numMissing++;
            }
            if (isAccelerated[tx.txid]) {
              tx.status = 'accelerated';
            }
          }
          let anySeen = false;
          for (let index = transactions.length - 1; index >= 0; index--) {
            const tx = transactions[index];
            tx.context = 'actual';
            if (index === 0) {
              tx.status = null;
            } else if (isPrioritized[tx.txid]) {
              if (isAdded[tx.txid] || blockAudit.version > 0 && isUnseen[tx.txid]) {
                tx.status = 'added_prioritized';
              } else {
                tx.status = 'prioritized';
              }
            } else if (isDeprioritized[tx.txid]) {
              if (isAdded[tx.txid] || blockAudit.version > 0 && isUnseen[tx.txid]) {
                tx.status = 'added_deprioritized';
              } else {
                tx.status = 'deprioritized';
              }
            } else if (isAdded[tx.txid] && (blockAudit.version === 0 || isUnseen[tx.txid])) {
              tx.status = 'added';
            } else if (inTemplate[tx.txid]) {
              anySeen = true;
              tx.status = 'found';
            } else if (isRbf[tx.txid]) {
              tx.status = 'rbf';
            } else if (isUnseen[tx.txid] && anySeen) {
              tx.status = 'added';
            } else {
              tx.status = 'selected';
              isSelected[tx.txid] = true;
              this.numUnexpected++;
            }
            if (isAccelerated[tx.txid]) {
              tx.status = 'accelerated';
            }
          }
          for (const tx of transactions) {
            inBlock[tx.txid] = true;
          }
          blockAudit.feeDelta = blockAudit.expectedFees > 0 ? (blockAudit.expectedFees - (this.block?.extras.totalFees + this.oobFees)) / blockAudit.expectedFees : 0;
          blockAudit.weightDelta = blockAudit.expectedWeight > 0 ? (blockAudit.expectedWeight - this.block?.weight) / blockAudit.expectedWeight : 0;
          blockAudit.txDelta = blockAudit.template.length > 0 ? (blockAudit.template.length - this.block?.tx_count) / blockAudit.template.length : 0;
          this.blockAudit = blockAudit;
          this.setAuditAvailable(true);
        } else {
          this.setAuditAvailable(false);
        }
      } else {
        this.setAuditAvailable(false);
      }
      this.setupBlockGraphs();
      this.cd.markForCheck();
    }
    setupBlockGraphs() {
      if (this.blockAudit || this.strippedTransactions) {
        this.blockGraphProjected.forEach(graph => {
          graph.destroy();
          if (this.isMobile && this.mode === 'actual') {
            graph.setup(this.blockAudit?.transactions || this.strippedTransactions || []);
          } else {
            graph.setup(this.blockAudit?.template || []);
          }
        });
        this.blockGraphActual.forEach(graph => {
          graph.destroy();
          graph.setup(this.blockAudit?.transactions || this.strippedTransactions || []);
        });
      }
    }
    onResize(event) {
      const target = event.target;
      const isMobile = target.innerWidth <= 767.98;
      const changed = isMobile !== this.isMobile;
      this.isMobile = isMobile;
      this.paginationMaxSize = target.innerWidth < 670 ? 3 : 5;
      if (changed) {
        this.changeMode(this.mode);
      }
    }
    changeMode(mode) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          showDetails: this.showDetails,
          view: mode
        },
        queryParamsHandling: 'merge',
        fragment: 'overview'
      });
    }
    onTxClick(event) {
      const url = new _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeUrlPipe(this.stateService).transform(`/tx/${event.tx.txid}`);
      if (!event.keyModifier) {
        this.router.navigate([url]);
      } else {
        window.open(url, '_blank');
      }
    }
    onTxHover(txid) {
      if (txid && txid.length) {
        this.hoverTx = txid;
      } else {
        this.hoverTx = null;
      }
    }
    setAuditAvailable(available) {
      this.auditAvailable = available;
      this.showAudit = this.auditAvailable && this.auditModeEnabled && this.auditSupported;
    }
    toggleAuditMode() {
      this.stateService.hideAudit.next(this.auditModeEnabled);
      const queryParams = {
        ...this.currentQueryParams
      };
      delete queryParams['audit'];
      let newUrl = this.router.url.split('?')[0];
      const queryString = new URLSearchParams(queryParams).toString();
      if (queryString) {
        newUrl += '?' + queryString;
      }
      this.location.replaceState(newUrl);
      // avoid duplicate subscriptions
      this.auditPrefSubscription?.unsubscribe();
      this.auditPrefSubscription = this.stateService.hideAudit.subscribe(hide => {
        this.auditModeEnabled = !hide;
        this.showAudit = this.auditAvailable && this.auditModeEnabled;
      });
    }
    updateAuditAvailableFromBlockHeight(blockHeight) {
      if (!this.isAuditAvailableFromBlockHeight(blockHeight)) {
        this.setAuditAvailable(false);
      }
    }
    isAuditEnabledFromParam() {
      return this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(params => {
        this.auditParamEnabled = 'audit' in params;
        return this.auditParamEnabled ? !(params['audit'] === 'false') : true;
      }));
    }
    isAuditAvailableFromBlockHeight(blockHeight) {
      if (!this.auditSupported) {
        return false;
      }
      switch (this.stateService.network) {
        case 'testnet':
          if (blockHeight < this.stateService.env.TESTNET_BLOCK_AUDIT_START_HEIGHT) {
            return false;
          }
          break;
        case 'signet':
          if (blockHeight < this.stateService.env.SIGNET_BLOCK_AUDIT_START_HEIGHT) {
            return false;
          }
          break;
        default:
          if (blockHeight < this.stateService.env.MAINNET_BLOCK_AUDIT_START_HEIGHT) {
            return false;
          }
      }
      return true;
    }
    getMinBlockFee(block) {
      if (block?.extras?.feeRange) {
        // heuristic to check if feeRange is adjusted for effective rates
        if (block.extras.medianFee === block.extras.feeRange[3]) {
          return block.extras.feeRange[1];
        } else {
          return block.extras.feeRange[0];
        }
      }
      return 0;
    }
    getMaxBlockFee(block) {
      if (block?.extras?.feeRange) {
        return block.extras.feeRange[block.extras.feeRange.length - 1];
      }
      return 0;
    }
    loadedCacheBlock(block) {
      if (this.block && block.height === this.block.height && block.id !== this.block.id) {
        this.block.stale = true;
        this.block.canonical = block.id;
      }
    }
    updateBlockReward(blockReward) {
      if (this.fees === undefined) {
        this.fees = blockReward;
      }
    }
    static #_ = this.ɵfac = function BlockComponent_Factory(t) {
      return new (t || BlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_31__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_electrs_api_service__WEBPACK_IMPORTED_MODULE_4__.ElectrsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_seo_service__WEBPACK_IMPORTED_MODULE_6__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_7__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeUrlPipe), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_price_service__WEBPACK_IMPORTED_MODULE_9__.PriceService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_cache_service__WEBPACK_IMPORTED_MODULE_10__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_services_api_service__WEBPACK_IMPORTED_MODULE_11__.ServicesApiServices), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_27__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_services_preload_service__WEBPACK_IMPORTED_MODULE_12__.PreloadService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({
      type: BlockComponent,
      selectors: [["app-block"]],
      viewQuery: function BlockComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.blockGraphProjected = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.blockGraphActual = _t);
        }
      },
      decls: 38,
      vars: 27,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Next Block
           */
          const MSG_EXTERNAL_7699647190475586034$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_0 = goog.getMsg("Next Block");
          i18n_0 = MSG_EXTERNAL_7699647190475586034$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_0;
        } else {
          i18n_0 = "\u0627\u0644\u0643\u062A\u0644\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Previous Block
           */
          const MSG_EXTERNAL_7453887203136814323$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_1 = goog.getMsg("Previous Block");
          i18n_1 = MSG_EXTERNAL_7453887203136814323$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_1;
        } else {
          i18n_1 = "\u0627\u0644\u0643\u062A\u0644\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Block reorg
           * @meaning block.reorged
           */
          const MSG_EXTERNAL_3338707587131638636$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_2 = goog.getMsg("This block does not belong to the main chain, it has been replaced by:");
          i18n_2 = MSG_EXTERNAL_3338707587131638636$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_2;
        } else {
          i18n_2 = "\u0647\u0630\u0647 \u0627\u0644\u0643\u062A\u0644\u0629 \u0644\u0627 \u062A\u0646\u062A\u0645\u064A \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629\u060C \u0648\u062A\u0645 \u0627\u0633\u062A\u0628\u062F\u0627\u0644\u0647\u0627 \u0628\u0640:";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.block-title
           */
          const MSG_EXTERNAL_420763834450076269$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_3 = goog.getMsg("Block");
          i18n_3 = MSG_EXTERNAL_420763834450076269$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_3;
        } else {
          i18n_3 = "\u0643\u062A\u0644\u0629";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @suppress {msgDescriptions}
           */
          const MSG_EXTERNAL_2303359202781425764$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_4 = goog.getMsg("Genesis");
          i18n_4 = MSG_EXTERNAL_2303359202781425764$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_4;
        } else {
          i18n_4 = "\u0645\u0646\u0634\u0623";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Stale block state
           * @meaning block.stale
           */
          const MSG_EXTERNAL_6825049914031724419$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_5 = goog.getMsg("Stale");
          i18n_5 = MSG_EXTERNAL_6825049914031724419$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_5;
        } else {
          i18n_5 = "\u0645\u0647\u062C\u0648\u0631";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.hash
           */
          const MSG_EXTERNAL_3602441324260631848$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_6 = goog.getMsg("Hash");
          i18n_6 = MSG_EXTERNAL_3602441324260631848$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_6;
        } else {
          i18n_6 = "\u0645\u0639\u0631\u0641 \u0627\u0644\u062A\u0634\u0641\u064A\u0631";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.timestamp
           */
          const MSG_EXTERNAL_5667900632592970266$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_7 = goog.getMsg("Timestamp");
          i18n_7 = MSG_EXTERNAL_5667900632592970266$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_7;
        } else {
          i18n_7 = "\u0627\u0644\u0648\u0642\u062A \u0648 \u0627\u0644\u062A\u0627\u0631\u064A\u062E";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.size
           */
          const MSG_EXTERNAL_45739481977493163$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_8 = goog.getMsg("Size");
          i18n_8 = MSG_EXTERNAL_45739481977493163$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_8;
        } else {
          i18n_8 = "\u0627\u0644\u062D\u062C\u0645";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.weight
           */
          const MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_9 = goog.getMsg("Weight");
          i18n_9 = MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_9;
        } else {
          i18n_9 = "\u0627\u0644\u0648\u0632\u0646";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc latest-blocks.health
           */
          const MSG_EXTERNAL_2041675390931385838$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_10 = goog.getMsg("Health");
          i18n_10 = MSG_EXTERNAL_2041675390931385838$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_10;
        } else {
          i18n_10 = "\u0627\u0644\u0635\u062D\u0629";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc unknown
           */
          const MSG_EXTERNAL_4467323362722952678$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_11 = goog.getMsg("Unknown");
          i18n_11 = MSG_EXTERNAL_4467323362722952678$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_11;
        } else {
          i18n_11 = "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mempool-block.fee-span
           */
          const MSG_EXTERNAL_4012359471246826308$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_12 = goog.getMsg("Fee span");
          i18n_12 = MSG_EXTERNAL_4012359471246826308$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_12;
        } else {
          i18n_12 = "\u0646\u0637\u0627\u0642 \u0627\u0644\u0631\u0633\u0648\u0645";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.median-fee
           */
          const MSG_EXTERNAL_6643831251715779218$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_13 = goog.getMsg("Median fee");
          i18n_13 = MSG_EXTERNAL_6643831251715779218$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_13;
        } else {
          i18n_13 = "\u0645\u062A\u0648\u0633\u0637 \u200B\u200B\u0627\u0644\u0631\u0633\u0648\u0645";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Total fees in a block
           * @meaning block.total-fees
           */
          const MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_14 = goog.getMsg("Total fees");
          i18n_14 = MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_14;
        } else {
          i18n_14 = "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0643\u0644\u064A\u0629";
        }
        let i18n_15;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Total subsidy and fees in a block
           * @meaning block.subsidy-and-fees
           */
          const MSG_EXTERNAL_6666140069588099806$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_15 = goog.getMsg("Subsidy + fees");
          i18n_15 = MSG_EXTERNAL_6666140069588099806$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_15;
        } else {
          i18n_15 = "\u0643\u0641\u0627\u0644\u0629 + \u0631\u0633\u0648\u0645";
        }
        let i18n_16;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Total fees in a block
           * @meaning block.total-fees
           */
          const MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_16 = goog.getMsg("Total fees");
          i18n_16 = MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_16;
        } else {
          i18n_16 = "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0643\u0644\u064A\u0629";
        }
        let i18n_17;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Total subsidy and fees in a block
           * @meaning block.subsidy-and-fees
           */
          const MSG_EXTERNAL_6666140069588099806$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_17 = goog.getMsg("Subsidy + fees");
          i18n_17 = MSG_EXTERNAL_6666140069588099806$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_17;
        } else {
          i18n_17 = "\u0643\u0641\u0627\u0644\u0629 + \u0631\u0633\u0648\u0645";
        }
        let i18n_18;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.miner
           */
          const MSG_EXTERNAL_5829059035985468594$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_18 = goog.getMsg("Miner");
          i18n_18 = MSG_EXTERNAL_5829059035985468594$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_18;
        } else {
          i18n_18 = "\u0627\u0644\u0645\u0639\u062F\u0646";
        }
        let i18n_19;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.expected
           */
          const MSG_EXTERNAL_7989584202803202902$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_19 = goog.getMsg("Expected");
          i18n_19 = MSG_EXTERNAL_7989584202803202902$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_19;
        } else {
          i18n_19 = "\u0645\u062A\u0648\u0642\u0639 ";
        }
        let i18n_20;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.actual
           */
          const MSG_EXTERNAL_2628961601867476622$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_20 = goog.getMsg("Actual");
          i18n_20 = MSG_EXTERNAL_2628961601867476622$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_20;
        } else {
          i18n_20 = "\u0641\u0639\u0644\u064A";
        }
        let i18n_21;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.expected-block
           */
          const MSG_EXTERNAL_3079792765469479718$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_21 = goog.getMsg("Expected Block");
          i18n_21 = MSG_EXTERNAL_3079792765469479718$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_21;
        } else {
          i18n_21 = "\u0627\u0644\u0643\u062A\u0644\u0647 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0647";
        }
        let i18n_22;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.actual-block
           */
          const MSG_EXTERNAL_3320061433231160997$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_22 = goog.getMsg("Actual Block");
          i18n_22 = MSG_EXTERNAL_3320061433231160997$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_22;
        } else {
          i18n_22 = "\u0627\u0644\u0643\u062A\u0644\u0647 \u0627\u0644\u062D\u0627\u0644\u064A\u0647";
        }
        let i18n_23;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc transaction.version
           */
          const MSG_EXTERNAL_2724055831234181057$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_23 = goog.getMsg("Version");
          i18n_23 = MSG_EXTERNAL_2724055831234181057$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_23;
        } else {
          i18n_23 = "\u0627\u0644\u0627\u0635\u062F\u0627\u0631";
        }
        let i18n_24;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.merkle-root
           */
          const MSG_EXTERNAL_3084367762111593354$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_24 = goog.getMsg("Merkle root");
          i18n_24 = MSG_EXTERNAL_3084367762111593354$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_24;
        } else {
          i18n_24 = "Merkle root";
        }
        let i18n_25;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Transaction Details
           * @meaning transaction.details
           */
          const MSG_EXTERNAL_283587625204414083$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_25 = goog.getMsg("Details");
          i18n_25 = MSG_EXTERNAL_283587625204414083$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_25;
        } else {
          i18n_25 = "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644";
        }
        let i18n_26;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Taproot
           * @meaning tx-features.tag.taproot
           */
          const MSG_EXTERNAL_6673708656198750080$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_26 = goog.getMsg("Taproot");
          i18n_26 = MSG_EXTERNAL_6673708656198750080$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_26;
        } else {
          i18n_26 = "Taproot";
        }
        let i18n_27;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.bits
           */
          const MSG_EXTERNAL_945376464060430485$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_27 = goog.getMsg("Bits");
          i18n_27 = MSG_EXTERNAL_945376464060430485$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_27;
        } else {
          i18n_27 = "\u0648\u062D\u062F\u0627\u062A \u0635\u063A\u064A\u0631\u0629.";
        }
        let i18n_28;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.difficulty
           */
          const MSG_EXTERNAL_1063462873103909661$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_28 = goog.getMsg("Difficulty");
          i18n_28 = MSG_EXTERNAL_1063462873103909661$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_28;
        } else {
          i18n_28 = "\u0627\u0644\u0635\u0639\u0648\u0628\u0647";
        }
        let i18n_29;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.nonce
           */
          const MSG_EXTERNAL_4513869814948231749$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_29 = goog.getMsg("Nonce");
          i18n_29 = MSG_EXTERNAL_4513869814948231749$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_29;
        } else {
          i18n_29 = "\u0631\u0645\u0632 \u0623\u062D\u0627\u062F\u064A \u0641\u0631\u062F\u064A \u0627\u0644\u0625\u0633\u062A\u062E\u062F\u0627\u0645.";
        }
        let i18n_30;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.header
           */
          const MSG_EXTERNAL_6558868518949093648$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_30 = goog.getMsg("Block Header Hex");
          i18n_30 = MSG_EXTERNAL_6558868518949093648$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_30;
        } else {
          i18n_30 = "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u062A\u0644\u0629 \u0627\u0644\u0633\u062A \u0639\u0634\u0631\u064A";
        }
        let i18n_31;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Toggle Audit
           * @meaning block.toggle-audit
           */
          const MSG_EXTERNAL_8856591276184789424$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_31 = goog.getMsg("Audit");
          i18n_31 = MSG_EXTERNAL_8856591276184789424$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_31;
        } else {
          i18n_31 = "\u0645\u0631\u0627\u062C\u0639\u0629";
        }
        let i18n_32;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.transaction-count.singular
           */
          const MSG_EXTERNAL_5691509156839267286$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_32 = goog.getMsg("{$interpolation} transaction", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i }}"
            }
          });
          i18n_32 = MSG_EXTERNAL_5691509156839267286$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_32;
        } else {
          i18n_32 = "\u0645\u0639\u0627\u0645\u0644\u0629 " + "\uFFFD0\uFFFD" + "";
        }
        let i18n_33;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc shared.transaction-count.plural
           */
          const MSG_EXTERNAL_6372919304279023858$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_33 = goog.getMsg("{$interpolation} transactions", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i }}"
            }
          });
          i18n_33 = MSG_EXTERNAL_6372919304279023858$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_33;
        } else {
          i18n_33 = "" + "\uFFFD0\uFFFD" + " \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A";
        }
        let i18n_34;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.error.loading-block-data
           */
          const MSG_EXTERNAL_9086644539236239452$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_34 = goog.getMsg("Error loading block data.");
          i18n_34 = MSG_EXTERNAL_9086644539236239452$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_34;
        } else {
          i18n_34 = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0643\u062A\u0644\u0629.";
        }
        let i18n_35;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.empty-block-explanation
           */
          const MSG_EXTERNAL_7846680274942493960$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_35 = goog.getMsg("Why is this block empty?");
          i18n_35 = MSG_EXTERNAL_7846680274942493960$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_35;
        } else {
          i18n_35 = "\u0644\u0645\u0627\u0630\u0627 \u0627\u0644\u0643\u062A\u0644\u0629 \u0641\u0627\u0631\u063A\u0629\u061F";
        }
        let i18n_36;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Total fees in a block
           * @meaning block.total-fees
           */
          const MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_36 = goog.getMsg("Total fees");
          i18n_36 = MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_36;
        } else {
          i18n_36 = "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0643\u0644\u064A\u0629";
        }
        let i18n_37;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.weight
           */
          const MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_37 = goog.getMsg("Weight");
          i18n_37 = MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_37;
        } else {
          i18n_37 = "\u0627\u0644\u0648\u0632\u0646";
        }
        let i18n_38;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mempool-block.transactions
           */
          const MSG_EXTERNAL_2611475427610660053$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_38 = goog.getMsg("Transactions");
          i18n_38 = MSG_EXTERNAL_2611475427610660053$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_38;
        } else {
          i18n_38 = "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A";
        }
        let i18n_39;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Acceleration Fees
           */
          const MSG_EXTERNAL_4260518246712568182$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_39 = goog.getMsg("Acceleration fees paid out-of-band");
          i18n_39 = MSG_EXTERNAL_4260518246712568182$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_39;
        } else {
          i18n_39 = "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0633\u0631\u064A\u0639 \u0645\u062F\u0641\u0648\u0639\u0629 \u062E\u0627\u0631\u062C \u0627\u0644\u0646\u0637\u0627\u0642";
        }
        let i18n_40;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Total fees in a block
           * @meaning block.total-fees
           */
          const MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_40 = goog.getMsg("Total fees");
          i18n_40 = MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_40;
        } else {
          i18n_40 = "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0643\u0644\u064A\u0629";
        }
        let i18n_41;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.weight
           */
          const MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_41 = goog.getMsg("Weight");
          i18n_41 = MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_41;
        } else {
          i18n_41 = "\u0627\u0644\u0648\u0632\u0646";
        }
        let i18n_42;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mempool-block.transactions
           */
          const MSG_EXTERNAL_2611475427610660053$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_42 = goog.getMsg("Transactions");
          i18n_42 = MSG_EXTERNAL_2611475427610660053$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_42;
        } else {
          i18n_42 = "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A";
        }
        let i18n_43;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc Total fees in a block
           * @meaning block.total-fees
           */
          const MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_43 = goog.getMsg("Total fees");
          i18n_43 = MSG_EXTERNAL_8197600042878175654$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_43;
        } else {
          i18n_43 = "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0643\u0644\u064A\u0629";
        }
        let i18n_44;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc block.weight
           */
          const MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_44 = goog.getMsg("Weight");
          i18n_44 = MSG_EXTERNAL_5848348023107769657$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_44;
        } else {
          i18n_44 = "\u0627\u0644\u0648\u0632\u0646";
        }
        let i18n_45;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mempool-block.transactions
           */
          const MSG_EXTERNAL_2611475427610660053$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_45 = goog.getMsg("Transactions");
          i18n_45 = MSG_EXTERNAL_2611475427610660053$$SRC_APP_COMPONENTS_BLOCK_BLOCK_COMPONENT_TS_45;
        } else {
          i18n_45 = "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A";
        }
        return [["genesis", ""], ["restOfTable", ""], ["emptyBlockInfo", ""], ["expectedDetails", ""], ["actualDetails", ""], ["loadingDetailsSkeletons", ""], ["skeletonRows", ""], ["nullHealth", ""], ["loadingHealth", ""], ["blockGraphActual", ""], ["loadingRest", ""], ["loadingFees", ""], ["liquidTotalFees", ""], ["blockGraphProjected", ""], ["transactionsSingular", ""], ["transactionsPlural", ""], i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_17, i18n_18, i18n_19, i18n_20, i18n_21, i18n_22, i18n_23, i18n_24, i18n_25, i18n_26, i18n_27, i18n_28, i18n_29, i18n_30, i18n_31, i18n_32, i18n_33, i18n_34, i18n_35, i18n_36, i18n_37, i18n_38, i18n_40, i18n_41, i18n_42, i18n_43, i18n_44, i18n_45, [1, "container-xl", 3, "resize"], ["id", "block", 1, "title-block"], ["class", "alert alert-mempool", "role", "alert", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "next-previous-blocks"], ["class", "nav-arrow next", "ngbTooltip", i18n_0, "placement", "bottom", 3, "routerLink", "click", 4, "ngIf"], ["placement", "bottom", "class", "disable nav-arrow next", 4, "ngIf"], [1, "block-link", 3, "routerLink"], ["class", "nav-arrow prev", "ngbTooltip", i18n_1, "placement", "bottom", 3, "routerLink", "click", 4, "ngIf"], ["placement", "bottom", "class", "disable nav-arrow prev", 4, "ngIf"], [1, "grow"], ["type", "button", "class", "btn btn-sm btn-danger container-button", 4, "ngIf"], [1, "btn", "btn-sm", 3, "routerLink"], [1, "clearfix"], ["class", "box", 4, "ngIf"], [4, "ngIf"], [3, "ngIf"], ["role", "alert", 1, "alert", "alert-mempool"], [1, "alert-text"], [3, "text", "lastChars", "link", "maxWidth"], ["ngbTooltip", i18n_0, "placement", "bottom", 1, "nav-arrow", "next", 3, "click", "routerLink"], [3, "icon", "fixedWidth"], ["placement", "bottom", 1, "disable", "nav-arrow", "next"], ["ngbTooltip", i18n_1, "placement", "bottom", 1, "nav-arrow", "prev", 3, "click", "routerLink"], ["placement", "bottom", 1, "disable", "nav-arrow", "prev"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "container-button"], [1, "box"], [1, "row"], [1, "col-sm"], [1, "table", "table-borderless", "table-striped"], [4, "ngIf", "ngIfThen"], ["class", "table table-borderless table-striped", 4, "ngIf"], ["class", "col-sm chart-container", 4, "ngIf"], [1, "td-width"], [3, "routerLink", "title"], [3, "text"], ["minUnit", "minute", 3, "customFormat", "unixTime", "precision"], [3, "innerHTML"], ["fragment", "what-is-block-health", 1, "info-link", 3, "routerLink"], ["class", "health-badge badge", 3, "badge-success", "badge-warning", "badge-danger", 4, "ngIf", "ngIfElse"], [1, "health-badge", "badge"], [1, "health-badge", "badge", "badge-secondary"], [1, "skeleton-loader", 2, "max-width", "60px"], ["colspan", "2", 1, "td-width"], [1, "skeleton-loader"], ["colspan", "2"], [4, "ngTemplateOutlet"], [1, "col-sm", "chart-container"], [3, "txClickEvent", "isLoading", "resolution", "blockLimit", "orientation", "flip", "blockConversion", "showFilters", "excludeFilters", "relativeTime"], [3, "ngIf", "ngIfElse"], [3, "fee", "showUnit"], [3, "fee"], ["rounding", "1.0-0", 3, "fee"], [1, "fiat"], ["digitsInfo", "1.2-3", 3, "satoshis", "noFiat"], ["digitsInfo", "1.0-0", 3, "blockConversion", "value"], ["digitsInfo", "1.2-2", 3, "satoshis", "noFiat"], ["digitsInfo", "1.2-2", 3, "blockConversion", "value"], [2, "width", "75%"], ["placement", "bottom", 1, "badge", 2, "color", "#FFF", "padding", "0", 3, "routerLink"], ["class", "miner-name", 4, "ngIf"], ["onError", "this.src = '/resources/mining-pools/default.svg'", 1, "pool-logo", 3, "src", "alt"], [1, "miner-name"], ["placement", "bottom", 1, "badge"], ["id", "overview"], ["class", "nav nav-tabs", 4, "ngIf"], [1, "col-sm", "audit-col"], ["class", "block-subtitle", 4, "ngIf"], [1, "block-graph-wrapper"], [3, "txClickEvent", "txHoverEvent", "isLoading", "resolution", "blockLimit", "orientation", "flip", "mirrorTxid", "auditHighlighting", "unavailable", "showFilters", "excludeFilters", "relativeTime"], ["class", "col-sm audit-col", 4, "ngIf"], [1, "nav", "nav-tabs"], ["fragment", "projected", 1, "nav-link", 3, "click"], ["fragment", "actual", 1, "nav-link", 3, "click"], [1, "block-subtitle"], ["class", "block-subtitle actual", 4, "ngIf"], ["mode", "mined", 3, "txClickEvent", "txHoverEvent", "isLoading", "resolution", "blockLimit", "orientation", "flip", "mirrorTxid", "auditHighlighting", "unavailable", "showFilters", "excludeFilters", "relativeTime"], [1, "block-subtitle", "actual"], ["fragment", "how-do-block-audits-work", 1, "info-link", 3, "routerLink"], ["id", "details", 3, "hidden"], ["class", "badge badge-success ml-1", 4, "ngIf"], [1, "break-all"], ["class", "col-sm", 4, "ngIf"], [1, "text-right", "mt-3", "toggle-btns"], ["type", "button", "class", "btn btn-outline-info btn-sm btn-audit", 3, "active", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-info", "btn-sm", "btn-details", 3, "click"], [1, "badge", "badge-success", "ml-1"], ["target", "_blank", 3, "href"], ["type", "button", 1, "btn", "btn-outline-info", "btn-sm", "btn-audit", 3, "click"], [3, "blockReward", "paginationMaxSize", "block$", "txCount", "timestamp", "blockHash", "previousBlockHash"], [1, "block-tx-title"], [1, "text-left"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-container", "float-right", 3, "disabled", "collectionSize", "rotate", "pageSize", "maxSize", "boundaryLinks", "ellipses"], [1, "tx-skeleton"], [1, "header-bg", "box"], [3, "error"], ["class", "info-bubble-link badge badge-primary", "fragment", "why-empty-blocks", 3, "routerLink", 4, "ngIf"], ["fragment", "why-empty-blocks", 1, "info-bubble-link", "badge", "badge-primary", 3, "routerLink"], ["class", "table table-borderless table-striped audit-details-table", 4, "ngIf"], [1, "table", "table-borderless", "table-striped", "audit-details-table"], [1, "text-wrap"], ["class", "oobFees", "ngbTooltip", i18n_39, 4, "ngIf"], ["class", "difference", 3, "positive", "negative", 4, "ngIf"], ["ngbTooltip", i18n_39, 1, "oobFees"], ["digitsInfo", "1.8-8", 3, "satoshis", "noFiat", "addPlus"], [1, "difference"], [1, "w-50"]];
      },
      template: function BlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("resize", function BlockComponent_Template_div_resize_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx.onResize($event));
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresolveWindow"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, BlockComponent_div_2_Template, 5, 9, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, BlockComponent_ng_container_4_Template, 2, 0, "ng-container", 62)(5, BlockComponent_ng_template_5_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "span", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, BlockComponent_a_8_Template, 3, 9, "a", 64)(9, BlockComponent_span_9_Template, 2, 3, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "a", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](11, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](13, BlockComponent_a_13_Template, 3, 9, "a", 67)(14, BlockComponent_span_14_Template, 2, 3, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](15, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](16, BlockComponent_button_16_Template, 2, 0, "button", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](17, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](18, "relativeUrl");
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](19, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](20, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](21, BlockComponent_div_21_Template, 12, 8, "div", 73)(22, BlockComponent_ng_template_22_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(24, BlockComponent_ng_container_24_Template, 3, 0, "ng-container", 74)(25, BlockComponent_div_25_Template, 11, 20, "div", 73)(26, BlockComponent_ng_template_26_Template, 32, 11, "ng-template", 75)(27, BlockComponent_ng_template_27_Template, 3, 1, "ng-template", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](28, BlockComponent_ng_template_28_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(30, BlockComponent_ng_template_30_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(32, BlockComponent_ng_template_32_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"])(34, BlockComponent_ng_template_34_Template, 17, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](36, "br")(37, "br");
        }
        if (rf & 2) {
          const genesis_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("time-ltr", ctx.timeLtr);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.block == null ? null : ctx.block.stale);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.blockHeight == null || ctx.blockHeight > 0)("ngIfElse", genesis_r27);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.showNextBlocklink);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx.showNextBlocklink);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction2"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](11, 18, "/block/"), ctx.blockHash));
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx.blockHeight);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.showPreviousBlocklink && ctx.block);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx.showPreviousBlocklink || !ctx.block);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.block == null ? null : ctx.block.stale);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](25, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](18, 20, "/")));
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.showAudit);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx.error && ctx.webGlEnabled && ctx.showAudit);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.block && !ctx.isLoadingBlock && !ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbPagination, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FaIconComponent, _components_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_13__.ClipboardComponent, _app_fiat_fiat_component__WEBPACK_IMPORTED_MODULE_14__.FiatComponent, _components_amount_amount_component__WEBPACK_IMPORTED_MODULE_15__.AmountComponent, _components_block_overview_graph_block_overview_graph_component__WEBPACK_IMPORTED_MODULE_16__.BlockOverviewGraphComponent, _app_shared_components_fee_rate_fee_rate_component__WEBPACK_IMPORTED_MODULE_17__.FeeRateComponent, _app_shared_components_truncate_truncate_component__WEBPACK_IMPORTED_MODULE_18__.TruncateComponent, _app_shared_components_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_19__.TimestampComponent, _app_shared_components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_20__.HttpErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.DecimalPipe, _app_shared_pipes_relative_url_relative_url_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeUrlPipe, _app_shared_pipes_bytes_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_21__.BytesPipe, _app_shared_pipes_bytes_pipe_wubytes_pipe__WEBPACK_IMPORTED_MODULE_22__.WuBytesPipe, _app_shared_pipes_shorten_string_pipe_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_23__.ShortenStringPipe, _app_shared_pipes_decimal2hex_decimal2hex_pipe__WEBPACK_IMPORTED_MODULE_24__.Decimal2HexPipe, _app_shared_pipes_amount_shortener_pipe__WEBPACK_IMPORTED_MODULE_25__.AmountShortenerPipe],
      styles: [".title-block[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  align-items: baseline;\n}\n@media (min-width: 650px) {\n  .title-block[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.title-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0rem;\n  margin-right: 15px;\n  line-height: 1;\n}\n.title-block[_ngcontent-%COMP%]   .alert-mempool[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.title-block[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-right: 1em;\n}\n\n.fiat[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n}\n@media (min-width: 768px) {\n  .fiat[_ngcontent-%COMP%] {\n    font-size: 14px;\n    display: inline-block;\n    margin-left: 10px;\n  }\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n@media (min-width: 768px) {\n  .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    text-align: left;\n  }\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .difference[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .difference.positive[_ngcontent-%COMP%] {\n  color: rgb(66, 183, 71);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .difference.negative[_ngcontent-%COMP%] {\n  color: rgb(183, 66, 66);\n}\n\n.audit-col[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.audit-col.mobile[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.block-subtitle.actual[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n}\n\n.block-subtitle.actual[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 18px;\n  margin-left: 8px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  line-height: 1;\n}\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.miner-name[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  vertical-align: top;\n}\n\n.pool-logo[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  position: relative;\n  top: -1px;\n  margin-right: 2px;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n@media (min-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .mobile-bottomcol[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    white-space: pre-wrap;\n  }\n}\n.toggle-btns[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  top: 7px;\n}\n@media (min-width: 550px) {\n  .toggle-btns[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n}\n\n.btn-audit[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n\n.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.next-previous-blocks[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: inline-flex;\n  flex-direction: row;\n}\n@media (min-width: 768px) {\n  .next-previous-blocks[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n.next-previous-blocks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .next-previous-blocks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  display: inline-block;\n}\n\n.time-ltr[_ngcontent-%COMP%]   .next-previous-blocks[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.time-ltr[_ngcontent-%COMP%]   .next-previous-blocks[_ngcontent-%COMP%]   .nav-arrow.next[_ngcontent-%COMP%] {\n  order: 2;\n}\n.time-ltr[_ngcontent-%COMP%]   .next-previous-blocks[_ngcontent-%COMP%]   .block-link[_ngcontent-%COMP%] {\n  order: 1;\n}\n.time-ltr[_ngcontent-%COMP%]   .next-previous-blocks[_ngcontent-%COMP%]   .nav-arrow.prev[_ngcontent-%COMP%] {\n  order: 0;\n}\n\n.disable[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: rgba(57, 62, 92, 0.4509803922);\n}\n@media (min-width: 768px) {\n  .disable[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  margin: 20px auto;\n}\n@media (min-width: 768px) {\n  .chart-container[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .menu-button[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n}\n\n.block-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  border-color: white;\n  border-width: 1px;\n  margin-bottom: 1em;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background: inherit;\n  border-width: 1px;\n  border-bottom: none;\n  border-color: transparent;\n  margin-bottom: -1px;\n  cursor: pointer;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: var(--box-bg);\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  border-color: white;\n}\n\n.block-graph-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.info-bubble-link[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 2em;\n  left: 50%;\n  margin: auto;\n  text-align: center;\n  padding: 0.5em 1em;\n  font-size: 80%;\n  transform: translateX(-50%);\n}\n.info-bubble-link[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n\n.beta[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 5p;\n  padding: 5p;\n  position: absolute;\n  top: 11px;\n  margin-left: 10px;\n}\n\n.audit-details-table[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n@media (max-width: 767.98px) {\n  .audit-details-table[_ngcontent-%COMP%] {\n    margin-top: 0.75rem;\n  }\n}\n.audit-details-table[_ngcontent-%COMP%]   .oobFees[_ngcontent-%COMP%] {\n  color: #905cf4;\n}\n\n.graph-col[_ngcontent-%COMP%] {\n  flex-grow: 1.11;\n}\n\n.block-tx-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-top: -15px;\n  position: relative;\n}\n@media (min-width: 550px) {\n  .block-tx-title[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    flex-direction: row;\n  }\n}\n.block-tx-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin: 0;\n  position: relative;\n  padding-bottom: 10px;\n}\n@media (min-width: 550px) {\n  .block-tx-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n    align-self: end;\n  }\n}\n\n.tx-skeleton[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.tx-skeleton[_ngcontent-%COMP%]   .header-bg[_ngcontent-%COMP%]:first-child {\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.tx-skeleton[_ngcontent-%COMP%]   .header-bg[_ngcontent-%COMP%]:nth-child(2)   .row[_ngcontent-%COMP%] {\n  height: 107px;\n}\n\n.pool-logo[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  position: relative;\n  top: -1px;\n  margin-right: 2px;\n}", ".loadingGraphs[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 15px);\n      z-index: 100;\n    }"]
    });
  }
  return BlockComponent;
})();

/***/ }),

/***/ 95857:
/*!**************************************************!*\
  !*** ./src/app/components/block/block.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockModule: () => (/* binding */ BlockModule),
/* harmony export */   BlockRoutingModule: () => (/* binding */ BlockRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _components_block_block_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/block/block.component */ 16990);
/* harmony import */ var _components_block_block_transactions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/block/block-transactions.component */ 23172);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ 26800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39962);







const routes = [{
  path: ':id',
  component: _components_block_block_component__WEBPACK_IMPORTED_MODULE_0__.BlockComponent,
  data: {
    ogImage: true
  }
}];
let BlockRoutingModule = /*#__PURE__*/(() => {
  class BlockRoutingModule {
    static #_ = this.ɵfac = function BlockRoutingModule_Factory(t) {
      return new (t || BlockRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: BlockRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
  return BlockRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlockRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();
let BlockModule = /*#__PURE__*/(() => {
  class BlockModule {
    static #_ = this.ɵfac = function BlockModule_Factory(t) {
      return new (t || BlockModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: BlockModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, BlockRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return BlockModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlockModule, {
    declarations: [_components_block_block_component__WEBPACK_IMPORTED_MODULE_0__.BlockComponent, _components_block_block_transactions_component__WEBPACK_IMPORTED_MODULE_1__.BlockTransactionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, BlockRoutingModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

};
;
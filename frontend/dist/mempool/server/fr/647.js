"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 71647:
/*!***************************************************!*\
  !*** ./src/app/graphs/lightning-graphs.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightningGraphsModule: () => (/* binding */ LightningGraphsModule),
/* harmony export */   LightningGraphsRoutingModule: () => (/* binding */ LightningGraphsRoutingModule)
/* harmony export */ });
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ 26800);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 18134);
/* harmony import */ var _app_lightning_nodes_networks_chart_nodes_networks_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lightning/nodes-networks-chart/nodes-networks-chart.component */ 38798);
/* harmony import */ var _app_lightning_statistics_chart_lightning_statistics_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lightning/statistics-chart/lightning-statistics-chart.component */ 48575);
/* harmony import */ var _app_lightning_nodes_per_isp_chart_nodes_per_isp_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/lightning/nodes-per-isp-chart/nodes-per-isp-chart.component */ 12800);
/* harmony import */ var _app_lightning_nodes_per_country_chart_nodes_per_country_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/lightning/nodes-per-country-chart/nodes-per-country-chart.component */ 53480);
/* harmony import */ var _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/lightning/nodes-map/nodes-map.component */ 48296);
/* harmony import */ var _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/lightning/nodes-channels-map/nodes-channels-map.component */ 96984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39962);











const routes = [{
  path: 'nodes-networks',
  data: {
    networks: ['bitcoin']
  },
  component: _app_lightning_nodes_networks_chart_nodes_networks_chart_component__WEBPACK_IMPORTED_MODULE_1__.NodesNetworksChartComponent
}, {
  path: 'capacity',
  data: {
    networks: ['bitcoin']
  },
  component: _app_lightning_statistics_chart_lightning_statistics_chart_component__WEBPACK_IMPORTED_MODULE_2__.LightningStatisticsChartComponent
}, {
  path: 'nodes-per-isp',
  data: {
    networks: ['bitcoin']
  },
  component: _app_lightning_nodes_per_isp_chart_nodes_per_isp_chart_component__WEBPACK_IMPORTED_MODULE_3__.NodesPerISPChartComponent
}, {
  path: 'nodes-per-country',
  data: {
    networks: ['bitcoin']
  },
  component: _app_lightning_nodes_per_country_chart_nodes_per_country_chart_component__WEBPACK_IMPORTED_MODULE_4__.NodesPerCountryChartComponent
}, {
  path: 'nodes-map',
  data: {
    networks: ['bitcoin']
  },
  component: _app_lightning_nodes_map_nodes_map_component__WEBPACK_IMPORTED_MODULE_5__.NodesMap
}, {
  path: 'nodes-channels-map',
  data: {
    networks: ['bitcoin']
  },
  component: _app_lightning_nodes_channels_map_nodes_channels_map_component__WEBPACK_IMPORTED_MODULE_6__.NodesChannelsMap
}];
let LightningGraphsRoutingModule = /*#__PURE__*/(() => {
  class LightningGraphsRoutingModule {
    static #_ = this.ɵfac = function LightningGraphsRoutingModule_Factory(t) {
      return new (t || LightningGraphsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: LightningGraphsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    });
  }
  return LightningGraphsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LightningGraphsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();
let LightningGraphsModule = /*#__PURE__*/(() => {
  class LightningGraphsModule {
    static #_ = this.ɵfac = function LightningGraphsModule_Factory(t) {
      return new (t || LightningGraphsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: LightningGraphsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, LightningGraphsRoutingModule]
    });
  }
  return LightningGraphsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LightningGraphsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, LightningGraphsRoutingModule]
  });
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
        this.seoService.setTitle("Carte du monde des canaux Lightning");
        this.seoService.setDescription("Visualisez les canaux des n\u0153uds du r\xE9seau non Tor Lightning visualis\xE9s sur une carte du monde. Passez la souris/appuyez sur des points sur la carte pour conna\xEEtre les noms et les d\xE9tails des n\u0153uds.");
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
            text: "Aucune donn\xE9e \xE0 afficher pour le moment. R\xE9essayez plus tard.",
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
            text: "Aucune donn\xE9e de g\xE9olocalisation disponible",
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
              ${liquidity}<br>` + "" + data[6] + " canaux" + `<br>
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
          i18n_0 = "Carte du monde des canaux Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_CHANNELS_MAP_NODES_CHANNELS_MAP_COMPONENT_TS_1 = goog.getMsg("(Tor nodes excluded)");
          i18n_1 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_CHANNELS_MAP_NODES_CHANNELS_MAP_COMPONENT_TS_1;
        } else {
          i18n_1 = "(N\u0153uds Tor exclus)";
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
        this.seoService.setTitle("Carte du monde des n\u0153uds Lightning");
        this.seoService.setDescription("Consultez les emplacements des n\u0153uds du r\xE9seau non Tor Lightning visualis\xE9s sur une carte du monde. Passez la souris/appuyez sur des points sur la carte pour conna\xEEtre les noms et les d\xE9tails des n\u0153uds.");
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
          text: "Aucune donn\xE9e \xE0 afficher pour le moment. R\xE9essayez plus tard.",
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
                ${liquidity}<br>` + "" + data[5] + " canaux" + `<br>
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
          i18n_0 = "Carte du monde des n\u0153uds Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_MAP_NODES_MAP_COMPONENT_TS_1 = goog.getMsg("(Tor nodes excluded)");
          i18n_1 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_MAP_NODES_MAP_COMPONENT_TS_1;
        } else {
          i18n_1 = "(N\u0153uds Tor exclus)";
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
        this.seoService.setTitle("N\u0153uds Lightning par r\xE9seau");
        this.seoService.setDescription("Consultez le nombre de n\u0153uds de r\xE9seau Lightning visualis\xE9s au fil du temps par r\xE9seau\xA0: clearnet uniquement (IPv4, IPv6), darknet (Tor, I2p, cjdns) et les deux.");
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
          text: "Indexation en cours",
          left: 'center',
          top: 'center'
        };
      } else if (this.widget && data.tor_nodes.length > 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 11
          },
          text: "N\u0153uds Lightning par r\xE9seau",
          left: 'center',
          top: 0,
          zlevel: 10
        };
      }
      const series = [{
        zlevel: 1,
        yAxisIndex: 0,
        name: "Inconnue",
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
        name: "Clearnet et Darknet",
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
        name: "Clearnet seulement (IPv4, IPv6)",
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
        name: "Darknet seulement (Tor, I2P, cjdns)",
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
            name: "Darknet seulement (Tor, I2P, cjdns)",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Clearnet seulement (IPv4, IPv6)",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Clearnet et Darknet",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Inconnue",
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
          i18n_0 = "N\u0153uds Lightning par r\xE9seau";
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
      this.seoService.setTitle("N\u0153uds Lightning par pays");
      this.seoService.setDescription("Consultez une r\xE9partition g\xE9ographique du r\xE9seau Lightning\xA0: combien de n\u0153uds Lightning sont h\xE9berg\xE9s dans les pays du monde, capacit\xE9 BTC globale pour chaque pays, et plus encore.");
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
              return `<b style="color: white">${country.name.en} (${country.share}%)</b><br>` + "" + nodeCount + " n\u0153uds" + `<br>` + "Capacit\xE9 de " + this.amountShortenerPipe.transform(country.capacity / 100000000, 2) + " BTC";
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
        name: "Autre (" + (totalShareOther.toFixed(2) + '%') + ")",
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
            return `<b style="color: white">` + "Autre (" + (totalShareOther.toFixed(2) + '%') + ")" + `</b><br>` + "" + nodeCount + " n\u0153uds";
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
          i18n_0 = "N\u0153uds Lightning par pays";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_1 = goog.getMsg("(Tor nodes excluded)");
          i18n_1 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_1;
        } else {
          i18n_1 = "(N\u0153uds Tor exclus)";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.rank
           */
          const MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_2 = goog.getMsg("Rank");
          i18n_2 = MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_2;
        } else {
          i18n_2 = "Rang";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.as-name
           */
          const MSG_EXTERNAL_8953033926734869941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_3 = goog.getMsg("Name");
          i18n_3 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_3;
        } else {
          i18n_3 = "Nom";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.share
           */
          const MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_4 = goog.getMsg("Share");
          i18n_4 = MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_4;
        } else {
          i18n_4 = "Part";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_5 = goog.getMsg("Nodes");
          i18n_5 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_5;
        } else {
          i18n_5 = "N\u0153uds";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_6 = goog.getMsg("Capacity");
          i18n_6 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_COUNTRY_CHART_NODES_PER_COUNTRY_CHART_COMPONENT_TS_6;
        } else {
          i18n_6 = "Capacit\xE9";
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
        this.seoService.setTitle("N\u0153uds Lightning par FAI");
        this.seoService.setDescription("Parcourez les 100 principaux FAI h\xE9bergeant des n\u0153uds Lightning ainsi que des statistiques telles que le nombre total de n\u0153uds par FAI, la capacit\xE9 BTC globale par FAI, et bien plus encore.");
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
              return `<b style="color: white">${isp[1]} (${this.sortBy === 'capacity' ? isp[7] : isp[6]}%)</b><br>` + "" + nodeCount + " n\u0153uds" + `<br>` + " " + this.amountShortenerPipe.transform(isp[2] / 100000000, 2) + " BTC";
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
        name: "Autre (" + (totalShareOther.toFixed(2) + '%') + ")",
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
            return `<b style="color: white">` + "Autre (" + (totalShareOther.toFixed(2) + '%') + ")" + `</b><br>` + "" + nodeCount + " n\u0153uds" + `<br>` + " " + this.amountShortenerPipe.transform(capacityOther / 100000000, 2) + " BTC";
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
          i18n_0 = "Liquidit\xE9 qui circule sur les n\u0153uds annon\xE7ant au moins une adresse IP clearnet";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.unknown-capacity-desc
           */
          const MSG_EXTERNAL_3628210247533431778$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_1 = goog.getMsg("How much liquidity is running on nodes which ISP was not identifiable");
          i18n_1 = MSG_EXTERNAL_3628210247533431778$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_1;
        } else {
          i18n_1 = "Liquidit\xE9 qui circule sur les n\u0153uds dont le FAI n'\xE9tait pas identifiable";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-capacity-desc
           */
          const MSG_EXTERNAL_7908336338297306934$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_2 = goog.getMsg("How much liquidity is running on nodes advertising only Tor addresses");
          i18n_2 = MSG_EXTERNAL_7908336338297306934$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_2;
        } else {
          i18n_2 = "Liquidit\xE9 qui circule sur les n\u0153uds annon\xE7ant uniquement les adresses Tor";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.clearnet-capacity
           */
          const MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_3 = goog.getMsg("Clearnet Capacity");
          i18n_3 = MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_3;
        } else {
          i18n_3 = "Capacit\xE9 Clearnet";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.unknown-capacity
           */
          const MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_4 = goog.getMsg("Unknown Capacity");
          i18n_4 = MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_4;
        } else {
          i18n_4 = "Capacit\xE9 inconnue";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-capacity
           */
          const MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_5 = goog.getMsg("Tor Capacity");
          i18n_5 = MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_5;
        } else {
          i18n_5 = "Capacit\xE9 Tor";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.top-100-isp-ln
           */
          const MSG_EXTERNAL_4223190098988681304$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_6 = goog.getMsg("Top 100 ISPs hosting LN nodes");
          i18n_6 = MSG_EXTERNAL_4223190098988681304$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_6;
        } else {
          i18n_6 = "Top 100 des FAI h\xE9bergeant des n\u0153uds LN";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-nodes-excluded
           */
          const MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_7 = goog.getMsg("(Tor nodes excluded)");
          i18n_7 = MSG_EXTERNAL_6644359907685038919$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_7;
        } else {
          i18n_7 = "(N\u0153uds Tor exclus)";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc mining.rank
           */
          const MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_8 = goog.getMsg("Rank");
          i18n_8 = MSG_EXTERNAL_665219418211496660$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_8;
        } else {
          i18n_8 = "Rang";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.isp
           */
          const MSG_EXTERNAL_6534480732067499471$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_9 = goog.getMsg("ISP");
          i18n_9 = MSG_EXTERNAL_6534480732067499471$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_9;
        } else {
          i18n_9 = "FAI";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.share
           */
          const MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_10 = goog.getMsg("Share");
          i18n_10 = MSG_EXTERNAL_7419704019640008953$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_10;
        } else {
          i18n_10 = "Part";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.nodes-count
           */
          const MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_11 = goog.getMsg("Nodes");
          i18n_11 = MSG_EXTERNAL_8773342478342887379$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_11;
        } else {
          i18n_11 = "N\u0153uds";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.capacity
           */
          const MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_12 = goog.getMsg("Capacity");
          i18n_12 = MSG_EXTERNAL_7825570888384392250$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_12;
        } else {
          i18n_12 = "Capacit\xE9";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.clearnet-capacity
           */
          const MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_13 = goog.getMsg("Clearnet Capacity");
          i18n_13 = MSG_EXTERNAL_1595550644635689667$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_13;
        } else {
          i18n_13 = "Capacit\xE9 Clearnet";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.unknown-capacity
           */
          const MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_14 = goog.getMsg("Unknown Capacity");
          i18n_14 = MSG_EXTERNAL_4727178110076843293$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_14;
        } else {
          i18n_14 = "Capacit\xE9 inconnue";
        }
        let i18n_15;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.tor-capacity
           */
          const MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_15 = goog.getMsg("Tor Capacity");
          i18n_15 = MSG_EXTERNAL_8087853213586116114$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_15;
        } else {
          i18n_15 = "Capacit\xE9 Tor";
        }
        let i18n_16;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.indexing-in-progress
           */
          const MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_16 = goog.getMsg("Indexing in progress");
          i18n_16 = MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_NODES_PER_ISP_CHART_NODES_PER_ISP_CHART_COMPONENT_TS_16;
        } else {
          i18n_16 = "Indexation en cours";
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
        this.seoService.setTitle("Capacit\xE9 du r\xE9seau Lightning");
        this.seoService.setDescription("Visualisez la capacit\xE9 du r\xE9seau Lightning au fil du temps en termes de nombre de canaux ouverts et de capacit\xE9 totale de Bitcoin.");
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
          text: "Indexation en cours",
          left: 'center',
          top: 'center'
        };
      } else if (this.widget && data.channel_count.length > 0) {
        title = {
          textStyle: {
            color: 'grey',
            fontSize: 11
          },
          text: "Capacit\xE9 du r\xE9seau Lightning",
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
            name: "Canaux",
            inactiveColor: 'rgb(110, 112, 121)',
            textStyle: {
              color: 'white'
            },
            icon: 'roundRect'
          }, {
            name: "Capacit\xE9",
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
          name: "Canaux",
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
          name: "Capacit\xE9",
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
          i18n_0 = "Capacit\xE9 du r\xE9seau Lightning";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc lightning.indexing-in-progress
           */
          const MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_STATISTICS_CHART_LIGHTNING_STATISTICS_CHART_COMPONENT_TS_1 = goog.getMsg("Indexing in progress");
          i18n_1 = MSG_EXTERNAL_6391724349488018234$$SRC_APP_LIGHTNING_STATISTICS_CHART_LIGHTNING_STATISTICS_CHART_COMPONENT_TS_1;
        } else {
          i18n_1 = "Indexation en cours";
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
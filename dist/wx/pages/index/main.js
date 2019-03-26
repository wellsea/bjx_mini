require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(95);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_063fb0eb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(98);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-063fb0eb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_063fb0eb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-063fb0eb", Component.options)
  } else {
    hotAPI.reload("data-v-063fb0eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      domain: '',
      banner: [],
      invest: [],
      staticData: null
    };
  },

  methods: {
    getBanner: function getBanner() {
      var _this = this;

      this.$http.getBanner().then(function (res) {
        var data = res.resData;
        _this.domain = data.qiniuDomain;
        _this.banner = data.bannerList;
      });
    },
    getInvest: function getInvest() {
      var _this2 = this;

      this.$http.getInvest().then(function (res) {
        _this2.invest = res.resData;
      });
    },
    getStatic: function getStatic() {
      var _this3 = this;

      this.$http.getStatic().then(function (res) {
        var data = res.resData;
        _this3.staticData = data;
      });
    },
    getAll: function getAll() {
      this.getBanner();
      this.getInvest();
      this.getStatic();
    }
  },

  created: function created() {
    this.getAll();
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('swiper', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.banner.length > 0),
      expression: "banner.length > 0"
    }],
    attrs: {
      "indicator-color": "#f00",
      "indidator-dots": "",
      "autoplay": "",
      "circular": ""
    }
  }, _vm._l((_vm.banner), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      staticClass: "imgBox",
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      attrs: {
        "src": _vm.domain + item.imageUrl,
        "mode": "scaleToFill"
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "flex tac paddingVer-15"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('p', [_vm._v("累计出借金额(元)")]), _vm._v(" "), _c('b', {
    staticClass: "main-color"
  }, [_vm._v(_vm._s(_vm.staticData.sumInvestmentAmount))])], 1), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('p', [_vm._v("累计为用户赚取(元)")]), _vm._v(" "), _c('b', {
    staticClass: "main-color"
  }, [_vm._v(_vm._s(_vm.staticData.sumInterestAmount))])], 1), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('p', [_vm._v("总待收本息(元)")]), _vm._v(" "), _c('b', {
    staticClass: "main-color"
  }, [_vm._v(_vm._s(_vm.staticData.inRepaymentMoney))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "invest tac"
  }, _vm._l((_vm.invest), function(item, index) {
    return (index < 2) ? _c('div', {
      key: index,
      staticClass: "list"
    }, [_c('h1', {
      staticClass: "bdb"
    }, [_vm._v(_vm._s(item.categoryName ? item.categoryName : '精选标') + " -【" + _vm._s(item.name) + "】")]), _vm._v(" "), _c('div', [_c('p', {
      staticClass: "color-999"
    }, [_vm._v("历史年化收益")]), _vm._v(" "), _c('strong', {
      staticClass: "main-color"
    }, [_vm._v(_vm._s(item.rateYear) + "%")]), _vm._v(" "), _c('p', {
      staticClass: "main-color"
    }, [_vm._v(_vm._s(item.creditRatingName))]), _vm._v(" "), _c('div', {
      staticClass: "progress"
    }, [_c('progress', {
      attrs: {
        "percent": item.progressPercentage,
        "color": "#FF4C3E",
        "stroke-width": "12",
        "active": "",
        "border-radius": "20rpx"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "flex marginVer-15"
    }, [_c('div', {
      staticClass: "item"
    }, [_c('icon', {
      attrs: {
        "type": "waiting",
        "size": "26rpx",
        "color": "#FF4C3E"
      }
    }), _vm._v("\n            出借期限 " + _vm._s(item.timeLimit) + "月\n          ")], 1), _vm._v(" "), _c('div', {
      staticClass: "item"
    }, [_c('icon', {
      attrs: {
        "type": "waiting",
        "size": "26rpx",
        "color": "#FF4C3E"
      }
    }), _vm._v("\n            剩余金额 " + _vm._s(item.amountInvestable) + "元\n          ")], 1)])], 1), _vm._v(" "), _c('div', {
      staticClass: "padding-15"
    }, [_c('navigator', {
      attrs: {
        "url": '../detail/main?id=' + item.id
      }
    }, [_c('button', {
      attrs: {
        "type": "warn"
      }
    }, [_vm._v("\n            立即投资\n          ")])], 1)], 1)], 1) : _vm._e()
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-063fb0eb", esExports)
  }
}

/***/ })

},[94]);
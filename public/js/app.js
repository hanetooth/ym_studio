/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/@babel/runtime/regenerator/index.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPack.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ClassPack.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ClassPack",
  props: {
    alias: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      discountCoupon: '',
      email: '',
      password: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    selectedClassPack: 'classPack/selectedClassPack',
    discount: 'discount/discount'
  }), {
    gst: function gst() {
      return 7 * (this.selectedClassPack.pack_price / 100);
    },
    classPackSubTotal: function classPackSubTotal() {
      return this.selectedClassPack ? Math.round((this.selectedClassPack.pack_price - this.gst) * 100) / 100 : null;
    },
    classPackGrandTotal: function classPackGrandTotal() {
      return this.discount ? Math.round(this.selectedClassPack.pack_price - this.discount.amount) : this.selectedClassPack.pack_price;
    }
  }),
  methods: {
    applyDiscount: function applyDiscount() {
      this.$store.dispatch('discount/applyDiscount', this.discountCoupon);
    },
    getUserId: function getUserId() {
      return this.$store.getters['auth/user'].id;
    },
    loadClassPack: function loadClassPack() {
      var vm = this;
      vm.$store.dispatch('classPack/fetchClassPackByAlias', this.alias).then(function () {
        vm.$store.commit('discount/SET_DISCOUNT', vm.selectedClassPack.purchased ? vm.selectedClassPack.discount : null);
      });
      this.discountCoupon = '';
    },
    submit: function submit() {
      var vm = this;
      vm.$store.dispatch('classPack/purchase', {
        user_id: this.getUserId(),
        package_id: this.selectedClassPack.pack_id,
        discount_id: this.discount ? this.discount.id : null
      }).then(function () {
        vm.loadClassPack();
      });
    }
  },
  filters: {
    stringifyTotalCredit: function stringifyTotalCredit(totalCredit) {
      switch (totalCredit) {
        case 0:
          return 'U';

        case 1:
          return 'S';

        default:
          return totalCredit;
      }
    }
  },
  created: function created() {
    this.loadClassPack();
  },
  watch: {
    discount: {
      handler: function handler(discount) {
        if (discount) {
          this.discountCoupon = discount.coupon_code;
        }
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPacks.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ClassPacks.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ClassPacks",
  data: function data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    classPacks: 'classPack/classPacks'
  })),
  filters: {
    stringifyEstimatePrice: function stringifyEstimatePrice(estimatePrice) {
      switch (estimatePrice) {
        case 0:
          return 'per month';

        default:
          return estimatePrice + ' per class!';
      }
    },
    stringifyTotalCredit: function stringifyTotalCredit(totalCredit) {
      switch (totalCredit) {
        case 0:
          return 'U';

        case 1:
          return 'S';

        default:
          return totalCredit;
      }
    }
  },
  created: function created() {
    this.$store.dispatch('classPack/fetchClassPacks');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Login",
  data: function data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function login() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/lodash/camelCase.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/materialize-css/dist/js/materialize.js":
/*!*************************************************************!*\
  !*** ./node_modules/materialize-css/dist/js/materialize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/materialize-css/dist/js/materialize.js'");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/popper.js/dist/esm/popper.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPack.vue?vue&type=template&id=c75d2554&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ClassPack.vue?vue&type=template&id=c75d2554&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c("div", { staticClass: "full-height center valign-wrapper" }, [
      _c("div", { staticClass: "container grey lighten-2" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col s12" },
            [
              _vm.selectedClassPack
                ? [
                    _vm.selectedClassPack.purchased
                      ? _c("h5", { staticClass: "left-align primary-text" }, [
                          _vm._v("\n                            THANK YOU! "),
                          _c("br"),
                          _vm._v(
                            "\n                            YOU HAVE SUCCESSFULLY PURCHASED A CLASS PACK!\n                        "
                          )
                        ])
                      : _c("h5", { staticClass: "left-align primary-text" }, [
                          _vm._v("  CLASS PACK PURCHASE PREVIEW")
                        ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card primary-card" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-content no__padding-bottom" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col l4 s12 left-align valign-wrapper"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "class-pack__type avatar" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "btn-floating btn-large primary no-shadow"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm._f("stringifyTotalCredit")(
                                                _vm.selectedClassPack
                                                  .total_credit
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "avatar-label" }, [
                                  _c("p", [
                                    _vm._v(
                                      "  " +
                                        _vm._s(_vm.selectedClassPack.pack_name)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.selectedClassPack.newbie_note)
                                    )
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col l8 s12" }, [
                              _c("h6", { staticClass: "right-align" }, [
                                _c("b", [
                                  _vm._v(
                                    "$ " +
                                      _vm._s(_vm.selectedClassPack.pack_price)
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.selectedClassPack.purchased
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "card-content no__padding-top no__padding-bottom"
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col l4 s12 left-align" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "input-field input-group no__margin"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.discountCoupon,
                                              expression: "discountCoupon"
                                            }
                                          ],
                                          staticClass: "validate",
                                          attrs: {
                                            placeholder: "Coupon Code",
                                            type: "text"
                                          },
                                          domProps: {
                                            value: _vm.discountCoupon
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.discountCoupon =
                                                $event.target.value
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "suffix" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn waves-effect waves-light cyan",
                                              on: { click: _vm.applyDiscount }
                                            },
                                            [_vm._v("APPLY")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-action" }, [
                        _vm.classPackSubTotal
                          ? _c("div", { staticClass: "row no__margin" }, [
                              _vm._m(1),
                              _vm._v(" "),
                              _c("div", { staticClass: "col l8 s12" }, [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "grey-text right-align no__margin"
                                  },
                                  [
                                    _c("b", [
                                      _vm._v(
                                        "$ " + _vm._s(_vm.classPackSubTotal)
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.gst
                          ? _c("div", { staticClass: "row no__margin" }, [
                              _vm._m(2),
                              _vm._v(" "),
                              _c("div", { staticClass: "col l8 s12" }, [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "grey-text right-align no__margin"
                                  },
                                  [_c("b", [_vm._v("$ " + _vm._s(_vm.gst))])]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.discount && _vm.discount.amount
                          ? _c("div", { staticClass: "row no__margin" }, [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("div", { staticClass: "col l8 s12" }, [
                                _c(
                                  "p",
                                  { staticClass: "right-align no__margin" },
                                  [
                                    _c("b", [
                                      _vm._v(
                                        "- $ " + _vm._s(_vm.discount.amount)
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.classPackGrandTotal
                          ? _c("div", { staticClass: "row no__margin" }, [
                              _vm._m(4),
                              _vm._v(" "),
                              _c("div", { staticClass: "col l8 s12" }, [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "grey-text right-align no__margin"
                                  },
                                  [
                                    _c("b", [
                                      _vm._v(
                                        "$ " + _vm._s(_vm.classPackGrandTotal)
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    !_vm.selectedClassPack.purchased
                      ? _c("p", { staticClass: "left-align" }, [
                          _vm._v("Please read all "),
                          _c("span", { staticClass: "primary-text" }, [
                            _vm._v("Terms & Condition")
                          ]),
                          _vm._v(
                            " before purchasing your YM Class or Class Pack."
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col s6 left-align" },
                        [
                          _c("router-link", { attrs: { to: "/" } }, [
                            _c("span", { staticClass: "cyan-text" }, [
                              _c("i", { staticClass: "material-icons" }, [
                                _vm._v("arrow_back")
                              ]),
                              _vm._v(
                                "  Back\n                                    "
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.selectedClassPack.purchased
                        ? _c("div", { staticClass: "col s6 right-align" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "waves-effect waves-light btn cyan btn-round",
                                on: { click: _vm.submit }
                              },
                              [_vm._v("PAY NOW")]
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    void 0
                  ]
                : [_c("h5", [_vm._v("Oops! No data for select class pack.")])]
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-content" }, [
      _c("span", { staticClass: "card-title" }, [
        _c("b", [_vm._v("You have selected:")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col l4 s12 left-align valign-wrapper" }, [
      _c("p", { staticClass: "grey-text no__margin" }, [_vm._v("Subtotal")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col l4 s12 left-align valign-wrapper" }, [
      _c("p", { staticClass: "grey-text no__margin" }, [_vm._v("GST")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col l4 s12 left-align valign-wrapper" }, [
      _c("p", { staticClass: "no__margin" }, [_vm._v("Discount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col l4 s12 left-align valign-wrapper" }, [
      _c("p", { staticClass: "grey-text no__margin" }, [_vm._v("Grand Total")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c("div", { staticClass: "full-height center valign-wrapper" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _vm.classPacks.length > 0
              ? _vm._l(_vm.classPacks, function(classPack) {
                  return _c(
                    "div",
                    { staticClass: "col s12 m6 l4 no__margin no__padding" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-panel class-pack__card z-depth-0 no__margin pad with__border"
                        },
                        [
                          classPack.tag_name
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "chip class-pack__tag black white-text left"
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(classPack.tag_name) +
                                      "\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [_vm._v(" ")]),
                          _vm._v(" "),
                          _vm._m(0, true),
                          _vm._v(" "),
                          _c("p", { staticClass: "title" }, [
                            _vm._v(_vm._s(classPack.pack_name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "class-pack__type center-block" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "btn-floating btn-large primary no-shadow"
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm._f("stringifyTotalCredit")(
                                          classPack.total_credit
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: "/class-packs/" + classPack.pack_alias
                              }
                            },
                            [
                              _c("p", { staticClass: "black-text" }, [
                                _vm._v(_vm._s(classPack.pack_description))
                              ]),
                              _vm._v(" "),
                              _c("p", [_vm._v(" ")]),
                              _vm._v(" "),
                              _c("h6", { staticClass: "black-text" }, [
                                _c("b", [
                                  _vm._v("$ " + _vm._s(classPack.pack_price))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("small", { staticClass: "grey-text" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("stringifyEstimatePrice")(
                                      classPack.estimate_price
                                    )
                                  )
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                })
              : [_c("h4", [_vm._v("No Class Packs")])]
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "class-pack__image-container" }, [
      _c("div", { staticClass: "class-pack__image-overlay" }),
      _vm._v(" "),
      _c("img", { attrs: { src: "/images/Yoga.png", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c(
      "div",
      {
        staticClass: "center grey darken-3 login-card__container valign-wrapper"
      },
      [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "z-depth-1 grey lighten-4 row login-card" },
            [
              _c(
                "form",
                {
                  staticClass: "col s12",
                  attrs: { method: "post" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.login($event)
                    }
                  }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "input-field col s12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.email,
                            expression: "email"
                          }
                        ],
                        staticClass: "validate credentials",
                        attrs: { type: "email", name: "email", id: "email" },
                        domProps: { value: _vm.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.email = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Email")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "input-field col s12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.password,
                            expression: "password"
                          }
                        ],
                        staticClass: "validate credentials",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password"
                        },
                        domProps: { value: _vm.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.password = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "password" } }, [
                        _vm._v("Password")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "input-field col s12" }, [
        _c("h5", [_vm._v("Member Login")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center" }, [
      _c(
        "button",
        {
          staticClass: "btn waves-effect indigo__custom",
          attrs: { type: "submit", name: "btn_login" }
        },
        [_vm._v("Login")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/vue-loader/lib/runtime/componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/vue-router/dist/vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ "./node_modules/vuex-persist/dist/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuex-persist/dist/esm/index.js ***!
  \*****************************************************/
/*! exports provided: default, MockStorage, VuexPersistence */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/vuex-persist/dist/esm/index.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/zugor/code/ym_studio/node_modules/vuex/dist/vuex.esm.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores */ "./resources/js/stores/index.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");


_stores__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('auth/setDefaultAuthorizationHeader');

window.onload = function () {
  var app = new Vue({
    router: _routes__WEBPACK_IMPORTED_MODULE_0__["default"],
    store: _stores__WEBPACK_IMPORTED_MODULE_1__["default"],
    el: '#app'
  });
};

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");

  M.AutoInit();
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.baseURL = 'http://localhost:8000/api';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/***/ }),

/***/ "./resources/js/components.js":
/*!************************************!*\
  !*** ./resources/js/components.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('class-packs', __webpack_require__(/*! ./components/ClassPacks.vue */ "./resources/js/components/ClassPacks.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('class-pack', __webpack_require__(/*! ./components/ClassPack.vue */ "./resources/js/components/ClassPack.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('login', __webpack_require__(/*! ./components/Login.vue */ "./resources/js/components/Login.vue")["default"]);

/***/ }),

/***/ "./resources/js/components/ClassPack.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ClassPack.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClassPack_vue_vue_type_template_id_c75d2554_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassPack.vue?vue&type=template&id=c75d2554&scoped=true& */ "./resources/js/components/ClassPack.vue?vue&type=template&id=c75d2554&scoped=true&");
/* harmony import */ var _ClassPack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassPack.vue?vue&type=script&lang=js& */ "./resources/js/components/ClassPack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClassPack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClassPack_vue_vue_type_template_id_c75d2554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClassPack_vue_vue_type_template_id_c75d2554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c75d2554",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ClassPack.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ClassPack.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ClassPack.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ClassPack.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ClassPack.vue?vue&type=template&id=c75d2554&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ClassPack.vue?vue&type=template&id=c75d2554&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPack_vue_vue_type_template_id_c75d2554_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ClassPack.vue?vue&type=template&id=c75d2554&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPack.vue?vue&type=template&id=c75d2554&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPack_vue_vue_type_template_id_c75d2554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPack_vue_vue_type_template_id_c75d2554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ClassPacks.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ClassPacks.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClassPacks_vue_vue_type_template_id_1cf042e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true& */ "./resources/js/components/ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true&");
/* harmony import */ var _ClassPacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassPacks.vue?vue&type=script&lang=js& */ "./resources/js/components/ClassPacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClassPacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClassPacks_vue_vue_type_template_id_1cf042e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClassPacks_vue_vue_type_template_id_1cf042e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1cf042e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ClassPacks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ClassPacks.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ClassPacks.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ClassPacks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPacks_vue_vue_type_template_id_1cf042e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClassPacks.vue?vue&type=template&id=1cf042e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPacks_vue_vue_type_template_id_1cf042e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassPacks_vue_vue_type_template_id_1cf042e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_6bdc8b8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6bdc8b8e&scoped=true& */ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6bdc8b8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_6bdc8b8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6bdc8b8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=6bdc8b8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stores */ "./resources/js/stores/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./resources/js/components.js");




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var routes = [{
  path: '/',
  redirect: '/class-packs'
}, {
  path: '/class-packs/',
  component: vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('class-packs'),
  meta: {
    requiresAuth: true
  }
}, {
  path: '/class-packs/:alias',
  component: vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('class-pack'),
  props: true,
  meta: {
    requiresAuth: true
  }
}, {
  path: '/login',
  component: vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('login')
}, {
  path: '*',
  redirect: '/'
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  hashbang: false,
  history: true,
  mode: "history",
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: routes
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    if (_stores__WEBPACK_IMPORTED_MODULE_2__["default"].getters['auth/isLoggedIn']) {
      _stores__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('auth/validateAccessToken').then(function () {
        next();
      });
      return;
    }

    next('/login');
  } else {
    next();
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/stores/Modules sync \\.js$":
/*!*************************************************************!*\
  !*** ./resources/js/stores/Modules sync nonrecursive \.js$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth.js": "./resources/js/stores/Modules/auth.js",
	"./classPack.js": "./resources/js/stores/Modules/classPack.js",
	"./discount.js": "./resources/js/stores/Modules/discount.js",
	"./index.js": "./resources/js/stores/Modules/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/stores/Modules sync \\.js$";

/***/ }),

/***/ "./resources/js/stores/Modules/auth.js":
/*!*********************************************!*\
  !*** ./resources/js/stores/Modules/auth.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    accessToken: null,
    user: null
  },
  getters: {
    accessToken: function accessToken(state) {
      return state.accessToken;
    },
    isLoggedIn: function isLoggedIn(state) {
      return state.accessToken !== null && state.accessToken !== '' && state.accessToken !== undefined;
    },
    user: function user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_ACCESS_TOKEN: function SET_ACCESS_TOKEN(state, accessToken) {
      vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(state, 'accessToken', accessToken);
    },
    SET_USER: function SET_USER(state, user) {
      vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(state, 'user', user);
    }
  },
  actions: {
    login: function login(context, credentials) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('auth/login', credentials).then(function (_ref) {
                var data = _ref.data;
                context.commit('SET_ACCESS_TOKEN', data.access_token);
                context.commit('SET_USER', data.user);
                context.dispatch('setDefaultAuthorizationHeader');
                _routes__WEBPACK_IMPORTED_MODULE_2__["default"].go(-1);
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                var message = response.status === 422 ? 'Invalid Credentials' : 'Oops! <br/> Something went wrong. <br/> Please try again.';
                M.toast({
                  classes: 'red darken-3',
                  html: message
                });
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    setDefaultAuthorizationHeader: function setDefaultAuthorizationHeader(context) {
      if (context.getters.isLoggedIn) {
        axios.defaults.headers.common['authorization'] = 'Bearer ' + context.getters.accessToken;
      }
    },
    validateAccessToken: function validateAccessToken(context) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function validateAccessToken$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get('validate-access-token')["catch"](function (_ref3) {
                var response = _ref3.response;
                context.dispatch('clearCredentials');
                _routes__WEBPACK_IMPORTED_MODULE_2__["default"].push('/login');
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    clearCredentials: function clearCredentials(context) {
      context.commit('SET_ACCESS_TOKEN', null);
      context.commit('SET_USER', null);
    }
  }
});

/***/ }),

/***/ "./resources/js/stores/Modules/classPack.js":
/*!**************************************************!*\
  !*** ./resources/js/stores/Modules/classPack.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    classPacks: [],
    selectedClassPack: null
  },
  getters: {
    classPacks: function classPacks(state) {
      return state.classPacks;
    },
    selectedClassPack: function selectedClassPack(state) {
      return state.selectedClassPack;
    }
  },
  mutations: {
    SET_CLASS_PACKS: function SET_CLASS_PACKS(state, classPacks) {
      vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(state, 'classPacks', classPacks);
    },
    SET_SELECTED_CLASS_PACK: function SET_SELECTED_CLASS_PACK(state, classPack) {
      vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(state, 'selectedClassPack', classPack);
    }
  },
  actions: {
    fetchClassPacks: function fetchClassPacks(context) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchClassPacks$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get('packages').then(function (_ref) {
                var data = _ref.data;
                context.commit('SET_CLASS_PACKS', data.data.pack_list); // router.go(-1);
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                var message = 'Oops! <br/> Something went wrong. <br/> Please try again by reloading the page.';
                M.toast({
                  classes: 'red darken-3',
                  html: message
                });
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    fetchClassPackByAlias: function fetchClassPackByAlias(context, alias) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchClassPackByAlias$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get('packages/' + alias).then(function (_ref3) {
                var data = _ref3.data;
                context.commit('SET_SELECTED_CLASS_PACK', data.data);
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                var message = 'Oops! <br/> Something went wrong. <br/> Please try again by reloading the page.';
                M.toast({
                  classes: 'red darken-3',
                  html: message
                });
                _routes__WEBPACK_IMPORTED_MODULE_2__["default"].push('/class-packs');
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    purchase: function purchase(context, payload) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function purchase$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('packages/purchase', payload));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/stores/Modules/discount.js":
/*!*************************************************!*\
  !*** ./resources/js/stores/Modules/discount.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    discount: null
  },
  getters: {
    discount: function discount(state) {
      return state.discount;
    }
  },
  mutations: {
    SET_DISCOUNT: function SET_DISCOUNT(state, classPacks) {
      vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(state, 'discount', classPacks);
    }
  },
  actions: {
    applyDiscount: function applyDiscount(context, couponCode) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function applyDiscount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              context.commit('SET_DISCOUNT', null);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('discounts/get', {
                coupon_code: couponCode
              }).then(function (_ref) {
                var data = _ref.data;
                context.commit('SET_DISCOUNT', data.data);
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                var message = 'Invalid coupon code!';
                M.toast({
                  classes: 'red darken-3',
                  html: message
                });
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/stores/Modules/index.js":
/*!**********************************************!*\
  !*** ./resources/js/stores/Modules/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Storing in variable a context with all files in this folder
// ending with `.js`.

var requireModule = __webpack_require__("./resources/js/stores/Modules sync \\.js$");

var modules = {};
requireModule.keys().forEach(function (fileName) {
  if (fileName === './index.js') {
    return;
  } // filter fullstops and extension
  // and return a camel-case name for the file


  var moduleName = lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default()(fileName.replace(/(\.\/|\.js)/g, '')); // create a dynamic object with all modules

  modules[moduleName] = _objectSpread({
    // add namespace here
    namespaced: true
  }, requireModule(fileName)["default"]);
});
/* harmony default export */ __webpack_exports__["default"] = (modules);

/***/ }),

/***/ "./resources/js/stores/index.js":
/*!**************************************!*\
  !*** ./resources/js/stores/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules */ "./resources/js/stores/Modules/index.js");
/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-persist */ "./node_modules/vuex-persist/dist/esm/index.js");




var vuexPersist = new vuex_persist__WEBPACK_IMPORTED_MODULE_3__["default"]({
  key: 'vuex_store',
  storage: window.localStorage
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: _Modules__WEBPACK_IMPORTED_MODULE_2__["default"],
  plugins: [vuexPersist.plugin]
}));

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\n@import \"~materialize-css/sass/materialize\";\n       ^\n      Can't find stylesheet to import.\n  ╷\n4 │ @import \"~materialize-css/sass/materialize\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  stdin 4:9  root stylesheet\n      in /home/zugor/code/ym_studio/resources/sass/app.scss (line 4, column 9)\n    at runLoaders (/home/zugor/code/ym_studio/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /home/zugor/code/ym_studio/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/zugor/code/ym_studio/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/home/zugor/code/ym_studio/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/home/zugor/code/ym_studio/node_modules/sass-loader/dist/index.js:89:7)\n    at Function.call$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:54416:16)\n    at _render_closure1.call$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:33511:12)\n    at _RootZone.runBinary$3$3 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:19804:18)\n    at _RootZone.runBinary$3 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:19808:19)\n    at _FutureListener.handleError$1 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18273:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18561:40)\n    at Object._Future__propagateToListeners (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:3486:88)\n    at _Future._completeError$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18397:9)\n    at _AsyncAwaitCompleter.completeError$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:17796:12)\n    at Object._asyncRethrow (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:3242:17)\n    at /home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:10539:20\n    at _wrapJsFunctionForAsync_closure.$protected (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:3265:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:17817:12)\n    at _awaitOnObject_closure0.call$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:17809:25)\n    at _RootZone.runBinary$3$3 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:19804:18)\n    at _RootZone.runBinary$3 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:19808:19)\n    at _FutureListener.handleError$1 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18273:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18561:40)\n    at Object._Future__propagateToListeners (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:3486:88)\n    at _Future._completeError$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18397:9)\n    at _AsyncAwaitCompleter.completeError$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:17796:12)\n    at Object._asyncRethrow (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:3242:17)\n    at /home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:12240:20\n    at _wrapJsFunctionForAsync_closure.$protected (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:3265:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:17817:12)\n    at _awaitOnObject_closure0.call$2 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:17809:25)\n    at _RootZone.runBinary$3$3 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:19804:18)\n    at _RootZone.runBinary$3 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:19808:19)\n    at _FutureListener.handleError$1 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18273:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:18561:40)\n    at Object._Future__propagateToListeners (/home/zugor/code/ym_studio/node_modules/sass/sass.dart.js:3486:88)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/zugor/code/ym_studio/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/zugor/code/ym_studio/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
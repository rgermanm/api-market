var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/@galiciaseguros/system_design/dist/index.js
var require_dist = __commonJS({
  "node_modules/@galiciaseguros/system_design/dist/index.js"(exports) {
    "use strict";
    var React = require("react"), __assign = function() {
      return __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p2 in s)
            Object.prototype.hasOwnProperty.call(s, p2) && (t[p2] = s[p2]);
        }
        return t;
      }, __assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p2 in s)
        Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0 && (t[p2] = s[p2]);
      if (s != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++)
          e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]) && (t[p2[i]] = s[p2[i]]);
      return t;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++)
          (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    var faInfo = {
      prefix: "fas",
      iconName: "info",
      icon: [192, 512, [], "f129", "M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"]
    }, faPencil = {
      prefix: "fas",
      iconName: "pencil",
      icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
    }, faCircleExclamation = {
      prefix: "fas",
      iconName: "circle-exclamation",
      icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"]
    }, faChevronUp = {
      prefix: "fas",
      iconName: "chevron-up",
      icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
    }, faSort = {
      prefix: "fas",
      iconName: "sort",
      icon: [320, 512, ["unsorted"], "f0dc", "M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]
    }, faChevronDown2 = {
      prefix: "fas",
      iconName: "chevron-down",
      icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
    }, faChevronLeft = {
      prefix: "fas",
      iconName: "chevron-left",
      icon: [384, 512, [9001], "f053", "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
    }, faChevronRight2 = {
      prefix: "fas",
      iconName: "chevron-right",
      icon: [384, 512, [9002], "f054", "M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
    }, faCheck2 = {
      prefix: "fas",
      iconName: "check",
      icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
    };
    function ownKeys$1(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys$1(Object(source), !0).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _typeof$1(obj) {
      return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof$1(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor))
        throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", {
        writable: !1
      }), Constructor;
    }
    function _defineProperty$1(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
    }
    function _toConsumableArray$1(arr) {
      return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
    }
    function _arrayWithoutHoles$1(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray$1(arr);
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArray$1(iter) {
      if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i != null) {
        var _arr = [], _n = !0, _d = !1, _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
            ;
        } catch (err) {
          _d = !0, _e = err;
        } finally {
          try {
            !_n && _i.return != null && _i.return();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
    }
    function _unsupportedIterableToArray$1(o, minLen) {
      if (!!o) {
        if (typeof o == "string")
          return _arrayLikeToArray$1(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray$1(o, minLen);
      }
    }
    function _arrayLikeToArray$1(arr, len) {
      (len == null || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableSpread$1() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function _nonIterableRest() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var noop = function() {
    }, _WINDOW = {}, _DOCUMENT = {}, _MUTATION_OBSERVER = null, _PERFORMANCE = {
      mark: noop,
      measure: noop
    };
    try {
      typeof window < "u" && (_WINDOW = window), typeof document < "u" && (_DOCUMENT = document), typeof MutationObserver < "u" && (_MUTATION_OBSERVER = MutationObserver), typeof performance < "u" && (_PERFORMANCE = performance);
    } catch {
    }
    var _ref = _WINDOW.navigator || {}, _ref$userAgent = _ref.userAgent, userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent, WINDOW = _WINDOW, DOCUMENT = _DOCUMENT, MUTATION_OBSERVER = _MUTATION_OBSERVER, PERFORMANCE = _PERFORMANCE;
    WINDOW.document;
    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener == "function" && typeof DOCUMENT.createElement == "function", IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/"), _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5, NAMESPACE_IDENTIFIER = "___FONT_AWESOME___", UNITS_IN_GRID = 16, DEFAULT_CSS_PREFIX = "fa", DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa", DATA_FA_I2SVG = "data-fa-i2svg", DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element", DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending", DATA_PREFIX = "data-prefix", DATA_ICON = "data-icon", HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg", MUTATION_APPROACH_ASYNC = "async", TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"], PRODUCTION$1 = function() {
      try {
        return !1;
      } catch {
        return !1;
      }
    }(), FAMILY_CLASSIC = "classic", FAMILY_SHARP = "sharp", FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
    function familyProxy(obj) {
      return new Proxy(obj, {
        get: function(target, prop) {
          return prop in target ? target[prop] : target[FAMILY_CLASSIC];
        }
      });
    }
    var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty$1(_familyProxy, FAMILY_CLASSIC, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit"
    }), _defineProperty$1(_familyProxy, FAMILY_SHARP, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid"
    }), _familyProxy)), STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty$1(_familyProxy2, FAMILY_CLASSIC, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak"
    }), _defineProperty$1(_familyProxy2, FAMILY_SHARP, {
      solid: "fass"
    }), _familyProxy2)), PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty$1(_familyProxy3, FAMILY_CLASSIC, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    }), _defineProperty$1(_familyProxy3, FAMILY_SHARP, {
      fass: "fa-solid"
    }), _familyProxy3)), LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty$1(_familyProxy4, FAMILY_CLASSIC, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    }), _defineProperty$1(_familyProxy4, FAMILY_SHARP, {
      "fa-solid": "fass"
    }), _familyProxy4)), ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/, LAYERS_TEXT_CLASSNAME = "fa-layers-text", FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty$1(_familyProxy5, FAMILY_CLASSIC, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    }), _defineProperty$1(_familyProxy5, FAMILY_SHARP, {
      900: "fass"
    }), _familyProxy5)), oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], DUOTONE_CLASSES = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    }, prefixes = /* @__PURE__ */ new Set();
    Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
    Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
    var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray$1(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n) {
      return "".concat(n, "x");
    })).concat(oneToTwenty.map(function(n) {
      return "w-".concat(n);
    })), initial = WINDOW.FontAwesomeConfig || {};
    function getAttrConfig(attr) {
      var element = DOCUMENT.querySelector("script[" + attr + "]");
      if (element)
        return element.getAttribute(attr);
    }
    function coerce(val) {
      return val === "" ? !0 : val === "false" ? !1 : val === "true" ? !0 : val;
    }
    DOCUMENT && typeof DOCUMENT.querySelector == "function" && (attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]], attrs.forEach(function(_ref2) {
      var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1], val = coerce(getAttrConfig(attr));
      val != null && (initial[key] = val);
    }));
    var attrs, _default = {
      styleDefault: "solid",
      familyDefault: "classic",
      cssPrefix: DEFAULT_CSS_PREFIX,
      replacementClass: DEFAULT_REPLACEMENT_CLASS,
      autoReplaceSvg: !0,
      autoAddCss: !0,
      autoA11y: !0,
      searchPseudoElements: !1,
      observeMutations: !0,
      mutateApproach: "async",
      keepOriginalSource: !0,
      measurePerformance: !1,
      showMissingIcons: !0
    };
    initial.familyPrefix && (initial.cssPrefix = initial.familyPrefix);
    var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);
    _config.autoReplaceSvg || (_config.observeMutations = !1);
    var config = {};
    Object.keys(_default).forEach(function(key) {
      Object.defineProperty(config, key, {
        enumerable: !0,
        set: function(val) {
          _config[key] = val, _onChangeCb.forEach(function(cb) {
            return cb(config);
          });
        },
        get: function() {
          return _config[key];
        }
      });
    });
    Object.defineProperty(config, "familyPrefix", {
      enumerable: !0,
      set: function(val) {
        _config.cssPrefix = val, _onChangeCb.forEach(function(cb) {
          return cb(config);
        });
      },
      get: function() {
        return _config.cssPrefix;
      }
    });
    WINDOW.FontAwesomeConfig = config;
    var _onChangeCb = [];
    function onChange(cb) {
      return _onChangeCb.push(cb), function() {
        _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
      };
    }
    var d = UNITS_IN_GRID, meaninglessTransform = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: !1,
      flipY: !1
    };
    function insertCss(css2) {
      if (!(!css2 || !IS_DOM)) {
        var style = DOCUMENT.createElement("style");
        style.setAttribute("type", "text/css"), style.innerHTML = css2;
        for (var headChildren = DOCUMENT.head.childNodes, beforeChild = null, i = headChildren.length - 1; i > -1; i--) {
          var child = headChildren[i], tagName = (child.tagName || "").toUpperCase();
          ["STYLE", "LINK"].indexOf(tagName) > -1 && (beforeChild = child);
        }
        return DOCUMENT.head.insertBefore(style, beforeChild), css2;
      }
    }
    var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function nextUniqueId() {
      for (var size = 12, id = ""; size-- > 0; )
        id += idPool[Math.random() * 62 | 0];
      return id;
    }
    function toArray(obj) {
      for (var array = [], i = (obj || []).length >>> 0; i--; )
        array[i] = obj[i];
      return array;
    }
    function classArray(node) {
      return node.classList ? toArray(node.classList) : (node.getAttribute("class") || "").split(" ").filter(function(i) {
        return i;
      });
    }
    function htmlEscape(str) {
      return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function joinAttributes(attributes) {
      return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
        return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
      }, "").trim();
    }
    function joinStyles(styles2) {
      return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
        return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
      }, "");
    }
    function transformIsMeaningful(transform) {
      return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
    }
    function transformForSvg(_ref2) {
      var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth, outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      }, innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") "), innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") "), innerRotate = "rotate(".concat(transform.rotate, " 0 0)"), inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      }, path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      return {
        outer,
        inner,
        path
      };
    }
    function transformForCss(_ref2) {
      var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? !1 : _ref2$startCentered, val = "";
      return startCentered && IS_IE ? val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ") : startCentered ? val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ") : val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) "), val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") "), val += "rotate(".concat(transform.rotate, "deg) "), val;
    }
    var baseStyles = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
    function css() {
      var dcp = DEFAULT_CSS_PREFIX, drc = DEFAULT_REPLACEMENT_CLASS, fp = config.cssPrefix, rc = config.replacementClass, s = baseStyles;
      if (fp !== dcp || rc !== drc) {
        var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g"), customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g"), rPatt = new RegExp("\\.".concat(drc), "g");
        s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
      }
      return s;
    }
    var _cssInserted = !1;
    function ensureCss() {
      config.autoAddCss && !_cssInserted && (insertCss(css()), _cssInserted = !0);
    }
    var InjectCSS = {
      mixout: function() {
        return {
          dom: {
            css,
            insertCss: ensureCss
          }
        };
      },
      hooks: function() {
        return {
          beforeDOMElementCreation: function() {
            ensureCss();
          },
          beforeI2svg: function() {
            ensureCss();
          }
        };
      }
    }, w = WINDOW || {};
    w[NAMESPACE_IDENTIFIER] || (w[NAMESPACE_IDENTIFIER] = {});
    w[NAMESPACE_IDENTIFIER].styles || (w[NAMESPACE_IDENTIFIER].styles = {});
    w[NAMESPACE_IDENTIFIER].hooks || (w[NAMESPACE_IDENTIFIER].hooks = {});
    w[NAMESPACE_IDENTIFIER].shims || (w[NAMESPACE_IDENTIFIER].shims = []);
    var namespace = w[NAMESPACE_IDENTIFIER], functions = [], listener = function listener2() {
      DOCUMENT.removeEventListener("DOMContentLoaded", listener2), loaded = 1, functions.map(function(fn) {
        return fn();
      });
    }, loaded = !1;
    IS_DOM && (loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState), loaded || DOCUMENT.addEventListener("DOMContentLoaded", listener));
    function domready(fn) {
      !IS_DOM || (loaded ? setTimeout(fn, 0) : functions.push(fn));
    }
    function toHtml(abstractNodes) {
      var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
      return typeof abstractNodes == "string" ? htmlEscape(abstractNodes) : "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
    }
    function iconFromMapping(mapping, prefix, iconName) {
      if (mapping && mapping[prefix] && mapping[prefix][iconName])
        return {
          prefix,
          iconName,
          icon: mapping[prefix][iconName]
        };
    }
    var bindInternal4 = function(func, thisContext) {
      return function(a, b, c5, d2) {
        return func.call(thisContext, a, b, c5, d2);
      };
    }, reduce = function(subject, fn, initialValue, thisContext) {
      var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
      for (initialValue === void 0 ? (i = 1, result = subject[keys[0]]) : (i = 0, result = initialValue); i < length; i++)
        key = keys[i], result = iterator(result, subject[key], key, subject);
      return result;
    };
    function ucs2decode(string) {
      for (var output = [], counter = 0, length = string.length; counter < length; ) {
        var value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          var extra = string.charCodeAt(counter++);
          (extra & 64512) == 56320 ? output.push(((value & 1023) << 10) + (extra & 1023) + 65536) : (output.push(value), counter--);
        } else
          output.push(value);
      }
      return output;
    }
    function toHex(unicode) {
      var decoded = ucs2decode(unicode);
      return decoded.length === 1 ? decoded[0].toString(16) : null;
    }
    function codePointAt(string, index) {
      var size = string.length, first = string.charCodeAt(index), second;
      return first >= 55296 && first <= 56319 && size > index + 1 && (second = string.charCodeAt(index + 1), second >= 56320 && second <= 57343) ? (first - 55296) * 1024 + second - 56320 + 65536 : first;
    }
    function normalizeIcons(icons) {
      return Object.keys(icons).reduce(function(acc, iconName) {
        var icon2 = icons[iconName], expanded = !!icon2.icon;
        return expanded ? acc[icon2.iconName] = icon2.icon : acc[iconName] = icon2, acc;
      }, {});
    }
    function defineIcons(prefix, icons) {
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? !1 : _params$skipHooks, normalized = normalizeIcons(icons);
      typeof namespace.hooks.addPack == "function" && !skipHooks ? namespace.hooks.addPack(prefix, normalizeIcons(icons)) : namespace.styles[prefix] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix] || {}), normalized), prefix === "fas" && defineIcons("fa", icons);
    }
    var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY, styles$o = namespace.styles, shims = namespace.shims, LONG_STYLE = (_LONG_STYLE = {}, _defineProperty$1(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE), _defaultUsablePrefix = null, _byUnicode = {}, _byLigature = {}, _byOldName = {}, _byOldUnicode = {}, _byAlias = {}, PREFIXES = (_PREFIXES = {}, _defineProperty$1(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
    function isReserved(name) {
      return ~RESERVED_CLASSES.indexOf(name);
    }
    function getIconName(cssPrefix, cls) {
      var parts = cls.split("-"), prefix = parts[0], iconName = parts.slice(1).join("-");
      return prefix === cssPrefix && iconName !== "" && !isReserved(iconName) ? iconName : null;
    }
    var build = function() {
      var lookup = function(reducer) {
        return reduce(styles$o, function(o, style, prefix) {
          return o[prefix] = reduce(style, reducer, {}), o;
        }, {});
      };
      _byUnicode = lookup(function(acc, icon2, iconName) {
        if (icon2[3] && (acc[icon2[3]] = iconName), icon2[2]) {
          var aliases = icon2[2].filter(function(a) {
            return typeof a == "number";
          });
          aliases.forEach(function(alias) {
            acc[alias.toString(16)] = iconName;
          });
        }
        return acc;
      }), _byLigature = lookup(function(acc, icon2, iconName) {
        if (acc[iconName] = iconName, icon2[2]) {
          var aliases = icon2[2].filter(function(a) {
            return typeof a == "string";
          });
          aliases.forEach(function(alias) {
            acc[alias] = iconName;
          });
        }
        return acc;
      }), _byAlias = lookup(function(acc, icon2, iconName) {
        var aliases = icon2[2];
        return acc[iconName] = iconName, aliases.forEach(function(alias) {
          acc[alias] = iconName;
        }), acc;
      });
      var hasRegular = "far" in styles$o || config.autoFetchSvg, shimLookups = reduce(shims, function(acc, shim) {
        var maybeNameMaybeUnicode = shim[0], prefix = shim[1], iconName = shim[2];
        return prefix === "far" && !hasRegular && (prefix = "fas"), typeof maybeNameMaybeUnicode == "string" && (acc.names[maybeNameMaybeUnicode] = {
          prefix,
          iconName
        }), typeof maybeNameMaybeUnicode == "number" && (acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix,
          iconName
        }), acc;
      }, {
        names: {},
        unicodes: {}
      });
      _byOldName = shimLookups.names, _byOldUnicode = shimLookups.unicodes, _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
        family: config.familyDefault
      });
    };
    onChange(function(c5) {
      _defaultUsablePrefix = getCanonicalPrefix(c5.styleDefault, {
        family: config.familyDefault
      });
    });
    build();
    function byUnicode(prefix, unicode) {
      return (_byUnicode[prefix] || {})[unicode];
    }
    function byLigature(prefix, ligature) {
      return (_byLigature[prefix] || {})[ligature];
    }
    function byAlias(prefix, alias) {
      return (_byAlias[prefix] || {})[alias];
    }
    function byOldName(name) {
      return _byOldName[name] || {
        prefix: null,
        iconName: null
      };
    }
    function byOldUnicode(unicode) {
      var oldUnicode = _byOldUnicode[unicode], newUnicode = byUnicode("fas", unicode);
      return oldUnicode || (newUnicode ? {
        prefix: "fas",
        iconName: newUnicode
      } : null) || {
        prefix: null,
        iconName: null
      };
    }
    function getDefaultUsablePrefix() {
      return _defaultUsablePrefix;
    }
    var emptyCanonicalIcon = function() {
      return {
        prefix: null,
        iconName: null,
        rest: []
      };
    };
    function getCanonicalPrefix(styleOrPrefix) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _params$family = params.family, family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family, style = PREFIX_TO_STYLE[family][styleOrPrefix], prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style], defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
      return prefix || defined || null;
    }
    var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
    function getCanonicalIcon(values) {
      var _famProps, params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? !1 : _params$skipLookups, famProps = (_famProps = {}, _defineProperty$1(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty$1(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps), givenPrefix = null, family = FAMILY_CLASSIC;
      (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function(v) {
        return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
      })) && (family = FAMILY_CLASSIC), (values.includes(famProps[FAMILY_SHARP]) || values.some(function(v) {
        return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
      })) && (family = FAMILY_SHARP);
      var canonical = values.reduce(function(acc, cls) {
        var iconName = getIconName(config.cssPrefix, cls);
        if (styles$o[cls] ? (cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls, givenPrefix = cls, acc.prefix = cls) : PREFIXES[family].indexOf(cls) > -1 ? (givenPrefix = cls, acc.prefix = getCanonicalPrefix(cls, {
          family
        })) : iconName ? acc.iconName = iconName : cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP] && acc.rest.push(cls), !skipLookups && acc.prefix && acc.iconName) {
          var shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {}, aliasIconName = byAlias(acc.prefix, acc.iconName);
          shim.prefix && (givenPrefix = null), acc.iconName = shim.iconName || aliasIconName || acc.iconName, acc.prefix = shim.prefix || acc.prefix, acc.prefix === "far" && !styles$o.far && styles$o.fas && !config.autoFetchSvg && (acc.prefix = "fas");
        }
        return acc;
      }, emptyCanonicalIcon());
      return (values.includes("fa-brands") || values.includes("fab")) && (canonical.prefix = "fab"), (values.includes("fa-duotone") || values.includes("fad")) && (canonical.prefix = "fad"), !canonical.prefix && family === FAMILY_SHARP && (styles$o.fass || config.autoFetchSvg) && (canonical.prefix = "fass", canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName), (canonical.prefix === "fa" || givenPrefix === "fa") && (canonical.prefix = getDefaultUsablePrefix() || "fas"), canonical;
    }
    var Library = /* @__PURE__ */ function() {
      function Library2() {
        _classCallCheck(this, Library2), this.definitions = {};
      }
      return _createClass(Library2, [{
        key: "add",
        value: function() {
          for (var _this = this, _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++)
            definitions[_key] = arguments[_key];
          var additions = definitions.reduce(this._pullDefinitions, {});
          Object.keys(additions).forEach(function(key) {
            _this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, _this.definitions[key] || {}), additions[key]), defineIcons(key, additions[key]);
            var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
            longPrefix && defineIcons(longPrefix, additions[key]), build();
          });
        }
      }, {
        key: "reset",
        value: function() {
          this.definitions = {};
        }
      }, {
        key: "_pullDefinitions",
        value: function(additions, definition) {
          var normalized = definition.prefix && definition.iconName && definition.icon ? {
            0: definition
          } : definition;
          return Object.keys(normalized).map(function(key) {
            var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon2 = _normalized$key.icon, aliases = icon2[2];
            additions[prefix] || (additions[prefix] = {}), aliases.length > 0 && aliases.forEach(function(alias) {
              typeof alias == "string" && (additions[prefix][alias] = icon2);
            }), additions[prefix][iconName] = icon2;
          }), additions;
        }
      }]), Library2;
    }(), _plugins = [], _hooks = {}, providers = {}, defaultProviderKeys = Object.keys(providers);
    function registerPlugins(nextPlugins, _ref2) {
      var obj = _ref2.mixoutsTo;
      return _plugins = nextPlugins, _hooks = {}, Object.keys(providers).forEach(function(k) {
        defaultProviderKeys.indexOf(k) === -1 && delete providers[k];
      }), _plugins.forEach(function(plugin) {
        var mixout = plugin.mixout ? plugin.mixout() : {};
        if (Object.keys(mixout).forEach(function(tk) {
          typeof mixout[tk] == "function" && (obj[tk] = mixout[tk]), _typeof$1(mixout[tk]) === "object" && Object.keys(mixout[tk]).forEach(function(sk) {
            obj[tk] || (obj[tk] = {}), obj[tk][sk] = mixout[tk][sk];
          });
        }), plugin.hooks) {
          var hooks = plugin.hooks();
          Object.keys(hooks).forEach(function(hook) {
            _hooks[hook] || (_hooks[hook] = []), _hooks[hook].push(hooks[hook]);
          });
        }
        plugin.provides && plugin.provides(providers);
      }), obj;
    }
    function chainHooks(hook, accumulator) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)
        args[_key - 2] = arguments[_key];
      var hookFns = _hooks[hook] || [];
      return hookFns.forEach(function(hookFn) {
        accumulator = hookFn.apply(null, [accumulator].concat(args));
      }), accumulator;
    }
    function callHooks(hook) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
        args[_key2 - 1] = arguments[_key2];
      var hookFns = _hooks[hook] || [];
      hookFns.forEach(function(hookFn) {
        hookFn.apply(null, args);
      });
    }
    function callProvided() {
      var hook = arguments[0], args = Array.prototype.slice.call(arguments, 1);
      return providers[hook] ? providers[hook].apply(null, args) : void 0;
    }
    function findIconDefinition(iconLookup) {
      iconLookup.prefix === "fa" && (iconLookup.prefix = "fas");
      var iconName = iconLookup.iconName, prefix = iconLookup.prefix || getDefaultUsablePrefix();
      if (!!iconName)
        return iconName = byAlias(prefix, iconName) || iconName, iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
    }
    var library = new Library(), noAuto = function() {
      config.autoReplaceSvg = !1, config.observeMutations = !1, callHooks("noAuto");
    }, dom = {
      i2svg: function() {
        var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return IS_DOM ? (callHooks("beforeI2svg", params), callProvided("pseudoElements2svg", params), callProvided("i2svg", params)) : Promise.reject("Operation requires a DOM of some kind.");
      },
      watch: function() {
        var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, autoReplaceSvgRoot = params.autoReplaceSvgRoot;
        config.autoReplaceSvg === !1 && (config.autoReplaceSvg = !0), config.observeMutations = !0, domready(function() {
          autoReplace({
            autoReplaceSvgRoot
          }), callHooks("watch", params);
        });
      }
    }, parse = {
      icon: function(_icon) {
        if (_icon === null)
          return null;
        if (_typeof$1(_icon) === "object" && _icon.prefix && _icon.iconName)
          return {
            prefix: _icon.prefix,
            iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
          };
        if (Array.isArray(_icon) && _icon.length === 2) {
          var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1], prefix = getCanonicalPrefix(_icon[0]);
          return {
            prefix,
            iconName: byAlias(prefix, iconName) || iconName
          };
        }
        if (typeof _icon == "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
          var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
            skipLookups: !0
          });
          return {
            prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
            iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
          };
        }
        if (typeof _icon == "string") {
          var _prefix = getDefaultUsablePrefix();
          return {
            prefix: _prefix,
            iconName: byAlias(_prefix, _icon) || _icon
          };
        }
      }
    }, api = {
      noAuto,
      config,
      dom,
      parse,
      library,
      findIconDefinition,
      toHtml
    }, autoReplace = function() {
      var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
      (Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg && api.dom.i2svg({
        node: autoReplaceSvgRoot
      });
    };
    function domVariants(val, abstractCreator) {
      return Object.defineProperty(val, "abstract", {
        get: abstractCreator
      }), Object.defineProperty(val, "html", {
        get: function() {
          return val.abstract.map(function(a) {
            return toHtml(a);
          });
        }
      }), Object.defineProperty(val, "node", {
        get: function() {
          if (!!IS_DOM) {
            var container = DOCUMENT.createElement("div");
            return container.innerHTML = val.html, container.children;
          }
        }
      }), val;
    }
    function asIcon(_ref2) {
      var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
      if (transformIsMeaningful(transform) && main.found && !mask.found) {
        var width = main.width, height = main.height, offset = {
          x: width / height / 2,
          y: 0.5
        };
        attributes.style = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles2), {}, {
          "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
        }));
      }
      return [{
        tag: "svg",
        attributes,
        children
      }];
    }
    function asSymbol(_ref2) {
      var prefix = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol, id = symbol === !0 ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
      return [{
        tag: "svg",
        attributes: {
          style: "display: none;"
        },
        children: [{
          tag: "symbol",
          attributes: _objectSpread2$1(_objectSpread2$1({}, attributes), {}, {
            id
          }),
          children
        }]
      }];
    }
    function makeInlineSvgAbstract(params) {
      var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? !1 : _params$watchable, _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height, isUploadedIcon = prefix === "fak", attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c5) {
        return extra.classes.indexOf(c5) === -1;
      }).filter(function(c5) {
        return c5 !== "" || !!c5;
      }).concat(extra.classes).join(" "), content = {
        children: [],
        attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
          "data-prefix": prefix,
          "data-icon": iconName,
          class: attrClass,
          role: extra.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(width, " ").concat(height)
        })
      }, uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
        width: "".concat(width / height * 16 * 0.0625, "em")
      } : {};
      watchable && (content.attributes[DATA_FA_I2SVG] = ""), title && (content.children.push({
        tag: "title",
        attributes: {
          id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      }), delete content.attributes.title);
      var args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
        prefix,
        iconName,
        main,
        mask,
        maskId,
        transform,
        symbol,
        styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
      }), _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
        children: [],
        attributes: {}
      } : callProvided("generateAbstractIcon", args) || {
        children: [],
        attributes: {}
      }, children = _ref22.children, attributes = _ref22.attributes;
      return args.children = children, args.attributes = attributes, symbol ? asSymbol(args) : asIcon(args);
    }
    function makeLayersTextAbstract(params) {
      var content = params.content, width = params.width, height = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? !1 : _params$watchable2, attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
        title
      } : {}), {}, {
        class: extra.classes.join(" ")
      });
      watchable && (attributes[DATA_FA_I2SVG] = "");
      var styles2 = _objectSpread2$1({}, extra.styles);
      transformIsMeaningful(transform) && (styles2.transform = transformForCss({
        transform,
        startCentered: !0,
        width,
        height
      }), styles2["-webkit-transform"] = styles2.transform);
      var styleString = joinStyles(styles2);
      styleString.length > 0 && (attributes.style = styleString);
      var val = [];
      return val.push({
        tag: "span",
        attributes,
        children: [content]
      }), title && val.push({
        tag: "span",
        attributes: {
          class: "sr-only"
        },
        children: [title]
      }), val;
    }
    function makeLayersCounterAbstract(params) {
      var content = params.content, title = params.title, extra = params.extra, attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
        title
      } : {}), {}, {
        class: extra.classes.join(" ")
      }), styleString = joinStyles(extra.styles);
      styleString.length > 0 && (attributes.style = styleString);
      var val = [];
      return val.push({
        tag: "span",
        attributes,
        children: [content]
      }), title && val.push({
        tag: "span",
        attributes: {
          class: "sr-only"
        },
        children: [title]
      }), val;
    }
    var styles$1$1 = namespace.styles;
    function asFoundIcon(icon2) {
      var width = icon2[0], height = icon2[1], _icon$slice = icon2.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0], element = null;
      return Array.isArray(vectorData) ? element = {
        tag: "g",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: "currentColor",
            d: vectorData[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: "currentColor",
            d: vectorData[1]
          }
        }]
      } : element = {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: vectorData
        }
      }, {
        found: !0,
        width,
        height,
        icon: element
      };
    }
    var missingIconResolutionMixin = {
      found: !1,
      width: 512,
      height: 512
    };
    function maybeNotifyMissing(iconName, prefix) {
      !PRODUCTION$1 && !config.showMissingIcons && iconName && console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
    }
    function findIcon(iconName, prefix) {
      var givenPrefix = prefix;
      return prefix === "fa" && config.styleDefault !== null && (prefix = getDefaultUsablePrefix()), new Promise(function(resolve, reject) {
        if (callProvided("missingIconAbstract"), givenPrefix === "fa") {
          var shim = byOldName(iconName) || {};
          iconName = shim.iconName || iconName, prefix = shim.prefix || prefix;
        }
        if (iconName && prefix && styles$1$1[prefix] && styles$1$1[prefix][iconName]) {
          var icon2 = styles$1$1[prefix][iconName];
          return resolve(asFoundIcon(icon2));
        }
        maybeNotifyMissing(iconName, prefix), resolve(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, {
          icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
        }));
      });
    }
    var noop$1 = function() {
    }, p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
      mark: noop$1,
      measure: noop$1
    }, preamble = 'FA "6.2.1"', begin = function(name) {
      return p.mark("".concat(preamble, " ").concat(name, " begins")), function() {
        return end(name);
      };
    }, end = function(name) {
      p.mark("".concat(preamble, " ").concat(name, " ends")), p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
    }, perf = {
      begin,
      end
    }, noop$2 = function() {
    };
    function isWatched(node) {
      var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
      return typeof i2svg == "string";
    }
    function hasPrefixAndIcon(node) {
      var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null, icon2 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
      return prefix && icon2;
    }
    function hasBeenReplaced(node) {
      return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
    }
    function getMutator() {
      if (config.autoReplaceSvg === !0)
        return mutators.replace;
      var mutator = mutators[config.autoReplaceSvg];
      return mutator || mutators.replace;
    }
    function createElementNS(tag) {
      return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
    }
    function createElement(tag) {
      return DOCUMENT.createElement(tag);
    }
    function convertSVG(abstractObj) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
      if (typeof abstractObj == "string")
        return DOCUMENT.createTextNode(abstractObj);
      var tag = ceFn(abstractObj.tag);
      Object.keys(abstractObj.attributes || []).forEach(function(key) {
        tag.setAttribute(key, abstractObj.attributes[key]);
      });
      var children = abstractObj.children || [];
      return children.forEach(function(child) {
        tag.appendChild(convertSVG(child, {
          ceFn
        }));
      }), tag;
    }
    function nodeAsComment(node) {
      var comment = " ".concat(node.outerHTML, " ");
      return comment = "".concat(comment, "Font Awesome fontawesome.com "), comment;
    }
    var mutators = {
      replace: function(mutation) {
        var node = mutation[0];
        if (node.parentNode)
          if (mutation[1].forEach(function(abstract) {
            node.parentNode.insertBefore(convertSVG(abstract), node);
          }), node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
            var comment = DOCUMENT.createComment(nodeAsComment(node));
            node.parentNode.replaceChild(comment, node);
          } else
            node.remove();
      },
      nest: function(mutation) {
        var node = mutation[0], abstract = mutation[1];
        if (~classArray(node).indexOf(config.replacementClass))
          return mutators.replace(mutation);
        var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
        if (delete abstract[0].attributes.id, abstract[0].attributes.class) {
          var splitClasses = abstract[0].attributes.class.split(" ").reduce(function(acc, cls) {
            return cls === config.replacementClass || cls.match(forSvg) ? acc.toSvg.push(cls) : acc.toNode.push(cls), acc;
          }, {
            toNode: [],
            toSvg: []
          });
          abstract[0].attributes.class = splitClasses.toSvg.join(" "), splitClasses.toNode.length === 0 ? node.removeAttribute("class") : node.setAttribute("class", splitClasses.toNode.join(" "));
        }
        var newInnerHTML = abstract.map(function(a) {
          return toHtml(a);
        }).join(`
`);
        node.setAttribute(DATA_FA_I2SVG, ""), node.innerHTML = newInnerHTML;
      }
    };
    function performOperationSync(op) {
      op();
    }
    function perform(mutations, callback) {
      var callbackFunction = typeof callback == "function" ? callback : noop$2;
      if (mutations.length === 0)
        callbackFunction();
      else {
        var frame = performOperationSync;
        config.mutateApproach === MUTATION_APPROACH_ASYNC && (frame = WINDOW.requestAnimationFrame || performOperationSync), frame(function() {
          var mutator = getMutator(), mark = perf.begin("mutate");
          mutations.map(mutator), mark(), callbackFunction();
        });
      }
    }
    var disabled = !1;
    function disableObservation() {
      disabled = !0;
    }
    function enableObservation() {
      disabled = !1;
    }
    var mo = null;
    function observe(options) {
      if (!!MUTATION_OBSERVER && !!config.observeMutations) {
        var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
        mo = new MUTATION_OBSERVER(function(objects) {
          if (!disabled) {
            var defaultPrefix = getDefaultUsablePrefix();
            toArray(objects).forEach(function(mutationRecord) {
              if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0]) && (config.searchPseudoElements && pseudoElementsCallback(mutationRecord.target), treeCallback(mutationRecord.target)), mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements && pseudoElementsCallback(mutationRecord.target.parentNode), mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName))
                if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
                  var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
                  mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix), iconName && mutationRecord.target.setAttribute(DATA_ICON, iconName);
                } else
                  hasBeenReplaced(mutationRecord.target) && nodeCallback(mutationRecord.target);
            });
          }
        }), IS_DOM && mo.observe(observeMutationsRoot, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        });
      }
    }
    function disconnect() {
      !mo || mo.disconnect();
    }
    function styleParser(node) {
      var style = node.getAttribute("style"), val = [];
      return style && (val = style.split(";").reduce(function(acc, style2) {
        var styles2 = style2.split(":"), prop = styles2[0], value = styles2.slice(1);
        return prop && value.length > 0 && (acc[prop] = value.join(":").trim()), acc;
      }, {})), val;
    }
    function classParser(node) {
      var existingPrefix = node.getAttribute("data-prefix"), existingIconName = node.getAttribute("data-icon"), innerText = node.innerText !== void 0 ? node.innerText.trim() : "", val = getCanonicalIcon(classArray(node));
      return val.prefix || (val.prefix = getDefaultUsablePrefix()), existingPrefix && existingIconName && (val.prefix = existingPrefix, val.iconName = existingIconName), val.iconName && val.prefix || (val.prefix && innerText.length > 0 && (val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText))), !val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE && (val.iconName = node.firstChild.data)), val;
    }
    function attributesParser(node) {
      var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
        return acc.name !== "class" && acc.name !== "style" && (acc[attr.name] = attr.value), acc;
      }, {}), title = node.getAttribute("title"), titleId = node.getAttribute("data-fa-title-id");
      return config.autoA11y && (title ? extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId()) : (extraAttributes["aria-hidden"] = "true", extraAttributes.focusable = "false")), extraAttributes;
    }
    function blankMeta() {
      return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: meaninglessTransform,
        symbol: !1,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        extra: {
          classes: [],
          styles: {},
          attributes: {}
        }
      };
    }
    function parseMeta(node) {
      var parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
      }, _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest, extraAttributes = attributesParser(node), pluginMeta = chainHooks("parseNodeAttributes", {}, node), extraStyles = parser.styleParser ? styleParser(node) : [];
      return _objectSpread2$1({
        iconName,
        title: node.getAttribute("title"),
        titleId: node.getAttribute("data-fa-title-id"),
        prefix,
        transform: meaninglessTransform,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: extraClasses,
          styles: extraStyles,
          attributes: extraAttributes
        }
      }, pluginMeta);
    }
    var styles$2$1 = namespace.styles;
    function generateMutation(node) {
      var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
        styleParser: !1
      }) : parseMeta(node);
      return ~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME) ? callProvided("generateLayersText", node, nodeMeta) : callProvided("generateSvgReplacementMutation", node, nodeMeta);
    }
    var knownPrefixes = /* @__PURE__ */ new Set();
    FAMILIES.map(function(family) {
      knownPrefixes.add("fa-".concat(family));
    });
    Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
    Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
    knownPrefixes = _toConsumableArray$1(knownPrefixes);
    function onTree(root) {
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (!IS_DOM)
        return Promise.resolve();
      var htmlClassList = DOCUMENT.documentElement.classList, hclAdd = function(suffix) {
        return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
      }, hclRemove = function(suffix) {
        return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
      }, prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function(f) {
        return "fa-".concat(f);
      }).concat(Object.keys(styles$2$1));
      prefixes2.includes("fa") || prefixes2.push("fa");
      var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map(function(p2) {
        return ".".concat(p2, ":not([").concat(DATA_FA_I2SVG, "])");
      })).join(", ");
      if (prefixesDomQuery.length === 0)
        return Promise.resolve();
      var candidates = [];
      try {
        candidates = toArray(root.querySelectorAll(prefixesDomQuery));
      } catch {
      }
      if (candidates.length > 0)
        hclAdd("pending"), hclRemove("complete");
      else
        return Promise.resolve();
      var mark = perf.begin("onTree"), mutations = candidates.reduce(function(acc, node) {
        try {
          var mutation = generateMutation(node);
          mutation && acc.push(mutation);
        } catch (e) {
          PRODUCTION$1 || e.name === "MissingIcon" && console.error(e);
        }
        return acc;
      }, []);
      return new Promise(function(resolve, reject) {
        Promise.all(mutations).then(function(resolvedMutations) {
          perform(resolvedMutations, function() {
            hclAdd("active"), hclAdd("complete"), hclRemove("pending"), typeof callback == "function" && callback(), mark(), resolve();
          });
        }).catch(function(e) {
          mark(), reject(e);
        });
      });
    }
    function onNode(node) {
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      generateMutation(node).then(function(mutation) {
        mutation && perform([mutation], callback);
      });
    }
    function resolveIcons(next) {
      return function(maybeIconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {}), mask = params.mask;
        return mask && (mask = (mask || {}).icon ? mask : findIconDefinition(mask || {})), next(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, {
          mask
        }));
      };
    }
    var render = function(iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? !1 : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
      if (!!iconDefinition) {
        var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon2 = iconDefinition.icon;
        return domVariants(_objectSpread2$1({
          type: "icon"
        }, iconDefinition), function() {
          return callHooks("beforeDOMElementCreation", {
            iconDefinition,
            params
          }), config.autoA11y && (title ? attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId()) : (attributes["aria-hidden"] = "true", attributes.focusable = "false")), makeInlineSvgAbstract({
            icons: {
              main: asFoundIcon(icon2),
              mask: mask ? asFoundIcon(mask.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
              }
            },
            prefix,
            iconName,
            transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
            symbol,
            title,
            maskId,
            titleId,
            extra: {
              attributes,
              styles: styles2,
              classes
            }
          });
        });
      }
    }, ReplaceElements = {
      mixout: function() {
        return {
          icon: resolveIcons(render)
        };
      },
      hooks: function() {
        return {
          mutationObserverCallbacks: function(accumulator) {
            return accumulator.treeCallback = onTree, accumulator.nodeCallback = onNode, accumulator;
          }
        };
      },
      provides: function(providers$$1) {
        providers$$1.i2svg = function(params) {
          var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
          } : _params$callback;
          return onTree(node, callback);
        }, providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
          var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
          return new Promise(function(resolve, reject) {
            Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
              found: !1,
              width: 512,
              height: 512,
              icon: {}
            })]).then(function(_ref2) {
              var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
              resolve([node, makeInlineSvgAbstract({
                icons: {
                  main,
                  mask: mask2
                },
                prefix,
                iconName,
                transform,
                symbol,
                maskId,
                title,
                titleId,
                extra,
                watchable: !0
              })]);
            }).catch(reject);
          });
        }, providers$$1.generateAbstractIcon = function(_ref3) {
          var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles, styleString = joinStyles(styles2);
          styleString.length > 0 && (attributes.style = styleString);
          var nextChild;
          return transformIsMeaningful(transform) && (nextChild = callProvided("generateAbstractTransformGrouping", {
            main,
            transform,
            containerWidth: main.width,
            iconWidth: main.width
          })), children.push(nextChild || main.icon), {
            children,
            attributes
          };
        };
      }
    }, Layers = {
      mixout: function() {
        return {
          layer: function(assembler) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
            return domVariants({
              type: "layer"
            }, function() {
              callHooks("beforeDOMElementCreation", {
                assembler,
                params
              });
              var children = [];
              return assembler(function(args) {
                Array.isArray(args) ? args.map(function(a) {
                  children = children.concat(a.abstract);
                }) : children = children.concat(args.abstract);
              }), [{
                tag: "span",
                attributes: {
                  class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray$1(classes)).join(" ")
                },
                children
              }];
            });
          }
        };
      }
    }, LayersCounter = {
      mixout: function() {
        return {
          counter: function(content) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
            return domVariants({
              type: "counter",
              content
            }, function() {
              return callHooks("beforeDOMElementCreation", {
                content,
                params
              }), makeLayersCounterAbstract({
                content: content.toString(),
                title,
                extra: {
                  attributes,
                  styles: styles2,
                  classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray$1(classes))
                }
              });
            });
          }
        };
      }
    }, LayersText = {
      mixout: function() {
        return {
          text: function(content) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
            return domVariants({
              type: "text",
              content
            }, function() {
              return callHooks("beforeDOMElementCreation", {
                content,
                params
              }), makeLayersTextAbstract({
                content,
                transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
                title,
                extra: {
                  attributes,
                  styles: styles2,
                  classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray$1(classes))
                }
              });
            });
          }
        };
      },
      provides: function(providers$$1) {
        providers$$1.generateLayersText = function(node, nodeMeta) {
          var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra, width = null, height = null;
          if (IS_IE) {
            var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10), boundingClientRect = node.getBoundingClientRect();
            width = boundingClientRect.width / computedFontSize, height = boundingClientRect.height / computedFontSize;
          }
          return config.autoA11y && !title && (extra.attributes["aria-hidden"] = "true"), Promise.resolve([node, makeLayersTextAbstract({
            content: node.innerHTML,
            width,
            height,
            transform,
            title,
            extra,
            watchable: !0
          })]);
        };
      }
    }, CLEAN_CONTENT_PATTERN = new RegExp('"', "ug"), SECONDARY_UNICODE_RANGE = [1105920, 1112319];
    function hexValueFromContent(content) {
      var cleaned = content.replace(CLEAN_CONTENT_PATTERN, ""), codePoint = codePointAt(cleaned, 0), isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1], isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : !1;
      return {
        value: toHex(isDoubled ? cleaned[0] : cleaned),
        isSecondary: isPrependTen || isDoubled
      };
    }
    function replaceForPosition(node, position) {
      var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
      return new Promise(function(resolve, reject) {
        if (node.getAttribute(pendingAttribute) !== null)
          return resolve();
        var children = toArray(node.children), alreadyProcessedPseudoElement = children.filter(function(c5) {
          return c5.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
        })[0], styles2 = WINDOW.getComputedStyle(node, position), fontFamily = styles2.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN), fontWeight = styles2.getPropertyValue("font-weight"), content = styles2.getPropertyValue("content");
        if (alreadyProcessedPseudoElement && !fontFamily)
          return node.removeChild(alreadyProcessedPseudoElement), resolve();
        if (fontFamily && content !== "none" && content !== "") {
          var _content = styles2.getPropertyValue("content"), family = ~["Sharp"].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC, prefix = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight], _hexValueFromContent = hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary, isV4 = fontFamily[0].startsWith("FontAwesome"), iconName = byUnicode(prefix, hexValue), iconIdentifier = iconName;
          if (isV4) {
            var iconName4 = byOldUnicode(hexValue);
            iconName4.iconName && iconName4.prefix && (iconName = iconName4.iconName, prefix = iconName4.prefix);
          }
          if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
            node.setAttribute(pendingAttribute, iconIdentifier), alreadyProcessedPseudoElement && node.removeChild(alreadyProcessedPseudoElement);
            var meta2 = blankMeta(), extra = meta2.extra;
            extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position, findIcon(iconName, prefix).then(function(main) {
              var abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta2), {}, {
                icons: {
                  main,
                  mask: emptyCanonicalIcon()
                },
                prefix,
                iconName: iconIdentifier,
                extra,
                watchable: !0
              })), element = DOCUMENT.createElement("svg");
              position === "::before" ? node.insertBefore(element, node.firstChild) : node.appendChild(element), element.outerHTML = abstract.map(function(a) {
                return toHtml(a);
              }).join(`
`), node.removeAttribute(pendingAttribute), resolve();
            }).catch(reject);
          } else
            resolve();
        } else
          resolve();
      });
    }
    function replace(node) {
      return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
    }
    function processable(node) {
      return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
    }
    function searchPseudoElements(root) {
      if (!!IS_DOM)
        return new Promise(function(resolve, reject) {
          var operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace), end2 = perf.begin("searchPseudoElements");
          disableObservation(), Promise.all(operations).then(function() {
            end2(), enableObservation(), resolve();
          }).catch(function() {
            end2(), enableObservation(), reject();
          });
        });
    }
    var PseudoElements = {
      hooks: function() {
        return {
          mutationObserverCallbacks: function(accumulator) {
            return accumulator.pseudoElementsCallback = searchPseudoElements, accumulator;
          }
        };
      },
      provides: function(providers$$1) {
        providers$$1.pseudoElements2svg = function(params) {
          var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
          config.searchPseudoElements && searchPseudoElements(node);
        };
      }
    }, _unwatched = !1, MutationObserver$1 = {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              disableObservation(), _unwatched = !0;
            }
          }
        };
      },
      hooks: function() {
        return {
          bootstrap: function() {
            observe(chainHooks("mutationObserverCallbacks", {}));
          },
          noAuto: function() {
            disconnect();
          },
          watch: function(params) {
            var observeMutationsRoot = params.observeMutationsRoot;
            _unwatched ? enableObservation() : observe(chainHooks("mutationObserverCallbacks", {
              observeMutationsRoot
            }));
          }
        };
      }
    }, parseTransformString = function(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
      };
      return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
        var parts = n.toLowerCase().split("-"), first = parts[0], rest = parts.slice(1).join("-");
        if (first && rest === "h")
          return acc.flipX = !0, acc;
        if (first && rest === "v")
          return acc.flipY = !0, acc;
        if (rest = parseFloat(rest), isNaN(rest))
          return acc;
        switch (first) {
          case "grow":
            acc.size = acc.size + rest;
            break;
          case "shrink":
            acc.size = acc.size - rest;
            break;
          case "left":
            acc.x = acc.x - rest;
            break;
          case "right":
            acc.x = acc.x + rest;
            break;
          case "up":
            acc.y = acc.y - rest;
            break;
          case "down":
            acc.y = acc.y + rest;
            break;
          case "rotate":
            acc.rotate = acc.rotate + rest;
            break;
        }
        return acc;
      }, transform);
    }, PowerTransforms = {
      mixout: function() {
        return {
          parse: {
            transform: function(transformString) {
              return parseTransformString(transformString);
            }
          }
        };
      },
      hooks: function() {
        return {
          parseNodeAttributes: function(accumulator, node) {
            var transformString = node.getAttribute("data-fa-transform");
            return transformString && (accumulator.transform = parseTransformString(transformString)), accumulator;
          }
        };
      },
      provides: function(providers2) {
        providers2.generateAbstractTransformGrouping = function(_ref2) {
          var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth, outer = {
            transform: "translate(".concat(containerWidth / 2, " 256)")
          }, innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") "), innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") "), innerRotate = "rotate(".concat(transform.rotate, " 0 0)"), inner = {
            transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
          }, path = {
            transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
          }, operations = {
            outer,
            inner,
            path
          };
          return {
            tag: "g",
            attributes: _objectSpread2$1({}, operations.outer),
            children: [{
              tag: "g",
              attributes: _objectSpread2$1({}, operations.inner),
              children: [{
                tag: main.icon.tag,
                children: main.icon.children,
                attributes: _objectSpread2$1(_objectSpread2$1({}, main.icon.attributes), operations.path)
              }]
            }]
          };
        };
      }
    }, ALL_SPACE = {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%"
    };
    function fillBlack(abstract) {
      var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return abstract.attributes && (abstract.attributes.fill || force) && (abstract.attributes.fill = "black"), abstract;
    }
    function deGroup(abstract) {
      return abstract.tag === "g" ? abstract.children : [abstract];
    }
    var Masks = {
      hooks: function() {
        return {
          parseNodeAttributes: function(accumulator, node) {
            var maskData = node.getAttribute("data-fa-mask"), mask = maskData ? getCanonicalIcon(maskData.split(" ").map(function(i) {
              return i.trim();
            })) : emptyCanonicalIcon();
            return mask.prefix || (mask.prefix = getDefaultUsablePrefix()), accumulator.mask = mask, accumulator.maskId = node.getAttribute("data-fa-mask-id"), accumulator;
          }
        };
      },
      provides: function(providers2) {
        providers2.generateAbstractMask = function(_ref2) {
          var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform, mainWidth = main.width, mainPath = main.icon, maskWidth = mask.width, maskPath = mask.icon, trans = transformForSvg({
            transform,
            containerWidth: maskWidth,
            iconWidth: mainWidth
          }), maskRect = {
            tag: "rect",
            attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
              fill: "white"
            })
          }, maskInnerGroupChildrenMixin = mainPath.children ? {
            children: mainPath.children.map(fillBlack)
          } : {}, maskInnerGroup = {
            tag: "g",
            attributes: _objectSpread2$1({}, trans.inner),
            children: [fillBlack(_objectSpread2$1({
              tag: mainPath.tag,
              attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
            }, maskInnerGroupChildrenMixin))]
          }, maskOuterGroup = {
            tag: "g",
            attributes: _objectSpread2$1({}, trans.outer),
            children: [maskInnerGroup]
          }, maskId = "mask-".concat(explicitMaskId || nextUniqueId()), clipId = "clip-".concat(explicitMaskId || nextUniqueId()), maskTag = {
            tag: "mask",
            attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
              id: maskId,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [maskRect, maskOuterGroup]
          }, defs = {
            tag: "defs",
            children: [{
              tag: "clipPath",
              attributes: {
                id: clipId
              },
              children: deGroup(maskPath)
            }, maskTag]
          };
          return children.push(defs, {
            tag: "rect",
            attributes: _objectSpread2$1({
              fill: "currentColor",
              "clip-path": "url(#".concat(clipId, ")"),
              mask: "url(#".concat(maskId, ")")
            }, ALL_SPACE)
          }), {
            children,
            attributes
          };
        };
      }
    }, MissingIconIndicator = {
      provides: function(providers2) {
        var reduceMotion = !1;
        WINDOW.matchMedia && (reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches), providers2.missingIconAbstract = function() {
          var gChildren = [], FILL = {
            fill: "currentColor"
          }, ANIMATION_BASE = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
          };
          gChildren.push({
            tag: "path",
            attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
          });
          var OPACITY_ANIMATE = _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
            attributeName: "opacity"
          }), dot = {
            tag: "circle",
            attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
              cx: "256",
              cy: "364",
              r: "28"
            }),
            children: []
          };
          return reduceMotion || dot.children.push({
            tag: "animate",
            attributes: _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
              attributeName: "r",
              values: "28;14;28;28;14;28;"
            })
          }, {
            tag: "animate",
            attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
              values: "1;0;1;1;0;1;"
            })
          }), gChildren.push(dot), gChildren.push({
            tag: "path",
            attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
              opacity: "1",
              d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }),
            children: reduceMotion ? [] : [{
              tag: "animate",
              attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
                values: "1;0;0;0;0;1;"
              })
            }]
          }), reduceMotion || gChildren.push({
            tag: "path",
            attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
              opacity: "0",
              d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }),
            children: [{
              tag: "animate",
              attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
                values: "0;0;1;1;0;0;"
              })
            }]
          }), {
            tag: "g",
            attributes: {
              class: "missing"
            },
            children: gChildren
          };
        };
      }
    }, SvgSymbols = {
      hooks: function() {
        return {
          parseNodeAttributes: function(accumulator, node) {
            var symbolData = node.getAttribute("data-fa-symbol"), symbol = symbolData === null ? !1 : symbolData === "" ? !0 : symbolData;
            return accumulator.symbol = symbol, accumulator;
          }
        };
      }
    }, plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
    registerPlugins(plugins, {
      mixoutsTo: api
    });
    api.noAuto;
    api.config;
    api.library;
    api.dom;
    var parse$1 = api.parse;
    api.findIconDefinition;
    api.toHtml;
    var icon = api.icon;
    api.layer;
    api.text;
    api.counter;
    var propTypesExports = {}, propTypes = {
      get exports() {
        return propTypesExports;
      },
      set exports(v) {
        propTypesExports = v;
      }
    }, reactIsExports = {}, reactIs = {
      get exports() {
        return reactIsExports;
      },
      set exports(v) {
        reactIsExports = v;
      }
    };
    var reactIs_development = {};
    var hasRequiredReactIs_development;
    function requireReactIs_development() {
      return hasRequiredReactIs_development || (hasRequiredReactIs_development = 1, function() {
        var hasSymbol = typeof Symbol == "function" && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object == "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment2 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
        function isAsyncMode(object) {
          return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        reactIs_development.AsyncMode = AsyncMode, reactIs_development.ConcurrentMode = ConcurrentMode, reactIs_development.ContextConsumer = ContextConsumer, reactIs_development.ContextProvider = ContextProvider, reactIs_development.Element = Element, reactIs_development.ForwardRef = ForwardRef, reactIs_development.Fragment = Fragment2, reactIs_development.Lazy = Lazy, reactIs_development.Memo = Memo, reactIs_development.Portal = Portal, reactIs_development.Profiler = Profiler, reactIs_development.StrictMode = StrictMode, reactIs_development.Suspense = Suspense, reactIs_development.isAsyncMode = isAsyncMode, reactIs_development.isConcurrentMode = isConcurrentMode, reactIs_development.isContextConsumer = isContextConsumer, reactIs_development.isContextProvider = isContextProvider, reactIs_development.isElement = isElement, reactIs_development.isForwardRef = isForwardRef, reactIs_development.isFragment = isFragment, reactIs_development.isLazy = isLazy, reactIs_development.isMemo = isMemo, reactIs_development.isPortal = isPortal, reactIs_development.isProfiler = isProfiler, reactIs_development.isStrictMode = isStrictMode, reactIs_development.isSuspense = isSuspense, reactIs_development.isValidElementType = isValidElementType, reactIs_development.typeOf = typeOf;
      }()), reactIs_development;
    }
    var hasRequiredReactIs;
    function requireReactIs() {
      return hasRequiredReactIs || (hasRequiredReactIs = 1, function(module3) {
        module3.exports = requireReactIs_development();
      }(reactIs)), reactIsExports;
    }
    var objectAssign, hasRequiredObjectAssign;
    function requireObjectAssign() {
      if (hasRequiredObjectAssign)
        return objectAssign;
      hasRequiredObjectAssign = 1;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val == null)
          throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign)
            return !1;
          var test1 = new String("abc");
          if (test1[5] = "de", Object.getOwnPropertyNames(test1)[0] === "5")
            return !1;
          for (var test2 = {}, i = 0; i < 10; i++)
            test2["_" + String.fromCharCode(i)] = i;
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789")
            return !1;
          var test3 = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          }), Object.keys(Object.assign({}, test3)).join("") === "abcdefghijklmnopqrst";
        } catch {
          return !1;
        }
      }
      return objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
        for (var from, to = toObject(target), symbols, s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from)
            hasOwnProperty.call(from, key) && (to[key] = from[key]);
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++)
              propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
          }
        }
        return to;
      }, objectAssign;
    }
    var ReactPropTypesSecret_1, hasRequiredReactPropTypesSecret;
    function requireReactPropTypesSecret() {
      if (hasRequiredReactPropTypesSecret)
        return ReactPropTypesSecret_1;
      hasRequiredReactPropTypesSecret = 1;
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      return ReactPropTypesSecret_1 = ReactPropTypesSecret, ReactPropTypesSecret_1;
    }
    var has, hasRequiredHas;
    function requireHas() {
      return hasRequiredHas || (hasRequiredHas = 1, has = Function.call.bind(Object.prototype.hasOwnProperty)), has;
    }
    var checkPropTypes_1, hasRequiredCheckPropTypes;
    function requireCheckPropTypes() {
      if (hasRequiredCheckPropTypes)
        return checkPropTypes_1;
      hasRequiredCheckPropTypes = 1;
      var printWarning = function() {
      }, ReactPropTypesSecret = requireReactPropTypesSecret(), loggedTypeFailures = {}, has2 = requireHas();
      printWarning = function(text) {
        var message = "Warning: " + text;
        typeof console < "u" && console.error(message);
        try {
          throw new Error(message);
        } catch {
        }
      };
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        for (var typeSpecName in typeSpecs)
          if (has2(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] != "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                throw err.name = "Invariant Violation", err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error) && printWarning(
              (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            ), error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = !0;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack ?? "")
              );
            }
          }
      }
      return checkPropTypes.resetWarningCache = function() {
        loggedTypeFailures = {};
      }, checkPropTypes_1 = checkPropTypes, checkPropTypes_1;
    }
    var factoryWithTypeCheckers, hasRequiredFactoryWithTypeCheckers;
    function requireFactoryWithTypeCheckers() {
      if (hasRequiredFactoryWithTypeCheckers)
        return factoryWithTypeCheckers;
      hasRequiredFactoryWithTypeCheckers = 1;
      var ReactIs2 = requireReactIs(), assign = requireObjectAssign(), ReactPropTypesSecret = requireReactPropTypesSecret(), has2 = requireHas(), checkPropTypes = requireCheckPropTypes(), printWarning = function() {
      };
      printWarning = function(text) {
        var message = "Warning: " + text;
        typeof console < "u" && console.error(message);
        try {
          throw new Error(message);
        } catch {
        }
      };
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      return factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess2) {
        var ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn == "function")
            return iteratorFn;
        }
        var ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
        }
        function PropTypeError(message, data) {
          this.message = message, this.data = data && typeof data == "object" ? data : {}, this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0;
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess2) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw err.name = "Invariant Violation", err;
              } else if (typeof console < "u") {
                var cacheKey = componentName + ":" + propName;
                !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                ), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
              }
            }
            return props[propName] == null ? isRequired ? props[propName] === null ? new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`.")) : new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`.")) : null : validate(props, propName, componentName, location, propFullName);
          }
          var chainedCheckType = checkType.bind(null, !1);
          return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName], propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker != "function")
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error)
                return error;
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs2.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS, actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues))
            return arguments.length > 1 ? printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            ) : printWarning("Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull;
          function validate(props, propName, componentName, location, propFullName) {
            for (var propValue = props[propName], i = 0; i < expectedValues.length; i++)
              if (is(propValue, expectedValues[i]))
                return null;
            var valuesString = JSON.stringify(expectedValues, function(key, value) {
              var type = getPreciseType(value);
              return type === "symbol" ? String(value) : value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker != "function")
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            var propValue = props[propName], propType = getPropType(propValue);
            if (propType !== "object")
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            for (var key in propValue)
              if (has2(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error)
                  return error;
              }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers))
            return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker != "function")
              return printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
              ), emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            for (var expectedTypes = [], i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2], checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null)
                return null;
              checkerResult.data && has2(checkerResult.data, "expectedType") && expectedTypes.push(checkerResult.data.expectedType);
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName], propType = getPropType(propValue);
            if (propType !== "object")
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker != "function")
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error)
                return error;
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName], propType = getPropType(propValue);
            if (propType !== "object")
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has2(shapeTypes, key) && typeof checker != "function")
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              if (!checker)
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error)
                return error;
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return !0;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue))
                return propValue.every(isNode);
              if (propValue === null || isValidElement(propValue))
                return !0;
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue), step;
                if (iteratorFn !== propValue.entries) {
                  for (; !(step = iterator.next()).done; )
                    if (!isNode(step.value))
                      return !1;
                } else
                  for (; !(step = iterator.next()).done; ) {
                    var entry2 = step.value;
                    if (entry2 && !isNode(entry2[1]))
                      return !1;
                  }
              } else
                return !1;
              return !0;
            default:
              return !1;
          }
        }
        function isSymbol(propType, propValue) {
          return propType === "symbol" ? !0 : propValue ? propValue["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && propValue instanceof Symbol : !1;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue > "u" || propValue === null)
            return "" + propValue;
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date)
              return "date";
            if (propValue instanceof RegExp)
              return "regexp";
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          return !propValue.constructor || !propValue.constructor.name ? ANONYMOUS : propValue.constructor.name;
        }
        return ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
      }, factoryWithTypeCheckers;
    }
    ReactIs = requireReactIs(), throwOnDirectAccess = !0, propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    var ReactIs, throwOnDirectAccess;
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _typeof(obj) {
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {}, sourceKeys = Object.keys(source), key, i;
      for (i = 0; i < sourceKeys.length; i++)
        key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded), key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++)
          key = sourceSymbolKeys[i], !(excluded.indexOf(key) >= 0) && (!Object.prototype.propertyIsEnumerable.call(source, key) || (target[key] = source[key]));
      }
      return target;
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!!o) {
        if (typeof o == "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
    }
    function _arrayLikeToArray(arr, len) {
      (len == null || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function classList(props) {
      var _classes, beat = props.beat, fade = props.fade, beatFade = props.beatFade, bounce = props.bounce, shake = props.shake, flash = props.flash, spin = props.spin, spinPulse = props.spinPulse, spinReverse = props.spinReverse, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse = props.inverse, border = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull, classes = (_classes = {
        "fa-beat": beat,
        "fa-fade": fade,
        "fa-beat-fade": beatFade,
        "fa-bounce": bounce,
        "fa-shake": shake,
        "fa-flash": flash,
        "fa-spin": spin,
        "fa-spin-reverse": spinReverse,
        "fa-spin-pulse": spinPulse,
        "fa-pulse": pulse,
        "fa-fw": fixedWidth,
        "fa-inverse": inverse,
        "fa-border": border,
        "fa-li": listItem,
        "fa-flip": flip === !0,
        "fa-flip-horizontal": flip === "horizontal" || flip === "both",
        "fa-flip-vertical": flip === "vertical" || flip === "both"
      }, _defineProperty(_classes, "fa-".concat(size), typeof size < "u" && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation < "u" && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull < "u" && pull !== null), _defineProperty(_classes, "fa-swap-opacity", props.swapOpacity), _classes);
      return Object.keys(classes).map(function(key) {
        return classes[key] ? key : null;
      }).filter(function(key) {
        return key;
      });
    }
    function _isNumerical(obj) {
      return obj = obj - 0, obj === obj;
    }
    function camelize(string) {
      return _isNumerical(string) ? string : (string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : "";
      }), string.substr(0, 1).toLowerCase() + string.substr(1));
    }
    var _excluded = ["style"];
    function capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
    function styleToObject(style) {
      return style.split(";").map(function(s) {
        return s.trim();
      }).filter(function(s) {
        return s;
      }).reduce(function(acc, pair) {
        var i = pair.indexOf(":"), prop = camelize(pair.slice(0, i)), value = pair.slice(i + 1).trim();
        return prop.startsWith("webkit") ? acc[capitalize(prop)] = value : acc[prop] = value, acc;
      }, {});
    }
    function convert(createElement2, element) {
      var extraProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (typeof element == "string")
        return element;
      var children = (element.children || []).map(function(child) {
        return convert(createElement2, child);
      }), mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
        var val = element.attributes[key];
        switch (key) {
          case "class":
            acc.attrs.className = val, delete element.attributes.class;
            break;
          case "style":
            acc.attrs.style = styleToObject(val);
            break;
          default:
            key.indexOf("aria-") === 0 || key.indexOf("data-") === 0 ? acc.attrs[key.toLowerCase()] = val : acc.attrs[camelize(key)] = val;
        }
        return acc;
      }, {
        attrs: {}
      }), _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties(extraProps, _excluded);
      return mixins.attrs.style = _objectSpread2(_objectSpread2({}, mixins.attrs.style), existingStyle), createElement2.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
    }
    var PRODUCTION = !1;
    try {
      PRODUCTION = !1;
    } catch {
    }
    function log() {
      if (!PRODUCTION && console && typeof console.error == "function") {
        var _console;
        (_console = console).error.apply(_console, arguments);
      }
    }
    function normalizeIconArgs(icon2) {
      if (icon2 && _typeof(icon2) === "object" && icon2.prefix && icon2.iconName && icon2.icon)
        return icon2;
      if (parse$1.icon)
        return parse$1.icon(icon2);
      if (icon2 === null)
        return null;
      if (icon2 && _typeof(icon2) === "object" && icon2.prefix && icon2.iconName)
        return icon2;
      if (Array.isArray(icon2) && icon2.length === 2)
        return {
          prefix: icon2[0],
          iconName: icon2[1]
        };
      if (typeof icon2 == "string")
        return {
          prefix: "fas",
          iconName: icon2
        };
    }
    function objectWithKey(key, value) {
      return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
    }
    var FontAwesomeIcon2 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
      var iconArgs = props.icon, maskArgs = props.mask, symbol = props.symbol, className = props.className, title = props.title, titleId = props.titleId, maskId = props.maskId, iconLookup = normalizeIconArgs(iconArgs), classes = objectWithKey("classes", [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(" ")))), transform = objectWithKey("transform", typeof props.transform == "string" ? parse$1.transform(props.transform) : props.transform), mask = objectWithKey("mask", normalizeIconArgs(maskArgs)), renderedIcon = icon(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
        symbol,
        title,
        titleId,
        maskId
      }));
      if (!renderedIcon)
        return log("Could not find icon", iconLookup), null;
      var abstract = renderedIcon.abstract, extraProps = {
        ref
      };
      return Object.keys(props).forEach(function(key) {
        FontAwesomeIcon2.defaultProps.hasOwnProperty(key) || (extraProps[key] = props[key]);
      }), convertCurry(abstract[0], extraProps);
    });
    FontAwesomeIcon2.displayName = "FontAwesomeIcon";
    FontAwesomeIcon2.propTypes = {
      beat: propTypesExports.bool,
      border: propTypesExports.bool,
      beatFade: propTypesExports.bool,
      bounce: propTypesExports.bool,
      className: propTypesExports.string,
      fade: propTypesExports.bool,
      flash: propTypesExports.bool,
      mask: propTypesExports.oneOfType([propTypesExports.object, propTypesExports.array, propTypesExports.string]),
      maskId: propTypesExports.string,
      fixedWidth: propTypesExports.bool,
      inverse: propTypesExports.bool,
      flip: propTypesExports.oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: propTypesExports.oneOfType([propTypesExports.object, propTypesExports.array, propTypesExports.string]),
      listItem: propTypesExports.bool,
      pull: propTypesExports.oneOf(["right", "left"]),
      pulse: propTypesExports.bool,
      rotation: propTypesExports.oneOf([0, 90, 180, 270]),
      shake: propTypesExports.bool,
      size: propTypesExports.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: propTypesExports.bool,
      spinPulse: propTypesExports.bool,
      spinReverse: propTypesExports.bool,
      symbol: propTypesExports.oneOfType([propTypesExports.bool, propTypesExports.string]),
      title: propTypesExports.string,
      titleId: propTypesExports.string,
      transform: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.object]),
      swapOpacity: propTypesExports.bool
    };
    FontAwesomeIcon2.defaultProps = {
      border: !1,
      className: "",
      mask: null,
      maskId: null,
      fixedWidth: !1,
      inverse: !1,
      flip: !1,
      icon: null,
      listItem: !1,
      pull: null,
      pulse: !1,
      rotation: null,
      size: null,
      spin: !1,
      spinPulse: !1,
      spinReverse: !1,
      beat: !1,
      fade: !1,
      beatFade: !1,
      bounce: !1,
      shake: !1,
      symbol: !1,
      title: "",
      titleId: null,
      transform: null,
      swapOpacity: !1
    };
    var convertCurry = convert.bind(null, React.createElement), brandColors = {
      GALICIA: {
        primary: "#FA6400",
        dark: "#C85000",
        light: "#FFE2CE",
        aciton: "#A84308"
      },
      EMINENT: {
        primary: "#003973",
        dark: "#002041",
        light: "#D8E8F8",
        aciton: "#194D81"
      },
      MOVE: {
        primary: "#8A50F7",
        dark: "#530ADB",
        light: "#E2D2FF",
        aciton: "#4E19B1"
      }
    }, commonPalette = {
      white: "#FFFFFF",
      "grey-20": "#F4F4F4",
      "grey-40": "#BEBEBE",
      "grey-60": "#6A6A6A",
      "grey-80": "#2B2B2B",
      black: "#000000",
      link: "#0E7BC4",
      info: "#2970BC",
      success: "#258825",
      warning: "#E99D09",
      error: "#C51111"
    }, toAlphaHex = {
      10: "1A",
      20: "33",
      30: "4D",
      40: "66",
      50: "80",
      60: "99",
      70: "B3",
      80: "CC",
      90: "E6",
      100: "FF"
    }, c4 = function(colorDefinition) {
      var type = colorDefinition.type, brand = colorDefinition.brand, alpha = colorDefinition.alpha, brandValue = brand || "GALICIA", alphaValue = alpha || 100;
      return type == "primary" || type == "dark" || type == "light" || type == "action" ? type == "action" ? "".concat(brandColors[brandValue]) : "".concat(brandColors[brandValue][type]).concat(toAlphaHex[alphaValue]) : "".concat(commonPalette[type]).concat(toAlphaHex[alphaValue]);
    }, ThemeContext = React.createContext({
      theme: "GALICIA",
      toggleTheme: function(val) {
      }
    }), ThemeProvider = function(_a) {
      var children = _a.children, _b = React.useState("GALICIA"), theme = _b[0], setTheme = _b[1], toggleTheme = function(newTheme) {
        setTheme(newTheme);
      };
      return React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
    };
    function styleInject(css2, ref) {
      ref === void 0 && (ref = {});
      var insertAt = ref.insertAt;
      if (!(!css2 || typeof document > "u")) {
        var head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
        style.type = "text/css", insertAt === "top" && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), style.styleSheet ? style.styleSheet.cssText = css2 : style.appendChild(document.createTextNode(css2));
      }
    }
    var css_248z$n = `.avatar-module_avatarContainer__I-lU2{
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 0px;
    display: flex;
}

.avatar-module_avatarContainer__I-lU2 p{
    margin:0px;
    color:white;
    text-align: center;
}

.avatar-module_avatarIcon__69JFd{
    align-self: center;
    justify-self: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}


.avatar-module_editContainer__cm8UW{
    display:flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
}`, styles$n = { avatarContainer: "avatar-module_avatarContainer__I-lU2", avatarIcon: "avatar-module_avatarIcon__69JFd", editContainer: "avatar-module_editContainer__cm8UW" };
    styleInject(css_248z$n);
    var css_248z$m = `.badge-module_innerBadge__hpwo1{
    border-style: solid;
    border-color:white;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
}`, styles$m = { innerBadge: "badge-module_innerBadge__hpwo1" };
    styleInject(css_248z$m);
    var Badge = function(_a) {
      var _b = _a.size, size = _b === void 0 ? "LG" : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "#809CB9" : _c, containerProportions = {
        XXS: 10,
        XS: 12,
        SM: 16,
        MD: 20,
        LG: 26,
        XL: 30
      }, borderProportions = {
        XXS: 1,
        XS: 1,
        SM: 2,
        MD: 2,
        LG: 3,
        XL: 3
      };
      return React.createElement(
        "div",
        { style: { width: "".concat(containerProportions[size], "px"), height: "".concat(containerProportions[size], "px") }, className: styles$m.badgeContainer },
        React.createElement(
          "div",
          { style: {
            backgroundColor,
            width: "".concat(containerProportions[size], "px"),
            height: "".concat(containerProportions[size], "px"),
            borderWidth: "".concat(borderProportions[size], "px")
          }, className: styles$m.innerBadge },
          React.createElement(FontAwesomeIcon2, { icon: faCheck2, height: containerProportions[size] / 2, width: containerProportions[size] / 2, color: "white" })
        )
      );
    }, css_248z$l = `.notification-module_innerBadge__6xIcL{
    border-style: solid;
    border-color:white;
    border-radius: 100%;
}`, styles$l = { innerBadge: "notification-module_innerBadge__6xIcL" };
    styleInject(css_248z$l);
    var Notification = function(_a) {
      var _b = _a.size, size = _b === void 0 ? "LG" : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "#809CB9" : _c, containerProportions = {
        XXS: 8,
        XS: 10,
        SM: 12,
        MD: 14,
        LG: 18,
        XL: 26
      }, borderProportions = {
        XXS: 2,
        XS: 2,
        SM: 2,
        MD: 2,
        LG: 3,
        XL: 3
      };
      return React.createElement(
        "div",
        { style: { width: "".concat(containerProportions[size], "px"), height: "".concat(containerProportions[size], "px") }, className: styles$l.badgeContainer },
        React.createElement("div", { style: {
          backgroundColor,
          width: "".concat(containerProportions[size], "px"),
          height: "".concat(containerProportions[size], "px"),
          borderWidth: "".concat(borderProportions[size], "px")
        }, className: styles$l.innerBadge })
      );
    }, Avatar = function(_a) {
      var edit = _a.edit, _b = _a.notification, notification = _b === void 0 ? !1 : _b, _c = _a.content, content = _c === void 0 ? "GL" : _c, _d = _a.variant, variant = _d === void 0 ? "square" : _d, _e = _a.size, size = _e === void 0 ? "LG" : _e, backgroundColor = _a.backgroundColor, notificationColor = _a.notificationColor, _f = _a.badge, badge = _f === void 0 ? !1 : _f, badgeColor = _a.badgeColor, _g = React.useState(!1), activeHover = _g[0], setActiveHover = _g[1], _h = React.useState(backgroundColor), bgColor = _h[0], setBgColor = _h[1], theme = React.useContext(ThemeContext).theme;
      React.useEffect(function() {
        backgroundColor || setBgColor(c4({ type: "primary", brand: theme }));
      }, []);
      var containerProportions = {
        XXS: 24,
        XS: 32,
        SM: 40,
        MD: 48,
        LG: 64,
        XL: 88
      }, radius = {
        square: size == "XXS" ? "4px" : "8px",
        circle: "50%"
      }, notificationPosition = {
        XXS: 3,
        XS: 3,
        SM: 4,
        MD: 5,
        LG: 7,
        XL: 10
      }, badgePosition = {
        XXS: 3,
        XS: 3,
        SM: 4,
        MD: 5,
        LG: 7,
        XL: 10
      };
      return React.createElement(
        "div",
        { onMouseEnter: function() {
          setActiveHover(!0);
        }, onMouseLeave: function() {
          setActiveHover(!1);
        }, style: { position: "relative", backgroundColor: bgColor, width: "".concat(containerProportions[size], "px"), height: "".concat(containerProportions[size], "px"), borderRadius: radius[variant] }, className: styles$n.avatarContainer },
        React.createElement(
          "div",
          { style: { width: "".concat(containerProportions[size] / 2, "px"), height: "".concat(containerProportions[size] / 2, "px") }, className: styles$n.avatarIcon },
          React.createElement("p", { style: { fontSize: "".concat(containerProportions[size] / 2.5, "px") } }, content)
        ),
        activeHover && React.createElement(
          "div",
          { onClick: edit, className: styles$n.editContainer, style: { borderRadius: "100px", width: "".concat(containerProportions[size] / 1.6, "px"), height: "".concat(containerProportions[size] / 1.6, "px"), position: "absolute", backgroundColor: c4({ type: "grey-80" }) } },
          React.createElement(FontAwesomeIcon2, { color: "white", icon: faPencil, fontSize: "".concat(containerProportions[size] / 1.6 * 0.5, "px") })
        ),
        notification && React.createElement(
          "div",
          { style: {
            position: "absolute",
            bottom: variant == "square" ? "-".concat(notificationPosition[size], "px") : "0px",
            right: variant == "square" ? "-".concat(notificationPosition[size], "px") : "0px"
          } },
          React.createElement(Notification, { backgroundColor: notificationColor, size })
        ),
        badge && React.createElement(
          "div",
          { style: {
            position: "absolute",
            bottom: variant == "square" ? "-".concat(badgePosition[size], "px") : "0px",
            right: variant == "square" ? "-".concat(badgePosition[size], "px") : "0px"
          } },
          React.createElement(Badge, { backgroundColor: badgeColor, size })
        )
      );
    };
    function useComponentVisible(initialIsVisible) {
      var _a = React.useState(initialIsVisible), isComponentVisible = _a[0], setIsComponentVisible = _a[1], ref = React.useRef(null), handleClickOutside = function(event) {
        ref.current && !ref.current.contains(event.target) && setIsComponentVisible(!1);
      };
      return React.useEffect(function() {
        return document.addEventListener("click", handleClickOutside, !0), function() {
          document.removeEventListener("click", handleClickOutside, !0);
        };
      }, []), { ref, isComponentVisible, setIsComponentVisible };
    }
    var css_248z$k = `.dropdown-module_dropdownContainer__FHnBE {


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 1000;
    border-radius: 8px;
	white-space: nowrap;

    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);




}

.dropdown-module_dropdownInnerContainer__xdyt1{
    border-radius: 8px;
    background-color: white;
    width:100%;
    z-index:1000;
    padding: 8px;
   height:100%

}`, styles$k = { dropdownContainer: "dropdown-module_dropdownContainer__FHnBE", dropdownInnerContainer: "dropdown-module_dropdownInnerContainer__xdyt1" };
    styleInject(css_248z$k);
    var css_248z$j = `.dropdownOption-module_dropdownOptionContainer__iesm1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    width: auto;
    white-space: nowrap;
    z-index: 1000;
    background-color: white;
}

.dropdownOption-module_dropdownOptionContainer__iesm1:hover {
 
    background-color: #F4F4F4;
}`, styles$j = { dropdownOptionContainer: "dropdownOption-module_dropdownOptionContainer__iesm1" };
    styleInject(css_248z$j);
    var DropdownOption = function(_a) {
      var label = _a.label, setSelected = _a.setSelected;
      return React.createElement(
        "div",
        { onClick: function() {
          return setSelected(label);
        }, className: styles$j.dropdownOptionContainer },
        React.createElement("p", { onClick: function() {
          return console.log(label);
        }, style: { margin: "0px", width: "100%" } }, label)
      );
    }, Dropdown = function(_a) {
      var options = _a.options, _b = _a.open, open = _b === void 0 ? !1 : _b, setSeleted = _a.setSeleted, _c = React.useState(!1), isOpened = _c[0], setIsOpened = _c[1];
      return React.useEffect(function() {
        setIsOpened(open);
      }, [open]), React.createElement(
        "div",
        { style: { visibility: isOpened ? "visible" : "hidden" }, className: styles$k.dropdownContainer },
        React.createElement("div", { className: styles$k.dropdownInnerContainer }, options.map(function(option) {
          return React.createElement(DropdownOption, { setSelected: setSeleted, label: option.label, value: option.value });
        }))
      );
    }, css_248z$i = `.elipsis-module_elipsisCircleContainer__lSGi6 {
    
    display: flex; 
    flex-direction: column;
    height: 16px;
    width: 4px;
    justify-content: space-between;
}

.elipsis-module_elipsisCircle__bUkFc {
    background-color: black;
    width: 4px;
    height: 4px;
    border-radius: 100%;
}

.elipsis-module_elipsisBox__j37iZ {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer
}

.elipsis-module_elipsisBox__j37iZ:hover {
    background-color: #CCCCCC;

}

.elipsis-module_elipsisBox__j37iZ:active {
    background-color: #E6E6E6;

}


.elipsis-module_elipsisBoxDisabled__nFRg- {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #F4F4F4;

}

.elipsis-module_elipsisBoxDisabled__nFRg- .elipsis-module_elipsisCircle__bUkFc {
    background-color: #999999;
}

.elipsis-module_left__kblH-{
    position:absolute;
    right:0
}
.elipsis-module_right__f8by3{
    position:absolute;
    left:0
}

`, styles$i = { elipsisCircleContainer: "elipsis-module_elipsisCircleContainer__lSGi6", elipsisCircle: "elipsis-module_elipsisCircle__bUkFc", elipsisBox: "elipsis-module_elipsisBox__j37iZ", elipsisBoxDisabled: "elipsis-module_elipsisBoxDisabled__nFRg-", left: "elipsis-module_left__kblH-", right: "elipsis-module_right__f8by3" };
    styleInject(css_248z$i);
    var Elipsis = function(_a) {
      var _b = _a.disabled, disabled2 = _b === void 0 ? !1 : _b, _c = _a.listPosition, listPosition = _c === void 0 ? "left" : _c, _d = useComponentVisible(!1), ref = _d.ref, isComponentVisible = _d.isComponentVisible, setIsComponentVisible = _d.setIsComponentVisible, getPositionStyle = {
        left: styles$i.bottomLeft,
        right: styles$i.bottomRight
      };
      return React.createElement(
        "div",
        { className: styles$i.securityArea, style: { width: "fit-content", position: "relative" } },
        React.createElement(
          "div",
          { onClick: function() {
            return setIsComponentVisible(!isComponentVisible);
          }, className: disabled2 ? styles$i.elipsisBoxDisabled : styles$i.elipsisBox },
          React.createElement(
            "div",
            { className: styles$i.elipsisCircleContainer },
            React.createElement("div", { className: styles$i.elipsisCircle }),
            React.createElement("div", { className: styles$i.elipsisCircle }),
            React.createElement("div", { className: styles$i.elipsisCircle })
          )
        ),
        React.createElement("div", { ref, className: getPositionStyle[listPosition] }, isComponentVisible && React.createElement(Dropdown, { setSeleted: function(e) {
          return console.log(e);
        }, options: [{ label: "Opcion 1", value: "1" }] }))
      );
    }, css_248z$h = `@font-face {
    font-family: 'InriaSans';
    font-style: normal;
    src: url('../../public/fonts/InriaSans-Regular.ttf') format('truetype');
}


@media (min-width: 600px) {

    .text-module_S1__ueRLW {
        font-family: 'InriaSans';
        font-size: 30px;
        line-height: 32px;
        margin: 0px;
    }

    .text-module_S2__It1Nz {
        font-family: 'InriaSans';
        font-size: 24px;
        line-height: 26px;
        margin: 0px;
    }

    .text-module_S3__y-r-z {
        font-family: 'InriaSans';
        font-size: 20px;
        line-height: 24px;
        margin: 0px;
    }

    .text-module_S4__h31B3 {
        font-family: 'InriaSans';
        font-size: 18px;
        line-height: 22px;
        margin: 0px;
    }

    .text-module_S5__SaFrM {
        font-family: 'InriaSans';
        font-size: 16px;
        line-height: 22px;
        margin: 0px;
    }

    .text-module_S7__H-FdI {
        font-family: 'InriaSans';
        font-size: 14px;
        line-height: 20px;
        margin: 0px;
    }

    .text-module_S8__se1oE {
        font-family: 'InriaSans';
        font-size: 12px;
        line-height: 18px;
        margin: 0px;
    }

    .text-module_Overline__bhVu1 {
        font-family: 'InriaSans';
        font-size: 14px;
        line-height: 16px;
        margin: 0px;
    }

    .text-module_link__r8qj4 {
        color: #A84308;
        text-decoration-line: underline;
        display: block;
    }

    .text-module_link__r8qj4:visited {
        color: #A84308;
        text-decoration-line: underline;
    }

    .text-module_link__r8qj4:hover {
        color: #A84308;
        text-decoration-line: underline;
    }

}

@media (max-width: 600px) {

.text-module_S1__ueRLW {
    font-family: 'InriaSans';
    font-size: 24px;
    line-height: 26px;
    margin: 0px;
}

.text-module_S2__It1Nz {
    font-family: 'InriaSans';
    font-size: 20px;
    line-height: 24px;
    margin: 0px;
}

.text-module_S3__y-r-z {
    font-family: 'InriaSans';
    font-size: 18px;
    line-height: 22px;
    margin: 0px;
}

.text-module_S4__h31B3 {
    font-family: 'InriaSans';
    font-size: 16px;
    line-height: 20px;
    margin: 0px;
}

.text-module_S5__SaFrM {
    font-family: 'InriaSans';
    font-size: 14px;
    line-height: 20px;
    margin: 0px;
}

.text-module_S7__H-FdI {
    font-family: 'InriaSans';
    font-size: 12px;
    line-height: 18px;
    margin: 0px;
}

.text-module_S8__se1oE {
    font-family: 'InriaSans';
    font-size: 10px;
    line-height: 16px;
    margin: 0px;
}

.text-module_Overline__bhVu1 {
    font-family: 'InriaSans';
    font-size: 12px;
    line-height: 18px;
    margin: 0px;
}

.text-module_link__r8qj4 {
    color: #A84308;
    text-decoration-line: underline;
    display: block;
}

.text-module_link__r8qj4:visited {
    color: #A84308;
    text-decoration-line: underline;
}

.text-module_link__r8qj4:hover {
    color: #A84308;
    text-decoration-line: underline;
}
}

.text-module_action__Q-NY0{
    user-select: none;
}`, styles$h = { S1: "text-module_S1__ueRLW", S2: "text-module_S2__It1Nz", S3: "text-module_S3__y-r-z", S4: "text-module_S4__h31B3", S5: "text-module_S5__SaFrM", S7: "text-module_S7__H-FdI", S8: "text-module_S8__se1oE", Overline: "text-module_Overline__bhVu1", link: "text-module_link__r8qj4", action: "text-module_action__Q-NY0" };
    styleInject(css_248z$h);
    var Text3 = function(_a) {
      var _b = _a.isAction, isAction = _b === void 0 ? !1 : _b, dynamicClassName = _a.dynamicClassName, color = _a.color, _c = _a.overline, overline = _c === void 0 ? !1 : _c, _d = _a.isLink, isLink = _d === void 0 ? !1 : _d, _e = _a.type, type = _e === void 0 ? "S5" : _e, _f = _a.textAlign, textAlign = _f === void 0 ? "left" : _f, _g = _a.bold, bold = _g === void 0 ? !1 : _g, _h = _a.italic, italic = _h === void 0 ? !1 : _h, text = _a.text, href = _a.href, children = _a.children, getStyledText = function() {
        if (overline)
          return React.createElement(
            "p",
            { className: styles$h.Overline, style: getStyle() },
            text == null ? void 0 : text.toUpperCase(),
            children
          );
        switch (type) {
          case "S1":
            return React.createElement(
              "h1",
              { className: styles$h.S1, style: getStyle() },
              text,
              children
            );
          case "S2":
            return React.createElement(
              "h2",
              { className: styles$h.S2, style: getStyle() },
              text,
              children
            );
          case "S3":
            return React.createElement(
              "h3",
              { className: styles$h.S3, style: getStyle() },
              text,
              children
            );
          case "S4":
            return React.createElement(
              "h4",
              { className: styles$h.S4, style: getStyle() },
              text,
              children
            );
          case "S5":
            return isAction ? React.createElement(
              "p",
              { className: "".concat(styles$h.S5, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
              text,
              children
            ) : isLink ? React.createElement(
              "a",
              { href: "".concat(href), className: "".concat(styles$h.S5, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
              text,
              children
            ) : React.createElement(
              "p",
              { className: styles$h.S5, style: getStyle() },
              text,
              children
            );
          case "S7":
            return isAction ? React.createElement(
              "p",
              { className: "".concat(styles$h.S7, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
              text,
              children
            ) : isLink ? React.createElement(
              "a",
              { href: "".concat(href), className: "".concat(styles$h.S7, " ").concat(styles$h.link), style: getLinkStyle() },
              text,
              children
            ) : React.createElement(
              "p",
              { className: styles$h.S7, style: getStyle() },
              text,
              children
            );
          case "S8":
            return isAction ? React.createElement(
              "p",
              { className: "".concat(styles$h.S8, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
              text,
              children
            ) : isLink ? React.createElement(
              "a",
              { href: "".concat(href), className: "".concat(styles$h.S8, " ").concat(styles$h.link), style: getLinkStyle() },
              text,
              children
            ) : React.createElement(
              "p",
              { className: styles$h.S8, style: getStyle() },
              text,
              children
            );
        }
      }, getStyle = function() {
        return {
          fontStyle: italic ? "italic" : "normal",
          fontWeight: bold ? "bold" : "normal",
          textAlign,
          color
        };
      }, getLinkStyle = function() {
        return {
          fontStyle: italic ? "italic" : "normal",
          fontWeight: bold ? "bold" : "normal",
          textAlign,
          color,
          cursor: "pointer"
        };
      };
      return React.createElement("div", { className: "".concat(styles$h.textContainer, " ").concat(dynamicClassName) }, getStyledText());
    }, css_248z$g = `.card-module_cardHeaderContainer__AO6aq {

    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.card-module_cardContainer__pgIS2 {
    background: #FFFFFF;
    padding: 16px;
    border: 1px solid #BEBEBE;
    border-radius: 8px;
}

.card-module_titleSubtitleContainer__trG5l{
    width: 100%;
    padding-left: 8px;
}

.card-module_cardFooterLinks__7Skjw{
    margin-top: 16px;
    display: flex;
    flex-direction: row;
}

.card-module_cardFooterLinkItem__BxXf5{
    margin-right: 8px;
}`, styles$g = { cardHeaderContainer: "card-module_cardHeaderContainer__AO6aq", cardContainer: "card-module_cardContainer__pgIS2", titleSubtitleContainer: "card-module_titleSubtitleContainer__trG5l", cardFooterLinks: "card-module_cardFooterLinks__7Skjw", cardFooterLinkItem: "card-module_cardFooterLinkItem__BxXf5" };
    styleInject(css_248z$g);
    var Card = function(_a) {
      var _b = _a.footerLinks, footerLinks = _b === void 0 ? [
        { label: "Link1", href: "https://www.google.com.ar" },
        { label: "Link2", href: "www.facebook.com" }
      ] : _b, headerImage = _a.headerImage, children = _a.children, _c = _a.title, title = _c === void 0 ? "T\xEDtulo" : _c, _d = _a.description, description = _d === void 0 ? "Description" : _d, avatarProps = _a.avatarProps, _e = React.useState(!1), mounted = _e[0], setMounted = _e[1];
      return React.useEffect(function() {
        return setMounted(!0);
      }, []), mounted ? React.createElement(
        "div",
        { className: styles$g.cardContainer },
        headerImage && React.createElement("div", { className: styles$g.cardHeaderImageContainer }),
        React.createElement(
          "div",
          { className: styles$g.cardHeaderContainer },
          React.createElement(Avatar, __assign({}, avatarProps, { size: "MD" })),
          React.createElement(
            "div",
            { className: styles$g.titleSubtitleContainer },
            React.createElement(Text3, { type: "S4", text: title }),
            React.createElement(Text3, { type: "S5", color: "#6A6A6A", text: description })
          ),
          React.createElement(Elipsis, null),
          React.createElement("div", null)
        ),
        children && React.createElement("div", { className: styles$g.cardBodyContainer }, children),
        footerLinks.length > 0 && React.createElement("div", { className: styles$g.cardFooterLinks }, footerLinks.map(function(fl) {
          return React.createElement(
            "div",
            { className: styles$g.cardFooterLinkItem },
            React.createElement(Text3, { text: fl.label, href: fl.href, type: "S5", isLink: !0 })
          );
        }))
      ) : null;
    }, css_248z$f = `.button-module_securityArea__ODZA5{
  padding:8px
}


.button-module_rightIcon__mA90K{
  margin-left: 8px;
}

.button-module_leftIcon__IH-z6{
  margin-right: 8px;
}

button{
	display:flex;
  align-items: center;
  outline: none;   
	border-radius:8px;
}

.button-module_buttonNormal__TjF-A{
	cursor:pointer;
	font-size:16px;
	padding:12px 32px 12px 32px;
  font-weight: bold;

}


.button-module_buttonSmall__GUzXp{
	cursor:pointer;
	font-size:14px;
	padding:10px 16px 10px 16px;
  font-weight: bold;
}

.button-module_buttonFullWidth__2r7Nn{
	cursor:pointer;
	font-size:16px;
	padding:13px 0px 13px 0px;
  font-weight: bold;
  justify-content: center;
  width:100%
}


.button-module_buttonPrimary__yT9a0{
  background-color:#FA6400;

  color:white;
  border:0px;

}


.button-module_buttonPrimary__yT9a0:hover{
  background-color:#C85000;
}

.button-module_buttonPrimary__yT9a0:disabled{
  background-color:#6A6A6A;

}



.button-module_buttonSecondary__YkcuD{
  background-color:white;
  color:#FA6400;
  border-width: 1px;
  border-style: solid;
  border-color: #FA6400;
}



.button-module_buttonSecondary__YkcuD:hover{
  background-color:#FFE2CE;
}


.button-module_buttonSecondary__YkcuD:disabled{
  border-color:#6A6A6A;
  color:#6A6A6A;
  background-color: white;
}

.button-module_buttonTertiary__yFcGW{
  background-color:white;
  color:#FA6400;
  border-width: 1px;
  border-color: #FFFFFF00;
}

.button-module_buttonTertiary__yFcGW:hover{
  background-color:white;
	border-radius:8px;
  color:#6A6A6A;
  border-width: 1px;
  border-style: solid;
  border-color: #6A6A6A;

}

.button-module_buttonTertiary__yFcGW:disabled{
  background-color:white;
	border-radius:8px;
  color:#6A6A6A;
  border-width: 1px;
  border-style: solid;
  border-color: #FFFFFF00;
}
`, styles$f = { securityArea: "button-module_securityArea__ODZA5", rightIcon: "button-module_rightIcon__mA90K", leftIcon: "button-module_leftIcon__IH-z6", buttonNormal: "button-module_buttonNormal__TjF-A", buttonSmall: "button-module_buttonSmall__GUzXp", buttonFullWidth: "button-module_buttonFullWidth__2r7Nn", buttonPrimary: "button-module_buttonPrimary__yT9a0", buttonSecondary: "button-module_buttonSecondary__YkcuD", buttonTertiary: "button-module_buttonTertiary__yFcGW" };
    styleInject(css_248z$f);
    var Button2 = function(_a) {
      var onClick = _a.onClick, _b = _a.label, label = _b === void 0 ? "Button" : _b, rightIcon = _a.rightIcon, leftIcon = _a.leftIcon, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.variant, variant = _d === void 0 ? "primary" : _d, _e = _a.disabled, disabled2 = _e === void 0 ? !1 : _e, props = __rest(_a, ["onClick", "label", "rightIcon", "leftIcon", "size", "variant", "disabled"]), theme = React.useContext(ThemeContext).theme, brandTheme = theme, _f = React.useState(disabled2 ? "disabled" : "base"), state = _f[0], setState = _f[1];
      React.useEffect(function() {
        setState(disabled2 ? "disabled" : "base");
      }, [disabled2]);
      var sizeVariant = {
        normal: styles$f.buttonNormal,
        small: styles$f.buttonSmall,
        "full-width": styles$f.buttonFullWidth
      }, colorVariant = {
        primary: {
          base: {
            backgroundColor: c4({ type: "primary", brand: brandTheme }),
            color: "white",
            border: 0
          },
          hover: {
            backgroundColor: c4({ type: "dark", brand: brandTheme }),
            color: "white",
            border: 0
          },
          disabled: {
            backgroundColor: c4({ type: "grey-60", brand: brandTheme }),
            color: "white",
            border: 0
          }
        },
        secondary: {
          base: {
            color: c4({ type: "primary", brand: brandTheme }),
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: c4({ type: "primary", brand: brandTheme }),
            backgroundColor: c4({ type: "white" })
          },
          hover: {
            color: c4({ type: "dark", brand: brandTheme }),
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: c4({ type: "dark", brand: brandTheme }),
            backgroundColor: c4({ type: "light", brand: brandTheme })
          },
          disabled: {
            color: c4({ type: "grey-60", brand: brandTheme }),
            borderWidth: 1,
            borderStyle: "solid",
            backgroundColor: c4({ type: "white" }),
            borderColor: c4({ type: "grey-60", brand: brandTheme })
          }
        },
        tertiary: {
          base: {
            backgroundColor: c4({ type: "white", brand: brandTheme }),
            color: c4({ type: "primary", brand: brandTheme }),
            border: 0
          },
          hover: {
            backgroundColor: c4({ type: "grey-20" }),
            color: c4({ type: "dark", brand: brandTheme }),
            border: 0
          },
          disabled: {
            backgroundColor: c4({ type: "white", brand: brandTheme }),
            color: c4({ type: "grey-60", brand: brandTheme }),
            border: 0
          }
        }
      }, textConfig = {
        normal: {
          type: "S5",
          bold: !0
        },
        small: {
          type: "S7",
          bold: !0
        },
        "full-width": {
          type: "S5",
          bold: !0
        }
      };
      return React.createElement(
        "div",
        { className: styles$f.securityArea },
        React.createElement(
          "button",
          __assign({ style: colorVariant[variant][state], onClick, onMouseLeave: function() {
            setState(disabled2 ? "disabled" : "base");
          }, onMouseEnter: function() {
            setState(disabled2 ? "disabled" : "hover");
          }, type: "button", disabled: disabled2, className: "".concat(sizeVariant[size], " ") }, props),
          leftIcon && React.createElement(FontAwesomeIcon2, { className: styles$f.leftIcon, icon: leftIcon }),
          React.createElement(Text3, { bold: textConfig[size].bold, type: textConfig[size].type, text: label }),
          rightIcon && React.createElement(FontAwesomeIcon2, { className: styles$f.rightIcon, icon: rightIcon })
        )
      );
    }, css_248z$e = `/*         COMMON CLASSES         */

.textArea-module_textAreaContainer__TPNUo {

    width: 40ch;
    margin: 8px
}

.textArea-module_hint__OuBYA{
    display:float;
}

.textArea-module_prefix__rqX8W {
    margin-bottom: 0px;
    color: #6A6A6A;
    margin-right: 5px;
}

.textArea-module_sufix__6Pn94 {
    margin-right: 5px;
    color: #6A6A6A;
    margin-bottom: 0px;
}

/**********************/
/*BORDER VARIANTS START*/
/**********************/


/**********************/
/**********************/
/**********************/
/** BORDER BOTTOM  START **/
/**********************/
/**********************/
/**********************/
.textArea-module_textAreaBottom__VwNYF {
    outline: 0;
    border-width: 0 0 1px;
    border-color: black;
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    border-style: solid;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
}

.textArea-module_textAreaBottomDisabled__G3aQF {
    outline: 0;
    border-width: 0 0 1px;
    border-color: #6A6A6A;
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    border-style: solid;
}

.textArea-module_textAreaBottom__VwNYF input {
    outline: 0;
    border-width: 0;
}

.textArea-module_textAreaBottom__VwNYF:hover {
    border-width: 0 0 2px;
    margin-bottom: 0px;

}


.textArea-module_textAreaBottomFocused__Pb-0H {
    outline: 0;
    border-width: 0 0 1px;
    margin-bottom: 1px;
    display: flex;
    border-style: solid;
    border-color: #FA6400;
    flex-direction: column;
    padding-bottom: 0px;
}

.textArea-module_textAreaBottomFocused__Pb-0H input {
    outline: 0;
    border-width: 0;
}


@keyframes textArea-module_rescaleUpBottom__KhgYe {
    from {
        top: -10px;
        font-size: 0.8rem;
        left: 0px;
    }

    to {
        top: 0px;
        font-size: 1.5rem;
        left: 10px;
    }
}

@keyframes textArea-module_rescaleDownBottom__WHRbg {
    from {
        top: 0px;
        font-size: 1.5rem;
        left: 10px;
    }

    to {
        top: -10px;
        font-size: 0.8rem;
        left: 0px;
    }
}

.textArea-module_transitionLabelInBottom__ts80m {
    position: absolute;
    top: 0px;
    left: 10px;
    font-weight: 400;
    pointer-events: none;
    font-size: 1.5rem;

    animation: textArea-module_rescaleUpBottom__KhgYe 300ms;
    opacity: 1;
}

.textArea-module_transitionLabelOutBottom__3KAka {
    position: absolute;
    top: -10px;
    left: 0px;
    font-weight: 400;
    font-size: 0.8rem;
    pointer-events: none;

    animation: textArea-module_rescaleDownBottom__WHRbg 300ms;

}

/**********************/
/**********************/
/* BORDER BOTTOM  END */
/**********************/
/**********************/


/**********************/
/**********************/
/* BORDER ROUND START */
/**********************/
/**********************/
.textArea-module_textAreaRound__6GOg4 {
    outline: 0;
    border-width: 1px;
    border-radius: 8px;
    border-color: black;
    margin-bottom: 5px;
 
    border-style: solid;
    padding: 8px;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
}

.textArea-module_textAreaRound__6GOg4 input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;

    align-items: center;
}

.textArea-module_textAreaRound__6GOg4:hover {
    border-width: 1px;
    align-items: center;
}


.textArea-module_textAreaRoundFocused__f-kYS {
    outline: 0;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 5px;

    border-style: solid;
    border-color: #FA6400;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px
}

.textArea-module_textAreaRoundFocused__f-kYS input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
}

.textArea-module_transitionLabelInRound__SkL-u {
    position: absolute;
    top: 8px;
    left: 16px;
    font-weight: 400;
    pointer-events: none;
    font-size: 2rem;

    animation: textArea-module_rescaleUpRound__vwsNL 300ms;
    opacity: 1;
}

.textArea-module_transitionLabelOutRound__SfFtS {
    position: absolute;
    top: -20px;
    left: 0px;
    font-weight: 400;
    font-size: 0.8rem;
    pointer-events: none;

    animation: textArea-module_rescaleDownRound__kQzmQ 300ms;

}

@keyframes textArea-module_rescaleUpRound__vwsNL {
    from {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }

    to {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }
}

@keyframes textArea-module_rescaleDownRound__kQzmQ {
    from {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }

    to {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }
}


.textArea-module_textAreaRoundDisabled__Ham6b {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    background-color: #F4F4F4;
    border-width: 1px;
    border-color: #BEBEBE;
    border-radius: 8px;
    margin-bottom: 3px;
    border-style: solid;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px
}

/**********************/
/**********************/
/* BORDER ROUND END */
/**********************/
/**********************/



/**********************/
/**********************/
/**********************/
/* BORDER SHADOW START */
/**********************/
/**********************/
/**********************/


.textArea-module_textAreaShadow__Nt0gE {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    border-width: 0px;
    border-radius: 8px;
    border-color: black;
    margin-bottom: 5px;

    border-style: solid;
    padding: 8px;
    font-size: 18px;
    line-height: 22px;
  
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
}

.textArea-module_textAreaShadow__Nt0gE input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;

    align-items: center;
}

.textArea-module_textAreaShadow__Nt0gE:hover {
    border-width: 0px;
    align-items: center;
}


.textArea-module_textAreaShadowFocused__DYTWV {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 3px;
    border-style: solid;
    border-color: #FA6400;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px;
}

.textArea-module_textAreaShadowDisabled__zyhQN {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    background-color: #F4F4F4;
    border-width: 0px;
    border-radius: 8px;
    margin-bottom: 3px;

    border-style: solid;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px;
}

.textArea-module_textAreaShadowFocused__DYTWV input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
}

input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
    background-color: #FFFFFF00;
}

.textArea-module_transitionLabelInShadow__daZCu {
    position: absolute;
    top: 8px;
    left: 16px;
    font-weight: 400;
    pointer-events: none;
    font-size: 2rem;
    

    animation: textArea-module_rescaleUpShadow__XJdnx 300ms;
    opacity: 1;
}

.textArea-module_transitionLabelOutShadow__SxE8w {
    position: absolute;
    top: -20px;
    left: 0px;
    font-weight: 400;
    font-size: 0.8rem;
    pointer-events: none;

    animation: textArea-module_rescaleDownShadow__WHvT7 300ms;

}

@keyframes textArea-module_rescaleUpShadow__XJdnx {
    from {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }

    to {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }
}

@keyframes textArea-module_rescaleDownShadow__WHvT7 {
    from {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }

    to {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }
}


/**********************/
/**********************/
/* BORDER SHADOW END */
/**********************/
/**********************/`, styles$e = { textAreaContainer: "textArea-module_textAreaContainer__TPNUo", hint: "textArea-module_hint__OuBYA", prefix: "textArea-module_prefix__rqX8W", sufix: "textArea-module_sufix__6Pn94", textAreaBottom: "textArea-module_textAreaBottom__VwNYF", textAreaBottomDisabled: "textArea-module_textAreaBottomDisabled__G3aQF", textAreaBottomFocused: "textArea-module_textAreaBottomFocused__Pb-0H", transitionLabelInBottom: "textArea-module_transitionLabelInBottom__ts80m", rescaleUpBottom: "textArea-module_rescaleUpBottom__KhgYe", transitionLabelOutBottom: "textArea-module_transitionLabelOutBottom__3KAka", rescaleDownBottom: "textArea-module_rescaleDownBottom__WHRbg", textAreaRound: "textArea-module_textAreaRound__6GOg4", textAreaRoundFocused: "textArea-module_textAreaRoundFocused__f-kYS", transitionLabelInRound: "textArea-module_transitionLabelInRound__SkL-u", rescaleUpRound: "textArea-module_rescaleUpRound__vwsNL", transitionLabelOutRound: "textArea-module_transitionLabelOutRound__SfFtS", rescaleDownRound: "textArea-module_rescaleDownRound__kQzmQ", textAreaRoundDisabled: "textArea-module_textAreaRoundDisabled__Ham6b", textAreaShadow: "textArea-module_textAreaShadow__Nt0gE", textAreaShadowFocused: "textArea-module_textAreaShadowFocused__DYTWV", textAreaShadowDisabled: "textArea-module_textAreaShadowDisabled__zyhQN", transitionLabelInShadow: "textArea-module_transitionLabelInShadow__daZCu", rescaleUpShadow: "textArea-module_rescaleUpShadow__XJdnx", transitionLabelOutShadow: "textArea-module_transitionLabelOutShadow__SxE8w", rescaleDownShadow: "textArea-module_rescaleDownShadow__WHvT7" };
    styleInject(css_248z$e);
    var css_248z$d = `.helperText-module_helperText__ugUer {
    font-size: 1rem;
}`, styles$d = { helperText: "helperText-module_helperText__ugUer" };
    styleInject(css_248z$d);
    var HelperText = function(_a) {
      var _b = _a.variant, variant = _b === void 0 ? "info" : _b, children = _a.children, props = __rest(_a, ["variant", "children"]), variantColor = {
        info: "black",
        error: "#C51111",
        success: "#258825"
      };
      return React.createElement(
        "div",
        { className: styles$d.helperText },
        React.createElement(Text3, __assign({ text: children, type: "S7", color: variantColor[variant] }, props))
      );
    }, TextArea = function(_a) {
      var _b = _a.format, format = _b === void 0 ? function(v) {
        return v;
      } : _b, _c = _a.disabled, disabled2 = _c === void 0 ? !1 : _c, _d = _a.border, border = _d === void 0 ? "bottom" : _d, _e = _a.placeHolder, placeHolder = _e === void 0 ? "" : _e, _f = _a.hint, hint = _f === void 0 ? "" : _f, _g = _a.hintPosition, hintPosition = _g === void 0 ? "left" : _g;
      _a.sizeVariant;
      var props = __rest(_a, ["format", "disabled", "border", "placeHolder", "hint", "hintPosition", "sizeVariant"]), _j = React.useState(!1), isFocused = _j[0], setIsFocused = _j[1], _k = React.useState(""), value = _k[0], setValue = _k[1], variantBorder = {
        bottom: {
          focused: styles$e.textAreaBottomFocused,
          blur: styles$e.textAreaBottom,
          labelOut: styles$e.transitionLabelOutBottom,
          labelIn: styles$e.transitionLabelInBottom,
          disabled: styles$e.textAreaBottomDisabled
        },
        round: {
          focused: styles$e.textAreaRoundFocused,
          blur: styles$e.textAreaRound,
          labelOut: styles$e.transitionLabelOutRound,
          labelIn: styles$e.transitionLabelInRound,
          disabled: styles$e.textAreaRoundDisabled
        },
        shadow: {
          focused: styles$e.textAreaShadowFocused,
          blur: styles$e.textAreaShadow,
          labelOut: styles$e.transitionLabelOutShadow,
          labelIn: styles$e.transitionLabelInShadow,
          disabled: styles$e.textAreaShadowDisabled
        }
      }, getInnerContainerStyle = function() {
        return disabled2 ? variantBorder[border].disabled : isFocused ? variantBorder[border].focused : variantBorder[border].blur;
      };
      return React.createElement(
        "div",
        { className: styles$e.textAreaContainer },
        React.createElement(
          "div",
          { style: { position: "relative" }, className: getInnerContainerStyle() },
          React.createElement("label", { style: { color: disabled2 ? "#6A6A6A" : "black" }, className: isFocused || value ? variantBorder[border].labelOut : variantBorder[border].labelIn }, "Label"),
          React.createElement(
            "div",
            { style: { display: "flex", flexDirection: "row", alignItems: "baseline" } },
            React.createElement("textarea", __assign({ value, placeholder: isFocused ? placeHolder : "", style: { minWidth: "100%", outline: "none", borderWidth: 0 }, onFocus: function() {
              return setIsFocused(!0);
            }, onBlur: function() {
              return setIsFocused(!1);
            }, onChange: function(e) {
              setValue(format(e.target.value));
            }, disabled: disabled2 }, props))
          )
        ),
        React.createElement(HelperText, { className: styles$e.hint, style: { float: hintPosition }, children: hint })
      );
    }, css_248z$c = `/*         COMMON CLASSES         */

.select-module_textInputContainer__sZuV- {
    position:relative;
    padding-top: 20px;
    width: 40ch;
    height: 80px;
    margin: 8px;
    font-family: 'InriaSans';
}

.select-module_prefix__cZCfR {
    margin-bottom: 0px;
    color: #6A6A6A;
    margin-right: 5px;
}

.select-module_sufix__Ylpge {
    margin-right: 5px;
    color: #6A6A6A;
    margin-bottom: 0px;
}

/**********************/
/*BORDER VARIANTS START*/
/**********************/


/**********************/
/**********************/
/**********************/
/** BORDER BOTTOM  START **/
/**********************/
/**********************/
/**********************/
.select-module_textInputBottom__B8tpD {
    outline: 0;
    border-width: 0 0 1px;
    border-color: black;
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    border-style: solid;
}

.select-module_textInputBottomDisabled__NL7pm {
    outline: 0;
    border-width: 0 0 1px;
    border-color: #6A6A6A;
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    border-style: solid;
}

.select-module_textInputBottom__B8tpD input {
    outline: 0;
    border-width: 0;
}

.select-module_textInputBottom__B8tpD:hover {
    border-width: 0 0 2px;
    margin-bottom: 0px;

}


.select-module_textInputBottomFocused__P8Q50 {
    outline: 0;
    border-width: 0 0 1px;
    margin-bottom: 1px;
    display: flex;
    border-style: solid;
    border-color: #FA6400;
    flex-direction: column;
    padding-bottom: 0px;
}

.select-module_textInputBottomFocused__P8Q50 input {
    outline: 0;
    border-width: 0;
}

.select-module_chevron__tH2wU{
    position:absolute;
    right:0px;
    top:0px;
    display:flex;
    padding:0px;
    margin:0px;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-style: solid;
    border-color: #6A6A6A;
    border-width: 0px 0px 0px 1px;
    height:40px;
    width:40px;
}


@keyframes select-module_rescaleUpBottom__-HsX5 {
    from {
        top: -10px;
        font-size: 14px;
        left: 0px;
    }

    to {
        top: 0px;
        font-size: 18px;
        left: 10px;
    }
}

@keyframes select-module_rescaleDownBottom__C4pOS {
    from {
        top: 0px;
        font-size: 18px;
        left: 10px;
    }

    to {
        top: -20px;
        font-size: 14px;
        left: 0px;
    }
}

.select-module_transitionLabelInBottom__EfLpZ {
    position: absolute;
    top: 0px;
    left: 10px;
    font-weight: 400;
    color:#6A6A6A;

    pointer-events: none;
    font-size: 18px;
    line-height: 22px;
    font-family:'InriaSans';
    animation: select-module_rescaleUpBottom__-HsX5 300ms;
    opacity: 1;
}

.select-module_transitionLabelOutBottom__WU-dL {
    position: absolute;
    top: -20px;
    left: 0px;
    line-height: 22px;
    color:#6A6A6A;
    font-weight: 400;
    font-size: 14px;
    pointer-events: none;
    font-family:'InriaSans';

    animation: select-module_rescaleDownBottom__C4pOS 300ms;

}

/**********************/
/**********************/
/* BORDER BOTTOM  END */
/**********************/
/**********************/


/**********************/
/**********************/
/* BORDER ROUND START */
/**********************/
/**********************/
.select-module_textInputRound__AzKGm {
    outline: solid;
    outline-color: #6A6A6A;
    outline-width: 1px;
    border-width: 0px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border-style: solid;
    padding-left: 16px;
    justify-content: center;
    font-size: 18px;
    line-height: 22px;
    height:40px;
    align-items: center;
    
}

.select-module_textInputRound__AzKGm input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
    align-items: center;
}

.select-module_textInputRound__AzKGm:hover {

    align-items: center;
}




.select-module_textInputRoundFocused__LTaiP {
    outline: solid;
    border-radius: 8px;
    outline-width: 1px;
    border-width:0px;
    outline-color: #FA6400;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    justify-content: center;
    padding-left: 16px;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    height: 40px;
}

.select-module_textInputRoundFocused__LTaiP input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
}

.select-module_transitionLabelInRound__2pTQ5 {
    position: absolute;
    top: 8px;
    left: 16px;
    font-weight: 400;
    pointer-events: none;
    font-size: 18px;

    animation: select-module_rescaleUpRound__WDnaT 300ms;
    opacity: 1;
}

.select-module_transitionLabelOutRound__C-j4Z {
    position: absolute;
    top: -28px;
    left: 0px;
    font-weight: 400;
    font-size: 14px;
    pointer-events: none;

    animation: select-module_rescaleDownRound__Y5JEr 300ms;

}

@keyframes select-module_rescaleUpRound__WDnaT {
    from {
        top: -28px;
        font-size: 14px;
        left: 0px;
    }

    to {
        top: 8px;
        font-size: 18px;
        left: 16px;
    }
}

@keyframes select-module_rescaleDownRound__Y5JEr {
    from {
        top: 8px;
        font-size: 18px;
        left: 16px;
    }

    to {
        top: -28px;
        font-size: 14px;
        left: 0px;
    }
}


.select-module_textInputRoundDisabled__YsZ5b {
    outline: 0;
    background-color: #F4F4F4;
    border-width: 1px;
    border-color: #BEBEBE;
    border-radius: 8px;
    margin-bottom: 3px;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px 16px 8px 16px;
}

/**********************/
/**********************/
/* BORDER ROUND END */
/**********************/
/**********************/



/**********************/
/**********************/
/**********************/
/* BORDER SHADOW START */
/**********************/
/**********************/
/**********************/


.select-module_textInputShadow__HKtdQ {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    border-width: 0px;
    border-radius: 8px;
    border-color: black;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    border-style: solid;
    padding: 8px 16px 8px 16px;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
}

.select-module_textInputShadow__HKtdQ input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;

    align-items: center;
}

.select-module_textInputShadow__HKtdQ:hover {
    border-width: 0px;
    align-items: center;
}


.select-module_textInputShadowFocused__GdNqm {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 3px;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    border-color: #FA6400;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px 16px 8px 16px;
}

.select-module_textInputShadowDisabled__iTrXO {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    background-color: #F4F4F4;
    border-width: 0px;
    border-radius: 8px;
    margin-bottom: 3px;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px 16px 8px 16px;
}

.select-module_textInputShadowFocused__GdNqm input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
}

input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
    background-color: #FFFFFF00;
}

.select-module_transitionLabelInShadow__38tmS {
    position: absolute;
    top: 8px;
    left: 16px;
    font-weight: 400;
    pointer-events: none;
    font-size: 2rem;
    

    animation: select-module_rescaleUpShadow__gTsnM 300ms;
    opacity: 1;
}

.select-module_transitionLabelOutShadow__G077q {
    position: absolute;
    top: -20px;
    left: 0px;
    font-weight: 400;
    font-size: 0.8rem;
    pointer-events: none;

    animation: select-module_rescaleDownShadow__k06IZ 300ms;

}

@keyframes select-module_rescaleUpShadow__gTsnM {
    from {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }

    to {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }
}

@keyframes select-module_rescaleDownShadow__k06IZ {
    from {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }

    to {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }
}


/**********************/
/**********************/
/* BORDER SHADOW END */
/**********************/
/**********************/`, styles$c = { textInputContainer: "select-module_textInputContainer__sZuV-", prefix: "select-module_prefix__cZCfR", sufix: "select-module_sufix__Ylpge", textInputBottom: "select-module_textInputBottom__B8tpD", textInputBottomDisabled: "select-module_textInputBottomDisabled__NL7pm", textInputBottomFocused: "select-module_textInputBottomFocused__P8Q50", chevron: "select-module_chevron__tH2wU", transitionLabelInBottom: "select-module_transitionLabelInBottom__EfLpZ", rescaleUpBottom: "select-module_rescaleUpBottom__-HsX5", transitionLabelOutBottom: "select-module_transitionLabelOutBottom__WU-dL", rescaleDownBottom: "select-module_rescaleDownBottom__C4pOS", textInputRound: "select-module_textInputRound__AzKGm", textInputRoundFocused: "select-module_textInputRoundFocused__LTaiP", transitionLabelInRound: "select-module_transitionLabelInRound__2pTQ5", rescaleUpRound: "select-module_rescaleUpRound__WDnaT", transitionLabelOutRound: "select-module_transitionLabelOutRound__C-j4Z", rescaleDownRound: "select-module_rescaleDownRound__Y5JEr", textInputRoundDisabled: "select-module_textInputRoundDisabled__YsZ5b", textInputShadow: "select-module_textInputShadow__HKtdQ", textInputShadowFocused: "select-module_textInputShadowFocused__GdNqm", textInputShadowDisabled: "select-module_textInputShadowDisabled__iTrXO", transitionLabelInShadow: "select-module_transitionLabelInShadow__38tmS", rescaleUpShadow: "select-module_rescaleUpShadow__gTsnM", transitionLabelOutShadow: "select-module_transitionLabelOutShadow__G077q", rescaleDownShadow: "select-module_rescaleDownShadow__k06IZ" };
    styleInject(css_248z$c);
    var faCircleCheck = {
      prefix: "far",
      iconName: "circle-check",
      icon: [512, 512, [61533, "check-circle"], "f058", "M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]
    }, faCheckCircle = faCircleCheck, Select = function(_a) {
      var controller = _a.controller, _b = _a.name, name = _b === void 0 ? "field" : _b, register = _a.register, _c = _a.format, format = _c === void 0 ? function(v) {
        return v;
      } : _c, _d = _a.disabled, disabled2 = _d === void 0 ? !1 : _d, _e = _a.border, border = _e === void 0 ? "bottom" : _e, _f = _a.sufix, sufix = _f === void 0 ? "" : _f, _g = _a.prefix, prefix = _g === void 0 ? "" : _g, _h = _a.placeHolder, placeHolder = _h === void 0 ? "" : _h, _j = _a.helperText, helperText = _j === void 0 ? "" : _j;
      _a.sizeVariant;
      var isValid = _a.isValid, _l = _a.error, error = _l === void 0 ? "" : _l, _m = _a.label, label = _m === void 0 ? "Label" : _m;
      _a.onChange;
      var props = __rest(_a, ["controller", "name", "register", "format", "disabled", "border", "sufix", "prefix", "placeHolder", "helperText", "sizeVariant", "isValid", "error", "label", "onChange"]), _p = React.useState(!1), isFocused = _p[0], setIsFocused = _p[1], _q = React.useState(""), searchValue = _q[0], setSearchValue = _q[1], theme = React.useContext(ThemeContext).theme, _r = React.useState([{ label: "", value: "" }]), filterdOptions = _r[0], setfilteredOptions = _r[1], _s = useComponentVisible(!1), ref = _s.ref, isComponentVisible = _s.isComponentVisible, setIsComponentVisible = _s.setIsComponentVisible, getVariant = function() {
        return error != "" ? "error" : isValid ? "success" : "info";
      }, variantColor = {
        error: "#C51111",
        success: "#258825",
        info: c4({ type: "grey-60", brand: theme })
      }, variantBorder = {
        bottom: {
          focused: styles$c.textInputBottomFocused,
          blur: styles$c.textInputBottom,
          labelOut: styles$c.transitionLabelOutBottom,
          labelIn: styles$c.transitionLabelInBottom,
          disabled: styles$c.textInputBottomDisabled
        },
        round: {
          focused: styles$c.textInputRoundFocused,
          blur: styles$c.textInputRound,
          labelOut: styles$c.transitionLabelOutRound,
          labelIn: styles$c.transitionLabelInRound,
          disabled: styles$c.textInputRoundDisabled
        },
        shadow: {
          focused: styles$c.textInputShadowFocused,
          blur: styles$c.textInputShadow,
          labelOut: styles$c.transitionLabelOutShadow,
          labelIn: styles$c.transitionLabelInShadow,
          disabled: styles$c.textInputShadowDisabled
        }
      }, getInnerContainerStyle = function() {
        return disabled2 ? variantBorder[border].disabled : isFocused ? variantBorder[border].focused : variantBorder[border].blur;
      }, options = [
        {
          label: "Moto",
          value: "Moto"
        },
        {
          label: "Auto",
          value: "Auto"
        },
        {
          label: "Camioneta",
          value: "Camioneta"
        }
      ];
      return React.useEffect(function() {
        setfilteredOptions(options.filter(function(x) {
          return x.label.toLowerCase().includes(searchValue.toLowerCase());
        }));
      }, [searchValue]), React.useEffect(function() {
        console.log(options.findIndex(function(o) {
          return searchValue.toLowerCase() == o.label.toLowerCase();
        })), options.findIndex(function(o) {
          return searchValue.toLowerCase() == o.label.toLowerCase();
        }) == -1 && setSearchValue("");
      }, [isComponentVisible]), React.createElement(
        "div",
        { ref, className: styles$c.textInputContainer },
        React.createElement(
          "div",
          { style: { position: "relative", borderColor: variantColor[getVariant()] }, className: getInnerContainerStyle() },
          React.createElement("p", { style: { marginBlock: 0, color: "#6A6A6A" }, className: isFocused || searchValue ? variantBorder[border].labelOut : variantBorder[border].labelIn }, label),
          React.createElement(
            "div",
            { style: { display: "flex", width: "100%", flexDirection: "row", alignItems: "baseline" } },
            prefix != "" && (isFocused || searchValue != "") && React.createElement("p", { className: styles$c.prefix }, prefix),
            register && React.createElement("input", __assign({}, register(name, controller), { placeholder: isFocused ? placeHolder : "", style: { width: "100%", fontSize: "18px", lineHeight: "22px" }, onFocus: function() {
              setIsFocused(!0), setIsComponentVisible(!0);
            }, onBlur: function() {
              return setIsFocused(!1);
            }, disabled: disabled2, name, onChange: function(e) {
              register(name).onChange(e), setSearchValue(e.target.value);
            } }, props)),
            !register && React.createElement("input", __assign({ value: searchValue, placeholder: isFocused ? placeHolder : "", style: { width: "100%" }, onFocus: function() {
              setIsFocused(!0), setIsComponentVisible(!0);
            }, onBlur: function() {
              return setIsFocused(!1);
            }, onChange: function(e) {
              setSearchValue(format(e.target.value));
            }, disabled: disabled2 }, props)),
            sufix != "" && (isFocused || searchValue != "") && React.createElement("p", { className: styles$c.sufix }, sufix),
            isValid && error == "" && React.createElement(FontAwesomeIcon2, { color: "#258825", icon: faCheckCircle }),
            error != "" && React.createElement(FontAwesomeIcon2, { color: "#C51111", icon: faCircleExclamation }),
            React.createElement("div", { className: styles$c.chevron, style: { borderColor: c4(isFocused ? { type: "primary", brand: theme } : { type: "grey-60", brand: theme }) } }, isFocused ? React.createElement(FontAwesomeIcon2, { color: "black", icon: faChevronUp }) : React.createElement(FontAwesomeIcon2, { color: "black", icon: faChevronDown2 }))
          )
        ),
        React.createElement(
          "div",
          { style: { height: "20px" } },
          React.createElement(
            "div",
            { style: { position: "absolute", whiteSpace: "nowrap", width: "40ch", marginTop: "10px" } },
            "  ",
            isComponentVisible && React.createElement(Dropdown, { setSeleted: function(e) {
              setSearchValue(e), setIsComponentVisible(!1);
            }, open: isComponentVisible, options: filterdOptions })
          ),
          React.createElement(HelperText, { variant: getVariant(), children: error != "" ? error : helperText })
        )
      );
    }, css_248z$b = `/* The check - the box around the slider */

.checkbox-module_checkboxInnerContainer__Hz82w {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.checkbox-module_statusText__7mFqD {
  margin-left: 5px;
  margin-bottom: 0px;
}

.checkbox-module_descriptionText__iA4qi {
  margin-left: 20px;
  color: #6A6A6A;
}


.checkbox-module_inputEnabled__dOycE:checked {
padding:0px;
margin-top:0px;
}


.checkbox-module_inputDisabled__1WBRr {
padding:0px;
margin-top:0px
}


`, styles$b = { checkboxInnerContainer: "checkbox-module_checkboxInnerContainer__Hz82w", statusText: "checkbox-module_statusText__7mFqD", descriptionText: "checkbox-module_descriptionText__iA4qi", inputEnabled: "checkbox-module_inputEnabled__dOycE", inputDisabled: "checkbox-module_inputDisabled__1WBRr" };
    styleInject(css_248z$b);
    var Checkbox = function(_a) {
      var _b = _a.initialValue, initialValue = _b === void 0 ? !1 : _b, _c = _a.disabled, disabled2 = _c === void 0 ? !1 : _c, _d = _a.textOn, textOn = _d === void 0 ? "" : _d, _e = _a.textOff, textOff = _e === void 0 ? "" : _e, _f = _a.desription, desription = _f === void 0 ? "" : _f, _g = React.useState(initialValue), checked = _g[0], setChecked = _g[1], theme = React.useContext(ThemeContext).theme;
      return React.useEffect(function() {
        var checkbox = document.getElementById("some-checkbox");
        checkbox.indeterminate = !0;
      }, []), React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: styles$b.checkboxInnerContainer },
          React.createElement("input", { id: "some-checkbox", disabled: disabled2, style: { accentColor: c4({ type: "primary", brand: theme }) }, className: disabled2 ? styles$b.inputDisabled : styles$b.inputEnabled, onChange: function(e) {
            return setChecked(e.target.checked);
          }, checked, type: "checkbox" }),
          textOn != "" && textOff != "" && React.createElement("p", { className: styles$b.statusText }, checked ? textOn : textOff)
        ),
        desription != "" && React.createElement("p", { className: styles$b.descriptionText }, desription)
      );
    }, css_248z$a = `

.tooltip-module_tooltipTextBoxLight__s4-Bs {
    /* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;

width: fit-content;
min-height: 52px;
height: fit-content;

/* Neutrals/Grey/theme.colors.grey20

$theme.color.grey_bg_light
*/
background: #F4F4F4;
/* Neutrals/Grey/theme.colors.grey80

$theme.color.grey_text_dark
*/
border: 1px solid #2B2B2B;
border-radius: 8px;

}

.tooltip-module_tooltipTextBoxDark__gKueR {
    /* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;

width: fit-content;
min-height: 52px;
height: fit-content;

/* Neutrals/Grey/theme.colors.grey20

$theme.color.grey_bg_light
*/
background: #2B2B2B;
/* Neutrals/Grey/theme.colors.grey80

$theme.color.grey_text_dark
*/
border: 1px solid #2B2B2B;
border-radius: 8px;

}

.tooltip-module_tooltipTextBoxDark__gKueR p{
   color: #FFFFFF;
}

.tooltip-module_securityArea__6TpZC {
    padding: 8px
}



.tooltip-module_infoIconContainer__WGUU-{
    width: 22px;
    height: 22px;
    border: 2px;
    border-style: solid;
    border-color: #2B2B2B;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
   
}


.tooltip-module_tooltipTextContainer__5fyDI {




	white-space: nowrap;

    position: absolute;


    top:0;
    left:30px
}

`, styles$a = { tooltipTextBoxLight: "tooltip-module_tooltipTextBoxLight__s4-Bs", tooltipTextBoxDark: "tooltip-module_tooltipTextBoxDark__gKueR", securityArea: "tooltip-module_securityArea__6TpZC", infoIconContainer: "tooltip-module_infoIconContainer__WGUU-", tooltipTextContainer: "tooltip-module_tooltipTextContainer__5fyDI" };
    styleInject(css_248z$a);
    var Tooltip = function(_a) {
      var _b = _a.text, text = _b === void 0 ? "Prueba de texto de ejemplo en tooltip" : _b, _c = _a.variant, variant = _c === void 0 ? "light" : _c, _d = React.useState(!1), showTool = _d[0], setShowTool = _d[1];
      return React.createElement(
        "div",
        { className: styles$a.securityArea, style: { width: "fit-content", position: "relative" } },
        React.createElement(
          "div",
          { onMouseEnter: function() {
            return setShowTool(!0);
          }, onMouseLeave: function() {
            return setShowTool(!1);
          }, className: styles$a.infoIconContainer },
          React.createElement(FontAwesomeIcon2, { className: styles$a.infoIcon, icon: faInfo })
        ),
        showTool && React.createElement(
          "div",
          { className: styles$a.tooltipTextContainer },
          React.createElement(
            "div",
            { className: styles$a.securityArea },
            React.createElement(
              "div",
              { className: variant == "light" ? styles$a.tooltipTextBoxLight : styles$a.tooltipTextBoxDark },
              React.createElement(Text3, { text, type: "S7" })
            )
          )
        )
      );
    }, css_248z$9 = `/*         COMMON CLASSES         */

.textInput-module_textInputContainer__up37V {
    position:relative;
    padding-top: 20px;
    width: 40ch;
    height: 80px;
    margin: 8px;
    font-family: 'InriaSans';
}

.textInput-module_prefix__TBfJh {
    margin-bottom: 0px;
    color: #6A6A6A;
    margin-right: 5px;
}

.textInput-module_sufix__Cvjfk {
    margin-right: 5px;
    color: #6A6A6A;
    margin-bottom: 0px;
}

/**********************/
/*BORDER VARIANTS START*/
/**********************/


/**********************/
/**********************/
/**********************/
/** BORDER BOTTOM  START **/
/**********************/
/**********************/
/**********************/
.textInput-module_textInputBottom__7ooJC {
    outline: 0;
    border-width: 0 0 1px;
    border-color: black;
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    border-style: solid;
}

.textInput-module_textInputBottomDisabled__PvgDj {
    outline: 0;
    border-width: 0 0 1px;
    border-color: #6A6A6A;
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    border-style: solid;
}

.textInput-module_textInputBottom__7ooJC input {
    outline: 0;
    border-width: 0;
}

.textInput-module_textInputBottom__7ooJC:hover {
    border-width: 0 0 2px;
    margin-bottom: 0px;

}


.textInput-module_textInputBottomFocused__N4ZXX {
    outline: 0;
    border-width: 0 0 1px;
    margin-bottom: 1px;
    display: flex;
    border-style: solid;
    border-color: #FA6400;
    flex-direction: column;
    padding-bottom: 0px;
}

.textInput-module_textInputBottomFocused__N4ZXX input {
    outline: 0;
    border-width: 0;
}


@keyframes textInput-module_rescaleUpBottom__wnmJf {
    from {
        top: -10px;
        font-size: 14px;
        left: 0px;
    }

    to {
        top: 0px;
        font-size: 18px;
        left: 10px;
    }
}

@keyframes textInput-module_rescaleDownBottom__J4Pf- {
    from {
        top: 0px;
        font-size: 18px;
        left: 10px;
    }

    to {
        top: -20px;
        font-size: 14px;
        left: 0px;
    }
}

.textInput-module_transitionLabelInBottom__hmyLa {
    position: absolute;
    top: 0px;
    left: 10px;
    font-weight: 400;
    color:#6A6A6A;

    pointer-events: none;
    font-size: 18px;
    line-height: 22px;
    font-family:'InriaSans';
    animation: textInput-module_rescaleUpBottom__wnmJf 300ms;
    opacity: 1;
}

.textInput-module_transitionLabelOutBottom__-7MZQ {
    position: absolute;
    top: -20px;
    left: 0px;
    line-height: 22px;
    color:#6A6A6A;
    font-weight: 400;
    font-size: 14px;
    pointer-events: none;
    font-family:'InriaSans';

    animation: textInput-module_rescaleDownBottom__J4Pf- 300ms;

}

/**********************/
/**********************/
/* BORDER BOTTOM  END */
/**********************/
/**********************/


/**********************/
/**********************/
/* BORDER ROUND START */
/**********************/
/**********************/
.textInput-module_textInputRound__HzqSh {
    outline: solid;
    outline-color: #6A6A6A;
    outline-width: 1px;
    border-width: 0px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border-style: solid;
    justify-content: center;
    font-size: 18px;
    line-height: 22px;
    height:40px;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
}

.textInput-module_textInputRound__HzqSh input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
    align-items: center;
}

.textInput-module_textInputRound__HzqSh:hover {
    align-items: center;
}


.textInput-module_textInputRoundFocused__FBQuP {
    outline: solid;
    border-radius: 8px;
    outline-width: 1px;
    border-width:0px;
    outline-color: #FA6400;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    height: 40px;
}

.textInput-module_textInputRoundFocused__FBQuP input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
}

.textInput-module_transitionLabelInRound__G0EhE {
    position: absolute;
    top: 8px;
    left: 16px;
    font-weight: 400;
    pointer-events: none;
    font-size: 18px;

    animation: textInput-module_rescaleUpRound__7tEG6 300ms;
    opacity: 1;
}

.textInput-module_transitionLabelOutRound__hgYay {
    position: absolute;
    top: -28px;
    left: 0px;
    font-weight: 400;
    font-size: 14px;
    pointer-events: none;

    animation: textInput-module_rescaleDownRound__YAJAk 300ms;

}
@keyframes textInput-module_rescaleUpRound__7tEG6 {
    from {
        top: -28px;
        font-size: 14px;
        left: 0px;
    }

    to {
        top: 8px;
        font-size: 18px;
        left: 16px;
    }
}

@keyframes textInput-module_rescaleDownRound__YAJAk {
    from {
        top: 8px;
        font-size: 18px;
        left: 16px;
    }

    to {
        top: -28px;
        font-size: 14px;
        left: 0px;
    }
}


.textInput-module_textInputRoundDisabled__kYNxl {
    outline: 0;
    background-color: #F4F4F4;
    border-width: 1px;
    border-color: #BEBEBE;
    border-radius: 8px;
    margin-bottom: 3px;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px 16px 8px 16px;
}

/**********************/
/**********************/
/* BORDER ROUND END */
/**********************/
/**********************/



/**********************/
/**********************/
/**********************/
/* BORDER SHADOW START */
/**********************/
/**********************/
/**********************/


.textInput-module_textInputShadow__zXAkk {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    border-width: 0px;
    border-radius: 8px;
    border-color: black;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    border-style: solid;
    padding: 8px 16px 8px 16px;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
}

.textInput-module_textInputShadow__zXAkk input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;

    align-items: center;
}

.textInput-module_textInputShadow__zXAkk:hover {
    border-width: 0px;
    align-items: center;
}


.textInput-module_textInputShadowFocused__MnA5S {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 3px;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    border-color: #FA6400;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px 16px 8px 16px;
}

.textInput-module_textInputShadowDisabled__ssiYp {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
    outline: 0;
    background-color: #F4F4F4;
    border-width: 0px;
    border-radius: 8px;
    margin-bottom: 3px;
    align-items: center;
    align-content: center;
    display: flex;
    border-style: solid;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
    padding: 8px 16px 8px 16px;
}

.textInput-module_textInputShadowFocused__MnA5S input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
}

input {
    outline: 0;
    border-width: 0;
    border-radius: 8px;
    background-color: #FFFFFF00;
}

.textInput-module_transitionLabelInShadow__nQlgG {
    position: absolute;
    top: 8px;
    left: 16px;
    font-weight: 400;
    pointer-events: none;
    font-size: 2rem;
    

    animation: textInput-module_rescaleUpShadow__erGCf 300ms;
    opacity: 1;
}

.textInput-module_transitionLabelOutShadow__ZpLVg {
    position: absolute;
    top: -20px;
    left: 0px;
    font-weight: 400;
    font-size: 0.8rem;
    pointer-events: none;

    animation: textInput-module_rescaleDownShadow__9lXZG 300ms;

}

@keyframes textInput-module_rescaleUpShadow__erGCf {
    from {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }

    to {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }
}

@keyframes textInput-module_rescaleDownShadow__9lXZG {
    from {
        top: 8px;
        font-size: 2rem;
        left: 16px;
    }

    to {
        top: -20px;
        font-size: 0.8rem;
        left: 0px;
    }
}


/**********************/
/**********************/
/* BORDER SHADOW END */
/**********************/
/**********************/`, styles$9 = { textInputContainer: "textInput-module_textInputContainer__up37V", prefix: "textInput-module_prefix__TBfJh", sufix: "textInput-module_sufix__Cvjfk", textInputBottom: "textInput-module_textInputBottom__7ooJC", textInputBottomDisabled: "textInput-module_textInputBottomDisabled__PvgDj", textInputBottomFocused: "textInput-module_textInputBottomFocused__N4ZXX", transitionLabelInBottom: "textInput-module_transitionLabelInBottom__hmyLa", rescaleUpBottom: "textInput-module_rescaleUpBottom__wnmJf", transitionLabelOutBottom: "textInput-module_transitionLabelOutBottom__-7MZQ", rescaleDownBottom: "textInput-module_rescaleDownBottom__J4Pf-", textInputRound: "textInput-module_textInputRound__HzqSh", textInputRoundFocused: "textInput-module_textInputRoundFocused__FBQuP", transitionLabelInRound: "textInput-module_transitionLabelInRound__G0EhE", rescaleUpRound: "textInput-module_rescaleUpRound__7tEG6", transitionLabelOutRound: "textInput-module_transitionLabelOutRound__hgYay", rescaleDownRound: "textInput-module_rescaleDownRound__YAJAk", textInputRoundDisabled: "textInput-module_textInputRoundDisabled__kYNxl", textInputShadow: "textInput-module_textInputShadow__zXAkk", textInputShadowFocused: "textInput-module_textInputShadowFocused__MnA5S", textInputShadowDisabled: "textInput-module_textInputShadowDisabled__ssiYp", transitionLabelInShadow: "textInput-module_transitionLabelInShadow__nQlgG", rescaleUpShadow: "textInput-module_rescaleUpShadow__erGCf", transitionLabelOutShadow: "textInput-module_transitionLabelOutShadow__ZpLVg", rescaleDownShadow: "textInput-module_rescaleDownShadow__9lXZG" };
    styleInject(css_248z$9);
    var TextInput = function(_a) {
      var controller = _a.controller, _b = _a.name, name = _b === void 0 ? "field" : _b, register = _a.register, _c = _a.format, format = _c === void 0 ? function(v) {
        return v;
      } : _c, _d = _a.disabled, disabled2 = _d === void 0 ? !1 : _d, _e = _a.border, border = _e === void 0 ? "bottom" : _e, _f = _a.sufix, sufix = _f === void 0 ? "" : _f, _g = _a.prefix, prefix = _g === void 0 ? "" : _g, _h = _a.placeHolder, placeHolder = _h === void 0 ? "" : _h, _j = _a.helperText, helperText = _j === void 0 ? "" : _j;
      _a.sizeVariant;
      var isValid = _a.isValid, _l = _a.error, error = _l === void 0 ? "" : _l, _m = _a.label, label = _m === void 0 ? "Label" : _m, _o = _a.onChange, onChange2 = _o === void 0 ? function() {
      } : _o, props = __rest(_a, ["controller", "name", "register", "format", "disabled", "border", "sufix", "prefix", "placeHolder", "helperText", "sizeVariant", "isValid", "error", "label", "onChange"]), _p = React.useState(!1), isFocused = _p[0], setIsFocused = _p[1], _q = React.useState(""), value = _q[0], setValue = _q[1], theme = React.useContext(ThemeContext).theme, getVariant = function() {
        return error != "" ? "error" : isValid ? "success" : "info";
      }, variantColor = {
        error: "#C51111",
        success: "#258825",
        info: c4({ type: "primary", brand: theme })
      }, variantBorder = {
        bottom: {
          focused: styles$9.textInputBottomFocused,
          blur: styles$9.textInputBottom,
          labelOut: styles$9.transitionLabelOutBottom,
          labelIn: styles$9.transitionLabelInBottom,
          disabled: styles$9.textInputBottomDisabled
        },
        round: {
          focused: styles$9.textInputRoundFocused,
          blur: styles$9.textInputRound,
          labelOut: styles$9.transitionLabelOutRound,
          labelIn: styles$9.transitionLabelInRound,
          disabled: styles$9.textInputRoundDisabled
        },
        shadow: {
          focused: styles$9.textInputShadowFocused,
          blur: styles$9.textInputShadow,
          labelOut: styles$9.transitionLabelOutShadow,
          labelIn: styles$9.transitionLabelInShadow,
          disabled: styles$9.textInputShadowDisabled
        }
      }, getInnerContainerStyle = function() {
        return disabled2 ? variantBorder[border].disabled : isFocused ? variantBorder[border].focused : variantBorder[border].blur;
      };
      return React.createElement(
        "div",
        { className: styles$9.textInputContainer },
        React.createElement(
          "div",
          { style: { position: "relative", borderColor: variantColor[getVariant()] }, className: getInnerContainerStyle() },
          React.createElement("p", { style: { marginBlock: 0, color: "#6A6A6A" }, className: isFocused || value ? variantBorder[border].labelOut : variantBorder[border].labelIn }, label),
          React.createElement(
            "div",
            { style: { display: "flex", width: "100%", flexDirection: "row", alignItems: "baseline" } },
            prefix != "" && (isFocused || value != "") && React.createElement("p", { className: styles$9.prefix }, prefix),
            register && React.createElement("input", __assign({}, register(name, controller), { placeholder: isFocused ? placeHolder : "", style: { width: "100%", fontSize: "18px", lineHeight: "22px" }, onFocus: function() {
              return setIsFocused(!0);
            }, onBlur: function() {
              return setIsFocused(!1);
            }, disabled: disabled2, name, onChange: function(e) {
              register(name).onChange(e), setValue(e.target.value);
            } }, props)),
            !register && React.createElement("input", __assign({ value, placeholder: isFocused ? placeHolder : "", style: { width: "100%" }, onFocus: function() {
              return setIsFocused(!0);
            }, onBlur: function() {
              return setIsFocused(!1);
            }, onChange: function(e) {
              setValue(format(e.target.value)), onChange2(e);
            }, disabled: disabled2 }, props)),
            sufix != "" && (isFocused || value != "") && React.createElement("p", { className: styles$9.sufix }, sufix),
            isValid && error == "" && React.createElement(FontAwesomeIcon2, { color: "#258825", icon: faCheckCircle }),
            error != "" && React.createElement(FontAwesomeIcon2, { color: "#C51111", icon: faCircleExclamation })
          )
        ),
        React.createElement(
          "div",
          { style: { height: "20px" } },
          React.createElement(HelperText, { variant: getVariant(), children: error != "" ? error : helperText })
        )
      );
    }, css_248z$8 = `.grid-module_grid__dBMpx{
    display: grid;
    width: 100%;
}
@media (min-width: 0px) and (max-width: 359px) {
    .grid-module_grid__dBMpx {
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
    }
}

@media (min-width: 360px) and (max-width: 767px) {
    .grid-module_grid__dBMpx {
        grid-template-columns:repeat(4, 1fr);
        gap: 16px;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .grid-module_grid__dBMpx {
        grid-template-columns:repeat(6, 1fr);
        gap: 16px;
    }
}

@media (min-width: 1024px) and (max-width: 1279px) {
    .grid-module_grid__dBMpx {
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;
    }
}

@media (min-width: 1280px) and (max-width: 1500px) {
    .grid-module_grid__dBMpx {
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;

    }
}
@media (min-width: 1500px) {
    .grid-module_grid__dBMpx {
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;

    }
}`, styles$8 = { grid: "grid-module_grid__dBMpx" };
    styleInject(css_248z$8);
    var Grid4 = function(_a) {
      var children = _a.children, style = _a.style;
      return React.createElement("div", { className: styles$8.grid, style }, children);
    }, Box4 = function(_a) {
      var children = _a.children, _b = _a.columns, columns = _b === void 0 ? 1 : _b, style = _a.style, _c = React.useState(0), windowWidth = _c[0], setWindowWidth = _c[1], resizeWindow = function() {
        setWindowWidth(window.innerWidth);
      }, colTypes = [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl"
      ];
      React.useEffect(function() {
        return resizeWindow(), window.addEventListener("resize", resizeWindow), function() {
          return window.removeEventListener("resize", resizeWindow);
        };
      }, []);
      var getColumns = function(width) {
        if (typeof columns == "number")
          return columns;
        switch (!0) {
          case width < 359:
            return columns.xs ? columns.xs : getNextDefinedColumn("sm");
          case width < 767:
            return columns.sm ? columns.sm : getNextDefinedColumn("md");
          case width < 1023:
            return columns.md ? columns.md : getNextDefinedColumn("md");
          case width < 1279:
            return columns.lg ? columns.lg : getNextDefinedColumn("md");
          case width < 1500:
            return columns.xl ? columns.xl : getNextDefinedColumn("md");
          case width > 1500:
            return columns.xxl ? columns.xxl : getNextDefinedColumn("md");
          default:
            return 1;
        }
      }, getNextDefinedColumn = function(col) {
        for (var indexStart = colTypes.findIndex(function(c5) {
          return c5 == col;
        }), i = indexStart; i < colTypes.length; i++)
          if (typeof columns != "number" && columns[colTypes[i]])
            return columns[colTypes[i]];
        for (var j = indexStart; j > 0; j--)
          if (typeof columns != "number" && columns[colTypes[j]])
            return columns[colTypes[j]];
      };
      return React.createElement("div", { style: Object.assign({ gridColumn: "span ".concat(getColumns(windowWidth)) }, style) }, children);
    }, css_248z$7 = `.breadcrumb-module_breadcrumbContainer__AVXhc{
    display: flex;
    flex-direction: row;
    align-items: center;
}`, styles$7 = { breadcrumbContainer: "breadcrumb-module_breadcrumbContainer__AVXhc" };
    styleInject(css_248z$7);
    var Breadcrumb2 = function(_a) {
      var _b = _a.list, list = _b === void 0 ? [] : _b;
      return React.createElement("div", { className: styles$7.breadcrumbContainer }, list.map(function(e, i) {
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(Text3, { text: e.label, isLink: i != list.length - 1, href: e.href, className: styles$7.progressBarLabel }),
          React.createElement(FontAwesomeIcon2, { style: { marginLeft: 5, marginRight: 5, height: 15 }, icon: faChevronRight2 })
        );
      }));
    }, css_248z$6 = `.tab-module_tabsContainer__WNv7V{
    border-width:0px 0px 1px 0px;
    border-style: solid;
    border-color: #BEBEBE;
    width: 100%;
    display: flex;
    flex-direction: row;

}
.tab-module_tabItem__tIZ3t{
    height:48px;
    padding: 14px 16px 12px 16px;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    cursor: pointer;
}

.tab-module_tabItem__tIZ3t:hover{
    height:48px;
    padding: 14px 16px 12px 16px;
    border-radius: 8px 8px 0px 0px;
    border-bottom: 3px solid #FA6400;
    background: #F4F4F4;
    
}
.tab-module_tabItemActive__eUAs8{
    height:48px;
    padding: 14px 16px 12px 16px;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    cursor: pointer;
    color:#FA6400;
    border-bottom: 3px solid #FA6400;
}`, styles$6 = { tabsContainer: "tab-module_tabsContainer__WNv7V", tabItem: "tab-module_tabItem__tIZ3t", tabItemActive: "tab-module_tabItemActive__eUAs8" };
    styleInject(css_248z$6);
    var Tabs2 = function(_a) {
      var _b = _a.tabs, tabs = _b === void 0 ? [{ label: "Label 1" }, { label: "Label 2" }] : _b, _c = _a.onTabSelected, onTabSelected = _c === void 0 ? function(i) {
        return console.log(i);
      } : _c, _d = React.useState(-1), active = _d[0], setActive = _d[1];
      return React.useEffect(function() {
        active != -1 && onTabSelected(active);
      }, [active]), React.createElement("div", { className: styles$6.tabsContainer }, tabs.map(function(t, i) {
        return React.createElement(
          "div",
          { onClick: function() {
            setActive(i);
          }, className: i == active ? styles$6.tabItemActive : styles$6.tabItem },
          React.createElement(Text3, { text: t.label })
        );
      }));
    }, css_248z$5 = `.chip-module_chip__BvrgE{
    padding: 2px 8px 2px 8px;
    border-radius: 4px;
    margin-bottom: 4px;
    height:24px;
    display: flex;
    align-content: center;
    justify-content: center;
    width: auto;

}
.chip-module_chipContainer__s-joj{
    width: fit-content;
}`, styles$5 = { chip: "chip-module_chip__BvrgE", chipContainer: "chip-module_chipContainer__s-joj" };
    styleInject(css_248z$5);
    var Chip2 = function(_a) {
      var _b = _a.label, label = _b === void 0 ? "Label" : _b, _c = _a.state, state = _c === void 0 ? "Info" : _c, _d = _a.variant, variant = _d === void 0 ? "light" : _d, bgColor = {
        Brand: {
          light: "#FFF3EB",
          dark: "#C85000"
        },
        Eminent: {
          light: "#EFF6FC",
          dark: "#002041"
        },
        Move: {
          light: "#F3EDFF",
          dark: "#530ADB"
        },
        Warning: {
          light: "#FDF5E6",
          dark: "#E99D09"
        },
        Info: {
          light: "#EAF1F8",
          dark: "#2970BC"
        },
        Success: {
          light: "#E9F3E9",
          dark: "#258825"
        },
        Danger: {
          light: "#F9E7E7",
          dark: "#C51111"
        },
        Grey: {
          light: "#E6E6E6",
          dark: "#666666"
        },
        Transparent: {
          light: "#FFFFFF00",
          dark: "#FFFFFF00"
        }
      }, textColor = {
        Brand: {
          light: "#C85000",
          dark: "#FFFFFF"
        },
        Eminent: {
          light: "#002041",
          dark: "#FFFFFF"
        },
        Move: {
          light: "#530ADB",
          dark: "#FFFFFF"
        },
        Warning: {
          light: "#000000",
          dark: "#000000"
        },
        Info: {
          light: "#2970BC",
          dark: "#FFFFFF"
        },
        Success: {
          light: "#258825",
          dark: "#FFFFFF"
        },
        Danger: {
          light: "#C51111",
          dark: "#FFFFFF"
        },
        Grey: {
          light: "#666666",
          dark: "#FFFFFF"
        },
        Transparent: {
          light: "#666666",
          dark: "#666666"
        }
      }, borderColor = {
        Brand: {
          light: "#FFE2CE",
          dark: "#C85000"
        },
        Eminent: {
          light: "#D8E8F8",
          dark: "#002041"
        },
        Move: {
          light: "#E2D2FF",
          dark: "#530ADB"
        },
        Warning: {
          light: "#F6D89D",
          dark: "#E99D09"
        },
        Info: {
          light: "#BFD4EB",
          dark: "#2970BC"
        },
        Success: {
          light: "#BEDBBE",
          dark: "#258825"
        },
        Danger: {
          light: "#EEB8B8",
          dark: "#C51111"
        },
        Grey: {
          light: "#E6E6E6",
          dark: "#666666"
        },
        Transparent: {
          light: "#E6E6E6",
          dark: "#E6E6E6"
        }
      };
      return React.createElement(
        "div",
        { className: styles$5.chipContainer },
        React.createElement(
          "div",
          { className: styles$5.chip, style: {
            backgroundColor: bgColor[state][variant],
            borderColor: borderColor[state][variant]
          } },
          React.createElement(Text3, { type: "S7", color: textColor[state][variant], text: label })
        )
      );
    }, css_248z$4 = `.tableCell-module_tableCellContainer__8CfEi {

  /* Content */



z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  padding: 20px 12px;

  min-width: 115px;
  height: 56px;
  overflow-x: hidden;
  overflow-y: hidden;




  /* Monochrome/white 0 */
  width: fit-content;

}



.tableCell-module_tableCellContainer__8CfEi p {
  margin: 0;
  text-align: left;
}


.tableCell-module_stateCellContainer__tBHqi{
  display: flex;
  align-items: center;
  flex-direction: row;
}

.tableCell-module_stateCircle__bKU5w{
  width: 12px;
  height:12px;
  border-radius: 10px;
  margin-right: 8px;
}`, styles$4 = { tableCellContainer: "tableCell-module_tableCellContainer__8CfEi", stateCellContainer: "tableCell-module_stateCellContainer__tBHqi", stateCircle: "tableCell-module_stateCircle__bKU5w" };
    styleInject(css_248z$4);
    var TableCell = function(_a) {
      var _b = _a.data, data = _b === void 0 ? " " : _b, _c = _a.dataType, dataType = _c === void 0 ? "text" : _c, props = __rest(_a, ["data", "dataType"]), dataFormatter = function(data2) {
        switch (dataType) {
          case "text":
            return React.createElement(
              "div",
              null,
              " ",
              data2
            );
          case "state":
            var formatedData = data2;
            return React.createElement(
              "div",
              { className: styles$4.stateCellContainer },
              " ",
              React.createElement("div", { style: { backgroundColor: stateColor[formatedData.state] }, className: styles$4.stateCircle }),
              React.createElement("div", null, formatedData.label)
            );
        }
        return data2;
      }, stateColor = {
        danger: "#C51111",
        success: "#258825",
        warning: "#E99D09",
        disabled: "#6A6A6A",
        info: "#2970BC"
      };
      return React.createElement("div", { style: { width: props.width }, className: styles$4.tableCellContainer }, dataFormatter(data));
    }, css_248z$3 = `.table-module_tableContentContainer__xBdVb{
    display: flex;
    flex-direction: row;
}

.table-module_tableContainer__WEv9-{
    display: flex;
    flex-direction: column;

    width: fit-content;
}
.table-module_tableHeaderContainer__wfQ8y{
    box-shadow: 0px 5px 4px -2px #F1F1F1;
    display: flex;
    flex-direction: row;
}

.table-module_tableCellContainer__3pRy-{
    border-bottom:grey ;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}`, styles$3 = { tableContentContainer: "table-module_tableContentContainer__xBdVb", tableContainer: "table-module_tableContainer__WEv9-", tableHeaderContainer: "table-module_tableHeaderContainer__wfQ8y", tableCellContainer: "table-module_tableCellContainer__3pRy-" };
    styleInject(css_248z$3);
    var css_248z$2 = `.tableHeader-module_tableHeaderContainer__RATb7 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 12px;
  align-content: center;
  min-width: 115px;
  min-height: 56px;
  z-index: 500;
  /* Monochrome/white 0 */
  width: fit-content;

  background: #FFFFFF;
  /* Tables/ShadowHeaderCell */

}

.tableHeader-module_tableHeaderContainer__RATb7 p{
  margin:0px
}
.tableHeader-module_sortIcon__7-SHD{
  margin-left: 5px;
  cursor:pointer
}`, styles$2 = { tableHeaderContainer: "tableHeader-module_tableHeaderContainer__RATb7", sortIcon: "tableHeader-module_sortIcon__7-SHD" };
    styleInject(css_248z$2);
    var TableHeader = function(_a) {
      var _b = _a.sortState, sortState = _b === void 0 ? "BASE" : _b, _c = _a.sort, sort = _c === void 0 ? function() {
      } : _c, _d = _a.data, data = _d === void 0 ? "" : _d;
      _a.dataType;
      var columnKey = _a.columnKey, props = __rest(_a, ["sortState", "sort", "data", "dataType", "columnKey"]), sorter = {
        ASC: React.createElement(FontAwesomeIcon2, { onClick: function() {
          sort(columnKey, "DESC");
        }, className: styles$2.sortIcon, icon: faChevronUp }),
        DESC: React.createElement(FontAwesomeIcon2, { onClick: function() {
          sort(columnKey, "ASC");
        }, className: styles$2.sortIcon, icon: faChevronDown2 }),
        BASE: React.createElement(FontAwesomeIcon2, { onClick: function() {
          sort(columnKey, "ASC");
        }, className: styles$2.sortIcon, icon: faSort })
      }, headerFormatter = function(data2) {
        return data2;
      };
      return React.createElement(
        "div",
        { className: styles$2.tableHeaderContainer },
        React.createElement("p", null, headerFormatter(data)),
        props.sortable && sorter[sortState]
      );
    }, css_248z$1 = `.tableFooter-module_tableFooterContainer__gMufQ {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 12px;

  justify-content: space-around;
  z-index: 500;
  /* Monochrome/white 0 */
  width: 100%;

  background: #FFFFFF;
  /* Tables/ShadowHeaderCell */

  box-shadow: 0px 5px 4px -2px #F1F1F1;
}
.tableFooter-module_paginationContainer__uff8R{
  display:flex;
  flex-direction: row;
  
}
`, styles$1 = { tableFooterContainer: "tableFooter-module_tableFooterContainer__gMufQ", paginationContainer: "tableFooter-module_paginationContainer__uff8R" };
    styleInject(css_248z$1);
    var css_248z = `.pagination-module_paginatorContainer__O-JBc{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.pagination-module_arrowContainer__hgo9g{
  width: 24px;
  height:24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  cursor:pointer
}


`, styles = { paginatorContainer: "pagination-module_paginatorContainer__O-JBc", arrowContainer: "pagination-module_arrowContainer__hgo9g" };
    styleInject(css_248z);
    var Pagination = function(_a) {
      var _b = _a.bgColorHover, bgColorHover = _b === void 0 ? "#F4F4F4" : _b, setPage = _a.setPage, _c = _a.totalPages, totalPages = _c === void 0 ? 10 : _c, _d = _a.position, position = _d === void 0 ? 1 : _d, _e = _a.variant, variant = _e === void 0 ? "regular" : _e, _f = React.useState(position), positionState = _f[0], setPositionState = _f[1], _g = React.useState(position == 1), disabledLeftArrow = _g[0], setDisabledLeftArrow = _g[1], _h = React.useState(position == totalPages), disabledRightArrow = _h[0], setDisabledRightArrow = _h[1], _j = React.useState(!1), isHoverLeftArrow = _j[0], setIsHoverLeftArrow = _j[1], _k = React.useState(!1), isHoverRightArrow = _k[0], setIsHoverRightArrow = _k[1], _l = React.useState(totalPages), pages = _l[0], setPages = _l[1], formatPosition = function(position2) {
        for (var counter = 0, totalPagesAux = pages; totalPagesAux >= 1; )
          totalPagesAux = totalPagesAux / 10, counter++;
        return String(position2).padStart(counter, "0");
      };
      React.useEffect(function() {
        setPages(totalPages);
      }, [totalPages]), React.useEffect(function() {
        setDisabledLeftArrow(positionState == 1), setDisabledRightArrow(positionState == pages);
      }, [positionState, pages]);
      var prev = function() {
        setPositionState(positionState - 1), setPage(positionState - 1);
      }, next = function() {
        setPositionState(positionState + 1), setPage(positionState + 1);
      };
      return React.createElement(
        "div",
        { className: styles.paginatorContainer },
        React.createElement(
          "div",
          { className: styles.arrowContainer, onMouseLeave: function() {
            return setIsHoverLeftArrow(!1);
          }, onMouseEnter: function() {
            return setIsHoverLeftArrow(!disabledLeftArrow);
          }, onClick: function() {
            return !disabledLeftArrow && prev();
          }, style: { backgroundColor: isHoverLeftArrow ? bgColorHover : "", marginRight: "2px" } },
          React.createElement(FontAwesomeIcon2, { style: { color: disabledLeftArrow ? "#B3B3B3" : "#2B2B2B" }, className: styles.arrowIcon, icon: faChevronLeft })
        ),
        variant == "regular" && React.createElement(
          "div",
          { style: { userSelect: "none" } },
          formatPosition(positionState),
          " de ",
          totalPages,
          " p\xE1ginas"
        ),
        variant == "small" && React.createElement(
          "div",
          { style: { userSelect: "none" } },
          formatPosition(positionState),
          " / ",
          totalPages,
          " "
        ),
        React.createElement(
          "div",
          { className: styles.arrowContainer, onMouseLeave: function() {
            return setIsHoverRightArrow(!1);
          }, onMouseEnter: function() {
            return setIsHoverRightArrow(!disabledRightArrow);
          }, onClick: function() {
            return !disabledRightArrow && next();
          }, style: { backgroundColor: isHoverRightArrow ? bgColorHover : "", marginLeft: "2px" } },
          React.createElement(FontAwesomeIcon2, { style: { color: disabledRightArrow ? "#B3B3B3" : "#2B2B2B" }, className: styles.arrowIcon, icon: faChevronRight2 })
        )
      );
    }, TableFooter = function(_a) {
      var setPageNumber = _a.setPageNumber, setResultPerPage = _a.setResultPerPage, total = _a.total, _b = React.useState(5), rpp = _b[0], setRpp = _b[1], _c = React.useState(1), totalPages = _c[0], setTotalPages = _c[1];
      return React.useEffect(function() {
        setResultPerPage(rpp), setTotalPages(Math.ceil(total / rpp));
      }, [rpp]), React.useEffect(function() {
        setTotalPages(Math.ceil(total / 5));
      }, [total]), React.createElement(
        "div",
        { className: styles$1.tableFooterContainer },
        React.createElement(
          "div",
          { className: styles$1.paginationContainer },
          React.createElement(
            "select",
            { style: { outline: "none", border: "none" }, onChange: function(e) {
              return setRpp(parseInt(e.target.value));
            }, defaultValue: rpp },
            React.createElement("option", { value: 5 }, "5"),
            React.createElement("option", { value: 10 }, "10"),
            React.createElement("option", { value: 20 }, "20"),
            React.createElement("option", { value: 50 }, "50")
          ),
          React.createElement(
            "p",
            { style: { userSelect: "none", margin: "0px" } },
            " ",
            "de",
            " ",
            total,
            " ",
            "resultados"
          )
        ),
        React.createElement(Pagination, { setPage: setPageNumber, totalPages })
      );
    }, Table2 = function(_a) {
      var _b = _a.data, data = _b === void 0 ? "DATA" : _b, tableHeaders = _a.tableHeaders, _c = _a.paginated, paginated = _c === void 0 ? !1 : _c, _d = React.useState(new Array()), filteredResult = _d[0], setFilteredResult = _d[1], _e = React.useState(1), pageNumber = _e[0], setPageNumber = _e[1], _f = React.useState(5), resultsPerPage = _f[0], setResultsPerPage = _f[1], _g = React.useState(new Array()), columns = _g[0], setColumns = _g[1], _h = React.useState(new Array()), dataTable = _h[0], setDataTable = _h[1], _j = React.useState(0), total = _j[0], setTotal = _j[1];
      React.useEffect(function() {
        if (setDataTable(data), tableHeaders)
          setColumns(tableHeaders);
        else {
          var tempColumns_1 = new Array();
          Object.keys(data[0]).forEach(function(key) {
            return tempColumns_1.push({
              label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
              key,
              type: "text",
              sortable: !1
            });
          }), setColumns(tempColumns_1);
        }
      }, [data]), React.useEffect(function() {
        setTotal(dataTable.length);
        var filtereAux = __spreadArray([], dataTable, !0);
        pageNumber == 1 ? setFilteredResult(filtereAux.slice(0, resultsPerPage)) : setFilteredResult(filtereAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * pageNumber - 1 + resultsPerPage));
      }, [dataTable]), React.useEffect(function() {
        var filtereAux = __spreadArray([], dataTable, !0);
        pageNumber == 1 ? setFilteredResult(filtereAux.slice(0, resultsPerPage)) : setFilteredResult(filtereAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * (pageNumber - 1) + resultsPerPage));
      }, [resultsPerPage, pageNumber]);
      var sort = function(key, order) {
        for (var filteredAux = __spreadArray([], dataTable, !0), headers = __spreadArray([], columns, !0), i = 0; i < headers.length; i++)
          headers[i].key != key ? headers[i].sortState = "BASE" : headers[i].sortState = order;
        setColumns(headers), order == "DESC" ? (filteredAux = filteredAux.sort(function(a, b) {
          return a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0;
        }), setFilteredResult(filteredAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * (pageNumber - 1) + resultsPerPage))) : (filteredAux = filteredAux.sort(function(a, b) {
          return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
        }), setFilteredResult(filteredAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * (pageNumber - 1) + resultsPerPage)));
      };
      return React.createElement(
        "div",
        { className: styles$3.tableContainer },
        React.createElement("div", { className: styles$3.tableContentContainer }, columns.map(function(c5) {
          return React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: styles$3.tableHeaderContainer },
              React.createElement(TableHeader, { sortState: c5.sortState, columnKey: c5.key, sort, sortable: !!c5.sortable, data: c5.label })
            ),
            filteredResult.map(function(r) {
              return React.createElement(
                "div",
                { className: styles$3.tableCellContainer },
                React.createElement(TableCell, { dataType: c5.type, data: r[c5.key] })
              );
            })
          );
        })),
        paginated && React.createElement(TableFooter, { setPageNumber, setResultPerPage: setResultsPerPage, total })
      );
    };
    exports.Box = Box4;
    exports.Breadcrumb = Breadcrumb2;
    exports.Button = Button2;
    exports.Card = Card;
    exports.Checkbox = Checkbox;
    exports.Chip = Chip2;
    exports.Grid = Grid4;
    exports.Select = Select;
    exports.Table = Table2;
    exports.Tabs = Tabs2;
    exports.Text = Text3;
    exports.TextArea = TextArea;
    exports.TextInput = TextInput;
    exports.ThemeContext = ThemeContext;
    exports.ThemeProvider = ThemeProvider;
    exports.Tooltip = Tooltip;
    exports.c = c4;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-MWGN6HD2.css";

// node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min_default = "/build/_assets/bootstrap.min-UQZAQPYB.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Galicia Api Market",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: styles_default },
  { rel: "stylesheet", href: bootstrap_min_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader
});
var import_system_design3 = __toESM(require_dist()), import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/components/AsideMenu/AsideMenu.tsx
var import_system_design = __toESM(require_dist()), import_react3 = require("@remix-run/react");

// app/components/AsideMenu/apis.json
var apis_default = [
  {
    section: "PAGOS",
    apis: [
      {
        name: "API Transferencia",
        mark: `# Integraciones Launchpad.\r
\r
El ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r
\r
1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r
\r
2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r
\r
3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r
\r
### Gr\xE1fico para simplificar la idea \r
\r
[![img-envio-retorno](/envio-retorno.jpg)]()\r
\r
La flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r
Este set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r
\r
\r
1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r
\r
2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r
\r
3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r
\r
\r
B\xE1sicamente el contexto consta de 3 partes principales.\r
\r
1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r
\r
2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r
\r
3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r
\r
Depende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r
\r
Por ejemplo dentro de **context-service** existe el endpoint \r
[![img-envio-retorno](/post-launchpad.jpg)]()\r
 \r
Este endpoint crea un contexto y retorna su ID.\r
\r
### Ejemplo response caso 1\r
\r
\r
[![img-envio-retorno](/objeto-endpoint.jpg)]()\r
\r
\r
\r
Quedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r
\r
### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r
\r
\r
El par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r
\r
Invocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r
\r
Existen otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r
Pero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.`,
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "POST",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Historial Pagos",
        mark: `# Integraciones Launchpad.\r
\r
El ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r
\r
1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r
\r
2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r
\r
3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r
\r
### Gr\xE1fico para simplificar la idea \r
\r
[![img-envio-retorno](/envio-retorno.jpg)]()\r
\r
La flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r
Este set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r
\r
\r
1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r
\r
2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r
\r
3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r
\r
\r
B\xE1sicamente el contexto consta de 3 partes principales.\r
\r
1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r
\r
2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r
\r
3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r
\r
Depende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r
\r
Por ejemplo dentro de **context-service** existe el endpoint \r
[![img-envio-retorno](/post-launchpad.jpg)]()\r
 \r
Este endpoint crea un contexto y retorna su ID.\r
\r
### Ejemplo response caso 1\r
\r
\r
[![img-envio-retorno](/objeto-endpoint.jpg)]()\r
\r
\r
\r
Quedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r
\r
### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r
\r
\r
El par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r
\r
Invocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r
\r
Existen otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r
Pero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.`,
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "GET",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Eliminar Pago",
        mark: `# Integraciones Launchpad.\r
\r
El ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r
\r
1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r
\r
2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r
\r
3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r
\r
### Gr\xE1fico para simplificar la idea \r
\r
[![img-envio-retorno](/envio-retorno.jpg)]()\r
\r
La flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r
Este set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r
\r
\r
1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r
\r
2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r
\r
3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r
\r
\r
B\xE1sicamente el contexto consta de 3 partes principales.\r
\r
1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r
\r
2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r
\r
3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r
\r
Depende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r
\r
Por ejemplo dentro de **context-service** existe el endpoint \r
[![img-envio-retorno](/post-launchpad.jpg)]()\r
 \r
Este endpoint crea un contexto y retorna su ID.\r
\r
### Ejemplo response caso 1\r
\r
\r
[![img-envio-retorno](/objeto-endpoint.jpg)]()\r
\r
\r
\r
Quedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r
\r
### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r
\r
\r
El par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r
\r
Invocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r
\r
Existen otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r
Pero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.`,
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "DELETE",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    section: "CUENTAS",
    apis: [
      {
        name: "API Alta Cuenta",
        mark: `# Integraciones Launchpad.\r
\r
El ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r
\r
1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r
\r
2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r
\r
3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r
\r
### Gr\xE1fico para simplificar la idea \r
\r
[![img-envio-retorno](/envio-retorno.jpg)]()\r
\r
La flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r
Este set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r
\r
\r
1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r
\r
2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r
\r
3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r
\r
\r
B\xE1sicamente el contexto consta de 3 partes principales.\r
\r
1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r
\r
2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r
\r
3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r
\r
Depende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r
\r
Por ejemplo dentro de **context-service** existe el endpoint \r
[![img-envio-retorno](/post-launchpad.jpg)]()\r
 \r
Este endpoint crea un contexto y retorna su ID.\r
\r
### Ejemplo response caso 1\r
\r
\r
[![img-envio-retorno](/objeto-endpoint.jpg)]()\r
\r
\r
\r
Quedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r
\r
### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r
\r
\r
El par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r
\r
Invocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r
\r
Existen otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r
Pero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.`,
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "POST",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Historial Pagos",
        mark: `# Integraciones Launchpad.\r
\r
El ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r
\r
1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r
\r
2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r
\r
3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r
\r
### Gr\xE1fico para simplificar la idea \r
\r
[![img-envio-retorno](/envio-retorno.jpg)]()\r
\r
La flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r
Este set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r
\r
\r
1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r
\r
2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r
\r
3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r
\r
\r
B\xE1sicamente el contexto consta de 3 partes principales.\r
\r
1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r
\r
2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r
\r
3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r
\r
Depende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r
\r
Por ejemplo dentro de **context-service** existe el endpoint \r
[![img-envio-retorno](/post-launchpad.jpg)]()\r
 \r
Este endpoint crea un contexto y retorna su ID.\r
\r
### Ejemplo response caso 1\r
\r
\r
[![img-envio-retorno](/objeto-endpoint.jpg)]()\r
\r
\r
\r
Quedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r
\r
### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r
\r
\r
El par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r
\r
Invocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r
\r
Existen otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r
Pero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.`,
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "GET",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Baja Cuenta",
        mark: `# Integraciones Launchpad.\r
\r
El ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r
\r
1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r
\r
2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r
\r
3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r
\r
### Gr\xE1fico para simplificar la idea \r
\r
[![img-envio-retorno](/envio-retorno.jpg)]()\r
\r
La flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r
Este set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r
\r
\r
1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r
\r
2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r
\r
3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r
\r
\r
B\xE1sicamente el contexto consta de 3 partes principales.\r
\r
1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r
\r
2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r
\r
3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r
\r
Depende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r
\r
Por ejemplo dentro de **context-service** existe el endpoint \r
[![img-envio-retorno](/post-launchpad.jpg)]()\r
 \r
Este endpoint crea un contexto y retorna su ID.\r
\r
### Ejemplo response caso 1\r
\r
\r
[![img-envio-retorno](/objeto-endpoint.jpg)]()\r
\r
\r
\r
Quedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r
\r
### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r
\r
\r
El par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r
\r
Invocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r
\r
Existen otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r
Pero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.`,
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "DELETE",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      }
    ]
  }
];

// app/components/AsideMenu/AsideMenu.tsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function AsideMenu() {
  let [expanded, setExpanded] = (0, import_react4.useState)({
    section: -1,
    api: -1
  }), methodMap = (e = "info") => {
    switch (e) {
      case "GET":
        return "Info";
      case "POST":
        return "Warning";
      case "DELETE":
        return "Danger";
      default:
        return "Brand";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Breadcrumb, { list: [{ label: "API Market", href: "/" }, { label: "Negocio", href: "/" }] }, void 0, !1, {
      fileName: "app/components/AsideMenu/AsideMenu.tsx",
      lineNumber: 28,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { style: { paddingTop: 20, paddingLeft: 10 }, children: apis_default.map((o, j) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { color: (0, import_system_design.c)({ type: "black" }), type: "S4", bold: !0, style: { marginTop: 20 }, children: o.section }, void 0, !1, {
        fileName: "app/components/AsideMenu/AsideMenu.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      o.apis.map((a, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { paddingLeft: 5, marginTop: 10 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { onClick: () => setExpanded(expanded.api == i && expanded.section == j ? { section: -1, api: -1 } : { section: j, api: i }), className: "col-lg-9", style: { cursor: "pointer", display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: expanded.api == i && expanded.section == j ? import_free_solid_svg_icons.faChevronDown : import_free_solid_svg_icons.faChevronRight, style: { fontSize: 12, marginRight: 5 } }, void 0, !1, {
              fileName: "app/components/AsideMenu/AsideMenu.tsx",
              lineNumber: 40,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { color: (0, import_system_design.c)({ type: "primary" }), type: "S4", children: a.name }, void 0, !1, {
              fileName: "app/components/AsideMenu/AsideMenu.tsx",
              lineNumber: 41,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 39,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-lg-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Chip, { variant: "light", state: methodMap(a.method), label: a.method }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 44,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 43,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/AsideMenu/AsideMenu.tsx",
          lineNumber: 38,
          columnNumber: 29
        }, this),
        expanded.api == i && expanded.section == j && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { style: { listStyle: "none", marginBottom: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { paddingLeft: 10 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { className: "accLink", prefetch: "intent", to: "general/api-information?id=" + i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { type: "S5", children: "Introducci\xF3n" }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 52,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 51,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { className: "accLink", prefetch: "intent", to: "general/description?id=" + i + "&section=auth", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { type: "S5", children: "Autenticaci\xF3n" }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 55,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 54,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { className: "accLink", prefetch: "intent", to: "general/description?id=" + i + "&section=headers", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { type: "S5", children: "Headers" }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 58,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 57,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { className: "accLink", prefetch: "intent", to: "general/description?id=" + i + "&section=request", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { type: "S5", children: "Request" }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 61,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 60,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { className: "accLink", prefetch: "intent", to: "general/description?id=" + i + "&section=response", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { type: "S5", children: "Response" }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 64,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 63,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { className: "accLink", prefetch: "intent", to: "general/description?id=" + i + "&section=errors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_system_design.Text, { type: "S5", children: "Errors" }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 67,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/AsideMenu/AsideMenu.tsx",
            lineNumber: 66,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/AsideMenu/AsideMenu.tsx",
          lineNumber: 50,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/AsideMenu/AsideMenu.tsx",
          lineNumber: 47,
          columnNumber: 72
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AsideMenu/AsideMenu.tsx",
        lineNumber: 37,
        columnNumber: 25
      }, this))
    ] }, void 0, !0, {
      fileName: "app/components/AsideMenu/AsideMenu.tsx",
      lineNumber: 33,
      columnNumber: 37
    }, this)) }, void 0, !1, {
      fileName: "app/components/AsideMenu/AsideMenu.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AsideMenu/AsideMenu.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

// app/components/Navbar/Navbar.tsx
var import_system_design2 = __toESM(require_dist());

// public/assets/logo.svg
var logo_default = "/build/_assets/logo-NZ3EJ7F3.svg";

// app/components/Navbar/Navbar.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_system_design2.Grid, { style: { position: "absolute", backgroundColor: "white", boxShadow: "0px 2px 4px 1px rgba(231, 231, 231, 0.5)" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_system_design2.Box, { columns: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_system_design2.Grid, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_system_design2.Box, { style: { minHeight: "8vh", display: "flex", alignItems: "center" }, columns: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: logo_default, height: 35, style: { marginLeft: 10 } }, void 0, !1, {
      fileName: "app/components/Navbar/Navbar.tsx",
      lineNumber: 11,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar/Navbar.tsx",
      lineNumber: 10,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_system_design2.Box, { columns: 9 }, void 0, !1, {
      fileName: "app/components/Navbar/Navbar.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar/Navbar.tsx",
    lineNumber: 9,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/utils/data.json
var data_default = [
  {
    title: "titulo1",
    url: "htttp://link1.com"
  },
  {
    title: "titulo2",
    url: "htttp://link2.com"
  },
  {
    title: "titulo3",
    url: "htttp://link3.com"
  },
  {
    title: "titulo4",
    url: "htttp://link4.com"
  }
];

// app/routes/dashboard.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader = async () => (0, import_node2.json)({
  data: data_default
});
function Dashboard() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-lg-3", style: { paddingTop: "10vh", height: "100vh", overflow: "scroll", paddingLeft: 24, borderStyle: "solid", borderColor: (0, import_system_design3.c)({ type: "grey-40" }) }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AsideMenu, {}, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-lg-9", style: { paddingTop: "10vh", height: "100vh", overflow: "scroll", paddingLeft: 24 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/general/api-information.tsx
var api_information_exports = {};
__export(api_information_exports, {
  default: () => ApiInformation
});
var import_react6 = require("@remix-run/react");
var import_marked = require("marked"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ApiInformation() {
  let [searchParams, setSearchParams] = (0, import_react6.useSearchParams)(), html = (0, import_marked.marked)(apis_default[0].apis[searchParams.get("id")].mark);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { flexDirection: "column" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Api Information " }, void 0, !1, {
      fileName: "app/routes/dashboard/general/api-information.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: html } }, void 0, !1, {
      fileName: "app/routes/dashboard/general/api-information.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/general/api-information.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/general/version-history.tsx
var version_history_exports = {};
__export(version_history_exports, {
  default: () => VersionHistory
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function VersionHistory() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: "Version History" }, void 0, !1, {
    fileName: "app/routes/dashboard/general/version-history.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/branchs/get-branchs.tsx
var get_branchs_exports = {};
__export(get_branchs_exports, {
  default: () => GetBranchs
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function GetBranchs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Get/Branchs" }, void 0, !1, {
    fileName: "app/routes/dashboard/branchs/get-branchs.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/general/description.tsx
var description_exports = {};
__export(description_exports, {
  default: () => Description
});
var import_system_design4 = __toESM(require_dist()), import_react7 = require("@remix-run/react"), import_react8 = require("react");
var import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Description() {
  let sectionMap = {
    auth: "Authorization",
    headers: "Headers",
    errors: "Errors",
    response: "Response",
    request: "Request"
  }, [searchParams, setSearchParams] = (0, import_react7.useSearchParams)(), [section, setSection] = (0, import_react8.useState)("headers"), [copied, setCopied] = (0, import_react8.useState)(-1);
  return (0, import_react8.useEffect)(() => {
    searchParams.get("section") != null && setSection(searchParams.get("section"));
  }, [searchParams.get("section")]), (0, import_react8.useEffect)(() => {
    console.log("EXEC!"), copied != -1 && setTimeout(
      () => setCopied(-1),
      1e3
    );
  }, [copied]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Box, { columns: 10, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Text, { type: "S1", children: sectionMap[section] }, void 0, !1, {
      fileName: "app/routes/dashboard/general/description.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/general/description.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    apis_default[0].apis[0][section].map(
      (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { marginBottom: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Text, { type: "S4", children: i.subtitle }, void 0, !1, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 48,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Text, { type: "S5", children: i.info }, void 0, !1, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 53,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this),
        i.table && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Table, { data: i.table }, void 0, !1, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 57,
          columnNumber: 37
        }, this),
        i.json && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Grid, { style: { marginTop: 20, marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Box, { columns: 12, style: { padding: 30, backgroundColor: (0, import_system_design4.c)({ type: "grey-80" }) }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("pre", { style: { color: "lightgray" }, children: JSON.stringify(i.json, null, 2) }, void 0, !1, {
            fileName: "app/routes/dashboard/general/description.tsx",
            lineNumber: 61,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Grid, { style: { display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Box, { columns: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_system_design4.Button,
              {
                rightIcon: copied != i ? import_free_solid_svg_icons2.faCopy : import_free_solid_svg_icons2.faCheck,
                onClick: () => {
                  navigator.clipboard.writeText(JSON.stringify(i.json, null, 2)).then(() => {
                    setCopied(i);
                  });
                },
                label: copied != i ? "Copy to clipboard" : "Copied",
                disabled: copied == i,
                variant: copied != i ? "primary" : "tertiary"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/general/description.tsx",
                lineNumber: 64,
                columnNumber: 45
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard/general/description.tsx",
              lineNumber: 63,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_system_design4.Box, { columns: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "a",
              {
                href: `data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(i.json)
                )}`,
                download: "filename.json",
                children: "Download Json"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/general/description.tsx",
                lineNumber: 76,
                columnNumber: 41
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard/general/description.tsx",
              lineNumber: 74,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/general/description.tsx",
            lineNumber: 62,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 60,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 59,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/general/description.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this)
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/general/description.tsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard/general/description.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/branchs/index.tsx
var branchs_exports = {};
__export(branchs_exports, {
  default: () => Link2
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Link2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: "Contenido general Branchs" }, void 0, !1, {
    fileName: "app/routes/dashboard/branchs/index.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/general/index.tsx
var general_exports = {};
__export(general_exports, {
  default: () => Link1
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Link1() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: "Contenido de Seccion General" }, void 0, !1, {
    fileName: "app/routes/dashboard/general/index.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => DashboardMain,
  loader: () => loader2
});
var import_react9 = require("@remix-run/react");

// app/helpers/readData.server.ts
var fs = __toESM(require("fs/promises"));
async function mdReader(fileName) {
  return (await fs.readFile(`./app/utils/${fileName}`)).toString();
}

// app/routes/dashboard/index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader2() {
  return { launchpadDescription: await mdReader("launchpadDescription.md") };
}
function DashboardMain() {
  let { launchpadDescription } = (0, import_react9.useLoaderData)();
  return console.log(launchpadDescription), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: { flexDirection: "column", width: "70%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Contenido principal del dashboard" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic magnam eum expedita dicta maxime nostrum eligendi cum dolorem, voluptates culpa quis, sint quam magni sit ipsam. Assumenda, velit animi!" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4", margin: "auto", height: "100vh" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { style: { textAlign: "center" }, children: "Galicia Api Market" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Link, { prefetch: "intent", to: "/dashboard", style: { textDecoration: "none", color: "#000", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { children: "Ingresar" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "46541fa3", entry: { module: "/build/entry.client-B4EBP3UN.js", imports: ["/build/_shared/chunk-5WBD222L.js", "/build/_shared/chunk-TKXO56P5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DH74JXUC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-HBMDH2NT.js", imports: ["/build/_shared/chunk-JQBMPBG4.js", "/build/_shared/chunk-7J3JD5O5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/branchs/get-branchs": { id: "routes/dashboard/branchs/get-branchs", parentId: "routes/dashboard", path: "branchs/get-branchs", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/branchs/get-branchs-QEYRX77M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/branchs/index": { id: "routes/dashboard/branchs/index", parentId: "routes/dashboard", path: "branchs", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/branchs/index-J3ZJFCQL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/general/api-information": { id: "routes/dashboard/general/api-information", parentId: "routes/dashboard", path: "general/api-information", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/general/api-information-RAVKINDO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/general/description": { id: "routes/dashboard/general/description", parentId: "routes/dashboard", path: "general/description", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/general/description-CKVO3WRT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/general/index": { id: "routes/dashboard/general/index", parentId: "routes/dashboard", path: "general", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/general/index-F3BY2EU6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/general/version-history": { id: "routes/dashboard/general/version-history", parentId: "routes/dashboard", path: "general/version-history", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/general/version-history-K2U2IZD3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-CKNFYNHL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-I45C43DT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-46541FA3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/general/api-information": {
    id: "routes/dashboard/general/api-information",
    parentId: "routes/dashboard",
    path: "general/api-information",
    index: void 0,
    caseSensitive: void 0,
    module: api_information_exports
  },
  "routes/dashboard/general/version-history": {
    id: "routes/dashboard/general/version-history",
    parentId: "routes/dashboard",
    path: "general/version-history",
    index: void 0,
    caseSensitive: void 0,
    module: version_history_exports
  },
  "routes/dashboard/branchs/get-branchs": {
    id: "routes/dashboard/branchs/get-branchs",
    parentId: "routes/dashboard",
    path: "branchs/get-branchs",
    index: void 0,
    caseSensitive: void 0,
    module: get_branchs_exports
  },
  "routes/dashboard/general/description": {
    id: "routes/dashboard/general/description",
    parentId: "routes/dashboard",
    path: "general/description",
    index: void 0,
    caseSensitive: void 0,
    module: description_exports
  },
  "routes/dashboard/branchs/index": {
    id: "routes/dashboard/branchs/index",
    parentId: "routes/dashboard",
    path: "branchs",
    index: !0,
    caseSensitive: void 0,
    module: branchs_exports
  },
  "routes/dashboard/general/index": {
    id: "routes/dashboard/general/index",
    parentId: "routes/dashboard",
    path: "general",
    index: !0,
    caseSensitive: void 0,
    module: general_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map

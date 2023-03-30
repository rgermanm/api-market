import {
  __toESM,
  require_react
} from "/build/_shared/chunk-TKXO56P5.js";

// node_modules/@galiciaseguros/system_design/dist/index.esm.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t[p2[i]] = s[p2[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var faChevronUp = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
};
var faSort = {
  prefix: "fas",
  iconName: "sort",
  icon: [320, 512, ["unsorted"], "f0dc", "M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]
};
var faChevronDown = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
};
var faChevronLeft = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [384, 512, [9001], "f053", "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
};
var faChevronRight = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [384, 512, [9002], "f054", "M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
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
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var noop = function noop2() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined")
    _WINDOW = window;
  if (typeof document !== "undefined")
    _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined")
    _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined")
    _PERFORMANCE = performance;
} catch (e) {
}
var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var _familyProxy;
var _familyProxy2;
var _familyProxy3;
var _familyProxy4;
var _familyProxy5;
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var PRODUCTION$1 = function() {
  try {
    return false;
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = "classic";
var FAMILY_SHARP = "sharp";
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
function familyProxy(obj) {
  return new Proxy(obj, {
    get: function get2(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty$1(_familyProxy, FAMILY_CLASSIC, {
  "fa": "solid",
  "fas": "solid",
  "fa-solid": "solid",
  "far": "regular",
  "fa-regular": "regular",
  "fal": "light",
  "fa-light": "light",
  "fat": "thin",
  "fa-thin": "thin",
  "fad": "duotone",
  "fa-duotone": "duotone",
  "fab": "brands",
  "fa-brands": "brands",
  "fak": "kit",
  "fa-kit": "kit"
}), _defineProperty$1(_familyProxy, FAMILY_SHARP, {
  "fa": "solid",
  "fass": "solid",
  "fa-solid": "solid"
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty$1(_familyProxy2, FAMILY_CLASSIC, {
  "solid": "fas",
  "regular": "far",
  "light": "fal",
  "thin": "fat",
  "duotone": "fad",
  "brands": "fab",
  "kit": "fak"
}), _defineProperty$1(_familyProxy2, FAMILY_SHARP, {
  "solid": "fass"
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty$1(_familyProxy3, FAMILY_CLASSIC, {
  "fab": "fa-brands",
  "fad": "fa-duotone",
  "fak": "fa-kit",
  "fal": "fa-light",
  "far": "fa-regular",
  "fas": "fa-solid",
  "fat": "fa-thin"
}), _defineProperty$1(_familyProxy3, FAMILY_SHARP, {
  "fass": "fa-solid"
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty$1(_familyProxy4, FAMILY_CLASSIC, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), _defineProperty$1(_familyProxy4, FAMILY_SHARP, {
  "fa-solid": "fass"
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty$1(_familyProxy5, FAMILY_CLASSIC, {
  "900": "fas",
  "400": "far",
  "normal": "far",
  "300": "fal",
  "100": "fat"
}), _defineProperty$1(_familyProxy5, FAMILY_SHARP, {
  "900": "fass"
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var DUOTONE_CLASSES = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var prefixes = /* @__PURE__ */ new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray$1(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function(n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "")
    return true;
  if (val === "false")
    return false;
  if (val === "true")
    return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var attrs;
var _default = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);
if (!_config.autoReplaceSvg)
  _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function(key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set2(val) {
      _config[key] = val;
      _onChangeCb.forEach(function(cb) {
        return cb(config);
      });
    },
    get: function get2() {
      return _config[key];
    }
  });
});
Object.defineProperty(config, "familyPrefix", {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(function(cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return function() {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size = 12;
  var id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  var array = [];
  for (var i = (obj || []).length >>> 0; i--; ) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter(function(i) {
      return i;
    });
  }
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
  var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }
  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER])
  w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles)
  w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks)
  w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims)
  w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function listener2() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded)
    DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
  if (!IS_DOM)
    return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b, c2, d2) {
    return func.call(thisContext, a, b, c2, d2);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      var extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;
  if (first >= 55296 && first <= 56319 && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function(acc, iconName) {
    var icon3 = icons[iconName];
    var expanded = !!icon3.icon;
    if (expanded) {
      acc[icon3.iconName] = icon3.icon;
    } else {
      acc[iconName] = icon3;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
var _LONG_STYLE;
var _PREFIXES;
var _PREFIXES_FOR_FAMILY;
var styles$o = namespace.styles;
var shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty$1(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty$1(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  var parts = cls.split("-");
  var prefix = parts[0];
  var iconName = parts.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build2() {
  var lookup = function lookup2(reducer) {
    return reduce(styles$o, function(o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };
  _byUnicode = lookup(function(acc, icon3, iconName) {
    if (icon3[3]) {
      acc[icon3[3]] = iconName;
    }
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "number";
      });
      aliases.forEach(function(alias) {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup(function(acc, icon3, iconName) {
    acc[iconName] = iconName;
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "string";
      });
      aliases.forEach(function(alias) {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup(function(acc, icon3, iconName) {
    var aliases = icon3[2];
    acc[iconName] = iconName;
    aliases.forEach(function(alias) {
      acc[alias] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles$o || config.autoFetchSvg;
  var shimLookups = reduce(shims, function(acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function(c2) {
  _defaultUsablePrefix = getCanonicalPrefix(c2.styleDefault, {
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
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode("fas", unicode);
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
var emptyCanonicalIcon = function emptyCanonicalIcon2() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$family = params.family, family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty$1(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty$1(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;
  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }
  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }
  var canonical = values.reduce(function(acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);
    if (styles$o[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }
    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);
      if (shim.prefix) {
        givenPrefix = null;
      }
      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;
      if (acc.prefix === "far" && !styles$o["far"] && styles$o["fas"] && !config.autoFetchSvg) {
        acc.prefix = "fas";
      }
    }
    return acc;
  }, emptyCanonicalIcon());
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (values.includes("fa-duotone") || values.includes("fad")) {
    canonical.prefix = "fad";
  }
  if (!canonical.prefix && family === FAMILY_SHARP && (styles$o["fass"] || config.autoFetchSvg)) {
    canonical.prefix = "fass";
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
var Library = /* @__PURE__ */ function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  _createClass(Library2, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix)
          defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon3 = _normalized$key.icon;
        var aliases = icon3[2];
        if (!additions[prefix])
          additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach(function(alias) {
            if (typeof alias === "string") {
              additions[prefix][alias] = icon3;
            }
          });
        }
        additions[prefix][iconName] = icon3;
      });
      return additions;
    }
  }]);
  return Library2;
}();
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref2) {
  var obj = _ref2.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function(k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(function(plugin) {
    var mixout8 = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout8).forEach(function(tk) {
      if (typeof mixout8[tk] === "function") {
        obj[tk] = mixout8[tk];
      }
      if (_typeof$1(mixout8[tk]) === "object") {
        Object.keys(mixout8[tk]).forEach(function(sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout8[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      var hooks8 = plugin.hooks();
      Object.keys(hooks8).forEach(function(hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks8[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args));
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName)
    return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto2() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks("noAuto");
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject("Operation requires a DOM of some kind.");
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(function() {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }
    if (_typeof$1(_icon) === "object" && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }
    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof _icon === "string") {
      var _prefix = getDefaultUsablePrefix();
      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
var autoReplace = function autoReplace2() {
  var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg)
    api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get2() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get2() {
      if (!IS_DOM)
        return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles2), {}, {
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
  var prefix = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
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
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix === "fak";
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c2) {
    return extra.classes.indexOf(c2) === -1;
  }).filter(function(c2) {
    return c2 !== "" || !!c2;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  var args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
  });
  var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  }, children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content, width = params.width, height = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  var styles2 = _objectSpread2$1({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content, title = params.title, extra = params.extra;
  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  var styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
var styles$1$1 = namespace.styles;
function asFoundIcon(icon3) {
  var width = icon3[0];
  var height = icon3[1];
  var _icon$slice = icon3.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
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
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION$1 && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  var givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise(function(resolve, reject) {
    ({
      found: false,
      width: 512,
      height: 512,
      icon: callProvided("missingIconAbstract") || {}
    });
    if (givenPrefix === "fa") {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1$1[prefix] && styles$1$1[prefix][iconName]) {
      var icon3 = styles$1$1[prefix][iconName];
      return resolve(asFoundIcon(icon3));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
var noop$1 = function noop3() {
};
var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = 'FA "6.2.1"';
var begin = function begin2(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function() {
    return end(name);
  };
};
var end = function end2(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
var noop$2 = function noop4() {
};
function isWatched(node) {
  var i2svg2 = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg2 === "string";
}
function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon3 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon3;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
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
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
  if (typeof abstractObj === "string") {
    return DOCUMENT.createTextNode(abstractObj);
  }
  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(function(abstract) {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      var splitClasses = abstract[0].attributes.class.split(" ").reduce(function(acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    var newInnerHTML = abstract.map(function(a) {
      return toHtml(a);
    }).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  var callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(function() {
      var mutator = getMutator();
      var mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function(objects) {
    if (disabled)
      return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function(mutationRecord) {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName)
            mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM)
    return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo)
    return;
  mo.disconnect();
}
function styleParser(node) {
  var style = node.getAttribute("style");
  var val = [];
  if (style) {
    val = style.split(";").reduce(function(acc, style2) {
      var styles2 = style2.split(":");
      var prop = styles2[0];
      var value = styles2.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  var existingPrefix = node.getAttribute("data-prefix");
  var existingIconName = node.getAttribute("data-icon");
  var innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  var val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  var title = node.getAttribute("title");
  var titleId = node.getAttribute("data-fa-title-id");
  if (config.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
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
    styleParser: true
  };
  var _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
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
    symbol: false,
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
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
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
  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd2(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var hclRemove = function hclRemove2(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2$1));
  if (!prefixes2.includes("fa")) {
    prefixes2.push("fa");
  }
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map(function(p2) {
    return ".".concat(p2, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  var candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  var mark = perf.begin("onTree");
  var mutations = candidates.reduce(function(acc, node) {
    try {
      var mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION$1) {
        if (e.name === "MissingIcon") {
          console.error(e);
        }
      }
    }
    return acc;
  }, []);
  return new Promise(function(resolve, reject) {
    Promise.all(mutations).then(function(resolvedMutations) {
      perform(resolvedMutations, function() {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function")
          callback();
        mark();
        resolve();
      });
    }).catch(function(e) {
      mark();
      reject(e);
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then(function(mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, {
      mask
    }));
  };
}
var render = function render2(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition)
    return;
  var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon3 = iconDefinition.icon;
  return domVariants(_objectSpread2$1({
    type: "icon"
  }, iconDefinition), function() {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon3),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
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
};
var ReplaceElements = {
  mixout: function mixout2() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks2() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
      } : _params$callback;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
      return new Promise(function(resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
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
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref3) {
      var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
      var styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      var nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout: function mixout3() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: "layer"
        }, function() {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          var children = [];
          assembler(function(args) {
            Array.isArray(args) ? args.map(function(a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
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
};
var LayersCounter = {
  mixout: function mixout4() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "counter",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
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
};
var LayersText = {
  mixout: function mixout5() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "text",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
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
  provides: function provides2(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra;
      var width = null;
      var height = null;
      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes["aria-hidden"] = "true";
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise(function(resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function(c2) {
      return c2.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles2 = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles2.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN);
    var fontWeight = styles2.getPropertyValue("font-weight");
    var content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamily) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== "none" && content !== "") {
      var _content = styles2.getPropertyValue("content");
      var family = ~["Sharp"].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
      var _hexValueFromContent = hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
      var isV4 = fontFamily[0].startsWith("FontAwesome");
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;
      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function(main) {
          var abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement("svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map(function(a) {
            return toHtml(a);
          }).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace2(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root) {
  if (!IS_DOM)
    return;
  return new Promise(function(resolve, reject) {
    var operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace2);
    var end3 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(function() {
      end3();
      enableObservation();
      resolve();
    }).catch(function() {
      end3();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks: function hooks3() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides3(providers$$1) {
    providers$$1.pseudoElements2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout6() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks4() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto: function noAuto3() {
        disconnect();
      },
      watch: function watch2(params) {
        var observeMutationsRoot = params.observeMutationsRoot;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
var parseTransformString = function parseTransformString2(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
    var parts = n.toLowerCase().split("-");
    var first = parts[0];
    var rest = parts.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
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
};
var PowerTransforms = {
  mixout: function mixout7() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks5() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides: function provides4(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref2) {
      var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
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
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks: function hooks6() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute("data-fa-mask");
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i) {
          return i.trim();
        }));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides: function provides5(providers2) {
    providers2.generateAbstractMask = function(_ref2) {
      var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
      var mainWidth = main.width, mainPath = main.icon;
      var maskWidth = mask.width, maskPath = mask.icon;
      var trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: "rect",
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          fill: "white"
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: "g",
        attributes: _objectSpread2$1({}, trans.inner),
        children: [fillBlack(_objectSpread2$1({
          tag: mainPath.tag,
          attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: "g",
        attributes: _objectSpread2$1({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: "mask",
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: "rect",
        attributes: _objectSpread2$1({
          fill: "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides: function provides6(providers2) {
    var reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      var gChildren = [];
      var FILL = {
        fill: "currentColor"
      };
      var ANIMATION_BASE = {
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
      });
      var dot = {
        tag: "circle",
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
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
        });
      }
      gChildren.push(dot);
      gChildren.push({
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
      });
      if (!reduceMotion) {
        gChildren.push({
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
        });
      }
      return {
        tag: "g",
        attributes: {
          "class": "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks: function hooks7() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute("data-fa-symbol");
        var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
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
var icon2 = api.icon;
api.layer;
api.text;
api.counter;
var propTypesExports = {};
var propTypes = {
  get exports() {
    return propTypesExports;
  },
  set exports(v) {
    propTypesExports = v;
  }
};
var reactIsExports = {};
var reactIs = {
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
  if (hasRequiredReactIs_development)
    return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (true) {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
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
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
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
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs)
    return reactIsExports;
  hasRequiredReactIs = 1;
  (function(module) {
    if (false) {
      module.exports = requireReactIs_production_min();
    } else {
      module.exports = requireReactIs_development();
    }
  })(reactIs);
  return reactIsExports;
}
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign)
    return objectAssign;
  hasRequiredObjectAssign = 1;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas)
    return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}
var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes)
    return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function() {
  };
  if (true) {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has2 = requireHas();
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (true) {
      for (var typeSpecName in typeSpecs) {
        if (has2(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }
  checkPropTypes.resetWarningCache = function() {
    if (true) {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}
var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers)
    return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has2 = requireHas();
  var checkPropTypes = requireCheckPropTypes();
  var printWarning = function() {
  };
  if (true) {
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    var ANONYMOUS = "<<anonymous>>";
    var ReactPropTypes = {
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
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (true) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (typeof console !== "undefined") {
            var cacheKey = componentName + ":" + propName;
            if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
              printWarning(
                "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
            }
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
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
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
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
        if (!ReactIs.isValidElementType(propValue)) {
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
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (true) {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            );
          } else {
            printWarning("Invalid argument supplied to oneOf, expected an array.");
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === "symbol") {
            return String(value);
          }
          return value;
        });
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
        }
        for (var key in propValue) {
          if (has2(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker2 = arrayOfTypeCheckers[i2];
          var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return null;
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
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has2(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
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
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      if (propType === "symbol") {
        return true;
      }
      if (!propValue) {
        return false;
      }
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
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
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}
if (true) {
  ReactIs = requireReactIs();
  throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  propTypes.exports = requireFactoryWithThrowingShims()();
}
var ReactIs;
var throwOnDirectAccess;
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
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
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
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function classList(props) {
  var _classes;
  var beat = props.beat, fade = props.fade, beatFade = props.beatFade, bounce = props.bounce, shake = props.shake, flash = props.flash, spin = props.spin, spinPulse = props.spinPulse, spinReverse = props.spinReverse, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse = props.inverse, border = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull;
  var classes = (_classes = {
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
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both"
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== "undefined" && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== "undefined" && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== "undefined" && pull !== null), _defineProperty(_classes, "fa-swap-opacity", props.swapOpacity), _classes);
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
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
    var i = pair.indexOf(":");
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith("webkit") ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}
function convert(createElement2, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof element === "string") {
    return element;
  }
  var children = (element.children || []).map(function(child) {
    return convert(createElement2, child);
  });
  var mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
    var val = element.attributes[key];
    switch (key) {
      case "class":
        acc.attrs["className"] = val;
        delete element.attributes["class"];
        break;
      case "style":
        acc.attrs["style"] = styleToObject(val);
        break;
      default:
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
    }
    return acc;
  }, {
    attrs: {}
  });
  var _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties(extraProps, _excluded);
  mixins.attrs["style"] = _objectSpread2(_objectSpread2({}, mixins.attrs["style"]), existingStyle);
  return createElement2.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}
var PRODUCTION = false;
try {
  PRODUCTION = false;
} catch (e) {
}
function log() {
  if (!PRODUCTION && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function normalizeIconArgs(icon3) {
  if (icon3 && _typeof(icon3) === "object" && icon3.prefix && icon3.iconName && icon3.icon) {
    return icon3;
  }
  if (parse$1.icon) {
    return parse$1.icon(icon3);
  }
  if (icon3 === null) {
    return null;
  }
  if (icon3 && _typeof(icon3) === "object" && icon3.prefix && icon3.iconName) {
    return icon3;
  }
  if (Array.isArray(icon3) && icon3.length === 2) {
    return {
      prefix: icon3[0],
      iconName: icon3[1]
    };
  }
  if (typeof icon3 === "string") {
    return {
      prefix: "fas",
      iconName: icon3
    };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}
var FontAwesomeIcon = /* @__PURE__ */ import_react.default.forwardRef(function(props, ref) {
  var iconArgs = props.icon, maskArgs = props.mask, symbol = props.symbol, className = props.className, title = props.title, titleId = props.titleId, maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey("classes", [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(" "))));
  var transform = objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
  var mask = objectWithKey("mask", normalizeIconArgs(maskArgs));
  var renderedIcon = icon2(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
    symbol,
    title,
    titleId,
    maskId
  }));
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
    return null;
  }
  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref
  };
  Object.keys(props).forEach(function(key) {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = "FontAwesomeIcon";
FontAwesomeIcon.propTypes = {
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
  flip: propTypesExports.oneOf([true, false, "horizontal", "vertical", "both"]),
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
FontAwesomeIcon.defaultProps = {
  border: false,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, import_react.default.createElement);
var brandColors = {
  "GALICIA": {
    "primary": "#FA6400",
    "dark": "#C85000",
    "light": "#FFE2CE",
    "aciton": "#A84308"
  },
  "EMINENT": {
    "primary": "#003973",
    "dark": "#002041",
    "light": "#D8E8F8",
    "aciton": "#194D81"
  },
  "MOVE": {
    "primary": "#8A50F7",
    "dark": "#530ADB",
    "light": "#E2D2FF",
    "aciton": "#4E19B1"
  }
};
var commonPalette = {
  "white": "#FFFFFF",
  "grey-20": "#F4F4F4",
  "grey-40": "#BEBEBE",
  "grey-60": "#6A6A6A",
  "grey-80": "#2B2B2B",
  "black": "#000000",
  "link": "#0E7BC4",
  "info": "#2970BC",
  "success": "#258825",
  "warning": "#E99D09",
  "error": "#C51111"
};
var toAlphaHex = {
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
};
var c = function(colorDefinition) {
  var type = colorDefinition.type, brand = colorDefinition.brand, alpha = colorDefinition.alpha;
  var brandValue = brand ? brand : "GALICIA";
  var alphaValue = alpha ? alpha : 100;
  if (type == "primary" || type == "dark" || type == "light" || type == "action") {
    if (type == "action") {
      return "".concat(brandColors[brandValue]);
    } else {
      return "".concat(brandColors[brandValue][type]).concat(toAlphaHex[alphaValue]);
    }
  } else {
    return "".concat(commonPalette[type]).concat(toAlphaHex[alphaValue]);
  }
};
var ThemeContext = (0, import_react.createContext)({
  theme: "GALICIA",
  toggleTheme: function(val) {
  }
});
function styleInject(css2, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css_248z$n = ".avatar-module_avatarContainer__I-lU2{\n    border-radius: 8px;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    padding: 0px;\n    display: flex;\n}\n\n.avatar-module_avatarContainer__I-lU2 p{\n    margin:0px;\n    color:white;\n    text-align: center;\n}\n\n.avatar-module_avatarIcon__69JFd{\n    align-self: center;\n    justify-self: center;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n}\n\n\n.avatar-module_editContainer__cm8UW{\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    cursor:pointer;\n}";
styleInject(css_248z$n);
var css_248z$m = ".badge-module_innerBadge__hpwo1{\n    border-style: solid;\n    border-color:white;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    align-content: center;\n    justify-content: center;\n}";
styleInject(css_248z$m);
var css_248z$l = ".notification-module_innerBadge__6xIcL{\n    border-style: solid;\n    border-color:white;\n    border-radius: 100%;\n}";
styleInject(css_248z$l);
var css_248z$k = ".dropdown-module_dropdownContainer__FHnBE {\n\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    z-index: 1000;\n    border-radius: 8px;\n	white-space: nowrap;\n\n    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);\n\n\n\n\n}\n\n.dropdown-module_dropdownInnerContainer__xdyt1{\n    border-radius: 8px;\n    background-color: white;\n    width:100%;\n    z-index:1000;\n    padding: 8px;\n   height:100%\n\n}";
styleInject(css_248z$k);
var css_248z$j = ".dropdownOption-module_dropdownOptionContainer__iesm1 {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 8px;\n    border-radius: 8px;\n    cursor: pointer;\n    width: auto;\n    white-space: nowrap;\n    z-index: 1000;\n    background-color: white;\n}\n\n.dropdownOption-module_dropdownOptionContainer__iesm1:hover {\n \n    background-color: #F4F4F4;\n}";
styleInject(css_248z$j);
var css_248z$i = ".elipsis-module_elipsisCircleContainer__lSGi6 {\n    \n    display: flex; \n    flex-direction: column;\n    height: 16px;\n    width: 4px;\n    justify-content: space-between;\n}\n\n.elipsis-module_elipsisCircle__bUkFc {\n    background-color: black;\n    width: 4px;\n    height: 4px;\n    border-radius: 100%;\n}\n\n.elipsis-module_elipsisBox__j37iZ {\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer\n}\n\n.elipsis-module_elipsisBox__j37iZ:hover {\n    background-color: #CCCCCC;\n\n}\n\n.elipsis-module_elipsisBox__j37iZ:active {\n    background-color: #E6E6E6;\n\n}\n\n\n.elipsis-module_elipsisBoxDisabled__nFRg- {\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: #F4F4F4;\n\n}\n\n.elipsis-module_elipsisBoxDisabled__nFRg- .elipsis-module_elipsisCircle__bUkFc {\n    background-color: #999999;\n}\n\n.elipsis-module_left__kblH-{\n    position:absolute;\n    right:0\n}\n.elipsis-module_right__f8by3{\n    position:absolute;\n    left:0\n}\n\n";
styleInject(css_248z$i);
var css_248z$h = "@font-face {\n    font-family: 'InriaSans';\n    font-style: normal;\n    src: url('../../public/fonts/InriaSans-Regular.ttf') format('truetype');\n}\n\n\n@media (min-width: 600px) {\n\n    .text-module_S1__ueRLW {\n        font-family: 'InriaSans';\n        font-size: 30px;\n        line-height: 32px;\n        margin: 0px;\n    }\n\n    .text-module_S2__It1Nz {\n        font-family: 'InriaSans';\n        font-size: 24px;\n        line-height: 26px;\n        margin: 0px;\n    }\n\n    .text-module_S3__y-r-z {\n        font-family: 'InriaSans';\n        font-size: 20px;\n        line-height: 24px;\n        margin: 0px;\n    }\n\n    .text-module_S4__h31B3 {\n        font-family: 'InriaSans';\n        font-size: 18px;\n        line-height: 22px;\n        margin: 0px;\n    }\n\n    .text-module_S5__SaFrM {\n        font-family: 'InriaSans';\n        font-size: 16px;\n        line-height: 22px;\n        margin: 0px;\n    }\n\n    .text-module_S7__H-FdI {\n        font-family: 'InriaSans';\n        font-size: 14px;\n        line-height: 20px;\n        margin: 0px;\n    }\n\n    .text-module_S8__se1oE {\n        font-family: 'InriaSans';\n        font-size: 12px;\n        line-height: 18px;\n        margin: 0px;\n    }\n\n    .text-module_Overline__bhVu1 {\n        font-family: 'InriaSans';\n        font-size: 14px;\n        line-height: 16px;\n        margin: 0px;\n    }\n\n    .text-module_link__r8qj4 {\n        color: #A84308;\n        text-decoration-line: underline;\n        display: block;\n    }\n\n    .text-module_link__r8qj4:visited {\n        color: #A84308;\n        text-decoration-line: underline;\n    }\n\n    .text-module_link__r8qj4:hover {\n        color: #A84308;\n        text-decoration-line: underline;\n    }\n\n}\n\n@media (max-width: 600px) {\n\n.text-module_S1__ueRLW {\n    font-family: 'InriaSans';\n    font-size: 24px;\n    line-height: 26px;\n    margin: 0px;\n}\n\n.text-module_S2__It1Nz {\n    font-family: 'InriaSans';\n    font-size: 20px;\n    line-height: 24px;\n    margin: 0px;\n}\n\n.text-module_S3__y-r-z {\n    font-family: 'InriaSans';\n    font-size: 18px;\n    line-height: 22px;\n    margin: 0px;\n}\n\n.text-module_S4__h31B3 {\n    font-family: 'InriaSans';\n    font-size: 16px;\n    line-height: 20px;\n    margin: 0px;\n}\n\n.text-module_S5__SaFrM {\n    font-family: 'InriaSans';\n    font-size: 14px;\n    line-height: 20px;\n    margin: 0px;\n}\n\n.text-module_S7__H-FdI {\n    font-family: 'InriaSans';\n    font-size: 12px;\n    line-height: 18px;\n    margin: 0px;\n}\n\n.text-module_S8__se1oE {\n    font-family: 'InriaSans';\n    font-size: 10px;\n    line-height: 16px;\n    margin: 0px;\n}\n\n.text-module_Overline__bhVu1 {\n    font-family: 'InriaSans';\n    font-size: 12px;\n    line-height: 18px;\n    margin: 0px;\n}\n\n.text-module_link__r8qj4 {\n    color: #A84308;\n    text-decoration-line: underline;\n    display: block;\n}\n\n.text-module_link__r8qj4:visited {\n    color: #A84308;\n    text-decoration-line: underline;\n}\n\n.text-module_link__r8qj4:hover {\n    color: #A84308;\n    text-decoration-line: underline;\n}\n}\n\n.text-module_action__Q-NY0{\n    user-select: none;\n}";
var styles$h = { "S1": "text-module_S1__ueRLW", "S2": "text-module_S2__It1Nz", "S3": "text-module_S3__y-r-z", "S4": "text-module_S4__h31B3", "S5": "text-module_S5__SaFrM", "S7": "text-module_S7__H-FdI", "S8": "text-module_S8__se1oE", "Overline": "text-module_Overline__bhVu1", "link": "text-module_link__r8qj4", "action": "text-module_action__Q-NY0" };
styleInject(css_248z$h);
var Text = function(_a) {
  var _b = _a.isAction, isAction = _b === void 0 ? false : _b, dynamicClassName = _a.dynamicClassName, color = _a.color, _c = _a.overline, overline = _c === void 0 ? false : _c, _d = _a.isLink, isLink = _d === void 0 ? false : _d, _e = _a.type, type = _e === void 0 ? "S5" : _e, _f = _a.textAlign, textAlign = _f === void 0 ? "left" : _f, _g = _a.bold, bold = _g === void 0 ? false : _g, _h = _a.italic, italic = _h === void 0 ? false : _h, text = _a.text, href = _a.href, children = _a.children;
  var getStyledText = function() {
    if (overline) {
      return import_react.default.createElement(
        "p",
        { className: styles$h.Overline, style: getStyle() },
        text === null || text === void 0 ? void 0 : text.toUpperCase(),
        children
      );
    }
    switch (type) {
      case "S1":
        return import_react.default.createElement(
          "h1",
          { className: styles$h.S1, style: getStyle() },
          text,
          children
        );
      case "S2":
        return import_react.default.createElement(
          "h2",
          { className: styles$h.S2, style: getStyle() },
          text,
          children
        );
      case "S3":
        return import_react.default.createElement(
          "h3",
          { className: styles$h.S3, style: getStyle() },
          text,
          children
        );
      case "S4":
        return import_react.default.createElement(
          "h4",
          { className: styles$h.S4, style: getStyle() },
          text,
          children
        );
      case "S5":
        if (isAction)
          return import_react.default.createElement(
            "p",
            { className: "".concat(styles$h.S5, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
            text,
            children
          );
        if (isLink)
          return import_react.default.createElement(
            "a",
            { href: "".concat(href), className: "".concat(styles$h.S5, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
            text,
            children
          );
        else
          return import_react.default.createElement(
            "p",
            { className: styles$h.S5, style: getStyle() },
            text,
            children
          );
      case "S7":
        if (isAction)
          return import_react.default.createElement(
            "p",
            { className: "".concat(styles$h.S7, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
            text,
            children
          );
        if (isLink)
          return import_react.default.createElement(
            "a",
            { href: "".concat(href), className: "".concat(styles$h.S7, " ").concat(styles$h.link), style: getLinkStyle() },
            text,
            children
          );
        else
          return import_react.default.createElement(
            "p",
            { className: styles$h.S7, style: getStyle() },
            text,
            children
          );
      case "S8":
        if (isAction)
          return import_react.default.createElement(
            "p",
            { className: "".concat(styles$h.S8, " ").concat(styles$h.link, " ").concat(styles$h.action), style: getLinkStyle() },
            text,
            children
          );
        if (isLink)
          return import_react.default.createElement(
            "a",
            { href: "".concat(href), className: "".concat(styles$h.S8, " ").concat(styles$h.link), style: getLinkStyle() },
            text,
            children
          );
        else
          return import_react.default.createElement(
            "p",
            { className: styles$h.S8, style: getStyle() },
            text,
            children
          );
    }
  };
  var getStyle = function() {
    return {
      fontStyle: italic ? "italic" : "normal",
      fontWeight: bold ? "bold" : "normal",
      textAlign,
      color
    };
  };
  var getLinkStyle = function() {
    return {
      fontStyle: italic ? "italic" : "normal",
      fontWeight: bold ? "bold" : "normal",
      textAlign,
      color,
      cursor: "pointer"
    };
  };
  return import_react.default.createElement("div", { className: "".concat(styles$h.textContainer, " ").concat(dynamicClassName) }, getStyledText());
};
var css_248z$g = ".card-module_cardHeaderContainer__AO6aq {\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n}\n\n.card-module_cardContainer__pgIS2 {\n    background: #FFFFFF;\n    padding: 16px;\n    border: 1px solid #BEBEBE;\n    border-radius: 8px;\n}\n\n.card-module_titleSubtitleContainer__trG5l{\n    width: 100%;\n    padding-left: 8px;\n}\n\n.card-module_cardFooterLinks__7Skjw{\n    margin-top: 16px;\n    display: flex;\n    flex-direction: row;\n}\n\n.card-module_cardFooterLinkItem__BxXf5{\n    margin-right: 8px;\n}";
styleInject(css_248z$g);
var css_248z$f = ".button-module_securityArea__ODZA5{\n  padding:8px\n}\n\n\n.button-module_rightIcon__mA90K{\n  margin-left: 8px;\n}\n\n.button-module_leftIcon__IH-z6{\n  margin-right: 8px;\n}\n\nbutton{\n	display:flex;\n  align-items: center;\n  outline: none;   \n	border-radius:8px;\n}\n\n.button-module_buttonNormal__TjF-A{\n	cursor:pointer;\n	font-size:16px;\n	padding:12px 32px 12px 32px;\n  font-weight: bold;\n\n}\n\n\n.button-module_buttonSmall__GUzXp{\n	cursor:pointer;\n	font-size:14px;\n	padding:10px 16px 10px 16px;\n  font-weight: bold;\n}\n\n.button-module_buttonFullWidth__2r7Nn{\n	cursor:pointer;\n	font-size:16px;\n	padding:13px 0px 13px 0px;\n  font-weight: bold;\n  justify-content: center;\n  width:100%\n}\n\n\n.button-module_buttonPrimary__yT9a0{\n  background-color:#FA6400;\n\n  color:white;\n  border:0px;\n\n}\n\n\n.button-module_buttonPrimary__yT9a0:hover{\n  background-color:#C85000;\n}\n\n.button-module_buttonPrimary__yT9a0:disabled{\n  background-color:#6A6A6A;\n\n}\n\n\n\n.button-module_buttonSecondary__YkcuD{\n  background-color:white;\n  color:#FA6400;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #FA6400;\n}\n\n\n\n.button-module_buttonSecondary__YkcuD:hover{\n  background-color:#FFE2CE;\n}\n\n\n.button-module_buttonSecondary__YkcuD:disabled{\n  border-color:#6A6A6A;\n  color:#6A6A6A;\n  background-color: white;\n}\n\n.button-module_buttonTertiary__yFcGW{\n  background-color:white;\n  color:#FA6400;\n  border-width: 1px;\n  border-color: #FFFFFF00;\n}\n\n.button-module_buttonTertiary__yFcGW:hover{\n  background-color:white;\n	border-radius:8px;\n  color:#6A6A6A;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #6A6A6A;\n\n}\n\n.button-module_buttonTertiary__yFcGW:disabled{\n  background-color:white;\n	border-radius:8px;\n  color:#6A6A6A;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #FFFFFF00;\n}\n";
var styles$f = { "securityArea": "button-module_securityArea__ODZA5", "rightIcon": "button-module_rightIcon__mA90K", "leftIcon": "button-module_leftIcon__IH-z6", "buttonNormal": "button-module_buttonNormal__TjF-A", "buttonSmall": "button-module_buttonSmall__GUzXp", "buttonFullWidth": "button-module_buttonFullWidth__2r7Nn", "buttonPrimary": "button-module_buttonPrimary__yT9a0", "buttonSecondary": "button-module_buttonSecondary__YkcuD", "buttonTertiary": "button-module_buttonTertiary__yFcGW" };
styleInject(css_248z$f);
var Button = function(_a) {
  var onClick = _a.onClick, _b = _a.label, label = _b === void 0 ? "Button" : _b, rightIcon = _a.rightIcon, leftIcon = _a.leftIcon, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.variant, variant = _d === void 0 ? "primary" : _d, _e = _a.disabled, disabled2 = _e === void 0 ? false : _e, props = __rest(_a, ["onClick", "label", "rightIcon", "leftIcon", "size", "variant", "disabled"]);
  var theme = (0, import_react.useContext)(ThemeContext).theme;
  var brandTheme = theme;
  var _f = (0, import_react.useState)(disabled2 ? "disabled" : "base"), state = _f[0], setState = _f[1];
  (0, import_react.useEffect)(function() {
    if (disabled2) {
      setState("disabled");
    } else {
      setState("base");
    }
  }, [disabled2]);
  var sizeVariant = {
    "normal": styles$f.buttonNormal,
    "small": styles$f.buttonSmall,
    "full-width": styles$f.buttonFullWidth
  };
  var colorVariant = {
    "primary": {
      base: {
        backgroundColor: c({ type: "primary", brand: brandTheme }),
        color: "white",
        border: 0
      },
      hover: {
        backgroundColor: c({ type: "dark", brand: brandTheme }),
        color: "white",
        border: 0
      },
      disabled: {
        backgroundColor: c({ type: "grey-60", brand: brandTheme }),
        color: "white",
        border: 0
      }
    },
    "secondary": {
      base: {
        color: c({ type: "primary", brand: brandTheme }),
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: c({ type: "primary", brand: brandTheme }),
        backgroundColor: c({ type: "white" })
      },
      hover: {
        color: c({ type: "dark", brand: brandTheme }),
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: c({ type: "dark", brand: brandTheme }),
        backgroundColor: c({ type: "light", brand: brandTheme })
      },
      disabled: {
        color: c({ type: "grey-60", brand: brandTheme }),
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: c({ type: "white" }),
        borderColor: c({ type: "grey-60", brand: brandTheme })
      }
    },
    "tertiary": {
      base: {
        backgroundColor: c({ type: "white", brand: brandTheme }),
        color: c({ type: "primary", brand: brandTheme }),
        border: 0
      },
      hover: {
        backgroundColor: c({ type: "grey-20" }),
        color: c({ type: "dark", brand: brandTheme }),
        border: 0
      },
      disabled: {
        backgroundColor: c({ type: "white", brand: brandTheme }),
        color: c({ type: "grey-60", brand: brandTheme }),
        border: 0
      }
    }
  };
  var textConfig = {
    "normal": {
      type: "S5",
      bold: true
    },
    "small": {
      type: "S7",
      bold: true
    },
    "full-width": {
      type: "S5",
      bold: true
    }
  };
  return import_react.default.createElement(
    "div",
    { className: styles$f.securityArea },
    import_react.default.createElement(
      "button",
      __assign({ style: colorVariant[variant][state], onClick, onMouseLeave: function() {
        setState(disabled2 ? "disabled" : "base");
      }, onMouseEnter: function() {
        setState(disabled2 ? "disabled" : "hover");
      }, type: "button", disabled: disabled2, className: "".concat(sizeVariant[size], " ") }, props),
      leftIcon && import_react.default.createElement(FontAwesomeIcon, { className: styles$f.leftIcon, icon: leftIcon }),
      import_react.default.createElement(Text, { bold: textConfig[size].bold, type: textConfig[size].type, text: label }),
      rightIcon && import_react.default.createElement(FontAwesomeIcon, { className: styles$f.rightIcon, icon: rightIcon })
    )
  );
};
var css_248z$e = "/*         COMMON CLASSES         */\n\n.textArea-module_textAreaContainer__TPNUo {\n\n    width: 40ch;\n    margin: 8px\n}\n\n.textArea-module_hint__OuBYA{\n    display:float;\n}\n\n.textArea-module_prefix__rqX8W {\n    margin-bottom: 0px;\n    color: #6A6A6A;\n    margin-right: 5px;\n}\n\n.textArea-module_sufix__6Pn94 {\n    margin-right: 5px;\n    color: #6A6A6A;\n    margin-bottom: 0px;\n}\n\n/**********************/\n/*BORDER VARIANTS START*/\n/**********************/\n\n\n/**********************/\n/**********************/\n/**********************/\n/** BORDER BOTTOM  START **/\n/**********************/\n/**********************/\n/**********************/\n.textArea-module_textAreaBottom__VwNYF {\n    outline: 0;\n    border-width: 0 0 1px;\n    border-color: black;\n    margin-bottom: 1px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n}\n\n.textArea-module_textAreaBottomDisabled__G3aQF {\n    outline: 0;\n    border-width: 0 0 1px;\n    border-color: #6A6A6A;\n    margin-bottom: 1px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n}\n\n.textArea-module_textAreaBottom__VwNYF input {\n    outline: 0;\n    border-width: 0;\n}\n\n.textArea-module_textAreaBottom__VwNYF:hover {\n    border-width: 0 0 2px;\n    margin-bottom: 0px;\n\n}\n\n\n.textArea-module_textAreaBottomFocused__Pb-0H {\n    outline: 0;\n    border-width: 0 0 1px;\n    margin-bottom: 1px;\n    display: flex;\n    border-style: solid;\n    border-color: #FA6400;\n    flex-direction: column;\n    padding-bottom: 0px;\n}\n\n.textArea-module_textAreaBottomFocused__Pb-0H input {\n    outline: 0;\n    border-width: 0;\n}\n\n\n@keyframes textArea-module_rescaleUpBottom__KhgYe {\n    from {\n        top: -10px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n\n    to {\n        top: 0px;\n        font-size: 1.5rem;\n        left: 10px;\n    }\n}\n\n@keyframes textArea-module_rescaleDownBottom__WHRbg {\n    from {\n        top: 0px;\n        font-size: 1.5rem;\n        left: 10px;\n    }\n\n    to {\n        top: -10px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n}\n\n.textArea-module_transitionLabelInBottom__ts80m {\n    position: absolute;\n    top: 0px;\n    left: 10px;\n    font-weight: 400;\n    pointer-events: none;\n    font-size: 1.5rem;\n\n    animation: textArea-module_rescaleUpBottom__KhgYe 300ms;\n    opacity: 1;\n}\n\n.textArea-module_transitionLabelOutBottom__3KAka {\n    position: absolute;\n    top: -10px;\n    left: 0px;\n    font-weight: 400;\n    font-size: 0.8rem;\n    pointer-events: none;\n\n    animation: textArea-module_rescaleDownBottom__WHRbg 300ms;\n\n}\n\n/**********************/\n/**********************/\n/* BORDER BOTTOM  END */\n/**********************/\n/**********************/\n\n\n/**********************/\n/**********************/\n/* BORDER ROUND START */\n/**********************/\n/**********************/\n.textArea-module_textAreaRound__6GOg4 {\n    outline: 0;\n    border-width: 1px;\n    border-radius: 8px;\n    border-color: black;\n    margin-bottom: 5px;\n \n    border-style: solid;\n    padding: 8px;\n    font-size: 18px;\n    line-height: 22px;\n    align-items: center;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n}\n\n.textArea-module_textAreaRound__6GOg4 input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n\n    align-items: center;\n}\n\n.textArea-module_textAreaRound__6GOg4:hover {\n    border-width: 1px;\n    align-items: center;\n}\n\n\n.textArea-module_textAreaRoundFocused__f-kYS {\n    outline: 0;\n    border-width: 1px;\n    border-radius: 8px;\n    margin-bottom: 5px;\n\n    border-style: solid;\n    border-color: #FA6400;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px\n}\n\n.textArea-module_textAreaRoundFocused__f-kYS input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n}\n\n.textArea-module_transitionLabelInRound__SkL-u {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    font-weight: 400;\n    pointer-events: none;\n    font-size: 2rem;\n\n    animation: textArea-module_rescaleUpRound__vwsNL 300ms;\n    opacity: 1;\n}\n\n.textArea-module_transitionLabelOutRound__SfFtS {\n    position: absolute;\n    top: -20px;\n    left: 0px;\n    font-weight: 400;\n    font-size: 0.8rem;\n    pointer-events: none;\n\n    animation: textArea-module_rescaleDownRound__kQzmQ 300ms;\n\n}\n\n@keyframes textArea-module_rescaleUpRound__vwsNL {\n    from {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n\n    to {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n}\n\n@keyframes textArea-module_rescaleDownRound__kQzmQ {\n    from {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n\n    to {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n}\n\n\n.textArea-module_textAreaRoundDisabled__Ham6b {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    background-color: #F4F4F4;\n    border-width: 1px;\n    border-color: #BEBEBE;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    border-style: solid;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px\n}\n\n/**********************/\n/**********************/\n/* BORDER ROUND END */\n/**********************/\n/**********************/\n\n\n\n/**********************/\n/**********************/\n/**********************/\n/* BORDER SHADOW START */\n/**********************/\n/**********************/\n/**********************/\n\n\n.textArea-module_textAreaShadow__Nt0gE {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    border-width: 0px;\n    border-radius: 8px;\n    border-color: black;\n    margin-bottom: 5px;\n\n    border-style: solid;\n    padding: 8px;\n    font-size: 18px;\n    line-height: 22px;\n  \n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n}\n\n.textArea-module_textAreaShadow__Nt0gE input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n\n    align-items: center;\n}\n\n.textArea-module_textAreaShadow__Nt0gE:hover {\n    border-width: 0px;\n    align-items: center;\n}\n\n\n.textArea-module_textAreaShadowFocused__DYTWV {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    border-width: 1px;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    border-style: solid;\n    border-color: #FA6400;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px;\n}\n\n.textArea-module_textAreaShadowDisabled__zyhQN {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    background-color: #F4F4F4;\n    border-width: 0px;\n    border-radius: 8px;\n    margin-bottom: 3px;\n\n    border-style: solid;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px;\n}\n\n.textArea-module_textAreaShadowFocused__DYTWV input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n}\n\ninput {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n    background-color: #FFFFFF00;\n}\n\n.textArea-module_transitionLabelInShadow__daZCu {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    font-weight: 400;\n    pointer-events: none;\n    font-size: 2rem;\n    \n\n    animation: textArea-module_rescaleUpShadow__XJdnx 300ms;\n    opacity: 1;\n}\n\n.textArea-module_transitionLabelOutShadow__SxE8w {\n    position: absolute;\n    top: -20px;\n    left: 0px;\n    font-weight: 400;\n    font-size: 0.8rem;\n    pointer-events: none;\n\n    animation: textArea-module_rescaleDownShadow__WHvT7 300ms;\n\n}\n\n@keyframes textArea-module_rescaleUpShadow__XJdnx {\n    from {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n\n    to {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n}\n\n@keyframes textArea-module_rescaleDownShadow__WHvT7 {\n    from {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n\n    to {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n}\n\n\n/**********************/\n/**********************/\n/* BORDER SHADOW END */\n/**********************/\n/**********************/";
styleInject(css_248z$e);
var css_248z$d = ".helperText-module_helperText__ugUer {\n    font-size: 1rem;\n}";
styleInject(css_248z$d);
var css_248z$c = "/*         COMMON CLASSES         */\n\n.select-module_textInputContainer__sZuV- {\n    position:relative;\n    padding-top: 20px;\n    width: 40ch;\n    height: 80px;\n    margin: 8px;\n    font-family: 'InriaSans';\n}\n\n.select-module_prefix__cZCfR {\n    margin-bottom: 0px;\n    color: #6A6A6A;\n    margin-right: 5px;\n}\n\n.select-module_sufix__Ylpge {\n    margin-right: 5px;\n    color: #6A6A6A;\n    margin-bottom: 0px;\n}\n\n/**********************/\n/*BORDER VARIANTS START*/\n/**********************/\n\n\n/**********************/\n/**********************/\n/**********************/\n/** BORDER BOTTOM  START **/\n/**********************/\n/**********************/\n/**********************/\n.select-module_textInputBottom__B8tpD {\n    outline: 0;\n    border-width: 0 0 1px;\n    border-color: black;\n    margin-bottom: 1px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n}\n\n.select-module_textInputBottomDisabled__NL7pm {\n    outline: 0;\n    border-width: 0 0 1px;\n    border-color: #6A6A6A;\n    margin-bottom: 1px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n}\n\n.select-module_textInputBottom__B8tpD input {\n    outline: 0;\n    border-width: 0;\n}\n\n.select-module_textInputBottom__B8tpD:hover {\n    border-width: 0 0 2px;\n    margin-bottom: 0px;\n\n}\n\n\n.select-module_textInputBottomFocused__P8Q50 {\n    outline: 0;\n    border-width: 0 0 1px;\n    margin-bottom: 1px;\n    display: flex;\n    border-style: solid;\n    border-color: #FA6400;\n    flex-direction: column;\n    padding-bottom: 0px;\n}\n\n.select-module_textInputBottomFocused__P8Q50 input {\n    outline: 0;\n    border-width: 0;\n}\n\n.select-module_chevron__tH2wU{\n    position:absolute;\n    right:0px;\n    top:0px;\n    display:flex;\n    padding:0px;\n    margin:0px;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    border-style: solid;\n    border-color: #6A6A6A;\n    border-width: 0px 0px 0px 1px;\n    height:40px;\n    width:40px;\n}\n\n\n@keyframes select-module_rescaleUpBottom__-HsX5 {\n    from {\n        top: -10px;\n        font-size: 14px;\n        left: 0px;\n    }\n\n    to {\n        top: 0px;\n        font-size: 18px;\n        left: 10px;\n    }\n}\n\n@keyframes select-module_rescaleDownBottom__C4pOS {\n    from {\n        top: 0px;\n        font-size: 18px;\n        left: 10px;\n    }\n\n    to {\n        top: -20px;\n        font-size: 14px;\n        left: 0px;\n    }\n}\n\n.select-module_transitionLabelInBottom__EfLpZ {\n    position: absolute;\n    top: 0px;\n    left: 10px;\n    font-weight: 400;\n    color:#6A6A6A;\n\n    pointer-events: none;\n    font-size: 18px;\n    line-height: 22px;\n    font-family:'InriaSans';\n    animation: select-module_rescaleUpBottom__-HsX5 300ms;\n    opacity: 1;\n}\n\n.select-module_transitionLabelOutBottom__WU-dL {\n    position: absolute;\n    top: -20px;\n    left: 0px;\n    line-height: 22px;\n    color:#6A6A6A;\n    font-weight: 400;\n    font-size: 14px;\n    pointer-events: none;\n    font-family:'InriaSans';\n\n    animation: select-module_rescaleDownBottom__C4pOS 300ms;\n\n}\n\n/**********************/\n/**********************/\n/* BORDER BOTTOM  END */\n/**********************/\n/**********************/\n\n\n/**********************/\n/**********************/\n/* BORDER ROUND START */\n/**********************/\n/**********************/\n.select-module_textInputRound__AzKGm {\n    outline: solid;\n    outline-color: #6A6A6A;\n    outline-width: 1px;\n    border-width: 0px;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    padding-left: 16px;\n    justify-content: center;\n    font-size: 18px;\n    line-height: 22px;\n    height:40px;\n    align-items: center;\n    \n}\n\n.select-module_textInputRound__AzKGm input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n    align-items: center;\n}\n\n.select-module_textInputRound__AzKGm:hover {\n\n    align-items: center;\n}\n\n\n\n\n.select-module_textInputRoundFocused__LTaiP {\n    outline: solid;\n    border-radius: 8px;\n    outline-width: 1px;\n    border-width:0px;\n    outline-color: #FA6400;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    justify-content: center;\n    padding-left: 16px;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    height: 40px;\n}\n\n.select-module_textInputRoundFocused__LTaiP input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n}\n\n.select-module_transitionLabelInRound__2pTQ5 {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    font-weight: 400;\n    pointer-events: none;\n    font-size: 18px;\n\n    animation: select-module_rescaleUpRound__WDnaT 300ms;\n    opacity: 1;\n}\n\n.select-module_transitionLabelOutRound__C-j4Z {\n    position: absolute;\n    top: -28px;\n    left: 0px;\n    font-weight: 400;\n    font-size: 14px;\n    pointer-events: none;\n\n    animation: select-module_rescaleDownRound__Y5JEr 300ms;\n\n}\n\n@keyframes select-module_rescaleUpRound__WDnaT {\n    from {\n        top: -28px;\n        font-size: 14px;\n        left: 0px;\n    }\n\n    to {\n        top: 8px;\n        font-size: 18px;\n        left: 16px;\n    }\n}\n\n@keyframes select-module_rescaleDownRound__Y5JEr {\n    from {\n        top: 8px;\n        font-size: 18px;\n        left: 16px;\n    }\n\n    to {\n        top: -28px;\n        font-size: 14px;\n        left: 0px;\n    }\n}\n\n\n.select-module_textInputRoundDisabled__YsZ5b {\n    outline: 0;\n    background-color: #F4F4F4;\n    border-width: 1px;\n    border-color: #BEBEBE;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px 16px 8px 16px;\n}\n\n/**********************/\n/**********************/\n/* BORDER ROUND END */\n/**********************/\n/**********************/\n\n\n\n/**********************/\n/**********************/\n/**********************/\n/* BORDER SHADOW START */\n/**********************/\n/**********************/\n/**********************/\n\n\n.select-module_textInputShadow__HKtdQ {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    border-width: 0px;\n    border-radius: 8px;\n    border-color: black;\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    padding: 8px 16px 8px 16px;\n    font-size: 18px;\n    line-height: 22px;\n    align-items: center;\n}\n\n.select-module_textInputShadow__HKtdQ input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n\n    align-items: center;\n}\n\n.select-module_textInputShadow__HKtdQ:hover {\n    border-width: 0px;\n    align-items: center;\n}\n\n\n.select-module_textInputShadowFocused__GdNqm {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    border-width: 1px;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    border-color: #FA6400;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px 16px 8px 16px;\n}\n\n.select-module_textInputShadowDisabled__iTrXO {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    background-color: #F4F4F4;\n    border-width: 0px;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px 16px 8px 16px;\n}\n\n.select-module_textInputShadowFocused__GdNqm input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n}\n\ninput {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n    background-color: #FFFFFF00;\n}\n\n.select-module_transitionLabelInShadow__38tmS {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    font-weight: 400;\n    pointer-events: none;\n    font-size: 2rem;\n    \n\n    animation: select-module_rescaleUpShadow__gTsnM 300ms;\n    opacity: 1;\n}\n\n.select-module_transitionLabelOutShadow__G077q {\n    position: absolute;\n    top: -20px;\n    left: 0px;\n    font-weight: 400;\n    font-size: 0.8rem;\n    pointer-events: none;\n\n    animation: select-module_rescaleDownShadow__k06IZ 300ms;\n\n}\n\n@keyframes select-module_rescaleUpShadow__gTsnM {\n    from {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n\n    to {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n}\n\n@keyframes select-module_rescaleDownShadow__k06IZ {\n    from {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n\n    to {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n}\n\n\n/**********************/\n/**********************/\n/* BORDER SHADOW END */\n/**********************/\n/**********************/";
styleInject(css_248z$c);
var css_248z$b = "/* The check - the box around the slider */\n\n.checkbox-module_checkboxInnerContainer__Hz82w {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.checkbox-module_statusText__7mFqD {\n  margin-left: 5px;\n  margin-bottom: 0px;\n}\n\n.checkbox-module_descriptionText__iA4qi {\n  margin-left: 20px;\n  color: #6A6A6A;\n}\n\n\n.checkbox-module_inputEnabled__dOycE:checked {\npadding:0px;\nmargin-top:0px;\n}\n\n\n.checkbox-module_inputDisabled__1WBRr {\npadding:0px;\nmargin-top:0px\n}\n\n\n";
styleInject(css_248z$b);
var css_248z$a = "\n\n.tooltip-module_tooltipTextBoxLight__s4-Bs {\n    /* Auto layout */\n\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\npadding: 16px;\n\nwidth: fit-content;\nmin-height: 52px;\nheight: fit-content;\n\n/* Neutrals/Grey/theme.colors.grey20\n\n$theme.color.grey_bg_light\n*/\nbackground: #F4F4F4;\n/* Neutrals/Grey/theme.colors.grey80\n\n$theme.color.grey_text_dark\n*/\nborder: 1px solid #2B2B2B;\nborder-radius: 8px;\n\n}\n\n.tooltip-module_tooltipTextBoxDark__gKueR {\n    /* Auto layout */\n\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\npadding: 16px;\n\nwidth: fit-content;\nmin-height: 52px;\nheight: fit-content;\n\n/* Neutrals/Grey/theme.colors.grey20\n\n$theme.color.grey_bg_light\n*/\nbackground: #2B2B2B;\n/* Neutrals/Grey/theme.colors.grey80\n\n$theme.color.grey_text_dark\n*/\nborder: 1px solid #2B2B2B;\nborder-radius: 8px;\n\n}\n\n.tooltip-module_tooltipTextBoxDark__gKueR p{\n   color: #FFFFFF;\n}\n\n.tooltip-module_securityArea__6TpZC {\n    padding: 8px\n}\n\n\n\n.tooltip-module_infoIconContainer__WGUU-{\n    width: 22px;\n    height: 22px;\n    border: 2px;\n    border-style: solid;\n    border-color: #2B2B2B;\n    border-radius: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n   \n}\n\n\n.tooltip-module_tooltipTextContainer__5fyDI {\n\n\n\n\n	white-space: nowrap;\n\n    position: absolute;\n\n\n    top:0;\n    left:30px\n}\n\n";
styleInject(css_248z$a);
var css_248z$9 = "/*         COMMON CLASSES         */\n\n.textInput-module_textInputContainer__up37V {\n    position:relative;\n    padding-top: 20px;\n    width: 40ch;\n    height: 80px;\n    margin: 8px;\n    font-family: 'InriaSans';\n}\n\n.textInput-module_prefix__TBfJh {\n    margin-bottom: 0px;\n    color: #6A6A6A;\n    margin-right: 5px;\n}\n\n.textInput-module_sufix__Cvjfk {\n    margin-right: 5px;\n    color: #6A6A6A;\n    margin-bottom: 0px;\n}\n\n/**********************/\n/*BORDER VARIANTS START*/\n/**********************/\n\n\n/**********************/\n/**********************/\n/**********************/\n/** BORDER BOTTOM  START **/\n/**********************/\n/**********************/\n/**********************/\n.textInput-module_textInputBottom__7ooJC {\n    outline: 0;\n    border-width: 0 0 1px;\n    border-color: black;\n    margin-bottom: 1px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n}\n\n.textInput-module_textInputBottomDisabled__PvgDj {\n    outline: 0;\n    border-width: 0 0 1px;\n    border-color: #6A6A6A;\n    margin-bottom: 1px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n}\n\n.textInput-module_textInputBottom__7ooJC input {\n    outline: 0;\n    border-width: 0;\n}\n\n.textInput-module_textInputBottom__7ooJC:hover {\n    border-width: 0 0 2px;\n    margin-bottom: 0px;\n\n}\n\n\n.textInput-module_textInputBottomFocused__N4ZXX {\n    outline: 0;\n    border-width: 0 0 1px;\n    margin-bottom: 1px;\n    display: flex;\n    border-style: solid;\n    border-color: #FA6400;\n    flex-direction: column;\n    padding-bottom: 0px;\n}\n\n.textInput-module_textInputBottomFocused__N4ZXX input {\n    outline: 0;\n    border-width: 0;\n}\n\n\n@keyframes textInput-module_rescaleUpBottom__wnmJf {\n    from {\n        top: -10px;\n        font-size: 14px;\n        left: 0px;\n    }\n\n    to {\n        top: 0px;\n        font-size: 18px;\n        left: 10px;\n    }\n}\n\n@keyframes textInput-module_rescaleDownBottom__J4Pf- {\n    from {\n        top: 0px;\n        font-size: 18px;\n        left: 10px;\n    }\n\n    to {\n        top: -20px;\n        font-size: 14px;\n        left: 0px;\n    }\n}\n\n.textInput-module_transitionLabelInBottom__hmyLa {\n    position: absolute;\n    top: 0px;\n    left: 10px;\n    font-weight: 400;\n    color:#6A6A6A;\n\n    pointer-events: none;\n    font-size: 18px;\n    line-height: 22px;\n    font-family:'InriaSans';\n    animation: textInput-module_rescaleUpBottom__wnmJf 300ms;\n    opacity: 1;\n}\n\n.textInput-module_transitionLabelOutBottom__-7MZQ {\n    position: absolute;\n    top: -20px;\n    left: 0px;\n    line-height: 22px;\n    color:#6A6A6A;\n    font-weight: 400;\n    font-size: 14px;\n    pointer-events: none;\n    font-family:'InriaSans';\n\n    animation: textInput-module_rescaleDownBottom__J4Pf- 300ms;\n\n}\n\n/**********************/\n/**********************/\n/* BORDER BOTTOM  END */\n/**********************/\n/**********************/\n\n\n/**********************/\n/**********************/\n/* BORDER ROUND START */\n/**********************/\n/**********************/\n.textInput-module_textInputRound__HzqSh {\n    outline: solid;\n    outline-color: #6A6A6A;\n    outline-width: 1px;\n    border-width: 0px;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    justify-content: center;\n    font-size: 18px;\n    line-height: 22px;\n    height:40px;\n    align-items: center;\n    padding-left: 16px;\n    padding-right: 16px;\n}\n\n.textInput-module_textInputRound__HzqSh input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n    align-items: center;\n}\n\n.textInput-module_textInputRound__HzqSh:hover {\n    align-items: center;\n}\n\n\n.textInput-module_textInputRoundFocused__FBQuP {\n    outline: solid;\n    border-radius: 8px;\n    outline-width: 1px;\n    border-width:0px;\n    outline-color: #FA6400;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    justify-content: center;\n    padding-left: 16px;\n    padding-right: 16px;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    height: 40px;\n}\n\n.textInput-module_textInputRoundFocused__FBQuP input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n}\n\n.textInput-module_transitionLabelInRound__G0EhE {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    font-weight: 400;\n    pointer-events: none;\n    font-size: 18px;\n\n    animation: textInput-module_rescaleUpRound__7tEG6 300ms;\n    opacity: 1;\n}\n\n.textInput-module_transitionLabelOutRound__hgYay {\n    position: absolute;\n    top: -28px;\n    left: 0px;\n    font-weight: 400;\n    font-size: 14px;\n    pointer-events: none;\n\n    animation: textInput-module_rescaleDownRound__YAJAk 300ms;\n\n}\n@keyframes textInput-module_rescaleUpRound__7tEG6 {\n    from {\n        top: -28px;\n        font-size: 14px;\n        left: 0px;\n    }\n\n    to {\n        top: 8px;\n        font-size: 18px;\n        left: 16px;\n    }\n}\n\n@keyframes textInput-module_rescaleDownRound__YAJAk {\n    from {\n        top: 8px;\n        font-size: 18px;\n        left: 16px;\n    }\n\n    to {\n        top: -28px;\n        font-size: 14px;\n        left: 0px;\n    }\n}\n\n\n.textInput-module_textInputRoundDisabled__kYNxl {\n    outline: 0;\n    background-color: #F4F4F4;\n    border-width: 1px;\n    border-color: #BEBEBE;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px 16px 8px 16px;\n}\n\n/**********************/\n/**********************/\n/* BORDER ROUND END */\n/**********************/\n/**********************/\n\n\n\n/**********************/\n/**********************/\n/**********************/\n/* BORDER SHADOW START */\n/**********************/\n/**********************/\n/**********************/\n\n\n.textInput-module_textInputShadow__zXAkk {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    border-width: 0px;\n    border-radius: 8px;\n    border-color: black;\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    padding: 8px 16px 8px 16px;\n    font-size: 18px;\n    line-height: 22px;\n    align-items: center;\n}\n\n.textInput-module_textInputShadow__zXAkk input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n\n    align-items: center;\n}\n\n.textInput-module_textInputShadow__zXAkk:hover {\n    border-width: 0px;\n    align-items: center;\n}\n\n\n.textInput-module_textInputShadowFocused__MnA5S {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    border-width: 1px;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    border-color: #FA6400;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px 16px 8px 16px;\n}\n\n.textInput-module_textInputShadowDisabled__ssiYp {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);\n    outline: 0;\n    background-color: #F4F4F4;\n    border-width: 0px;\n    border-radius: 8px;\n    margin-bottom: 3px;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    border-style: solid;\n    flex-direction: column;\n    font-size: 18px;\n    line-height: 22px;\n    padding: 8px 16px 8px 16px;\n}\n\n.textInput-module_textInputShadowFocused__MnA5S input {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n}\n\ninput {\n    outline: 0;\n    border-width: 0;\n    border-radius: 8px;\n    background-color: #FFFFFF00;\n}\n\n.textInput-module_transitionLabelInShadow__nQlgG {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    font-weight: 400;\n    pointer-events: none;\n    font-size: 2rem;\n    \n\n    animation: textInput-module_rescaleUpShadow__erGCf 300ms;\n    opacity: 1;\n}\n\n.textInput-module_transitionLabelOutShadow__ZpLVg {\n    position: absolute;\n    top: -20px;\n    left: 0px;\n    font-weight: 400;\n    font-size: 0.8rem;\n    pointer-events: none;\n\n    animation: textInput-module_rescaleDownShadow__9lXZG 300ms;\n\n}\n\n@keyframes textInput-module_rescaleUpShadow__erGCf {\n    from {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n\n    to {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n}\n\n@keyframes textInput-module_rescaleDownShadow__9lXZG {\n    from {\n        top: 8px;\n        font-size: 2rem;\n        left: 16px;\n    }\n\n    to {\n        top: -20px;\n        font-size: 0.8rem;\n        left: 0px;\n    }\n}\n\n\n/**********************/\n/**********************/\n/* BORDER SHADOW END */\n/**********************/\n/**********************/";
styleInject(css_248z$9);
var css_248z$8 = ".grid-module_grid__dBMpx{\n    display: grid;\n    width: 100%;\n}\n@media (min-width: 0px) and (max-width: 359px) {\n    .grid-module_grid__dBMpx {\n        grid-template-columns: repeat(4, 1fr);\n        gap: 16px;\n    }\n}\n\n@media (min-width: 360px) and (max-width: 767px) {\n    .grid-module_grid__dBMpx {\n        grid-template-columns:repeat(4, 1fr);\n        gap: 16px;\n    }\n}\n\n@media (min-width: 768px) and (max-width: 1023px) {\n    .grid-module_grid__dBMpx {\n        grid-template-columns:repeat(6, 1fr);\n        gap: 16px;\n    }\n}\n\n@media (min-width: 1024px) and (max-width: 1279px) {\n    .grid-module_grid__dBMpx {\n        grid-template-columns: repeat(12, 1fr);\n        gap: 24px;\n    }\n}\n\n@media (min-width: 1280px) and (max-width: 1500px) {\n    .grid-module_grid__dBMpx {\n        grid-template-columns: repeat(12, 1fr);\n        gap: 24px;\n\n    }\n}\n@media (min-width: 1500px) {\n    .grid-module_grid__dBMpx {\n        grid-template-columns: repeat(12, 1fr);\n        gap: 24px;\n\n    }\n}";
var styles$8 = { "grid": "grid-module_grid__dBMpx" };
styleInject(css_248z$8);
var Grid = function(_a) {
  var children = _a.children, style = _a.style;
  return import_react.default.createElement("div", { className: styles$8.grid, style }, children);
};
var Box = function(_a) {
  var children = _a.children, _b = _a.columns, columns = _b === void 0 ? 1 : _b, style = _a.style;
  var _c = (0, import_react.useState)(0), windowWidth = _c[0], setWindowWidth = _c[1];
  var resizeWindow = function() {
    setWindowWidth(window.innerWidth);
  };
  var colTypes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl"
  ];
  (0, import_react.useEffect)(function() {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return function() {
      return window.removeEventListener("resize", resizeWindow);
    };
  }, []);
  var getColumns = function(width) {
    if (typeof columns == "number") {
      return columns;
    }
    switch (true) {
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
  };
  var getNextDefinedColumn = function(col) {
    var indexStart = colTypes.findIndex(function(c2) {
      return c2 == col;
    });
    for (var i = indexStart; i < colTypes.length; i++) {
      if (typeof columns != "number" && columns[colTypes[i]]) {
        return columns[colTypes[i]];
      }
    }
    for (var j = indexStart; j > 0; j--) {
      if (typeof columns != "number" && columns[colTypes[j]]) {
        return columns[colTypes[j]];
      }
    }
    return;
  };
  return import_react.default.createElement("div", { style: Object.assign({ gridColumn: "span ".concat(getColumns(windowWidth)) }, style) }, children);
};
var css_248z$7 = ".breadcrumb-module_breadcrumbContainer__AVXhc{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}";
var styles$7 = { "breadcrumbContainer": "breadcrumb-module_breadcrumbContainer__AVXhc" };
styleInject(css_248z$7);
var Breadcrumb = function(_a) {
  var _b = _a.list, list = _b === void 0 ? [] : _b;
  return import_react.default.createElement("div", { className: styles$7.breadcrumbContainer }, list.map(function(e, i) {
    return import_react.default.createElement(
      import_react.default.Fragment,
      null,
      import_react.default.createElement(Text, { text: e.label, isLink: i == list.length - 1 ? false : true, href: e.href, className: styles$7.progressBarLabel }),
      import_react.default.createElement(FontAwesomeIcon, { style: { marginLeft: 5, marginRight: 5, height: 15 }, icon: faChevronRight })
    );
  }));
};
var css_248z$6 = ".tab-module_tabsContainer__WNv7V{\n    border-width:0px 0px 1px 0px;\n    border-style: solid;\n    border-color: #BEBEBE;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n\n}\n.tab-module_tabItem__tIZ3t{\n    height:48px;\n    padding: 14px 16px 12px 16px;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: fit-content;\n    cursor: pointer;\n}\n\n.tab-module_tabItem__tIZ3t:hover{\n    height:48px;\n    padding: 14px 16px 12px 16px;\n    border-radius: 8px 8px 0px 0px;\n    border-bottom: 3px solid #FA6400;\n    background: #F4F4F4;\n    \n}\n.tab-module_tabItemActive__eUAs8{\n    height:48px;\n    padding: 14px 16px 12px 16px;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: fit-content;\n    cursor: pointer;\n    color:#FA6400;\n    border-bottom: 3px solid #FA6400;\n}";
styleInject(css_248z$6);
var css_248z$5 = ".chip-module_chip__BvrgE{\n    padding: 2px 8px 2px 8px;\n    border-radius: 4px;\n    margin-bottom: 4px;\n    height:24px;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    width: auto;\n\n}\n.chip-module_chipContainer__s-joj{\n    width: fit-content;\n}";
var styles$5 = { "chip": "chip-module_chip__BvrgE", "chipContainer": "chip-module_chipContainer__s-joj" };
styleInject(css_248z$5);
var Chip = function(_a) {
  var _b = _a.label, label = _b === void 0 ? "Label" : _b, _c = _a.state, state = _c === void 0 ? "Info" : _c, _d = _a.variant, variant = _d === void 0 ? "light" : _d;
  var bgColor = {
    "Brand": {
      light: "#FFF3EB",
      dark: "#C85000"
    },
    "Eminent": {
      light: "#EFF6FC",
      dark: "#002041"
    },
    "Move": {
      light: "#F3EDFF",
      dark: "#530ADB"
    },
    "Warning": {
      light: "#FDF5E6",
      dark: "#E99D09"
    },
    "Info": {
      light: "#EAF1F8",
      dark: "#2970BC"
    },
    "Success": {
      light: "#E9F3E9",
      dark: "#258825"
    },
    "Danger": {
      light: "#F9E7E7",
      dark: "#C51111"
    },
    "Grey": {
      light: "#E6E6E6",
      dark: "#666666"
    },
    "Transparent": {
      light: "#FFFFFF00",
      dark: "#FFFFFF00"
    }
  };
  var textColor = {
    "Brand": {
      light: "#C85000",
      dark: "#FFFFFF"
    },
    "Eminent": {
      light: "#002041",
      dark: "#FFFFFF"
    },
    "Move": {
      light: "#530ADB",
      dark: "#FFFFFF"
    },
    "Warning": {
      light: "#000000",
      dark: "#000000"
    },
    "Info": {
      light: "#2970BC",
      dark: "#FFFFFF"
    },
    "Success": {
      light: "#258825",
      dark: "#FFFFFF"
    },
    "Danger": {
      light: "#C51111",
      dark: "#FFFFFF"
    },
    "Grey": {
      light: "#666666",
      dark: "#FFFFFF"
    },
    "Transparent": {
      light: "#666666",
      dark: "#666666"
    }
  };
  var borderColor = {
    "Brand": {
      light: "#FFE2CE",
      dark: "#C85000"
    },
    "Eminent": {
      light: "#D8E8F8",
      dark: "#002041"
    },
    "Move": {
      light: "#E2D2FF",
      dark: "#530ADB"
    },
    "Warning": {
      light: "#F6D89D",
      dark: "#E99D09"
    },
    "Info": {
      light: "#BFD4EB",
      dark: "#2970BC"
    },
    "Success": {
      light: "#BEDBBE",
      dark: "#258825"
    },
    "Danger": {
      light: "#EEB8B8",
      dark: "#C51111"
    },
    "Grey": {
      light: "#E6E6E6",
      dark: "#666666"
    },
    "Transparent": {
      light: "#E6E6E6",
      dark: "#E6E6E6"
    }
  };
  return import_react.default.createElement(
    "div",
    { className: styles$5.chipContainer },
    import_react.default.createElement(
      "div",
      { className: styles$5.chip, style: {
        backgroundColor: bgColor[state][variant],
        borderColor: borderColor[state][variant]
      } },
      import_react.default.createElement(Text, { type: "S7", color: textColor[state][variant], text: label })
    )
  );
};
var css_248z$4 = ".tableCell-module_tableCellContainer__8CfEi {\n\n  /* Content */\n\n\n\nz-index: 10;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-content: flex-start;\n  padding: 20px 12px;\n\n  min-width: 115px;\n  height: 56px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n\n\n\n\n  /* Monochrome/white 0 */\n  width: fit-content;\n\n}\n\n\n\n.tableCell-module_tableCellContainer__8CfEi p {\n  margin: 0;\n  text-align: left;\n}\n\n\n.tableCell-module_stateCellContainer__tBHqi{\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.tableCell-module_stateCircle__bKU5w{\n  width: 12px;\n  height:12px;\n  border-radius: 10px;\n  margin-right: 8px;\n}";
var styles$4 = { "tableCellContainer": "tableCell-module_tableCellContainer__8CfEi", "stateCellContainer": "tableCell-module_stateCellContainer__tBHqi", "stateCircle": "tableCell-module_stateCircle__bKU5w" };
styleInject(css_248z$4);
var TableCell = function(_a) {
  var _b = _a.data, data = _b === void 0 ? " " : _b, _c = _a.dataType, dataType = _c === void 0 ? "text" : _c, props = __rest(_a, ["data", "dataType"]);
  var dataFormatter = function(data2) {
    switch (dataType) {
      case "text":
        return import_react.default.createElement(
          "div",
          null,
          " ",
          data2
        );
      case "state":
        var formatedData = data2;
        return import_react.default.createElement(
          "div",
          { className: styles$4.stateCellContainer },
          " ",
          import_react.default.createElement("div", { style: { backgroundColor: stateColor[formatedData.state] }, className: styles$4.stateCircle }),
          import_react.default.createElement("div", null, formatedData.label)
        );
    }
    return data2;
  };
  var stateColor = {
    "danger": "#C51111",
    "success": "#258825",
    "warning": "#E99D09",
    "disabled": "#6A6A6A",
    "info": "#2970BC"
  };
  return import_react.default.createElement("div", { style: { width: props.width }, className: styles$4.tableCellContainer }, dataFormatter(data));
};
var css_248z$3 = ".table-module_tableContentContainer__xBdVb{\n    display: flex;\n    flex-direction: row;\n}\n\n.table-module_tableContainer__WEv9-{\n    display: flex;\n    flex-direction: column;\n\n    width: fit-content;\n}\n.table-module_tableHeaderContainer__wfQ8y{\n    box-shadow: 0px 5px 4px -2px #F1F1F1;\n    display: flex;\n    flex-direction: row;\n}\n\n.table-module_tableCellContainer__3pRy-{\n    border-bottom:grey ;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n}";
var styles$3 = { "tableContentContainer": "table-module_tableContentContainer__xBdVb", "tableContainer": "table-module_tableContainer__WEv9-", "tableHeaderContainer": "table-module_tableHeaderContainer__wfQ8y", "tableCellContainer": "table-module_tableCellContainer__3pRy-" };
styleInject(css_248z$3);
var css_248z$2 = ".tableHeader-module_tableHeaderContainer__RATb7 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 16px 12px;\n  align-content: center;\n  min-width: 115px;\n  min-height: 56px;\n  z-index: 500;\n  /* Monochrome/white 0 */\n  width: fit-content;\n\n  background: #FFFFFF;\n  /* Tables/ShadowHeaderCell */\n\n}\n\n.tableHeader-module_tableHeaderContainer__RATb7 p{\n  margin:0px\n}\n.tableHeader-module_sortIcon__7-SHD{\n  margin-left: 5px;\n  cursor:pointer\n}";
var styles$2 = { "tableHeaderContainer": "tableHeader-module_tableHeaderContainer__RATb7", "sortIcon": "tableHeader-module_sortIcon__7-SHD" };
styleInject(css_248z$2);
var TableHeader = function(_a) {
  var _b = _a.sortState, sortState = _b === void 0 ? "BASE" : _b, _c = _a.sort, sort = _c === void 0 ? function() {
  } : _c, _d = _a.data, data = _d === void 0 ? "" : _d;
  _a.dataType;
  var columnKey = _a.columnKey, props = __rest(_a, ["sortState", "sort", "data", "dataType", "columnKey"]);
  var sorter = {
    "ASC": import_react.default.createElement(FontAwesomeIcon, { onClick: function() {
      sort(columnKey, "DESC");
    }, className: styles$2.sortIcon, icon: faChevronUp }),
    "DESC": import_react.default.createElement(FontAwesomeIcon, { onClick: function() {
      sort(columnKey, "ASC");
    }, className: styles$2.sortIcon, icon: faChevronDown }),
    "BASE": import_react.default.createElement(FontAwesomeIcon, { onClick: function() {
      sort(columnKey, "ASC");
    }, className: styles$2.sortIcon, icon: faSort })
  };
  var headerFormatter = function(data2) {
    return data2;
  };
  return import_react.default.createElement(
    "div",
    { className: styles$2.tableHeaderContainer },
    import_react.default.createElement("p", null, headerFormatter(data)),
    props.sortable && sorter[sortState]
  );
};
var css_248z$1 = ".tableFooter-module_tableFooterContainer__gMufQ {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 16px 12px;\n\n  justify-content: space-around;\n  z-index: 500;\n  /* Monochrome/white 0 */\n  width: 100%;\n\n  background: #FFFFFF;\n  /* Tables/ShadowHeaderCell */\n\n  box-shadow: 0px 5px 4px -2px #F1F1F1;\n}\n.tableFooter-module_paginationContainer__uff8R{\n  display:flex;\n  flex-direction: row;\n  \n}\n";
var styles$1 = { "tableFooterContainer": "tableFooter-module_tableFooterContainer__gMufQ", "paginationContainer": "tableFooter-module_paginationContainer__uff8R" };
styleInject(css_248z$1);
var css_248z = ".pagination-module_paginatorContainer__O-JBc{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.pagination-module_arrowContainer__hgo9g{\n  width: 24px;\n  height:24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 32px;\n  cursor:pointer\n}\n\n\n";
var styles = { "paginatorContainer": "pagination-module_paginatorContainer__O-JBc", "arrowContainer": "pagination-module_arrowContainer__hgo9g" };
styleInject(css_248z);
var Pagination = function(_a) {
  var _b = _a.bgColorHover, bgColorHover = _b === void 0 ? "#F4F4F4" : _b, setPage = _a.setPage, _c = _a.totalPages, totalPages = _c === void 0 ? 10 : _c, _d = _a.position, position = _d === void 0 ? 1 : _d, _e = _a.variant, variant = _e === void 0 ? "regular" : _e;
  var _f = (0, import_react.useState)(position), positionState = _f[0], setPositionState = _f[1];
  var _g = (0, import_react.useState)(position == 1), disabledLeftArrow = _g[0], setDisabledLeftArrow = _g[1];
  var _h = (0, import_react.useState)(position == totalPages), disabledRightArrow = _h[0], setDisabledRightArrow = _h[1];
  var _j = (0, import_react.useState)(false), isHoverLeftArrow = _j[0], setIsHoverLeftArrow = _j[1];
  var _k = (0, import_react.useState)(false), isHoverRightArrow = _k[0], setIsHoverRightArrow = _k[1];
  var _l = (0, import_react.useState)(totalPages), pages = _l[0], setPages = _l[1];
  var formatPosition = function(position2) {
    var counter = 0;
    var totalPagesAux = pages;
    while (totalPagesAux >= 1) {
      totalPagesAux = totalPagesAux / 10;
      counter++;
    }
    return String(position2).padStart(counter, "0");
  };
  (0, import_react.useEffect)(function() {
    setPages(totalPages);
  }, [totalPages]);
  (0, import_react.useEffect)(function() {
    setDisabledLeftArrow(positionState == 1);
    setDisabledRightArrow(positionState == pages);
  }, [positionState, pages]);
  var prev = function() {
    setPositionState(positionState - 1);
    setPage(positionState - 1);
  };
  var next = function() {
    setPositionState(positionState + 1);
    setPage(positionState + 1);
  };
  return import_react.default.createElement(
    "div",
    { className: styles.paginatorContainer },
    import_react.default.createElement(
      "div",
      { className: styles.arrowContainer, onMouseLeave: function() {
        return setIsHoverLeftArrow(false);
      }, onMouseEnter: function() {
        return setIsHoverLeftArrow(!disabledLeftArrow);
      }, onClick: function() {
        return !disabledLeftArrow && prev();
      }, style: { backgroundColor: isHoverLeftArrow ? bgColorHover : "", marginRight: "2px" } },
      import_react.default.createElement(FontAwesomeIcon, { style: { color: disabledLeftArrow ? "#B3B3B3" : "#2B2B2B" }, className: styles.arrowIcon, icon: faChevronLeft })
    ),
    variant == "regular" && import_react.default.createElement(
      "div",
      { style: { userSelect: "none" } },
      formatPosition(positionState),
      " de ",
      totalPages,
      " p\xE1ginas"
    ),
    variant == "small" && import_react.default.createElement(
      "div",
      { style: { userSelect: "none" } },
      formatPosition(positionState),
      " / ",
      totalPages,
      " "
    ),
    import_react.default.createElement(
      "div",
      { className: styles.arrowContainer, onMouseLeave: function() {
        return setIsHoverRightArrow(false);
      }, onMouseEnter: function() {
        return setIsHoverRightArrow(!disabledRightArrow);
      }, onClick: function() {
        return !disabledRightArrow && next();
      }, style: { backgroundColor: isHoverRightArrow ? bgColorHover : "", marginLeft: "2px" } },
      import_react.default.createElement(FontAwesomeIcon, { style: { color: disabledRightArrow ? "#B3B3B3" : "#2B2B2B" }, className: styles.arrowIcon, icon: faChevronRight })
    )
  );
};
var TableFooter = function(_a) {
  var setPageNumber = _a.setPageNumber, setResultPerPage = _a.setResultPerPage, total = _a.total;
  var _b = (0, import_react.useState)(5), rpp = _b[0], setRpp = _b[1];
  var _c = (0, import_react.useState)(1), totalPages = _c[0], setTotalPages = _c[1];
  (0, import_react.useEffect)(function() {
    setResultPerPage(rpp);
    setTotalPages(Math.ceil(total / rpp));
  }, [rpp]);
  (0, import_react.useEffect)(function() {
    setTotalPages(Math.ceil(total / 5));
  }, [total]);
  return import_react.default.createElement(
    "div",
    { className: styles$1.tableFooterContainer },
    import_react.default.createElement(
      "div",
      { className: styles$1.paginationContainer },
      import_react.default.createElement(
        "select",
        { style: { outline: "none", border: "none" }, onChange: function(e) {
          return setRpp(parseInt(e.target.value));
        }, defaultValue: rpp },
        import_react.default.createElement("option", { value: 5 }, "5"),
        import_react.default.createElement("option", { value: 10 }, "10"),
        import_react.default.createElement("option", { value: 20 }, "20"),
        import_react.default.createElement("option", { value: 50 }, "50")
      ),
      import_react.default.createElement(
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
    import_react.default.createElement(Pagination, { setPage: setPageNumber, totalPages })
  );
};
var Table = function(_a) {
  var _b = _a.data, data = _b === void 0 ? "DATA" : _b, tableHeaders = _a.tableHeaders, _c = _a.paginated, paginated = _c === void 0 ? false : _c;
  var _d = (0, import_react.useState)(new Array()), filteredResult = _d[0], setFilteredResult = _d[1];
  var _e = (0, import_react.useState)(1), pageNumber = _e[0], setPageNumber = _e[1];
  var _f = (0, import_react.useState)(5), resultsPerPage = _f[0], setResultsPerPage = _f[1];
  var _g = (0, import_react.useState)(new Array()), columns = _g[0], setColumns = _g[1];
  var _h = (0, import_react.useState)(new Array()), dataTable = _h[0], setDataTable = _h[1];
  var _j = (0, import_react.useState)(0), total = _j[0], setTotal = _j[1];
  (0, import_react.useEffect)(function() {
    setDataTable(data);
    if (tableHeaders) {
      setColumns(tableHeaders);
    } else {
      var tempColumns_1 = new Array();
      Object.keys(data[0]).forEach(function(key) {
        return tempColumns_1.push({
          label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
          key,
          type: "text",
          sortable: false
        });
      });
      setColumns(tempColumns_1);
    }
  }, [data]);
  (0, import_react.useEffect)(function() {
    setTotal(dataTable.length);
    var filtereAux = __spreadArray([], dataTable, true);
    if (pageNumber == 1) {
      setFilteredResult(filtereAux.slice(0, resultsPerPage));
    } else
      setFilteredResult(filtereAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * pageNumber - 1 + resultsPerPage));
  }, [dataTable]);
  (0, import_react.useEffect)(function() {
    var filtereAux = __spreadArray([], dataTable, true);
    if (pageNumber == 1) {
      setFilteredResult(filtereAux.slice(0, resultsPerPage));
    } else
      setFilteredResult(filtereAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * (pageNumber - 1) + resultsPerPage));
  }, [resultsPerPage, pageNumber]);
  var sort = function(key, order) {
    var filteredAux = __spreadArray([], dataTable, true);
    var headers = __spreadArray([], columns, true);
    for (var i = 0; i < headers.length; i++) {
      if (headers[i].key != key) {
        headers[i].sortState = "BASE";
      } else {
        headers[i].sortState = order;
      }
    }
    setColumns(headers);
    if (order == "DESC") {
      filteredAux = filteredAux.sort(function(a, b) {
        return a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0;
      });
      setFilteredResult(filteredAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * (pageNumber - 1) + resultsPerPage));
    } else {
      filteredAux = filteredAux.sort(function(a, b) {
        return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
      });
      setFilteredResult(filteredAux.slice(resultsPerPage * (pageNumber - 1), resultsPerPage * (pageNumber - 1) + resultsPerPage));
    }
  };
  return import_react.default.createElement(
    "div",
    { className: styles$3.tableContainer },
    import_react.default.createElement("div", { className: styles$3.tableContentContainer }, columns.map(function(c2) {
      return import_react.default.createElement(
        "div",
        null,
        import_react.default.createElement(
          "div",
          { className: styles$3.tableHeaderContainer },
          import_react.default.createElement(TableHeader, { sortState: c2.sortState, columnKey: c2.key, sort, sortable: c2.sortable ? true : false, data: c2.label })
        ),
        filteredResult.map(function(r) {
          return import_react.default.createElement(
            "div",
            { className: styles$3.tableCellContainer },
            import_react.default.createElement(TableCell, { dataType: c2.type, data: r[c2.key] })
          );
        })
      );
    })),
    paginated && import_react.default.createElement(TableFooter, { setPageNumber, setResultPerPage: setResultsPerPage, total })
  );
};

// node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var faChevronDown2 = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
};
var faCopy = {
  prefix: "fas",
  iconName: "copy",
  icon: [512, 512, [], "f0c5", "M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]
};
var faChevronRight2 = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
};
var faCheck = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
};

export {
  c,
  Text,
  Button,
  Grid,
  Box,
  Breadcrumb,
  Chip,
  Table,
  faChevronDown2 as faChevronDown,
  faCopy,
  faChevronRight2 as faChevronRight,
  faCheck
};
//# sourceMappingURL=/build/_shared/chunk-JQBMPBG4.js.map

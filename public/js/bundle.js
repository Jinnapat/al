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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _style_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leaflet_leaflet_sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _leaflet_leaflet_sidebar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_leaflet_leaflet_sidebar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _leaflet_leaflet_sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _leaflet_leaflet_sidebar_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_leaflet_leaflet_sidebar_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _setting_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _quest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _forum_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _profile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _post_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _manual_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);












(function(){
    if (!navigator.geolocation) {
        alert("Geolocation is not available in your browser.");
    } else {
        console.log("Geolocation is available");
    }
    
    var map = Object(_setting_js__WEBPACK_IMPORTED_MODULE_4__["initLeaflet"])();
    Object(_setting_js__WEBPACK_IMPORTED_MODULE_4__["initBasic"])();
    Object(_manual_js__WEBPACK_IMPORTED_MODULE_9__["initManual"])();
    Object(_profile_js__WEBPACK_IMPORTED_MODULE_7__["initProfile"])();
    Object(_add_js__WEBPACK_IMPORTED_MODULE_10__["initWrite"])();
    Object(_quest_js__WEBPACK_IMPORTED_MODULE_5__["initQuest"])();
    Object(_forum_js__WEBPACK_IMPORTED_MODULE_6__["initForum"])();
    
    var markers = new L.LayerGroup();
    markers.addTo(map);
    Object(_quest_js__WEBPACK_IMPORTED_MODULE_5__["addMarker"])(map, markers, 18.79377, 98.98940, "วัดเชียงมั่น", "วัดแรกของเชียงใหม่", "123");
    
    for (var i = 1; i < 10; i++) {
        Object(_profile_js__WEBPACK_IMPORTED_MODULE_7__["addImage"])("image/Page_0" + i + ".png");
    }
    
    /*
    var search_list_el = document.getElementById("search-list");
    for (var i = 0; i < 10; i++) {
        var forum_el = createPost("หัวข้อที่กำลังจะทำคือการเดินไปหาอดีตที่ไม่มีวัน " + i, 
            "ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้",
            "tes esr setessse",
            "icon/user.png",
            "12.15PM",
            45658);
        var look_el = document.createElement("a");
        look_el.innerHTML = "see more";
        look_el.addEventListener("click", function () {
            document.getElementById("forum-list-pane").style.display = "block";
        });
        forum_el.appendChild(look_el);
        search_list_el.appendChild(forum_el);
    }
    */
}());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.leaflet-sidebar-content > div {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.user-container {\n  height: 60px;\n  width: 100%;\n}\n\n.message-box {\n  word-wrap: break-word;\n  border-radius: 16px;\n  padding: 16px 8px 16px 8px;\n  margin: 0 15px 0 15px;\n}\n.message-box img {\n  width: 100%;\n}\n\n.icon {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n}\n\n.left > .message-box {\n  background-color: #4169E1;\n  border-top-left-radius: 0px;\n  color: white;\n}\n.left > div > .icon {\n  position: absolute;\n  left: 20px;\n}\n.left > div > .name-tag {\n  text-align: left;\n  margin-left: 80px;\n}\n\n.right > .message-box {\n  background-color: #F5F5F5;\n  border-top-right-radius: 0px;\n  color: black;\n  margin-right: 15px;\n}\n.right > div > .icon {\n  position: absolute;\n  right: 20px;\n}\n.right > div > .name-tag {\n  text-align: right;\n  margin-right: 80px;\n}\n\n#profile > div:last-child > img {\n  width: 100%;\n  height: auto;\n}\n#profile > div:last-child > div {\n  width: 100%;\n}\n\n.pane {\n  position: fixed;\n  top: 10px;\n  bottom: 10px;\n  left: 10px;\n  right: 10px;\n  z-index: 9999;\n  display: none;\n}\n\n.pane-small {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  right: 30px;\n  z-index: 10000;\n  display: none;\n}\n\n.forum-box > p:last-child {\n  margin-top: 0;\n}\n.forum-box img {\n  width: 20px;\n  margin-right: 10px;\n}\n\n.square-button {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  width: 40px;\n  height: 40px;\n}\n.square-button > i {\n  font-size: 12pt;\n  text-align: center;\n}\n\n.content {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n\n.character-container {\n  width: 60px;\n  height: 90%;\n  display: inline-block;\n}\n\n.page-button {\n  display: inline-block;\n}\n\n.my-collapse-btn:after {\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  font-size: 30px;\n  content: \"×\";\n}\n\n.leaflet-routing-container-hide .my-collapse-btn:after {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  display: block;\n  font-size: 20px;\n  width: 30px;\n  height: 30px;\n  content: \"\";\n}\n\n.info-box {\n  margin-top: 40px;\n}\n\n#whitespace {\n  height: 60px;\n}\n\n.image-choice {\n  margin-bottom: 10px;\n}\n.image-choice img {\n  width: 99%;\n}\n\n.edit-tool-icon {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  padding: 3px;\n  font-size: 20px;\n  margin-top: 10px;\n  margin-left: 15px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(6);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#loader,\n#loader:before,\n#loader:after {\n    border-radius: 50%;\n    width: 2.5em;\n    height: 2.5em;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation: load7 1.8s infinite ease-in-out;\n    animation: load7 1.8s infinite ease-in-out;\n}\n\n#loader {\n    color: #242424;\n    font-size: 10px;\n    margin: 40px auto;\n    text-indent: -9999em;\n    left: 0;\n    right: 0;\n    display: none;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n#loader:before,\n#loader:after {\n    content: '';\n    position: absolute;\n    top: 0;\n}\n\n#loader:before {\n    left: -3.5em;\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n#loader:after {\n    left: 3.5em;\n}\n\n@-webkit-keyframes load7 {\n    0%,\n    80%,\n    100% {\n        box-shadow: 0 2.5em 0 -1.3em;\n    }\n    40% {\n        box-shadow: 0 2.5em 0 0;\n    }\n}\n\n@keyframes load7 {\n    0%,\n    80%,\n    100% {\n        box-shadow: 0 2.5em 0 -1.3em;\n    }\n    40% {\n        box-shadow: 0 2.5em 0 0;\n    }\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(8);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".leaflet-sidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  overflow: hidden;\n  z-index: 2000; }\n  .leaflet-sidebar.collapsed {\n    width: 40px; }\n  @media (min-width: 768px) {\n    .leaflet-sidebar {\n      top: 10px;\n      bottom: 10px;\n      transition: width 500ms; } }\n  @media (min-width: 768px) and (max-width: 991px) {\n    .leaflet-sidebar {\n      width: 305px;\n      max-width: 305px; } }\n  @media (min-width: 992px) and (max-width: 1199px) {\n    .leaflet-sidebar {\n      width: 390px;\n      max-width: 390px; } }\n  @media (min-width: 1200px) {\n    .leaflet-sidebar {\n      width: 460px;\n      max-width: 460px; } }\n\n.leaflet-sidebar-left {\n  left: 0; }\n  @media (min-width: 768px) {\n    .leaflet-sidebar-left {\n      left: 10px; } }\n\n.leaflet-sidebar-right {\n  right: 0; }\n  @media (min-width: 768px) {\n    .leaflet-sidebar-right {\n      right: 10px; } }\n\n.leaflet-sidebar-tabs {\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  /* background-color: #fff; */}\n  .leaflet-sidebar-left .leaflet-sidebar-tabs {\n    left: 0; }\n  .leaflet-sidebar-right .leaflet-sidebar-tabs {\n    right: 0; }\n  .leaflet-sidebar-tabs, .leaflet-sidebar-tabs > ul {\n    position: absolute;\n    width: 40px;\n    margin: 0;\n    padding: 0 0 60px 0;\n    list-style-type: none; }\n    .leaflet-sidebar-tabs > li, .leaflet-sidebar-tabs > ul > li {\n      border: 2px solid rgba(0, 0, 0, 0.2);\n      width: 100%;\n      height: 40px;\n      color: #333;\n      font-size: 12pt;\n      overflow: hidden;\n      transition: all 80ms;\n      background-color: white; }\n      .leaflet-sidebar-tabs > li:hover, .leaflet-sidebar-tabs > ul > li:hover {\n        color: #000;\n        background-color: #eee; }\n      .leaflet-sidebar-tabs > li.active, .leaflet-sidebar-tabs > ul > li.active {\n        color: #fff;\n        background-color: #0074d9; }\n      .leaflet-sidebar-tabs > li.disabled, .leaflet-sidebar-tabs > ul > li.disabled {\n        color: rgba(51, 51, 51, 0.4); }\n        .leaflet-sidebar-tabs > li.disabled:hover, .leaflet-sidebar-tabs > ul > li.disabled:hover {\n          background: transparent; }\n        .leaflet-sidebar-tabs > li.disabled > a, .leaflet-sidebar-tabs > ul > li.disabled > a {\n          cursor: default; }\n      .leaflet-sidebar-tabs > li > a, .leaflet-sidebar-tabs > ul > li > a {\n        display: block;\n        width: 100%;\n        height: 100%;\n        line-height: 40px;\n        color: inherit;\n        text-decoration: none;\n        text-align: center;\n        cursor: pointer; }\n  .leaflet-sidebar-tabs > ul + ul {\n    bottom: 0; }\n\n.leaflet-sidebar-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.95);\n  overflow-x: hidden;\n  overflow-y: hidden; }\n  .leaflet-sidebar-left .leaflet-sidebar-content {\n    left: 40px;\n    right: 0; }\n  .leaflet-sidebar-right .leaflet-sidebar-content {\n    left: 0;\n    right: 40px; }\n  .leaflet-sidebar.collapsed > .leaflet-sidebar-content {\n    overflow-y: hidden; }\n\n.collapsed > .leaflet-sidebar-content {\n  overflow-y: hidden; }\n\n.leaflet-sidebar-pane {\n  display: none;\n  left: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 10px 20px; }\n  .leaflet-sidebar-pane.active {\n    display: block; }\n  @media (min-width: 768px) and (max-width: 991px) {\n    .leaflet-sidebar-pane {\n      min-width: 265px; } }\n  @media (min-width: 992px) and (max-width: 1199px) {\n    .leaflet-sidebar-pane {\n      min-width: 350px; } }\n  @media (min-width: 1200px) {\n    .leaflet-sidebar-pane {\n      min-width: 420px; } }\n\n.leaflet-sidebar-header {\n  margin: -10px -20px 0;\n  height: 40px;\n  padding: 0 20px;\n  line-height: 40px;\n  font-size: 14.4pt;\n  color: #fff;\n  background-color: #0074d9; }\n  .leaflet-sidebar-right .leaflet-sidebar-header {\n    padding-left: 40px; }\n\n.leaflet-sidebar-close {\n  position: absolute;\n  top: 0;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  cursor: pointer; }\n  .leaflet-sidebar-left .leaflet-sidebar-close {\n    right: 0; }\n  .leaflet-sidebar-right .leaflet-sidebar-close {\n    left: 0; }\n\n.leaflet-sidebar {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65); }\n  @media (min-width: 768px) {\n    .leaflet-sidebar {\n      border-radius: 4px; }\n      .leaflet-sidebar.leaflet-touch {\n        /* border: 2px solid rgba(0, 0, 0, 0.2);*/ } }\n\n.leaflet-sidebar-left.leaflet-touch {\n  box-shadow: none;\n  border-right: 2px solid rgba(0, 0, 0, 0.2); }\n\n@media (min-width: 768px) {\n  .leaflet-sidebar-left ~ .leaflet-control-container .leaflet-left {\n    transition: left 500ms; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .leaflet-sidebar-left ~ .leaflet-control-container .leaflet-left {\n    left: 315px; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .leaflet-sidebar-left ~ .leaflet-control-container .leaflet-left {\n    left: 400px; } }\n\n@media (min-width: 1200px) {\n  .leaflet-sidebar-left ~ .leaflet-control-container .leaflet-left {\n    left: 470px; } }\n\n.leaflet-sidebar-left.collapsed ~ .leaflet-control-container .leaflet-left {\n  left: 50px; }\n\n.leaflet-sidebar-right.leaflet-touch {\n  box-shadow: none;\n  /* border-left: 2px solid rgba(0, 0, 0, 0.2); */ }\n\n@media (min-width: 768px) {\n  .leaflet-sidebar-right ~ .leaflet-control-container .leaflet-right {\n    transition: right 500ms; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .leaflet-sidebar-right ~ .leaflet-control-container .leaflet-right {\n    right: 315px; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .leaflet-sidebar-right ~ .leaflet-control-container .leaflet-right {\n    right: 400px; } }\n\n@media (min-width: 1200px) {\n  .leaflet-sidebar-right ~ .leaflet-control-container .leaflet-right {\n    right: 470px; } }\n\n.leaflet-sidebar-right.collapsed ~ .leaflet-control-container .leaflet-right {\n  right: 50px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// @ts-nocheck
/**
 * @name Sidebar
 * @class L.Control.Sidebar
 * @extends L.Control
 * @param {string} id - The id of the sidebar element (without the # character)
 * @param {Object} [options] - Optional options object
 * @param {string} [options.autopan=false] - whether to move the map when opening the sidebar to make maintain the visible center point
 * @param {string} [options.position=left] - Position of the sidebar: 'left' or 'right'
 * @param {string} [options.id] - ID of a predefined sidebar container that should be used
 * @param {boolean} [data.close=true] Whether to add a close button to the pane header
 * @see L.control.sidebar
 */
L.Control.Sidebar = L.Control.extend(/** @lends L.Control.Sidebar.prototype */ {
    includes: L.Evented ? L.Evented.prototype : L.Mixin.Events,

    options: {
        autopan: false,
        closeButton: true,
        container: null,
        position: 'left'
    },

    /**
     * Create a new sidebar on this object.
     *
     * @constructor
     * @param {Object} [options] - Optional options object
     * @param {string} [options.autopan=false] - whether to move the map when opening the sidebar to make maintain the visible center point
     * @param {string} [options.position=left] - Position of the sidebar: 'left' or 'right'
     * @param {string} [options.container] - ID of a predefined sidebar container that should be used
     * @param {bool} [data.close=true] Whether to add a close button to the pane header
     */
    initialize: function(options, deprecatedOptions) {
        if (typeof options === 'string') {
            console.warn('this syntax is deprecated. please use L.control.sidebar({ container }) now');
            options = { container: options };
        }

        if (typeof options === 'object' && options.id) {
            console.warn('this syntax is deprecated. please use L.control.sidebar({ container }) now');
            options.container = options.id;
        }

        this._tabitems = [];
        this._panes = [];
        this._closeButtons = [];

        L.setOptions(this, options);
        L.setOptions(this, deprecatedOptions);
        return this;
    },

    /**
     * Add this sidebar to the specified map.
     *
     * @param {L.Map} map
     * @returns {Sidebar}
     */
    onAdd: function(map) {
        var i, child, tabContainers, newContainer, container;

        // use container from previous onAdd()
        container = this._container

        // use the container given via options.
        if (!container) {
            container = this._container || typeof this.options.container === 'string'
            ? L.DomUtil.get(this.options.container)
            : this.options.container;
        }

        // if no container was specified or not found, create it and apply an ID
        if (!container) {
            container = L.DomUtil.create('div', 'leaflet-sidebar collapsed');
            if (typeof this.options.container === 'string')
                container.id = this.options.container;
        }

        // Find paneContainer in DOM & store reference
        this._paneContainer = container.querySelector('div.leaflet-sidebar-content');

        // If none is found, create it
        if (this._paneContainer === null)
            this._paneContainer = L.DomUtil.create('div', 'leaflet-sidebar-content', container);

        // Find tabContainerTop & tabContainerBottom in DOM & store reference
        tabContainers = container.querySelectorAll('ul.leaflet-sidebar-tabs, div.leaflet-sidebar-tabs > ul');
        this._tabContainerTop    = tabContainers[0] || null;
        this._tabContainerBottom = tabContainers[1] || null;

        // If no container was found, create it
        if (this._tabContainerTop === null) {
            newContainer = L.DomUtil.create('div', 'leaflet-sidebar-tabs', container);
            newContainer.setAttribute('role', 'tablist');
            this._tabContainerTop = L.DomUtil.create('ul', '', newContainer);
        }
        if (this._tabContainerBottom === null) {
            newContainer = this._tabContainerTop.parentNode;
            this._tabContainerBottom = L.DomUtil.create('ul', '', newContainer);
        }

        // Store Tabs in Collection for easier iteration
        for (i = 0; i < this._tabContainerTop.children.length; i++) {
            child = this._tabContainerTop.children[i];
            child._sidebar = this;
            child._id = child.querySelector('a').hash.slice(1); // FIXME: this could break for links!
            this._tabitems.push(child);
        }
        for (i = 0; i < this._tabContainerBottom.children.length; i++) {
            child = this._tabContainerBottom.children[i];
            child._sidebar = this;
            child._id = child.querySelector('a').hash.slice(1); // FIXME: this could break for links!
            this._tabitems.push(child);
        }

        // Store Panes in Collection for easier iteration
        for (i = 0; i < this._paneContainer.children.length; i++) {
            child = this._paneContainer.children[i];
            if (child.tagName === 'DIV' &&
                L.DomUtil.hasClass(child, 'leaflet-sidebar-pane')) {
                this._panes.push(child);

                // Save references to close buttons
                var closeButtons = child.querySelectorAll('.leaflet-sidebar-close');
                if (closeButtons.length) {
                    this._closeButtons.push(closeButtons[closeButtons.length - 1]);
                    this._closeClick(closeButtons[closeButtons.length - 1], 'on');
                }
            }
        }

        // set click listeners for tab & close buttons
        for (i = 0; i < this._tabitems.length; i++) {
            this._tabClick(this._tabitems[i], 'on');
        }

        // leaflet moves the returned container to the right place in the DOM
        return container;
    },

    /**
     * Remove this sidebar from the map.
     *
     * @param {L.Map} map
     * @returns {Sidebar}
     */
    onRemove: function (map) {
        // Remove click listeners for tab & close buttons
        for (var i = 0; i < this._tabitems.length; i++)
            this._tabClick(this._tabitems[i], 'off');
        for (var i = 0; i < this._closeButtons.length; i++)
            this._closeClick(this._closeButtons[i], 'off');

        this._tabitems = [];
        this._panes = [];
        this._closeButtons = [];

        return this;
    },

    /**
     * @method addTo(map: Map): this
     * Adds the control to the given map. Overrides the implementation of L.Control,
     * changing the DOM mount target from map._controlContainer.topleft to map._container
     */
    addTo: function (map) {
        this.onRemove();
        this._map = map;

        this._container = this.onAdd(map);

        L.DomUtil.addClass(this._container, 'leaflet-control');
        L.DomUtil.addClass(this._container, 'leaflet-sidebar-' + this.getPosition());
        if (L.Browser.touch)
            L.DomUtil.addClass(this._container, 'leaflet-touch');

        // when adding to the map container, we should stop event propagation
        L.DomEvent.disableScrollPropagation(this._container);
        L.DomEvent.disableClickPropagation(this._container);
        L.DomEvent.on(this._container, 'contextmenu', L.DomEvent.stopPropagation);

        // insert as first child of map container (important for css)
        map._container.insertBefore(this._container, map._container.firstChild);

        return this;
    },

    /**
     * @deprecated - Please use remove() instead of removeFrom(), as of Leaflet 0.8-dev, the removeFrom() has been replaced with remove()
     * Removes this sidebar from the map.
     * @param {L.Map} map
     * @returns {Sidebar}
     */
    removeFrom: function(map) {
        console.warn('removeFrom() has been deprecated, please use remove() instead as support for this function will be ending soon.');
        this._map._container.removeChild(this._container);
        this.onRemove(map);

        return this;
    },

   /**
     * Open sidebar (if it's closed) and show the specified tab.
     *
     * @param {string} id - The ID of the tab to show (without the # character)
     * @returns {L.Control.Sidebar}
     */
    open: function(id) {
        var i, child, tab;

        // If panel is disabled, stop right here
        tab = this._getTab(id);
        if (L.DomUtil.hasClass(tab, 'disabled'))
            return this;

        // Hide old active contents and show new content
        for (i = 0; i < this._panes.length; i++) {
            child = this._panes[i];
            if (child.id === id)
                L.DomUtil.addClass(child, 'active');
            else if (L.DomUtil.hasClass(child, 'active'))
                L.DomUtil.removeClass(child, 'active');
        }

        // Remove old active highlights and set new highlight
        for (i = 0; i < this._tabitems.length; i++) {
            child = this._tabitems[i];
            if (child.querySelector('a').hash === '#' + id)
                L.DomUtil.addClass(child, 'active');
            else if (L.DomUtil.hasClass(child, 'active'))
                L.DomUtil.removeClass(child, 'active');
        }

        this.fire('content', { id: id });

        // Open sidebar if it's closed
        if (L.DomUtil.hasClass(this._container, 'collapsed')) {
            this.fire('opening');
            L.DomUtil.removeClass(this._container, 'collapsed');
            if (this.options.autopan) this._panMap('open');
        }

        return this;
    },

    /**
     * Close the sidebar (if it's open).
     *
     * @returns {L.Control.Sidebar}
     */
    close: function() {
        var i;

        // Remove old active highlights
        for (i = 0; i < this._tabitems.length; i++) {
            var child = this._tabitems[i];
            if (L.DomUtil.hasClass(child, 'active'))
                L.DomUtil.removeClass(child, 'active');
        }

        // close sidebar, if it's opened
        if (!L.DomUtil.hasClass(this._container, 'collapsed')) {
            this.fire('closing');
            L.DomUtil.addClass(this._container, 'collapsed');
            if (this.options.autopan) this._panMap('close');
        }

        return this;
    },

    /**
     * Add a panel to the sidebar
     *
     * @example
     * sidebar.addPanel({
     *     id: 'userinfo',
     *     tab: '<i class="fa fa-gear"></i>',
     *     pane: someDomNode.innerHTML,
     *     position: 'bottom'
     * });
     *
     * @param {Object} [data] contains the data for the new Panel:
     * @param {String} [data.id] the ID for the new Panel, must be unique for the whole page
     * @param {String} [data.position='top'] where the tab will appear:
     *                                       on the top or the bottom of the sidebar. 'top' or 'bottom'
     * @param {HTMLString} {DOMnode} [data.tab]  content of the tab item, as HTMLstring or DOM node
     * @param {HTMLString} {DOMnode} [data.pane] content of the panel, as HTMLstring or DOM node
     * @param {String} [data.link] URL to an (external) link that will be opened instead of a panel
     * @param {String} [data.title] Title for the pane header
     * @param {String} {Function} [data.button] URL to an (external) link or a click listener function that will be opened instead of a panel
     * @param {bool} [data.disabled] If the tab should be disabled by default
     *
     * @returns {L.Control.Sidebar}
     */
    addPanel: function(data) {
        var pane, tab, tabHref, closeButtons, content;

        // Create tab node
        tab = L.DomUtil.create('li', data.disabled ? 'disabled' : '');
        tabHref = L.DomUtil.create('a', '', tab);
        tabHref.href = '#' + data.id;
        tabHref.setAttribute('role', 'tab');
        tabHref.innerHTML = data.tab;
        tab._sidebar = this;
        tab._id = data.id;
        tab._button = data.button; // to allow links to be disabled, the href cannot be used
        if (data.title && data.title[0] !== '<') tab.title = data.title;

        // append it to the DOM and store JS references
        if (data.position === 'bottom')
            this._tabContainerBottom.appendChild(tab);
        else
            this._tabContainerTop.appendChild(tab);

        this._tabitems.push(tab);

        // Create pane node
        if (data.pane) {
            if (typeof data.pane === 'string') {
                // pane is given as HTML string
                pane = L.DomUtil.create('DIV', 'leaflet-sidebar-pane', this._paneContainer);
                content = '';
                if (data.title)
                    content += '<h1 class="leaflet-sidebar-header">' + data.title;
                if (this.options.closeButton)
                    content += '<span class="leaflet-sidebar-close"><i class="fa fa-caret-' + this.options.position + '"></i></span>';
                if (data.title)
                    content += '</h1>';
                pane.innerHTML = content + data.pane;
            } else {
                // pane is given as DOM object
                pane = data.pane;
                this._paneContainer.appendChild(pane);
            }
            pane.id = data.id;

            this._panes.push(pane);

            // Save references to close button & register click listener
            closeButtons = pane.querySelectorAll('.leaflet-sidebar-close');
            if (closeButtons.length) {
                // select last button, because thats rendered on top
                this._closeButtons.push(closeButtons[closeButtons.length - 1]);
                this._closeClick(closeButtons[closeButtons.length - 1], 'on');
            }
        }

        // Register click listeners, if the sidebar is on the map
        this._tabClick(tab, 'on');

        return this;
    },

    /**
     * Removes a panel from the sidebar
     *
     * @example
     * sidebar.remove('userinfo');
     *
     * @param {String} [id] the ID of the panel that is to be removed
     * @returns {L.Control.Sidebar}
     */
    removePanel: function(id) {
        var i, j, tab, pane, closeButtons;

        // find the tab & panel by ID, remove them, and clean up
        for (i = 0; i < this._tabitems.length; i++) {
            if (this._tabitems[i]._id === id) {
                tab = this._tabitems[i];

                // Remove click listeners
                this._tabClick(tab, 'off');

                tab.remove();
                this._tabitems.splice(i, 1);
                break;
            }
        }

        for (i = 0; i < this._panes.length; i++) {
            if (this._panes[i].id === id) {
                pane = this._panes[i];
                closeButtons = pane.querySelectorAll('.leaflet-sidebar-close');
                for (j = 0; j < closeButtons.length; j++) {
                    this._closeClick(closeButtons[j], 'off');
                }

                pane.remove();
                this._panes.splice(i, 1);

                break;
            }
        }

        return this;
    },

    /**
     * enables a disabled tab/panel
     *
     * @param {String} [id] ID of the panel to enable
     * @returns {L.Control.Sidebar}
     */
    enablePanel: function(id) {
        var tab = this._getTab(id);
        L.DomUtil.removeClass(tab, 'disabled');

        return this;
    },

    /**
     * disables an enabled tab/panel
     *
     * @param {String} [id] ID of the panel to disable
     * @returns {L.Control.Sidebar}
     */
    disablePanel: function(id) {
        var tab = this._getTab(id);
        L.DomUtil.addClass(tab, 'disabled');

        return this;
    },

    onTabClick: function(e) {
        // `this` points to the tab DOM element!
        if (L.DomUtil.hasClass(this, 'active')) {
            this._sidebar.close();
        } else if (!L.DomUtil.hasClass(this, 'disabled')) {
            if (typeof this._button === 'string') // an url
                window.location.href = this._button;
            else if (typeof this._button === 'function') // a clickhandler
                this._button(e);
            else // a normal pane
                this._sidebar.open(this.querySelector('a').hash.slice(1));
        }
    },

    /**
     * (un)registers the onclick event for the given tab,
     * depending on the second argument.
     * @private
     *
     * @param {DOMelement} [tab]
     * @param {String} [on] 'on' or 'off'
     */
    _tabClick: function(tab, on) {
        var link = tab.querySelector('a');
        if (!link.hasAttribute('href') || link.getAttribute('href')[0] !== '#')
            return;

        if (on === 'on') {
            L.DomEvent
                .on(tab.querySelector('a'), 'click', L.DomEvent.preventDefault, tab)
                .on(tab.querySelector('a'), 'click', this.onTabClick, tab);
        } else {
            L.DomEvent.off(tab.querySelector('a'), 'click', this.onTabClick, tab);
        }
    },

    onCloseClick: function() {
        this.close();
    },

    /**
     * (un)registers the onclick event for the given close button
     * depending on the second argument
     * @private
     *
     * @param {DOMelement} [closeButton]
     * @param {String} [on] 'on' or 'off'
     */
    _closeClick: function(closeButton, on) {
        if (on === 'on') {
            L.DomEvent.on(closeButton, 'click', this.onCloseClick, this);
        } else {
            L.DomEvent.off(closeButton, 'click', this.onCloseClick);
        }
    },

    /**
     * Finds & returns the DOMelement of a tab
     *
     * @param {String} [id] the id of the tab
     * @returns {DOMelement} the tab specified by id, null if not found
     */
    _getTab: function(id) {
        for (var i = 0; i < this._tabitems.length; i++) {
            if (this._tabitems[i]._id === id)
                return this._tabitems[i];
        }

        throw Error('tab "' + id + '" not found');
    },

    /**
     * Helper for autopan: Pans the map for open/close events
     *
     * @param {String} [openClose] The behaviour to enact ('open' | 'close')
     */
   _panMap: function(openClose) {
        var panWidth = Number.parseInt(L.DomUtil.getStyle(this._container, 'max-width')) / 2;
        if (
            openClose === 'open' && this.options.position === 'left' ||
            openClose === 'close' && this.options.position === 'right'
        ) panWidth *= -1;
        this._map.panBy([panWidth, 0], { duration: 0.5 });
   }
});

/**
 * Create a new sidebar.
 *
 * @example
 * var sidebar = L.control.sidebar({ container: 'sidebar' }).addTo(map);
 *
 * @param {Object} [options] - Optional options object
 * @param {string} [options.autopan=false] - whether to move the map when opening the sidebar to make maintain the visible center point
 * @param {string} [options.position=left] - Position of the sidebar: 'left' or 'right'
 * @param {string} [options.container] - ID of a predefined sidebar container that should be used
 * @param {boolean} [data.close=true] Whether to add a close button to the pane header
 * @returns {Sidebar} A new sidebar instance
 */
L.control.sidebar = function(options, deprecated) {
    return new L.Control.Sidebar(options, deprecated);
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFullscreen", function() { return toggleFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLeaflet", function() { return initLeaflet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_child", function() { return clear_child; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBasic", function() { return initBasic; });
function toggleFullscreen() {
    var elem = document.documentElement;
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function initLeaflet() {
    var map = L.map("mymap").setView([18.7883, 98.9855], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"}).addTo(map);
    L.control.locate().addTo(map);

    var sidebar = L.control.sidebar({
        autopan: false,
        closeButton: true, 
        container: "sidebar",
        position: "right"
    }).addTo(map)

    sidebar.addPanel({
        id: "profile",
        tab: "<i class=\"fa fa-user\"></i>",
        pane: document.getElementById("profile-pane"),
        title: "Your Profile",
        position: "top"
    });

    sidebar.addPanel({
        id: "manual",
        tab: "<i class=\"fa fa-book\"></i>",
        pane: document.getElementById("manual-pane"),
        title: "Manual",
        position: "top"
    });
    
    sidebar.addPanel({
        id: "forum",
        tab: "<i class=\"fa fa-comment\"></i>",
        pane: document.getElementById("forum-pane"),
        title: "Forum",
        position: "top"
    });
    
    sidebar.addPanel({
        id: "fullscreenBtn",
        tab: "<i class=\"fa fa-expand\"></i>",
        button: toggleFullscreen
    });
    
    sidebar.addPanel({
        id: "story",
        tab: "<i class=\"fa fa-compass\"></i>",
        pane: document.getElementById("chat-pane"),
        title: "Story",
        position: "bottom"
    });

    sidebar.on("content", function(e) {
        var children = document.getElementsByClassName("leaflet-sidebar-content")[0].childNodes
        for (var i = 0; i < children.length; i++) {
            if (children[i].id == e.id) {
                children[i].style.visibility = "visible";
            } else {
                children[i].style.visibility = "hidden";
            }
        }
    });
    
    return map;
}

function closePanes() {
    var pane_els = document.getElementsByClassName("pane");
    for (var i = 0; i < pane_els.length; i++) {
        pane_els[i].style.display = "none";
    }
}

function closeSmallPanes() {
    var pane_els = document.getElementsByClassName("pane-small");
    for (var i = 0; i < pane_els.length; i++) {
        pane_els[i].style.display = "none";
    }
}

function clear_child(el) {
    while (el.lastChild) {
        el.removeChild(el.lastChild);
    }
}

function uploadImage(elid, callback) {
    var upload_el = document.getElementById(elid);
    var formData = new FormData(upload_el);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == "uploaded") {
                callback();
            }
        }
    };
    xhttp.open("POST", "upload", true);
    xhttp.send(formData);
}

function initBasic() {
    var close_els = document.getElementsByClassName("closeBtn");
    var close_small_els = document.getElementsByClassName("closeSmallBtn");
    
    for (var i = 0; i < close_els.length; i++) {
        close_els[i].addEventListener("click", closePanes);
    }
    
    for (var i = 0; i < close_small_els.length; i++) {
        close_small_els[i].addEventListener("click", closeSmallPanes);
    }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChat", function() { return createChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInfo", function() { return createInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMarker", function() { return addMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initQuest", function() { return initQuest; });
var loader = document.getElementById("loader");
var textbox = document.getElementById("sendBox");
var whitespace_el = document.getElementById("whitespace");
var press_el = document.getElementById("press");

function clearMarkers(layer) {
    layer.clearLayers();
}

function createUserTitle(speaker, icon) {
    var user_el = document.createElement("div");
    var icon_el = document.createElement("img");
    var name_el = document.createElement("div");
    
    icon_el.classList.add("icon");
    icon_el.classList.add("w3-circle");
    icon_el.src = icon;
    name_el.innerHTML = speaker;
    name_el.classList.add("name-tag");
    user_el.classList.add("user-container");
    
    user_el.appendChild(icon_el);
    user_el.appendChild(name_el);
    return user_el;
}

function createChat(last_speaker, speaker, side, content, icon) {
    var chat_el = document.createElement("div");
    var content_el = document.createElement("div");
    var user_el = null;
    
    if (last_speaker != speaker) {
        user_el = createUserTitle(speaker, icon);
        chat_el.style.marginTop = "40px";
        chat_el.appendChild(user_el);
    } else {
        chat_el.style.marginTop = "3px";
    }
    
    content_el.innerHTML = content;
    content_el.classList.add("message-box");
    chat_el.classList.add("chat");
    chat_el.classList.add(side);
    chat_el.appendChild(content_el);
    return [speaker, chat_el, user_el, content_el];
}

function createInfo (content) {
    var info_el = document.createElement("div");
    var content_el = document.createElement("div");
    
    content_el.innerHTML = content;
    content_el.classList.add("message-box");
    content_el.classList.add("w3-black");
    info_el.classList.add("info-box");
    info_el.appendChild(content_el);
    return ["", info_el, content_el];
}

function createRoute(from, to) {
    var route = L.Routing.control({
        serviceUrl: "https://www.ancestral-lens.tk:8080/route/v1",
        addWaypoints: false,
        draggableWaypoints: false,
        createMarker: function() { return null; },
        collapsible: true,
        collapseBtnClass: "my-collapse-btn fa",
        useHints: false,
        waypoints: [
            L.latLng(from),
            L.latLng(to)
        ]
    });
    return route;
}

function createTargetBox (lat, lon) {
    var bounds = [[lat - 0.0005, lon - 0.0005], [lat + 0.0005, lon + 0.0005]];
    var box = L.rectangle(bounds, {color: "#ff7800", weight: 1})
    return box;
}

function arrived() {

}

function createStartLink (map, layer, lat, lon) {
    var link = document.createElement("a");
    var pressed = false;
    link.appendChild(document.createTextNode("เริ่มเดินทาง"));
    link.addEventListener("click", function () {
        if (!pressed) {
            pressed = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                var route = createRoute([position.coords.latitude, position.coords.longitude], [lat, lon]);
                var box = createTargetBox(lat, lon);
                clearMarkers(layer);
                route.addTo(map);
                layer.addLayer(box);
            });
        }
    });
    
    return link;
}

function addMarker(map, layer, lat, lon, name, description, storyId) {
    var popupContent = document.createElement("div");
    var name_el = document.createElement("b");
    var description_el = document.createElement("p");
    var link = createStartLink(map, layer, lat, lon);
    var marker = L.marker([lat, lon]);
    
    name_el.appendChild(document.createTextNode(name));
    description_el.appendChild(document.createTextNode(description));
    description_el.style.margin = "0";
    popupContent.style.textAlign = "center";
    
    popupContent.appendChild(name_el);
    popupContent.appendChild(description_el);
    popupContent.appendChild(link);
    
    marker.bindPopup(popupContent).openPopup();
    marker.addTo(layer);
    
    return marker;
}

function getStory(storyId, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var story_list = JSON.parse(xhttp.responseText);
            callback(story_list);
        }
    };
    xhttp.open("POST", "get_story", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("storyId=" + storyId);
}

function displayLine(last_speaker, current, story_list, callback) {
    var line = story_list[current];
    var chatpane_el = document.getElementById("story-message");
    var new_el;
    if (chatpane_el.childNodes.length >= 20) {
        chatpane_el.firstChild.remove();
    }

    if (line.type == "chat") {
        [last_speaker, new_el] = createChat(last_speaker, line.speaker, line.side, line.content, line.icon);
    } else if (line.type == "info") {
        [last_speaker, new_el] = createInfo(line.content);
    }
    
    chatpane_el.insertBefore(new_el, whitespace_el);
    chatpane_el.scrollTop = chatpane_el.scrollHeight;
    if (line.condition == "delay") {
        var duration;
        if (line.condition_setting == "") {
            duration = Math.min(line.content.length * 100, 4000);
        } else {
            duration = parseInt(line.condition_setting) * 1000;
        }
        loader.style.display = "block";
        press_el.style.display = "none";
        setTimeout(function () {
            loader.style.display = "none";
            displayLine(last_speaker, current + 1, story_list, callback)
        }, duration);
    } else {
        press_el.style.display = "block";
        callback(current, last_speaker);
    }
}

function initQuest() {
    getStory(1, function (story_list) {
        var last_speaker = "";
        var current = 0;
        var wait = true;

        function progress() {
            wait = true;
            displayLine(last_speaker, current + 1, story_list, function(last_current, this_last_speaker) {
                current = last_current;
                last_speaker = this_last_speaker;
                wait = false;
            });
        }
        
        progress();
        
        document.getElementById("sendBtn").addEventListener("click", function() {
            var line = story_list[current];
            if (!wait) {
                if (line.condition == "pressed") {
                    progress();
                } else if (line.condition == "answered") {
                    var text = textbox.value;
                    textbox.value = "";
                    if (text == line.condition_setting) {
                        progress();
                    } else {
                        textbox.classList.add("w3-red");
                        setTimeout(function () {
                            textbox.classList.remove("w3-red");
                        }, 200);
                    }
                }
            }
        });
        
    });
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initForum", function() { return initForum; });
/* harmony import */ var _setting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


function createPosterData(user_img, username) {
    var poster_data_el = document.createElement("div");
    var user_img_el = document.createElement("img");
    var username_el = document.createElement("b");
    
    user_img_el.src = user_img;
    username_el.innerHTML = username;
    
    poster_data_el.appendChild(user_img_el);
    poster_data_el.appendChild(username_el);
    return poster_data_el;
}

function createPost (title, description, username, user_img, time, forumId) {
    var forum_el = document.createElement("div");
    var title_el = document.createElement("h4");
    var last_post_el = document.createElement("p");
    var time_el = document.createElement("p");
    var poster_data_el = createPosterData(user_img, username);
    
    forum_el.classList.add("w3-border");
    forum_el.classList.add("w3-margin-bottom");
    forum_el.classList.add("w3-padding-small");
    forum_el.classList.add("forum-box");
    last_post_el.classList.add("w3-padding-small");
    last_post_el.classList.add("w3-margin-bottom");
    title_el.classList.add("w3-padding-small");
    
    time_el.innerHTML = time;
    title_el.innerHTML = title;
    last_post_el.style.wordWrap = "break-word";
    last_post_el.innerHTML = description;
    
    forum_el.appendChild(title_el);
    forum_el.appendChild(last_post_el);
    forum_el.appendChild(time_el);
    forum_el.appendChild(poster_data_el);
    
    return forum_el;
}

function initForum () {
    var create_forum_pane_el = document.getElementById("create-forum-pane");
    var post_list_el = document.getElementById("post-list-pane");
    var forum_name_el = document.getElementById("forum-name");
    var forum_post_el = document.getElementById("forum-post");
    
    document.getElementById("create-forum-btn").addEventListener("click", function() {
        create_forum_pane_el.style.display = "block";
    });
    
    document.getElementById("save-forum-btn").addEventListener("click", function() {
        var d = new Date();
        var now = d.toLocaleString();
        var post_el = createPost (forum_name_el.value, forum_post_el.value, "AL Team", "icon/al_logo.png", now, 1);
        document.getElementById("post-list").appendChild(post_el);
        document.getElementById("post-list").appendChild(document.createTextNode("ยังไม่มีคำตอบ"));
        post_list_el.style.display = "block";
        create_forum_pane_el.style.display = "none";
    });
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImage", function() { return addImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserBox", function() { return createUserBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gotoProfile", function() { return gotoProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProfile", function() { return initProfile; });
/* harmony import */ var _forum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _setting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



function addImage(url) {
    var img_el = document.createElement("img");
    img_el.src = url;
    img_el.classList.add("w3-margin-bottom");
    img_el.classList.add("w3-border");
    document.getElementById("work-pane").appendChild(img_el);
}

function addStory(title, description) {
    var story_el = document.createElement("div");
    var title_el = document.createElement("h5");
    var description_el = document.createElement("p");
    story_el.classList.add("w3-margin-bottom");
    story_el.classList.add("w3-border");
    title_el.innerHTML =title;
    description_el.innerHTML = description;
    story_el.appendChild(title_el);
    story_el.appendChild(description_el);
    document.getElementById("work-pane").appendChild(story_el);
}

function createUserBox(username, icon) {
    var user_el = document.createElement("div");
    var container_el = document.createElement("div");
    var icon_el = document.createElement("img");
    var text_container_el = document.createElement("div");
    var name_el = document.createElement("p");
    
    user_el.classList.add("w3-border");
    user_el.classList.add("w3-margin-bottom");
    user_el.classList.add("w3-row");
    container_el.classList.add("w3-display-container");
    container_el.classList.add("w3-col");
    container_el.classList.add("s3");
    container_el.style.height = "100px";
    text_container_el.classList.add("w3-col");
    text_container_el.classList.add("s9");
    icon_el.classList.add("w3-display-middle");
    icon_el.classList.add("icon");
    
    icon_el.src = icon;
    name_el.appendChild(document.createTextNode(username));
    
    container_el.appendChild(icon_el);
    text_container_el.appendChild(name_el);
    user_el.appendChild(container_el);
    user_el.appendChild(text_container_el);
    return user_el;
}

function gotoProfile(userId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "ajax_info.txt", true);
    xhttp.send();
}

function initProfile() {
    var following_pane_el = document.getElementById("following-pane");
    var followers_pane_el = document.getElementById("followers-pane");
    var posts_pane_el = document.getElementById("posts-pane");
    var image_pane_el = document.getElementById("image-pane");
    
    var following_content_el = document.getElementById("following-content");
    var followers_content_el = document.getElementById("followers-content");
    var posts_content_el = document.getElementById("posts-content");
    
    var a = 10;
    
    for (var i = 0; i < a; i++) {
            following_content_el.appendChild(createUserBox(1));
            followers_content_el.appendChild(createUserBox(1));
            posts_content_el.appendChild(Object(_forum_js__WEBPACK_IMPORTED_MODULE_0__["createPost"]) ("test", "e ggw33vw3 gwvgw3vwv3", "jareg wrg", "icon/user.png", "15.00PM", 1234));
    }
    
    document.getElementById("image-btn").addEventListener("click", function () {
        image_pane_el.style.display = "block";
    });
    
    document.getElementById("image-confirm-btn").addEventListener("click", function () {
        Object(_setting_js__WEBPACK_IMPORTED_MODULE_1__["uploadImage"])("profile-pick", function() {
            console.log("pass");
        });
    });
    
    document.getElementById("following-btn").addEventListener("click", function () {
        following_pane_el.style.display = "block";
    });
    
    document.getElementById("followers-btn").addEventListener("click", function () {
        followers_pane_el.style.display = "block";
    });
    
    document.getElementById("posts-btn").addEventListener("click", function () {
        posts_pane_el.style.display = "block";
    });
    
    document.getElementById("log-out-btn").addEventListener("click", function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == "loggedOut") {
                    location.reload(); 
                }
            }
        };
        xhttp.open("POST", "logout", true);
        xhttp.send();
    });
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTo", function() { return postTo; });
function postTo(to, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    xhttp.open("POST", to, true);
    xhttp.send();
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initManual", function() { return initManual; });
function initManual() {
    var category_el = document.getElementById("category-select");
    var topic_el = document.getElementById("topic-select");
    var choice_els = topic_el.children;
    var content_els = document.getElementsByClassName("manual-content");
    
    category_el.options.selectedIndex = 0;
    topic_el.options.selectedIndex = 0;
    
    for (var i = 0; i < topic_el.length; i++) {
        topic_el[i].style.display = "none";
    }
    
    for (var i = 0; i < content_els.length; i++) {
        content_els[i].style.display = "none";
    }
    
    category_el.addEventListener("change", function () {
        for (var i = 0; i < choice_els.length; i++) {
            var this_el = choice_els[i];
            if (this_el.classList.contains(this.value) || this_el.classList.contains("base")) {
                this_el.style.display = "block";
            } else {
                this_el.style.display = "none";
            }
            topic_el.options.selectedIndex = 0;
        }
    });
    
    topic_el.addEventListener("change", function () {
        for (var i = 0; i < content_els.length; i++) {
            var this_el = content_els[i];
            if (this_el.id == this.value) {
                this_el.style.display = "block";
            } else {
                this_el.style.display = "none";
            }
        }
    });
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWrite", function() { return initWrite; });
/* harmony import */ var _quest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _profile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



var add_message_list_el = document.getElementById("add-message-list");
var add_message_tool_el = document.getElementById("add-message-tool");
var create_character_pane_el = document.getElementById("create-character-pane");
var edit_character_pane_el = document.getElementById("edit-character-pane");
var edit_message_pane_el = document.getElementById("edit-message-pane");
var edit_condition_pane_el = document.getElementById("edit-condition-pane");

var character_icon_el = document.getElementById("character-select");
var edit_message_text_el = document.getElementById("edit-message-text");
var character_name_el = document.getElementById("character-name");

var select_icon = "";
var select_character = {};
var character_list = [];
var story_line = [];
var current_icon = {};
var current_box = {};

function getImageList(userId, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var image_list = JSON.parse(xhttp.responseText);
            callback(image_list);
        }
    };
    xhttp.open("POST", "get_image", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("storyId=" + userId);
}

function displayImage(el_id) {
    var image_select_el = document.getElementById(el_id);
    
    getImageList(11, function (image_list) {
        for (var i = 0; i < image_list.length; i++) {
            var img_container_el = document.createElement("div");
            var img_el = document.createElement("img");
            
            img_container_el.classList.add("w3-col");
            img_container_el.classList.add("s6");
            img_container_el.classList.add("image-choice");
            img_el.classList.add("w3-border-blue");
            img_el.src = image_list[i].url;
            
            img_el.addEventListener("click", function () {
                select_icon = this.src;
                for (var i = 0; i < image_select_el.children.length; i++) {
                    image_select_el.children[i].firstChild.classList.remove("w3-border");
                }
                this.classList.add("w3-border");
            });
            
            img_container_el.appendChild(img_el)
            image_select_el.appendChild(img_container_el);
        }
        
    });
}

function addCharacter(icon_url) {
    var character_list_el = document.getElementById("character-list");
    var container_el = document.createElement("div");
    var icon_el = document.createElement("img");
    container_el.classList.add("w3-display-container");
    container_el.classList.add("character-container");
    icon_el.classList.add("icon");
    icon_el.classList.add("w3-circle");
    icon_el.classList.add("w3-display-middle");
    icon_el.src = icon_url;
    
    container_el.appendChild(icon_el);
    character_list_el.appendChild(container_el);
}

function createSelectMap() {
    var map = L.map("map-select").setView([18.7883, 98.9855], 13);
    var marker = L.marker([18.7883, 98.9855]);
    marker.addTo(map);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"}).addTo(map);
    map.on("click", function(e) {
        marker.setLatLng(e.latlng);
    });
    return [map, marker];
}

function initCreateCharacter() {
    displayImage("character-icon-select");
    
    document.getElementById("add-character").addEventListener("click", function() {
        create_character_pane_el.style.display = "block";
    });
    
    document.getElementById("save-character-btn").addEventListener("click", function() {
        if (select_icon != "") {
            var character_el = Object(_profile_js__WEBPACK_IMPORTED_MODULE_1__["createUserBox"])(character_name_el.value, select_icon);
            addCharacter(select_icon);
            character_el.name = character_name_el.value;
            character_el.select_icon = select_icon;
            character_name_el.value = "";
            character_el.addEventListener("click", function() {
                select_character.name = this.name;
                select_character.icon = this.select_icon;
                for (var i = 0; i < character_icon_el.children.length; i++) {
                    character_icon_el.children[i].classList.remove("w3-border-blue");
                }
                character_el.classList.add("w3-border-blue")
            });
            character_icon_el.appendChild(character_el);
        }
        create_character_pane_el.style.display = "none";
    });
}

function createTools() {
    var delete_el = document.createElement("span");
    delete_el.classList.add("fa");
    delete_el.classList.add("fa-trash");
    delete_el.classList.add("edit-tool-icon");
    
    var switch_el = document.createElement("span");
    switch_el.classList.add("fa");
    switch_el.classList.add("fa-exchange-alt");
    switch_el.classList.add("edit-tool-icon");
    
    var condition_el = document.createElement("span");
    condition_el.classList.add("fa");
    condition_el.classList.add("fa-tasks");
    condition_el.classList.add("edit-tool-icon");
    
    condition_el.addEventListener("click", function() {
        edit_condition_pane_el.style.display = "block";
    });
        
    return [delete_el, switch_el, condition_el];
}

function initCreateChat() {
    document.getElementById("add-chat-btn").addEventListener("click", function() {
        var [delete_el, switch_el, condition_el] = createTools();
        
        var [_, post_el, user_el, content_el] = Object(_quest_js__WEBPACK_IMPORTED_MODULE_0__["createChat"])("", "กดเพื่อเปลี่ยนผู้พูด", "left", "กดเพื่อเปลี่ยนข้อความ", "icon/user.png");
        user_el.addEventListener("click", function() {
            current_icon = user_el;
            edit_character_pane_el.style.display = "block";
        });
        
        content_el.addEventListener("click", function() {
            current_box = content_el;
            edit_message_pane_el.style.display = "block";
        });
        
        delete_el.addEventListener("click", function() {
            add_message_list_el.removeChild(post_el);
        });
        
        switch_el.addEventListener("click", function() {
            if (post_el.classList.contains("left")) {
                post_el.classList.remove("left");
                post_el.classList.add("right");
            } else {
                post_el.classList.remove("right");
                post_el.classList.add("left");
            }
        });
        
        post_el.appendChild(delete_el);
        post_el.appendChild(switch_el);
        post_el.appendChild(condition_el);
        add_message_list_el.insertBefore(post_el, add_message_tool_el);
    });
}

function initCreateInfo() {
    document.getElementById("add-info-btn").addEventListener("click", function() {
        var [delete_el, _, condition_el] = createTools();
        
        var [_, info_el, content_el] = Object(_quest_js__WEBPACK_IMPORTED_MODULE_0__["createInfo"])("กดเพื่อเปลี่ยนข้อความ");
        content_el.addEventListener("click", function() {
            current_box = content_el;
            edit_message_pane_el.style.display = "block";
        });
        
        content_el.addEventListener("click", function() {
            current_box = content_el;
            edit_message_pane_el.style.display = "block";
        });
        
        delete_el.addEventListener("click", function() {
            add_message_list_el.removeChild(info_el);
        });
        
        info_el.appendChild(delete_el);
        info_el.appendChild(condition_el);
        add_message_list_el.insertBefore(info_el, add_message_tool_el);
    });
}

function initWrite() {
    var [map, marker] = createSelectMap();
    
    document.getElementById("write-btn").addEventListener("click", function () {
        document.getElementById("create-story-pane").style.display = "block";
        map.invalidateSize();
    });
    
    document.getElementById("edit-story-btn").addEventListener("click", function () {
        document.getElementById("write-pane").style.display = "block";
    });
    
    document.getElementById("edit-character-btn").addEventListener("click", function() {
        if (select_character != {}) {
            current_icon.firstChild.src = select_character.icon;
            current_icon.lastChild.innerHTML = select_character.name;
            edit_character_pane_el.style.display = "none";
        }
    });
    
    document.getElementById("edit-message-btn").addEventListener("click", function() {
        current_box.innerHTML = edit_message_text_el.value;
        edit_message_text_el.value = "";
        edit_message_pane_el.style.display = "none";
    });
    
    document.getElementById("edit-condition-btn").addEventListener("click", function() {
        //current_box.innerHTML = edit_message_text_el.value;
        edit_condition_pane_el.style.display = "none";
    });
    
    initCreateCharacter();
    initCreateChat();
    initCreateInfo();
}


/***/ })
/******/ ]);
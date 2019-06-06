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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(array) {\n        this.htmlElements = array;\n    } \n}\n\nDOMNodeCollection.prototype.html = function(str=null) {\n    if (str !== null) {\n        this.htmlElements.forEach(el => {el.innerHTML = str;});\n    } else {\n        return this.htmlElements[0].innerHTML;\n    }\n};\n\nDOMNodeCollection.prototype.empty = function() {\n    this.htmlElements.forEach(el => { el.innerHTML = \"\"; });\n};\n\nDOMNodeCollection.prototype.append = function(arg) {\n    this.htmlElements.forEach(el => { \n        let first = el.innerHTML;\n        el.innerHTML = first + arg;\n    });\n};\n\nDOMNodeCollection.prototype.attr = function() {\n    this.htmlElements.forEach(el => {\n        \n    });\n}\n\nDOMNodeCollection.prototype.addBefore = function(newEl, arg) {\n    this.htmlElements.forEach(el => {\n        const newNode = document.createElement(newEl);\n        newNode.innerHTML = arg;\n        el.before(newNode);\n    });\n}\n\nDOMNodeCollection.prototype.addAfter = function(newEl, arg) {\n    this.htmlElements.forEach(el => {\n        const newNode = document.createElement(newEl);\n        newNode.innerHTML = arg;\n        el.after(newNode);\n    });\n}\n\nDOMNodeCollection.prototype.bkg = function(color) {\n    this.htmlElements.forEach(el => {\n        el.style.backgroundColor = color;\n    });\n}\n\nDOMNodeCollection.prototype.border = function(arg) {\n    this.htmlElements.forEach(el => {\n        el.style.border = arg;\n    });\n}\n\nDOMNodeCollection.prototype.shrink = function() {\n    this.htmlElements.forEach(el => {\n        let currentWidth = el.clientWidth;\n        let acc = 1.0;\n        setInterval(() => {\n            if(currentWidth > 100) {\n                currentWidth -= acc;\n                acc += 0.1;\n                el.style.width = currentWidth + \"px\";\n            } else {\n                clearInterval();\n            }\n        }, 10);\n    });\n}\n\nDOMNodeCollection.prototype.grow = function() {\n    this.htmlElements.forEach(el => {\n        let currentWidth = el.clientWidth;\n        let acc = 1.0;\n        setInterval(() => {\n            if(currentWidth < window.innerWidth - 44) {\n                currentWidth += acc;\n                acc += 0.1;\n                el.style.width = currentWidth + \"px\";\n            } else {\n                clearInterval();\n                // el.style.width = \"100%\"\n            }\n        }, 10);\n    });\n}\n\nmodule.exports = {\n    DOMNodeCollection\n};\n\n// export default DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\nwindow.dist = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"dist\"];\n\nwindow.$ = function (arg) {\n     \n    let list = document.querySelectorAll(arg);\n\n    const arrList = [];\n    for (let i of list) {\n        arrList.push(i);\n    }\n    \n    return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMNodeCollection\"](arrList);\n};\n\n// function testing(){\n//     console.log(\"throttled\");\n// }\n\n// window.onresize = function(){\n//     throttle(testing, window);\n// };\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: dist, throttle, speed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dist\", function() { return dist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"speed\", function() { return speed; });\nconst dist = (p1, p2) => {\n    let dx, dy;\n    if (p1 instanceof Array) {\n        dx = p1[0] - p2[0];\n        dy = p1[1] - p2[1];\n    } else {\n        dx = p1.x - p2.x;\n        dy = p1.y - p2.y;\n    }\n    return Math.sqrt( dx*dx + dy*dy );\n};\n\n// https://humanwhocodes.com/blog/2007/11/30/the-throttle-function/\nconst throttle = (method, scope) => {\n    clearTimeout(method._tId);\n    method._tId = setTimeout(function(){\n        method.call(scope);\n    }, 2000);\n};\n\nconst speed = (method, arg, seconds=true) => {\n    let t1 = performance.now();\n    let result = method(arg);\n    let t2 = performance.now();\n    \n    if(seconds){\n        let seconds = (t2 - t1) / 1000;\n        return {seconds: seconds.toFixed(2), result: result}\n    } else {\n        let milli = t2 - t1;\n        return {milliseconds: milli.toFixed(4), result: result}\n    }\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
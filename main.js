/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/alter-header.js":
/*!****************************************!*\
  !*** ./src/js/modules/alter-header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAlterHeader)\n/* harmony export */ });\nfunction initAlterHeader() {\r\n  const cabecalho = document.querySelector('[data-scroll]');\r\n\r\n  function toggleHeader() {\r\n    const distanciaScroll = window.pageYOffset > 60;\r\n    if (distanciaScroll) {\r\n      if (!cabecalho.classList.contains('scroll')) {\r\n        cabecalho.classList.add('scroll');\r\n      }\r\n    } else {\r\n      cabecalho.classList.remove('scroll');\r\n    }\r\n  }\r\n  \r\n  if (cabecalho) {\r\n    toggleHeader()\r\n    window.addEventListener('scroll', toggleHeader);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/alter-header.js?");

/***/ }),

/***/ "./src/js/modules/scroll-suave.js":
/*!****************************************!*\
  !*** ./src/js/modules/scroll-suave.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {}\r\n\r\nconst linksInternos = document.querySelectorAll('a[href^=\"#\"]');\r\n\r\nfunction handleClick(event) {\r\n  event.preventDefault();\r\n  const href = this.getAttribute('href');\r\n  const session = document.querySelector(href);\r\n\r\n  const topElement = session.getBoundingClientRect().top - 86.05;\r\n  window.scrollBy({\r\n    top: topElement,\r\n    behavior: 'smooth',\r\n  });\r\n  linksInternos.forEach((link) => link.classList.remove('ativo'));\r\n  this.classList.add('ativo');\r\n}\r\n\r\nif (linksInternos) {\r\n  linksInternos.forEach((link) => link.addEventListener('click', handleClick));\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/scroll-suave.js?");

/***/ }),

/***/ "./src/js/modules/selection-plano.js":
/*!*******************************************!*\
  !*** ./src/js/modules/selection-plano.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSelectionPlano)\n/* harmony export */ });\nfunction initSelectionPlano() {\r\n  \r\n}\r\n\r\nconst total = document.querySelector('.total');\r\nconst plano = document.querySelector('#plano');\r\n\r\nfunction selectPrice() {\r\n  \r\n  const elementPrice = document.querySelector(`[value=\"${this.value}\"]`)\r\n  const price = elementPrice.getAttribute('data-price');\r\n  total.innerText = `R$${price}`;\r\n  \r\n}\r\nplano.addEventListener('click', selectPrice);\n\n//# sourceURL=webpack://web/./src/js/modules/selection-plano.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./src/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_alter_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/alter-header.js */ \"./src/js/modules/alter-header.js\");\n/* harmony import */ var _modules_selection_plano_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/selection-plano.js */ \"./src/js/modules/selection-plano.js\");\n\r\n\r\n\r\n\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_alter_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_selection_plano_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://web/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;
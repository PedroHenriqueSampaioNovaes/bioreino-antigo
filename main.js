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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAlterHeader)\n/* harmony export */ });\nfunction initAlterHeader() {\r\n  const cabecalho = document.querySelector('[data-scroll]');\r\n\r\n  function toggleHeader() {\r\n    const distanciaScroll = window.pageYOffset > 20;\r\n    if (distanciaScroll) {\r\n      if (!cabecalho.classList.contains('scroll')) {\r\n        cabecalho.classList.add('scroll');\r\n      }\r\n    } else {\r\n      cabecalho.classList.remove('scroll');\r\n    }\r\n  }\r\n  \r\n  if (cabecalho) {\r\n    toggleHeader()\r\n    window.addEventListener('scroll', toggleHeader);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/alter-header.js?");

/***/ }),

/***/ "./src/js/modules/close-popup.js":
/*!***************************************!*\
  !*** ./src/js/modules/close-popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initClosePopup)\n/* harmony export */ });\nfunction initClosePopup() {\r\n  const buttonClose = document.querySelector('[data-popup=\"fechar\"]');\r\n\r\n  function closePopup() {\r\n    this.parentElement.remove();\r\n  }\r\n  \r\n  if (buttonClose) buttonClose.addEventListener('click', closePopup);\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/close-popup.js?");

/***/ }),

/***/ "./src/js/modules/dropdown-menu.js":
/*!*****************************************!*\
  !*** ./src/js/modules/dropdown-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\nfunction initDropdownMenu() {\r\n  const navegacaoUsuario = document.querySelector('[data-dropdown=\"nav\"]');\r\n  const menuDropdown = document.querySelector('[data-dropdown=\"menu\"]');\r\n  const events = ['click', 'touch'];\r\n  \r\n  function closeMenu(element, outside) {\r\n    if (!menuDropdown.contains(element)) {\r\n      menuDropdown.classList.remove('ativo');\r\n      navegacaoUsuario.removeAttribute(outside);\r\n    }\r\n  }\r\n  \r\n  function openMenu(event) {\r\n    menuDropdown.classList.add('ativo');\r\n    const outside = 'data-outside';\r\n  \r\n    if (navegacaoUsuario.hasAttribute(outside)) {\r\n      closeMenu(event.target, outside);\r\n    } else {\r\n      navegacaoUsuario.setAttribute(outside, '');\r\n    }\r\n  }\r\n\r\n  if (menuDropdown && navegacaoUsuario) {\r\n    events.forEach((event) => navegacaoUsuario.addEventListener(event, openMenu));\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./src/js/modules/scroll-suave.js":
/*!****************************************!*\
  !*** ./src/js/modules/scroll-suave.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll('a[href^=\"#\"]');\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    const href = this.getAttribute('href');\r\n    const session = document.querySelector(href);\r\n\r\n    const topElement = session.getBoundingClientRect().top - 86.05;\r\n    window.scrollBy({\r\n      top: topElement,\r\n      behavior: 'smooth',\r\n    });\r\n    linksInternos.forEach((link) => link.classList.remove('ativo'));\r\n    this.classList.add('ativo');\r\n  }\r\n\r\n  if (linksInternos) {\r\n    linksInternos.forEach((link) =>\r\n      link.addEventListener('click', handleClick),\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/scroll-suave.js?");

/***/ }),

/***/ "./src/js/modules/selection-plano.js":
/*!*******************************************!*\
  !*** ./src/js/modules/selection-plano.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSelectionPlano)\n/* harmony export */ });\nfunction initSelectionPlano() {\r\n  const elementTotal = document.querySelector('.total');\r\n  const plano = document.querySelector('#plano');\r\n\r\n  function selectPrice() {\r\n    const elementPrice = document.querySelector(`[value=\"${this.value}\"]`);\r\n    const price = elementPrice.getAttribute('data-price');\r\n    elementTotal.innerText = `R$${price}`;\r\n  }\r\n\r\n  if (elementTotal && plano) {\r\n    plano.addEventListener('click', selectPrice);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/selection-plano.js?");

/***/ }),

/***/ "./src/js/modules/validate-cep.js":
/*!****************************************!*\
  !*** ./src/js/modules/validate-cep.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ValidateCep)\n/* harmony export */ });\nclass ValidateCep {\r\n  constructor(element) {\r\n    this.element = element;\r\n  }\r\n\r\n  clear(cep) {\r\n    return cep.replace(/\\D/g, '');\r\n  }\r\n\r\n  buildCep(cep) {\r\n    return cep.replace(/(\\d{5})(\\d{3})/g, '$1-$2');\r\n  }\r\n\r\n  format(cep) {\r\n    const cepClear = this.clear(cep);\r\n    return this.buildCep(cepClear);\r\n  }\r\n\r\n  valid(cep) {\r\n    const matchCep = cep.match(/\\d{5}[-.]?\\d{3}/g);\r\n    return matchCep && matchCep[0] === cep;\r\n  }\r\n\r\n  validateOnChange(cepElement) {\r\n    if (this.valid(cepElement.value)) {\r\n      cepElement.value = this.format(cepElement.value);\r\n      cepElement.classList.remove('erro');\r\n      cepElement.nextElementSibling.classList.remove('ativo');\r\n    } else {\r\n      cepElement.classList.add('erro');\r\n      cepElement.nextElementSibling.classList.add('ativo');\r\n    }\r\n  }\r\n\r\n  createErroSpan() {\r\n    const span = document.createElement('span');\r\n    span.innerText = 'CEP incorreto';\r\n    span.classList.add('erro_text');\r\n    this.element.parentElement.insertBefore(\r\n      span,\r\n      this.element.nextElementSibling,\r\n    );\r\n  }\r\n\r\n  addEvent() {\r\n    this.element.addEventListener('change', () => {\r\n      this.validateOnChange(this.element);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.addEvent();\r\n    this.createErroSpan();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/validate-cep.js?");

/***/ }),

/***/ "./src/js/modules/validate-cpf.js":
/*!****************************************!*\
  !*** ./src/js/modules/validate-cpf.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ValidateCpf)\n/* harmony export */ });\nclass ValidateCpf {\r\n  constructor(element) {\r\n    this.element = element;\r\n  }\r\n\r\n  clear(cpf) {\r\n    return cpf.replace(/\\D/g, '');\r\n  }\r\n\r\n  buildCpf(cpf) {\r\n    return cpf.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/g, '$1.$2.$3-$4');\r\n  }\r\n\r\n  format(cpf) {\r\n    const cpfClear = this.clear(cpf);\r\n    return this.buildCpf(cpfClear);\r\n  }\r\n\r\n  valid(cpf) {\r\n    const matchCpf = cpf.match(/(?:\\d{3}[.-]?){3}\\d{2}/g);\r\n    return matchCpf && matchCpf[0] === cpf;\r\n  }\r\n\r\n  validateOnChange(cpfElement) {\r\n    if (this.valid(cpfElement.value)) {\r\n      cpfElement.value = this.format(cpfElement.value);\r\n      cpfElement.classList.remove('erro');\r\n      cpfElement.nextElementSibling.classList.remove('ativo');\r\n    } else {\r\n      cpfElement.classList.add('erro');\r\n      cpfElement.nextElementSibling.classList.add('ativo');\r\n    }\r\n  }\r\n\r\n  createErroSpan() {\r\n    const span = document.createElement('span');\r\n    span.innerText = 'CPF incorreto';\r\n    span.classList.add('erro_text');\r\n    this.element.parentElement.insertBefore(\r\n      span,\r\n      this.element.nextElementSibling,\r\n    );\r\n  }\r\n\r\n  addEvent() {\r\n    this.element.addEventListener('change', () => {\r\n      this.validateOnChange(this.element);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.addEvent();\r\n    this.createErroSpan();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/validate-cpf.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./src/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_alter_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/alter-header.js */ \"./src/js/modules/alter-header.js\");\n/* harmony import */ var _modules_selection_plano_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/selection-plano.js */ \"./src/js/modules/selection-plano.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./src/js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_validate_cpf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate-cpf.js */ \"./src/js/modules/validate-cpf.js\");\n/* harmony import */ var _modules_validate_cep_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validate-cep.js */ \"./src/js/modules/validate-cep.js\");\n/* harmony import */ var _modules_close_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/close-popup.js */ \"./src/js/modules/close-popup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_alter_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_selection_plano_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_close_popup_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\nconst cpf = document.querySelector('#cpf');\r\nconst cep = document.querySelector('#cep');\r\nif (cpf) new _modules_validate_cpf_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](cpf).init();\r\nif (cep) new _modules_validate_cep_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](cep).init();\r\n\n\n//# sourceURL=webpack://web/./src/js/script.js?");

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
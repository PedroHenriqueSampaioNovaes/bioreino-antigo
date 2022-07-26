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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAlterHeader)\n/* harmony export */ });\nfunction initAlterHeader() {\r\n  const cabecalho = document.querySelector('[data-header]');\r\n\r\n  function toggleHeader() {\r\n    const distanciaScroll = window.pageYOffset > 20;\r\n    if (distanciaScroll) {\r\n      if (!cabecalho.classList.contains('scroll')) {\r\n        cabecalho.classList.add('scroll');\r\n      }\r\n    } else {\r\n      cabecalho.classList.remove('scroll');\r\n    }\r\n  }\r\n  \r\n  if (cabecalho) {\r\n    toggleHeader()\r\n    window.addEventListener('scroll', toggleHeader);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/alter-header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\nfunction initDropdownMenu() {\r\n  const navegacaoUsuario = document.querySelector('[data-dropdown=\"nav\"]');\r\n  const menuDropdown = document.querySelector('[data-dropdown=\"menu\"]');\r\n  const events = ['click', 'touch'];\r\n  \r\n  function closeMenu(element, outside) {\r\n    if (!menuDropdown.contains(element)) {\r\n      menuDropdown.classList.remove('ativo');\r\n      navegacaoUsuario.removeAttribute(outside);\r\n    }\r\n  }\r\n  \r\n  function openMenu(event) {\r\n    if (event.type === 'touch') event.preventDefault();\r\n    menuDropdown.classList.add('ativo');\r\n    const outside = 'data-outside';\r\n  \r\n    if (navegacaoUsuario.hasAttribute(outside)) {\r\n      closeMenu(event.target, outside);\r\n    } else {\r\n      navegacaoUsuario.setAttribute(outside, '');\r\n    }\r\n  }\r\n\r\n  if (menuDropdown && navegacaoUsuario) {\r\n    events.forEach((event) => navegacaoUsuario.addEventListener(event, openMenu));\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./src/js/modules/fetch-pais.js":
/*!**************************************!*\
  !*** ./src/js/modules/fetch-pais.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchPais)\n/* harmony export */ });\nfunction initFetchPais() {\r\n  const elementPais = document.querySelector('#pais');\r\n\r\n  fetch('https://servicodados.ibge.gov.br/api/v1/paises/')\r\n    .then((jsonPais) => jsonPais.json())\r\n    .then((paises) => {\r\n      paises.forEach(pais => {\r\n        // console.log(pais.nome.abreviado);\r\n        console.log()\r\n      });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/fetch-pais.js?");

/***/ }),

/***/ "./src/js/modules/scroll-suave.js":
/*!****************************************!*\
  !*** ./src/js/modules/scroll-suave.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(internalLink, header, listSection) {\r\n    this.internalLinks = document.querySelectorAll(internalLink);\r\n    this.header = document.querySelector(header);\r\n    this.sections = document.querySelectorAll(listSection);\r\n    this.activeClass = 'ativo';\r\n\r\n    // Functions bind\r\n    this.getScrollTopByHref = this.getScrollTopByHref.bind(this);\r\n    this.changeLinkActiveToScroll = this.changeLinkActiveToScroll.bind(this);\r\n  }\r\n\r\n  getDistance() {\r\n    this.elementDistance = [...this.sections].map((element) => {\r\n      return {\r\n        element, \r\n        top: element.offsetTop,\r\n        bottom: element.offsetTop + element.offsetHeight\r\n      };\r\n    });\r\n  }\r\n\r\n  getScrollTopByHref(event) {\r\n    event.preventDefault();\r\n    const link = event.currentTarget;\r\n    const href = link.getAttribute('href');\r\n    const sectionDistance = document.querySelector(href).offsetTop;\r\n\r\n    const topElement = sectionDistance - this.header.offsetHeight;\r\n    this.smoothScrollTo(topElement, 1000);\r\n\r\n    this.alterClassLinksToClick(link);\r\n  }\r\n\r\n  changeLinkActiveToScroll() {\r\n    this.elementDistance.forEach((d, i) => {\r\n      const scrollYPage = window.pageYOffset;\r\n      if (scrollYPage > d.top && scrollYPage < d.bottom) {\r\n        this.internalLinks[i].classList.add(this.activeClass);\r\n      } else {\r\n        this.internalLinks[i].classList.remove(this.activeClass);\r\n      }\r\n    })\r\n  }\r\n\r\n  alterClassLinksToClick(link) {\r\n    this.internalLinks.forEach((l) => l.classList.remove(this.activeClass));\r\n    link.classList.add(this.activeClass);\r\n  }\r\n\r\n  /**\r\n   * Smooth scroll animation\r\n   * @param {int} endY: destination y coordinate\r\n   * @param {int} duration: animation duration in ms\r\n   */\r\n  smoothScrollTo(endY, duration) {\r\n    const startY = window.scrollY || window.pageYOffset;\r\n    const distanceY = endY - startY;\r\n    const startTime = new Date().getTime();\r\n\r\n    duration = typeof duration !== 'undefined' ? duration : 400;\r\n\r\n    // Easing function\r\n    const easeInOutQuart = (time, from, distance) => {\r\n      if ((time /= duration / 2) < 1)\r\n        return (distance / 2) * time * time * time * time + from;\r\n      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;\r\n    };\r\n\r\n    const timer = setInterval(() => {\r\n      const time = new Date().getTime() - startTime;\r\n      const newY = easeInOutQuart(time, startY, distanceY, duration);\r\n      if (time >= duration) {\r\n        clearInterval(timer);\r\n      }\r\n      window.scroll(0, newY);\r\n    }, 1000 / 60); // 60 fps\r\n  }\r\n\r\n  addScrollEvent() {\r\n    this.internalLinks.forEach((link) =>\r\n      link.addEventListener('click', this.getScrollTopByHref),\r\n    );\r\n    window.addEventListener('scroll', this.changeLinkActiveToScroll);\r\n  }\r\n\r\n  init() {\r\n    if (this.internalLinks && this.header && this.sections.length) {\r\n      this.getDistance();\r\n      this.addScrollEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/scroll-suave.js?");

/***/ }),

/***/ "./src/js/modules/selection-plano.js":
/*!*******************************************!*\
  !*** ./src/js/modules/selection-plano.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSelectionPlano)\n/* harmony export */ });\nfunction initSelectionPlano() {\r\n  const elementTotal = document.querySelector('.total');\r\n  const plano = document.querySelector('#plano');\r\n\r\n  function selectPrice() {\r\n    const elementPrice = document.querySelector(`[value=\"${this.value}\"]`);\r\n    const price = elementPrice.getAttribute('data-price');\r\n    elementTotal.innerText = `R$${price}`;\r\n  }\r\n\r\n  if (elementTotal && plano) {\r\n    plano.addEventListener('click', selectPrice);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/selection-plano.js?");

/***/ }),

/***/ "./src/js/modules/username-limited.js":
/*!********************************************!*\
  !*** ./src/js/modules/username-limited.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initUserNameLimited)\n/* harmony export */ });\nfunction initUserNameLimited() {\r\n  const name = document.querySelector('[data-usuario=\"name\"]');\r\n\r\n  if (name) {\r\n    const shortName = name.innerText.slice(0, 14).trim();\r\n    \r\n    if (name.innerText.length >= 15) name.innerText = `${shortName}...`;\r\n    else name.innerText = shortName;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/username-limited.js?");

/***/ }),

/***/ "./src/js/modules/validate-cep.js":
/*!****************************************!*\
  !*** ./src/js/modules/validate-cep.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ValidateCep)\n/* harmony export */ });\nclass ValidateCep {\r\n  constructor(element) {\r\n    this.element = document.querySelector(element);\r\n  }\r\n\r\n  clear(cep) {\r\n    return cep.replace(/\\D/g, '');\r\n  }\r\n\r\n  buildCep(cep) {\r\n    return cep.replace(/(\\d{5})(\\d{3})/g, '$1-$2');\r\n  }\r\n\r\n  format(cep) {\r\n    const cepClear = this.clear(cep);\r\n    return this.buildCep(cepClear);\r\n  }\r\n\r\n  valid(cep) {\r\n    const matchCep = cep.match(/\\d{5}[-.]?\\d{3}/g);\r\n    return matchCep && matchCep[0] === cep;\r\n  }\r\n\r\n  validateOnChange(cepElement) {\r\n    if (this.valid(cepElement.value)) {\r\n      cepElement.value = this.format(cepElement.value);\r\n      cepElement.classList.remove('erro');\r\n      cepElement.nextElementSibling.classList.remove('ativo');\r\n    } else {\r\n      cepElement.classList.add('erro');\r\n      cepElement.nextElementSibling.classList.add('ativo');\r\n    }\r\n  }\r\n\r\n  createErroSpan() {\r\n    const span = document.createElement('span');\r\n    span.innerText = 'CEP incorreto';\r\n    span.classList.add('erro_text');\r\n    this.element.parentElement.insertBefore(\r\n      span,\r\n      this.element.nextElementSibling,\r\n    );\r\n  }\r\n\r\n  addEvent() {\r\n    this.element.addEventListener('change', () => {\r\n      this.validateOnChange(this.element);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.element) {\r\n      this.addEvent();\r\n      this.createErroSpan();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/validate-cep.js?");

/***/ }),

/***/ "./src/js/modules/validate-cpf.js":
/*!****************************************!*\
  !*** ./src/js/modules/validate-cpf.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ValidateCpf)\n/* harmony export */ });\nclass ValidateCpf {\r\n  constructor(element) {\r\n    this.element = document.querySelector(element);\r\n  }\r\n\r\n  clear(cpf) {\r\n    return cpf.replace(/\\D/g, '');\r\n  }\r\n\r\n  buildCpf(cpf) {\r\n    return cpf.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/g, '$1.$2.$3-$4');\r\n  }\r\n\r\n  format(cpf) {\r\n    const cpfClear = this.clear(cpf);\r\n    return this.buildCpf(cpfClear);\r\n  }\r\n\r\n  valid(cpf) {\r\n    const matchCpf = cpf.match(/(?:\\d{3}[.-]?){3}\\d{2}/g);\r\n    return matchCpf && matchCpf[0] === cpf;\r\n  }\r\n\r\n  validateOnChange(cpfElement) {\r\n    if (this.valid(cpfElement.value)) {\r\n      cpfElement.value = this.format(cpfElement.value);\r\n      cpfElement.classList.remove('erro');\r\n      cpfElement.nextElementSibling.classList.remove('ativo');\r\n    } else {\r\n      cpfElement.classList.add('erro');\r\n      cpfElement.nextElementSibling.classList.add('ativo');\r\n    }\r\n  }\r\n\r\n  createErroSpan() {\r\n    const span = document.createElement('span');\r\n    span.innerText = 'CPF incorreto';\r\n    span.classList.add('erro_text');\r\n    this.element.parentElement.insertBefore(\r\n      span,\r\n      this.element.nextElementSibling,\r\n    );\r\n  }\r\n\r\n  addEvent() {\r\n    this.element.addEventListener('change', () => {\r\n      this.validateOnChange(this.element);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.element) {\r\n      this.addEvent();\r\n      this.createErroSpan();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/validate-cpf.js?");

/***/ }),

/***/ "./src/js/modules/validate-validade.js":
/*!*********************************************!*\
  !*** ./src/js/modules/validate-validade.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ValidateValidade)\n/* harmony export */ });\nclass ValidateValidade {\r\n  constructor(element) {\r\n    this.element = document.querySelector(element);\r\n  }\r\n\r\n  clear(validade) {\r\n    return validade.replace(/\\D/g, '');\r\n  }\r\n\r\n  buildValidade(validade) {\r\n    return validade.replace(/(\\d{2})(\\d{4})/g, '$1/$2');\r\n  }\r\n\r\n  format(validade) {\r\n    const validadeClear = this.clear(validade);\r\n    return this.buildValidade(validadeClear);\r\n  }\r\n\r\n  valid(validade) {\r\n    const matchValidade = validade.match(/\\d{2}[-/]?\\d{4}/g);\r\n    return matchValidade && matchValidade[0] === validade;\r\n  }\r\n\r\n  validateOnChange(validadeElement) {\r\n    if (this.valid(validadeElement.value)) {\r\n      validadeElement.value = this.format(validadeElement.value);\r\n      validadeElement.classList.remove('erro');\r\n      validadeElement.nextElementSibling.classList.remove('ativo');\r\n    } else {\r\n      validadeElement.classList.add('erro');\r\n      validadeElement.nextElementSibling.classList.add('ativo');\r\n    }\r\n  }\r\n\r\n  createErroSpan() {\r\n    const span = document.createElement('span');\r\n    span.innerText = 'Validade incorreta';\r\n    span.classList.add('erro_text');\r\n    this.element.parentElement.insertBefore(\r\n      span,\r\n      this.element.nextElementSibling,\r\n    );\r\n  }\r\n\r\n  addEvent() {\r\n    this.element.addEventListener('change', () => {\r\n      this.validateOnChange(this.element);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.element) {\r\n      this.addEvent();\r\n      this.createErroSpan();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/js/modules/validate-validade.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./src/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_alter_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/alter-header.js */ \"./src/js/modules/alter-header.js\");\n/* harmony import */ var _modules_selection_plano_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/selection-plano.js */ \"./src/js/modules/selection-plano.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./src/js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_validate_cpf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate-cpf.js */ \"./src/js/modules/validate-cpf.js\");\n/* harmony import */ var _modules_validate_cep_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validate-cep.js */ \"./src/js/modules/validate-cep.js\");\n/* harmony import */ var _modules_close_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/close-popup.js */ \"./src/js/modules/close-popup.js\");\n/* harmony import */ var _modules_username_limited_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/username-limited.js */ \"./src/js/modules/username-limited.js\");\n/* harmony import */ var _modules_validate_validade_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/validate-validade.js */ \"./src/js/modules/validate-validade.js\");\n/* harmony import */ var _modules_fetch_pais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-pais.js */ \"./src/js/modules/fetch-pais.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('a[href^=\"#\"]', '.cabecalho', '[data-scroll]');\r\nscrollSuave.init();\r\n\r\n(0,_modules_alter_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_selection_plano_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_close_popup_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\r\nconst validateCpf = new _modules_validate_cpf_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('#cpf');\r\nvalidateCpf.init();\r\n\r\nconst cep = new _modules_validate_cep_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('#cep');\r\ncep.init();\r\n\r\nconst validade = new _modules_validate_validade_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('#validade');\r\nvalidade.init();\r\n\r\n(0,_modules_username_limited_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_fetch_pais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\n\n//# sourceURL=webpack://web/./src/js/script.js?");

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
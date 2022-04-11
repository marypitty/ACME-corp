/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("//SWIPER\nvar swiper = new Swiper(\".registration-slider\", {\n  spaceBetween: 30,\n  centeredSlides: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true\n  },\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  }\n}); //GSAP ANIMATIONS\n\nvar bomb = TweenMax.from(\".radio-img, .reserv-button\", {\n  y: 400,\n  opacity: 0,\n  duration: 2,\n  ease: 'elastic.inOut'\n});\n/* BURGER BUTTON */\n\nvar drawerBtnElement = document.getElementById('drawer-btn');\nvar mobileDrawerElement = document.getElementById('mobile-drawer');\n\nfunction toggleDrawer() {\n  mobileDrawerElement.classList.toggle('open');\n}\n\ndrawerBtnElement.addEventListener('click', toggleDrawer);\n/* COUNTDOWN */\n\nvar expireDate = new Date(\"Apr 18, 2022 18:00:00\").getTime(); // Intervallo per aggiornare countdown ogni secondo\n\nvar x = setInterval(function () {\n  // Data e ora odierni\n  var now = new Date().getTime(); // DIfferenza tra la data odiena e la data del contdown \n\n  var distance = expireDate - now; // Calcolo giorni, ore, minuti e secondi\n\n  var days = Math.floor(distance / (1000 * 60 * 60 * 24));\n  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n  var seconds = Math.floor(distance % (1000 * 60) / 1000); // Inserisco risultato nell'HTML\n\n  document.getElementById(\"countdown\").innerHTML = days + \"d \" + hours + \"h \" + minutes + \"m \" + seconds + \"s \"; // Se il countdown scade:\n\n  if (distance < 0) {\n    clearInterval(x);\n    document.getElementById(\"demo\").innerHTML = \"OFFERTA SCADUTA!\";\n  }\n}, 1000);\n\n//# sourceURL=webpack://acme-corp-landing-pages/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;
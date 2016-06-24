/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var bottomNavBar = document.getElementById('bottomNavBar');

	var listItems = bottomNavBar.children;

	var listItemClickHandler = function listItemClickHandler(event) {};

	for (var i = 0; i < listItems.length; i++) {

	    (function (listItem) {
	        listItem.addEventListener('click', function () {

	            var dropdown = listItem.children[1];

	            if (!dropdown) {
	                return;
	            }

	            var dropdownStyle = dropdown.style;

	            if (dropdownStyle.visibility === 'hidden' || !dropdownStyle.visibility) {
	                dropdownStyle.visibility = 'visible';
	                listItem.classList.toggle('list-item-hovered');

	                var windowClickHandler = function windowClickHandler() {
	                    dropdownStyle.visibility = 'hidden';
	                    listItem.classList.toggle('list-item-hovered');

	                    window.removeEventListener('click', windowClickHandler, true);
	                };

	                window.addEventListener('click', windowClickHandler, true);
	            }
	        });
	    })(listItems[i]);
	}

/***/ }
/******/ ]);
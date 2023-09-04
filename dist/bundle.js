/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n//import { postDataChunck } from \"./firebaseConfig\";\n\nconst intervalMillisec = 1000;\nconst postDataSize = 10;\nconst collectionName = \"test\";\n;\nlet sensorValues = {\n    \"aclX\": 0.00,\n    \"aclY\": 0.00,\n    \"aclZ\": 0.00,\n    \"rotA\": 0.00,\n    \"rotB\": 0.00,\n    \"rotG\": 0.00\n};\nif ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIsStorageAvailable)()) {\n    localStorage.clear();\n    setInterval(() => __awaiter(void 0, void 0, void 0, function* () {\n        const currentTimestamp = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentTimestampAsString)();\n        localStorage.setItem(currentTimestamp, JSON.stringify(sensorValues));\n        if (localStorage.length >= postDataSize) {\n            let postData = {};\n            Object.entries(Object.assign({}, localStorage)).forEach(([key, value]) => postData[key] = JSON.parse(value));\n            //postDataChunck(collectionName, postData);\n            localStorage.clear();\n        }\n    }), intervalMillisec);\n}\nelse {\n    window.alert('Local storage is not available in this browser');\n}\nfunction getRequestPermission() {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (typeof DeviceMotionEvent.requestPermission !== 'function')\n            return 'denied';\n        return yield DeviceMotionEvent.requestPermission();\n    });\n}\nconst aclX = document.getElementById(\"acl-x\");\nconst btn = document.getElementById('btn');\nif (btn != null) {\n    btn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {\n        const permission = yield getRequestPermission();\n        if (permission !== 'granted')\n            return;\n        window.addEventListener('devicemotion', (e) => __awaiter(void 0, void 0, void 0, function* () {\n            if ((e.acceleration == null) || e.rotationRate == null)\n                return;\n            sensorValues = {\n                \"aclX\": e.acceleration.x,\n                \"aclY\": e.acceleration.y,\n                \"aclZ\": e.acceleration.z,\n                \"rotA\": e.rotationRate.alpha,\n                \"rotB\": e.rotationRate.beta,\n                \"rotG\": e.rotationRate.gamma\n            };\n            if (aclX == null)\n                return;\n            aclX.textContent = sensorValues[\"aclX\"].toString();\n        }));\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsaUJBQWlCO0FBQ21EO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQXVCO0FBQzNCO0FBQ0E7QUFDQSxpQ0FBaUMsbUVBQTJCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2lwaG9uZS1zZW5zb3JzLXByb3RvdHlwZS8uL3NyYy9tYWluLnRzPzM0ZDMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vL2ltcG9ydCB7IHBvc3REYXRhQ2h1bmNrIH0gZnJvbSBcIi4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IGNoZWNrSXNTdG9yYWdlQXZhaWxhYmxlLCBnZXRDdXJyZW50VGltZXN0YW1wQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsc1wiO1xuY29uc3QgaW50ZXJ2YWxNaWxsaXNlYyA9IDEwMDA7XG5jb25zdCBwb3N0RGF0YVNpemUgPSAxMDtcbmNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJ0ZXN0XCI7XG47XG5sZXQgc2Vuc29yVmFsdWVzID0ge1xuICAgIFwiYWNsWFwiOiAwLjAwLFxuICAgIFwiYWNsWVwiOiAwLjAwLFxuICAgIFwiYWNsWlwiOiAwLjAwLFxuICAgIFwicm90QVwiOiAwLjAwLFxuICAgIFwicm90QlwiOiAwLjAwLFxuICAgIFwicm90R1wiOiAwLjAwXG59O1xuaWYgKGNoZWNrSXNTdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IGdldEN1cnJlbnRUaW1lc3RhbXBBc1N0cmluZygpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50VGltZXN0YW1wLCBKU09OLnN0cmluZ2lmeShzZW5zb3JWYWx1ZXMpKTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPj0gcG9zdERhdGFTaXplKSB7XG4gICAgICAgICAgICBsZXQgcG9zdERhdGEgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKE9iamVjdC5hc3NpZ24oe30sIGxvY2FsU3RvcmFnZSkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gcG9zdERhdGFba2V5XSA9IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIC8vcG9zdERhdGFDaHVuY2soY29sbGVjdGlvbk5hbWUsIHBvc3REYXRhKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfSksIGludGVydmFsTWlsbGlzZWMpO1xufVxuZWxzZSB7XG4gICAgd2luZG93LmFsZXJ0KCdMb2NhbCBzdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG59XG5mdW5jdGlvbiBnZXRSZXF1ZXN0UGVybWlzc2lvbigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAodHlwZW9mIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgcmV0dXJuICdkZW5pZWQnO1xuICAgICAgICByZXR1cm4geWllbGQgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgICB9KTtcbn1cbmNvbnN0IGFjbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjbC14XCIpO1xuY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xuaWYgKGJ0biAhPSBudWxsKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHBlcm1pc3Npb24gPSB5aWVsZCBnZXRSZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgICAgICBpZiAocGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKChlLmFjY2VsZXJhdGlvbiA9PSBudWxsKSB8fCBlLnJvdGF0aW9uUmF0ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbnNvclZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICBcImFjbFhcIjogZS5hY2NlbGVyYXRpb24ueCxcbiAgICAgICAgICAgICAgICBcImFjbFlcIjogZS5hY2NlbGVyYXRpb24ueSxcbiAgICAgICAgICAgICAgICBcImFjbFpcIjogZS5hY2NlbGVyYXRpb24ueixcbiAgICAgICAgICAgICAgICBcInJvdEFcIjogZS5yb3RhdGlvblJhdGUuYWxwaGEsXG4gICAgICAgICAgICAgICAgXCJyb3RCXCI6IGUucm90YXRpb25SYXRlLmJldGEsXG4gICAgICAgICAgICAgICAgXCJyb3RHXCI6IGUucm90YXRpb25SYXRlLmdhbW1hXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGFjbFggPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBhY2xYLnRleHRDb250ZW50ID0gc2Vuc29yVmFsdWVzW1wiYWNsWFwiXS50b1N0cmluZygpO1xuICAgICAgICB9KSk7XG4gICAgfSkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkIsStorageAvailable\": () => (/* binding */ checkIsStorageAvailable),\n/* harmony export */   \"getCurrentTimestampAsString\": () => (/* binding */ getCurrentTimestampAsString)\n/* harmony export */ });\nfunction checkIsStorageAvailable() {\n    try {\n        const storage = localStorage;\n        const x = '__storage_test__';\n        storage.setItem(x, x);\n        storage.removeItem(x);\n        return true;\n    }\n    catch (e) {\n        return e instanceof DOMException && (e.code === 22 ||\n            e.code === 1014 ||\n            e.name === 'QuotaExceededError' ||\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n            (Storage && Storage.length !== 0);\n    }\n}\nfunction getCurrentTimestampAsString() {\n    const currentTimeString = new Date().toLocaleString();\n    const currentMilliseconds = new Date().getMilliseconds().toString();\n    const currentTimestamp = currentTimeString + '.' + currentMilliseconds;\n    return currentTimestamp;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lwaG9uZS1zZW5zb3JzLXByb3RvdHlwZS8uL3NyYy91dGlscy50cz9lZTczIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjaGVja0lzU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIChTdG9yYWdlICYmIFN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWVzdGFtcEFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lU3RyaW5nID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgIGNvbnN0IGN1cnJlbnRNaWxsaXNlY29uZHMgPSBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IGN1cnJlbnRUaW1lU3RyaW5nICsgJy4nICsgY3VycmVudE1pbGxpc2Vjb25kcztcbiAgICByZXR1cm4gY3VycmVudFRpbWVzdGFtcDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
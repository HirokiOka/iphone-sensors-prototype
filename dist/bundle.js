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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n//import { postDataChunck } from \"./firebaseConfig\";\n\nconst intervalMillisec = 1000;\nconst postDataSize = 10;\nconst collectionName = \"test\";\n;\nlet sensorValues = {\n    \"aclX\": 0.00,\n    \"aclY\": 0.00,\n    \"aclZ\": 0.00,\n    \"rotA\": 0.00,\n    \"rotB\": 0.00,\n    \"rotG\": 0.00\n};\nif ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIsStorageAvailable)()) {\n    localStorage.clear();\n    setInterval(() => __awaiter(void 0, void 0, void 0, function* () {\n        const currentTimestamp = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentTimestampAsString)();\n        //localStorage.setItem(currentTimestamp, JSON.stringify(sensorValues));\n        if (localStorage.length >= postDataSize) {\n            let postData = {};\n            /*\n            Object.entries({ ...localStorage }).forEach(([key, value]) => postData[key] = JSON.parse(value));\n            //postDataChunck(collectionName, postData);\n            localStorage.clear();\n            */\n        }\n    }), intervalMillisec);\n}\nelse {\n    window.alert('Local storage is not available in this browser');\n}\nfunction getRequestPermission() {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (typeof DeviceMotionEvent.requestPermission !== 'function')\n            return 'denied';\n        return yield DeviceMotionEvent.requestPermission();\n    });\n}\nconst aclX = document.getElementById(\"acl-x\");\nconst aclY = document.getElementById(\"acl-y\");\nconst aclZ = document.getElementById(\"acl-z\");\nconst rotA = document.getElementById(\"alpha\");\nconst rotB = document.getElementById(\"beta\");\nconst rotG = document.getElementById(\"gamma\");\nconst sensorDomTextContent = {};\nconst btn = document.getElementById('btn');\nif (btn != null) {\n    btn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {\n        const permission = yield getRequestPermission();\n        if (permission !== 'granted')\n            return;\n        window.addEventListener('devicemotion', (e) => __awaiter(void 0, void 0, void 0, function* () {\n            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;\n            if ((e.acceleration == null) || e.rotationRate == null)\n                return;\n            sensorValues = {\n                \"aclX\": (_a = e.acceleration.x) !== null && _a !== void 0 ? _a : 0.00,\n                \"aclY\": (_b = e.acceleration.y) !== null && _b !== void 0 ? _b : 0.00,\n                \"aclZ\": (_c = e.acceleration.z) !== null && _c !== void 0 ? _c : 0.00,\n                \"rotA\": (_d = e.rotationRate.alpha) !== null && _d !== void 0 ? _d : 0.00,\n                \"rotB\": (_e = e.rotationRate.beta) !== null && _e !== void 0 ? _e : 0.00,\n                \"rotG\": (_f = e.rotationRate.gamma) !== null && _f !== void 0 ? _f : 0.00\n            };\n            aclX.textContent = (_g = sensorValues[\"aclX\"].toFixed(2).toString()) !== null && _g !== void 0 ? _g : 'empty';\n            aclY.textContent = (_h = sensorValues[\"aclY\"].toFixed(2).toString()) !== null && _h !== void 0 ? _h : 'empty';\n            aclZ.textContent = (_j = sensorValues[\"aclZ\"].toFixed(2).toString()) !== null && _j !== void 0 ? _j : 'empty';\n            rotA.textContent = (_k = sensorValues[\"rotA\"].toFixed(2).toString()) !== null && _k !== void 0 ? _k : 'empty';\n            rotB.textContent = (_l = sensorValues[\"rotB\"].toFixed(2).toString()) !== null && _l !== void 0 ? _l : 'empty';\n            rotG.textContent = (_m = sensorValues[\"rotG\"].toFixed(2).toString()) !== null && _m !== void 0 ? _m : 'empty';\n        }));\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsaUJBQWlCO0FBQ21EO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQXVCO0FBQzNCO0FBQ0E7QUFDQSxpQ0FBaUMsbUVBQTJCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pcGhvbmUtc2Vuc29ycy1wcm90b3R5cGUvLi9zcmMvbWFpbi50cz8zNGQzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy9pbXBvcnQgeyBwb3N0RGF0YUNodW5jayB9IGZyb20gXCIuL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBjaGVja0lzU3RvcmFnZUF2YWlsYWJsZSwgZ2V0Q3VycmVudFRpbWVzdGFtcEFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmNvbnN0IGludGVydmFsTWlsbGlzZWMgPSAxMDAwO1xuY29uc3QgcG9zdERhdGFTaXplID0gMTA7XG5jb25zdCBjb2xsZWN0aW9uTmFtZSA9IFwidGVzdFwiO1xuO1xubGV0IHNlbnNvclZhbHVlcyA9IHtcbiAgICBcImFjbFhcIjogMC4wMCxcbiAgICBcImFjbFlcIjogMC4wMCxcbiAgICBcImFjbFpcIjogMC4wMCxcbiAgICBcInJvdEFcIjogMC4wMCxcbiAgICBcInJvdEJcIjogMC4wMCxcbiAgICBcInJvdEdcIjogMC4wMFxufTtcbmlmIChjaGVja0lzU3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBnZXRDdXJyZW50VGltZXN0YW1wQXNTdHJpbmcoKTtcbiAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50VGltZXN0YW1wLCBKU09OLnN0cmluZ2lmeShzZW5zb3JWYWx1ZXMpKTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPj0gcG9zdERhdGFTaXplKSB7XG4gICAgICAgICAgICBsZXQgcG9zdERhdGEgPSB7fTtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IC4uLmxvY2FsU3RvcmFnZSB9KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHBvc3REYXRhW2tleV0gPSBKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICAvL3Bvc3REYXRhQ2h1bmNrKGNvbGxlY3Rpb25OYW1lLCBwb3N0RGF0YSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgICovXG4gICAgICAgIH1cbiAgICB9KSwgaW50ZXJ2YWxNaWxsaXNlYyk7XG59XG5lbHNlIHtcbiAgICB3aW5kb3cuYWxlcnQoJ0xvY2FsIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbn1cbmZ1bmN0aW9uIGdldFJlcXVlc3RQZXJtaXNzaW9uKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICByZXR1cm4gJ2RlbmllZCc7XG4gICAgICAgIHJldHVybiB5aWVsZCBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgIH0pO1xufVxuY29uc3QgYWNsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNsLXhcIik7XG5jb25zdCBhY2xZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2wteVwiKTtcbmNvbnN0IGFjbFogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjbC16XCIpO1xuY29uc3Qgcm90QSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxwaGFcIik7XG5jb25zdCByb3RCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZXRhXCIpO1xuY29uc3Qgcm90RyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtbWFcIik7XG5jb25zdCBzZW5zb3JEb21UZXh0Q29udGVudCA9IHt9O1xuY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xuaWYgKGJ0biAhPSBudWxsKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHBlcm1pc3Npb24gPSB5aWVsZCBnZXRSZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgICAgICBpZiAocGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX207XG4gICAgICAgICAgICBpZiAoKGUuYWNjZWxlcmF0aW9uID09IG51bGwpIHx8IGUucm90YXRpb25SYXRlID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2Vuc29yVmFsdWVzID0ge1xuICAgICAgICAgICAgICAgIFwiYWNsWFwiOiAoX2EgPSBlLmFjY2VsZXJhdGlvbi54KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwLjAwLFxuICAgICAgICAgICAgICAgIFwiYWNsWVwiOiAoX2IgPSBlLmFjY2VsZXJhdGlvbi55KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAwLjAwLFxuICAgICAgICAgICAgICAgIFwiYWNsWlwiOiAoX2MgPSBlLmFjY2VsZXJhdGlvbi56KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAwLjAwLFxuICAgICAgICAgICAgICAgIFwicm90QVwiOiAoX2QgPSBlLnJvdGF0aW9uUmF0ZS5hbHBoYSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMC4wMCxcbiAgICAgICAgICAgICAgICBcInJvdEJcIjogKF9lID0gZS5yb3RhdGlvblJhdGUuYmV0YSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogMC4wMCxcbiAgICAgICAgICAgICAgICBcInJvdEdcIjogKF9mID0gZS5yb3RhdGlvblJhdGUuZ2FtbWEpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IDAuMDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhY2xYLnRleHRDb250ZW50ID0gKF9nID0gc2Vuc29yVmFsdWVzW1wiYWNsWFwiXS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9nICE9PSB2b2lkIDAgPyBfZyA6ICdlbXB0eSc7XG4gICAgICAgICAgICBhY2xZLnRleHRDb250ZW50ID0gKF9oID0gc2Vuc29yVmFsdWVzW1wiYWNsWVwiXS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6ICdlbXB0eSc7XG4gICAgICAgICAgICBhY2xaLnRleHRDb250ZW50ID0gKF9qID0gc2Vuc29yVmFsdWVzW1wiYWNsWlwiXS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9qICE9PSB2b2lkIDAgPyBfaiA6ICdlbXB0eSc7XG4gICAgICAgICAgICByb3RBLnRleHRDb250ZW50ID0gKF9rID0gc2Vuc29yVmFsdWVzW1wicm90QVwiXS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9rICE9PSB2b2lkIDAgPyBfayA6ICdlbXB0eSc7XG4gICAgICAgICAgICByb3RCLnRleHRDb250ZW50ID0gKF9sID0gc2Vuc29yVmFsdWVzW1wicm90QlwiXS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9sICE9PSB2b2lkIDAgPyBfbCA6ICdlbXB0eSc7XG4gICAgICAgICAgICByb3RHLnRleHRDb250ZW50ID0gKF9tID0gc2Vuc29yVmFsdWVzW1wicm90R1wiXS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9tICE9PSB2b2lkIDAgPyBfbSA6ICdlbXB0eSc7XG4gICAgICAgIH0pKTtcbiAgICB9KSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.ts\n");

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
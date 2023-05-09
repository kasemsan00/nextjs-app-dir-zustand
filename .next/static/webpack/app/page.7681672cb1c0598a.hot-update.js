"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/stores/index.jsx":
/*!******************************!*\
  !*** ./src/stores/index.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useStore\": function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zustand */ \"(app-client)/./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var _products_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-store */ \"(app-client)/./src/stores/products-store/index.jsx\");\n/* harmony import */ var _basket_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket-store */ \"(app-client)/./src/stores/basket-store/index.jsx\");\n/* harmony import */ var _stores_useragent_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/useragent-store */ \"(app-client)/./src/stores/useragent-store/index.jsx\");\n\n\n\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_3__.create)(function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return {\n        ...(0,_products_store__WEBPACK_IMPORTED_MODULE_0__.createProductsStore)(...args),\n        ...(0,_basket_store__WEBPACK_IMPORTED_MODULE_1__.createBasketStore)(...args),\n        ...(0,_stores_useragent_store__WEBPACK_IMPORTED_MODULE_2__.createUserAgentStore)(...args),\n        hydrateStore: (data)=>{\n            const [set] = args;\n            set({\n                ...data\n            });\n        }\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0b3Jlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFc0I7QUFDSjtBQUNhO0FBRXpELE1BQU1JLFdBQVdKLCtDQUFNQSxDQUFDLFdBQWM7cUNBQVZLO1FBQUFBOztXQUFVO1FBQzNDLEdBQUdKLG9FQUFtQkEsSUFBSUksS0FBSztRQUMvQixHQUFHSCxnRUFBaUJBLElBQUlHLEtBQUs7UUFDN0IsR0FBR0YsNkVBQW9CQSxJQUFJRSxLQUFLO1FBQ2hDQyxjQUFjLENBQUNDLE9BQVM7WUFDdEIsTUFBTSxDQUFDQyxJQUFJLEdBQUdIO1lBQ2RHLElBQUk7Z0JBQUUsR0FBR0QsSUFBSTtZQUFDO1FBQ2hCO0lBQ0Y7QUFBQSxHQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZXMvaW5kZXguanN4P2I4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZHVjdHNTdG9yZSB9IGZyb20gXCIuL3Byb2R1Y3RzLXN0b3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVCYXNrZXRTdG9yZSB9IGZyb20gXCIuL2Jhc2tldC1zdG9yZVwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlckFnZW50U3RvcmUgfSBmcm9tIFwiQC9zdG9yZXMvdXNlcmFnZW50LXN0b3JlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9IGNyZWF0ZSgoLi4uYXJncykgPT4gKHtcbiAgLi4uY3JlYXRlUHJvZHVjdHNTdG9yZSguLi5hcmdzKSxcbiAgLi4uY3JlYXRlQmFza2V0U3RvcmUoLi4uYXJncyksXG4gIC4uLmNyZWF0ZVVzZXJBZ2VudFN0b3JlKC4uLmFyZ3MpLFxuICBoeWRyYXRlU3RvcmU6IChkYXRhKSA9PiB7XG4gICAgY29uc3QgW3NldF0gPSBhcmdzO1xuICAgIHNldCh7IC4uLmRhdGEgfSk7XG4gIH0sXG59KSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlIiwiY3JlYXRlUHJvZHVjdHNTdG9yZSIsImNyZWF0ZUJhc2tldFN0b3JlIiwiY3JlYXRlVXNlckFnZW50U3RvcmUiLCJ1c2VTdG9yZSIsImFyZ3MiLCJoeWRyYXRlU3RvcmUiLCJkYXRhIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/stores/index.jsx\n"));

/***/ }),

/***/ "(app-client)/./src/stores/useragent-store/index.jsx":
/*!**********************************************!*\
  !*** ./src/stores/useragent-store/index.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUserAgentStore\": function() { return /* binding */ createUserAgentStore; }\n/* harmony export */ });\nconst createUserAgentStore = (set, get)=>({\n        userAgent: [],\n        setUserAgent: (data)=>{\n            set({\n                userAgent: data\n            });\n            return data;\n        }\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0b3Jlcy91c2VyYWdlbnQtc3RvcmUvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSx1QkFBdUIsQ0FBQ0MsS0FBS0MsTUFBUztRQUNqREMsV0FBVyxFQUFFO1FBQ2JDLGNBQWMsQ0FBQ0MsT0FBUztZQUN0QkosSUFBSTtnQkFBRUUsV0FBV0U7WUFBSztZQUV0QixPQUFPQTtRQUNUO0lBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmVzL3VzZXJhZ2VudC1zdG9yZS9pbmRleC5qc3g/NDJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY3JlYXRlVXNlckFnZW50U3RvcmUgPSAoc2V0LCBnZXQpID0+ICh7XG4gIHVzZXJBZ2VudDogW10sXG4gIHNldFVzZXJBZ2VudDogKGRhdGEpID0+IHtcbiAgICBzZXQoeyB1c2VyQWdlbnQ6IGRhdGEgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXJBZ2VudFN0b3JlIiwic2V0IiwiZ2V0IiwidXNlckFnZW50Iiwic2V0VXNlckFnZW50IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/stores/useragent-store/index.jsx\n"));

/***/ })

});
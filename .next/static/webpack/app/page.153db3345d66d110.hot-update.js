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

/***/ "(app-client)/./src/components/example-add.jsx":
/*!****************************************!*\
  !*** ./src/components/example-add.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExampleAdd; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/stores */ \"(app-client)/./src/stores/index.jsx\");\n/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jssip */ \"(app-client)/./node_modules/jssip/lib-es5/JsSIP.js\");\n/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jssip__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ExampleAdd() {\n    _s();\n    const { userAgent , setUserAgent  } = (0,_stores__WEBPACK_IMPORTED_MODULE_1__.useStore)();\n    const handleAddUserAgent = ()=>{\n        const socket = new (jssip__WEBPACK_IMPORTED_MODULE_2___default().WebSocketInterface)(\"wss://sip.example.com\");\n        const configuration = {\n            sockets: [\n                socket\n            ],\n            uri: \"sip:alice@example.com\",\n            ha1: \"350fe29ce3890bd85d105998b0a95cf7\",\n            realm: \"sip.example.com\"\n        };\n        const ua = new (jssip__WEBPACK_IMPORTED_MODULE_2___default().UA)(configuration);\n        setUserAgent(ua);\n    };\n    const handleShowUserAgent = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddUserAgent,\n                children: \"Click Add\"\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/test/nextjs-13-state-management/zustand/src/components/example-add.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleShowUserAgent,\n                children: \" Click Display \"\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/test/nextjs-13-state-management/zustand/src/components/example-add.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kasemsan/Documents/dev/test/nextjs-13-state-management/zustand/src/components/example-add.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(ExampleAdd, \"sFbcW+cfxo8KNg3aTx2TWEDwqrc=\", false, function() {\n    return [\n        _stores__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = ExampleAdd;\nvar _c;\n$RefreshReg$(_c, \"ExampleAdd\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvZXhhbXBsZS1hZGQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFb0M7QUFDVjtBQUVYLFNBQVNFLGFBQWE7O0lBQ25DLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxhQUFZLEVBQUUsR0FBR0osaURBQVFBO0lBQzVDLE1BQU1LLHFCQUFxQixJQUFNO1FBQy9CLE1BQU1DLFNBQVMsSUFBSUwsaUVBQXdCLENBQUM7UUFDNUMsTUFBTU8sZ0JBQWdCO1lBQ3BCQyxTQUFTO2dCQUFDSDthQUFPO1lBQ2pCSSxLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsT0FBTztRQUNUO1FBQ0EsTUFBTUMsS0FBSyxJQUFJWixpREFBUSxDQUFDTztRQUN4QkosYUFBYVM7SUFDZjtJQUNBLE1BQU1FLHNCQUFzQixJQUFNLENBQUM7SUFFbkMscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQU9DLFNBQVNiOzBCQUFvQjs7Ozs7OzBCQUNyQyw4REFBQ1k7Z0JBQU9DLFNBQVNIOzBCQUFxQjs7Ozs7Ozs7Ozs7O0FBRzVDLENBQUM7R0FyQnVCYjs7UUFDY0YsNkNBQVFBOzs7S0FEdEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2V4YW1wbGUtYWRkLmpzeD85YmYxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJAL3N0b3Jlc1wiO1xuaW1wb3J0IEpzU0lQIGZyb20gXCJqc3NpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlQWRkKCkge1xuICBjb25zdCB7IHVzZXJBZ2VudCwgc2V0VXNlckFnZW50IH0gPSB1c2VTdG9yZSgpO1xuICBjb25zdCBoYW5kbGVBZGRVc2VyQWdlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ja2V0ID0gbmV3IEpzU0lQLldlYlNvY2tldEludGVyZmFjZShcIndzczovL3NpcC5leGFtcGxlLmNvbVwiKTtcbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0ge1xuICAgICAgc29ja2V0czogW3NvY2tldF0sXG4gICAgICB1cmk6IFwic2lwOmFsaWNlQGV4YW1wbGUuY29tXCIsXG4gICAgICBoYTE6IFwiMzUwZmUyOWNlMzg5MGJkODVkMTA1OTk4YjBhOTVjZjdcIixcbiAgICAgIHJlYWxtOiBcInNpcC5leGFtcGxlLmNvbVwiLFxuICAgIH07XG4gICAgY29uc3QgdWEgPSBuZXcgSnNTSVAuVUEoY29uZmlndXJhdGlvbik7XG4gICAgc2V0VXNlckFnZW50KHVhKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU2hvd1VzZXJBZ2VudCA9ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkVXNlckFnZW50fT5DbGljayBBZGQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2hvd1VzZXJBZ2VudH0+IENsaWNrIERpc3BsYXkgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RvcmUiLCJKc1NJUCIsIkV4YW1wbGVBZGQiLCJ1c2VyQWdlbnQiLCJzZXRVc2VyQWdlbnQiLCJoYW5kbGVBZGRVc2VyQWdlbnQiLCJzb2NrZXQiLCJXZWJTb2NrZXRJbnRlcmZhY2UiLCJjb25maWd1cmF0aW9uIiwic29ja2V0cyIsInVyaSIsImhhMSIsInJlYWxtIiwidWEiLCJVQSIsImhhbmRsZVNob3dVc2VyQWdlbnQiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/example-add.jsx\n"));

/***/ })

});
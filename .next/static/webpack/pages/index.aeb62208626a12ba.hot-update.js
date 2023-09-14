"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REQUEST_STATUS: function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"Success\",\n    FAILURE: \"failure\"\n};\nconst useRequestDelay = function() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(REQUEST_STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    function updateRecord(recordUpdated) {\n        const newRecords = data.map((rec)=>{\n            return rec.id === recordUpdated.id ? recordUpdated : rec;\n        });\n        async function delayFunction() {\n            try {\n                await delay(delayTime);\n                setData(newRecords);\n            } catch (error) {\n                console.log(\"error thrown here\", error);\n            }\n        }\n        delayFunction();\n    }\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setData(data);\n            } catch (e) {\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    return {\n        data,\n        requestStatus,\n        error,\n        updateRecord\n    };\n};\n_s(useRequestDelay, \"/Q5hd3zsV2Ij7JDh84VFSCYTHHg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFckMsTUFBTUUsaUJBQWlCO0lBQzVCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNYLEVBQUU7QUFFRixNQUFNQyxrQkFBa0I7UUFBQ0MsNkVBQVksTUFBTUMsK0VBQWMsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDTztJQUNqQyxNQUFNLENBQUNHLGVBQWVDLGlCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBQ0MsZUFBZUMsT0FBTztJQUN6RSxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkMsU0FBU2MsYUFBYUMsYUFBYTtRQUNqQyxNQUFNQyxhQUFhUixLQUFLUyxHQUFHLENBQUMsQ0FBQ0M7WUFDM0IsT0FBT0EsSUFBSUMsRUFBRSxLQUFLSixjQUFjSSxFQUFFLEdBQUdKLGdCQUFnQkc7UUFDdkQ7UUFFQSxlQUFlRTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsTUFBTWY7Z0JBQ1pHLFFBQVFPO1lBQ1YsRUFBRSxPQUFPSixPQUFPO2dCQUNkVSxRQUFRQyxHQUFHLENBQUMscUJBQXFCWDtZQUNuQztRQUNGO1FBQ0FRO0lBQ0Y7SUFFQSxNQUFNQyxRQUFRLENBQUNHLEtBQU8sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTRjtJQUVuRXpCLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZTZCO1lBQ2IsSUFBSTtnQkFDRixNQUFNUCxNQUFNZjtnQkFDWkssaUJBQWlCVixlQUFlRSxPQUFPO2dCQUN2Q00sUUFBUUQ7WUFDVixFQUFFLE9BQU9xQixHQUFHO2dCQUNWbEIsaUJBQWlCVixlQUFlRyxPQUFPO2dCQUN2Q1MsU0FBU2dCO1lBQ1g7UUFDRjtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUNMLE9BQU87UUFBRXBCO1FBQU1FO1FBQWVFO1FBQU9FO0lBQWE7QUFDcEQ7R0F0Q01UO0FBd0NOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanM/OGVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gIFNVQ0NFU1M6IFwiU3VjY2Vzc1wiLFxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcbn07XG5cbmNvbnN0IHVzZVJlcXVlc3REZWxheSA9IChkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQpIHtcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoKHJlYykgPT4ge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGhlcmVcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWxheUZ1bmN0aW9uKCk7XG4gIH1cblxuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XG4gICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlbGF5RnVuYygpO1xuICB9LCBbXSk7XG4gIHJldHVybiB7IGRhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCB1cGRhdGVSZWNvcmQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3REZWxheTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwidXNlUmVxdWVzdERlbGF5IiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsInVwZGF0ZVJlY29yZCIsInJlY29yZFVwZGF0ZWQiLCJuZXdSZWNvcmRzIiwibWFwIiwicmVjIiwiaWQiLCJkZWxheUZ1bmN0aW9uIiwiZGVsYXkiLCJjb25zb2xlIiwibG9nIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});
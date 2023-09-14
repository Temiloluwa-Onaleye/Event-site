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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REQUEST_STATUS: function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\nvar _s = $RefreshSig$();\n\n\nconst REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"Success\",\n    FAILURE: \"failure\"\n};\nconst useRequestDelay = function() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(REQUEST_STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    function onFavoriteToggle(id) {\n        const speakerRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakerRecPrevious,\n            favorite: !speakerRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    }\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data);\n            } catch (e) {\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    return {\n        speakerData,\n        requestStatus,\n        error,\n        onFavoriteToggle\n    };\n};\n_s(useRequestDelay, \"CcSa29pyqk8LFqxfVh8w4CYHReE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ0g7QUFFbEMsTUFBTUcsaUJBQWlCO0lBQzVCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNYLEVBQUU7QUFFRixNQUFNQyxrQkFBa0I7UUFBQ0MsNkVBQVksTUFBTUMsK0VBQWMsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUNFLGVBQWVDLE9BQU87SUFDekUsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNlLGlCQUFpQkMsRUFBRTtRQUMxQixNQUFNQyxxQkFBcUJSLFlBQVlTLElBQUksQ0FBQyxTQUFVQyxHQUFHO1lBQ3ZELE9BQU9BLElBQUlILEVBQUUsS0FBS0E7UUFDcEI7UUFDQSxNQUFNSSxvQkFBb0I7WUFDeEIsR0FBR0gsa0JBQWtCO1lBQ3JCSSxVQUFVLENBQUNKLG1CQUFtQkksUUFBUTtRQUN4QztRQUNBLE1BQU1DLGlCQUFpQmIsWUFBWWMsR0FBRyxDQUFDLFNBQVVKLEdBQUc7WUFDbEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQSxLQUFLSSxvQkFBb0JEO1FBQzdDO1FBRUFULGVBQWVZO0lBQ2pCO0lBRUEsTUFBTUUsUUFBUSxDQUFDQyxLQUFPLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFFbkUxQixnREFBU0EsQ0FBQztRQUNSLGVBQWU4QjtZQUNiLElBQUk7Z0JBQ0YsTUFBTUwsTUFBTWpCO2dCQUNaSyxpQkFBaUJWLGVBQWVFLE9BQU87Z0JBQ3ZDTSxlQUFlVCw4Q0FBSUE7WUFDckIsRUFBRSxPQUFPNkIsR0FBRztnQkFDVmxCLGlCQUFpQlYsZUFBZUcsT0FBTztnQkFDdkNTLFNBQVNnQjtZQUNYO1FBQ0Y7UUFFQUQ7SUFDRixHQUFHLEVBQUU7SUFDTCxPQUFPO1FBQUVwQjtRQUFhRTtRQUFlRTtRQUFPRTtJQUFpQjtBQUMvRDtHQXJDTVQ7QUF1Q04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcz84ZWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICBMT0FESU5HOiBcImxvYWRpbmdcIixcbiAgU1VDQ0VTUzogXCJTdWNjZXNzXCIsXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxufTtcblxuY29uc3QgdXNlUmVxdWVzdERlbGF5ID0gKGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhID0gW10pID0+IHtcbiAgY29uc3QgW3NwZWFrZXJEYXRhLCBzZXRTcGVha2VyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpIHtcbiAgICBjb25zdCBzcGVha2VyUmVjUHJldmlvdXMgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xuICAgIH0pO1xuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgLi4uc3BlYWtlclJlY1ByZXZpb3VzLFxuICAgICAgZmF2b3JpdGU6ICFzcGVha2VyUmVjUHJldmlvdXMuZmF2b3JpdGUsXG4gICAgfTtcbiAgICBjb25zdCBzcGVha2VyRGF0YU5ldyA9IHNwZWFrZXJEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xuICAgIH0pO1xuXG4gICAgc2V0U3BlYWtlckRhdGEoc3BlYWtlckRhdGFOZXcpO1xuICB9XG5cbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXRTcGVha2VyRGF0YShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHsgc3BlYWtlckRhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCBvbkZhdm9yaXRlVG9nZ2xlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYXRhIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJkZWxheVRpbWUiLCJpbml0aWFsRGF0YSIsInNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckRhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2VyUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJEYXRhTmV3IiwibWFwIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRlbGF5RnVuYyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});
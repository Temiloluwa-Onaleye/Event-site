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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext. */ \"./src/contexts/SpeakerFilterContext..js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SpeakersList = ()=>{\n    _s();\n    const { showSessions } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_5__.SpeakerFilterContext);\n    const { data: speakerData, requestStatus, error, updateRecord } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    const { searchQuery, eventYear } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_5__.SpeakerFilterContext);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR:\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed\",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                    lineNumber: 22,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.LOADING ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container speakers-list\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: speakerData.filter(function(speaker) {\n                        return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n                    }).filter(function(speaker) {\n                        return speaker.sessions.find((session)=>{\n                            return session.eventYear === eventYear;\n                        });\n                    }).map(function(speaker) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            speaker: speaker,\n                            onFavoriteToggle: (doneCallback)=>{\n                                updateRecord({\n                                    ...speaker,\n                                    favorite: !speaker.favorite\n                                }, doneCallback);\n                            }\n                        }, speaker.id, false, {\n                            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(SpeakersList, \"yfyo2L/Cbhdd4BNxMGBeGuSlsmM=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDUztBQUVrQztBQUN4QztBQUNzQztBQUV6RSxNQUFNTSxlQUFlOztJQUNuQixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHSCxpREFBVUEsQ0FBQ0MsaUZBQW9CQTtJQUN4RCxNQUFNLEVBQ0pKLE1BQU1PLFdBQVcsRUFDakJDLGFBQWEsRUFDYkMsS0FBSyxFQUNMQyxZQUFZLEVBQ2IsR0FBR1Qsa0VBQWVBLENBQUMsTUFBTUQsOENBQUlBO0lBRTlCLE1BQU0sRUFBRVcsV0FBVyxFQUFFQyxTQUFTLEVBQUUsR0FBR1QsaURBQVVBLENBQUNDLGlGQUFvQkE7SUFFbEUsSUFBSUksa0JBQWtCTixrRUFBY0EsQ0FBQ1csT0FBTyxFQUFFO1FBQzVDLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFVOztnQkFBYzs4QkFDckIsOERBQUNDOzt3QkFBRTt3QkFBNEJQOzs7Ozs7Ozs7Ozs7O0lBRzNDO0lBQ0EscUJBQ0U7a0JBQ0dELGtCQUFrQk4sa0VBQWNBLENBQUNlLE9BQU8saUJBQ3ZDLDhEQUFDQztzQkFBRzs7Ozs7c0NBRUosOERBQUNKO3NCQUNDLDRFQUFDQTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pSLFlBQ0VZLE1BQU0sQ0FBQyxTQUFVQyxPQUFPO3dCQUN2QixPQUNFQSxRQUFRQyxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixnQkFDckNTLFFBQVFJLElBQUksQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNaO29CQUV4QyxHQUNDUSxNQUFNLENBQUMsU0FBVUMsT0FBTzt3QkFDdkIsT0FBT0EsUUFBUUssUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0M7NEJBQzVCLE9BQU9BLFFBQVFmLFNBQVMsS0FBS0E7d0JBQy9CO29CQUNGLEdBQ0NnQixHQUFHLENBQUMsU0FBVVIsT0FBTzt3QkFDcEIscUJBQ0UsOERBQUNyQixnREFBT0E7NEJBRU5xQixTQUFTQTs0QkFDVFMsa0JBQWtCLENBQUNDO2dDQUNqQnBCLGFBQ0U7b0NBQ0UsR0FBR1UsT0FBTztvQ0FDVlcsVUFBVSxDQUFDWCxRQUFRVyxRQUFRO2dDQUM3QixHQUNBRDs0QkFFSjsyQkFWS1YsUUFBUVksRUFBRTs7Ozs7b0JBYXJCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQjtHQTdETTNCOztRQU9BSiw4REFBZUE7OztLQVBmSTtBQStETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5cbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dC5cIjtcblxuY29uc3QgU3BlYWtlcnNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB7IHNob3dTZXNzaW9ucyB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBzcGVha2VyRGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcblxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCBldmVudFllYXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgRVJST1I6PGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVke2Vycm9yfTwvYj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkcgPyAoXG4gICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAge3NwZWFrZXJEYXRhXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyLmxhc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3BlYWtlci5zZXNzaW9ucy5maW5kKChzZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eyhkb25lQ2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIl0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlUmVxdWVzdERlbGF5IiwiUkVRVUVTVF9TVEFUVVMiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2VyRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsInNlYXJjaFF1ZXJ5IiwiZXZlbnRZZWFyIiwiRkFJTFVSRSIsImRpdiIsImNsYXNzTmFtZSIsImIiLCJMT0FESU5HIiwiaDEiLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdCIsInNlc3Npb25zIiwiZmluZCIsInNlc3Npb24iLCJtYXAiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiZG9uZUNhbGxiYWNrIiwiZmF2b3JpdGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext. */ \"./src/contexts/SpeakerFilterContext..js\");\n/* harmony import */ var _SpeakerAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerAdd */ \"./src/components/SpeakerAdd.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SpeakersList = ()=>{\n    _s();\n    const { data: speakerData, requestStatus, error, updateRecord, deleteRecord, insertRecord } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    const { searchQuery, eventYear } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_5__.SpeakerFilterContext);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR:\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed\",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                    lineNumber: 23,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.LOADING ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container speakers-list\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerAdd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        eventYear: eventYear,\n                        insertRecord: insertRecord\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: speakerData.filter(function(speaker) {\n                            return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n                        }).filter(function(speaker) {\n                            return speaker.sessions.find((session)=>{\n                                return session.eventYear === eventYear;\n                            });\n                        }).map((speaker)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                speaker: speaker,\n                                updateRecord: updateRecord,\n                                insertRecord: insertRecord,\n                                deleteRecord: deleteRecord\n                            }, speaker.id, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(SpeakersList, \"vSYLCUKMSqenV2fYbPvneH/Aj5s=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFDa0M7QUFDeEM7QUFDc0M7QUFDbkM7QUFFdEMsTUFBTU8sZUFBZTs7SUFDbkIsTUFBTSxFQUNKTixNQUFNTyxXQUFXLEVBQ2pCQyxhQUFhLEVBQ2JDLEtBQUssRUFDTEMsWUFBWSxFQUNaQyxZQUFZLEVBQ1pDLFlBQVksRUFDYixHQUFHWCxrRUFBZUEsQ0FBQyxNQUFNRCw4Q0FBSUE7SUFFOUIsTUFBTSxFQUFFYSxXQUFXLEVBQUVDLFNBQVMsRUFBRSxHQUFHWCxpREFBVUEsQ0FBQ0MsaUZBQW9CQTtJQUVsRSxJQUFJSSxrQkFBa0JOLGtFQUFjQSxDQUFDYSxPQUFPLEVBQUU7UUFDNUMscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7O2dCQUFjOzhCQUNyQiw4REFBQ0M7O3dCQUFFO3dCQUE0QlQ7Ozs7Ozs7Ozs7Ozs7SUFHM0M7SUFDQSxxQkFDRTtrQkFDR0Qsa0JBQWtCTixrRUFBY0EsQ0FBQ2lCLE9BQU8saUJBQ3ZDLDhEQUFDQztzQkFBRzs7Ozs7c0NBRUosOERBQUNKO3NCQUNDLDRFQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNaLG1EQUFVQTt3QkFBQ1MsV0FBV0E7d0JBQVdGLGNBQWNBOzs7Ozs7a0NBQ2hELDhEQUFDSTt3QkFBSUMsV0FBVTtrQ0FDWlYsWUFDRWMsTUFBTSxDQUFDLFNBQVVDLE9BQU87NEJBQ3ZCLE9BQ0VBLFFBQVFDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNaLGdCQUNyQ1MsUUFBUUksSUFBSSxDQUFDRixXQUFXLEdBQUdDLFFBQVEsQ0FBQ1o7d0JBRXhDLEdBQ0NRLE1BQU0sQ0FBQyxTQUFVQyxPQUFPOzRCQUN2QixPQUFPQSxRQUFRSyxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDQztnQ0FDNUIsT0FBT0EsUUFBUWYsU0FBUyxLQUFLQTs0QkFDL0I7d0JBQ0YsR0FDQ2dCLEdBQUcsQ0FBQyxDQUFDUjs0QkFDSixxQkFDRSw4REFBQ3ZCLGdEQUFPQTtnQ0FFTnVCLFNBQVNBO2dDQUNUWixjQUFjQTtnQ0FDZEUsY0FBY0E7Z0NBQ2RELGNBQWNBOytCQUpUVyxRQUFRUyxFQUFFOzs7Ozt3QkFPckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQjtHQXpETXpCOztRQVFBTCw4REFBZUE7OztLQVJmSztBQTJETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQuXCI7XG5pbXBvcnQgU3BlYWtlckFkZCBmcm9tIFwiLi9TcGVha2VyQWRkXCI7XG5cbmNvbnN0IFNwZWFrZXJzTGlzdCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGRhdGE6IHNwZWFrZXJEYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICAgIGRlbGV0ZVJlY29yZCxcbiAgICBpbnNlcnRSZWNvcmQsXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XG5cbiAgY29uc3QgeyBzZWFyY2hRdWVyeSwgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOjxiPmxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HID8gKFxuICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgICAgICAgIDxTcGVha2VyQWRkIGV2ZW50WWVhcj17ZXZlbnRZZWFyfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIHtzcGVha2VyRGF0YVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXIuZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5sYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwZWFrZXIuc2Vzc2lvbnMuZmluZCgoc2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cbiAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIl0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlUmVxdWVzdERlbGF5IiwiUkVRVUVTVF9TVEFUVVMiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJTcGVha2VyQWRkIiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlckRhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJpbnNlcnRSZWNvcmQiLCJzZWFyY2hRdWVyeSIsImV2ZW50WWVhciIsIkZBSUxVUkUiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwiTE9BRElORyIsImgxIiwiZmlsdGVyIiwic3BlYWtlciIsImZpcnN0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxhc3QiLCJzZXNzaW9ucyIsImZpbmQiLCJzZXNzaW9uIiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext. */ \"./src/contexts/SpeakerFilterContext..js\");\n/* harmony import */ var _SpeakerAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerAdd */ \"./src/components/SpeakerAdd.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SpeakersList = ()=>{\n    _s();\n    const { data: speakerData, requestStatus, error, updateRecord, deleteRecord, insertRecord } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    const { searchQuery, eventYear } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_5__.SpeakerFilterContext);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR:\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed\",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                    lineNumber: 24,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.LOADING ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container speakers-list\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerAdd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        eventYear: eventYear,\n                        insertRecord: insertRecord\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: speakerData.filter(function(speaker) {\n                            return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n                        }).filter(function(speaker) {\n                            return speaker.sessions.find((session)=>{\n                                return session.eventYear === eventYear;\n                            });\n                        }).map((speaker)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                speaker: speaker,\n                                updateRecord: updateRecord,\n                                insertRecord: insertRecord,\n                                deleteRecord: deleteRecord\n                            }, speaker.id, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/SpeakersList.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(SpeakersList, \"vSYLCUKMSqenV2fYbPvneH/Aj5s=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFFa0M7QUFDeEM7QUFDc0M7QUFDbkM7QUFFdEMsTUFBTU8sZUFBZTs7SUFDbkIsTUFBTSxFQUNKTixNQUFNTyxXQUFXLEVBQ2pCQyxhQUFhLEVBQ2JDLEtBQUssRUFDTEMsWUFBWSxFQUNaQyxZQUFZLEVBQ1pDLFlBQVksRUFDYixHQUFHWCxrRUFBZUEsQ0FBQyxNQUFNRCw4Q0FBSUE7SUFFOUIsTUFBTSxFQUFFYSxXQUFXLEVBQUVDLFNBQVMsRUFBRSxHQUFHWCxpREFBVUEsQ0FBQ0MsaUZBQW9CQTtJQUVsRSxJQUFJSSxrQkFBa0JOLGtFQUFjQSxDQUFDYSxPQUFPLEVBQUU7UUFDNUMscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7O2dCQUFjOzhCQUNyQiw4REFBQ0M7O3dCQUFFO3dCQUE0QlQ7Ozs7Ozs7Ozs7Ozs7SUFHM0M7SUFDQSxxQkFDRTtrQkFDR0Qsa0JBQWtCTixrRUFBY0EsQ0FBQ2lCLE9BQU8saUJBQ3ZDLDhEQUFDQztzQkFBRzs7Ozs7c0NBRUosOERBQUNKO3NCQUNDLDRFQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNaLG1EQUFVQTt3QkFBQ1MsV0FBV0E7d0JBQVdGLGNBQWNBOzs7Ozs7a0NBQ2hELDhEQUFDSTt3QkFBSUMsV0FBVTtrQ0FDWlYsWUFDRWMsTUFBTSxDQUFDLFNBQVVDLE9BQU87NEJBQ3ZCLE9BQ0VBLFFBQVFDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNaLGdCQUNyQ1MsUUFBUUksSUFBSSxDQUFDRixXQUFXLEdBQUdDLFFBQVEsQ0FBQ1o7d0JBRXhDLEdBQ0NRLE1BQU0sQ0FBQyxTQUFVQyxPQUFPOzRCQUN2QixPQUFPQSxRQUFRSyxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDQztnQ0FDNUIsT0FBT0EsUUFBUWYsU0FBUyxLQUFLQTs0QkFDL0I7d0JBQ0YsR0FDQ2dCLEdBQUcsQ0FBQyxDQUFDUjs0QkFDSixxQkFDRSw4REFBQ3ZCLGdEQUFPQTtnQ0FFTnVCLFNBQVNBO2dDQUNUWixjQUFjQTtnQ0FDZEUsY0FBY0E7Z0NBQ2RELGNBQWNBOytCQUpUVyxRQUFRUyxFQUFFOzs7Ozt3QkFPckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQjtHQXpETXpCOztRQVFBTCw4REFBZUE7OztLQVJmSztBQTJETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5cbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dC5cIjtcbmltcG9ydCBTcGVha2VyQWRkIGZyb20gXCIuL1NwZWFrZXJBZGRcIjtcblxuY29uc3QgU3BlYWtlcnNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgZGF0YTogc3BlYWtlckRhdGEsXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICB1cGRhdGVSZWNvcmQsXG4gICAgZGVsZXRlUmVjb3JkLFxuICAgIGluc2VydFJlY29yZCxcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcblxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCBldmVudFllYXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgRVJST1I6PGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVke2Vycm9yfTwvYj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkcgPyAoXG4gICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgICAgICAgPFNwZWFrZXJBZGQgZXZlbnRZZWFyPXtldmVudFllYXJ9IGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAge3NwZWFrZXJEYXRhXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyLmxhc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3BlYWtlci5zZXNzaW9ucy5maW5kKChzZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKChzcGVha2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfVxuICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJSRVFVRVNUX1NUQVRVUyIsInVzZUNvbnRleHQiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNwZWFrZXJBZGQiLCJTcGVha2Vyc0xpc3QiLCJzcGVha2VyRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsImRlbGV0ZVJlY29yZCIsImluc2VydFJlY29yZCIsInNlYXJjaFF1ZXJ5IiwiZXZlbnRZZWFyIiwiRkFJTFVSRSIsImRpdiIsImNsYXNzTmFtZSIsImIiLCJMT0FESU5HIiwiaDEiLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdCIsInNlc3Npb25zIiwiZmluZCIsInNlc3Npb24iLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ }),

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REQUEST_STATUS: function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"Success\",\n    FAILURE: \"failure\"\n};\nconst useRequestDelay = function() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(REQUEST_STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setData(initialData);\n            } catch (e) {\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    function updateRecord(record, doneCallback) {\n        const originalRecords = [\n            ...data\n        ];\n        const newRecords = data.map((rec)=>{\n            return rec.id === record.id ? record : rec;\n        });\n        async function delayFunction() {\n            try {\n                setData(newRecords);\n                await delay(delayTime);\n                if (doneCallback) {\n                    doneCallback();\n                }\n            } catch (error) {\n                console.log(\"error thrown here\", error);\n                if (doneCallback) {\n                    doneCallback();\n                }\n                setData(originalRecords);\n            }\n        }\n        delayFunction();\n    }\n    function insertRecord(record, doneCallback) {\n        const originalRecords = [\n            ...data\n        ];\n        const newRecords = [\n            record,\n            ...data\n        ];\n        async function delayFunction() {\n            try {\n                setData(newRecords);\n                await delay(delayTime);\n                if (doneCallback) {\n                    doneCallback();\n                }\n            } catch (error) {\n                console.log(\"error thrown here\", error);\n                if (doneCallback) {\n                    doneCallback();\n                }\n                setData(originalRecords);\n            }\n        }\n        delayFunction();\n    }\n    function deleteRecord(record, doneCallback) {\n        const originalRecords = [\n            ...data\n        ];\n        const newRecords = data.filter((rec)=>{\n            return rec.id != record.id;\n        });\n        async function delayFunction() {\n            try {\n                setData(newRecords);\n                await delay(delayTime);\n                if (doneCallback) {\n                    doneCallback();\n                }\n            } catch (error) {\n                console.log(\"error thrown here\", error);\n                if (doneCallback) {\n                    doneCallback();\n                }\n                setData(originalRecords);\n            }\n        }\n        delayFunction();\n    }\n    return {\n        data,\n        requestStatus,\n        error,\n        updateRecord,\n        insertRecord,\n        deleteRecord\n    };\n};\n_s(useRequestDelay, \"/Q5hd3zsV2Ij7JDh84VFSCYTHHg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFckMsTUFBTUUsaUJBQWlCO0lBQzVCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNYLEVBQUU7QUFFRixNQUFNQyxrQkFBa0I7UUFBQ0MsNkVBQVksTUFBTUMsK0VBQWMsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDTztJQUNqQyxNQUFNLENBQUNHLGVBQWVDLGlCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBQ0MsZUFBZUMsT0FBTztJQUN6RSxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWMsUUFBUSxDQUFDQyxLQUFPLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFFbkVoQixnREFBU0EsQ0FBQztRQUNSLGVBQWVvQjtZQUNiLElBQUk7Z0JBQ0YsTUFBTUwsTUFBTVI7Z0JBQ1pLLGlCQUFpQlYsZUFBZUUsT0FBTztnQkFDdkNNLFFBQVFGO1lBQ1YsRUFBRSxPQUFPYSxHQUFHO2dCQUNWVCxpQkFBaUJWLGVBQWVHLE9BQU87Z0JBQ3ZDUyxTQUFTTztZQUNYO1FBQ0Y7UUFFQUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTRSxhQUFhQyxNQUFNLEVBQUVDLFlBQVk7UUFDeEMsTUFBTUMsa0JBQWtCO2VBQUloQjtTQUFLO1FBQ2pDLE1BQU1pQixhQUFhakIsS0FBS2tCLEdBQUcsQ0FBQyxDQUFDQztZQUMzQixPQUFPQSxJQUFJQyxFQUFFLEtBQUtOLE9BQU9NLEVBQUUsR0FBR04sU0FBU0s7UUFDekM7UUFFQSxlQUFlRTtZQUNiLElBQUk7Z0JBQ0ZwQixRQUFRZ0I7Z0JBQ1IsTUFBTVgsTUFBTVI7Z0JBQ1osSUFBSWlCLGNBQWM7b0JBQ2hCQTtnQkFDRjtZQUNGLEVBQUUsT0FBT1gsT0FBTztnQkFDZGtCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJuQjtnQkFDakMsSUFBSVcsY0FBYztvQkFDaEJBO2dCQUNGO2dCQUNBZCxRQUFRZTtZQUNWO1FBQ0Y7UUFDQUs7SUFDRjtJQUVBLFNBQVNHLGFBQWFWLE1BQU0sRUFBRUMsWUFBWTtRQUN4QyxNQUFNQyxrQkFBa0I7ZUFBSWhCO1NBQUs7UUFDakMsTUFBTWlCLGFBQWE7WUFBQ0g7ZUFBV2Q7U0FBSztRQUVwQyxlQUFlcUI7WUFDYixJQUFJO2dCQUNGcEIsUUFBUWdCO2dCQUNSLE1BQU1YLE1BQU1SO2dCQUNaLElBQUlpQixjQUFjO29CQUNoQkE7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9YLE9BQU87Z0JBQ2RrQixRQUFRQyxHQUFHLENBQUMscUJBQXFCbkI7Z0JBQ2pDLElBQUlXLGNBQWM7b0JBQ2hCQTtnQkFDRjtnQkFDQWQsUUFBUWU7WUFDVjtRQUNGO1FBQ0FLO0lBQ0Y7SUFDQSxTQUFTSSxhQUFhWCxNQUFNLEVBQUVDLFlBQVk7UUFDeEMsTUFBTUMsa0JBQWtCO2VBQUloQjtTQUFLO1FBQ2pDLE1BQU1pQixhQUFhakIsS0FBSzBCLE1BQU0sQ0FBQyxDQUFDUDtZQUM5QixPQUFPQSxJQUFJQyxFQUFFLElBQUlOLE9BQU9NLEVBQUU7UUFDNUI7UUFFQSxlQUFlQztZQUNiLElBQUk7Z0JBQ0ZwQixRQUFRZ0I7Z0JBQ1IsTUFBTVgsTUFBTVI7Z0JBQ1osSUFBSWlCLGNBQWM7b0JBQ2hCQTtnQkFDRjtZQUNGLEVBQUUsT0FBT1gsT0FBTztnQkFDZGtCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJuQjtnQkFDakMsSUFBSVcsY0FBYztvQkFDaEJBO2dCQUNGO2dCQUNBZCxRQUFRZTtZQUNWO1FBQ0Y7UUFDQUs7SUFDRjtJQUVBLE9BQU87UUFDTHJCO1FBQ0FFO1FBQ0FFO1FBQ0FTO1FBQ0FXO1FBQ0FDO0lBQ0Y7QUFDRjtHQW5HTTVCO0FBcUdOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanM/OGVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gIFNVQ0NFU1M6IFwiU3VjY2Vzc1wiLFxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcbn07XG5cbmNvbnN0IHVzZVJlcXVlc3REZWxheSA9IChkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGluaXRpYWxEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkLCBkb25lQ2FsbGJhY2spIHtcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKChyZWMpID0+IHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IHJlY29yZC5pZCA/IHJlY29yZCA6IHJlYztcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGhlcmVcIiwgZXJyb3IpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWxheUZ1bmN0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRSZWNvcmQocmVjb3JkLCBkb25lQ2FsbGJhY2spIHtcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IFtyZWNvcmQsIC4uLmRhdGFdO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaGVyZVwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVSZWNvcmQocmVjb3JkLCBkb25lQ2FsbGJhY2spIHtcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgIHJldHVybiByZWMuaWQgIT0gcmVjb3JkLmlkO1xuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaGVyZVwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgICBpbnNlcnRSZWNvcmQsXG4gICAgZGVsZXRlUmVjb3JkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJkZWxheVRpbWUiLCJpbml0aWFsRGF0YSIsImRhdGEiLCJzZXREYXRhIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRlbGF5RnVuYyIsImUiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmQiLCJkb25lQ2FsbGJhY2siLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmRzIiwibWFwIiwicmVjIiwiaWQiLCJkZWxheUZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});
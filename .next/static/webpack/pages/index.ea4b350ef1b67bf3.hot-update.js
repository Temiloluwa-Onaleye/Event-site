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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext. */ \"./src/contexts/SpeakerFilterContext..js\");\n/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerContext */ \"./src/contexts/SpeakerContext.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$();\n\n\n\nfunction Session(param) {\n    let { title, room } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 8,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions } = param;\n    _s();\n    const { eventYear } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: sessions.filter(function(session) {\n            return session.eventYear === eventYear;\n        }).map(function(session) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"session w-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                    ...session\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 24,\n                    columnNumber: 15\n                }, this)\n            }, session.id, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Sessions, \"RA+HVAm2dNZ/ys9ifFFCpZo7nFg=\");\n_c1 = Sessions;\nfunction SpeakerImage() {\n    _s1();\n    const { speaker: { id, first, last } } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s1(SpeakerImage, \"A1E1x0EF2nIYjYM5Fi6KV9M84KI=\");\n_c2 = SpeakerImage;\nconst SpeakerFavorite = ()=>{\n    _s2();\n    const { speaker, updateRecord } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const [inTransition, setInTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function doneCallback() {\n        setInTransition(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                setInTransition(true);\n                updateRecord({\n                    ...speaker,\n                    favorite: !speaker.favorite\n                });\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s2(SpeakerFavorite, \"JYNF7jT9pd2MEJCpvqZnBM3xISU=\");\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics() {\n    _s3();\n    const { speaker } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const { first, last, bio, company, twitterHandle, favorite: favorite1, onFavoriteToggle } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s3(SpeakerDemographics, \"+GLFQhMVC35zrtukZQzc41tR8Ok=\");\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker, updateRecord } = param;\n    _s4();\n    const { showSessions } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    const { id, first, last, sessions } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerProvider, {\n        speaker: speaker,\n        updateRecord: updateRecord,\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-height p-4 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {}, void 0, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                        sessions: sessions\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 124,\n                        columnNumber: 34\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this);\n}\n_s4(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJTixXQUFVOztrREFDYiw4REFBQ2tDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFJTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0lBbENTSDtNQUFBQTtBQW9DVCxTQUFTUyxRQUFRLEtBQXlCO1FBQXpCLEVBQUV4QixPQUFPLEVBQUVRLFlBQVksRUFBRSxHQUF6Qjs7SUFDZixNQUFNLEVBQUVpQixZQUFZLEVBQUUsR0FBRzlDLGlEQUFVQSxDQUFDRSxpRkFBb0JBO0lBQ3hELE1BQU0sRUFBRWlCLEVBQUUsRUFBRUcsS0FBSyxFQUFFQyxJQUFJLEVBQUVWLFFBQVEsRUFBRSxHQUFHUTtJQUV0QyxxQkFDRSw4REFBQ2pCLHFFQUFlQTtRQUFDaUIsU0FBU0E7UUFBU1EsY0FBY0E7O1lBQzlDOzBCQUNELDhEQUFDZDtnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFJTixXQUFVOzswQ0FDYiw4REFBQ1c7Ozs7OzBDQUNELDhEQUFDZ0I7Ozs7Ozs7Ozs7O29CQUVGVSxpQkFBaUIscUJBQU8sOERBQUNsQzt3QkFBU0MsVUFBVUE7Ozs7OytCQUFlOzs7Ozs7Ozs7Ozs7O0FBSXBFO0lBaEJTZ0M7TUFBQUE7QUFrQlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dC5cIjtcbmltcG9ydCB7IFNwZWFrZXJDb250ZXh0LCBTcGVha2VyUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xuICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIHtzZXNzaW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXI7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCIga2V5PXtzZXNzaW9uLmlkfT5cbiAgICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKCkge1xuICBjb25zdCB7XG4gICAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QgfSxcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTcGVha2VyRmF2b3JpdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcbiAgICAgICAgICB1cGRhdGVSZWNvcmQoeyAuLi5zcGVha2VyLCBmYXZvcml0ZTogIXNwZWFrZXIuZmF2b3JpdGUgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcygpIHtcbiAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgIGZpcnN0LFxuICAgIGxhc3QsXG4gICAgYmlvLFxuICAgIGNvbXBhbnksXG4gICAgdHdpdHRlckhhbmRsZSxcbiAgICBmYXZvcml0ZSxcbiAgICBvbkZhdm9yaXRlVG9nZ2xlLFxuICB9ID0gc3BlYWtlcjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTcGVha2VyRmF2b3JpdGUgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57YmlvfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQgfSkge1xuICBjb25zdCB7IHNob3dTZXNzaW9ucyB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgaWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9ucyB9ID0gc3BlYWtlcjtcblxuICByZXR1cm4gKFxuICAgIDxTcGVha2VyUHJvdmlkZXIgc3BlYWtlcj17c3BlYWtlcn0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9PlxuICAgICAge1wiIFwifVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSAvPlxuICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID8gPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9TcGVha2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJTcGVha2VyQ29udGV4dCIsIlNwZWFrZXJQcm92aWRlciIsIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJldmVudFllYXIiLCJkaXYiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJzcGVha2VyIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJ1cGRhdGVSZWNvcmQiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJvbkNsaWNrIiwiZmF2b3JpdGUiLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwib25GYXZvcml0ZVRvZ2dsZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});
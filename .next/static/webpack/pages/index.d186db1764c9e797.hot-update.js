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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext. */ \"./src/contexts/SpeakerFilterContext..js\");\n/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerContext */ \"./src/contexts/SpeakerContext.js\");\n/* harmony import */ var _SpeakerDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDelete */ \"./src/components/SpeakerDelete.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();\n\n\n\n\nfunction Session(param) {\n    let { title, room } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 9,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions() {\n    _s();\n    const { speaker: { sessions } } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const { eventYear } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: sessions.filter(function(session) {\n            return session.eventYear === eventYear;\n        }).map(function(session) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"session w-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                    ...session\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 28,\n                    columnNumber: 15\n                }, this)\n            }, session.id, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Sessions, \"Mx5SH50coZTSKfs9eYz4yRVd4ho=\");\n_c1 = Sessions;\nfunction ImageWithFallback(param) {\n    let { src, ...props } = param;\n    _s1();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(src);\n    function onError() {\n        if (!error) {\n            setImgSrc(\"/images/speaker-99999.jpg\");\n            setError(true);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: imgSrc,\n        ...props,\n        onError: onError\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, this);\n}\n_s1(ImageWithFallback, \"R4UhDpTis3V59uQlUhTj6vAWrfc=\");\n_c2 = ImageWithFallback;\nfunction SpeakerImage() {\n    _s2();\n    const { speaker: { id, first, last } } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s2(SpeakerImage, \"A1E1x0EF2nIYjYM5Fi6KV9M84KI=\");\n_c3 = SpeakerImage;\nconst SpeakerFavorite = ()=>{\n    _s3();\n    const { speaker, updateRecord } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const [inTransition, setInTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function doneCallback() {\n        setInTransition(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                setInTransition(true);\n                updateRecord({\n                    ...speaker,\n                    favorite: !speaker.favorite\n                }, doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: speaker.favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s3(SpeakerFavorite, \"JYNF7jT9pd2MEJCpvqZnBM3xISU=\");\n_c4 = SpeakerFavorite;\nfunction SpeakerDemographics() {\n    _s4();\n    const { speaker } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const { first, last, bio, company, twitterHandle, favorite, onFavoriteToggle } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s4(SpeakerDemographics, \"+GLFQhMVC35zrtukZQzc41tR8Ok=\");\n_c5 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker, updateRecord, insertRecord, deleteRecord } = param;\n    _s5();\n    const { showSessions } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerProvider, {\n        speaker: speaker,\n        updateRecord: updateRecord,\n        insertRecord: insertRecord,\n        deleteRecord: deleteRecord,\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-height p-4 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {}, void 0, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, this),\n                    showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {}, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 151,\n                        columnNumber: 34\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDelete__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, this);\n}\n_s5(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c6 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"ImageWithFallback\");\n$RefreshReg$(_c3, \"SpeakerImage\");\n$RefreshReg$(_c4, \"SpeakerFavorite\");\n$RefreshReg$(_c5, \"SpeakerDemographics\");\n$RefreshReg$(_c6, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0LlwiO1xuaW1wb3J0IHsgU3BlYWtlckNvbnRleHQsIFNwZWFrZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyQ29udGV4dFwiO1xuaW1wb3J0IFNwZWFrZXJEZWxldGUgZnJvbSBcIi4vU3BlYWtlckRlbGV0ZVwiO1xuXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoKSB7XG4gIGNvbnN0IHtcbiAgICBzcGVha2VyOiB7IHNlc3Npb25zIH0sXG4gIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgY29uc3QgeyBldmVudFllYXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICB7c2Vzc2lvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiIGtleT17c2Vzc2lvbi5pZH0+XG4gICAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9ufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEltYWdlV2l0aEZhbGxiYWNrKHsgc3JjLCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoc3JjKTtcblxuICBmdW5jdGlvbiBvbkVycm9yKCkge1xuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHNldEltZ1NyYyhcIi9pbWFnZXMvc3BlYWtlci05OTk5OS5qcGdcIik7XG4gICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGltZyBzcmM9e2ltZ1NyY30gey4uLnByb3BzfSBvbkVycm9yPXtvbkVycm9yfSAvPjtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKCkge1xuICBjb25zdCB7XG4gICAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QgfSxcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTcGVha2VyRmF2b3JpdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcbiAgICAgICAgICB1cGRhdGVSZWNvcmQoXG4gICAgICAgICAgICB7IC4uLnNwZWFrZXIsIGZhdm9yaXRlOiAhc3BlYWtlci5mYXZvcml0ZSB9LFxuICAgICAgICAgICAgZG9uZUNhbGxiYWNrXG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgc3BlYWtlci5mYXZvcml0ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIlxuICAgICAgICAgICAgICA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXG4gICAgICAgICAgfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3MoKSB7XG4gIGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBmaXJzdCxcbiAgICBsYXN0LFxuICAgIGJpbyxcbiAgICBjb21wYW55LFxuICAgIHR3aXR0ZXJIYW5kbGUsXG4gICAgZmF2b3JpdGUsXG4gICAgb25GYXZvcml0ZVRvZ2dsZSxcbiAgfSA9IHNwZWFrZXI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BlYWtlckZhdm9yaXRlIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cbiAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyKHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkLCBpbnNlcnRSZWNvcmQsIGRlbGV0ZVJlY29yZCB9KSB7XG4gIGNvbnN0IHsgc2hvd1Nlc3Npb25zIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxTcGVha2VyUHJvdmlkZXJcbiAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cbiAgICAgIGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxuICAgICAgZGVsZXRlUmVjb3JkPXtkZWxldGVSZWNvcmR9XG4gICAgPlxuICAgICAge1wiIFwifVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSAvPlxuICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID8gPFNlc3Npb25zIC8+IDogbnVsbH1cbiAgICAgICAgPFNwZWFrZXJEZWxldGUgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3BlYWtlclByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlckNvbnRleHQiLCJTcGVha2VyUHJvdmlkZXIiLCJTcGVha2VyRGVsZXRlIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzcGVha2VyIiwic2Vzc2lvbnMiLCJldmVudFllYXIiLCJkaXYiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwiZXJyb3IiLCJzZXRFcnJvciIsImltZ1NyYyIsInNldEltZ1NyYyIsIm9uRXJyb3IiLCJpbWciLCJTcGVha2VySW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJ3aWR0aCIsImFsdCIsIlNwZWFrZXJGYXZvcml0ZSIsInVwZGF0ZVJlY29yZCIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsImRvbmVDYWxsYmFjayIsIm9uQ2xpY2siLCJmYXZvcml0ZSIsImkiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext. */ \"./src/contexts/SpeakerFilterContext..js\");\n/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerContext */ \"./src/contexts/SpeakerContext.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nfunction Session(param) {\n    let { title, room } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 8,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions } = param;\n    _s();\n    const { eventYear } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: sessions.filter(function(session) {\n            return session.eventYear === eventYear;\n        }).map(function(session) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"session w-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                    ...session\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 24,\n                    columnNumber: 15\n                }, this)\n            }, session.id, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Sessions, \"RA+HVAm2dNZ/ys9ifFFCpZo7nFg=\");\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id, first, last } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpeakerImage;\nconst SpeakerFavorite = (param)=>{\n    let { favorite, onFavoriteToggle: onFavoriteToggle1 } = param;\n    _s1();\n    const [inTransition, setInTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function doneCallback() {\n        setInTransition(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                setInTransition(true);\n                return onFavoriteToggle1(doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(SpeakerFavorite, \"gfuw24RZcQ1VLKTCbiMf9MKfd+I=\");\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first, last, bio, company, twitterHandle, favorite, onFavoriteToggle: onFavoriteToggle1 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle1\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker, updateRecord } = param;\n    _s2();\n    const { showSessions } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext___WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    const { id, first, last, sessions } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerProvider, {\n        speaker: speaker,\n        updateRecord: updateRecord,\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-height p-4 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                                id: id,\n                                first: first,\n                                last: last\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                                ...speaker,\n                                onFavoriteToggle: onFavoriteToggle\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                        sessions: sessions\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                        lineNumber: 124,\n                        columnNumber: 34\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaonaleye/Desktop/Event site/src/components/Speaker.js\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this);\n}\n_s2(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUM0QjtBQUNJO0FBRTdFLFNBQVNLLFFBQVEsS0FBZTtRQUFmLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQWY7SUFDZixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7WUFDYkg7WUFBTTswQkFBQyw4REFBQ0k7O29CQUFPO29CQUFPSCxLQUFLSSxJQUFJOzs7Ozs7Ozs7Ozs7O0FBR3RDO0tBTlNOO0FBUVQsU0FBU08sU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ2hCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdkLGlEQUFVQSxDQUFDRSxpRkFBb0JBO0lBQ3JELHFCQUNFLDhEQUFDYTtRQUFJTixXQUFVO2tCQUNaSSxTQUNFRyxNQUFNLENBQUMsU0FBVUMsT0FBTztZQUN2QixPQUFPQSxRQUFRSCxTQUFTLEtBQUtBO1FBQy9CLEdBQ0NJLEdBQUcsQ0FBQyxTQUFVRCxPQUFPO1lBQ3BCLHFCQUNFLDhEQUFDRjtnQkFBSU4sV0FBVTswQkFDYiw0RUFBQ0o7b0JBQVMsR0FBR1ksT0FBTzs7Ozs7O2VBRGNBLFFBQVFFLEVBQUU7Ozs7O1FBSWxEOzs7Ozs7QUFHUjtHQWpCU1A7TUFBQUE7QUFtQlQsU0FBU1EsYUFBYSxLQUFtQjtRQUFuQixFQUFFRCxFQUFFLEVBQUVFLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQW5CO0lBQ3BCLHFCQUNFLDhEQUFDUDtRQUFJTixXQUFVO2tCQUNiLDRFQUFDYztZQUNDZCxXQUFVO1lBQ1ZlLEtBQUssbUJBQXNCLE9BQUhMLElBQUc7WUFDM0JNLE9BQU07WUFDTkMsS0FBSyxHQUFZSixPQUFURCxPQUFNLEtBQVEsT0FBTEM7Ozs7Ozs7Ozs7O0FBSXpCO01BWFNGO0FBYVQsTUFBTU8sa0JBQWtCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxrQkFBQUEsaUJBQWdCLEVBQUU7O0lBQ3JELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUc5QiwrQ0FBUUEsQ0FBQztJQUNqRCxTQUFTK0I7UUFDUEQsZ0JBQWdCO0lBQ2xCO0lBQ0EscUJBQ0UsOERBQUNoQjtRQUFJTixXQUFVO2tCQUNiLDRFQUFDRDtZQUNDeUIsU0FBUztnQkFDUEYsZ0JBQWdCO2dCQUNoQixPQUFPRixrQkFBaUJHO1lBQzFCOzs4QkFFQSw4REFBQ0U7b0JBQ0N6QixXQUNFbUIsYUFBYSxPQUFPLHNCQUFzQjs7Ozs7O2dCQUUzQztnQkFBSTtnQkFDRTtnQkFDUkUsNkJBQ0MsOERBQUN0QjtvQkFBS0MsV0FBVTs7Ozs7Z0NBQ2Q7Ozs7Ozs7Ozs7OztBQUlaO0lBekJNa0I7TUFBQUE7QUEyQk4sU0FBU1Esb0JBQW9CLEtBUTVCO1FBUjRCLEVBQzNCZCxLQUFLLEVBQ0xDLElBQUksRUFDSmMsR0FBRyxFQUNIQyxPQUFPLEVBQ1BDLGFBQWEsRUFDYlYsUUFBUSxFQUNSQyxrQkFBQUEsaUJBQWdCLEVBQ2pCLEdBUjRCO0lBUzNCLHFCQUNFLDhEQUFDZDtRQUFJTixXQUFVOzswQkFDYiw4REFBQ007Z0JBQUlOLFdBQVU7MEJBQ2IsNEVBQUM4QjtvQkFBRzlCLFdBQVU7O3dCQUNYWTt3QkFBTTt3QkFBRUM7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ0s7Z0JBQ0NDLFVBQVVBO2dCQUNWQyxrQkFBa0JBOzs7Ozs7MEJBRXBCLDhEQUFDZDs7a0NBQ0MsOERBQUN5Qjt3QkFBRS9CLFdBQVU7a0NBQW9CMkI7Ozs7OztrQ0FDakMsOERBQUNyQjt3QkFBSU4sV0FBVTs7MENBQ2IsOERBQUNNO2dDQUFJTixXQUFVOztrREFDYiw4REFBQ2dDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFJTDs7Ozs7Ozs7Ozs7OzBDQUVQLDhEQUFDdEI7Z0NBQUlOLFdBQVU7O2tEQUNiLDhEQUFDZ0M7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUlKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7TUFuQ1NIO0FBcUNULFNBQVNRLFFBQVEsS0FBeUI7UUFBekIsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUUsR0FBekI7O0lBQ2YsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRzlDLGlEQUFVQSxDQUFDRSxpRkFBb0JBO0lBQ3hELE1BQU0sRUFBRWlCLEVBQUUsRUFBRUUsS0FBSyxFQUFFQyxJQUFJLEVBQUVULFFBQVEsRUFBRSxHQUFHK0I7SUFFdEMscUJBQ0UsOERBQUN4QyxxRUFBZUE7UUFBQ3dDLFNBQVNBO1FBQVNDLGNBQWNBOztZQUM5QzswQkFDRCw4REFBQzlCO2dCQUFJTixXQUFVOztrQ0FDYiw4REFBQ007d0JBQUlOLFdBQVU7OzBDQUNiLDhEQUFDVztnQ0FBYUQsSUFBSUE7Z0NBQUlFLE9BQU9BO2dDQUFPQyxNQUFNQTs7Ozs7OzBDQUMxQyw4REFBQ2E7Z0NBQ0UsR0FBR1MsT0FBTztnQ0FDWGYsa0JBQWtCQTs7Ozs7Ozs7Ozs7O29CQUdyQmlCLGlCQUFpQixxQkFBTyw4REFBQ2xDO3dCQUFTQyxVQUFVQTs7Ozs7K0JBQWU7Ozs7Ozs7Ozs7Ozs7QUFJcEU7SUFuQlM4QjtNQUFBQTtBQXFCVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0LlwiO1xuaW1wb3J0IHsgU3BlYWtlckNvbnRleHQsIFNwZWFrZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoeyBzZXNzaW9ucyB9KSB7XG4gIGNvbnN0IHsgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgICAge3Nlc3Npb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIiBrZXk9e3Nlc3Npb24uaWR9PlxuICAgICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoeyBpZCwgZmlyc3QsIGxhc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTcGVha2VyRmF2b3JpdGUgPSAoeyBmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZSB9KSA9PiB7XG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIG9uRmF2b3JpdGVUb2dnbGUoZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtcbiAgZmlyc3QsXG4gIGxhc3QsXG4gIGJpbyxcbiAgY29tcGFueSxcbiAgdHdpdHRlckhhbmRsZSxcbiAgZmF2b3JpdGUsXG4gIG9uRmF2b3JpdGVUb2dnbGUsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BlYWtlckZhdm9yaXRlXG4gICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cbiAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyKHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkIH0pIHtcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XG5cbiAgcmV0dXJuIChcbiAgICA8U3BlYWtlclByb3ZpZGVyIHNwZWFrZXI9e3NwZWFrZXJ9IHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfT5cbiAgICAgIHtcIiBcIn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XG4gICAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3NcbiAgICAgICAgICAgIHsuLi5zcGVha2VyfVxuICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvU3BlYWtlclByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlckNvbnRleHQiLCJTcGVha2VyUHJvdmlkZXIiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZXZlbnRZZWFyIiwiZGl2IiwiZmlsdGVyIiwic2Vzc2lvbiIsIm1hcCIsImlkIiwiU3BlYWtlckltYWdlIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJvbkNsaWNrIiwiaSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic3BlYWtlciIsInVwZGF0ZVJlY29yZCIsInNob3dTZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.tsx":
/*!**************************!*\
  !*** ./pages/search.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_AlumniCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AlumniCard */ \"./components/AlumniCard.tsx\");\n/* harmony import */ var _barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2!=!lucide-react */ \"__barrel_optimize__?names=Loader2!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Search() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { q } = router.query;\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [randomAlumni, setRandomAlumni] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [randomLoading, setRandomLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [randomError, setRandomError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isFallback, setIsFallback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchResults = async ()=>{\n            if (q) {\n                setLoading(true);\n                setError(null);\n                try {\n                    const response = await fetch(\"/api/search?q=\".concat(encodeURIComponent(q)));\n                    const data = await response.json();\n                    if (response.ok) {\n                        setResults(data.data);\n                        setIsFallback(data.fallback);\n                        if (data.data.length === 0) {\n                            setRandomLoading(true);\n                            const randomResponse = await fetch(\"/api/random-alumni\");\n                            const randomData = await randomResponse.json();\n                            if (randomResponse.ok) {\n                                setRandomAlumni(randomData.data);\n                            } else {\n                                setRandomError(randomData.error || \"Failed to fetch random alumni\");\n                            }\n                            setRandomLoading(false);\n                        }\n                    } else {\n                        setError(data.error || \"An unexpected error occurred.\");\n                    }\n                } catch (err) {\n                    setError(err.message || \"An unexpected error occurred.\");\n                } finally{\n                    setLoading(false);\n                }\n            }\n        };\n        fetchResults();\n    }, [\n        q\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: [\n                        'Search Results for \"',\n                        q,\n                        '\"'\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center h-64\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_5__.Loader2, {\n                        className: \"w-8 h-8 animate-spin text-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\",\n                    role: \"alert\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            className: \"font-bold\",\n                            children: \"Error: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block sm:inline\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        isFallback && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-yellow-600 mb-4\",\n                            children: \"Note: We're currently using a basic search due to high demand. Results may be less accurate.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, this),\n                        results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                            children: results.map((alumni)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AlumniCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    alumni: alumni\n                                }, alumni.id, false, {\n                                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 text-center py-8\",\n                                    children: \"No results found. Here are two random alumni profiles:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 17\n                                }, this),\n                                randomLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center items-center h-64\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_5__.Loader2, {\n                                        className: \"w-8 h-8 animate-spin text-blue-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, this) : randomError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\",\n                                    role: \"alert\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            className: \"font-bold\",\n                                            children: \"Error: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"block sm:inline\",\n                                            children: randomError\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 19\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-1 md:grid-cols-2 gap-4\",\n                                    children: randomAlumni.map((alumni)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AlumniCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            alumni: alumni\n                                        }, alumni.id, false, {\n                                            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 23\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ericmao/Documents/VScode/DPHacks/CoffeeChat/pages/search.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"pVF+F48RIspiQnAbonLDULlec0U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2IsNEVBQUNqQyxnRkFBT0E7d0NBQUNpQyxXQUFVOzs7Ozs7Ozs7OzJDQUVuQmxCLDRCQUNGLDhEQUFDaUI7b0NBQUlDLFdBQVU7b0NBQTJFRSxNQUFLOztzREFDN0YsOERBQUNDOzRDQUFPSCxXQUFVO3NEQUFZOzs7Ozs7c0RBQzlCLDhEQUFDSTs0Q0FBS0osV0FBVTtzREFBbUJsQjs7Ozs7Ozs7Ozs7eURBR3JDLDhEQUFDaUI7b0NBQUlDLFdBQVU7OENBQ1oxQixhQUFhZ0MsR0FBRyxDQUFDLENBQUNDLHVCQUNqQiw4REFBQ3pDLDhEQUFVQTs0Q0FBaUJ5QyxRQUFRQTsyQ0FBbkJBLE9BQU9DLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaEQ7R0FuR3dCeEM7O1FBQ1BKLGtEQUFTQTs7O0tBREZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC50c3g/YzNiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWx1bW5pQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0FsdW1uaUNhcmQnO1xuaW1wb3J0IHsgQWx1bW5pUHJvZmlsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IExvYWRlcjIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHEgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8QWx1bW5pUHJvZmlsZVtdPihbXSk7XG4gIGNvbnN0IFtyYW5kb21BbHVtbmksIHNldFJhbmRvbUFsdW1uaV0gPSB1c2VTdGF0ZTxBbHVtbmlQcm9maWxlW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtyYW5kb21Mb2FkaW5nLCBzZXRSYW5kb21Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JhbmRvbUVycm9yLCBzZXRSYW5kb21FcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzRmFsbGJhY2ssIHNldElzRmFsbGJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHEpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxIGFzIHN0cmluZyl9YCk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHNldFJlc3VsdHMoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIHNldElzRmFsbGJhY2soZGF0YS5mYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBzZXRSYW5kb21Mb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICBjb25zdCByYW5kb21SZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JhbmRvbS1hbHVtbmknKTtcbiAgICAgICAgICAgICAgY29uc3QgcmFuZG9tRGF0YSA9IGF3YWl0IHJhbmRvbVJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgaWYgKHJhbmRvbVJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgc2V0UmFuZG9tQWx1bW5pKHJhbmRvbURhdGEuZGF0YSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UmFuZG9tRXJyb3IocmFuZG9tRGF0YS5lcnJvciB8fCAnRmFpbGVkIHRvIGZldGNoIHJhbmRvbSBhbHVtbmknKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXRSYW5kb21Mb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvciB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UgfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hSZXN1bHRzKCk7XG4gIH0sIFtxXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+U2VhcmNoIFJlc3VsdHMgZm9yIFwie3F9XCI8L2gxPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtNjRcIj5cbiAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctOCBoLTggYW5pbWF0ZS1zcGluIHRleHQtYmx1ZS01MDBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIGJvcmRlciBib3JkZXItcmVkLTQwMCB0ZXh0LXJlZC03MDAgcHgtNCBweS0zIHJvdW5kZWQgcmVsYXRpdmVcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I6IDwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgc206aW5saW5lXCI+e2Vycm9yfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2lzRmFsbGJhY2sgJiYgKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy02MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgIE5vdGU6IFdlJ3JlIGN1cnJlbnRseSB1c2luZyBhIGJhc2ljIHNlYXJjaCBkdWUgdG8gaGlnaCBkZW1hbmQuIFJlc3VsdHMgbWF5IGJlIGxlc3MgYWNjdXJhdGUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cmVzdWx0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAoKGFsdW1uaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEFsdW1uaUNhcmQga2V5PXthbHVtbmkuaWR9IGFsdW1uaT17YWx1bW5pfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlciBweS04XCI+Tm8gcmVzdWx0cyBmb3VuZC4gSGVyZSBhcmUgdHdvIHJhbmRvbSBhbHVtbmkgcHJvZmlsZXM6PC9wPlxuICAgICAgICAgICAgICAgIHtyYW5kb21Mb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTY0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctOCBoLTggYW5pbWF0ZS1zcGluIHRleHQtYmx1ZS01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IHJhbmRvbUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIGJvcmRlciBib3JkZXItcmVkLTQwMCB0ZXh0LXJlZC03MDAgcHgtNCBweS0zIHJvdW5kZWQgcmVsYXRpdmVcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHNtOmlubGluZVwiPntyYW5kb21FcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyYW5kb21BbHVtbmkubWFwKChhbHVtbmkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8QWx1bW5pQ2FyZCBrZXk9e2FsdW1uaS5pZH0gYWx1bW5pPXthbHVtbml9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJBbHVtbmlDYXJkIiwiTG9hZGVyMiIsIlNlYXJjaCIsInJvdXRlciIsInEiLCJxdWVyeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwicmFuZG9tQWx1bW5pIiwic2V0UmFuZG9tQWx1bW5pIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyYW5kb21Mb2FkaW5nIiwic2V0UmFuZG9tTG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyYW5kb21FcnJvciIsInNldFJhbmRvbUVycm9yIiwiaXNGYWxsYmFjayIsInNldElzRmFsbGJhY2siLCJmZXRjaFJlc3VsdHMiLCJyZXNwb25zZSIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0YSIsImpzb24iLCJvayIsImZhbGxiYWNrIiwibGVuZ3RoIiwicmFuZG9tUmVzcG9uc2UiLCJyYW5kb21EYXRhIiwiZXJyIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicm9sZSIsInN0cm9uZyIsInNwYW4iLCJwIiwibWFwIiwiYWx1bW5pIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.tsx\n"));

/***/ })

});
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [addItem, setAddItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [updateItem, setUpdateItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isEditMode, setIsEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isEditMode) {\n            setUpdateItem(selectedTask);\n        } else {\n            setUpdateItem(\"\");\n        }\n    }, [\n        isEditMode,\n        selectedTask\n    ]);\n    function removeItems(taskName) {\n        setTasks(tasks.filter((task)=>task !== taskName));\n    }\n    function AddItems() {\n        if (addItem !== \"\" && !tasks.includes(addItem)) {\n            setTasks([\n                ...tasks,\n                addItem\n            ]);\n            setAddItem(\"\");\n        }\n    }\n    function editTask(taskName) {\n        setSelectedTask(taskName);\n        setIsEditMode(true);\n    }\n    function updateTask(updatedTask) {\n        setTasks(tasks.map((task)=>task === selectedTask ? updatedTask : task));\n        setSelectedTask(\"\");\n        setIsEditMode(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Container, {\n                gap: 1,\n                justify: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    xs: 12,\n                    md: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {\n                                css: {\n                                    justifyContent: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    b: true,\n                                    children: \"ToDo List\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card.Divider, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                                children: [\n                                    tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            children: [\n                                                task,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                                                    justify: \"flex-end\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                                            ml: 10,\n                                                            ur: 20,\n                                                            size: \"small\",\n                                                            css: {\n                                                                padding: \"0.5rem 1rem\",\n                                                                marginRight: \"0.5rem\"\n                                                            },\n                                                            onClick: ()=>removeItems(task),\n                                                            color: \"gradient\",\n                                                            children: \"Remove Task\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                                            size: \"small\",\n                                                            css: {\n                                                                padding: \"0.5rem 1rem\"\n                                                            },\n                                                            onClick: ()=>editTask(task),\n                                                            color: \"gradient\",\n                                                            children: \"Edit Task\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, task.index, true, {\n                                            fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, this)),\n                                    isEditMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                        css: {\n                                            maxWidth: \"330px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                                    placeholder: \"Updated Item Name\",\n                                                    value: updateItem,\n                                                    onChange: (e)=>setUpdateItem(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                                    ml: 10,\n                                                    color: \"gradient\",\n                                                    onClick: ()=>updateTask(updateItem),\n                                                    children: \"Update\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 13\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                        placeholder: \"Task Name\",\n                                        value: addItem,\n                                        onChange: (e)=>{\n                                            setAddItem(e.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        ml: 10,\n                                        onClick: AddItems,\n                                        color: \"gradient\",\n                                        children: \"Add Item\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card.Divider, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Card.Footer, {\n                                css: {\n                                    justifyContent: \"center\"\n                                },\n                                children: \"Made By Abhinav Kar ❤️\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Abhinav Kar\\\\Desktop\\\\nextjsLearn\\\\todolist\\\\todolist\\\\pages\\\\index.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"kMjTAOhgWy00TvuWSZbbKR9q+ZA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtBO3dDQUNKK0MsYUFBWTt3Q0FDWkMsT0FBTzFDO3dDQUNQMkMsVUFBVSxDQUFDQzs0Q0FDVDNDLFdBQVcyQyxFQUFFQyxPQUFPSDt3Q0FDdEI7Ozs7OztrREFFRiw4REFBQ2xELHFEQUFNQTt3Q0FBQ3dDLElBQUk7d0NBQUlLLFNBQVN6Qjt3Q0FBVTBCLE9BQU07a0RBQVc7Ozs7Ozs7Ozs7OzswQ0FLdEQsOERBQUNqRCxtREFBSUEsQ0FBQ3lDOzs7OzswQ0FDTiw4REFBQ3pDLG1EQUFJQSxDQUFDeUQ7Z0NBQU9uQixLQUFLO29DQUFDQyxnQkFBZTtnQ0FBUTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzRDtHQTVHd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIEdyaWQsIFRleHQsIEJ1dHRvbiwgUm93LCBJbnB1dCB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2FkZEl0ZW0sIHNldEFkZEl0ZW1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1cGRhdGVJdGVtLCBzZXRVcGRhdGVJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRUYXNrLCBzZXRTZWxlY3RlZFRhc2tdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0VkaXRNb2RlLCBzZXRJc0VkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0VkaXRNb2RlKSB7XG4gICAgICBzZXRVcGRhdGVJdGVtKHNlbGVjdGVkVGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVwZGF0ZUl0ZW0oXCJcIik7XG4gICAgfVxuICB9LCBbaXNFZGl0TW9kZSwgc2VsZWN0ZWRUYXNrXSk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSXRlbXModGFza05hbWUpIHtcbiAgICBzZXRUYXNrcyh0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sgIT09IHRhc2tOYW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiBBZGRJdGVtcygpIHtcbiAgICBpZiAoYWRkSXRlbSAhPT0gXCJcIiAmJiAhdGFza3MuaW5jbHVkZXMoYWRkSXRlbSkpIHtcbiAgICAgIHNldFRhc2tzKFsuLi50YXNrcywgYWRkSXRlbV0pO1xuICAgICAgc2V0QWRkSXRlbShcIlwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VGFzayh0YXNrTmFtZSkge1xuICAgIHNldFNlbGVjdGVkVGFzayh0YXNrTmFtZSk7XG4gICAgc2V0SXNFZGl0TW9kZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhc2sodXBkYXRlZFRhc2spIHtcbiAgICBzZXRUYXNrcyh0YXNrcy5tYXAoKHRhc2spID0+ICh0YXNrID09PSBzZWxlY3RlZFRhc2sgPyB1cGRhdGVkVGFzayA6IHRhc2spKSk7XG4gICAgc2V0U2VsZWN0ZWRUYXNrKFwiXCIpO1xuICAgIHNldElzRWRpdE1vZGUoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgIDxHcmlkLkNvbnRhaW5lciBnYXA9ezF9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8R3JpZCB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgY3NzPXt7anVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxUZXh0IGI+VG9EbyBMaXN0PC9UZXh0PlxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZC5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRleHQga2V5PXt0YXNrLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge3Rhc2t9XG4gICAgICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgbWw9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXI9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17eyBwYWRkaW5nOiBcIjAuNXJlbSAxcmVtXCIsIG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtcyh0YXNrKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBUYXNrXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17eyBwYWRkaW5nOiBcIjAuNXJlbSAxcmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRUYXNrKHRhc2spfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmFkaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBUYXNrXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtpc0VkaXRNb2RlICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGNzcz17eyBtYXhXaWR0aDogXCIzMzBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVcGRhdGVkIEl0ZW0gTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXBkYXRlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBkYXRlSXRlbShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gbWw9ezEwfSBjb2xvcj1cImdyYWRpZW50XCIgb25DbGljaz17KCkgPT4gdXBkYXRlVGFzayh1cGRhdGVJdGVtKX0+XG4gICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICl9XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhc2sgTmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkSXRlbX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRBZGRJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG1sPXsxMH0gb25DbGljaz17QWRkSXRlbXN9IGNvbG9yPVwiZ3JhZGllbnRcIj5cbiAgICAgICAgICAgICAgICAgIEFkZCBJdGVtXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICA8Q2FyZC5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxDYXJkLkZvb3RlciBjc3M9e3tqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+TWFkZSBCeSBBYmhpbmF2IEthciDinaTvuI88L0NhcmQuRm9vdGVyPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkLkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiR3JpZCIsIlRleHQiLCJCdXR0b24iLCJSb3ciLCJJbnB1dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInRhc2tzIiwic2V0VGFza3MiLCJhZGRJdGVtIiwic2V0QWRkSXRlbSIsInVwZGF0ZUl0ZW0iLCJzZXRVcGRhdGVJdGVtIiwic2VsZWN0ZWRUYXNrIiwic2V0U2VsZWN0ZWRUYXNrIiwiaXNFZGl0TW9kZSIsInNldElzRWRpdE1vZGUiLCJyZW1vdmVJdGVtcyIsInRhc2tOYW1lIiwiZmlsdGVyIiwidGFzayIsIkFkZEl0ZW1zIiwiaW5jbHVkZXMiLCJlZGl0VGFzayIsInVwZGF0ZVRhc2siLCJ1cGRhdGVkVGFzayIsIm1hcCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJDb250YWluZXIiLCJnYXAiLCJqdXN0aWZ5IiwieHMiLCJtZCIsIkhlYWRlciIsImNzcyIsImp1c3RpZnlDb250ZW50IiwiYiIsIkRpdmlkZXIiLCJCb2R5IiwibWwiLCJ1ciIsInNpemUiLCJwYWRkaW5nIiwibWFyZ2luUmlnaHQiLCJvbkNsaWNrIiwiY29sb3IiLCJpbmRleCIsIm1heFdpZHRoIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIkZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
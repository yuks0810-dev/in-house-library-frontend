"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 88971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./components/layout.tsx


const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                className: "flex flex-rows p-2 bg-red-500 text-white font-bold",
                children: /*#__PURE__*/ jsx_runtime.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "Home"
                    })
                })
            }),
            children
        ]
    }));
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx


function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 34208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);


const MyDocument = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "ja-JP",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "application-name",
                    content: "MyApp"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                style: {
                    background: "#F8F8F8"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/iukW0g2TWEld1MgxkY9Qs/_buildManifest.js","static/iukW0g2TWEld1MgxkY9Qs/_ssgManifest.js","static/iukW0g2TWEld1MgxkY9Qs/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-883db370285692a4.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/490-ef212eabf1a6c76b.js","static/chunks/pages/index-ff8a61c56a2628ef.js"],"/_app":["static/chunks/webpack-883db370285692a4.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/_app-329b15a9a7f246de.js"],"/_error":["static/chunks/webpack-883db370285692a4.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/_error-2280fa386d040b66.js"],"/about":["static/chunks/webpack-883db370285692a4.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/about-57db232ed34cda84.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;
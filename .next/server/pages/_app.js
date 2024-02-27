(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5954:
/***/ ((module) => {

// Exports
module.exports = {
	"bottomBar": "Bottombar_bottomBar__QVIne",
	"icon": "Bottombar_icon__zdqmH",
	"container": "Bottombar_container__v_l0M",
	"section": "Bottombar_section___NTJA"
};


/***/ }),

/***/ 6883:
/***/ ((module) => {

// Exports
module.exports = {
	"explorer": "Explorer_explorer__MYKPT",
	"title": "Explorer_title__SAx86",
	"heading": "Explorer_heading__YLwUA",
	"checkbox": "Explorer_checkbox__K21K5",
	"files": "Explorer_files__1BcBi",
	"file": "Explorer_file__Strqx",
	"chevron": "Explorer_chevron__PFE0_"
};


/***/ }),

/***/ 9180:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Layout_main__c1pHS",
	"content": "Layout_content__RNbd0"
};


/***/ }),

/***/ 6995:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "Sidebar_sidebar__gyKt1",
	"iconContainer": "Sidebar_iconContainer__r8abM",
	"active": "Sidebar_active__5C3S5",
	"icon": "Sidebar_icon__czDJe"
};


/***/ }),

/***/ 4531:
/***/ ((module) => {

// Exports
module.exports = {
	"tab": "Tab_tab__oZcQ_",
	"active": "Tab_active__n8qKl"
};


/***/ }),

/***/ 321:
/***/ ((module) => {

// Exports
module.exports = {
	"tabs": "Tabsbar_tabs__A5mro"
};


/***/ }),

/***/ 7050:
/***/ ((module) => {

// Exports
module.exports = {
	"titlebar": "Titlebar_titlebar__qF029",
	"items": "Titlebar_items__kiyGW",
	"title": "Titlebar_title__JRI8S",
	"windowButtons": "Titlebar_windowButtons__fwpk_",
	"minimize": "Titlebar_minimize__lFuJ1",
	"maximize": "Titlebar_maximize__hjViL",
	"close": "Titlebar_close__32yPf"
};


/***/ }),

/***/ 6533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Titlebar.module.css
var Titlebar_module = __webpack_require__(7050);
var Titlebar_module_default = /*#__PURE__*/__webpack_require__.n(Titlebar_module);
;// CONCATENATED MODULE: ./components/Titlebar.jsx



const Titlebar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Titlebar_module_default()).titlebar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: "/vscode_icon.svg",
                alt: "VSCode Icon",
                height: 15,
                width: 15,
                className: (Titlebar_module_default()).icon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Titlebar_module_default()).items,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "File"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Edit"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "View"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Go"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Run"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Terminal"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Help"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Titlebar_module_default()).title,
                children: "Wahab Sharif - Visual Studio Code"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Titlebar_module_default()).windowButtons,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Titlebar_module_default()).minimize
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Titlebar_module_default()).maximize
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Titlebar_module_default()).close
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Titlebar = (Titlebar);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/icons/FilesIcon.jsx

const FilesIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"
        })
    }));
};
/* harmony default export */ const icons_FilesIcon = (FilesIcon);

;// CONCATENATED MODULE: ./components/icons/GithubIcon.jsx

const GithubIcon = (props)=>{
    return(/*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"
        })
    }));
};
/* harmony default export */ const icons_GithubIcon = ((/* unused pure expression or super */ null && (GithubIcon)));

;// CONCATENATED MODULE: ./components/icons/CodeIcon.jsx

const CodeIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"
        })
    }));
};
/* harmony default export */ const icons_CodeIcon = (CodeIcon);

;// CONCATENATED MODULE: ./components/icons/PencilIcon.jsx

const PencilIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"
        })
    }));
};
/* harmony default export */ const icons_PencilIcon = (PencilIcon);

;// CONCATENATED MODULE: ./components/icons/MailIcon.jsx

const MailIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"
        })
    }));
};
/* harmony default export */ const icons_MailIcon = (MailIcon);

;// CONCATENATED MODULE: ./components/icons/AccountIcon.jsx

const AccountIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 01.416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 018 10.342a4.185 4.185 0 012.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 018 14.993zm-2.448-7.4a2.49 2.49 0 01-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 01-.576.848 2.84 2.84 0 01-.848.575 2.715 2.715 0 01-2.064 0 2.84 2.84 0 01-.848-.575 2.526 2.526 0 01-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 00-.688-1.406 4.883 4.883 0 00-1.088-1.135 5.207 5.207 0 00-1.04-.608 2.82 2.82 0 00.464-.383 4.2 4.2 0 00.624-.784 3.624 3.624 0 00.528-1.934 3.71 3.71 0 00-.288-1.47 3.799 3.799 0 00-.816-1.199 3.845 3.845 0 00-1.2-.8 3.72 3.72 0 00-1.472-.287 3.72 3.72 0 00-1.472.288 3.631 3.631 0 00-1.2.815 3.84 3.84 0 00-.8 1.199 3.71 3.71 0 00-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 00-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 00-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 01-2.032 4.907z"
        })
    }));
};
/* harmony default export */ const icons_AccountIcon = (AccountIcon);

;// CONCATENATED MODULE: ./components/icons/SettingsIcon.jsx

const SettingsIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z"
        })
    }));
};
/* harmony default export */ const icons_SettingsIcon = (SettingsIcon);

// EXTERNAL MODULE: ./styles/Sidebar.module.css
var Sidebar_module = __webpack_require__(6995);
var Sidebar_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_module);
;// CONCATENATED MODULE: ./components/Sidebar.jsx











const sidebarTopItems = [
    {
        Icon: icons_FilesIcon,
        path: "/"
    },
    // {
    //   Icon: GithubIcon,
    //   path: "/github",
    // },
    {
        Icon: icons_PencilIcon,
        path: "/about"
    },
    {
        Icon: icons_CodeIcon,
        path: "/projects"
    },
    {
        Icon: icons_MailIcon,
        path: "/contact"
    }, 
];
const sidebarBottomItems = [
    {
        Icon: icons_AccountIcon,
        path: "/about"
    },
    {
        Icon: icons_SettingsIcon,
        path: "/settings"
    }, 
];
const Sidebar = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (Sidebar_module_default()).sidebar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Sidebar_module_default()).sidebarTop,
                children: sidebarTopItems.map(({ Icon , path  })=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(Sidebar_module_default()).iconContainer} ${router.pathname === path && (Sidebar_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                fill: router.pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)",
                                className: (Sidebar_module_default()).icon
                            })
                        })
                    }, path)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Sidebar_module_default()).sidebarBottom,
                children: sidebarBottomItems.map(({ Icon , path  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Sidebar_module_default()).iconContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: path,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                fill: router.pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)",
                                className: (Sidebar_module_default()).icon
                            })
                        }, path)
                    })
                )
            })
        ]
    }));
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./components/icons/ChevronRight.jsx

const ChevronRight = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
        })
    }));
};
/* harmony default export */ const icons_ChevronRight = (ChevronRight);

// EXTERNAL MODULE: ./styles/Explorer.module.css
var Explorer_module = __webpack_require__(6883);
var Explorer_module_default = /*#__PURE__*/__webpack_require__.n(Explorer_module);
;// CONCATENATED MODULE: ./components/Explorer.jsx






const explorerItems = [
    {
        name: "home.jsx",
        path: "/",
        icon: "react_icon.svg"
    },
    {
        name: "about.html",
        path: "/about",
        icon: "html_icon.svg"
    },
    {
        name: "projects.js",
        path: "/projects",
        icon: "js_icon.svg"
    },
    {
        name: "contact.css",
        path: "/contact",
        icon: "css_icon.svg"
    }, 
];
const Explorer = ()=>{
    const { 0: portfolioOpen , 1: setPortfolioOpen  } = (0,external_react_.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Explorer_module_default()).explorer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Explorer_module_default()).title,
                children: "Explorer"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "checkbox",
                        className: (Explorer_module_default()).checkbox,
                        id: "portfolio-checkbox",
                        checked: portfolioOpen,
                        onChange: ()=>setPortfolioOpen(!portfolioOpen)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "portfolio-checkbox",
                        className: (Explorer_module_default()).heading,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_ChevronRight, {
                                className: (Explorer_module_default()).chevron,
                                style: portfolioOpen ? {
                                    transform: "rotate(90deg)"
                                } : {
                                }
                            }),
                            "Portfolio"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Explorer_module_default()).files,
                        style: portfolioOpen ? {
                            display: "block"
                        } : {
                            display: "none"
                        },
                        children: explorerItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: item.path,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Explorer_module_default()).file,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: `/${item.icon}`,
                                            alt: item.name,
                                            height: 18,
                                            width: 18
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: item.name
                                        })
                                    ]
                                })
                            }, item.name)
                        )
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Explorer = (Explorer);

;// CONCATENATED MODULE: ./components/icons/ErrorIcon.jsx

const ErrorIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"
        })
    }));
};
/* harmony default export */ const icons_ErrorIcon = (ErrorIcon);

;// CONCATENATED MODULE: ./components/icons/WarningIcon.jsx

const WarningIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"
        })
    }));
};
/* harmony default export */ const icons_WarningIcon = (WarningIcon);

;// CONCATENATED MODULE: ./components/icons/BellIcon.jsx

const BellIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M13.377 10.573a7.63 7.63 0 01-.383-2.38V6.195a5.115 5.115 0 00-1.268-3.446 5.138 5.138 0 00-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 00-1.208 1.675 5.067 5.067 0 00-.431 2.022v2.2a7.61 7.61 0 01-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 01-.705.299.997.997 0 01-.706-.3.997.997 0 01-.3-.705h1.999a.939.939 0 01-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 00.443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 012.597 1.4 4.133 4.133 0 011.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"
        })
    }));
};
/* harmony default export */ const icons_BellIcon = (BellIcon);

;// CONCATENATED MODULE: ./components/icons/CheckIcon.jsx

const CheckIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 16,
        height: 16,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.62 3.596 7.815 12.81l-.728-.033L4 8.382l.754-.53 2.744 3.907L14.917 3l.703.596z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m7.234 8.774 4.386-5.178L10.917 3l-4.23 4.994.547.78zm-1.55.403.548.78-.547-.78zm-1.617 1.91.547.78-.799.943-.728-.033L0 8.382l.754-.53 2.744 3.907.57-.672z"
            })
        ]
    }));
};
/* harmony default export */ const icons_CheckIcon = (CheckIcon);

;// CONCATENATED MODULE: ./components/icons/SourceControlIcon.jsx

const SourceControlIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 14,
        fill: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"
        })
    }));
};
/* harmony default export */ const icons_SourceControlIcon = (SourceControlIcon);

// EXTERNAL MODULE: ./styles/Bottombar.module.css
var Bottombar_module = __webpack_require__(5954);
var Bottombar_module_default = /*#__PURE__*/__webpack_require__.n(Bottombar_module);
;// CONCATENATED MODULE: ./components/Bottombar.jsx







const Bottombar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Bottombar_module_default()).bottomBar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Bottombar_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "https://github.com/wahabsharif",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: (Bottombar_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_SourceControlIcon, {
                                className: (Bottombar_module_default()).icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "main"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Bottombar_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_ErrorIcon, {
                                className: (Bottombar_module_default()).icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Bottombar_module_default()).errorText,
                                children: "0"
                            }),
                            "\xa0\xa0",
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_WarningIcon, {
                                className: (Bottombar_module_default()).icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "0"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Bottombar_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Bottombar_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_CheckIcon, {
                                className: (Bottombar_module_default()).icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Prettier"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Bottombar_module_default()).section,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_BellIcon, {
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Bottombar = (Bottombar);

// EXTERNAL MODULE: ./styles/Tab.module.css
var Tab_module = __webpack_require__(4531);
var Tab_module_default = /*#__PURE__*/__webpack_require__.n(Tab_module);
;// CONCATENATED MODULE: ./components/Tab.jsx





const Tab = ({ icon , filename , path  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: path,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(Tab_module_default()).tab} ${router.pathname === path && (Tab_module_default()).active}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: icon,
                    alt: filename,
                    height: 18,
                    width: 18
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: filename
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Tab = (Tab);

// EXTERNAL MODULE: ./styles/Tabsbar.module.css
var Tabsbar_module = __webpack_require__(321);
var Tabsbar_module_default = /*#__PURE__*/__webpack_require__.n(Tabsbar_module);
;// CONCATENATED MODULE: ./components/Tabsbar.jsx



const Tabsbar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Tabsbar_module_default()).tabs,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Tab, {
                icon: "/react_icon.svg",
                filename: "home.jsx",
                path: "/"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Tab, {
                icon: "/html_icon.svg",
                filename: "about.html",
                path: "/about"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Tab, {
                icon: "/js_icon.svg",
                filename: "projects.js",
                path: "/projects"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Tab, {
                icon: "/css_icon.svg",
                filename: "contact.css",
                path: "/contact"
            })
        ]
    }));
};
/* harmony default export */ const components_Tabsbar = (Tabsbar);

// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(9180);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout.jsx









const Layout = ({ children  })=>{
    // set scroll to top of main content on url pathname change
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const main = document.getElementById('main-editor');
        main.scrollTop = 0;
    }, [
        router.pathname
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Titlebar, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Explorer, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Tabsbar, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                id: "main-editor",
                                className: (Layout_module_default()).content,
                                children: children
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Bottombar, {
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Head.jsx


const CustomHead = ({ title  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Wahab Sharif is an avid web developer building websites and applications you'd love to use"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: "Wahab Sharif, wahab, sharif, web developer portfolio, wahab web developer, wahab developer, mern stack, Wahab Sharif portfolio, vscode-portfolio, front end developer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: "Wahab Sharif's Portfolio"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: "A Web developer building websites that you'd like to use."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: "https://imgur.com/4zi5KkQ.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            })
        ]
    }));
};
/* harmony default export */ const Head = (CustomHead);
CustomHead.defaultProps = {
    title: "Wahab Sharif"
};

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        if (localStorage.getItem("theme")) {
            document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        }
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head, {
                title: `Wahab Sharif ${pageProps.title}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675,664], () => (__webpack_exec__(6533)));
module.exports = __webpack_exports__;

})();
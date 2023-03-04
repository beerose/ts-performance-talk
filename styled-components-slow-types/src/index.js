"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var client_1 = require("react-dom/client");
var react_1 = require("react");
var Button = (0, react_1.memo)((0, styled_components_1["default"])(function (props) {
    var Tag = props.tag, rest = __rest(props, ["tag"]);
    return (0, jsx_runtime_1.jsx)(Tag, __assign({}, rest));
}).attrs(function () { return ({
    type: "button"
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    font: inherit;\n    font-weight: 700;\n\n    padding: ", ";\n\n    font-size: ", ";\n\n    ", "\n  "], ["\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    font: inherit;\n    font-weight: 700;\n\n    padding: ", ";\n\n    font-size: ", ";\n\n    ", "\n  "])), function (_a) {
    var size = _a.size;
    return size === "sm" ? "0.5rem" : "1rem";
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0.75rem" : "1rem");
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "secondary" : _b;
    switch (variant) {
        case "primary":
            return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            background-color: blue;\n            color: white;\n            border: 1px solid transparent;\n            border-radius: 0.5rem;\n\n            :hover {\n              background-color: darkblue;\n            }\n          "], ["\n            background-color: blue;\n            color: white;\n            border: 1px solid transparent;\n            border-radius: 0.5rem;\n\n            :hover {\n              background-color: darkblue;\n            }\n          "])));
        case "secondary":
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            background-color: white;\n            color: black;\n            border: 1px solid black;\n            border-radius: 0.25rem;\n\n            :hover {\n              background-color: lightgray;\n            }\n          "], ["\n            background-color: white;\n            color: black;\n            border: 1px solid black;\n            border-radius: 0.25rem;\n\n            :hover {\n              background-color: lightgray;\n            }\n          "])));
    }
}));
var BigButton = (0, styled_components_1["default"])(Button)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 2rem;\n  padding: 1.5rem;\n  border-radius: 1rem;\n"], ["\n  font-size: 2rem;\n  padding: 1.5rem;\n  border-radius: 1rem;\n"])));
var BigButtonAnchor = (0, react_1.memo)((0, styled_components_1["default"])(BigButton.withComponent("a"))(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-decoration: none;\n  display: inline-block;\n  border: 2px solid black;\n  :hover {\n    background-color: lavender;\n  }\n  :after {\n    content: \" \u2192\";\n  }\n"], ["\n  text-decoration: none;\n  display: inline-block;\n  border: 2px solid black;\n  :hover {\n    background-color: lavender;\n  }\n  :after {\n    content: \" \u2192\";\n  }\n"]))));
var Example = function () { return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    } }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Button, __assign({ tag: "div", size: "md", variant: "primary" }, { children: "Boom" })) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Button, __assign({ tag: true, size: "sm", variant: "secondary" }, { children: "Boom" })) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(BigButton, __assign({ as: "a", href: "/", target: "_blank" }, { children: "Boom" })) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(BigButtonAnchor, __assign({ href: "/", as: function (props) { return (0, jsx_runtime_1.jsx)("a", __assign({}, props)); }, onClick: function (e) {
                    console.log(e);
                } }, { children: "Go somewhere" })) })] }))); };
(0, client_1.createRoot)(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(Example, {}) }));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

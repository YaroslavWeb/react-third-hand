"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linters_3 = void 0;
const react_1 = __importDefault(require("react"));
const ink_multi_select_1 = __importDefault(require("ink-multi-select"));
const ink_1 = require("ink");
const Linters_3 = ({ onSubmit }) => {
    const handleSubmit = (items) => {
        onSubmit(items);
    };
    const items = [
        {
            label: "ESLint",
            value: "eslint",
        },
        {
            label: "StyleLint",
            value: "stylelint",
        },
        {
            label: "Prettier",
            value: "prettier",
        },
        {
            label: "Husky + Lint-Staged",
            value: "h_ls",
        },
        {
            label: "VSCode",
            value: "vscode",
        },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { color: "green" }, "Choose your Package Manager:"),
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, { color: "blue" }, "Enter"),
            react_1.default.createElement(ink_1.Text, { color: "white" }, ": Submit")),
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, { color: "blue" }, "Space"),
            react_1.default.createElement(ink_1.Text, { color: "white" }, ": Select")),
        react_1.default.createElement(ink_multi_select_1.default, { items: items, onSubmit: handleSubmit })));
};
exports.Linters_3 = Linters_3;

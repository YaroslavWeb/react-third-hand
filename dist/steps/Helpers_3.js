"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helpers_3 = void 0;
const react_1 = __importDefault(require("react"));
const ink_multi_select_1 = __importDefault(require("ink-multi-select"));
const ink_1 = require("ink");
const interfaces_1 = require("../interfaces");
const Helpers_3 = ({ onSubmit }) => {
    const handleSubmit = (items) => {
        onSubmit(items);
    };
    const items = [
        {
            label: "ESLint",
            value: interfaces_1.E_Helpers.eslint,
        },
        {
            label: "StyleLint",
            value: interfaces_1.E_Helpers.stylelint,
        },
        {
            label: "Prettier",
            value: interfaces_1.E_Helpers.prettier,
        },
        {
            label: "Husky + Lint-Staged",
            value: interfaces_1.E_Helpers.h_ls,
        },
        {
            label: "VSCode",
            value: interfaces_1.E_Helpers.vscode,
        },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { color: "green" }, "Choose your helpers:"),
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, { color: "blue" }, "Enter"),
            react_1.default.createElement(ink_1.Text, { color: "white" }, ": Submit")),
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, { color: "blue" }, "Space"),
            react_1.default.createElement(ink_1.Text, { color: "white" }, ": Select")),
        react_1.default.createElement(ink_multi_select_1.default, { items: items, defaultSelected: items, onSubmit: handleSubmit })));
};
exports.Helpers_3 = Helpers_3;

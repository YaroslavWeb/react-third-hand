"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageManager_1 = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_select_input_1 = __importDefault(require("ink-select-input"));
const interfaces_1 = require("../interfaces");
const items = [
    {
        label: "yarn",
        value: interfaces_1.E_PackageManager.yarn,
    },
    {
        label: "npm",
        value: interfaces_1.E_PackageManager.npm,
    },
];
const PackageManager_1 = ({ onSelect, }) => {
    const handleSelect = (item) => {
        onSelect(item);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { color: "green" }, "Choose your Package Manager:"),
        react_1.default.createElement(ink_select_input_1.default, { items: items, onSelect: handleSelect }),
        react_1.default.createElement(ink_1.Text, null, "____"),
        react_1.default.createElement(ink_1.Text, { color: "#F07427" }, "Soon:"),
        react_1.default.createElement(ink_1.Text, null, "yarn 2"),
        react_1.default.createElement(ink_1.Text, null, "pnpm")));
};
exports.PackageManager_1 = PackageManager_1;

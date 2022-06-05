"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language_2 = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_select_input_1 = __importDefault(require("ink-select-input"));
const interfaces_1 = require("../interfaces");
const items = [
    {
        label: "TypeScript",
        value: interfaces_1.E_Language.ts,
    },
    {
        label: "JavaScript",
        value: interfaces_1.E_Language.js,
    },
];
const Language_2 = ({ onSelect, }) => {
    const handleSelect = (item) => {
        onSelect(item);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { color: "green" }, "Choose your language:"),
        react_1.default.createElement(ink_select_input_1.default, { items: items, onSelect: handleSelect })));
};
exports.Language_2 = Language_2;

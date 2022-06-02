"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styles_4 = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_select_input_1 = __importDefault(require("ink-select-input"));
const Styles_4 = ({ onSelect, }) => {
    const handleSelect = (item) => {
        onSelect(item);
    };
    const items = [
        {
            label: "Styled Components",
            value: "sc",
        },
        {
            label: "SCSS/SASS",
            value: "scss",
        },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { color: "green" }, "Choose your styling:"),
        react_1.default.createElement(ink_select_input_1.default, { items: items, onSelect: handleSelect })));
};
exports.Styles_4 = Styles_4;

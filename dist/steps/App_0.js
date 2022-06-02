"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App_0 = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_select_input_1 = __importDefault(require("ink-select-input"));
const interfaces_1 = require("../interfaces");
const App_0 = ({ onSelect }) => {
    const handleSelect = (item) => {
        onSelect(item);
    };
    const items = [
        {
            label: "Create-React-App",
            value: interfaces_1.E_App.cra,
        },
        {
            label: "Next",
            value: interfaces_1.E_App.next,
        },
        {
            label: "Webpack/Vite",
            value: interfaces_1.E_App.custom,
        },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { color: "green" }, "Choose your React app:"),
        react_1.default.createElement(ink_select_input_1.default, { items: items, onSelect: handleSelect })));
};
exports.App_0 = App_0;

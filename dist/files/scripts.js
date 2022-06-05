"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scripts = exports.getStyleScript = void 0;
const interfaces_1 = require("../interfaces");
const getStyleScript = (style) => style ? exports.scripts[style] : "";
exports.getStyleScript = getStyleScript;
exports.scripts = {
    [interfaces_1.E_Styles.css]: "lint:css",
    [interfaces_1.E_Styles.scss]: "lint:scss",
    [interfaces_1.E_Styles.sc]: "lint:sc",
};

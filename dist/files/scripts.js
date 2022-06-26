"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scripts = exports.getLintStagedScripts = void 0;
const interfaces_1 = require("../interfaces");
const getStyleScript = (style) => style ? exports.scripts[style] : "";
const getLintStagedScripts = (helpers, style) => {
    let script = {};
    if (helpers.includes(interfaces_1.E_Helpers.eslint)) {
        if (helpers.includes(interfaces_1.E_Helpers.stylelint)) {
            if (style === interfaces_1.E_Styles.sc) {
                script["*.(ts|tsx|js|jsx)"] = ["lint:es", getStyleScript(style)];
            }
            else {
                script["*.(ts|tsx|js|jsx)"] = ["lint:es"];
                script["*.(css|scss|sass)"] = [getStyleScript(style)];
            }
        }
        else {
            script["*.(ts|tsx|js|jsx)"] = ["lint:es"];
        }
    }
    else {
        if (helpers.includes(interfaces_1.E_Helpers.stylelint)) {
            if (style === interfaces_1.E_Styles.sc) {
                script["*.(ts|tsx|js|jsx)"] = [getStyleScript(style)];
            }
            else {
                script["*.(css|scss|sass)"] = [getStyleScript(style)];
            }
        }
    }
    return script;
};
exports.getLintStagedScripts = getLintStagedScripts;
exports.scripts = {
    [interfaces_1.E_Styles.css]: "lint:css",
    [interfaces_1.E_Styles.scss]: "lint:scss",
    [interfaces_1.E_Styles.sc]: "lint:sc",
};

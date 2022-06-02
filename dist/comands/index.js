"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineCommands = void 0;
const husky_1 = require("./husky");
const interfaces_1 = require("../interfaces");
const combineCommands = (values) => {
    let command = "";
    if (values.step_0 === interfaces_1.E_App.cra) {
        if (values.step_1 === interfaces_1.E_PackageManager.yarn) {
            if (values.step_2 === interfaces_1.E_Language.ts) {
                command += "yarn add -D";
                if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                    command += " prettier eslint-config-prettier eslint-plugin-prettier";
                }
                if (values.step_3.includes(interfaces_1.E_Helpers.stylelint)) {
                    command +=
                        " stylelint stylelint-config-standard stylelint-order stylelint-order-config-standard";
                    if (values.step_4 === interfaces_1.E_Styles.sc) {
                        command +=
                            " stylelint-config-styled-components stylelint-processor-styled-components";
                    }
                    if (values.step_4 === interfaces_1.E_Styles.scss) {
                        command += " stylelint-config-standard-scss";
                    }
                }
            }
        }
    }
    // Husky + LS
    if (values.step_3.includes(interfaces_1.E_Helpers.h_ls)) {
        command += husky_1.husky_commands[values.step_1];
    }
    return command;
};
exports.combineCommands = combineCommands;

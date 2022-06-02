"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineCommands = void 0;
const husky_1 = require("./husky");
const interfaces_1 = require("../interfaces");
const combineCommands = (values) => {
    let command = "";
    // Если пользователь выбрал Create React App
    if (values.step_0 === interfaces_1.E_App.cra) {
        // Если пользователь использует yarn
        if (values.step_1 === interfaces_1.E_PackageManager.yarn) {
            command += "yarn add -D";
        }
        // Если пользователь использует typescript
        if (values.step_2 === interfaces_1.E_Language.ts) {
            // Если пользователь использует prettier
            if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                command += " prettier eslint-config-prettier eslint-plugin-prettier";
            }
            // Если пользователь использует eslint
            if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                command += " eslint-import-resolver-typescript";
            }
            // Если пользователь использует stylelint
            if (values.step_3.includes(interfaces_1.E_Helpers.stylelint)) {
                command +=
                    " stylelint stylelint-config-standard stylelint-order stylelint-order-config-standard";
                // Если пользователь использует Styled Components
                if (values.step_4 === interfaces_1.E_Styles.sc) {
                    command +=
                        " stylelint-config-styled-components stylelint-processor-styled-components";
                }
                // Если пользователь использует SCSS/SASS
                if (values.step_4 === interfaces_1.E_Styles.scss) {
                    command += " stylelint-config-standard-scss";
                }
            }
        }
    }
    // Если пользователь использует Husky + LS
    if (values.step_3.includes(interfaces_1.E_Helpers.h_ls)) {
        command += husky_1.husky_commands[values.step_1];
    }
    return command;
};
exports.combineCommands = combineCommands;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineCommands = void 0;
const fs_1 = __importDefault(require("fs"));
const husky_1 = require("./husky");
const interfaces_1 = require("../interfaces");
const combineCommands = (values) => {
    let command = "";
    // Если пользователь использует yarn
    if (values.step_1 === interfaces_1.E_PackageManager.yarn) {
        command += "yarn add -D";
    }
    // Если пользователь использует npm
    if (values.step_1 === interfaces_1.E_PackageManager.npm) {
        command += "npm i -D";
    }
    // Если пользователь выбрал Create React App
    if (values.step_0 === interfaces_1.E_App.cra) {
        if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
            command += " prettier";
            if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
                command += " eslint-config-prettier eslint-plugin-prettier";
            }
            if (values.step_3.includes(interfaces_1.E_Helpers.stylelint)) {
                command += " stylelint-prettier stylelint-config-prettier";
            }
        }
        if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
            if (values.step_2 === interfaces_1.E_Language.ts) {
                command += " eslint-import-resolver-typescript";
            }
        }
    }
    // Если пользователь выбрал Next
    if (values.step_0 === interfaces_1.E_App.next) {
        if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
            command += " prettier";
            if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
                command += " eslint-config-prettier eslint-plugin-prettier";
            }
            if (values.step_3.includes(interfaces_1.E_Helpers.stylelint)) {
                command += " stylelint-prettier stylelint-config-prettier";
            }
        }
    }
    // Если пользователь выбрал vite
    if (values.step_0 === interfaces_1.E_App.vite) {
        if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
            command +=
                " eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import";
            if (values.step_2 === interfaces_1.E_Language.ts) {
                command +=
                    " eslint-import-resolver-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin";
            }
        }
        if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
            command += " prettier";
            if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
                command += " eslint-config-prettier eslint-plugin-prettier";
            }
            if (values.step_3.includes(interfaces_1.E_Helpers.stylelint)) {
                command += " stylelint-prettier stylelint-config-prettier";
            }
        }
    }
    // Если пользователь использует stylelint
    if (values.step_3.includes(interfaces_1.E_Helpers.stylelint)) {
        command +=
            " stylelint stylelint-config-standard stylelint-config-idiomatic-order";
        if (values.step_4 === interfaces_1.E_Styles.sc) {
            command +=
                " stylelint-config-styled-components stylelint-processor-styled-components";
        }
        if (values.step_4 === interfaces_1.E_Styles.scss) {
            command += " stylelint-config-standard-scss";
        }
    }
    // Если гит не инициализирован в проекте
    if (!fs_1.default.existsSync("./.git")) {
        command += " && git init";
    }
    // Если пользователь использует Husky + LS
    if (values.step_3.includes(interfaces_1.E_Helpers.h_ls)) {
        command += husky_1.husky_commands[values.step_1];
    }
    return command;
};
exports.combineCommands = combineCommands;

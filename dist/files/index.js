"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyTsconfigJSON = exports.createFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const eslintrc_1 = require("./eslintrc");
const prettier_1 = require("./prettier");
const vscode_1 = require("./vscode");
const stylelintrc_1 = require("./stylelintrc");
const interfaces_1 = require("../interfaces");
const scripts_1 = require("./scripts");
const createFiles = (values) => {
    const data = fs_1.default.readFileSync("./package.json", "utf8");
    const packageJSON = JSON.parse(data);
    if (values.step_0 === interfaces_1.E_App.cra) {
        // Удаление eslintConfig поля
        delete packageJSON.eslintConfig;
        // Модификация tsconfig.json
        (0, exports.modifyTsconfigJSON)();
        if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
            fs_1.default.writeFileSync("./.eslintignore", eslintrc_1.eslintIgnore);
            packageJSON.scripts["lint:es"] = "eslint src/";
            if (values.step_2 === interfaces_1.E_Language.js) {
                if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                    fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.cra_js_eslint_prettier);
                }
                else {
                    fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.cra_js_eslint);
                }
            }
            if (values.step_2 === interfaces_1.E_Language.ts) {
                if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                    fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.cra_ts_eslint_prettier);
                }
                else {
                    fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.cra_ts_eslint);
                }
            }
        }
    }
    if (values.step_0 === interfaces_1.E_App.next) {
        if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
            if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.next_eslint_prettier);
            }
            else {
                fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.next_base_eslint);
            }
        }
    }
    if (values.step_0 === interfaces_1.E_App.vite) {
        if (values.step_3.includes(interfaces_1.E_Helpers.eslint)) {
            if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.vite_eslint_prettier);
            }
            else {
                fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.vite_eslint);
            }
        }
    }
    // Prettier
    if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
        if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
            fs_1.default.writeFileSync("./.prettierrc", prettier_1.prettier);
        }
    }
    // Stylelint
    if (values.step_3.includes(interfaces_1.E_Helpers.stylelint)) {
        fs_1.default.writeFileSync("./.stylelintignore", eslintrc_1.eslintIgnore);
        if (values.step_4 === interfaces_1.E_Styles.css) {
            packageJSON.scripts[scripts_1.scripts[values.step_4]] = "stylelint src/";
            if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                fs_1.default.writeFileSync("./.stylelintrc", stylelintrc_1.stylelint_css_prettier);
            }
            else {
                fs_1.default.writeFileSync("./.stylelintrc", stylelintrc_1.stylelint_css);
            }
        }
        if (values.step_4 === interfaces_1.E_Styles.scss) {
            packageJSON.scripts[scripts_1.scripts[values.step_4]] = "stylelint src/";
            if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                fs_1.default.writeFileSync("./.stylelintrc", stylelintrc_1.stylelint_scss_prettier);
            }
            else {
                fs_1.default.writeFileSync("./.stylelintrc", stylelintrc_1.stylelint_scss);
            }
        }
        if (values.step_4 === interfaces_1.E_Styles.sc) {
            packageJSON.scripts[scripts_1.scripts[values.step_4]] = "stylelint src/";
            if (values.step_3.includes(interfaces_1.E_Helpers.prettier)) {
                fs_1.default.writeFileSync("./.stylelintrc", stylelintrc_1.stylelint_sc_prettier);
            }
            else {
                fs_1.default.writeFileSync("./.stylelintrc", stylelintrc_1.stylelint_sc);
            }
        }
    }
    if (values.step_3.includes(interfaces_1.E_Helpers.h_ls)) {
        packageJSON["lint-staged"] = {
            "*.(ts|tsx|js|jsx)": ["yarn lint:es", (0, scripts_1.getStyleScript)(values.step_4)],
        };
    }
    // Пересоздаём package.json
    fs_1.default.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));
    // VSCode файлы
    try {
        fs_1.default.mkdirSync(".vscode");
        fs_1.default.writeFileSync("./.vscode/extensions.json", vscode_1.extensions);
        fs_1.default.writeFileSync("./.vscode/settings.json", vscode_1.settings);
    }
    catch (e) {
        console.log(".vscode folder already exists");
    }
};
exports.createFiles = createFiles;
const modifyTsconfigJSON = () => {
    const data = fs_1.default.readFileSync("./tsconfig.json", "utf8");
    const tsconfigJSON = JSON.parse(data);
    // Добавление опции baseUrl
    tsconfigJSON.compilerOptions.baseUrl = "src";
    fs_1.default.writeFileSync("tsconfig.json", JSON.stringify(tsconfigJSON, null, 2));
};
exports.modifyTsconfigJSON = modifyTsconfigJSON;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyTsconfigJSON = exports.modifyPackageJSON = exports.createFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const eslintrc_1 = require("./eslintrc");
const prettier_1 = require("./prettier");
const vscode_1 = require("./vscode");
const createFiles = () => {
    fs_1.default.writeFileSync("./.eslintrc", eslintrc_1.cra_ts_eslint_prettier);
    fs_1.default.writeFileSync("./.prettierrc", prettier_1.prettier);
    // VSCode файлы
    try {
        fs_1.default.mkdirSync(".vscode");
    }
    catch (e) {
        console.log(".vscode folder already exists");
    }
    fs_1.default.writeFileSync("./.vscode/extensions.json", vscode_1.extensions);
    fs_1.default.writeFileSync("./.vscode/settings.json", vscode_1.settings);
};
exports.createFiles = createFiles;
const modifyPackageJSON = () => {
    const data = fs_1.default.readFileSync("./package.json", "utf8");
    const packageJSON = JSON.parse(data);
    // Удаление eslintConfig поля
    delete packageJSON.eslintConfig;
    // Добавление скриптов
    packageJSON.scripts["lint:es"] = "eslint src/";
    packageJSON.scripts["lint:sc"] = "stylelint src/";
    fs_1.default.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));
};
exports.modifyPackageJSON = modifyPackageJSON;
const modifyTsconfigJSON = () => {
    const data = fs_1.default.readFileSync("./tsconfig.json", "utf8");
    const tsconfigJSON = JSON.parse(data);
    // Добавление опции baseUrl
    tsconfigJSON.compilerOptions.baseUrl = "src";
    fs_1.default.writeFileSync("tsconfig.json", JSON.stringify(tsconfigJSON, null, 2));
};
exports.modifyTsconfigJSON = modifyTsconfigJSON;

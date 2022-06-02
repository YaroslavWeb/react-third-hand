"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.husky_commands = void 0;
const interfaces_1 = require("../interfaces");
exports.husky_commands = {
    [interfaces_1.E_PackageManager.npm]: " && npx husky-init && npm install",
    [interfaces_1.E_PackageManager.yarn]: " && npx husky-init && yarn",
};

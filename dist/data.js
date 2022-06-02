"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialStepValues = void 0;
const interfaces_1 = require("./interfaces");
exports.initialStepValues = {
    step_0: interfaces_1.E_App.custom,
    step_1: interfaces_1.E_PackageManager.yarn,
    step_2: interfaces_1.E_Language.ts,
    step_3: [interfaces_1.E_Helpers.prettier],
    step_4: interfaces_1.E_Styles.sc,
};

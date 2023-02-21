"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const child_process_1 = require("child_process");
const App_0_1 = require("./steps/App_0");
const PackageManager_1_1 = require("./steps/PackageManager_1");
const Language_2_1 = require("./steps/Language_2");
const Helpers_3_1 = require("./steps/Helpers_3");
const Styles_4_1 = require("./steps/Styles_4");
const data_1 = require("./data");
const commands_1 = require("./commands");
const files_1 = require("./files");
const pjson = require('../package.json');
const App = () => {
    const [step, setStep] = (0, react_1.useState)(0);
    const [stepItems, setStepItems] = (0, react_1.useState)([]);
    const [stepValues, setStepValues] = (0, react_1.useState)(data_1.initialStepValues);
    const [info, setInfo] = (0, react_1.useState)("");
    const handleSelect = (item) => {
        setStepValues((prev) => ({ ...prev, [`step_${step}`]: item.value }));
        setStep((prev) => ++prev);
        setStepItems((prev) => [...prev, item]);
    };
    const handleSubmitHelpers = (items) => {
        const values = items.map((item) => item.value);
        setStepValues((prev) => ({ ...prev, step_3: values }));
        setStepItems((prev) => [...prev, ...items]);
        if (items.some((item) => item.value === "stylelint")) {
            setStep((prev) => ++prev);
        }
        else {
            setStep((prev) => prev + 2);
        }
    };
    (0, react_1.useEffect)(() => {
        if (step === 5) {
            rockAndRoll();
        }
    }, [step]);
    const rockAndRoll = () => {
        setTimeout(() => {
            const command = (0, commands_1.combineCommands)(stepValues);
            setInfo(`${command}`);
            // Установка пакетов
            (0, child_process_1.execSync)(command, { stdio: "inherit" });
            // Создание файлов: .eslintrc, .stylelintrc, .prettierrc, etc
            (0, files_1.createFiles)(stepValues);
            setInfo("Recommended: Restart your VSCode! To enable ESLint and StyleLint parser.");
        }, 1000);
    };
    console.log(pjson.version);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { backgroundColor: "green", color: "whiteBright" }, "\uD83D\uDCA1CLI helper | react-third-hand | v1.0.8"),
        step === 0 && react_1.default.createElement(App_0_1.App_0, { onSelect: (item) => handleSelect(item) }),
        step === 1 && (react_1.default.createElement(PackageManager_1_1.PackageManager_1, { onSelect: (item) => handleSelect(item) })),
        step === 2 && (react_1.default.createElement(Language_2_1.Language_2, { stepValues: stepValues, onSelect: (item) => handleSelect(item) })),
        step === 3 && (react_1.default.createElement(Helpers_3_1.Helpers_3, { onSubmit: (items) => handleSubmitHelpers(items) })),
        step === 4 && (react_1.default.createElement(Styles_4_1.Styles_4, { onSelect: (item) => handleSelect(item) })),
        step === 5 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ink_1.Text, null, "Your final choice:"),
            stepItems.map((item) => (react_1.default.createElement(ink_1.Text, { key: item.value, color: "blueBright" }, item.label))),
            react_1.default.createElement(ink_1.Text, { backgroundColor: "blueBright", color: "whiteBright" }, info)))));
};
module.exports = App;
exports.default = App;

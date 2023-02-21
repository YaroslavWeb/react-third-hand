export interface I_Item {
    label: string;
    value: string;
}
export declare enum E_App {
    cra = "cra",
    next = "next",
    vite = "vite"
}
export declare enum E_PackageManager {
    yarn = "yarn",
    npm = "npm"
}
export declare enum E_Language {
    ts = "ts",
    tsSWC = "tsSWC",
    js = "js",
    jsSWC = "jsSWC"
}
export declare enum E_Helpers {
    eslint = "eslint",
    stylelint = "stylelint",
    prettier = "prettier",
    h_ls = "h_ls",
    vscode = "vscode"
}
export declare enum E_Styles {
    css = "css",
    sc = "sc",
    scss = "scss"
}
export interface I_StepValues {
    step_0: E_App;
    step_1: E_PackageManager;
    step_2: E_Language;
    step_3: E_Helpers[];
    step_4: E_Styles | null;
}

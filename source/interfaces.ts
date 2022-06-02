export interface I_Item {
	label: string;
	value: string;
}

export enum E_App {
	cra = "cra",
	next = "next",
	custom = "custom",
}

export enum E_PackageManager {
	yarn = "yarn",
	npm = "npm",
}

export enum E_Language {
	ts = "ts",
	js = "js",
}

export enum E_Helpers {
	eslint = "eslint",
	stylelint = "stylelint",
	prettier = "prettier",
	h_ls = "h_ls",
	vscode = "vscode",
}

export enum E_Styles {
	sc = "sc",
	scss = "scss",
}

export interface I_StepValues {
	step_0: E_App;
	step_1: E_PackageManager;
	step_2: E_Language;
	step_3: E_Helpers[];
	step_4: E_Styles | null;
}

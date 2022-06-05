import {
	I_StepValues,
	E_App,
	E_Helpers,
	E_Language,
	E_PackageManager,
	E_Styles,
} from "./interfaces";

export const initialStepValues: I_StepValues = {
	step_0: E_App.vite,
	step_1: E_PackageManager.yarn,
	step_2: E_Language.ts,
	step_3: [E_Helpers.prettier],
	step_4: E_Styles.sc,
};

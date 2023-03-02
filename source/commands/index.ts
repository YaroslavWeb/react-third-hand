import fs from "fs";

import { husky_commands } from "./husky";
import {
	I_StepValues,
	E_App,
	E_Helpers,
	E_Language,
	E_PackageManager,
	E_Styles,
} from "../interfaces";

export const combineCommands = (values: I_StepValues): string => {
	let command = "";

	// Если пользователь использует yarn
	if (values.step_1 === E_PackageManager.yarn) {
		command += "yarn add -D";
	}

	// Если пользователь использует npm
	if (values.step_1 === E_PackageManager.npm) {
		command += "npm i -D";
	}

	// Если пользователь выбрал Create React App
	if (values.step_0 === E_App.cra) {
		if (values.step_3.includes(E_Helpers.prettier)) {
			command += " prettier";

			if (values.step_3.includes(E_Helpers.eslint)) {
				command += " eslint-config-prettier eslint-plugin-prettier";
			}

			if (values.step_3.includes(E_Helpers.stylelint)) {
				command += " stylelint-prettier stylelint-config-prettier";
			}
		}

		if (values.step_3.includes(E_Helpers.eslint)) {
			if (values.step_2 === E_Language.ts) {
				command += " eslint-import-resolver-typescript";
			}
		}
	}

	// Если пользователь выбрал Next
	if (values.step_0 === E_App.next) {
		if (values.step_3.includes(E_Helpers.prettier)) {
			command += " prettier";

			if (values.step_3.includes(E_Helpers.eslint)) {
				command += " eslint-config-prettier eslint-plugin-prettier";
			}

			if (values.step_3.includes(E_Helpers.stylelint)) {
				command += " stylelint-prettier stylelint-config-prettier";
			}
		}
	}

	// Если пользователь выбрал vite
	if (values.step_0 === E_App.vite) {
		command += " vite-plugin-svgr";
		if (values.step_3.includes(E_Helpers.eslint)) {
			command +=
				" eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import";
			if (values.step_2 === E_Language.ts) {
				command +=
					" eslint-import-resolver-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin vite-tsconfig-paths";
			}
		}

		if (values.step_3.includes(E_Helpers.prettier)) {
			command += " prettier";

			if (values.step_3.includes(E_Helpers.eslint)) {
				command += " eslint-config-prettier eslint-plugin-prettier";
			}

			if (values.step_3.includes(E_Helpers.stylelint)) {
				command += " stylelint-prettier stylelint-config-prettier";
			}
		}
	}

	// Если пользователь использует stylelint
	if (values.step_3.includes(E_Helpers.stylelint)) {
		command +=
			" stylelint@14.16.1 stylelint-config-standard stylelint-config-clean-order";

		if (values.step_4 === E_Styles.sc) {
			command +=
				" stylelint-config-styled-components stylelint-processor-styled-components";
		}

		if (values.step_4 === E_Styles.scss) {
			command += " stylelint-config-standard-scss";
		}
	}

	// Если гит не инициализирован в проекте
	if (!fs.existsSync("./.git")) {
		command += " && git init";
	}

	// Если пользователь использует Husky + LS
	if (values.step_3.includes(E_Helpers.h_ls)) {
		command += husky_commands[values.step_1];
	}
	return command;
};

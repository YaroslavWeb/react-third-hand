import fs from "fs";

import {
	cra_js_eslint,
	cra_js_eslint_prettier,
	cra_ts_eslint,
	cra_ts_eslint_prettier,
	eslintIgnore,
	next_base_eslint,
	next_eslint_prettier,
	vite_eslint,
	vite_eslint_prettier,
} from "./eslintrc";
import { prettier } from "./prettier";
import { extensions, settings } from "./vscode";
import {
	stylelint_css,
	stylelint_css_prettier,
	stylelint_sc,
	stylelint_scss,
	stylelint_scss_prettier,
	stylelint_sc_prettier,
} from "./stylelintrc";
import {
	E_App,
	E_Helpers,
	E_Language,
	E_Styles,
	I_StepValues,
} from "../interfaces";
import { getStyleScript, scripts } from "./scripts";

export const createFiles = (values: I_StepValues) => {
	const data = fs.readFileSync("./package.json", "utf8");
	const packageJSON = JSON.parse(data);

	if (values.step_0 === E_App.cra) {
		// Удаление eslintConfig поля
		delete packageJSON.eslintConfig;

		// Модификация tsconfig.json
		modifyTsconfigJSON();

		if (values.step_3.includes(E_Helpers.eslint)) {
			fs.writeFileSync("./.eslintignore", eslintIgnore);
			packageJSON.scripts["lint:es"] = "eslint src/";

			if (values.step_2 === E_Language.js) {
				if (values.step_3.includes(E_Helpers.prettier)) {
					fs.writeFileSync("./.eslintrc", cra_js_eslint_prettier);
				} else {
					fs.writeFileSync("./.eslintrc", cra_js_eslint);
				}
			}
			if (values.step_2 === E_Language.ts) {
				if (values.step_3.includes(E_Helpers.prettier)) {
					fs.writeFileSync("./.eslintrc", cra_ts_eslint_prettier);
				} else {
					fs.writeFileSync("./.eslintrc", cra_ts_eslint);
				}
			}
		}
	}

	if (values.step_0 === E_App.next) {
		if (values.step_3.includes(E_Helpers.eslint)) {
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.eslintrc", next_eslint_prettier);
			} else {
				fs.writeFileSync("./.eslintrc", next_base_eslint);
			}
		}
	}

	if (values.step_0 === E_App.vite) {
		if (values.step_3.includes(E_Helpers.eslint)) {
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.eslintrc", vite_eslint_prettier);
			} else {
				fs.writeFileSync("./.eslintrc", vite_eslint);
			}
		}
	}

	// Prettier
	if (values.step_3.includes(E_Helpers.prettier)) {
		if (values.step_3.includes(E_Helpers.prettier)) {
			fs.writeFileSync("./.prettierrc", prettier);
		}
	}

	// Stylelint
	if (values.step_3.includes(E_Helpers.stylelint)) {
		fs.writeFileSync("./.stylelintignore", eslintIgnore);
		if (values.step_4 === E_Styles.css) {
			packageJSON.scripts[scripts[values.step_4]] = "stylelint src/";
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.stylelintrc", stylelint_css_prettier);
			} else {
				fs.writeFileSync("./.stylelintrc", stylelint_css);
			}
		}

		if (values.step_4 === E_Styles.scss) {
			packageJSON.scripts[scripts[values.step_4]] = "stylelint src/";
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.stylelintrc", stylelint_scss_prettier);
			} else {
				fs.writeFileSync("./.stylelintrc", stylelint_scss);
			}
		}

		if (values.step_4 === E_Styles.sc) {
			packageJSON.scripts[scripts[values.step_4]] = "stylelint src/";
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.stylelintrc", stylelint_sc_prettier);
			} else {
				fs.writeFileSync("./.stylelintrc", stylelint_sc);
			}
		}
	}

	if (values.step_3.includes(E_Helpers.h_ls)) {
		packageJSON["lint-staged"] = {
			"*.(ts|tsx|js|jsx)": ["yarn lint:es", getStyleScript(values.step_4)],
		};
	}

	// Пересоздаём package.json
	fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));

	// VSCode файлы
	try {
		fs.mkdirSync(".vscode");
		fs.writeFileSync("./.vscode/extensions.json", extensions);
		fs.writeFileSync("./.vscode/settings.json", settings);
	} catch (e) {
		console.log(".vscode folder already exists");
	}
};

export const modifyTsconfigJSON = () => {
	const data = fs.readFileSync("./tsconfig.json", "utf8");
	const tsconfigJSON = JSON.parse(data);

	// Добавление опции baseUrl
	tsconfigJSON.compilerOptions.baseUrl = "src";
	fs.writeFileSync("tsconfig.json", JSON.stringify(tsconfigJSON, null, 2));
};

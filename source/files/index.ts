import fs from "fs";

import {
	cra_js_eslint,
	cra_js_eslint_prettier,
	cra_ts_eslint,
	cra_ts_eslint_prettier,
	eslintIgnore,
	next_eslint,
	next_eslint_prettier,
	vite_eslint_js,
	vite_eslint_prettier_js,
	vite_eslint_ts,
	vite_eslint_prettier_ts,
} from "./eslintrc";
import { prettier } from "./prettier";
import { extensions, settings, settings_stylelint } from "./vscode";
import {
	stylelintIgnore,
	stylelintIgnore_sc,
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
import { getLintStagedScripts, scripts } from "./scripts";
import { vite_config_js, vite_config_ts } from "./vite";

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
			packageJSON.scripts["lint:es"] = "eslint --ext .js,.jsx,.ts,.tsx src";
			packageJSON.scripts["lint:es:fix"] = "npm run lint:es -- --fix";

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
			packageJSON.scripts["lint:es"] = "eslint --ext .js,.jsx,.ts,.tsx src";
			packageJSON.scripts["lint:es:fix"] = "npm run lint:es -- --fix";

			try {
				fs.rmSync("./.eslintrc.json");
			} catch (e) {
				console.log(".eslintrc.json not found");
			}

			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.eslintrc", next_eslint_prettier);
			} else {
				fs.writeFileSync("./.eslintrc", next_eslint);
			}
		}
	}

	if (values.step_0 === E_App.vite) {
		if (values.step_3.includes(E_Helpers.eslint)) {
			packageJSON.scripts["lint:es"] = "eslint --ext .js,.jsx,.ts,.tsx src";
			packageJSON.scripts["lint:es:fix"] = "npm run lint:es -- --fix";

			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.eslintrc", vite_eslint_prettier_js);
			} else {
				fs.writeFileSync("./.eslintrc", vite_eslint_js);
			}

			if (values.step_2 === E_Language.js) {
				fs.writeFileSync("./vite.config.js", vite_config_js);
				if (values.step_3.includes(E_Helpers.prettier)) {
					fs.writeFileSync("./.eslintrc", vite_eslint_prettier_js);
				} else {
					fs.writeFileSync("./.eslintrc", vite_eslint_js);
				}
			}
			if (values.step_2 === E_Language.ts) {
				fs.writeFileSync("./vite.config.ts", vite_config_ts);
				if (values.step_3.includes(E_Helpers.prettier)) {
					fs.writeFileSync("./.eslintrc", vite_eslint_prettier_ts);
				} else {
					fs.writeFileSync("./.eslintrc", vite_eslint_ts);
				}
			}
		}
	}

	// ESLint
	if (values.step_3.includes(E_Helpers.prettier)) {
		if (values.step_3.includes(E_Helpers.prettier)) {
			fs.writeFileSync("./.prettierrc", prettier);
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
		if (values.step_4 === E_Styles.css) {
			fs.writeFileSync("./.stylelintignore", stylelintIgnore);
			packageJSON.scripts[scripts[values.step_4]] = "stylelint src/";
			packageJSON.scripts[scripts[values.step_4] + ":fix"] = `${
				scripts[values.step_4]
			} -- --fix`;
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.stylelintrc", stylelint_css_prettier);
			} else {
				fs.writeFileSync("./.stylelintrc", stylelint_css);
			}
		}

		if (values.step_4 === E_Styles.scss) {
			fs.writeFileSync("./.stylelintignore", stylelintIgnore);
			packageJSON.scripts[scripts[values.step_4]] = "stylelint src/";
			packageJSON.scripts[scripts[values.step_4] + ":fix"] = `${
				scripts[values.step_4]
			} -- --fix`;
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.stylelintrc", stylelint_scss_prettier);
			} else {
				fs.writeFileSync("./.stylelintrc", stylelint_scss);
			}
		}

		if (values.step_4 === E_Styles.sc) {
			fs.writeFileSync("./.stylelintignore", stylelintIgnore_sc);
			packageJSON.scripts[scripts[values.step_4]] = "stylelint src/";
			if (values.step_3.includes(E_Helpers.prettier)) {
				fs.writeFileSync("./.stylelintrc", stylelint_sc_prettier);
			} else {
				fs.writeFileSync("./.stylelintrc", stylelint_sc);
			}
		}
	}

	if (values.step_3.includes(E_Helpers.h_ls)) {
		packageJSON["lint-staged"] = getLintStagedScripts(
			values.step_3,
			values.step_4
		);
		modifyPreCommitFile();
	}

	// Пересоздаём package.json
	fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));

	// VSCode файлы
	try {
		fs.mkdirSync(".vscode");
		fs.writeFileSync("./.vscode/extensions.json", extensions);
		if (values.step_3.includes(E_Helpers.stylelint)) {
			fs.writeFileSync("./.vscode/settings.json", settings_stylelint);
		} else {
			fs.writeFileSync("./.vscode/settings.json", settings);
		}
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

export const modifyPreCommitFile = () => {
	const file = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
`;

	fs.writeFileSync("./.husky/pre-commit", file);
};

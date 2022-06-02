import fs from "fs";

import { cra_ts_eslint_prettier } from "./eslintrc";
import { prettier } from "./prettier";
import { extensions, settings } from "./vscode";

export const createFiles = () => {
	fs.writeFileSync("./.eslintrc", cra_ts_eslint_prettier);
	fs.writeFileSync("./.prettierrc", prettier);

	// VSCode файлы
	try {
		fs.mkdirSync(".vscode");
	} catch (e) {
		console.log(".vscode folder already exists");
	}
	fs.writeFileSync("./.vscode/extensions.json", extensions);
	fs.writeFileSync("./.vscode/settings.json", settings);
};

export const modifyPackageJSON = () => {
	const data = fs.readFileSync("./package.json", "utf8");
	const packageJSON = JSON.parse(data);

	// Удаление eslintConfig поля
	delete packageJSON.eslintConfig;

	// Добавление скриптов
	packageJSON.scripts["lint:es"] = "eslint src/";
	packageJSON.scripts["lint:sc"] = "stylelint src/";
	fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));
};

export const modifyTsconfigJSON = () => {
	const data = fs.readFileSync("./tsconfig.json", "utf8");
	const tsconfigJSON = JSON.parse(data);

	// Добавление опции baseUrl
	tsconfigJSON.compilerOptions.baseUrl = "src";
	fs.writeFileSync("tsconfig.json", JSON.stringify(tsconfigJSON, null, 2));
};

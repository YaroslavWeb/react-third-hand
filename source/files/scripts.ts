import { E_Helpers, E_Styles } from "../interfaces";

const getStyleScript = (style: E_Styles | null): string =>
	style ? scripts[style] : "";

export const getLintStagedScripts = (
	helpers: E_Helpers[],
	style: E_Styles | null
) => {
	let script: any = {};
	if (helpers.includes(E_Helpers.eslint)) {
		if (helpers.includes(E_Helpers.stylelint)) {
			if (style === E_Styles.sc) {
				script["*.(ts|tsx|js|jsx)"] = ["lint:es", getStyleScript(style)];
			} else {
				script["*.(ts|tsx|js|jsx)"] = ["lint:es"];
				script["*.(css|scss|sass)"] = [getStyleScript(style)];
			}
		} else {
			script["*.(ts|tsx|js|jsx)"] = ["lint:es"];
		}
	} else {
		if (helpers.includes(E_Helpers.stylelint)) {
			if (style === E_Styles.sc) {
				script["*.(ts|tsx|js|jsx)"] = [getStyleScript(style)];
			} else {
				script["*.(css|scss|sass)"] = [getStyleScript(style)];
			}
		}
	}
	return script;
};

export const scripts: Record<E_Styles, string> = {
	[E_Styles.css]: "lint:css",
	[E_Styles.scss]: "lint:scss",
	[E_Styles.sc]: "lint:sc",
};

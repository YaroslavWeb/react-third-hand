import { E_Styles } from "../interfaces";

export const getStyleScript = (style: E_Styles | null): string =>
	style ? scripts[style] : "";

export const scripts: Record<E_Styles, string> = {
	[E_Styles.css]: "lint:css",
	[E_Styles.scss]: "lint:scss",
	[E_Styles.sc]: "lint:sc",
};

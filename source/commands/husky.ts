import { E_PackageManager } from "../interfaces";

export const husky_commands: Record<E_PackageManager, string> = {
	[E_PackageManager.npm]: " && npx husky-init && npm install",
	[E_PackageManager.yarn]: " && npx husky-init && yarn",
};

import React, { FC } from "react";
import { Text } from "ink";
import SelectInput from "ink-select-input";

import { E_PackageManager, I_Item } from "../interfaces";

const items: I_Item[] = [
	{
		label: "yarn",
		value: E_PackageManager.yarn,
	},
	{
		label: "npm",
		value: E_PackageManager.npm,
	},
];

export const PackageManager_1: FC<{ onSelect: (item: I_Item) => void }> = ({
	onSelect,
}) => {
	const handleSelect = (item: I_Item) => {
		onSelect(item);
	};

	return (
		<>
			<Text color="green">Choose your Package Manager:</Text>
			<SelectInput items={items} onSelect={handleSelect} />
		</>
	);
};

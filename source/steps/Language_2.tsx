import React, { FC } from "react";
import { Text } from "ink";
import SelectInput from "ink-select-input";

import { E_Language, I_Item } from "../interfaces";

const items: I_Item[] = [
	{
		label: "TypeScript",
		value: E_Language.ts,
	},
	{
		label: "JavaScript",
		value: E_Language.js,
	},
];

export const Language_2: FC<{ onSelect: (item: I_Item) => void }> = ({
	onSelect,
}) => {
	const handleSelect = (item: I_Item) => {
		onSelect(item);
	};

	return (
		<>
			<Text color="green">Choose your language:</Text>
			<SelectInput items={items} onSelect={handleSelect} />
		</>
	);
};

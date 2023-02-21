import React, { FC } from "react";
import { Text } from "ink";
import SelectInput from "ink-select-input";

import { E_App, E_Language, I_Item, I_StepValues } from "../interfaces";

const items: I_Item[] = [
	{
		label: "TypeScript",
		value: E_Language.ts,
	},
	{
		label: "TypeScript + SWC",
		value: E_Language.tsSWC
	},
];

const vite_items = [...items,{
	label: "JavaScript",
	value: E_Language.js,
},
{
	label: "JavaScript + SWC",
	value: E_Language.jsSWC,
}]

export const Language_2: FC<{ onSelect: (item: I_Item) => void, stepValues: I_StepValues }> = ({
	onSelect,
	stepValues
}) => {
	const handleSelect = (item: I_Item) => {
		onSelect(item);
	};

	return (
		<>
			<Text color="green">Choose your language:</Text>
			<SelectInput items={stepValues.step_0 === E_App.vite ? vite_items : items} onSelect={handleSelect} />
		</>
	);
};

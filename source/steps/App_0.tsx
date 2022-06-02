import React, { FC } from "react";
import { Text } from "ink";
import SelectInput from "ink-select-input";

import { E_App, I_Item } from "../interfaces";

const items: I_Item[] = [
	{
		label: "Create-React-App",
		value: E_App.cra,
	},
	{
		label: "Next",
		value: E_App.next,
	},
	{
		label: "Webpack/Vite",
		value: E_App.custom,
	},
];

export const App_0: FC<{ onSelect: (item: I_Item) => void }> = ({
	onSelect,
}) => {
	const handleSelect = (item: I_Item) => {
		onSelect(item);
	};
	return (
		<>
			<Text color="green">Choose your React app:</Text>
			<SelectInput items={items} onSelect={handleSelect} />
		</>
	);
};

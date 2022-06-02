import React, { FC } from "react";
import { Text } from "ink";
import SelectInput from "ink-select-input";

export const Styles_4: FC<{ onSelect: (item: any) => void }> = ({
	onSelect,
}) => {
	const handleSelect = (item: any) => {
		onSelect(item);
	};

	const items = [
		{
			label: "Styled Components",
			value: "sc",
		},
		{
			label: "SCSS/SASS",
			value: "scss",
		},
	];

	return (
		<>
			<Text color="green">Choose your styling:</Text>
			<SelectInput items={items} onSelect={handleSelect} />
		</>
	);
};

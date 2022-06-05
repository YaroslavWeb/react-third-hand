import React, { FC } from "react";
import { Text } from "ink";
import SelectInput from "ink-select-input";

import { E_Styles } from "../interfaces";

export const Styles_4: FC<{ onSelect: (item: any) => void }> = ({
	onSelect,
}) => {
	const handleSelect = (item: any) => {
		onSelect(item);
	};

	const items = [
		{
			label: "CSS",
			value: E_Styles.css,
		},
		{
			label: "SCSS/SASS",
			value: E_Styles.scss,
		},
		{
			label: "Styled Components",
			value: E_Styles.sc,
		},
	];

	return (
		<>
			<Text color="green">Choose your styling:</Text>
			<SelectInput items={items} onSelect={handleSelect} />
		</>
	);
};

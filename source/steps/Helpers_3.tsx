import React from "react";
import MultiSelect from "ink-multi-select";
import { Box, Text } from "ink";
import { E_Helpers, I_Item } from "../interfaces";

interface Helpers_3Props {
	onSubmit: (items: I_Item[]) => void;
}

export const Helpers_3 = ({ onSubmit }: Helpers_3Props) => {
	const handleSubmit = (items: any) => {
		onSubmit(items);
	};

	const items = [
		{
			label: "ESLint",
			value: E_Helpers.eslint,
		},
		{
			label: "StyleLint",
			value: E_Helpers.stylelint,
		},
		{
			label: "Prettier",
			value: E_Helpers.prettier,
		},
		{
			label: "Husky + Lint-Staged",
			value: E_Helpers.h_ls,
		},
		{
			label: "VSCode",
			value: E_Helpers.vscode,
		},
	];

	return (
		<>
			<Text color="green">Choose your helpers:</Text>
			<Box>
				<Text color="blue">Enter</Text>
				<Text color="white">: Submit</Text>
			</Box>
			<Box>
				<Text color="blue">Space</Text>
				<Text color="white">: Select</Text>
			</Box>
			<MultiSelect items={items} selected={items} onSubmit={handleSubmit} />
		</>
	);
};

import React, { FC, useEffect, useState } from "react";
import { Text } from "ink";
import { execSync } from "child_process";

import { App_0 } from "./steps/App_0";
import { PackageManager_1 } from "./steps/PackageManager_1";
import { Language_2 } from "./steps/Language_2";
import { Helpers_3 } from "./steps/Helpers_3";
import { Styles_4 } from "./steps/Styles_4";
import { E_Helpers, I_Item, I_StepValues } from "./interfaces";
import { initialStepValues } from "./data";
import { combineCommands } from "./commands";
import { createFiles } from "./files";

const App: FC = () => {
	const [step, setStep] = useState(0);
	const [stepItems, setStepItems] = useState<I_Item[]>([]);
	const [stepValues, setStepValues] = useState<I_StepValues>(initialStepValues);
	const [info, setInfo] = useState("");

	const handleSelect = (item: I_Item) => {
		setStepValues((prev) => ({ ...prev, [`step_${step}`]: item.value }));
		setStep((prev) => ++prev);
		setStepItems((prev) => [...prev, item]);
	};

	const handleSubmitHelpers = (items: I_Item[]) => {
		const values = items.map((item: I_Item) => item.value as E_Helpers);
		setStepValues((prev) => ({ ...prev, step_3: values }));
		setStepItems((prev) => [...prev, ...items]);
		if (items.some((item: I_Item) => item.value === "stylelint")) {
			setStep((prev) => ++prev);
		} else {
			setStep((prev) => prev + 2);
		}
	};

	useEffect(() => {
		if (step === 5) {
			rockAndRoll();
		}
	}, [step]);

	const rockAndRoll = () => {
		setTimeout(() => {
			const command = combineCommands(stepValues);
			setInfo(`${command}`);

			// Установка пакетов
			execSync(command, { stdio: "inherit" });

			// Создание файлов: .eslintrc, .stylelintrc, .prettierrc, etc
			createFiles(stepValues);

			setInfo("Restart your VSCode! To enable ESLint and StyleLint parser.");
		}, 1000);
	};

	return (
		<>
			{step === 0 && <App_0 onSelect={(item: I_Item) => handleSelect(item)} />}
			{step === 1 && (
				<PackageManager_1 onSelect={(item: I_Item) => handleSelect(item)} />
			)}
			{step === 2 && (
				<Language_2 onSelect={(item: I_Item) => handleSelect(item)} />
			)}
			{step === 3 && (
				<Helpers_3 onSubmit={(items: I_Item[]) => handleSubmitHelpers(items)} />
			)}
			{step === 4 && (
				<Styles_4 onSelect={(item: I_Item) => handleSelect(item)} />
			)}
			{step === 5 && (
				<>
					<Text>Your final choice:</Text>
					{stepItems.map((item) => (
						<Text key={item.value} color="blueBright">
							{item.label}
						</Text>
					))}
					<Text backgroundColor="blueBright" color="whiteBright">
						{info}
					</Text>
				</>
			)}
		</>
	);
};

module.exports = App;
export default App;

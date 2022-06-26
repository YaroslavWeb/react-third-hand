export const stylelint_css = `{
  "extends": ["stylelint-config-standard", "stylelint-config-clean-order"],
  "plugins": ["stylelint-order"],
  "rules": {
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "no-missing-end-of-source-newline": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null
  }
}
`;

export const stylelint_scss = `{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order"
  ],
  "plugins": ["stylelint-order"],
  "rules": {
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "no-missing-end-of-source-newline": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null
  }
}`;

export const stylelint_sc = `{
  "processors": [
    [
      "stylelint-processor-styled-components",
      {
        "moduleName": "styled-components",
        "importName": "default",
        "strict": false,
        "ignoreFiles": [],
        "parserPlugins": [
          "jsx",
          ["decorators", { "decoratorsBeforeExport": true }],
          "classProperties",
          "exportExtensions",
          "functionBind",
          "functionSent"
        ]
      }
    ]
  ],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-config-standard",
    "stylelint-config-clean-order"
  ],
  "plugins": ["stylelint-order"],
  "rules": {
    "no-empty-source": null
  }
}
`;

const generateWithPrettier = (config: string): string => {
	const current = JSON.parse(config);
	current.extends.push("stylelint-config-prettier");
	return JSON.stringify(current, null, 2);
};

export const stylelint_css_prettier = generateWithPrettier(stylelint_css);
export const stylelint_scss_prettier = generateWithPrettier(stylelint_scss);
export const stylelint_sc_prettier = generateWithPrettier(stylelint_sc);

export const stylelintIgnore = `*.tsx
*.jsx
*.ts
*.js
*.md
*.svg
*.html
/node_modules
`;

export const stylelintIgnore_sc = ``;

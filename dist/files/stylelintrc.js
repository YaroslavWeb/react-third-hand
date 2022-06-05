"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylelintIgnore = exports.stylelint_sc_prettier = exports.stylelint_scss_prettier = exports.stylelint_css_prettier = exports.stylelint_sc = exports.stylelint_scss = exports.stylelint_css = void 0;
exports.stylelint_css = `{
  "extends": ["stylelint-config-standard", "stylelint-order-config-standard"],
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
exports.stylelint_scss = `{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-order-config-standard"
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
exports.stylelint_sc = `{
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
    "stylelint-order-config-standard"
  ],
  "plugins": ["stylelint-order"],
  "rules": {
    "no-empty-source": null
  }
}
`;
const generateWithPrettier = (config) => {
    const current = JSON.parse(config);
    current.extends.push("stylelint-config-prettier");
    return JSON.stringify(current);
};
exports.stylelint_css_prettier = generateWithPrettier(exports.stylelint_css);
exports.stylelint_scss_prettier = generateWithPrettier(exports.stylelint_scss);
exports.stylelint_sc_prettier = generateWithPrettier(exports.stylelint_sc);
exports.stylelintIgnore = `*.tsx
*.jsx
*.ts
*.js
*.md
*.svg
/node_modules
`;

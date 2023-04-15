"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylelintIgnore_sc = exports.stylelintIgnore = exports.stylelint_sc_prettier = exports.stylelint_scss_prettier = exports.stylelint_css_prettier = exports.stylelint_sc = exports.stylelint_scss = exports.stylelint_css = void 0;
exports.stylelint_css = `{
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
exports.stylelint_scss = `{
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
exports.stylelint_sc = `{
  "extends": ["stylelint-config-standard", "stylelint-config-clean-order"],
  "customSyntax": "postcss-styled-syntax"
  "rules": {
    "no-empty-source": null
  }
}
`;
const generateWithPrettier = (config) => {
    const current = JSON.parse(config);
    current.extends.push("stylelint-config-prettier");
    return JSON.stringify(current, null, 2);
};
exports.stylelint_css_prettier = generateWithPrettier(exports.stylelint_css);
exports.stylelint_scss_prettier = generateWithPrettier(exports.stylelint_scss);
exports.stylelint_sc_prettier = exports.stylelint_sc;
exports.stylelintIgnore = `*.tsx
*.jsx
*.ts
*.js
*.md
*.svg
*.html
/node_modules
`;
exports.stylelintIgnore_sc = ``;

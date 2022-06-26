"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings_stylelint = exports.settings = exports.extensions = void 0;
exports.extensions = `{
  "recommendations": [
    "mikestead.dotenv",
    "streetsidesoftware.code-spell-checker",
    "streetsidesoftware.code-spell-checker-russian",
    "dsznajder.es7-react-js-snippets",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ],

  "unwantedRecommendations": []
}
`;
exports.settings = `{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  "cSpell.language": "en,ru",
  "cSpell.words": [
    "antd",
    "reduxjs",
  ]
}
`;
exports.settings_stylelint = `{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  "stylelint.useLocal": true,
  "stylelint.autoFixOnSave": true,

  "cSpell.language": "en,ru",
  "cSpell.words": [
    "antd",
    "reduxjs",
  ]
}
`;

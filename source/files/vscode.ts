export const extensions = `{
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

export const settings_eslint = `{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "eslint.format.enable": true,

  "cSpell.language": "en,ru",
  "cSpell.words": [
    "antd",
    "reduxjs",
  ]
}
`;

export const settings = `{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  "cSpell.language": "en,ru",
  "cSpell.words": [
    "antd",
    "reduxjs",
  ]
}
`;
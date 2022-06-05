"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslintIgnore = exports.vite_eslint_prettier = exports.vite_eslint = exports.next_eslint_prettier = exports.next_eslint = exports.cra_ts_eslint_prettier = exports.cra_ts_eslint = exports.cra_js_eslint_prettier = exports.cra_js_eslint = exports.vite_base_eslint = exports.next_base_eslint = exports.cra_base_eslint = void 0;
exports.cra_base_eslint = `{
  "extends": ["react-app", "react-app/jest"],
  "rules": {
    "import/order": [
      2,
      {
        "groups": [
          "external",
          "builtin",
          "index",
          "sibling",
          "parent",
          "internal",
          "type"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always-and-inside-groups"
      }
    ]
  }
}
`;
exports.next_base_eslint = `{
  "extends": "next/core-web-vitals",

  "rules": {
    "import/order": [
      2,
      {
        "groups": ["external", "builtin", "index", "sibling", "parent", "internal", "type"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always-and-inside-groups"
      }
    ]
  }
}
`;
exports.vite_base_eslint = `{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "import/order": [
      2,
      {
        "groups": ["external", "builtin", "index", "sibling", "parent", "internal", "type"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always-and-inside-groups"
      }
    ]
  }
}
`;
const generateWithTypescript = (config) => {
    const current = JSON.parse(config);
    current.setting["import/resolver"] = { typescript: {} };
    return current;
};
const generateWithPrettier = (config) => {
    const current = JSON.parse(config);
    current.plugins = ["prettier"];
    current.rules["prettier/prettier"] = 2;
    return current;
};
exports.cra_js_eslint = exports.cra_base_eslint;
exports.cra_js_eslint_prettier = generateWithPrettier(exports.cra_base_eslint);
exports.cra_ts_eslint = generateWithTypescript(exports.cra_base_eslint);
exports.cra_ts_eslint_prettier = generateWithPrettier(generateWithTypescript(exports.cra_base_eslint));
exports.next_eslint = exports.next_base_eslint;
exports.next_eslint_prettier = generateWithPrettier(exports.next_base_eslint);
exports.vite_eslint = exports.vite_base_eslint;
exports.vite_eslint_prettier = generateWithPrettier(exports.vite_base_eslint);
exports.eslintIgnore = `setupProxy.js`;

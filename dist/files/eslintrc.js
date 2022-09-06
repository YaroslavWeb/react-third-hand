"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslintIgnore = exports.vite_eslint_prettier_ts = exports.vite_eslint_ts = exports.vite_eslint_prettier_js = exports.vite_eslint_js = exports.next_eslint_prettier = exports.next_eslint = exports.cra_ts_eslint_prettier = exports.cra_ts_eslint = exports.cra_js_eslint_prettier = exports.cra_js_eslint = exports.vite_base_eslint_ts = void 0;
const cra_base_eslint = `{
  "extends": ["react-app", "react-app/jest"],
  "settings": {},
  "plugins": [],
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
const next_base_eslint = `{
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
const vite_base_eslint_js = `{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  },
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
exports.vite_base_eslint_ts = `{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "import/no-unresolved": [
      2,
      {
        "ignore": [".svg"]
      }
    ],
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
    current.settings["import/resolver"] = { typescript: {} };
    return JSON.stringify(current, null, 2);
};
const generateWithPrettier = (config) => {
    const current = JSON.parse(config);
    current.plugins = ["prettier"];
    current.rules["prettier/prettier"] = 2;
    return JSON.stringify(current, null, 2);
};
exports.cra_js_eslint = cra_base_eslint;
exports.cra_js_eslint_prettier = generateWithPrettier(cra_base_eslint);
exports.cra_ts_eslint = generateWithTypescript(cra_base_eslint);
exports.cra_ts_eslint_prettier = generateWithPrettier(exports.cra_ts_eslint);
exports.next_eslint = next_base_eslint;
exports.next_eslint_prettier = generateWithPrettier(next_base_eslint);
exports.vite_eslint_js = vite_base_eslint_js;
exports.vite_eslint_prettier_js = generateWithPrettier(vite_base_eslint_js);
exports.vite_eslint_ts = exports.vite_base_eslint_ts;
exports.vite_eslint_prettier_ts = generateWithPrettier(exports.vite_base_eslint_ts);
exports.eslintIgnore = `setupProxy.js`;

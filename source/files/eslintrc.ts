export const cra_base_eslint = `{
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

export const next_base_eslint = `{
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

export const vite_base_eslint = `{
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

const generateWithTypescript = (config: any): string => {
	const current = JSON.parse(config);
	current.setting["import/resolver"] = { typescript: {} };
	return current;
};

const generateWithPrettier = (config: any): string => {
	const current = JSON.parse(config);
	current.plugins = ["prettier"];
	current.rules["prettier/prettier"] = 2;
	return current;
};

export const cra_js_eslint = cra_base_eslint;
export const cra_js_eslint_prettier = generateWithPrettier(cra_base_eslint);
export const cra_ts_eslint = generateWithTypescript(cra_base_eslint);
export const cra_ts_eslint_prettier = generateWithPrettier(
	generateWithTypescript(cra_base_eslint)
);

export const next_eslint = next_base_eslint;
export const next_eslint_prettier = generateWithPrettier(next_base_eslint);

export const vite_eslint = vite_base_eslint;
export const vite_eslint_prettier = generateWithPrettier(vite_base_eslint);

export const eslintIgnore = `setupProxy.js`;

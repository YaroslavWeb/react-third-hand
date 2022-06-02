export const cra_ts_eslint = `{
  "extends": ["react-app", "react-app/jest"],
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
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

export const cra_ts_eslint_prettier = `{
  "extends": ["react-app", "react-app/jest"],
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": 2,
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

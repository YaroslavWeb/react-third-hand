export declare const cra_base_eslint = "{\n  \"extends\": [\"react-app\", \"react-app/jest\"],\n  \"rules\": {\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\n          \"external\",\n          \"builtin\",\n          \"index\",\n          \"sibling\",\n          \"parent\",\n          \"internal\",\n          \"type\"\n        ],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";
export declare const next_base_eslint = "{\n  \"extends\": \"next/core-web-vitals\",\n\n  \"rules\": {\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\"external\", \"builtin\", \"index\", \"sibling\", \"parent\", \"internal\", \"type\"],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";
export declare const vite_base_eslint = "{\n  \"extends\": [\n    \"eslint:recommended\",\n    \"plugin:react/recommended\",\n    \"plugin:react-hooks/recommended\",\n    \"plugin:import/recommended\",\n    \"plugin:jsx-a11y/recommended\"\n  ],\n  \"settings\": {\n    \"import/resolver\": {\n      \"node\": {\n        \"extensions\": [\".js\", \".jsx\", \".ts\", \".tsx\"]\n      }\n    }\n  },\n  \"rules\": {\n    \"react/react-in-jsx-scope\": 0,\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\"external\", \"builtin\", \"index\", \"sibling\", \"parent\", \"internal\", \"type\"],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";
export declare const cra_js_eslint = "{\n  \"extends\": [\"react-app\", \"react-app/jest\"],\n  \"rules\": {\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\n          \"external\",\n          \"builtin\",\n          \"index\",\n          \"sibling\",\n          \"parent\",\n          \"internal\",\n          \"type\"\n        ],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";
export declare const cra_js_eslint_prettier: string;
export declare const cra_ts_eslint: string;
export declare const cra_ts_eslint_prettier: string;
export declare const next_eslint = "{\n  \"extends\": \"next/core-web-vitals\",\n\n  \"rules\": {\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\"external\", \"builtin\", \"index\", \"sibling\", \"parent\", \"internal\", \"type\"],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";
export declare const next_eslint_prettier: string;
export declare const vite_eslint = "{\n  \"extends\": [\n    \"eslint:recommended\",\n    \"plugin:react/recommended\",\n    \"plugin:react-hooks/recommended\",\n    \"plugin:import/recommended\",\n    \"plugin:jsx-a11y/recommended\"\n  ],\n  \"settings\": {\n    \"import/resolver\": {\n      \"node\": {\n        \"extensions\": [\".js\", \".jsx\", \".ts\", \".tsx\"]\n      }\n    }\n  },\n  \"rules\": {\n    \"react/react-in-jsx-scope\": 0,\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\"external\", \"builtin\", \"index\", \"sibling\", \"parent\", \"internal\", \"type\"],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";
export declare const vite_eslint_prettier: string;
export declare const eslintIgnore = "setupProxy.js";

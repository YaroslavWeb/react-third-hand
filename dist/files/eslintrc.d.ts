export declare const cra_ts_eslint = "{\n  \"extends\": [\"react-app\", \"react-app/jest\"],\n  \"settings\": {\n    \"import/resolver\": {\n      \"typescript\": {}\n    }\n  },\n  \"rules\": {\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\n          \"external\",\n          \"builtin\",\n          \"index\",\n          \"sibling\",\n          \"parent\",\n          \"internal\",\n          \"type\"\n        ],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";
export declare const cra_ts_eslint_prettier = "{\n  \"extends\": [\"react-app\", \"react-app/jest\"],\n  \"settings\": {\n    \"import/resolver\": {\n      \"typescript\": {}\n    }\n  },\n  \"plugins\": [\"prettier\"],\n  \"rules\": {\n    \"prettier/prettier\": 2,\n    \"import/order\": [\n      2,\n      {\n        \"groups\": [\n          \"external\",\n          \"builtin\",\n          \"index\",\n          \"sibling\",\n          \"parent\",\n          \"internal\",\n          \"type\"\n        ],\n        \"alphabetize\": {\n          \"order\": \"asc\",\n          \"caseInsensitive\": true\n        },\n        \"newlines-between\": \"always-and-inside-groups\"\n      }\n    ]\n  }\n}\n";

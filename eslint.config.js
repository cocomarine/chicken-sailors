import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react";

export default [
  pluginReactConfig.configs.flat.recommended,
  pluginReactConfig.configs.flat['jsx-runtime'],
  {
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "19",
      },
    },
  },
];

import baseConfig from "@tix/eslint-config/base";
import reactConfig from "@tix/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];

import baseConfig, { restrictEnvAccess } from "@tix/eslint-config/base";
import nextjsConfig from "@tix/eslint-config/nextjs";
import reactConfig from "@tix/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];

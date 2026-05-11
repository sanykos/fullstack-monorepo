import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    languageOptions: {
      globals: globals.browser,
    },

    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {},
  },
  // {
  //   files: ['packages/client/**/*.{ts,tsx}'],
  // },
]);

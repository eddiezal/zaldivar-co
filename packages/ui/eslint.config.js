// packages/ui/eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    rules: {
      // Add any custom rules here
    },
  },
];

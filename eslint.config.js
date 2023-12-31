import { reactConfig } from './eslint/react.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...reactConfig,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
]

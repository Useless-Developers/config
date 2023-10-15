import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import sortKeysFix from 'eslint-plugin-sort-keys-fix'
import ts from '@typescript-eslint/eslint-plugin'
import tsdoc from 'eslint-plugin-tsdoc'
import tsParser from '@typescript-eslint/parser'
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys'

/** @type any */
const badPlugins = {
  react,
  'typescript-sort-keys': typescriptSortKeys,
}

// eslint-disable-next-line tsdoc/syntax, jsdoc/check-tag-names
/** @type {import('eslint').Linter.FlatConfig[]} */
export const reactConfig = [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true, modules: true },
        ecmaVersion: 'latest',
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': ts,
      jsdoc,
      prettier,
      'sort-keys-fix': sortKeysFix,
      tsdoc,
      ...badPlugins
    },
    rules: {
      // Extensions
      ...js.configs.recommended.rules,
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules,
      ...jsdoc.configs['flat/recommended-typescript'].rules,
      ...react.configs.recommended.rules,
      ...typescriptSortKeys.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      
      // Overrides
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/ban-types': [
        2,
        {
          types: {
            Object: 'Do not use object',
            object: 'Do not use object',
          },
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/member-delimiter-style': [2, { multiline: { delimiter: 'none' } }],
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-shadow': 2,
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-var-requires': 0,
      'arrow-body-style': [1, 'as-needed'],
      'arrow-parens': [2, 'as-needed'],
      camelcase: [1],
      'comma-dangle': [2, 'always-multiline'],
      curly: [0, 'multi-or-nest'],
      'import/namespace': 0,
      'import/no-unresolved': 0,
      indent: 0,
      'jsdoc/match-description': [
        2,
        {
          mainDescription: '^[A-Z].*',
          message: 'Please describe the component/method',
        },
      ],
      'jsdoc/require-param': [1, { unnamedRootBase: ['props'] }],
      'jsdoc/require-param-description': 0,
      'jsdoc/require-param-type': 0,
      'jsdoc/require-returns': 0,
      'jsdoc/require-returns-description': 0,
      'jsdoc/tag-lines': [1, 'any', { startLines: 1 }],
      'jsx-quotes': [2, 'prefer-single'],
      'lines-between-class-members': 0,
      'new-parens': 2,
      'no-console': [1, { allow: ['warn', 'error', 'info'] }],
      'no-irregular-whitespace': 1,
      'no-multiple-empty-lines': [1, { max: 1 }],
      'no-new': 0,
      'no-shadow': 0,
      'no-trailing-spaces': 1,
      'no-undef': 0,
      'no-undef-init': 'error',
      'no-unused-expressions': 0,
      'no-var': 2,
      'object-curly-spacing': [1, 'always'],
      'object-shorthand': 2,
      'one-var-declaration-per-line': 2,
      'padded-blocks': 0,
      'prefer-arrow-callback': 2,
      'prefer-const': 2,
      'prettier/prettier': [
        2,
        {
          arrowParens: 'avoid',
          bracketSameLine: false,
          bracketSpacing: true,
          jsxSingleQuote: true,
          printWidth: 100,
          quoteProps: 'as-needed',
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
        },
      ],
      quotes: [
        2,
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      'react/jsx-boolean-value': 2,
      'react/jsx-curly-brace-presence': [2, 'never'],
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'react/jsx-indent': 0,
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-no-undef': 2,
      'react/jsx-sort-props': [
        2,
        {
          shorthandLast: true,
        },
      ],
      'react/no-multi-comp': 2,
      'react/prop-types': 0,
      'react/self-closing-comp': 2,
      'require-await': 1,
      semi: [2, 'never'],
      'sort-keys-fix/sort-keys-fix': 1,
      'space-before-function-paren': [1, 'always'],
      'tsdoc/syntax': 1,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
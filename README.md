# eslint-config-mgenware

[![Build Status](https://github.com/mgenware/eslint-config-mgenware/workflows/Build/badge.svg)](https://github.com/mgenware/eslint-config-mgenware/actions)

A set of opinionated rules for [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

## Usage

Installation:

```sh
npm i -D eslint-config-mgenware eslint "@typescript-eslint/parser" "@typescript-eslint/eslint-plugin" "eslint-plugin-import"
```

`.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['mgenware'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
```

# eslint-config-mgenware

[![Build Status](https://github.com/mgenware/eslint-config-mgenware/workflows/Build/badge.svg)](https://github.com/mgenware/eslint-config-mgenware/actions)

Another opinionated [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) config.

## Usage

It's recommended to use this config along with `eslint-config-airbnb-typescript-lite`:

```sh
yarn add eslint-config-mgenware eslint "@typescript-eslint/parser" "@typescript-eslint/eslint-plugin" "eslint-config-airbnb-typescript-lite" "eslint-plugin-import" -D
```

`.eslintrc.js`:

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript-lite',
    'plugin:@typescript-eslint/recommended',
    'mgenware',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
```

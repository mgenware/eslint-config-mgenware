module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', '../main.js'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './test/tsconfig.json',
  },
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', '../main.js'],
  parserOptions: {
    project: './test/tsconfig.json',
  },
};

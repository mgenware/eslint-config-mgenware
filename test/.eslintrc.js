module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['../main.js'],
  parserOptions: {
    project: './test/tsconfig.json',
  },
};

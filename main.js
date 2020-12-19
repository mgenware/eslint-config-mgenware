module.exports = {
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-plusplus': 'off',
    // Allow `for-of` loops.
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    // No need an extra line between one-line class members.
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // Allow multiple classes per file.
    'max-classes-per-file': 'off',
    // Loosen destructuring rules.
    'prefer-destructuring': ['error', { object: true, array: false }],
    // Handled by prettier.
    '@typescript-eslint/indent': 'off',
    // Handled by prettier.
    'operator-linebreak': 'off',
    // Handled by prettier.
    'function-paren-newline': 'off',
    // Handled by prettier.
    'implicit-arrow-linebreak': 'off',
    // Handled by prettier.
    'object-curly-newline': 'off',
    // No need explicit func return type.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Allow unused vars with "_" prefix.
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Enable switch exhaustiveness check.
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Strict boolean expressions.
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowNullableBoolean: true, allowNullableString: true, allowNullableNumber: true },
    ],
  },
};

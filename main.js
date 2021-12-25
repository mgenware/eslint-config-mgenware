module.exports = {
  extends: [
    'airbnb-typescript-lite',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-plusplus': 'off',
    // Allow `for-of` loops.
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // No need an extra line between one-line class members.
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
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
    // Handled by prettier.
    'newline-per-chained-call': 'off',
    // Allow non-default exports.
    'import/prefer-default-export': 'off',
    // Allow continue.
    'no-continue': 'off',
    // No need explicit func return type.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Allow unused vars with "_" prefix.
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Enable switch exhaustiveness check.
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Strict boolean expressions.
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // No need explicit module boundary types.
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Allow return assignment.
    'no-return-assign': 'off',
    // Disallows non-null assertions using the ! postfix operator.
    '@typescript-eslint/no-non-null-assertion': 'error',
    // Allow multiple assignments.
    'no-multi-assign': 'off',
    // Enforce import extensions.
    'import/extensions': ['error', 'ignorePackages'],
    // Allow non-string types in template literals.
    '@typescript-eslint/restrict-template-expressions': 'off',
    // Allow member access of any type.
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
};

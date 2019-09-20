module.exports = {
  root: true,
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: { },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['test/**/*.*'],
      env: {
        'jest': true,
      },
      parserOptions: {
        project: './test/tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {
            directory: './test',
          },
        },
      },
    },
  ]
}

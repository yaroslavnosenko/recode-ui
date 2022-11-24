module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['unused-imports', 'import', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'sibling', 'parent', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}

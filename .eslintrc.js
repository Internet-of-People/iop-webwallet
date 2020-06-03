module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals:{
    'BigInt':true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'class-methods-use-this': 'off',
    'import/no-mutable-exports': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-continue': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    semi: 2,
    eqeqeq: 2,
    'no-trailing-spaces': 2,
    indent: ["error", 2],
    'no-multiple-empty-lines': ['error', {'max': 1}],
    'space-infix-ops': 2,
    'space-before-function-paren': 2,
    'space-before-blocks': 2,
    'arrow-spacing': 2,
    'semi-spacing': 2,
    'keyword-spacing': 2,
    'eol-last': 2,
    'no-var': 2,
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': 2,
  }
};

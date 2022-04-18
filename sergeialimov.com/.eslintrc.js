module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
  },
};

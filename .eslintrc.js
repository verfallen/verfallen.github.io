module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2015
  },
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"]
  },
  globals: { fullpage: false, $: false, WOW: false }
};

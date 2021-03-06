module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es2020: true,
    jest: true,
    browser: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/jsx-props-no-spreading": ["off"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".js"] }],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "either",
        depth: 25
      }
    ],
    "unicorn/no-reduce": ["off"]
  }
};

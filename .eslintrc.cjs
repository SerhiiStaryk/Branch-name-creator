module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react-hooks", "prettier"],
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": ["error", { code: 120 }],
    "object-curly-spacing": [2, "always"],
    "operator-linebreak": ["error", "after", { overrides: { "?": "ignore", ":": "ignore" } },],
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true },],
    "react/react-in-jsx-scope": "off",
    indent: ["error", 2, { MemberExpression: 1 }, { SwitchCase: 1 }],
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
};

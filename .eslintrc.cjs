/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "tailwindcss"],
  extends: [
    "next/core-web-vitals",
    // "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-explicit-any": "off", // Allow any types
    "@typescript-eslint/no-unsafe-assignment": "off", // Disable no-unsafe-assignment rule
    "@typescript-eslint/no-unsafe-call": "off", // Disable no-unsafe-call rule
    "@typescript-eslint/no-unsafe-member-access": "off", // Disable no-unsafe-member-access rule
    "@typescript-eslint/no-unsafe-return": "off", // Disable no-unsafe-return rule
    // Unsafe argument of type `any` assigned to a parameter of type `TypeOf<S>`.eslint@typescript-eslint/no-unsafe-argument
    "@typescript-eslint/no-unsafe-argument": "off",
  },
  settings: {
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "./tailwind.config.ts",
      classRegex: "^(class(Name)?|tw)$",
    },
    next: {
      rootDir: ["./"],
    },
  },
}
module.exports = config

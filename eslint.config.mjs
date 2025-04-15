// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config";

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: false,
  },
  dirs: {
    src: ["./playground"],
  },
}).override("nuxt/typescript/setup", {
  rules: {
    // ...Override rules, for example:
    semi: "off",
    "@typescript-eslint/semi": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
  },
});

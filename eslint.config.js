import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-shadow": "error",
            "space-infix-ops": "error",
            "space-before-function-paren": ["error", {
                "anonymous": "ignore",
                "named": "always",
                "asyncArrow": "always",
            }],
            semi: [
                "error",
                "always",
            ],
            quotes: [
                "error",
                "double",
                { allowTemplateLiterals: true },
            ],
            indent: [
                "error",
                4,
                { SwitchCase: 1 },
            ],
            "comma-dangle": [
                "error", {
                    arrays: "always-multiline",
                    objects: "always-multiline",
                    imports: "always-multiline",
                    exports: "always-multiline",
                    functions: "never",
                },
            ],
        },
    },
    {        
        ignores: ["node_modules", ".astro", ".vercel", "src/**.d.ts"],
    }
);
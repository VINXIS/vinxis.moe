import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import { remarkModifiedTime } from "./plugins/remark-modified-time.mjs";
import { remarkTitle } from "./plugins/remark-title.mjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    site: "https://vinxis.moe",
    integrations: [
        sitemap(),
    ],
    server: {
        open: true,
    },
    markdown: {
        remarkPlugins: [
            remarkModifiedTime,
            remarkTitle,
            remarkMath,
        ],
        rehypePlugins: [
            rehypeKatex,
        ],
    },
});
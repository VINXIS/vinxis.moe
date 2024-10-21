import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import remarkContentTags from "./plugins/remark-content-tags.mjs";
import remarkModifiedTime from "./plugins/remark-modified-time.mjs";
import remarkTitle from "./plugins/remark-title.mjs";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
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
            remarkContentTags,
            remarkModifiedTime,
            remarkTitle,
            remarkMath,
            remarkBreaks,
        ],
        rehypePlugins: [
            rehypeKatex,
        ],
    },
});
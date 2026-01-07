import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkContentTags from "./plugins/remark-content-tags.mjs";
import remarkModifiedTime from "./plugins/remark-modified-time.mjs";
import remarkTitle from "./plugins/remark-title.mjs";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";
import remarkWikiLink from "remark-wiki-link";

import mdx from "@astrojs/mdx";

// Gets all content files and create an array of slug strings for the remark wiki link plugin
const files = import.meta.glob("./src/content/**/*.md");
const permalinks = [];
for (const file in files)
    permalinks.push(file.split("/").pop().replace(".md", "").replace(/\p{punct}/gu, "").replace(/ /g, "-").toLowerCase());

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://vinxis.moe",
    integrations: [sitemap(), mdx()],
    redirects: {
        "/about": "/me",
        "/now": "/me",
        "/contact": "/me",
    },
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
            [
                remarkWikiLink,
                {
                    permalinks,
                    pageResolver: (name) => [name.replace(/\p{punct}/gu, "").replace(/ /g, "-").toLowerCase()],
                    hrefTemplate: (permalink) => `../notes/${permalink}`,
                    newClassName: "invalid-internal-link",
                },
            ],
        ],
        rehypePlugins: [
            rehypeKatex,
        ],
    },
});
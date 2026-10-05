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

// Till 2026-09-30 Writings were under the posts collection until I decided to move them cuz clutter, and this fixes discord links and stuff
const writingsRedir = {};
for (const file in files) {
    const match = file.match(/\/writings\/(\d{4})-(\d{2})-(\d{2})\.md$/);
    if (!match)
        continue;
    const [, y, m, d] = match;
    writingsRedir[`/posts/writing-${y}-${m}-${d}`] = `/writings/${y}-${m}-${d}`;
}

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://vinxis.moe",
    compressHTML: true,
    integrations: [sitemap(), mdx()],
    redirects: {
        "/about": "/me",
        "/now": "/me",
        "/contact": "/me",
        ...writingsRedir,
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
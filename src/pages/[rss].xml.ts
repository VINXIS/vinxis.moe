import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import rss from "@astrojs/rss";

export const GET: APIRoute = async ({ site, params }) => {
    const pages: (CollectionEntry<"blog"> | CollectionEntry<"notes"> | CollectionEntry<"posts">)[] = [];
    if (params.rss === "rss" || params.rss === "feed" || params.rss === "rss_blog" || params.rss === "feed_blog")
        pages.push(...await getCollection("blog"));
    if (params.rss === "rss" || params.rss === "feed" || params.rss === "rss_notes" || params.rss === "feed_notes")
        pages.push(...await getCollection("notes"));
    if (params.rss === "rss" || params.rss === "feed" || params.rss === "rss_posts" || params.rss === "feed_posts")
        pages.push(...await getCollection("posts"));

    return rss({
        title: `VINXIS ${params.rss === "rss_blog" || params.rss === "feed_blog" ? "Blog" : params.rss === "rss_notes" || params.rss === "feed_notes" ? "Notes" : params.rss === "rss_posts" || params.rss === "feed_posts" ? "Posts" : ""}`,
        description: `${params.rss === "rss_blog" || params.rss === "feed_blog" ? "Blog" : params.rss === "rss_notes" || params.rss === "feed_notes" ? "Notes" : params.rss === "rss_posts" || params.rss === "feed_posts" ? "Posts" : ""} content created by VINXIS`,
        site: site ?? "https://vinxis.moe",
        items: await Promise.all(pages.map(async (page) => {
            return {
                title: `${page.collection} - ${"title" in page.data && page.data.title ? page.data.title : page.id.replace(/\.[^/\\.]*$/, "")}`,
                description: page.body.slice(0, 99) + "…",
                url: `${site ?? "https://vinxis.moe"}/${page.collection}/${page.slug}`,
                pubDate: (await page.render()).remarkPluginFrontmatter.created,
            };
        })),
        customData: `<language>en-us</language>`,
    });
};

export function getStaticPaths () {
    return [
        { params: { rss: "rss"} },
        { params: { rss: "feed"} },
        { params: { rss: "rss_blog"} },
        { params: { rss: "feed_blog"} },
        { params: { rss: "rss_notes"} },
        { params: { rss: "feed_notes"} },
        { params: { rss: "rss_posts"} },
        { params: { rss: "feed_posts"} },
    ];
}
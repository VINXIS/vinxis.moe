import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const blog = await getCollection("blog");
const notes = await getCollection("notes");
const posts = await getCollection("posts");
const pages = [...blog, ...notes, ...posts];

export const GET: APIRoute = () => {
    const backlinksDict: Record<string, { name: string, pageExists: boolean, backlinks: string[] }> = {};
    notes.forEach(page => {
        backlinksDict[page.slug] = {
            name: `Notes - ${page.id.replace(/\.[^/\\.]*$/, "")}`,
            pageExists: true,
            backlinks: [],
        };
    });

    pages.forEach(page => {
        page.body.replace(/\[\[([^|\]#]+)(?:#[^\]]*)?(?:\|([^\]]+))?\]\]/g, (_, link, text) => {
            const slug = link.replace(/ /g, "-").toLowerCase();
            if (backlinksDict[slug])
                backlinksDict[slug].backlinks.push(page.slug);
            else
                backlinksDict[slug] = {
                    name: text || slug,
                    pageExists: false,
                    backlinks: [page.slug],
                };
            return "";
        });
    });

    Object.values(backlinksDict).forEach(backlink => {
        backlink.backlinks = [...new Set(backlink.backlinks)];
    });

    return new Response(JSON.stringify(backlinksDict));
};
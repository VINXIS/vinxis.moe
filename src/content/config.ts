import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
        lastUpdated: z.date(),
        tags: z.array(z.string()),
        image: z.string(),
        content: z.string(),
    }),
});

const notes = defineCollection({
    type: "content",
    schema: z.object({
        // tags: z.array(z.string()),
    }),
});

const posts = defineCollection({
    type: "content",
});

export const collections = {
    "blog": blog,
    "notes": notes,
    "posts": posts,
};
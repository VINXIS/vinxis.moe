import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
    }),
});

const notes = defineCollection({
    type: "content",
    schema: z.object({
        tags: z.array(z.string()).optional(),
        isObsidianImport: z.boolean().optional(),
    }),
});

const posts = defineCollection({
    type: "content",
    schema: z.object({
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    "blog": blog,
    "notes": notes,
    "posts": posts,
};
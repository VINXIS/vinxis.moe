import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: image().optional(),
        imageAlt: z.string().optional(),
        created: z.string(),
        lastModified: z.string(),
    }),
});

const notes = defineCollection({
    type: "content",
    schema: z.object({
        tags: z.array(z.string()).optional(),
        isObsidianImport: z.boolean().optional(),
        created: z.string(),
        lastModified: z.string(),
    }),
});

const posts = defineCollection({
    type: "content",
    schema: z.object({
        tags: z.array(z.string()).optional(),
        created: z.string(),
    }),
});

export const collections = {
    "blog": blog,
    "notes": notes,
    "posts": posts,
};
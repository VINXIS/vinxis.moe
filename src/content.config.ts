import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
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
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/notes" }),
    schema: z.object({
        tags: z.array(z.string()).optional(),
        isObsidianImport: z.boolean().optional(),
        created: z.string(),
        lastModified: z.string(),
    }),
});

const posts = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
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
import { getImage } from "astro:assets";
import type { ImageOutputFormat } from "astro";

const previewFormats: string[] = ["jpeg", "jpg", "png", "webp"];

const contentImages = import.meta.glob<{ default: ImageMetadata }>("/src/content/**/*.{jpeg,jpg,png,gif,webp,avif,tiff}");
const markdownImage = /!\[[^\]]*\]\(\s*<([^>]+)>|!\[[^\]]*\]\(\s*([^\s)]+)/;

// Longest edge a preview card ever needs
// Twitter drops anything over 5MB apparently
const previewImageSize = 1200;

export interface MetaProps {
    title: string;
    description?: string | undefined;

    image?: string | undefined;
    imageAlt?: string | undefined;
    imageWidth?: number | undefined;
    imageHeight?: number | undefined;

    type?: "website" | "article" | undefined;

    // ISO 8601 and also only used for articles
    publishedTime?: string | undefined;
    modifiedTime?: string | undefined;
    noindex?: boolean | undefined;
}

export interface PreviewImage {
    src: string;
    width: number;
    height: number;
    alt?: string | undefined;
}

export interface ContentEntry {
    body?: string;
    filePath?: string;
    data: Record<string, unknown>;
}

export function excerpt (body: string | undefined, length = 160): string {
    if (!body)
        return "";

    const text = body
        .replace(/```[\s\S]*?```/g, "") // Code blocks
        .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // Images
        .replace(/!?\[\[([^|\]#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g, (_, link, alias) => alias ?? link) // Wikilinks
        .replace(/\[\^[^\]]*\]/g, "") // Footnote 
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // Links
        .replace(/<[^>]*>/g, "") // Inline html
        .replace(/^\s{0,3}(#{1,6}\s+|>\s?|[-*+]\s+|\d+\.\s+)/gm, "") // Headings, quotes, list markers
        .replace(/[*_~`]/g, "") // Emphasis/code markers
        .replace(/\s+/g, " ")
        .trim();

    if (text.length <= length)
        return text;

    const cut = text.slice(0, length);
    const lastSpace = cut.lastIndexOf(" ");
    return `${(lastSpace > length / 2 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:-]+$/, "")}…`;
}

async function resolveContentImage (filePath: string | undefined, src: string): Promise<ImageMetadata | undefined> {
    if (!filePath || /^(https?:)?\/\//.test(src))
        return undefined;

    const directory = `/${filePath.replace(/^\/+/, "").split("/").slice(0, -1).join("/")}/`;
    const resolved = decodeURIComponent(new URL(src, `file://${encodeURI(directory)}`).pathname);

    const image = contentImages[resolved];
    return image ? (await image()).default : undefined;
}

// The preview image being either the header image, or the first image in its body
export async function previewImage (entry: ContentEntry): Promise<PreviewImage | undefined> {
    const header = entry.data.image as ImageMetadata | undefined;
    const alt = typeof entry.data.imageAlt === "string" ? entry.data.imageAlt : undefined;

    const match = entry.body?.match(markdownImage);
    const image = header ?? await resolveContentImage(entry.filePath, match?.[1] ?? match?.[2] ?? "");
    if (!image)
        return undefined;

    const longestEdge = Math.max(image.width, image.height);
    if (image.format === "svg" || image.format === "gif" || longestEdge <= previewImageSize)
        return { src: image.src, width: image.width, height: image.height, alt };

    // Scale the longest edge down
    const scale = previewImageSize / longestEdge;
    const built = await getImage({
        src: image,
        width: Math.round(image.width * scale),
        format: previewFormats.includes(image.format) ? image.format as ImageOutputFormat : "jpeg",
        quality: 80,
    });

    return {
        src: built.src,
        width: built.attributes.width ?? image.width,
        height: built.attributes.height ?? image.height,
        alt,
    };
}

export function isoDate (date: unknown): string | undefined {
    if (typeof date !== "string" && typeof date !== "number")
        return undefined;

    let parsed = new Date(date);
    if (isNaN(parsed.getTime()))
        parsed = new Date(Number(date));

    return isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

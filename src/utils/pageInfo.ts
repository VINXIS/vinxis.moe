import type { CollectionKey } from "astro:content";

export interface BasePageInfo {
    name: string;
    slug: string;
    collection: CollectionKey;
}

export type PageLink = Omit<BasePageInfo, "collection"> & {
    collection: CollectionKey | undefined;
}

export interface PageInfo extends PageLink {
    internalLinks: PageLink[];
}
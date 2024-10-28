import dateToString from "../src/utils/dateToString";

export default function remarkModifiedTime () {
    return function (tree, file) {
        if (file.data.astro.frontmatter.created)
            file.data.astro.frontmatter.created = dateToString(file.data.astro.frontmatter.created);
        if (file.data.astro.frontmatter.lastModified)
            file.data.astro.frontmatter.lastModified = dateToString(file.data.astro.frontmatter.lastModified);
    };
}
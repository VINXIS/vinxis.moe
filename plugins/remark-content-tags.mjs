export default function remarkContentTags () {
    return function (tree, file) {
        // Find any text in the markdown that contains a single # and text with no spaces after it
        if (!file.data.astro.frontmatter.tags)
            file.data.astro.frontmatter.tags = [];
        file.data.astro.frontmatter.tags.push(...file.value.match(/#([^\s#]+)/g)?.map(tag => tag.slice(1)) ?? []);
        file.data.astro.frontmatter.tags = [...new Set(file.data.astro.frontmatter.tags)];
    };
}
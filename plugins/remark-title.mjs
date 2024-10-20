
export function remarkTitle () {
    return function (tree, file) {
        // Check if the title already exists in the frontmatter
        if (file.data.astro.frontmatter.title)
            return;
        file.data.astro.frontmatter.title = file.stem;
    };
}
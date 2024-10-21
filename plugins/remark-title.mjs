export default function remarkTitle () {
    return function (tree, file) {
        // Check if the title already exists in the frontmatter, if not, set it to the file name
        file.data.astro.frontmatter.title = file.data.astro.frontmatter.title ?? file.stem;
    };
}
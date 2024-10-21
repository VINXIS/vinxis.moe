import { stat } from "fs";
import dateToString from "../src/utils/dateToString";

export default function remarkModifiedTime () {
    return function (tree, file) {
        stat(file.history[0], (err, stats) => {
            if (err)
                throw err;
            file.data.astro.frontmatter.lastModified = dateToString(file.data.astro.frontmatter.lastModified ?? stats.mtime);
            file.data.astro.frontmatter.created = dateToString(file.data.astro.frontmatter.created ?? stats.birthtime);
        });
    };
}
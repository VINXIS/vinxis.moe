import { execSync } from "child_process";

export function remarkModifiedTime () {
    return function (tree, file) {
        const filepath = file.history[0];
        const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
        file.data.astro.frontmatter.lastModified = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(new Date(result.toString())).replace(",", "");
    };
}
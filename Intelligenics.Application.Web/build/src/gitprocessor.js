"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class GitProcessor {
    /**
     * This method gets all the projects that have been changed
     */
    getProjects(commitCommand) {
        let commitsToProcess = "-2";
        if (commitCommand == "--commits-all")
            commitsToProcess = "";
        let commits = child_process_1.execSync(`git log --reverse ${commitsToProcess} --pretty=format:"%H"`).toString().split(/\r?\n/);
        if (!commits || 0 == commits.length)
            console.log("no commits found");
        console.log(commits);
        let projects = [];
        commits.reduce((previousCommit, nextCommit) => {
            let output = child_process_1.execSync(`git diff --name-only ${nextCommit} ${previousCommit}`);
            let directories = output.toString().split(/\r?\n/);
            if (0 == directories.length) {
                console.log("no differences identified in commit");
                return;
            }
            directories.forEach((directory) => {
                let subdirs = directory.split(/\//);
                // must exclude portal projects only modules are built this way
                if (directory.indexOf("portal") > 0)
                    return;
                if (subdirs.length < 3)
                    return;
                if (subdirs[1].indexOf(".") == -1)
                    return;
                // See if the project already exists
                let project = projects.find((item) => {
                    return item == subdirs[1];
                });
                if (!project)
                    projects.push(subdirs[1]);
            });
            return nextCommit;
        });
        return projects;
    }
}
exports.GitProcessor = GitProcessor;
//# sourceMappingURL=gitprocessor.js.map
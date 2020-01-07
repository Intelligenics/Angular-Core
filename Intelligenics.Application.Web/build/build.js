"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path = require("path");
const fs = require("fs");
// 1.  Find all modules with file changes
// git diff --name-only 5CC4879
// a. build each module
// npm run build
// b. test each module
// npm run test
// c. bump package version number
// run package bump
// d. publish package
// npm package 
// e. if published:  commit bumped version number change 
class ModuleBuilder {
    run() {
        this.getDifferences();
    }
    getDifferences() {
        let output = child_process_1.execSync("git diff --name-only 5CC4879");
        let directories = output.toString().split(/\r?\n/);
        if (0 == directories.length) {
            console.log("no differences identified in commit");
            return;
        }
        let projects = [];
        directories.forEach((directory) => {
            let subdirs = directory.split(/\//);
            if (subdirs.length < 3)
                return;
            // See if the project already exists
            let project = projects.find((item) => {
                return item == subdirs[1];
            });
            if (!project)
                projects.push(subdirs[1]);
            console.log(directory);
            console.log("\r\n");
        });
        console.log(projects);
    }
    getDirectories(basePath, directory) {
        let directories = fs.readdirSync(path.join(basePath, directory));
        return directories
            .filter((file) => {
            let stats = fs.lstatSync(path.join(basePath, directory, file));
            return stats.isDirectory();
        });
    }
}
exports.ModuleBuilder = ModuleBuilder;
let mb = new ModuleBuilder();
mb.run();
//# sourceMappingURL=build.js.map
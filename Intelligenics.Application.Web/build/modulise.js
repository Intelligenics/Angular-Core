"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
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
class Moduliser {
    run() {
        let projects = this.getChangedProjects();
    }
    runTask(project) {
    }
    /**
     * This method gets all the projects that have been changed
     */
    getChangedProjects() {
        let output = child_process_1.execSync("git diff --name-only 5CC4879");
        let directories = output.toString().split(/\r?\n/);
        if (0 == directories.length) {
            console.log("no differences identified in commit");
            return;
        }
        let projects = [];
        directories.forEach((directory) => {
            // must exclude portal projects only modules are built this way
            if (directory.indexOf("portal") > 0)
                return;
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
        return projects;
    }
}
exports.Moduliser = Moduliser;
console.log(process.argv);
let mb = new Moduliser();
mb.run();
//# sourceMappingURL=modulise.js.map
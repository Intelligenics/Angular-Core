"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path = require("path");
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
class Modulizer {
    run(script, commitNo) {
        let projects = this.getChangedProjects(commitNo);
        console.log("The following projects will be affected");
        console.log("==================================================================");
        console.log(projects);
        console.log("\r\n");
        projects.forEach(project => {
            let cwd = path.join("..", project);
            try {
                let scriptText = `npm run ${script} `;
                if (script == "install")
                    scriptText = `npm ${script} `;
                let buffer = child_process_1.execSync(scriptText, { cwd: cwd });
                console.log(buffer.toString());
            }
            catch (error) {
                console.log(error.message);
                process.exit(1);
            }
        });
    }
    /**
     * This method gets all the projects that have been changed
     */
    getChangedProjects(commitNo) {
        let output = child_process_1.execSync(`git diff --name-only ${commitNo}`);
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
        });
        return projects;
    }
}
exports.Modulizer = Modulizer;
let mb = new Modulizer();
if (process.argv.length != 4)
    throw "the script to call and the commitno must be specified";
mb.run(process.argv[2], process.argv[3]);
//# sourceMappingURL=modulize.js.map
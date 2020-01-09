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
class Modulizer {
    run(commitNo, script) {
        let git = new GitProcessor();
        let packageGen = new PackageGenerator();
        let projects = git.getChangedProjects(commitNo);
        console.log("The following projects will be affected");
        console.log("==================================================================");
        console.log(projects);
        console.log("\r\n");
        console.log("command is " + script);
        projects.forEach(project => {
            let cwd = path.join("..", project);
            try {
                if (script == "generate package") {
                    packageGen.generate(cwd);
                    return;
                }
                let buffer = child_process_1.execSync(script, { cwd: cwd });
                console.log(buffer.toString());
            }
            catch (error) {
                if (error.message)
                    console.log(error.message);
                else
                    console.log(error);
                process.exit(1);
            }
        });
    }
}
exports.Modulizer = Modulizer;
class GitProcessor {
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
exports.GitProcessor = GitProcessor;
class PackageGenerator {
    generate(projectPath) {
        let inputPackagePath = path.join(projectPath, "package.json");
        let outputPackagePath = path.join(projectPath, "dist/module", "package.json");
        if (!fs.existsSync(outputPackagePath))
            throw "unable to create package as package.json does not exist. Try calling prepublish first";
        let inputFile = fs.readFileSync(inputPackagePath);
        let outputFile = fs.readFileSync(outputPackagePath);
        let inputPackageJSON = JSON.parse(inputFile.toString());
        let outputPackageJSON = JSON.parse(outputFile.toString());
        this.setversion(inputPackageJSON, outputPackageJSON);
        this.addProperties(inputPackageJSON, outputPackageJSON);
        let fileOut = JSON.stringify(outputPackageJSON, null, 2);
        fs.writeFileSync(outputPackagePath, fileOut);
    }
    addProperties(inputPackageJSON, outputPackageJSON) {
        outputPackageJSON.name = inputPackageJSON.name;
        outputPackageJSON.author = inputPackageJSON.author;
        outputPackageJSON.keywords = inputPackageJSON.keywords;
        outputPackageJSON.repository = inputPackageJSON.repository;
        outputPackageJSON.license = inputPackageJSON.license;
        outputPackageJSON.peerDependencies = inputPackageJSON.dependencies;
        outputPackageJSON.dependencies = null;
        outputPackageJSON.devDependencies = null;
    }
    setversion(inputPackageJSON, outputPackageJSON) {
        let version = inputPackageJSON.version.split(".");
        // Update minor number only
        let latest = parseInt(version[2]);
        latest++;
        let finalversion = `${version[0]}.${version[1]}.${latest}`;
        outputPackageJSON.version = finalversion;
    }
}
exports.PackageGenerator = PackageGenerator;
let mb = new Modulizer();
if (process.argv.length < 3)
    throw "the commit no and the command must be specified";
let commitno = process.argv[2];
process.argv.shift();
process.argv.shift();
process.argv.shift();
let command = process.argv.join(" ");
mb.run(commitno, command);
//# sourceMappingURL=modulize.js.map
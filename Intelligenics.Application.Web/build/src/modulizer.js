"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gitprocessor_1 = require("./gitprocessor");
const packagegenerator_1 = require("./packagegenerator");
const child_process_1 = require("child_process");
const path = require("path");
class Modulizer {
    run(commitCommand, script) {
        let git = new gitprocessor_1.GitProcessor();
        let packageGen = new packagegenerator_1.PackageGenerator();
        let projects = git.getProjects(commitCommand);
        console.log("The following projects will be affected");
        console.log("==================================================================");
        console.log(projects.join("\r\n"));
        console.log("\r\n");
        console.log("command is " + script);
        let errorCount = 0;
        projects.forEach(project => {
            let cwd = path.join(process.cwd(), project);
            try {
                switch (script) {
                    case "generate package":
                        packageGen.generate(cwd);
                        break;
                    default:
                        let buffer = child_process_1.execSync(script, { cwd: cwd });
                        console.log(buffer.toString());
                        break;
                }
            }
            catch (error) {
                errorCount++;
                if (error.stdout)
                    console.log(error.stdout.toString());
                if (error.message)
                    console.log(error.message);
                if (error.stderr)
                    console.log(error.stderr.toString());
                else
                    console.log(error);
            }
        });
        if (errorCount > 0)
            process.exit(1);
    }
}
exports.Modulizer = Modulizer;
//# sourceMappingURL=modulizer.js.map
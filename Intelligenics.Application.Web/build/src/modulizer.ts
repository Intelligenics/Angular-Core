import { GitProcessor } from "./gitprocessor";
import { PackageGenerator } from "./packagegenerator";
import { execSync } from "child_process";

import path = require("path");



export class Modulizer
{
    public run(commitCommand: string, script: string, branch1: string, branch2: string): void
    {
        let git = new GitProcessor();
        let packageGen = new PackageGenerator();
        let projects = git.getProjects(commitCommand,branch1,branch2);
        console.log("The following projects will be affected");
        console.log("==================================================================");
        console.log(projects.join("\r\n"));
        console.log("\r\n");
        console.log("command is " + script);
        let errorCount = 0;
        projects.forEach(project =>
        {
            let cwd = path.join(process.cwd(), project);
            try
            {
                switch (script)
                {
                    case "generate package":
                        packageGen.generate(cwd);
                        break;
                    default:
                        let buffer = execSync(script, { cwd: cwd });
                        console.log(buffer.toString());
                        break;
                }
            }
            catch (error)
            {
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

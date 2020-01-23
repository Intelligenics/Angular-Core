import { execSync } from "child_process";

export class GitProcessor
{
    /**
     * This method gets all the projects that have been changed
     */
    public getProjects(commitCommand: string, branch1: string, branch2: string): Array<string>
    {
        // Default compare by branch
        let command = `${branch1}..${branch2}`;

        if (commitCommand != "-b") // Compare last 2 commits
        {
            let commits = execSync(`git log -2 --pretty=format:"%H"`).toString().split(/\r?\n/);

            if (!commits || 0 == commits.length)
            {
                console.log("no commits found");

                return [];
            }

            command = `${commits[0]} ${commits[1]}`;
        }

        let projects = [];

        let output = execSync(`git diff --name-only ${command}`);

        let directories = output.toString().split(/\r?\n/);

        if (0 == directories.length)
        {
            console.log("no differences identified in commit");
            return;
        }

        directories.forEach((directory: string) =>
        {
            let subdirs = directory.split(/\//);
            // must exclude portal projects only modules are built this way
            if (directory.indexOf("portal") > 0)
                return;
            if (subdirs.length < 3)
                return;
            if (subdirs[1].indexOf(".") == -1)
                return;
            // See if the project already exists
            let project = projects.find((item) =>
            {
                return item == subdirs[1];
            });
            if (!project)
                projects.push(subdirs[1]);
        });


        return projects;
    }


}

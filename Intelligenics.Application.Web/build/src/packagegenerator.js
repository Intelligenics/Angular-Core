"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
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
        let inputFileOut = JSON.stringify(inputPackageJSON, null, 2);
        let outputFileOut = JSON.stringify(outputPackageJSON, null, 2);
        fs.writeFileSync(inputPackagePath, inputFileOut);
        fs.writeFileSync(outputPackagePath, outputFileOut);
    }
    addProperties(inputPackageJSON, outputPackageJSON) {
        outputPackageJSON.name = inputPackageJSON.name;
        outputPackageJSON.author = inputPackageJSON.author;
        outputPackageJSON.keywords = inputPackageJSON.keywords;
        outputPackageJSON.repository = inputPackageJSON.repository;
        outputPackageJSON.license = inputPackageJSON.license;
        outputPackageJSON.peerDependencies = inputPackageJSON.dependencies;
        delete outputPackageJSON["dependencies"];
        delete outputPackageJSON["devDependencies"];
    }
    setversion(inputPackageJSON, outputPackageJSON) {
        let version = inputPackageJSON.version.split(".");
        // Update minor number only
        let latest = parseInt(version[2]);
        latest++;
        let finalversion = `${version[0]}.${version[1]}.${latest}`;
        outputPackageJSON.version = finalversion;
        inputPackageJSON.version = finalversion;
    }
}
exports.PackageGenerator = PackageGenerator;
//# sourceMappingURL=packagegenerator.js.map
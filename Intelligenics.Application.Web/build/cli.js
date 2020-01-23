#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulizer_1 = require("./src/modulizer");
class WhitelistValidator {
}
exports.WhitelistValidator = WhitelistValidator;
let mb = new modulizer_1.Modulizer();
if (process.argv.length < 3)
    throw "the command must be specified";
let commitCommand = process.argv[2];
let branch1 = process.argv[3];
let branch2 = process.argv[4];
process.argv.shift();
process.argv.shift();
if (process.argv[0] == "-b") {
    process.argv.shift();
    process.argv.shift();
    process.argv.shift();
}
let command = process.argv.join(" ");
mb.run(commitCommand, command, branch1, branch2);
//# sourceMappingURL=cli.js.map
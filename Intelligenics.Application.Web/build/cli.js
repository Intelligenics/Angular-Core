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
process.argv.shift();
process.argv.shift();
process.argv.shift();
let command = process.argv.join(" ");
mb.run(commitCommand, command);
//# sourceMappingURL=cli.js.map
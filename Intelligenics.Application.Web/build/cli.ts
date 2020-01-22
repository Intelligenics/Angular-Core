#!/usr/bin/env node

import { Modulizer } from "./src/modulizer";

export interface ITask
{
    run(...args: any[]);
}


export class WhitelistValidator
{

}

let mb = new Modulizer();

if (process.argv.length < 3)
    throw "the command must be specified";

let commitCommand = process.argv[2];

process.argv.shift();
process.argv.shift();
process.argv.shift();

let command = process.argv.join(" ");
mb.run(commitCommand, command);
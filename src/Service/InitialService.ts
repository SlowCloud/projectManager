import fs = require("fs");
import shell = require("shelljs");
import os = require("os");

const HOMEDIR = os.homedir();

export class InitialService {
    shell: typeof shell;
    constructor() {
        this.shell = shell;
    }

    first(): boolean {
        console.log("Checking init...");
        const dirs = fs.readdirSync(HOMEDIR);
        return !dirs.includes(".projects");
    }

    init(): void {
        console.log("Trying to make projects directory...");
        fs.mkdirSync(`${HOMEDIR}/.projects`);
        console.log("Done.");
    }
}
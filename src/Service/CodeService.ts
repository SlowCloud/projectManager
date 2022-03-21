import shell = require("shelljs");
import { Project } from "../domain/Project/Project";

export class CodeService {
    shell: typeof shell;

    constructor() {
        this.shell = shell;
    }

    openProject(project: Project) {
        this.shellCommand(`code ${project.url}`);
    }

    private shellCommand(command: string) {
        this.shell.exec(command);
    }
}
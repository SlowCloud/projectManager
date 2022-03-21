import { Project } from "../../domain/Project/Project";
import { IProjectRepository } from "../../domain/Project/Project.Repository";
import fs = require("fs");
const HOMEDIR = require("os").homedir();
const PROJECTDIR = `${HOMEDIR}/.projects`;

// in-memory
export class ProjectRepository implements IProjectRepository {
    projects: Project[];
    constructor() {
        this.projects = fs.readdirSync(PROJECTDIR)
        .map((projectName: string) => new Project(projectName,`${PROJECTDIR}/${projectName}`));
    }
    build(projectName: string): void {
        fs.mkdirSync(`${PROJECTDIR}/${projectName}`);
    }
    isProjectExist(projectName: string): boolean {
        return this.projects.find(project => project.name == projectName)? true : false;
    }
    find(projectName: any): Project {
        return this.projects.find((project) => project.name == projectName);
    }
    findAll(): Project[] {
        return this.projects;
    }
}
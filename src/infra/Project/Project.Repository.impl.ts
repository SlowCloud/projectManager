import { Project } from "../../domain/Project/Project";
import { IProjectRepository } from "../../domain/Project/Project.Repository";
import fs = require("fs");
import { Singleton } from "typescript-ioc";
const HOMEDIR = require("os").homedir();
const PROJECTDIR = `${HOMEDIR}/.projects`;

// in-memory?
@Singleton
class ProjectRepository implements IProjectRepository {
    private projects: Project[];
    constructor() {
        this._LoadProjects();
    }

    private _LoadProjects() {
        this.projects = fs.readdirSync(PROJECTDIR)
            .map((projectName: string) => new Project(projectName, `${PROJECTDIR}/${projectName}`));
    }

    build(projectName: string): void {
        fs.mkdirSync(`${PROJECTDIR}/${projectName}`);
        this._LoadProjects();
    }

    isProjectExist(projectName: string): boolean {
        return this.projects.find(project => project.isNameSame(projectName))? true : false;
    }

    find(projectName: string): Project {
        return this.projects.find((project) => project.name.name == projectName);
    }
    
    findAll(): Project[] {
        return this.projects;
    }
}

export {ProjectRepository};
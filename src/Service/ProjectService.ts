import { Singleton } from "typescript-ioc";
import { Project, ProjectName } from "../domain/Project/Project";
import { IProjectRepository } from "../domain/Project/Project.Repository";
import { ProjectRepository } from "../infra/Project/Project.Repository.impl";

@Singleton
class ProjectService {
    prRepository: IProjectRepository;

    constructor() {
        this.prRepository = new ProjectRepository();
    }

    loadProject(prName: string): Project {
        return this.prRepository.find(prName);
    }
    buildProject(prName: ProjectName) {
        this.prRepository.build(prName.name);
    }
    loadProjects(): Project[] {
        return this.prRepository.findAll();
    }
}

export {ProjectService};
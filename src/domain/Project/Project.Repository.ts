import { Project } from "./Project";

export interface IProjectRepository {
    build(projectName: string): void;
    findAll(): Project[];
    isProjectExist(projectName: string): boolean;
    find(projectName: string): Project;
}
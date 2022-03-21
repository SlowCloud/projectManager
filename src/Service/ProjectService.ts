import { Project } from "../domain/Project/Project";
import { IProjectRepository } from "../domain/Project/Project.Repository";
import { ProjectRepository } from "../infra/Project/Project.Repository.impl";
import fs = require("fs");
// TODO: fs랑 homedir를 모듈로 분리시키기. 여기저기 퍼져있음


// TODO: 기능 구현을 projectRepositoryImpl로 옮기기
export class ProjectService {
    projectRepository: IProjectRepository;
    constructor() {
        // TODO: make IOC Container or using typescript-ioc
        this.projectRepository = new ProjectRepository();
    }

    loadProjects(): Project[] {
        console.log("Loading Projects...");
        return this.projectRepository.findAll();
    }

    buildProject(projectName: string): void {

        // 이거 리포지토리가 해야 하는 일인가?
        if(this.projectRepository.isProjectExist(projectName)) {
            throw new Error("Same Name is Already Exist.");
        }

        this.projectRepository.build(projectName);
    }
}
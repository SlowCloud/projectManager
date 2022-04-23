import { exit } from "shelljs";
import { Inject, Singleton } from "typescript-ioc";
import { Menu } from "./src/domain/Menu/Menu";
import { Project, ProjectName } from "./src/domain/Project/Project";
import { ProjectService } from "./src/Service/ProjectService";
import { SelectService } from "./src/Service/SelectService";



abstract class Worker {
    async work(): Promise<void> {return;};
}

class ProjectSelectWorker extends Worker {
    @Inject private projectService: ProjectService;
    @Inject private selectService: SelectService;

    override async work() {
        let menu = Menu.getProjectMenu(this.projectService.loadProjects());
        let prName = await this.selectService.select(menu, "작업할 프로젝트를 선택해주세요.");
        let project: Project = this.projectService.loadProject(prName);
        project.open();
    }
}

class ProjectBuildWorker extends Worker {
    @Inject private projectService: ProjectService;
    @Inject private selectService: SelectService;
    
    override async work() {
        let prNameString: string = await this.selectService.getString("만들 프로젝트 이름을 입력해주세요.");
        let prName: ProjectName = new ProjectName(prNameString);
        this.projectService.buildProject(prName);
    }
}

class ExitWorker extends Worker {
    override async work() {
        exit(0);
    }
}

@Singleton
class WorkerFinder {
    findWorker(index: string): Worker {
        switch (index) {
            case "Select":
                return new ProjectSelectWorker();
            case "New":
                return new ProjectBuildWorker();
            case "Exit":
                return new ExitWorker();

            default:
                throw new Error(`index is weird! index:${index}`);
        }
    }
}

export {WorkerFinder};
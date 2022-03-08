import JobApplicationService from "./src/Job/JobApplicationService";
import MenuApplicationService from "./src/Menu/MenuApplicationService";
import MenuSelectService from "./src/Menu/MenuSelectService";

import { Menu, MenuComponent } from "./src/Menu/Menu";

interface IProjectRepository {
    check(): boolean;
    init();
    
}

class InitialService {
    projectRepository: IProjectRepository;
    constructor(projectRepository: IProjectRepository) {
        this.projectRepository = projectRepository;
    }

    first(): boolean {
        return this.projectRepository.check();
    }

    init(): void {
        this.projectRepository.init();
    }
}



let jobApplicationService: JobApplicationService;
let menuApplicationService: MenuApplicationService;
let menuSelectService: MenuSelectService;
let initialService: InitialService;

let menu: Menu = menuApplicationService.findMainMenu();
let comp: MenuComponent;

if(initialService.first()) {
    initialService.init();
}

while(true) {
    comp = menuSelectService.select(menu);
    if(comp.name == 'exit') break;
    jobApplicationService.runJob(comp);
    menu = menuApplicationService.findNextMenu(comp);
}


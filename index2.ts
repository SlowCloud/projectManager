import { InitialService } from "./src/Service/InitialService";

const initService = new InitialService();

if(initService.first()) {
    initService.init();
}

import { SelectService } from "./src/Service/SelectService";
import { ProjectService } from "./src/Service/ProjectService";
import { MenuService } from "./src/Service/MenuService";
import { CodeService } from "./src/Service/CodeService";

const menuService = new MenuService();
const projectService = new ProjectService();
const selectService = new SelectService();
const codeService = new CodeService();
// const jobService = new JobService();

let mainMenu = menuService.buildMainMenu();
let projectMenu = menuService.buildProjectMenu(projectService.loadProjects());
// menuService.buildMenu(menuService.convertProjectToComponent(projects));

mainloop();

async function mainloop() {
    while(true) {
        await selectService.select("원하는 작업을 선택해주세요.", mainMenu) // mainMenu.getQuestionString();
        .then(async ({selected}) => {
            switch(selected) {
                case "Select":
                    await selectService.select("프로젝트를 선택해주세요.", projectMenu)
                    .then(project => {
                        codeService.openProject(project);
                    })
                    break;
                
                // case "New":
                //     await inputService.getString("프로젝트 이름을 입력해주세요.")
                //     .then(projectName => {
                //         projectService.buildProject(projectName);
                //     })
                //     break;

                case "Exit":
                        process.exit(0);
            
                default:
                    throw new Error(`There's any cases! INPUT:${selected}`);
            }
        })
    }
}
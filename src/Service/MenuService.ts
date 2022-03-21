import { MainMenu, Menu, ProjectMenu } from "../domain/Menu/Menu";
import { Project } from "../domain/Project/Project";

export class MenuService {
    buildProjectMenu(projects: Project[]): Menu {
        console.log("Trying to make Project Menu...");
        return new ProjectMenu(projects);
    }

    buildMainMenu(): Menu {
        return new MainMenu();
    }
}

// buildMenu(menuType, IComponents?)

// class MenuFactory {
//     build(menuType: string): Menu {
//         switch(menuType) {
//             case "main":
//                 return new MainMenu();
//             case "project":
//                 return new ProjectMenu(new ProjectService().loadProjects());
//         }
//     }
// }
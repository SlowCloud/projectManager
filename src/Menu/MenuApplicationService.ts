import { Menu, MenuComponent } from "./Menu";
import MenuFindService from "./MenuFindService";
import NextMenuFindService from "./NextMenuFindService";

export default class MenuApplicationService {
    private menuFinder: MenuFindService;
    private nextMenuFinder: NextMenuFindService;

    constructor(menuFinder: MenuFindService, nextMenuFinder: NextMenuFindService) {
        this.menuFinder = menuFinder;
        this.nextMenuFinder = nextMenuFinder;
    }

    findMainMenu(): Menu {
        return this.menuFinder.find("MainMenu");
    }

    findNextMenu(menuComponent: MenuComponent) {
        return this.nextMenuFinder.findNextMenu(menuComponent);
    }
}
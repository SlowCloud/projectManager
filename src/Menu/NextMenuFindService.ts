import { Menu, MenuComponent } from "./Menu";
import { IMenuRepository } from "./MenuRepository";

export default class NextMenuFindService {
    private nextMenus: {compName: string, nextMenu: Menu}[];
    private menuRepository: IMenuRepository;
    
    constructor(menuRepository: IMenuRepository) {
        this.menuRepository = menuRepository;
        this.nextMenus = this.menuRepository.loadEveryNextMenus();
    }
    
    findNextMenu(menuComp: MenuComponent): Menu {
        return this.nextMenus.find((n) => n.compName == menuComp.name).nextMenu;
    }
}
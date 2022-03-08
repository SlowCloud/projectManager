import { IMenuRepository } from "./MenuRepository";
import { Menu } from "./Menu";

export default class MenuFindService {
    private menuRepository: IMenuRepository;
    
    constructor(menuRepository: IMenuRepository) {
        this.menuRepository = menuRepository;
    }

    find(menuName: string): Menu {
        return this.menuRepository.find(menuName);
    }
}
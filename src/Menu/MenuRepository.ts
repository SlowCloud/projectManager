import { Menu } from "./Menu";

export interface IMenuRepository {
    loadEveryNextMenus(): { compName: string; nextMenu: Menu; }[];
    find(menuName: string): Menu;
}
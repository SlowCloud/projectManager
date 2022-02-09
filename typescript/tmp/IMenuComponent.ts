import { IMenu } from "./IMenu";

interface IMenuComponent {
    work(): void;
    nextMenu(): IMenu;
}
class MenuComponent implements IMenuComponent {
    menu: IMenu
    constructor(event:()=>void, next: IMenu) {
        this.menu = next
        this.work = event
    }
    work(): void {
        throw new Error("Method not implemented.");
    }
    nextMenu(): IMenu {
        return this.menu
    }
}

// TODO: make factories that make menus

const test = () => {}

export {IMenuComponent, MenuComponent}
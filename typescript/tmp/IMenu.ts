import { stringify } from "querystring";
import { IMenuComponent } from "./IMenuComponent";

interface IMenu {
    menus: {name:string, value:IMenuComponent}[]
    add(name: string, m: IMenuComponent): void
}

class Menu implements IMenu {
    menus: {name:string, value:IMenuComponent}[]
    add(n: string, m: IMenuComponent): void {
        this.menus.push({name:n, value:m})
    }
}

export {IMenu, Menu}
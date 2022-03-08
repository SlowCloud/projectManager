export class MenuComponent { // 얘도 따로 분리할 수 있겠는데? 근데 담에 하자 이것까지 하면 넘 길어진다
    name: string;
    constructor(name: string) {
        if(name == null || name.length <= 0) {
            throw Error("component name is empty.");
        }
        this.name = name;
    }
}

export class Menu {
    menuComponents: MenuComponent[];
    constructor() {
        this.menuComponents = [];
    }

    addMenu(menuComponent: MenuComponent): void {
        this._checkComponentName(menuComponent);
        this.menuComponents.push(menuComponent);
    }

    private _checkComponentName(menuComponent: MenuComponent): void {
        if (this._sameNameIsExist(menuComponent)) {
            throw new Error("Same menu component is already exist.");
        }
    }

    private _sameNameIsExist(menuComponent: MenuComponent) {
        return this.menuComponents.some((component: MenuComponent) => component.name == menuComponent.name);
    }
}
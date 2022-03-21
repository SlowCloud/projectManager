import { Project } from "../Project/Project";

export class MenuComponent { // 얘도 따로 분리할 수 있겠는데? 근데 담에 하자 이것까지 하면 넘 길어진다
    readonly name: string;
    constructor(name: string) {
        if(name == null || name.length <= 0) {
            throw Error("component name is empty.");
        }
        this.name = name;
    }
}

export class Menu {
    readonly menuComponents: MenuComponent[];
    constructor() {
        this.menuComponents = [];
    }

    protected addMenu(menuComponent: MenuComponent): void {
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

export class MainMenu extends Menu {
    constructor() {
        super();
        this.addMenu(new MenuComponent("Select"));
        this.addMenu(new MenuComponent("Exit"));
    }
}

export class ProjectMenu extends Menu {
    constructor(projects: Project[]) {
        super();
        projects.forEach((project) => this.addMenu(new MenuComponent(project.name)));
    }
}

// 제일 잘 짰다고 생각하는 코드



/*
// TODO
Menu should have:

parent menu
child menus
menuScript

다음에 바꾸자 일단 1차 완성부터
*/
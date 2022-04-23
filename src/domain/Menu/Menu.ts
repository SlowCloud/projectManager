import { Project } from "../Project/Project";

export class MenuComponent {
    public readonly name: string;
    constructor(name: string) {
        if(name == null || name.length <= 0) {
            throw Error("component name is empty.");
        }
        this.name = name;
    }
}


export class Menu {
    private _menuComponents: MenuComponent[];
    
    public get menuComponents(): MenuComponent[] {
        return this._menuComponents;
    }
    public set menuComponents(value: MenuComponent[]) {
        this._menuComponents = value;
    }

    
    constructor() {
        this._menuComponents = [];
    }

    protected addMenu(menuComponent: MenuComponent): void {
        this._checkComponentName(menuComponent);
        this._menuComponents.push(menuComponent);
    }

    private _checkComponentName(menuComponent: MenuComponent): void {
        if (this._sameNameIsExist(menuComponent)) {
            throw new Error("Same menu component is already exist.");
        }
    }

    private _sameNameIsExist(menuComponent: MenuComponent) {
        return this._menuComponents.some((component: MenuComponent) => component.name == menuComponent.name);
    }


    
    static getMainMenu(): Menu {
        return new MainMenu();
    }

    static getProjectMenu(projects: Project[]) {
        return new ProjectMenu(projects);
    }
}

export class MainMenu extends Menu {
    constructor() {
        super();
        this.addMenu(new MenuComponent("Select"));
        this.addMenu(new MenuComponent("New"));
        this.addMenu(new MenuComponent("Exit"));
    }
}

export class ProjectMenu extends Menu {
    constructor(projects: Project[]) {
        super();
        projects.forEach((project) => this.addMenu(new MenuComponent(project.getName())));
    }
}
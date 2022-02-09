import { IComponentBuilder } from './IComponentBuilder';
import { IMenu, Menu } from './IMenu';
import { IMenuComponent } from './IMenuComponent';

export interface IMenuBuilder {
    buildMenu(kind: string): IMenu
}

export class MenuBuilder implements IMenuBuilder {
    componentBuilder: IComponentBuilder;

    constructor(cb: IComponentBuilder) {
        this.componentBuilder = cb;
    }

    buildMenu(kind: string): IMenu {
        switch(kind) {
            case 'MainMenu':
                return this.buildMainMenu();
                break;
        }
    }

    buildMainMenu(): IMenu {
        const m: IMenu = new Menu();
        const projectMenu = this.buildProjectMenu();
        m.add('select', projectMenu);
        m.add('new', this.componentBuilder.buildComponent('new'));
        m.add('exit', this.componentBuilder.buildComponent('exit'));
        return m;
    }
    buildProjectMenu(): IMenu {
        // TODO
        const m: IMenu = new Menu();
        this.projectLoader.loadProjects.forEach(project=>{
            m.add(project.name,project);
        });
        return m;
    }
}

// 이거 로우레벨 짜놓은거 다 지워버리고 다시짜보자
// 견적이 오지게 나오네 ㅋㅋㅋ
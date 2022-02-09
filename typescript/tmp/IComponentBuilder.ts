import { IMenuComponent, MenuComponent } from "./IMenuComponent";
import { IMenu } from "./IMenu";

export interface IComponentBuilder {
    buildComponent(kind: string, next: IMenu): IMenuComponent;
}

export class ComponentBuilder implements IComponentBuilder {
    buildComponent(kind: string, next: IMenu): IMenuComponent {
        switch(kind) {
            case 'new':
                return new MenuComponent(()=>{}, next)
        }
    }
}

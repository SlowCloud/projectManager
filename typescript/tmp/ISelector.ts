import {IMenuComponent} from './IMenuComponent'
import inquirer from 'inquirer'
import { IMenu } from './IMenu'

interface ISelector {
    select(menu: IMenu): IMenuComponent;
}

// TODO: make inquirer
class Selector implements ISelector {
    select(menu: IMenu): IMenuComponent {
        throw new Error('Method not implemented.')
    }
}

export {ISelector, Selector}
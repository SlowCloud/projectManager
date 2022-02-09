import inquirer from 'inquirer'
interface ISelector {
    select(menu: IMenu);

}
class Selector implements ISelector {
    select(menu: IMenu) {
        if(!menu || menu.empty()) return undefined;
        const result = inquirer.prompt({
            type:'list',
            name:'menu',
            choices:menu
        })
    }

}
export {ISelector, Selector}
const inquirer = require("inquirer");
import { Menu } from "../domain/Menu/Menu";

// TODO
export class SelectService {
    async select(question: string, menu: Menu) {
        return await inquirer.prompt({
            type: "list",
            name: 'selected',
            message: question,
            choices: menu.menuComponents
        })
    }
}
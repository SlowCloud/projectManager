import { Menu } from "../domain/Menu/Menu";
import * as inquirer from "inquirer";
import { Singleton } from "typescript-ioc";

// https://www.npmjs.com/package/inquirer

@Singleton
class SelectService {
    async getString(comment: string): Promise<string> {
        let answer = await inquirer.prompt({
            type: "input",
            name: "answer",
            message: comment
        })
        return answer.answer;
    }
    
    async select(menu: Menu, comment: string): Promise<string> {
        let answer = await inquirer.prompt({
            type: "list",
            name: "answer",
            message: comment,
            choices: menu.menuComponents
        })
        console.log(answer.answer);
        return answer.answer;
    }
}


export {SelectService};
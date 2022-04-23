import { SelectService } from "./src/Service/SelectService";
import { Menu, MenuComponent } from "./src/domain/Menu/Menu";
import { WorkerFinder } from "./Worker";
import { Inject } from "typescript-ioc/dist/decorators";



class Main {
    @Inject private selectService: SelectService;
    @Inject private workerFinder: WorkerFinder;

    async work() {
        let menu_: Menu = Menu.getMainMenu();
        let choosen: string = await this.selectService.select(menu_, "작업하실 메뉴를 선택해주세요.");
        await this.workerFinder.findWorker(choosen).work();
    }
}


const main: Main = new Main();

const run = async () => {
    while(true) {
        await main.work();
    }
}

run();
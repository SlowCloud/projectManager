// main

import { IMenu } from './IMenu';
import { IMenuComponent, MenuComponent } from './IMenuComponent'
import { ISelector } from "./tmp/ISelector";
import { IMenuBuilder, MenuBuilder } from './MenuBuilder';

let selector: ISelector // = new Selector()
let menu: IMenu
let choosen: IMenuComponent
let menuBuilder: IMenuBuilder

// menuBuilder = new MenuBuilder()

menu = menuBuilder.buildMenu('MainMenu');

/*
메뉴를 선택한다
선택한 메뉴의 작업을 한다
다음 메뉴로 이동한다
*/

while(true) {
    const choosen = selector.select(menu)
    choosen.work()
    menu = choosen.nextMenu()
}

// 제발 제일 상위에서부터 만들기
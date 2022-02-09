#!/usr/bin/node

export const inquirer = require('inquirer');
export const fs = require('fs');
export const os = require('os');
const HOMEDIR = os.homedir();
const mainMenus = ['select', 'new', 'exit'];
const PROJECTDIR = HOMEDIR + '/.projects';
const projects = fs.readdirSync(PROJECTDIR);
export const shell = require('shelljs');

console.log("프로젝트 매니저입니다.");

loop();

export async function loop() {
    while (true) {
        const answer = await getAnswer();
        await work(answer);
    }
}

export async function getAnswer() {
    const selectMenu = {
        type: 'list',
        choices: mainMenus,
        name: 'menu',
        message: '원하는 작업을 선택하세요.'
    }
    return await inquirer.prompt(selectMenu)
}


export async function work(answer) {
    const works = {
        'select': whenSelect,
        'new': whenNew,
        'exit': whenExit,
    };
    await works[answer.menu]();
}

export async function whenExit() {
    process.exit(0);
}

export async function whenNew() {
    const askProjectName = {
        type: 'input',
        name: 'name',
        message: '프로젝트 이름을 입력해주세요.'
    };
    await inquirer.prompt(askProjectName)
        .then((project) => {
            makeProject(project);
            projectUpdate(project);
        });

    function makeProject(project) {
        return fs.mkdirSync(`${PROJECTDIR}/${project.name}`);
    }
    function projectUpdate(project) {
        projects.push(project.name);
    }
}

export async function whenSelect() {
    const selectProject = {
        type: 'list',
        choices: projects,
        name: 'name',
        message: '프로젝트를 골라주세요.'
    };
    await inquirer.prompt(selectProject)
        .then(openProject);

    function openProject(project) {
        return shell.exec(`code ${PROJECTDIR}/${project.name}`);
    }
}
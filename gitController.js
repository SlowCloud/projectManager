const shell = require('shelljs');

export function commit() {
    shell.exec('git commit');
}

export function add(files) {
    files = files?? ['*']
    files.forEach(file => {
        shell.exec(`git add ${files}`)
    });
}

export function push() {

}

export function init() {
    shell.exec('git init');
}

export function branch() {

}
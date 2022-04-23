import shelljs = require('shelljs');

export class Project {
    open() {
        shelljs.exec(`code ${this.url.url}`);
    }

    isNameSame(projectName: string): boolean {
        return this.name.name == projectName;
    }

    public readonly name: ProjectName;
    public readonly url: ProjectUrl;

    constructor(name: string, url: string) {
        this.name = new ProjectName(name);
        this.url = new ProjectUrl(url);
    }
    
    getName(): string {
        return this.name.name;
    }
}

export class ProjectName {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class ProjectUrl {
    public readonly url: string;

    constructor(url: string) {
        this.url = url;
    }
}
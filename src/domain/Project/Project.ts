export class Project {
    readonly name: string;
    readonly url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}
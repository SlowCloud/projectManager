class Project {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        if (name == null || url == null) {
            throw new Error("project name or url is empty.");
        }
        this.name = name;
        this.url = url;
    }
}

interface IProjectRepository {
    check(): boolean;
    init(): void;
}



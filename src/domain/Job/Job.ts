export class Job {
    work: () => void;
    constructor(f: () => void) {
        if (f == null) {
            throw Error("job function is empty.");
        }
        this.work = f;
    }
}
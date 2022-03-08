import { Job } from "./Job";

export interface IJobRepository {
    addJobConnect(newJob: { compName: string; job: Job; }): void;
    loadEveryJobs(): { compName: string; job: Job; }[];
}

// TODO
export class JobRepository implements IJobRepository {
    addJobConnect(newJob: { compName: string; job: Job; }): void {
        throw new Error("Method not implemented.");
    }
    loadEveryJobs(): { compName: string; job: Job; }[] {
        throw new Error("Method not implemented.");
    }
}
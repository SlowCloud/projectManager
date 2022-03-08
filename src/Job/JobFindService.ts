import { Job } from "./Job";
import { IJobRepository, JobRepository } from "./JobRepository";
import { MenuComponent } from "../Menu/Menu";

// const jobs: {compName: string, job: Job}[] = [];
// const jobRepository: IJobRepository = new JobRepository();

// export function findJob(menuComp: MenuComponent): Job {
//     return jobs.find((j) => j.compName == menuComp.name).job;
// }

export class JobFindService {
    private jobs: {compName: string, job: Job}[];
    private jobRepository: IJobRepository;

    constructor(jobRepository: IJobRepository) {
        this.jobRepository = jobRepository;
        this.jobs = this.jobRepository.loadEveryJobs();
    }
    
    findJob(menuComp: MenuComponent): Job {
        return this.jobs.find((j) => j.compName == menuComp.name).job;
    }
}

// export default new JobFindService(new JobRepository());

/*



*/
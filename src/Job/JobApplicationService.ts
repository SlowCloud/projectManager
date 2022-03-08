import { JobFindService } from "./JobFindService";
import { MenuComponent } from "../Menu/Menu";

export default class JobApplicationService {
    private jobFindService: JobFindService;

    constructor(jobFindService: JobFindService) {
        this.jobFindService = jobFindService;
    }

    runJob(menuComponent: MenuComponent): void {
        this.jobFindService.findJob(menuComponent).work();
    }
}
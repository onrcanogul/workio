import { BaseEntity } from "./base/baseEntity";
import { Job } from "./job";

export interface Application extends BaseEntity {
  message: string;
  jobId: string;
  userId: string;
  status: ApplicationStatus;
  user: any;
  job: Job;
}

export enum ApplicationStatus {
  Pending,
  Accepted,
  Rejected,
}

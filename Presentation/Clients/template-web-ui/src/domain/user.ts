import { Application } from "./application";
import { Job } from "./job";

export interface User {
  id: string;
  username: string;
  email: string;
  applications: Application[];
  jobs: Job[];
}

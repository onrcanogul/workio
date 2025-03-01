import { BaseEntity } from "./base/baseEntity";
import { Job } from "./job";

export interface Category extends BaseEntity {
  name: string;
  description: string;
  backgroundImage: string;
  jobs: Job[];
}

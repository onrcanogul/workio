import { BaseEntity } from "./base/baseEntity";
import { Category } from "./category";

export interface Job extends BaseEntity {
  userId: string;
  categoryId: string;
  title: string;
  content: string;
  price: number;
  location: string;
  status: JobStatus;
  user: any;
  category: Category;
  applications: any[];
}

export enum JobStatus {
  Open,
  Done,
}

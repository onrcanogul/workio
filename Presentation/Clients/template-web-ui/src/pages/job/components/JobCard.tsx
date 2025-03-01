import React from "react";
import "../../../styles/jobCard.css"; // CSS dosyasını unutma!

interface JobCardProps {
  job: {
    title: string;
    category: { name: string };
    location: string;
    price: number;
    status: JobStatus;
  };
}

enum JobStatus {
  Open,
  Done,
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h2 className="job-title">{job.title}</h2>
        <span
          className={`job-status ${
            job.status === JobStatus.Open ? "open" : "done"
          }`}
        >
          {job.status === JobStatus.Open ? "Open" : "Done"}
        </span>
      </div>
      <p className="job-category">{"Yemek"}</p>
      <p className="job-location">📍 {job.location}</p>
      <p className="job-price">${job.price}</p>
    </div>
  );
};

export default JobCard;

import React, { useState } from "react";
import "../../../styles/jobCard.css"; // CSS dosyasını unutma!
import { useTranslation } from "react-i18next";
import { Job } from "../../../domain/job";
import { JobDetailModal } from "./JobDetailModal";

interface JobCardProps {
  job: Job;
}

enum JobStatus {
  Open,
  Done,
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="job-card"
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      >
        <div className="job-card-header">
          <h2 className="job-title">{job.title}</h2>
          <span
            className={`job-status ${
              job.status === JobStatus.Open ? "open" : "done"
            }`}
          >
            {job.status === JobStatus.Open ? t("open") : t("done")}
          </span>
        </div>
        <p className="job-category">{job.category.name}</p>
        <p className="job-location">📍 {job.location}</p>
        <p className="job-price">${job.price}</p>
      </div>

      <JobDetailModal open={open} handleClose={handleClose} job={job} />
    </>
  );
};

export default JobCard;

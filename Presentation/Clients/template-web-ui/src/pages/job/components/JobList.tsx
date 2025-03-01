import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { useAppDispatch } from "../../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { fetchJobs } from "../../../features/jobSlice";
import BlockUI from "../../../utils/block-ui";
import "../../../styles/JobList.css";

interface JobListProps {
  filters: {
    category: string;
    location: string;
    min: string;
    max: string;
  };
}

const JobList: React.FC<JobListProps> = ({ filters }) => {
  const dispatch = useAppDispatch();
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchJobList = async () => {
      setLoading(true);
      if (
        filters.category === "" &&
        filters.location === "" &&
        filters.max === "" &&
        filters.min === ""
      ) {
        await dispatch(fetchJobs());
      }
      setLoading(false);
    };

    fetchJobList();
  }, [filters]);

  return (
    <>
      {loading ? (
        <BlockUI open={loading} message="İşler yükleniyor" />
      ) : (
        <div className="job-list">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </>
  );
};

export default JobList;

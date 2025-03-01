import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

interface JobListProps {
  filters: {
    category: string;
    location: string;
    price: string;
    sector: string;
  };
}

const fakeJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "New York",
    price: "$100k+",
    sector: "IT",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "San Francisco",
    price: "$80k-$100k",
    sector: "IT",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Facebook",
    location: "New York",
    price: "$120k+",
    sector: "Finance",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Apple",
    location: "San Francisco",
    price: "$70k-$90k",
    sector: "Design",
  },
  {
    id: 5,
    title: "Cybersecurity Analyst",
    company: "Microsoft",
    location: "Seattle",
    price: "$90k-$110k",
    sector: "Security",
  },
];

const JobList: React.FC<JobListProps> = ({ filters }) => {
  const [jobs, setJobs] = useState(fakeJobs);

  useEffect(() => {
    const filteredJobs = fakeJobs.filter(
      (job) =>
        (!filters.category ||
          job.title.toLowerCase().includes(filters.category.toLowerCase())) &&
        (!filters.location || job.location === filters.location) &&
        (!filters.price || job.price === filters.price) &&
        (!filters.sector || job.sector === filters.sector)
    );
    setJobs(filteredJobs);
  }, [filters]);

  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;

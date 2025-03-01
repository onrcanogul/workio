import React from "react";
import { Card } from "semantic-ui-react";

interface JobCardProps {
  job: { id: number; title: string; company: string; location: string };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{job.title}</Card.Header>
        <Card.Meta>{job.company}</Card.Meta>
        <Card.Description>Location: {job.location}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default JobCard;

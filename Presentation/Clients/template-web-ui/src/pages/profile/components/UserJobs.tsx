import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Job } from "../../../domain/job";
import { useTranslation } from "react-i18next";

interface Props {
  jobs: Job[];
}

const UserJobs: React.FC<Props> = ({ jobs }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{t("jobs")}</Typography>
        <List>
          {jobs != undefined && jobs?.length > 0 ? (
            jobs.map((job, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={job.title}
                  secondary={job.user.name ?? "oogul"}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2">{t("jobNotFound")}</Typography>
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserJobs;

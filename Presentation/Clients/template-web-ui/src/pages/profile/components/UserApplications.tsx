import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Application } from "../../../domain/application";
import { useTranslation } from "react-i18next";

interface Props {
  applications: Application[];
}

const UserApplications: React.FC<Props> = ({ applications }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{t("applications")}</Typography>
        <List>
          {applications != undefined && applications?.length > 0 ? (
            applications.map((app, index) => (
              <ListItem key={index}>
                <ListItemText primary={app.job.title} secondary={app.message} />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2">{t("applicationNotFound")}</Typography>
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserApplications;

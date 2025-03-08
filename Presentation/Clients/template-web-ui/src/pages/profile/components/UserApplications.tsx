import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Chip,
  Box,
  Divider,
} from "@mui/material";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Application, ApplicationStatus } from "../../../domain/application";
import { useTranslation } from "react-i18next";

interface Props {
  applications: Application[];
}

const statusColors = {
  [ApplicationStatus.Pending]: "warning",
  [ApplicationStatus.Accepted]: "success",
  [ApplicationStatus.Rejected]: "error",
};

const UserApplications: React.FC<Props> = ({ applications }) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        {t("applications")}
      </Typography>
      {applications && applications.length > 0 ? (
        <List>
          {applications.map((app, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {/* İş Başlığı */}
                      <Typography variant="subtitle1" fontWeight="bold">
                        {app.job.title}
                      </Typography>

                      {/* Başvuru Tarihi */}
                      <Typography variant="caption" color="textSecondary">
                        {format(
                          new Date(app.createdDate),
                          "dd MMM yyyy HH:mm",
                          { locale: tr }
                        )}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <>
                      {/* Başvuru Mesajı */}
                      <Typography variant="body2" color="textSecondary">
                        {app.message}
                      </Typography>

                      {/* Durum ve İlan Sahibi */}
                      <Box
                        mt={1}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Chip
                          label={t(`status.${ApplicationStatus[app.status]}`)}
                          color={statusColors[app.status] as any}
                          variant="outlined"
                        />
                        <Typography variant="caption" color="textSecondary">
                          {t("jobOwner")}: {app.job.user.username ?? "oogul"}
                        </Typography>
                      </Box>
                    </>
                  }
                />
              </ListItem>
              {index < applications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="textSecondary">
          {t("applicationNotFound")}
        </Typography>
      )}
    </Paper>
  );
};

export default UserApplications;

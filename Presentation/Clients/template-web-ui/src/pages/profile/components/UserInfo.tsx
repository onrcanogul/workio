import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Rating,
} from "@mui/material";
import { User } from "../../../domain/user";
import { useTranslation } from "react-i18next";

interface Props {
  user: User;
}

const UserInfo: React.FC<Props> = ({ user }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent style={{ textAlign: "center" }}>
        <Avatar
          alt={user.username}
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          sx={{ width: 80, height: 80, margin: "auto" }}
        />
        <Typography variant="h5">{user.username}</Typography>
        <Typography variant="body2" color="textSecondary">
          {user.email}
        </Typography>

        {/* Ortalama Puan */}
        <Box mt={2}>
          <Typography variant="body1">{t("averageReview")}</Typography>
          <Rating value={5.5} precision={0.1} readOnly />
          <Typography variant="body2" color="textSecondary">
            ({5.5} / 5)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserInfo;

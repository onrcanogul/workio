import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, CircularProgress } from "@mui/material";
import UserInfo from "./components/UserInfo";
import UserApplications from "./components/UserApplications";
import UserJobs from "./components/UserJobs";
import { getById } from "../../features/userSlice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useSelector((state: RootState) => state.user);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) dispatch(getById(id));
  }, [id, dispatch]);

  if (loading) {
    return (
      <Container style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!user) {
    return <p>Kullanıcı bulunamadı.</p>;
  }

  return (
    <Container sx={{ marginTop: "110px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <UserInfo user={user} />
        </Grid>
        <Grid item xs={12} md={4}>
          <UserApplications applications={user.applications} />
        </Grid>
        <Grid item xs={12} md={4}>
          <UserJobs jobs={user.jobs} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;

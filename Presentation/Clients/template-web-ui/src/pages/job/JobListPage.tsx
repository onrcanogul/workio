// JobListPage.tsx
import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import FilterSection from "./components/FilterSection";
import JobList from "./components/JobList";

const JobListPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isL = useMediaQuery(theme.breakpoints.down("md"));
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
    sector: "",
  });
  const [appliedFilters, setAppliedFilters] = useState({
    category: searchParams.get("category") || "",
    location: searchParams.get("location") || "",
    price: searchParams.get("price") || "",
    sector: searchParams.get("sector") || "",
  });

  const applyFilters = () => {
    setSearchParams(appliedFilters);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2}>
        {isMobile && isL ? (
          <Grid item xs={12}>
            <Box sx={{ width: "100%", padding: "16px" }}>
              <FilterSection filters={filters} setFilters={setFilters} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setAppliedFilters(filters);
                  applyFilters();
                }}
                fullWidth
              >
                Apply Filters
              </Button>
            </Box>
            <Divider sx={{ marginY: "16px" }} />
          </Grid>
        ) : (
          <Grid item xs={2} marginLeft={"50px"}>
            <Box
              sx={{
                width: "180px",
                position: "relative",
                marginLeft: 0,
              }}
            >
              <FilterSection filters={filters} setFilters={setFilters} />
              <Button
                sx={{ marginTop: "20px" }}
                variant="contained"
                color="primary"
                onClick={() => {
                  setAppliedFilters(filters);
                  applyFilters();
                }}
                fullWidth
              >
                Apply Filters
              </Button>
            </Box>
          </Grid>
        )}
        {/* Ayrımı sağlayan çizgi */}
        {!isMobile && !isL && (
          <Grid item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: "100vh", borderRight: "2px solid #ccc" }}
            />
          </Grid>
        )}
        {/* Sağ Taraf (Job Listesi) */}
        <Grid item xs>
          <JobList filters={appliedFilters} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobListPage;

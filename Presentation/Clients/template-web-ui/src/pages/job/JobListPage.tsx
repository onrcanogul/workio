import React, { useEffect, useState } from "react";
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
import { fetchCategories } from "../../features/categorySlice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const JobListPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isL = useMediaQuery(theme.breakpoints.down("md"));
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  let categoryOptions: { key: string; text: string; value: string }[] = [];

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  categoryOptions = categories.map((category) => ({
    key: category.id,
    text: category.name,
    value: category.id,
  }));

  // URL'deki parametreleri varsayılan olarak state'e ekle
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    location: searchParams.get("location") || "",
    min: searchParams.get("min") || "",
    max: searchParams.get("max") || "",
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);

  useEffect(() => {
    // Sayfa yüklendiğinde URL parametrelerini tekrar state'e yükle
    setFilters({
      category: searchParams.get("category") || "",
      location: searchParams.get("location") || "",
      min: searchParams.get("min") || "",
      max: searchParams.get("max") || "",
    });
  }, [searchParams]);

  const applyFilters = () => {
    setSearchParams(filters);
    setAppliedFilters(filters);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2}>
        {isMobile && isL ? (
          <Grid item xs={12}>
            <Box sx={{ width: "100%", padding: "16px" }}>
              <FilterSection
                filters={filters}
                setFilters={setFilters}
                queryCategory={filters.category}
                categoryOptions={categoryOptions}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={applyFilters}
                fullWidth
              >
                Apply Filters
              </Button>
            </Box>
            <Divider sx={{ marginY: "16px" }} />
          </Grid>
        ) : (
          <Grid item xs={2} marginLeft={"50px"}>
            <Box sx={{ width: "180px", position: "relative", marginLeft: 0 }}>
              <FilterSection
                filters={filters}
                setFilters={setFilters}
                queryCategory={filters.category}
                categoryOptions={categoryOptions}
              />
              <Button
                sx={{ marginTop: "20px" }}
                variant="contained"
                color="primary"
                onClick={applyFilters}
                fullWidth
              >
                Apply Filters
              </Button>
            </Box>
          </Grid>
        )}
        {!isMobile && !isL && (
          <Grid item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: "100vh", borderRight: "2px solid #ccc" }}
            />
          </Grid>
        )}
        <Grid item xs>
          <JobList filters={appliedFilters} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobListPage;

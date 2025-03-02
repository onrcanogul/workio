import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axiosInstance";

export const fetchJobs = createAsyncThunk("jobs/fetchCategories", async () => {
  const response = await api.get("/job");
  return response.data.data;
});

export const filteredJobs = createAsyncThunk(
  "jobs/fetchCategories",
  async ({
    category,
    min,
    max,
    location,
  }: {
    category: string;
    min: string;
    max: string;
    location: string;
  }) => {
    const model = {
      categoryId: category,
      min: parseInt(min),
      max: parseInt(max),
      location,
    };
    const response = await api.post("/job/filter", model);
    return response.data.data;
  }
);

interface JobsState {
  jobs: any[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filteredJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filteredJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(filteredJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default jobsSlice.reducer;

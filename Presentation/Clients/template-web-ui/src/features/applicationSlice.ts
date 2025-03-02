import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axiosInstance";
import { Application } from "../domain/application";
import ToastrService from "../utils/toastr";

interface ApplicationState {
  applications: Application[];
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: ApplicationState = {
  applications: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const createApplication = createAsyncThunk(
  "application/create",
  async (model: Partial<Application>, thunkAPI) => {
    try {
      const response = await api.post("/application", model);
      if (response.data.isSuccessful) {
        ToastrService.success("Başvuru alındı");
      } else {
        ToastrService.error("Başvuru alınırken bir hata meydana geldi");
      }
    } catch (error) {
      ToastrService.error("Başvuru alınırken bir hata meydana geldi");
      return thunkAPI.rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createApplication.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(createApplication.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.error = action.payload as string;
      });
  },
});

export const { resetState } = applicationSlice.actions;
export default applicationSlice.reducer;

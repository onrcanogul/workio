import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../domain/user";
import api from "../api/axiosInstance";
import ToastrService from "../utils/toastr";
import i18n from "../utils/i18n";

interface UserState {
  user: User;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
};

export const getById = createAsyncThunk(
  "user/fetch",
  async (id: string, thunkAPI) => {
    try {
      const response = await api.get(`user/${id}`);
      if (response.data.data === null) {
        ToastrService.error("İlgili profil bulunamadı");
        return;
      }
      return response.data.data;
    } catch (error) {
      ToastrService.error(i18n.t("loginError"));
      return thunkAPI.rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getById.rejected, (state) => {
      state.loading = false;
      state.user = null;
    });
  },
});

export default userSlice.reducer;

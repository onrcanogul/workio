import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axiosInstance";
import { Category } from "../domain/category";

// API'den Kategorileri Getiren Thunk
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await api.get("/category"); // API URL'ini değiştir
    return response.data.data;
  }
);

interface CategoryState {
  categories: Category[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  status: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Veri alınırken hata oluştu.";
      });
  },
});

export default categorySlice.reducer;

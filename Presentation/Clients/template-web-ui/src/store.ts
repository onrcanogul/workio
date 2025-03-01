import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import categoryReducer from "./features/categorySlice";
import jobReducer from "./features/jobSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    job: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

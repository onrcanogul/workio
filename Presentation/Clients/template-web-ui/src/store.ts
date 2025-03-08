import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import categoryReducer from "./features/categorySlice";
import jobReducer from "./features/jobSlice";
import applicationReducer from "./features/applicationSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    job: jobReducer,
    application: applicationReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./slices/admin-slice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

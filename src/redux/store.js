import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./slices/admin-slice";
import { loginReducer } from "./slices/login-slice"
export const store = configureStore({
  reducer: {
    admin: adminReducer,
    login: loginReducer
  },
});

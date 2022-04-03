import { createSlice } from "@reduxjs/toolkit";
import { login } from "../action-creaters";

const initialState = {
    email: "",
    token: ""
};
export const adminSlice = createSlice({
  name: "login",
  initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload; 
      })
  }
});


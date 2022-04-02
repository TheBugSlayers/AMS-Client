import { createSlice } from "@reduxjs/toolkit";
import { getManagerPendingReqs, getManagerReqStatus } from "../action-creaters";

const initialState = {
  pendingVerification: "",
  verifiedManagers: "",
  rejectedManagers: "",
  managerRequests: [],
  userList: [],
  eventReservation: [],
};
export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getManagerReqStatus.pending, (state) => {})
      .addCase(getManagerReqStatus.fulfilled, (state, action) => {
        console.log(action.payload);
        state.pendingVerification = action.payload.pendingRequest;
        state.verifiedManagers = action.payload.verifiedRequest;
        state.rejectedManagers = action.payload.rejectedRequest;
      })
      .addCase(getManagerPendingReqs.fulfilled, (state, action) => {
        state.managerRequests = action.payload.managerList;
      });
  },
});

export const {} = adminSlice.actions;
export const adminReducer = adminSlice.reducer;

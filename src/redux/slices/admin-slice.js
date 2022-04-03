import { createSlice } from "@reduxjs/toolkit";
import {
  acceptManagerReq,
  fetchAllEvents,
  fetchAllUsers,
  getManagerPendingReqs,
  getManagerReqStatus,
  rejectManagerReq,
} from "../action-creaters";

const initialState = {
  pendingVerification: "",
  verifiedManagers: "",
  rejectedManagers: "",
  managerRequests: [],
  userList: [],
  eventList: [],
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
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.eventList = action.payload;
      })
      .addCase(acceptManagerReq.fulfilled, (state, action) => {})
      .addCase(rejectManagerReq.fulfilled, (state, action) => {});
  },
});

export const {} = adminSlice.actions;
export const adminReducer = adminSlice.reducer;

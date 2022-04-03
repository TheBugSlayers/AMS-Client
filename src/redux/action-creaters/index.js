import { createAsyncThunk } from "@reduxjs/toolkit";

export const adminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ4YzE1YTQ5MjEwYzQxMjM1NGFiMWYiLCJpYXQiOjE2NDg5NTgyNDd9.5ND1pvtpcjcH3_nkG9yFuK8hkM1GGWTe_DoknDDj_tA";
export const getManagerReqStatus = createAsyncThunk(
  "admin/getManagerReqStatus",
  async (token = adminToken, thunkAPI) => {
    //pending
    const pendingResponse = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/managerList?status=pending",
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      }
    );
    const pendingData = await pendingResponse.json();
    const pendingRequest = pendingData.count;

    // verified
    const verifiedResponse = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/managerList?status=true",
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      }
    );
    const verifiedData = await verifiedResponse.json();
    const verifiedRequest = verifiedData.count;

    // rejected
    const rejectedResponse = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/managerList?status=false",
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      }
    );
    const rejectedData = await rejectedResponse.json();
    const rejectedRequest = rejectedData.count;

    return {
      pendingRequest,
      verifiedRequest,
      rejectedRequest,
    };
  }
);

export const getManagerPendingReqs = createAsyncThunk(
  "admin/getManagerPendingReqs",
  async (token = adminToken, thunkAPI) => {
    const response = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/managerList?status=pending",
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      }
    );
    const data = await response.json();

    return data;
  }
);

// fetching all users data
export const fetchAllUsers = createAsyncThunk(
  "admin/fetchAllUsers",
  async (token = adminToken, thunkAPI) => {
    const response = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/allUsers",
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

//fetching all reserved events
export const fetchAllEvents = createAsyncThunk(
  "admin/fetchAllEvents",
  async (token = adminToken, thunkAPI) => {
    const response = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/allEvents",
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

//accept manager request
export const acceptManagerReq = createAsyncThunk(
  "admin/acceptManagerReq",
  async (managerId, event, thunkAPI) => {
    event.preventDefault();

    const response = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/setManagerStatus",
      {
        method: "POST",
        body: JSON.stringify({
          managerId: managerId,
          verificationStatus: "true",
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + adminToken,
        },
      }
    );
    const data = await response.json();
    if (!data) {
      throw new Error("id not found");
    } else {
      console.log(data);
      window.location.reload();
    }
    return data;
  }
);
//reject manager request
export const rejectManagerReq = createAsyncThunk(
  "admin/rejectManagerReq",
  async (managerId, thunkAPI) => {
    const response = await fetch(
      "https://auditoriaserver.herokuapp.com/admin/setManagerStatus",
      {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({
          managerId: managerId,
          verificationStatus: "false",
        }),
        headers: {
          Authorization: "bearer " + adminToken,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

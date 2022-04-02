import { createAsyncThunk } from "@reduxjs/toolkit";

const adminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ4YzE1YTQ5MjEwYzQxMjM1NGFiMWYiLCJpYXQiOjE2NDg5MzYwNzh9.UtcCyfXzFCnLCwSj-bQilfL74LghE08DA5-M-TIoYGU";
export const getManagerReqStatus = createAsyncThunk(
  "admin/getManagerReqStatus",
  async (token = adminToken, thunkAPI) => {
    //pending
    const pendingResponse = await fetch(
      "https://ams-server-test.herokuapp.com/admin/managerList?status=pending",
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
      "https://ams-server-test.herokuapp.com/admin/managerList?status=true",
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
      "https://ams-server-test.herokuapp.com/admin/managerList?status=false",
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
      "https://ams-server-test.herokuapp.com/admin/managerList?status=pending",
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

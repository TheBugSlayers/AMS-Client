import { createAsyncThunk } from "@reduxjs/toolkit";

const adminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlNzdhOGQzY2YwN2E4MzM1NmU0MWEiLCJpYXQiOjE2NDg5MTIxOTB9.ecR4P9Psdc4StPsADp_ThBQse7S_SgATM-3m_EXABhk";
export const getManagerReqStatus = createAsyncThunk(
  "admin/getManagerReqStatus",
  async (token = adminToken, thunkAPI) => {
    const response = await fetch(
      `https://ams-server-test.herokuapp.com/admin/managerList?status=pending`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: "bearer " + token,
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

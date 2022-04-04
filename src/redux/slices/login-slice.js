import { createSlice } from "@reduxjs/toolkit";
import { login } from "../action-creaters";

const getLocalStorageData = () => {
  const data = JSON.parse(localStorage.getItem("userDetails"));
  console.log(data);
  return data;
}

const initialState = {
  userDetails: {},
  token: "",
  isLoggedIn: false
};
export const loginSlice = createSlice({
  name: "login",
  initialState: getLocalStorageData() === null ? initialState : getLocalStorageData,
  reducers: {
    logout(state) {
      localStorage.removeItem("userDetails");
      state.isLoggedIn = false;
    },
    setUserDetails(state,action) {
      state.userDetails = action.payload;
    }
  },
  
    extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action) => {
        state.userDetails = action.payload.user;
        state.token = action.payload.authToken;
        // localStorage.setItem("userDetails", action.payload);
        state.isLoggedIn = true;
        const userObj = {
          isLoggedIn: true,
          token: action.payload.authToken,
          userDetails: action.payload.user,
        };
        localStorage.setItem("userDetails", JSON.stringify(userObj));
      });
  }
});

export const {logout,setUserDetails} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;


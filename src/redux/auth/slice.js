import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, signUp } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(signUp.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
      });
  },
});

export default authSlice.reducer;

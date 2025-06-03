import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer: ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const signUp = createAsyncThunk(
  "auth/SignUp",
  async (user, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", user);
      console.log("🚀 ~ response:", response);
      setAuthHeader("");
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/LogIn",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post("/users/login", userData);
      console.log("🚀 ~ response:", response);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/LogOut", async (_, thunkApi) => {
  try {
    const response = await axios.post("/users/logout");
    console.log("🚀 ~ response:", response);
    clearAuthHeader();
    return response.data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

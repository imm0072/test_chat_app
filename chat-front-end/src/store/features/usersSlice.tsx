import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:1234";
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Users {
  users: User[]; // Define an array of User objects
}

const initialState: Users = {
  users: [], // Initialize the users array as an empty array
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state: Users, action: any) => {
      state.users = action.payload;
    },
  },
});

export default usersSlice.reducer;

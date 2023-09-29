import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:1234";
export interface user {
  id: string;
  name: string;
  email: string;
  isSign: boolean;
}
const initialState: user = {
  id: "",
  name: "Johan Dos",
  email: "johandos@gmail.com",
  isSign: false,
};

export const signIn = createAsyncThunk(
  "thunk/signin",
  async (payload: any, thunk: any) => {
    try {
      const { data } = await axios.post(`${URL}/api/v1/signin`, { ...payload });
      if (data.error) {
        return thunk.rejectWithValue({ ...data });
      }
      return { ...data };
    } catch (error: any) {
      return thunk.rejectWithValue({ error: true, msg: error.message });
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.isSign = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      const { _id, name, email } = action.payload.user;
      state.id = _id;
      state.name = name;
      state.email = email;
      state.isSign = true;
    });
  },
});
export const { signOut } = userSlice.actions;
export default userSlice.reducer;

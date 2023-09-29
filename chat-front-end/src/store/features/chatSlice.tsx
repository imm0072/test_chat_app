import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
 
 
const initialState: any = {
  chatWith: {
    sender:{name:"ajay",email:"ajay@gmail.com",id:"fglkd123"} 
  },
  messages: [
    { message: "hii ajay how are you.", isSender: false },
    { message: "i am happy", isSender: true },
    { message: "good.", isSender: false },
  ],
};

export const sendMessage = createAsyncThunk(
  "send/message",
  (payload: string, Thunk: any) => {
    const state=Thunk.getState();
    if(payload.trim()===""){
      return Thunk.rejectWithValue("please enter some value.")
    }  
    return payload;
  }
);
export const getMessage = createAsyncThunk(
  "get/message",
  (payload: string, Thunk: any) => {
    return payload;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder 
      .addCase(sendMessage.fulfilled, (state: any, action: any) => {
        state.messages.push({ message: action.payload, isSender: false })
      })
      .addCase(getMessage.fulfilled, (state: any, action: any) => {
        state.messages.push({ message: action.payload, isSender: true })
      });
  },
});

export default chatSlice.reducer;

// src/redux/slices/chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [], // Ensure chats is initialized as an empty array or some default value
  activeChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
  },
});

export const { setActiveChat, setChats } = chatSlice.actions;

export default chatSlice.reducer;

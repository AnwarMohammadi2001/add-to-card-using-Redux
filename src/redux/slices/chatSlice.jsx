import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  activeChat: null,
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setChats, setActiveChat, setMessages } = chatSlice.actions;
export default chatSlice.reducer;

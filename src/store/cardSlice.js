import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload); // Fixed push syntax
    },
    remove(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { add, remove } = cardSlice.actions;
export default cardSlice.reducer;

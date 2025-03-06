import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice"; // Import the reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Register the counter reducer
  },
});

export default store;

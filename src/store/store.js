import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import productsSlice from "./productSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
    products: productsSlice,
  },
});

export default store;

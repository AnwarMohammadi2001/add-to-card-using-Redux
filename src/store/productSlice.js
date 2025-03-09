import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

// Async action for fetching products
export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

// Initial state
const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default productsSlice.reducer;

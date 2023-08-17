import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    isFetching: false,
    quantity: 0,
    total: 0,
    error: false,
  },
  reducers: {
    // addProduct: (state, action) => {
    //   state.quantity += 1;
    //   state.products.push(action.payload);
    //   state.total += action.payload.price * action.payload.quantity;
    // },
    //CREATE
    addCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCartSuccess: (state, action) => {
      state.quantity += 1;
      state.total += action.payload.infos.price * action.payload.infos.quantity;
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addProduct,addCartStart, addCartSuccess, addCartFailure } = cartSlice.actions;
export default cartSlice.reducer;
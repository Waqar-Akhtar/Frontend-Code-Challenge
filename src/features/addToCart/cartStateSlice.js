import { createSlice } from "@reduxjs/toolkit";

export const cartStateSlice = createSlice({
  name: "cartState",
  initialState: {
    cart: false,
  },
  reducers: {
    CartToggle: (state, action) => {
      console.log("action.payload", action.payload);
      state.data = action.payload;
    },
  },
});

export const { CartToggle } = cartStateSlice.actions;

export default cartStateSlice.reducer;

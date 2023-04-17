import { createSlice } from "@reduxjs/toolkit";

export const AddToCardSlice = createSlice({
  name: "addProducts",
  initialState: {
    data: [],
  },
  reducers: {
    AddItems: (state, action) => {
      state.data = state.data?.concat(action.payload);
    },
  },
});

export const { AddItems } = AddToCardSlice.actions;

export default AddToCardSlice.reducer;

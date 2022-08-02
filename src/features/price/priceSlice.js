import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

const priceSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPrice } = priceSlice.actions;

export default priceSlice.reducer;

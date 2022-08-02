import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 55,
  isActive: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    incrementSecond: (state) => {
      state.value += 1;
    },
    activate: (state) => {
      state.isActive = true;
    },
    deactivate: (state) => {
      state.isActive = false;
      state.value = 0;
    },
  },
});

export const { incrementSecond, activate, deactivate } = timerSlice.actions;

export default timerSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import timerSlice from "../features/timer/timerSlice";
import priceSlice from "../features/price/priceSlice";

export const store = configureStore({
  reducer: {
    timer: timerSlice,
    price: priceSlice,
  },
});

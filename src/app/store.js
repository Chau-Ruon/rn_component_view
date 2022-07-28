import { configureStore } from "@reduxjs/toolkit";
import userData from "../data/userData";

export const store = configureStore({
  reducer: {
    userData: userData,
  },
});

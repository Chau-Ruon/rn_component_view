import { configureStore } from "@reduxjs/toolkit";
import userData from "../data/userData";
import newPostData from "../data/newPostData";

export const store = configureStore({
  reducer: {
    userData: userData,
    newPostData:newPostData,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import postState from "./features/post/postSlice";

const store = configureStore({
  reducer: {
    postState,
  },
});

export default store;

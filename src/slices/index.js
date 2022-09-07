import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./postsSlice.js";

export default configureStore({
  reducer: {
    posts: postsReducer,
  }
})
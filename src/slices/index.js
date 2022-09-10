import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';
import postsReducer from './postsSlice';
import usersReducer from './usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    images: imagesReducer,
  },
});

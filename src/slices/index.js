import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';
import postsReducer from './postsSlice';
import { postAPI } from '../servise/PostServise';
import usersReducer from './usersSlice';
// import { imageAPI } from '../servise/ImagesServise';

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    images: imagesReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    // [imageAPI.reducerPath]: imageAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
});

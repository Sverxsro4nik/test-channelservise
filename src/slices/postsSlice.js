/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getRoutes from '../routes/routes';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const { data } = await axios.get(getRoutes.dataPath());
    console.log(data);
    return data;
  },
);

const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState({
  isLoading: false,
  loadingError: null,
});

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.loadingError = null;
    }).addCase(fetchPosts.fulfilled, (state, { payload }) => {
      postsAdapter.setAll(state, payload);
      state.isLoading = false;
      state.loadingError = null;
    }).addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.loadingError = action.error;
    });
  },
});

export const selectors = postsAdapter.getSelectors((state) => state.posts);

export const getPosts = (state) => selectors.selectAll(state);

export default postsReducer.reducer;

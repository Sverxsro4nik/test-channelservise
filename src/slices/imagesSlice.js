/* eslint-disable no-param-reassign */
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getRoutes from '../routes/routes';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (payload) => {
    const { data } = await axios.get(getRoutes.imagesPath(payload));
    return data;
  },
);

const imagesAdapter = createEntityAdapter();

const initialState = imagesAdapter.getInitialState({
  imagesLoading: false,
  imagesLoadingError: null,
});

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.imagesLoading = true;
      state.imagesLoadingError = null;
    }).addCase(fetchImages.fulfilled, (state, payload) => {
      imagesAdapter.setAll(state, payload);
      state.imagesLoading = false;
      state.imagesLoadingError = null;
    }).addCase(fetchImages.rejected, (state, action) => {
      state.imagesLoading = false;
      state.imagesLoadingError = action.error;
    });
  },
});

export const selectors = imagesAdapter.getSelectors((state) => state.images);

export const getImages = (state) => selectors.selectAll(state);

export default imagesSlice.reducer;

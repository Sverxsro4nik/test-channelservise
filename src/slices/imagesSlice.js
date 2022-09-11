/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const imagesAdapter = createEntityAdapter();

const initialState = imagesAdapter.getInitialState();

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: imagesAdapter.addMany,
  },
});

export const selectors = imagesAdapter.getSelectors((state) => state.images);

export const getImages = (state) => selectors.selectAll(state);

export const { addImages } = imagesSlice.actions;

export default imagesSlice.reducer;

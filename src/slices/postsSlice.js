import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
// import axios from "axios"; createAsyncThunk

const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState({
  isLoading: false,
  loadingError: null,
});

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export default postsReducer.reducer;

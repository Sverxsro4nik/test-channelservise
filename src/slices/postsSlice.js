import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getRoutes from '../routes/routes';

const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (payload) => {
    const { data } = await axios.get(getRoutes.usersPath(payload));
    return data;
  },
);

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
  defaultUserId: 1,
  usersLoading: false,
  usersLoadingErrors: null,
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersLoading = true;
      state.usersLoadingErrors = null;
    }).addCase(fetchUsers.fulfilled, (state, payload) => {
      usersAdapter.setAll(state, payload);
      state.usersLoading = false;
      state.usersLoadingErrors = null;
    }).addCase(fetchUsers.rejected, (state, action) => {
      state.usersLoading = false;
      state.usersLoadingErrors = action.error;
    });
  },
});

export const selectors = usersAdapter.getSelectors((state) => state.users);

export const getDefaultUserId = (state) => state.users.defaultUserId;

export const setDefaultUserId = (state, payload) => { state.users.defaultUserId = payload; };

export default usersSlice.reducer;

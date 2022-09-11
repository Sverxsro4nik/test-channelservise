import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
  usersLoading: false,
  usersLoadingErrors: null,
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: usersAdapter.addMany,
  },
});

export const selectors = usersAdapter.getSelectors((state) => state.users);

export const getUsers = (state) => selectors.selectAll(state);

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;

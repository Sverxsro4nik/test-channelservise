/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    fetchSomePost: build.query({
      query: (id) => ({
        url: `/users/${id}/posts`,
        params: {
          _limit: 1,
        },
      }),
    }),
  }),
});

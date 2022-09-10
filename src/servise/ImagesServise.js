/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const imageAPI = createApi({
  reducerPath: 'imageAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    fetchSomeImage: build.query({
      query: (id) => ({
        url: `albums/${id}/photos'`,
        params: {
          _limit: 1,
        },
      }),
    }),
  }),
});

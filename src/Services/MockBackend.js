import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mockApi = createApi({
    reducerPath: 'mockApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:8000'}),
    endpoints: (builder)=>({
        getCards: builder.query({
            query: ()=> '/cards'
        }),
    }),
})

export const {
    useGetCardsQuery
} = mockApi;
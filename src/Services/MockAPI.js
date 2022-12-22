import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mockApi = createApi({
    reducerPath: 'mockApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
    endpoints: (builder)=>({
        getCards: builder.query({
            query: (arg)=> {
                if(arg==='your'){
                    return `/${arg}?owner_id=1`
                }
                return `/${arg}`;
            }
        }),
    }),
});

export const {
    useGetCardsQuery
} = mockApi;
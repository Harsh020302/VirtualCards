import {configureStore } from '@reduxjs/toolkit';
import { mockApi } from '../Services/MockAPI';
import toolSliceReducer from './Toolslice.js';
export const store = configureStore({
    reducer:{
        [mockApi.reducerPath] : mockApi.reducer,
        currentQuery : toolSliceReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApi.middleware),

});
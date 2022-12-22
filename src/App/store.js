import {configureStore } from '@reduxjs/toolkit';
import { mockApi } from '../Services/MockBackend';
export default configureStore({
    reducer:{
        [mockApi.reducerPath] : mockApi.reducer,
    }
})
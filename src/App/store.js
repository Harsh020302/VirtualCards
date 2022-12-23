import {configureStore } from '@reduxjs/toolkit';

import toolSliceReducer from './Toolslice.js';
export const store = configureStore({
    reducer:{
        currentQuery : toolSliceReducer,
    },

});
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardCategory: 'all',
    searchQuery: '',
    filterBy: {},
};

const toolSlice = createSlice({
    name: 'fetchCardsBy',
    initialState,
    reducers: {
        selectCardCategory : (state,action)=>{
            if(action.payload === 0){
                state.cardCategory = 'your';
                state.searchQuery = '';
                state.filterBy = {};
            }
            else if(action.payload===1){
                state.cardCategory = 'all';
                state.searchQuery = '';
                state.filterBy = {};
            }
            else{
                state.cardCategory = 'blocked';
                state.searchQuery = '';
                state.filterBy = {};
            }
        },
        selectSearchQuery : (state,action)=>{
            state.searchQuery = action.payload;
            state.cardCategory = '';
            state.filterBy = {};
        },
        selectfilterBy : (state,action)=>{
            state.filterBy = action.payload;
            state.cardCategory = '';
            state.searchQuery = '';
        }
    }
});

export const { selectCardCategory , selectSearchQuery , selectfilterBy } = toolSlice.actions;

export default toolSlice.reducer;
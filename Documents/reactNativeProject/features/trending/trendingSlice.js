import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../utils/networkRequest";


export const fetchTrending = createAsyncThunk(
    'trending/fetchTrending',
    async () => {
        const trendingData = await getRequest('trending/daily');
        return trendingData.works;
    }
);

const trendingSlice = createSlice({
    name: 'trending',
    initialState: { isLoading: true, errMess: null, partnersArray: [] },
    reducers: {},
    extraReducers: {
        [fetchTrending.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchTrending.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.trendingArray = action.payload;
        },
        [fetchTrending.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const trendingReducer = trendingSlice.reducer;
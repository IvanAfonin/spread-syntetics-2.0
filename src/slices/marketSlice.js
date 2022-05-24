import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	country: '',
};

export const marketSlice = createSlice({
	name: 'market',
	initialState,
	reducers: {
		chooseMarket: (state, action) => {
			state.country = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { chooseMarket } = marketSlice.actions;

export const marketSliceReducer = marketSlice.reducer;

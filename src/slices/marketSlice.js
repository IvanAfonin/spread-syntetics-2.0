import { createSlice } from '@reduxjs/toolkit';
import { STRATEGY } from '../constants/Strategy';

const initialState = {
	country: '',
	strategy: STRATEGY.BOX,
};

export const marketSlice = createSlice({
	name: 'market',
	initialState,
	reducers: {
		chooseMarket: (state, action) => {
			state.country = action.payload;
		},
		chooseStrategy: (state, action) => {
			state.strategy = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { chooseMarket } = marketSlice.actions;

export const marketSliceReducer = marketSlice.reducer;

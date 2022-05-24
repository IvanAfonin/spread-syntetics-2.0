import { configureStore } from '@reduxjs/toolkit';
import { marketSliceReducer } from '../slices/marketSlice';

export const store = configureStore({
	reducer: {
		market: marketSliceReducer,
	},
});

import { configureStore } from '@reduxjs/toolkit';
import { marketSliceReducer } from '../slices/marketSlice';
import { authSliceReducer } from '../slices/authSlice';
import { topSliceReducer } from '../slices/topSlice';

export const store = configureStore({
  reducer: {
    market: marketSliceReducer,
    auth: authSliceReducer,
    tops: topSliceReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { marketSliceReducer } from '../slices/marketSlice';
import { authSliceReducer } from '../slices/authSlice';

export const store = configureStore({
  reducer: {
    market: marketSliceReducer,
    auth: authSliceReducer,
  },
});

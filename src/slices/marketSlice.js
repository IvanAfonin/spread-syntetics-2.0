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


export const { chooseMarket, chooseStrategy } = marketSlice.actions;

export const marketSliceReducer = marketSlice.reducer;

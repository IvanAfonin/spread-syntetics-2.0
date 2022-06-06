import { createSlice } from '@reduxjs/toolkit';
import { TRACKLISTS } from '../constants/TrackLists';

const initialState = {
  data: {
    long: [],
    short: [],
    sendingTime: 0,
  },
  tracklists: TRACKLISTS,
};

export const topsSlice = createSlice({
  name: 'tops',
  initialState,
  reducers: {
    changeTracklist: (state, action) => {
      const arr = state.tracklists[action.payload.tracklistType];
      arr[action.payload.index] = {
        ...arr[action.payload.index],
        [action.payload.changeableValue]: action.payload.value,
      };
      if (action.payload.tracklistType === 'long') {
        state.tracklists.long = arr;
      } else {
        state.tracklists.short = arr;
      }
    },
  },
});

export const { changeTracklist } = topsSlice.actions;

export const topSliceReducer = topsSlice.reducer;

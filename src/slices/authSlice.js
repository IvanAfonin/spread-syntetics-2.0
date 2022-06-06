import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    Email: '',
    ImagePath: '',
    IsAdmin: false,
  },
  isAuthenticated: false,
  ping: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setPing: (state, action) => {
      state.ping = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setUser, setPing, logout } = authSlice.actions;

export const authSliceReducer = authSlice.reducer;

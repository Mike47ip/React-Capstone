// src/features/minionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const minionsSlice = createSlice({
  name: 'minions',
  initialState: {
    minions: [],
  },
  reducers: {
    setMinions: (state, action) => ({ ...state, minions: action.payload }),
  },
});

export const { setMinions } = minionsSlice.actions;
export default minionsSlice.reducer;

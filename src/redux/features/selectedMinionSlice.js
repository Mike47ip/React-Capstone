// selectedMinionSlice.js

import { createSlice } from '@reduxjs/toolkit';

const selectedMinionSlice = createSlice({
  name: 'selectedMinion',
  initialState: {
    selectedMinion: null,
  },
  reducers: {
    setSelectedMinion: (state, action) => {
      state.selectedMinion = action.payload;
    },
    clearSelectedMinion: (state) => {
      state.selectedMinion = null;
    },
  },
});

export const { setSelectedMinion, clearSelectedMinion } = selectedMinionSlice.actions;

export default selectedMinionSlice.reducer;

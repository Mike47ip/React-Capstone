// redux/features/selectedMinionSlice.js

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
  },
});

export const { setSelectedMinion } = selectedMinionSlice.actions;
export default selectedMinionSlice.reducer;

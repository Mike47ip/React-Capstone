import { createSlice } from '@reduxjs/toolkit';

const minionDetailsSlice = createSlice({
  name: 'minionDetails',
  initialState: {
    selectedMinion: null,
  },
  reducers: {
    setSelectedMinion: (state, action) => ({
      ...state,
      selectedMinion: action.payload,
    }),
    clearSelectedMinion: (state) => ({
      ...state,
      selectedMinion: null,
    }),
  },
});

export const { setSelectedMinion, clearSelectedMinion } = minionDetailsSlice.actions;

export default minionDetailsSlice.reducer;

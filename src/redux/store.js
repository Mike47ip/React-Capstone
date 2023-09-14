// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import minionsReducer from './features/minionsSlice';
import selectedMinionReducer from './features/selectedMinionSlice'; // Import the selectedMinionReducer

const store = configureStore({
  reducer: {
    minions: minionsReducer,
    selectedMinion: selectedMinionReducer, // Include the selectedMinionReducer
  },
});

export default store;

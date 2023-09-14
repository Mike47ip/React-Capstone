// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import minionsReducer from './features/minionsSlice';
import selectedMinionReducer from './features/selectedMinionSlice'; // Import the new slice

const store = configureStore({
  reducer: {
    minions: minionsReducer,
    selectedMinion: selectedMinionReducer, // Add the new slice to the reducers
  },
});

export default store;

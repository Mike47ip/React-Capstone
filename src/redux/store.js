import { configureStore } from '@reduxjs/toolkit';
import minionsReducer from './features/minionsSlice';
import minionDetailsReducer from './features/minionDetailsSlice'; // Import the minionDetailsReducer

const store = configureStore({
  reducer: {
    minions: minionsReducer,
    minionDetails: minionDetailsReducer, // Include the minionDetailsReducer
  },
});

export default store;

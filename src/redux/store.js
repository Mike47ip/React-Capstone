// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import minionsReducer from './features/minionsSlice';

const store = configureStore({
  reducer: {
    minions: minionsReducer,
  },
});

export default store;

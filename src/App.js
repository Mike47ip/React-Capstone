// App.js

import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import HomePage from './components/pages/homePage';
import SelectedMinion from './components/SelectedMinion';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minion/:id" element={<SelectedMinion />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

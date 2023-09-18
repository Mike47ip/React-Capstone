// App.js

import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import HomePage from './components/pages/homePage';
import MinionDetailsPage from './components/MinionDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minion/:minionId" element={<MinionDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

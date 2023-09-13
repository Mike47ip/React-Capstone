import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import MinionsList from './components/MinionsList';
import HomePage from './components/pages/homePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;

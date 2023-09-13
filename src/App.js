import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MinionsList from './components/MinionsList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MinionsList />
      </div>
    </Provider>
  );
}

export default App;

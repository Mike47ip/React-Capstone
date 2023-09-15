import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../components/pages/homePage';
import store from '../redux/store';

test('renders Missions component without errors', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </MemoryRouter>,
  );
});

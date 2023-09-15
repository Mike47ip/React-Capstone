import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import MinionDetailsPage from '../components/MinionDetailsPage';
import store from '../redux/store';

test('renders Missions component without errors', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <MinionDetailsPage />
      </Provider>
    </MemoryRouter>,
  );
});

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import MinionsList from '../components/MinionsList';
import store from '../redux/store';

test('renders Missions component without errors', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <MinionsList />
      </Provider>
    </MemoryRouter>,
  );
});

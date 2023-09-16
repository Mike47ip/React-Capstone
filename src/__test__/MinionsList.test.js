import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MinionsList from '../components/MinionsList';

const mockStore = configureStore([]);

test('renders loading message when loading is true', () => {
  const initialState = {
    minions: {
      minions: [],
    },
  };
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MinionsList />
    </Provider>,
  );

  const loadingMessage = getByText('Loading...', { exact: false });
  expect(loadingMessage).toBeDefined();
});

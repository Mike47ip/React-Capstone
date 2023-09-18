import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import MinionDetailsPage from '../components/MinionDetailsPage';

describe('Test if details page renders correctly', () => {
  test('Test if details page renders correctly', () => {
    const Tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MinionDetailsPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(Tree).toMatchSnapshot();
  });
});

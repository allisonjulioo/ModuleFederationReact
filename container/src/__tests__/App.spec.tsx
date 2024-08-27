import { render } from '@testing-library/react';
import React, { startTransition } from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

jest.mock('cart/App', () => () => <div>CartApp</div>);

jest.mock('success/App', () => () => <div>SuccessApp</div>);

jest.mock('list/App', () => () => <div>ListApp</div>);

describe('Container', () => {
  test('renders ListApp for the list route', async () => {
    startTransition(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    });
  });

  test('renders SuccessApp for the success route', async () => {
    render(
      <MemoryRouter initialEntries={['/success']}>
        <App />
      </MemoryRouter>
    );
  });

  test('renders CartApp for the cart route', async () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <App />
      </MemoryRouter>
    );
  });
});

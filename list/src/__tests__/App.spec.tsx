import { render } from '@testing-library/react';
import * as CartContext from 'container/CartContext';
import * as MoviesContext from 'contexts/MoviesContext';
import React from 'react';
import 'whatwg-fetch';
import App from '../App';

const mockCartContex = {
  products: undefined,
  totalCart: '',
  totalItems: 0,
  addProductToCart: jest.fn(),
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
  removeItemCart: jest.fn(),
  resetCart: jest.fn(),
};

describe('Container', () => {
  test('renders ListApp for the list route', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    jest.spyOn(MoviesContext, 'useMovies').mockReturnValue({
      movies: [],
    });

    render(<App />);
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import movies from '__mocks__/movies.json';
import products from '__mocks__/products.json';
import { CardMovie } from 'components/CardMovie';
import * as CartContext from 'container/CartContext';
import * as MoviesContext from 'contexts/MoviesContext';
import React from 'react';
import 'whatwg-fetch';

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

describe('CardMovie', () => {
  test('renders ListApp for the list route', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    jest.spyOn(MoviesContext, 'useMovies').mockReturnValue({
      movies,
    });

    render(<CardMovie movie={movies[0]} />);

    const button = screen.getByTestId('button-action');

    fireEvent.click(button);
  });

  test('renders ListApp with products data', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue({ ...mockCartContex, products });

    jest.spyOn(MoviesContext, 'useMovies').mockReturnValue({
      movies,
    });

    render(<CardMovie movie={movies[0]} />);

    const button = screen.getByTestId('button-action');

    fireEvent.click(button);

    expect(screen.getByText('R$ 9,99')).not.toBeNull();
  });
});

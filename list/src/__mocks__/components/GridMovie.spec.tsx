import { render, screen } from '@testing-library/react';
import movies from '__mocks__/movies.json';
import products from '__mocks__/products.json';
import { GridMovie } from 'components/GridMovie';
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

describe('GridMovie', () => {
  test('renders ListApp for the list route', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    jest.spyOn(MoviesContext, 'useMovies').mockReturnValue({
      movies: [],
    });

    render(<GridMovie />);

    expect(screen.queryByText('Batman')).toBeNull();

    expect(screen.getByText('EmptyState')).not.toBeNull();
  });

  test('renders ListApp with products data', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue({ ...mockCartContex, products });

    jest.spyOn(MoviesContext, 'useMovies').mockReturnValue({
      movies,
    });

    render(<GridMovie />);

    expect(screen.getByText('Batman')).not.toBeNull();
  });
});

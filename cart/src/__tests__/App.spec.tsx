import { render, screen } from '@testing-library/react';
import products from '__mocks__/products.json';
import * as CartContext from 'container/CartContext';
import React from 'react';
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
  test('renders empty state when products is null', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    render(<App />);

    expect(screen.getByText('EmptyState')).not.toBeNull();
  });

  test('renders empty state when products not is null', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue({ ...mockCartContex, products });

    render(<App />);

    expect(screen.getByText('PRODUTO')).not.toBeNull();
  });
});

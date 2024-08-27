import { render, screen } from '@testing-library/react';
import products from '__mocks__/products.json';
import { CardCart } from 'components/CardCart';
import * as CartContext from 'container/CartContext';
import React from 'react';

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

describe('CardCart', () => {
  test('renders correctly with products', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    render(<CardCart />);

    expect(screen.getByText('PRODUTO')).not.toBeNull();
  });

  test('renders correctly without products', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue({ ...mockCartContex, products });

    render(<CardCart />);
 
  });
});

import { render, screen } from '@testing-library/react';
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

describe('App', () => {
  test('renders correctly', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    render(<App />);

    expect(screen.getByText('Compra realizada com sucesso!')).not.toBeNull();
  });
});

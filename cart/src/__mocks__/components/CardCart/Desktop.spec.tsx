import { fireEvent, render, screen } from '@testing-library/react';
import products from '__mocks__/products.json';
import { Desktop } from 'components/CardCart/Desktop';
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

describe('Container', () => {
  test('renders correctly with products', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    render(<Desktop product={products[0]} />);

    expect(screen.getByText('Viúva Negra')).not.toBeNull();
  });

  test('increase qtd items cart', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    render(<Desktop product={products[0]} />);

    const increase = screen.getByTestId('button-increase');

    fireEvent.click(increase);
  });

  test('decrease qtd items cart', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    render(<Desktop product={products[0]} />);

    const decrease = screen.getByTestId('button-decrease');

    fireEvent.click(decrease);
  });

  test('idelete item cart', async () => {
    jest.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContex);

    render(<Desktop product={products[0]} />);

    const deleteButton = screen.getByTestId('button-delete');

    fireEvent.click(deleteButton);
  });
});

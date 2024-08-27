import { CardCart } from 'components/CardCart';
import { useCart } from 'container/CartContext';
import { EmptyState } from 'container/shared';
import React from 'react';

const CartApp = () => {
  const { products } = useCart();

  if (!products?.length) return <EmptyState />;

  return <CardCart />;
};

export default CartApp;

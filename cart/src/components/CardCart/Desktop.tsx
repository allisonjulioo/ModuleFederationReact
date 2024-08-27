import { InputQtd } from 'components/InputQtd';
import { Product, useCart } from 'container/CartContext';
import { formatCurrencyBRL } from 'container/formatCurrencyBRL';
import React, { FC } from 'react';
import styled from 'styled-components';
import iconDelete from '../../assets/delete.png';

export const Desktop: FC<{ product: Product }> = ({ product }) => {
  const { decreaseQuantity, increaseQuantity, removeItemCart } = useCart();

  const price = formatCurrencyBRL(product.price);

  const subTotal = formatCurrencyBRL(product.price * product.quantity);

  return (
    <ContentCart>
      <div className="product">
        <img width="90" src={product.image} alt="" />
        <section>
          <strong>{product.title}</strong>
          <strong>{price}</strong>
        </section>
      </div>

      <div className="qtd">
        <InputQtd
          increase={() => increaseQuantity(product)}
          decrease={() => decreaseQuantity(product)}
          total={product.quantity}
        />
      </div>

      <div className="subtotal">
        <strong>{subTotal}</strong>
      </div>

      <div className="delete">
        <button onClick={() => removeItemCart(product)} data-testid="button-delete">
          <img src={iconDelete} alt="" />
        </button>
      </div>
    </ContentCart>
  );
};

export const ContentCart = styled.div`
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 981px) {
    display: none;
  }

  .product,
  .subtotal,
  .qtd,
  .delete {
    display: flex;
    align-items: center;
  }

  .product {
    gap: 20px;

    section {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
  }

  .delete {
    justify-content: flex-end;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

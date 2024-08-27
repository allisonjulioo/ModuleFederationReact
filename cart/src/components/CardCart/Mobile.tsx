import { InputQtd } from 'components/InputQtd';
import { Product, useCart } from 'container/CartContext';
import { formatCurrencyBRL } from 'container/formatCurrencyBRL';
import React, { FC } from 'react';
import styled from 'styled-components';
import iconDelete from '../../assets/delete.png';

export const Mobile: FC<{ product: Product }> = ({ product }) => {
  const { decreaseQuantity, increaseQuantity, removeItemCart } = useCart();

  const price = formatCurrencyBRL(product.price);

  const subTotal = formatCurrencyBRL(product.price * product.quantity);

  return (
    <ContentCart>
      <figure className="product">
        <img width="80" src={product.image} alt="" />
      </figure>

      <div className="content">
        <section>
          <strong>{product.title}</strong>
          <strong>{price}</strong>
        </section>
        <div className="delete">
          <button onClick={() => removeItemCart(product)} data-testid="button-delete">
            <img src={iconDelete} alt="" />
          </button>
        </div>

        <div className="content-subtotal">
          <div className="qtd">
            <InputQtd
              increase={() => increaseQuantity(product)}
              decrease={() => decreaseQuantity(product)}
              total={product.quantity}
            />
          </div>
          <div className="subtotal">
            <span>SUBTOTAL</span>
            <strong>{subTotal}</strong>
          </div>
        </div>
      </div>
    </ContentCart>
  );
};

export const ContentCart = styled.div`
  display: none;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 12px;
  position: relative;

  @media (max-width: 981px) {
    display: flex;
  }

  .product,
  .subtotal,
  .qtd,
  .delete {
    display: flex;
    align-items: center;
  }

  .product {
    margin: 0;

    section {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
  }
  .content {
    width: 64%;

    > section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0.8em 0 2em;

      > strong {
        width: 80px;
      }
    }
  }

  .delete {
    justify-content: flex-end;
    position: absolute;
    top: 20px;
    right: 0;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .content-subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .subtotal {
      flex-direction: column;
      span {
        font-size: 14px;
        color: #999999;
      }
    }
  }
`;

import { CartIcon } from 'components/Icons/CartIcon';
import { useCart } from 'container/CartContext';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const SectionItem = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: right;

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 12px;
  }
`;

export const ButtonCart = () => {
  const { totalItems } = useCart();

  return (
    <Button to="/cart">
      <SectionItem>
        <strong>Meu Carrinho</strong>
        <span>{totalItems} items</span>
      </SectionItem>
      <CartIcon />
    </Button>
  );
};

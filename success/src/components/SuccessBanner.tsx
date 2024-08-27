import { useCart } from 'container/CartContext';
import { Anchor, Card } from 'container/shared';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import empty from '../assets/success.png';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  margin: 3em auto;
  min-height: 50vh;
  text-align: center;

  a {
    max-width: 200px;
  }

  @media (max-width: 981px) {
    max-width: 215px;
  }
`;

export const SuccessBanner = () => {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  return (
    <Card>
      <Content>
        <h2>Compra realizada com sucesso!</h2>
        <img src={empty} alt="" />
        <Anchor to="/">VOLTAR</Anchor>
      </Content>
    </Card>
  );
};

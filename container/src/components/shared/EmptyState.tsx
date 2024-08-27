import React from 'react';
import styled from 'styled-components';
import empty from '../../assets/empty.png';
import { Button } from './Button';
import { Card } from './Card';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  margin: 3em auto;
  min-height: 50vh;
  text-align: center;

  button {
    max-width: 200px;
  }

  @media (max-width: 981px) {
    max-width: 215px;
  }
`;

export const EmptyState = () => {
  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <Card>
      <Content>
        <h2>Parece que não há nada por aqui :(</h2>
        <img src={empty} alt="vazio" />
        <Button onClick={handleReloadPage}>Recarregar página</Button>
      </Content>
    </Card>
  );
};

import React, { FC } from 'react';
import styled from 'styled-components';
import iconMinus from '../assets/minus.png';
import iconPlus from '../assets/plus.png';

interface InputQtdProps {
  total: number;
  increase: () => void;
  decrease: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 14px;
    padding: 0.2em 1.4em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const InputQtd: FC<InputQtdProps> = ({ total, increase, decrease }) => {
  return (
    <Container>
      <button onClick={decrease} data-testid="button-decrease">
        <img src={iconMinus} alt="set-minus" />
      </button>
      <span>{total}</span>
      <button onClick={increase} data-testid="button-increase">
        <img src={iconPlus} alt="set-more" />
      </button>
    </Container>
  );
};

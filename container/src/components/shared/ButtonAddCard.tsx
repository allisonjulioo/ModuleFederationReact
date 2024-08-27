import { CartButtonIcon } from 'components/Icons/CartButtonIcon';
import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export interface ButtonAddCardTypes {
  active?: boolean;
}

export interface ComponentAddProps extends ButtonAddCardTypes {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  total: number;
}

const ButtonAdd = styled(Button)<{ color: string }>`
  justify-content: center;
  background-color: ${({ color, theme }) => theme[color]};
  .total {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-weight: normal;
  }
`;

export const ButtonAddCard: FC<ComponentAddProps> = props => {
  const { active, onClick, total } = props;

  const color = active ? 'success' : 'primary';

  return (
    <ButtonAdd color={color} onClick={onClick}>
      <section className="total">
        <CartButtonIcon />
        <span>{total}</span>
      </section>
      <span>Adicionar ao carrinho</span>
    </ButtonAdd>
  );
};

export type ButtonAddCardProps = typeof ButtonAddCard;

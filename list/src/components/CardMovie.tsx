import { useCart } from 'container/CartContext';
import { formatCurrencyBRL } from 'container/formatCurrencyBRL';
import { ButtonAddCard, Card } from 'container/shared';
import { Movie } from 'contexts/MoviesContext';
import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
`;

export const CardMovie: FC<{ movie: Movie }> = ({ movie }) => {
  const { products, addProductToCart } = useCart();

  const itemInCart = useMemo(() => products?.find(prod => prod.id === movie.id), [products]);

  const total = useMemo(() => itemInCart?.quantity ?? 0, [itemInCart]);

  const active = useMemo(() => total > 0, [total]);

  const handleAddItem = () => {
    addProductToCart({ ...movie, quantity: 1 });
  };

  const price = formatCurrencyBRL(movie.price);

  return (
    <Card>
      <Content>
        <img width="146" src={movie.image} alt="" />
        <strong>{movie.title}</strong>
        <strong>{price}</strong>
        <ButtonAddCard total={total} active={active} onClick={handleAddItem} />
      </Content>
    </Card>
  );
};

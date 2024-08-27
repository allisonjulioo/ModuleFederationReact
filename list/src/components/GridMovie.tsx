import { EmptyState } from 'container/shared';
import { useMovies } from 'contexts/MoviesContext';
import React from 'react';
import styled from 'styled-components';
import { CardMovie } from './CardMovie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 981px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridMovie = () => {
  const { movies } = useMovies();

  if (!movies.length) return <EmptyState />;

  return (
    <Container>
      {movies.map(movie => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

import { GridMovie } from 'components/GridMovie';
import { MoviesProvider } from 'contexts/MoviesContext';
import React from 'react';

const ListApp = () => (
  <MoviesProvider>
    <GridMovie />
  </MoviesProvider>
);

export default ListApp;

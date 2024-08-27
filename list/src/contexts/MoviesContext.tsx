import { Product } from 'container/CartContext';
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type Movie = Omit<Product, 'quantity'>;

export interface MoviesContextTypes {
  movies: Movie[];
}

export const MoviesContext = createContext<MoviesContextTypes>({} as MoviesContextTypes);

export const MoviesProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = useCallback(() => {
    fetch('https://wefit-movies.vercel.app/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data.products));
  }, [setMovies]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const value = useMemo(
    () => ({
      movies,
    }),
    [movies]
  );

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export const useMovies = () => {
  const context = useContext(MoviesContext);

  if (!context) throw Error('Cannot use "useMovies" outside MoviesProvider');

  return context;
};

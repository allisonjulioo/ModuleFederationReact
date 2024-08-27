import { CartProvider } from 'container/CartContext';
import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'theme/main';
import { Header } from './Header';

export const Main = styled.div`
  display: block;
  margin: 0 auto;
  max-width: calc(1080px + 1em);
  width: 100%;
  padding: 0 1em;
`;

export const ContainerApp: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <CartProvider>
          <>
            <Header />
            {children}
          </>
        </CartProvider>
      </Main>
    </ThemeProvider>
  );
};

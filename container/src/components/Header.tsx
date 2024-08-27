import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonCart } from './ButtonCart';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2em 0;

  * {
    color: white;
  }

  h2 {
    margin: 0;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <h2>WeMovies</h2>
        </Link>
        <ButtonCart />
      </Content>
    </Container>
  );
};

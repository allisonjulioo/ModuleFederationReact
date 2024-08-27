import { useCart } from 'container/CartContext';
import { Anchor, Card } from 'container/shared';
import React from 'react';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';
import { Container, Footer, Header } from './style';

export const CardCart = () => {
  const { products, totalCart } = useCart();

  return (
    <Card>
      <Container>
        <Header>
          <span>PRODUTO</span>
          <span>QTD</span>
          <span>SUBTOTAL</span>
          <span></span>
        </Header>

        {products?.map((product, index) => (
          <div key={index}>
            <Mobile product={product} />
            <Desktop product={product} />
          </div>
        ))}

        <Footer>
          <Anchor to="/success">FINALIZAR PEDIDO</Anchor>
          <section>
            <strong>TOTAL</strong>
            <h2>{totalCart}</h2>
          </section>
        </Footer>
      </Container>
    </Card>
  );
};

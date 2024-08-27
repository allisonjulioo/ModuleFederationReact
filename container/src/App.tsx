import { GlobalLoading } from 'components/GlobalLoading';
import { ContainerApp } from 'container/ContainerApp';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const ListApp = React.lazy(() => import('list/App'));

const CartApp = React.lazy(() => import('cart/App'));

const SuccessApp = React.lazy(() => import('success/App'));

const App = () => (
  <ContainerApp>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<GlobalLoading />}>
            <ListApp />
          </Suspense>
        }
      />
      <Route
        path="success/*"
        element={
          <Suspense fallback={<GlobalLoading />}>
            <SuccessApp />
          </Suspense>
        }
      />
      <Route
        path="cart/*"
        element={
          <Suspense fallback={<GlobalLoading />}>
            <CartApp />
          </Suspense>
        }
      />
    </Routes>
  </ContainerApp>
);

export default App;

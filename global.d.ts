///<reference types="react" />

declare module 'list/App' {
  const App: React.ComponentType;

  export default App;
}

declare module 'cart/App' {
  const App: React.ComponentType;

  export default App;
}

declare module 'success/App' {
  const App: React.ComponentType;

  export default App;
}

declare module 'container/ContainerApp' {
  export const ContainerApp: React.FC<{
    children: JSX.Element;
  }>;
}

declare module 'container/formatCurrencyBRL' {
  export const formatCurrencyBRL: (amount: number) => string;
}

declare module 'container/CartContext' {
  export const CartProvider: React.FC<{
    children: JSX.Element;
  }>;

  export const useCart: () => import('./container/src/contexts/CartContext').CartContextTypes;

  export type Product = import('./container/src/contexts/CartContext').Product;
}

declare module 'container/shared' {
  export const Button: import('./container/src/components/shared/Button').ButtonProps;
  export const Anchor: import('./container/src/components/shared/Anchor').AnchorProps;
  export const ButtonAddCard: import('./container/src/components/shared/ButtonAddCard').ButtonAddCardProps;
  export const Card: import('./container/src/components/shared/Card').CardProps;
  export const EmptyState: React.FC;
}

declare module '*.png' {
  const value: string;
  export default value;
}

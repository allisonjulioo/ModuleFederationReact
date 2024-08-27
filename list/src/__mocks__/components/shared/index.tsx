import React from 'react';

export const Anchor = () => <a>Anchor</a>;

export const Button = () => <button>Anchor</button>;

export const Card = ({ children }: { children: JSX.Element }) => <div>{children}</div>;

export const EmptyState = () => <div>EmptyState</div>;

export const ButtonAddCard = ({ onClick }: { onClick: () => void }) => (
  <button data-testid="button-action" onClick={onClick}>
    teste
  </button>
);

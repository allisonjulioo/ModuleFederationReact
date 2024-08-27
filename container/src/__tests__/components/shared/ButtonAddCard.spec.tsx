import { render, screen } from '@testing-library/react';
import { ButtonAddCard } from 'components/shared/ButtonAddCard';
import React from 'react';

describe('ButtonAddCard ', () => {
  test('renders ButtonAddCard  correctly', async () => {
    render(<ButtonAddCard total={1} />);

    expect(screen.getByText('1')).not.toBeNull();
  });

  test('renders ButtonAddCard active props', async () => {
    render(<ButtonAddCard total={1} active />);

    expect(screen.getByText('1')).not.toBeNull();
  });
});

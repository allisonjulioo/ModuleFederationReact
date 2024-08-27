import { fireEvent, render, screen } from '@testing-library/react';
import { EmptyState } from 'components/shared/EmptyState';
import React from 'react';

describe('EmptyState ', () => {
  test('renders EmptyState correctly', async () => {
    render(<EmptyState />);

    expect(screen.getByText('Recarregar página')).not.toBeNull();
  });

  test('click to reload window', async () => {
    render(<EmptyState />);

    const button = screen.getByText('Recarregar página');

    fireEvent.click(button);

    expect(button).not.toBeNull();
  });
});

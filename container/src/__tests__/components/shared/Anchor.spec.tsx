import { render, screen } from '@testing-library/react';
import { Anchor } from 'components/shared/Anchor';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('Anchor', () => {
  test('renders Anchor correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Anchor to="/">teste</Anchor>
      </MemoryRouter>
    );

    expect(screen.getByText('teste')).not.toBeNull();
  });
});

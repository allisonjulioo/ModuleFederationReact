import { render, screen } from '@testing-library/react';
import { Card } from 'components/shared/Card';
import React from 'react';

describe('Card', () => {
  test('renders Card correctly', async () => {
    render(<Card>teste</Card>);

    expect(screen.getByText('teste')).not.toBeNull();
  });
});

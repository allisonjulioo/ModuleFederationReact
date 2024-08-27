import { render, screen } from '@testing-library/react';
import { Button } from 'components/shared/Button';
import React from 'react';

describe('Button', () => {
  test('renders Button correctly', async () => {
    render(<Button>teste</Button>);

    expect(screen.getByText('teste')).not.toBeNull();
  });
});

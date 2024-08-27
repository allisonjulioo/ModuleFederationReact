import { render } from '@testing-library/react';
import { CartButtonIcon } from 'components/Icons/CartButtonIcon';
import React, { startTransition } from 'react';

describe('CartButtonIcon', () => {
  test('renders CartButtonIcon correctly', async () => {
    startTransition(() => {
      render(<CartButtonIcon />);
    });
  });
});

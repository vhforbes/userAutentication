import React from 'react';
import { render } from '@testing-library/react';

import { SignUpPage } from './index';

it('renders correctly', () => {
  const { queryByTestId } = render(<SignUpPage />);
  expect(queryByTestId('sign-up')).toBeTruthy();
});

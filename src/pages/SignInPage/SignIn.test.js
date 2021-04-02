import React from 'react';
import { render } from '@testing-library/react';

import { SignInPage } from './index';

it('renders correctly', () => {
  const { queryByTestId } = render(<SignInPage />);
  expect(queryByTestId('sign-in')).toBeTruthy();
});

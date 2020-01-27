import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard matches snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});
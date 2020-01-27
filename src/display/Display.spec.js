import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '../dashboard/Dashboard';
import Display from './Display';

test('Display matches snapshot', () => {
  expect(render(<Display />)).toMatchSnapshot();
});

// * * * GATE defaults to `unlocked` and `open`
test('unlocked and open are initially displayed', () => {
  const { getByText } = render(<Display />);
  getByText(/Unlocked/i);
  getByText(/Open/i);
});

// * * * dashboard shows the DISPLAY

test('display panel renders', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/display/i);
});

// * * * displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise

test('displays closed if \'closed\' is true', () => {
  const { getByText } = render(
    <Display closed={true} />
  );
  getByText(/Closed/i);
});

test('displays open if \'closed\' is false', () => {
  const { getByText } = render(
    <Display closed={false} />
  );
  getByText(/Open/i);
});

// * * * displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise

test('displays locked if \'locked\' is true', () => {
  const { getByText } = render(
    <Display locked={true} />
  );
  getByText(/Locked/i);
});

test('displays unlocked if \'locked\' is false', () => {
  const { getByText } = render(
    <Display locked={false} />
  );
  getByText(/Unlocked/i);
});
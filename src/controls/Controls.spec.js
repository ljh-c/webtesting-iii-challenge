import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from '../dashboard/Dashboard';
import Controls from './Controls';

// * * * GATE cannot be closed or opened if it is locked
test('toggledClosed is not called if lock button clicked & gate is locked', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls locked={true} closed={true} toggleClosed={toggleClosedMock} />
  );
  // const openButton = getByText(/Open/i);
  fireEvent.click(getByText(/Open/i));
  // test that "toggleClosed" is not called on button click if gate is locked
  expect(toggleClosedMock).not.toHaveBeenCalled();
});

// * * * dashboard shows the CONTROLS

test('control panel renders', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/controls/i);
});

// CONTROLS provide buttons to toggle the `closed` and `locked` states

test('close and lock buttons render', () => {
  const { getByTestId } = render(<Controls />);
  getByTestId(/close-btn/i);
  getByTestId(/lock-btn/i);
});
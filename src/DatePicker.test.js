import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  test('should call props.setDate when a date is selected', () => {
    const setDate = jest.fn();
    const { getByTestId } = render(<DatePicker setDate={setDate} />);
    fireEvent.change(getByTestId('Date Form'), {target: {value: '2020-01-01'}});
    expect(setDate).toHaveBeenCalled();
  });

  test('should call props.setDate when a date is selected', () => {
    const setDate = jest.fn();
    const { getByTestId } = render(<DatePicker setDate={setDate} />);
    fireEvent.change(getByTestId('Date Form'), {target: {value: '2020-01-01'}});
    expect(getByTestId('Date Form').value).toBe('2020-01-01');
  });
});

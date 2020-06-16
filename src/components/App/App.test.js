import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
import Timer from '../Timer/Timer';
import DatePicker from '../DatePicker/DatePicker';

describe('App', () => {
  test('Should not render the timer until a date is selected', () => {
    const { queryByTestId } = render(<App/>);
    expect(queryByTestId('Timer')).toBeNull();
  });

  test('Should render the timer once a date is selected', () => {
    const { queryByTestId, getByTestId } = render(<App/>);
    fireEvent.change(getByTestId('Date Form'), {target: {value: '2020-01-01'}});
    expect(queryByTestId('Timer')).toBeTruthy();
  });
});

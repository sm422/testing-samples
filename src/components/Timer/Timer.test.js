import { render } from '@testing-library/react';
import Timer from './Timer.js'
import { DateTime } from 'luxon';
import React from 'react';

describe('Timer', () => {
  test('should display time difference between now and the selected date', () => {
    jest.useFakeTimers();

    DateTime.local = jest.fn(() => DateTime.fromISO('2020-01-01T00:00:00'));
    const { getByTestId } = render(<Timer date="2020-01-02" />);
    expect(getByTestId('Timer')).toHaveTextContent('24:0:0');

    DateTime.local = jest.fn(() => DateTime.fromISO('2020-01-01T00:00:01'));
    jest.advanceTimersByTime(1000);
    expect( getByTestId('Timer')).toHaveTextContent('23:59:59');
  });
});

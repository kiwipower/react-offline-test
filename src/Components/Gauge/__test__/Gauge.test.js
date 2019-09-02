import React from 'react';
import { render, cleanup, waitForElement, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gauge from '../Gauge';
import 'jest-styled-components';

afterEach(cleanup);

describe('Unit tests for the Gauge Component', () => {
  describe('Visual Snapshot testing', () => {
    it('Renders without crashing', () => {
      const { container } = render(<Gauge value={10} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Functional unit tests', () => {
    it('it should have specific parts', () => {
      const { getByTestId } = render(<Gauge testId="gauge-test" value={10} />);

      expect(getByTestId('gauge-test')).toBeTruthy();
      expect(getByTestId('gauge-test-modal')).toBeTruthy();
      expect(getByTestId('gauge-test-input')).toBeTruthy();
    });

    it('it should call timers to update the internal state', async () => {
      jest.useFakeTimers();
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation(init => [init, setState]);

      const container = render(<Gauge testId="gauge-test" value={10} />);
      const { getByTestId } = container;

      //
      expect(getByTestId('gauge-test')).toBeTruthy();
      expect(setInterval).toHaveBeenCalled();
    });

    it('it should have the value after reached the internal state equal to value', async () => {
      await act(async () => {
        const { getByTestId, getByText } = render(
          <Gauge testId="gauge-test" value={10} />,
        );

        expect(getByTestId('gauge-test')).toBeTruthy();
        jest.advanceTimersByTime(1000);
        //
        await waitForElement(() => getByText('10%'));
        expect(getByText('10%')).toBeTruthy();
      });
    });
  });
});

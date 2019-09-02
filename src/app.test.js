/* eslint-disable react/prop-types */
import React from 'react';
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from './Helpers/axios';
import App from './app';
import 'jest-styled-components';

jest.mock('./Helpers/axios');

const mockData = {
  data: {
    generationmix: [
      { fuel: 'testFuelMock1', perc: 1 },
      { fuel: 'testFuelMock2', perc: 2 },
    ],
  },
};

afterEach(cleanup);

describe('Unit tests for the App', () => {
  describe('Visual Snapshot testing', () => {
    it('Renders without crashing', () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          data: mockData,
        });
      });
      const { container } = render(<App />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Functional unit tests', () => {
    it('it applies context from axios - Happy path', async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          data: mockData,
        });
      });
      const { getByTestId, getByText } = render(<App />);

      await waitForElementToBeRemoved(() => getByTestId('loading-spinner'));

      expect(getByText('testFuelMock1')).toBeTruthy();
      expect(getByText('testFuelMock2')).toBeTruthy();
    });
    it('it applies context to the consumer, should return Error with Response - Unhappy path', async () => {
      axios.get.mockImplementation(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          response: {
            status: 400,
            data: {
              errorMessage: 'ERROR',
            },
          },
        });
      });
      const { getByTestId } = render(<App />);

      await waitForElementToBeRemoved(() => getByTestId('loading-spinner'));

      expect(getByTestId('error-message')).toBeTruthy();
    });

    it('it applies context to the app, should return Error without Response - Unhappy path', async () => {
      axios.get.mockImplementation(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          message: 'ERROR',
        });
      });
      const { getByTestId } = render(<App />);

      await waitForElementToBeRemoved(() => getByTestId('loading-spinner'));

      expect(getByTestId('error-message')).toBeTruthy();
    });
  });
});

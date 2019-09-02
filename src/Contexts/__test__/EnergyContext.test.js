/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EnergyProvider, EnergyConsumer } from '../EnergyContext';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import axios from '../../Helpers/axios';
import 'jest-styled-components';

jest.mock('../../Helpers/axios');

// Simple Consumer to test the provider/consumer
const SimpleConsumer = ({ energy }) => <>{JSON.stringify(energy)}</>;

// Component to trigger axios mock to get the context
const ConsumerWithApi = ({ energy }) => {
  const { retrieveEnergy } = energy;
  useEffect(() => {
    retrieveEnergy();
  }, [retrieveEnergy]);

  if (energy.loading) {
    return <LoadingSpinner />;
  }
  return (
    <div data-testid="context-data">
      <div>{energy.energy.data.generationmix[0].fuel}</div>
      <div>{energy.energy.data.generationmix[1].fuel}</div>
    </div>
  );
};

const mockData = {
  data: {
    generationmix: [
      { fuel: 'testFuelMock1', perc: 1 },
      { fuel: 'testFuelMock2', perc: 2 },
    ],
  },
};

afterEach(cleanup);

describe('Unit tests for the EnergyContext', () => {
  describe('Visual Snapshot testing', () => {
    it('Renders without crashing', () => {
      const { container } = render(
        <EnergyProvider>
          <EnergyConsumer>
            {energy => <SimpleConsumer energy={energy} />}
          </EnergyConsumer>
        </EnergyProvider>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Functional unit tests', () => {
    it('it applies context to the consumer - Happy path', async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          data: mockData,
        });
      });
      const { getByTestId, getByText } = render(
        <EnergyProvider>
          <EnergyConsumer>
            {energy => <ConsumerWithApi energy={energy} />}
          </EnergyConsumer>
        </EnergyProvider>,
      );

      await waitForElementToBeRemoved(() => getByTestId('loading-spinner'));

      expect(getByTestId('context-data')).toBeTruthy();
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
      const { getByTestId } = render(
        <EnergyProvider>
          <EnergyConsumer>
            {energy => <ConsumerWithApi energy={energy} />}
          </EnergyConsumer>
        </EnergyProvider>,
      );

      await waitForElementToBeRemoved(() => getByTestId('loading-spinner'));

      expect(getByTestId('error-message')).toBeTruthy();
    });

    it('it applies context to the consumer, should return Error without Response - Unhappy path', async () => {
      axios.get.mockImplementation(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          message: 'ERROR',
        });
      });
      const { getByTestId } = render(
        <EnergyProvider>
          <EnergyConsumer>
            {energy => <ConsumerWithApi energy={energy} />}
          </EnergyConsumer>
        </EnergyProvider>,
      );

      await waitForElementToBeRemoved(() => getByTestId('loading-spinner'));

      expect(getByTestId('error-message')).toBeTruthy();
    });
  });
});

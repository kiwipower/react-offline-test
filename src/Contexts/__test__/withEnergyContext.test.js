/* eslint-disable react/prop-types */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EnergyProvider } from '../EnergyContext';
import withEnergyContext from '../withEnergyContext';
import 'jest-styled-components';

// Simple Consumer to test the provider/consumer
const SimpleConsumer = ({ energy }) => <>{JSON.stringify(energy)}</>;

afterEach(cleanup);

describe('Unit tests for the withEnergyContext - Tests are similar to EnergyContext tests', () => {
  describe('Visual Snapshot testing (Functional testing have been done in EnergyContext.test.js)', () => {
    it('Renders without crashing', () => {
      const WrappedConsumer = withEnergyContext(SimpleConsumer);
      const { container } = render(
        <EnergyProvider>
          <WrappedConsumer />
        </EnergyProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});

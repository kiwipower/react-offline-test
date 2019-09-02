import React from 'react';
import { EnergyConsumer } from './EnergyContext';

/**
 * Return wrapped component with the energy context
 * @param {React.Component} Component Component to be wrapped
 * @returns {React.Component} wrapped component
 */
const withEnergyContext = Component => {
  const EnergyContextComponent = () => {
    return (
      <EnergyConsumer>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {energy => <Component energy={energy} />}
      </EnergyConsumer>
    );
  };

  return EnergyContextComponent;
};

export default withEnergyContext;

import React from 'react';
import { EnergyConsumer } from './EnergyContext';

const withEnergyContext = Component => {
  const EnergyContextComponent = props => {
    return (
      <EnergyConsumer>
        {energy => <Component energy={energy} {...props} />}
      </EnergyConsumer>
    );
  };

  return EnergyContextComponent;
};

export default withEnergyContext;

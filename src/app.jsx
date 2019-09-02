import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card, { CardWrapper } from './Components/Card/Card';
import Gauge from './Components/Gauge/Gauge';
import withEnergyContext from './Contexts/withEnergyContext';
import { EnergyProvider } from './Contexts/EnergyContext';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

const AppTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  height: auto;
  background-color: navy;
  color: white;
`;
const ConsumerApp = ({ energy }) => {
  const { retrieveEnergy } = energy;

  useEffect(() => {
    retrieveEnergy();
  }, [retrieveEnergy]);

  if (energy.loading) {
    return <LoadingSpinner />;
  }

  const { data } = energy.energy;
  const { generationmix } = data;

  return (
    <>
      <AppTitle>UK Energy Mix</AppTitle>
      <CardWrapper>
        {generationmix.map((generationData, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={index} title={generationData.fuel}>
            <Gauge value={generationData.perc} />
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

const AppWithContext = withEnergyContext(ConsumerApp);
ConsumerApp.propTypes = {
  energy: PropTypes.shape({
    loading: PropTypes.bool,
    energy: PropTypes.object.isRequired,
    retrieveEnergy: PropTypes.func.isRequired,
  }).isRequired,
};

const App = () => {
  return (
    <EnergyProvider>
      <AppWithContext />
    </EnergyProvider>
  );
};

export default App;

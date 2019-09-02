import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from '../Helpers/axios';
import config from '../Helpers/config';
import log from '../Helpers/logger';

const ErrorMessage = styled.p`
  color: red;
  font-size: 24px;
`;

const NS_CONTEXT = 'KiwiPower:EnergyContext';

// Uncomment this block to use sample response as a defaultState
// import defaultResponse from './example_api_response.json';
// const defaultState = {
//   loading: false,
//   energy: defaultResponse,
//   retrieveEnergy: () => {},
// };

// Default State of the context
const defaultState = {
  loading: false,
  failed: false,
  energy: {
    data: {
      generationmix: [
        { fuel: 'testFuel1', perc: 10 },
        { fuel: 'testFuel2', perc: 20 },
      ],
    },
  },
  retrieveEnergy: () => {},
};

const EnergyContext = React.createContext(defaultState);

/**
 * Class EnergyProvider to pass the data to the consumer component
 * @see React.createContext
 */
class EnergyProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { ...props.energy };
  }

  retrieveEnergy = () => {
    this.setState({
      loading: true,
    });

    axios
      .get(config.energy_service_url)
      .then(response => {
        log(NS_CONTEXT, response);
        this.setState({
          loading: false,
          failed: false,
          energy: {
            ...response.data,
          },
        });
      })
      .catch(error => {
        const errorDetails = {};
        //
        if (error.response) {
          errorDetails.errorCode = error.response.status;
          errorDetails.errorMessage = error.response.data.errorMessage;
        } else {
          errorDetails.errorCode = -1;
          errorDetails.errorMessage = `Request to retrieve energy details failed due to ${error.message}`;
        }
        log(NS_CONTEXT, errorDetails.errorMessage);

        this.setState({
          loading: false,
          failed: true,
          energy: {
            ...errorDetails,
          },
        });
      });
  };

  render() {
    const { children } = this.props;
    const { failed } = this.state;

    if (failed) {
      const {
        energy: { errorMessage },
      } = this.state;
      return (
        <ErrorMessage data-testid="error-message">{errorMessage}</ErrorMessage>
      );
    }
    return (
      <EnergyContext.Provider
        value={{
          ...this.state,
          retrieveEnergy: this.retrieveEnergy,
        }}
      >
        {children}
      </EnergyContext.Provider>
    );
  }
}

EnergyProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  energy: PropTypes.object,
};

EnergyProvider.defaultProps = {
  energy: defaultState,
};

const EnergyConsumer = EnergyContext.Consumer;

export { EnergyProvider, EnergyConsumer };

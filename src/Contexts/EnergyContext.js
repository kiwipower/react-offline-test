import React from 'react';
import PropTypes from 'prop-types';
import axios from '../Helpers/axios';
import config from '../Helpers/config';
import defaultState from './example_api_response.json';

const EnergyContext = React.createContext(defaultState);

class EnergyProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { ...props.energyContext };
  }

  retrieveContext = () => {
    this.setState({
      loading: true,
    });

    axios
      .get(config.energy_service_url)
      .then(response => {
        this.setState({
          loading: false,
          energy: {
            ...response.data.body,
          },
        });
      })
      .catch(error => {
        const errorDetails = {};
        if (error.response) {
          errorDetails.errorCode = error.response.status;
          errorDetails.errorMessage = error.response.data.errorMessage;
        } else {
          errorDetails.errorCode = -1;
          errorDetails.errorMessage = `Request to retrieve energy details failed due to ${error.message}`;
        }

        this.setState({
          loading: false,
          energy: {
            ...errorDetails,
          },
        });
      });
  };

  render() {
    const { children } = this.props;
    return (
      <EnergyContext.Provider
        value={{
          ...this.state,
          retrieveContext: this.retrieveContext,
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
  energyContext: PropTypes.object,
};

EnergyProvider.defaultProps = {
  energyContext: defaultState,
};

const EnergyConsumer = EnergyContext.Consumer;

export { EnergyProvider, EnergyConsumer };

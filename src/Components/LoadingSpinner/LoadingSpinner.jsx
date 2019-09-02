import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const PageOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #999999;
`;

export const LoadingSpinnerIcon = styled.div`
  margin: auto;
  font-size: 32px;
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  animation: spin 2s infinite linear;
`;

const LoadingSpinner = () => {
  return (
    <PageOverlay>
      <LoadingSpinnerIcon data-testid="loading-spinner">
        <FontAwesomeIcon icon={faSpinner} />
      </LoadingSpinnerIcon>
    </PageOverlay>
  );
};

export default LoadingSpinner;

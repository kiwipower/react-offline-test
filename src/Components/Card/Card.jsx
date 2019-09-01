import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export const CardWrapper = styled.div` 
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

const CardContainer = styled.div` 
  flex: 0 0 200px;
  width: 100%;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
`;

const CardGauge = styled.div` 
  max-width: 100%;
`;

const CardTitle = styled.h3`
  width: 100%;
  font-size: 16px;
  text-align: center;
`; 

const Card = () => {
    return (
        <CardContainer>
            <CardGauge>THIS IS A PLACE HOLDER FOR GAUGE</CardGauge>
            <CardTitle>Gas</CardTitle>
        </CardContainer>
    );
};

export default Card;
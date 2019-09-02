import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GaugeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-weight: 300;
  font-size: 1.5em;
  font-family: 'Lato', sans-serif;
  user-select: none;
  margin: 10px;
  background-color: #ffffff;
`;

const GaugeModal = styled.div`
  margin: 10px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  background-color: #ffffff;
`;

const StyledProgress = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledCircle = styled.svg`
  transform: rotate(-90deg);
  fill: none;
  stroke-linecap: round;
`;
const StyledCircleBackGround = styled.circle`
  stroke: #e6e6e6;
`;
const StyledCircleFill = styled.circle`
  stroke: #65c3de;
`;

const PercentWrapper = styled.div``;
const PercentContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ControlInput = styled.input`
  margin-top: 4px;
`;
const CircleGauge = ({ size, progress }) => {
  const center = size / 2;
  const strokeWidth = size * 0.1;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - progress) / 100) * circumference;

  const style = {
    strokeDashoffset: offset,
  };

  return (
    <StyledCircle width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <StyledCircleBackGround
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <StyledCircleFill
        style={style}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
      />
    </StyledCircle>
  );
};
CircleGauge.propTypes = {
  size: PropTypes.number,
  progress: PropTypes.number.isRequired,
};

CircleGauge.defaultProps = { size: 120 };

const PercentText = ({ progress }) => {
  return (
    <PercentWrapper>
      <PercentContent>{progress}%</PercentContent>
    </PercentWrapper>
  );
};

PercentText.propTypes = {
  progress: PropTypes.number.isRequired,
};

const ProgressWrapper = ({ progress }) => {
  return (
    <StyledProgress>
      <CircleGauge progress={progress} />
      <PercentText progress={progress} />
    </StyledProgress>
  );
};

ProgressWrapper.propTypes = {
  progress: PropTypes.number.isRequired,
};

const Gauge = ({ value, testId }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timerID = setInterval(() => {
      const delta = progress + 1;
      if (delta <= value) {
        setProgress(delta);
      } else {
        clearInterval(timerID);
      }
    }, 10);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <GaugeWrapper data-testid={testId}>
      <GaugeModal data-testid={`${testId}-modal`}>
        <ProgressWrapper progress={progress} />
      </GaugeModal>
      <ControlInput
        data-testid={`${testId}-input`}
        type="range"
        value={progress}
        min={0}
        max={100}
        readOnly
      />
    </GaugeWrapper>
  );
};

Gauge.propTypes = {
  value: PropTypes.number,
  testId: PropTypes.string,
};

Gauge.defaultProps = {
  value: 60,
  testId: 'gauge',
};

export default Gauge;

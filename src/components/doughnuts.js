import React, {useState} from "react";
import './doughnuts.css';

function DoughnutsGridItem({perc, fuel}) {

  const doughnutAnimateClassName = 'dougnut-animate-' + fuel;
  const [dougnutAnimate, setDougnutAnimate] = useState(
    setTimeout(() => {
      return setDougnutAnimate(doughnutAnimateClassName)
    }, 0)
  );

  return <div className={`doughnuts-grid-item`}>
    <div className="doughnut-svg-container">
      <svg width="100%" height="100%" viewBox="0 0 40 40">
        <style>
          {`.${doughnutAnimateClassName} {stroke-dasharray:${perc + ' ' + (100 - perc)}}`}
        </style>
        <circle className="doughnut-circle" cx="20" cy="20" r="15.91549430918954" />
        <circle className={`doughnut-chart ${dougnutAnimate}`} cx="20" cy="20" r="15.91549430918954" />
        <text className="doughnut-perc-label" x="50%" y="50%">
          {perc}%
        </text>
        <text className="doughnut-fuel-label" x="50%" y="67%">
          {fuel}
        </text>
      </svg>
    </div>
  </div>
}

export default function Doughnuts(props) {
  if (props.generationmix) {
    const gridItems = props.generationmix.map((item) => {
      return <DoughnutsGridItem
        key={item.fuel}
        perc={item.perc}
        fuel={item.fuel}
      />
    });
    return (
      <div className="doughnuts-container">
        <div className="doughnuts-grid">
          {gridItems}
        </div>
      </div>
    );
  } else {
    return <span>Something went wrong</span>;
  }
}

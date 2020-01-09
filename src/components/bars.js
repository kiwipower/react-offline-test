import React from "react";
import './bars.css';

function BarsGrid({perc, fuel, highestPerc}) {
  const clacPercFromHighest = perc/(highestPerc/100);
  return <div className="bars-grid">
    <div className="bars-grid-item bars-grid-item-sides">
      {fuel}
    </div>
    <div className="bars-grid-item">
      <div className="bar" style={{width: clacPercFromHighest + '%'}}>
        <div className="bar-animate">
          <div className="bar-percentage">{perc}%</div>
        </div>
      </div>
    </div>
    <div className="bars-grid-item bars-grid-item-sides"></div>
  </div>
}

export default function Bars(props) {
  if (props.generationmix) {
    const highestPerc = props.generationmix.reduce(function(acc, current) {
      return Math.max(acc, current.perc);
    }, 0);
    const grid = props.generationmix.map((item) => {
      return <BarsGrid
        key={item.fuel}
        perc={item.perc}
        fuel={item.fuel}
        highestPerc={highestPerc}
      />
    });
    return (
      <div className="bars-container">
        {grid}
      </div>
    );
  } else {
    return <span>Something went wrong</span>;
  }
}

import * as React from "react";
import "./Dashbord.css";
import { COLORS } from "../contants";
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip
} from "recharts";
import { DateViewer } from "../shared";

interface Props {
  energy: {
    generationmix: Array<{ fuel: string; perc: number }>;
    from: string;
    to: string;
  };
}

function BarChartGraph({ energy }: Props) {
  if (!energy) {
    return null;
  }
  const { generationmix, from, to } = energy;

  return (
    <React.Fragment>
      <DateViewer from={from} to={to} className="chart-header" />
      <ResponsiveContainer>
        <BarChart data={generationmix}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fuel">
            <Label value="Uk Energy Name" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis dataKey="perc">
            <Label
              value="Uk Energy in percentage (%)"
              angle={-90}
              offset={0}
              position="left"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip
            labelFormatter={label => `fuel: ${label}`}
            formatter={value => `${value}%`}
          />
          <Bar dataKey="perc">
            {generationmix.map((entry, index) => (
              <Cell
                key={`${entry.perc}-cell-${index}`}
                fill={COLORS[index]}
                strokeWidth={index === 2 ? 4 : 1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default BarChartGraph;

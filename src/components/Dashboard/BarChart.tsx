import React from "react";

interface Props {
  generationmix: Array<{ fuel: string; perc: string }>;
}

function BarChart({ generationmix }: Props) {
  return <div>{JSON.stringify(generationmix)}</div>;
}

export default BarChart;

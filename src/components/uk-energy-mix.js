import React, { useState, useEffect } from "react";
import Doughnuts from "./doughnuts";

export default function UkEnergyMix() {
  const [energy, setEnergy] = useState(null);

  async function fetchEnergyData() {
    const response = await fetch("https://api.carbonintensity.org.uk/generation");
    setEnergy(await response.json());
  }

  useEffect(() => {
    fetchEnergyData();
  }, []);

  if (!energy) {
    return "loading...";
  }

  return (
    <div>
      <h1>Uk Energy Mix</h1>
      <p>From {energy.data.from} to {energy.data.to}</p>
      <Doughnuts generationmix={energy.data.generationmix} />
    </div>
  );
}

import React from "react";
import energyApi from "../../api/EnergyApi";
import BarChart from "./BarChart";

interface MixedDataState {
  from: string;
  to: string;
  generationmix: Array<{ fuel: string; perc: string }>;
}

interface ErrorMessage {
  message: string;
}

function Dashboard() {
  const [data, setData] = React.useState<MixedDataState | null>();
  const [error, setError] = React.useState<string | undefined>();
  const isLoading = data === undefined && error === undefined;

  const getEnrgery = () => {
    energyApi.list().then(
      (response: MixedDataState) => {
        setData(response);
      },
      (error: ErrorMessage) => {
        setError(error.message);
      }
    );
  };

  React.useEffect(() => {
    getEnrgery();
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (!isLoading && error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <BarChart generationmix={data.generationmix} />
    </div>
  );
}

export default Dashboard;

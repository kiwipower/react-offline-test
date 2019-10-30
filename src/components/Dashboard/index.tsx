import * as React from "react";
import { ErrorMessage, LoadingSpinner } from "../shared";
import Charts from "./BarChartGraph";
import energyApi from "../../api/energyApi";
import "./Dashbord.css";

interface Energy {
  from: string;
  to: string;
  generationmix: Array<{ fuel: string; perc: number }>;
}

interface ErrorMessage {
  message: string;
}

function Dashboard() {
  const [energy, setEnergy] = React.useState<Energy | undefined>();
  const [error, setError] = React.useState<string | undefined>();

  const handleFetchData = () => {
    return energyApi.list().then(
      (response: Energy) => {
        setEnergy(response);
      },
      (error: ErrorMessage) => {
        setError(error.message);
      }
    );
  };

  React.useEffect(() => {
    handleFetchData();
  }, []);

  const isLoading = energy === undefined && error === undefined;

  return (
    <div className="container">
      {isLoading ? (
        <LoadingSpinner className="center-flex" isLoading={isLoading} />
      ) : !isLoading && error ? (
        <ErrorMessage className="center-flex" error={error} />
      ) : (
        <Charts energy={energy} />
      )}
    </div>
  );
}

export default Dashboard;

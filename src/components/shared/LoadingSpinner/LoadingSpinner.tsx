import * as React from "react";

interface Props {
  isLoading: boolean;
  className?: string;
}

function LoadingSpinner({ isLoading, className }: Props) {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={className}>
      <h1>Loading.....</h1>
    </div>
  );
}

export default LoadingSpinner;

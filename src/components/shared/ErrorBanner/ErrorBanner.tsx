import React from "react";

interface Props {
  className?: string;
}

const ErrorBanner = ({ className }: Props) => {
  return (
    <div className={className}>
      <span>OOps! "Something went wrong" 😔</span>
      <h2 className={`${className}__title`}>
        We currently don't have access to uk energy generation data. Please hit
        the refresh button or try again later. Thanks
      </h2>
    </div>
  );
};

export default ErrorBanner;

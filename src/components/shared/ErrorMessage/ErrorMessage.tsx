import React from "react";

interface Props {
  error: string;
  className?: string;
}

const ErrorMessage = ({ error, className }: Props) => {
  const [message, clearMessage] = React.useState<string>(error);

  if (!message) {
    return null;
  }

  return (
    <div className={className}>
      <p>{message}</p>
      <button onClick={() => clearMessage("")}>ｘ</button>
    </div>
  );
};

export default ErrorMessage;

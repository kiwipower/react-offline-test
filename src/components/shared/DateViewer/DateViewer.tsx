import * as React from "react";
import { formatDate } from "../../../utils";

interface Props {
  from: string;
  to: string;
  className?: string;
}

function DateViewer({ from, to, className }: Props) {
  return (
    <div className={className}>
      <h2 className="title">{`Data from ${formatDate(from)} to ${formatDate(
        to
      )}`}</h2>
    </div>
  );
}

export default DateViewer;

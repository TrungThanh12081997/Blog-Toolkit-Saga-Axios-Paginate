import React, { useMemo } from "react";
import errorsData from "assets/dataDummy/errorsData";

export type StatusErrorCode = 403 | 404 | 500 | 503;

export interface ErrorProps {
  statusCode?: StatusErrorCode;
  description?: string;
  title?: string;
  buttonContact?: LinkType;
  buttonRedirect?: LinkType;
}

const Error: React.FC<ErrorProps> = ({ title, statusCode }) => {
  const imgSrc = useMemo(() => statusCode && errorsData[statusCode], [statusCode]);

  return (
    <div>
      <p>{title}</p>
      <img src={imgSrc} alt='Test' />
      <p> Component Error</p>
    </div>
  );
};

export default Error;

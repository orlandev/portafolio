import React from "react";

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

// components
import Error from "./Error";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Error onAction={resetErrorBoundary} text={error.message} />
);

export default function Handler({ children, onRetry }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={onRetry}>
      {children}
    </ReactErrorBoundary>
  );
}

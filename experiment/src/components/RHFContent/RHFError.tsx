import React from 'react';

type RHFErrorProps = {
  error?: string;
} & React.ComponentProps<'p'>;

const RHFError = ({ error, ...props }: RHFErrorProps) => {
  return <>{error && <p {...props}>{error}</p>}</>;
};

export { RHFError };

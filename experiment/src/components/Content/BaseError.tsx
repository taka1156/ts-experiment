import React from 'react';

type BaseErrorProps = {
  state?: boolean;
} & React.ComponentProps<'p'>;

const BaseError = ({ state = false, ...props }: BaseErrorProps) => {
  return <>{state && <p {...props}>必須入力です</p>}</>;
};

export { BaseError };

import React, { useState } from 'react';
import { BaseError } from './BaseError';

type ContentProps = React.ComponentProps<'textarea'>;

const Content = (props?: ContentProps) => {
  const [state, setState] = useState(false);
  return (
    <>
      <textarea
        {...props}
        value={props?.value}
        data-testid='inputTarget'
        onBlur={(e) => {
          setState(() => e.target.value === '');
        }}
      ></textarea>
      {/* {state && <p data-testid='errorTarget'>必須入力です</p>} */}
      <BaseError data-testid='errorTarget' state={state} />
    </>
  );
};

export { Content };

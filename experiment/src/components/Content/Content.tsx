import React from 'react';

type ContentProps = React.ComponentPropsWithRef<'textarea'>;

const Content = (props?: ContentProps) => {
  return (
    <textarea
      {...props}
      defaultValue={props?.defaultValue || '何も設定してません'}
      data-testid='inputTarget'
    ></textarea>
  );
};

export { Content };

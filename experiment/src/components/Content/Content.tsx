import React from 'react';

type ContentProps = React.ComponentPropsWithRef<'textarea'>;

const Content = (props: ContentProps) => {
  props.value = '初期の入力値（JS経由）';
  return <textarea {...props} data-testid='inputTarget'></textarea>;
};

export { Content };

import { forwardRef } from 'react';

type BaseTextProps = React.ComponentPropsWithRef<'textarea'>;

const BaseTextarea = forwardRef<HTMLTextAreaElement, BaseTextProps>(
  function createBaseTextarea({ ...props }, ref) {
    return <textarea {...props} ref={ref} />;
  }
);

export { BaseTextarea };

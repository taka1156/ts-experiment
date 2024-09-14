import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BaseTextarea } from './BaseTextarea';
import { RHFError } from './RHFError';
import { RHFSchema } from '.';

type RHFContentProps = {
  register: UseFormRegister<RHFSchema>;
  errors: FieldErrors<RHFSchema>;
};

const RHFContent = ({ register, errors }: RHFContentProps) => {
  return (
    <>
      <BaseTextarea data-testid='inputTarget' {...register('content')} />
      <RHFError data-testid='errorTarget' error={errors.content?.message} />
    </>
  );
};

export { RHFContent };

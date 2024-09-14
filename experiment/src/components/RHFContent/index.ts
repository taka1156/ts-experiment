import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const rhfSchema = z.object({
  content: z.string().refine((v) => v.trim().length > 0, '必須入力です。')
});

export type RHFSchema = z.infer<typeof rhfSchema>;

const useRHFFormState = () => {
  const { register, formState } = useForm<RHFSchema>({
    resolver: zodResolver(rhfSchema),
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      content: ''
    }
  });

  const { errors } = formState;

  return { errors, register };
};

export { useRHFFormState };

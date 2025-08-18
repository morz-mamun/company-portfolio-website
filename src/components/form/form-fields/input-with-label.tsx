/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from '@/components/ui/input';
import { FieldError, UseFormRegister } from 'react-hook-form';

type TInputWithLabelProps = {
  register: UseFormRegister<any>;
  error?: FieldError;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  rules?: Record<string, any>; // validation rules
};

export default function InputWithLabel({
  register,
  error,
  name,
  label,
  type = 'text',
  placeholder = '',
  rules = {},
}: TInputWithLabelProps) {
  return (
    <div className="space-y-2">
      <label className="text-brand dark:text-textPrimary text-sm font-semibold">
        {label}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        className="mt-2 py-5 placeholder:text-xs md:placeholder:text-sm"
        {...register(name, rules)}
      />
      {error && <p className="text-xs text-red-600">{error.message}</p>}
    </div>
  );
}

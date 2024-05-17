import clsx from 'clsx';
import React from 'react';
import { tw } from '../../../utils/tw';
import { ErrorIcon } from '../icons/ErrorIcon';

export type TextInputProps = Readonly<{
  className?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number | undefined;
  required?: boolean;
}>;

export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <div className="max-w-sm">
      <label className="mb-2 block text-sm font-medium" htmlFor={label}>
        {required ? `${label} *` : label}
      </label>
      <div className="relative">
        <input
          className={clsx(
            tw`block w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500`,
            error && tw`border-red-500 focus:border-red-500 focus:ring-red-500`,
            className
          )}
          id={label}
          maxLength={maxLength}
          {...restOfProps}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
            <ErrorIcon />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
);

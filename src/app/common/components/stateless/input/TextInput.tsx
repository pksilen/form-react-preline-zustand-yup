import clsx from 'clsx';
import React from 'react';
import { tw } from '../../../../utils/tw';
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
      <label className="mb-2 block text-sm font-medium dark:text-white" htmlFor={label}>
        {required ? `${label} *` : label}
      </label>
      <div className="relative">
        <input
          className={clsx(
            error &&
              tw`block w-full rounded-lg border-red-500 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400`,
            !error &&
              tw`block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`,
            className
          )}
          id={label}
          maxLength={maxLength}
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

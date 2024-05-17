import clsx from 'clsx';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const SubmitButton = ({ children, className }: Props) => (
  <button
    type="submit"
    className={clsx(
      'inline-flex items-center gap-x-2 rounded-lg border border-transparent disabled:opacity-50',
      'bg-blue-600 px-4 py-3 text-sm font-semibold text-white',
      'hover:bg-blue-700 disabled:pointer-events-none'
    )}
  >
    {children}
  </button>
);

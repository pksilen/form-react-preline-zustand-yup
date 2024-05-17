import clsx from 'clsx';
import React from 'react';
import { tw } from '../../../utils/tw';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const SubmitButton = ({ children, className }: Props) => (
  <button
    className={clsx(
      tw`rounded-lg border border-transparent bg-blue-600 px-4
      py-3 text-center text-sm font-semibold text-white hover:bg-blue-700
      disabled:pointer-events-none disabled:opacity-50`,
      className
    )}
    type="submit"
  >
    {children}
  </button>
);

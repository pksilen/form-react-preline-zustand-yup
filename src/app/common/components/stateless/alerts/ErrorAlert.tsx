import clsx from 'clsx';
import React from 'react';
import { tw } from 'app/common/utils/tw';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ErrorAlert = ({ children, className }: Props) => (
  <div
    className={clsx(tw`mt-2 rounded-lg bg-red-500 p-4 text-sm text-white`, className)}
    role="alert"
  >
    {children}
  </div>
);

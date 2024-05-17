import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ErrorAlert = ({ children, className }: Props) => (
  <div
    className={`mt-2 bg-red-500 text-sm text-white rounded-lg p-4${className ? ` ${className}` : ''}`}
    role="alert"
  >
    {children}
  </div>
);

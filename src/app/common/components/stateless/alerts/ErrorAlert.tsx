import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ErrorAlert = ({ children, className }: Props) => (
  <Alert className={className} status="error">
    <AlertIcon />
    <AlertTitle>{children}</AlertTitle>
  </Alert>
);

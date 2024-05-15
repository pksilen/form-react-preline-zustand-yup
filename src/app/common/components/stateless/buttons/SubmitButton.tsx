import { Button } from '@chakra-ui/react';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const SubmitButton = ({ children, className }: Props) => (
  <Button className={className} colorScheme="blue" type="submit">
    {children}
  </Button>
);

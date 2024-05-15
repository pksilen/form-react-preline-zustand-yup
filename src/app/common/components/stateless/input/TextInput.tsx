import { WarningIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

export type TextInputProps = Readonly<{
  className?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number | undefined;
  required?: boolean;
}>;

export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <InputGroup>
      {error && (
        <InputLeftElement pointerEvents="none">
          <WarningIcon color="red.600" />
        </InputLeftElement>
      )}
      <Input
        className={className}
        isInvalid={!!error}
        maxLength={maxLength}
        placeholder={label}
        required={required}
        {...restOfProps}
      />
    </InputGroup>
  )
);

import React from 'react';
import styled from 'styled-components';

import Block from '../../atoms/Block';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

type FieldProps = {
  name: string;
  invalid?: boolean;
  error?: string;
  label?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Error = styled(Block)`
  margin: 0.5rem 0 0;
`;

const Wrapper = styled.div`
  margin-bottom: 1rem;

  input[type='checkbox'],
  input[type='radio'] {
    margin-right: 0.5rem;
  }

  label {
    vertical-align: middle;
  }
`;

const Field: React.FC<FieldProps> = ({ error, name, invalid, label, type = 'text', ...props }) => {
  const inputProps = {
    id: name,
    name,
    type,
    'aria-describedby': `${name}Error`,
    ...props,
  };

  const renderInputFirst = type === 'checkbox' || type === 'radio';

  return (
    <Wrapper>
      {renderInputFirst && <Input {...inputProps} invalid={invalid} />}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {!renderInputFirst && <Input {...inputProps} invalid={invalid} />}
      {invalid && error && (
        <Error id={`${name}Error`} role="alert" palette="danger">
          {error}
        </Error>
      )}
    </Wrapper>
  );
};

export default Field;

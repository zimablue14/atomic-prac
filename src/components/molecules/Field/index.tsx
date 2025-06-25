import React from 'react';

import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

type CommonFieldProps = {
  name: string;
  label?: string;
  error?: string;
  invalid?: boolean;
};

type InputFieldProps = CommonFieldProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    type?: 'text' | 'checkbox' | 'radio';
  };

type TextareaFieldProps = CommonFieldProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    type: 'textarea';
  };

type SelectFieldProps = CommonFieldProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    type: 'select';
  };

type FieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

const Field: React.FC<FieldProps> = ({ error, name, invalid, label, type = 'text', ...props }) => {
  const id = name;
  const describedBy = `${name}Error`;

  const isCheckboxOrRadio = type === 'checkbox' || type === 'radio';
  const isInputType = type === 'text' || isCheckboxOrRadio;

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        {isInputType && isCheckboxOrRadio && (
          <Input
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            id={id}
            name={name}
            type={type}
            invalid={invalid}
            aria-describedby={describedBy}
          />
        )}

        {label && <Label htmlFor={id}>{label}</Label>}

        {isInputType && !isCheckboxOrRadio && (
          <Input
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            id={id}
            name={name}
            type={type}
            invalid={invalid}
            aria-describedby={describedBy}
          />
        )}
      </div>

      {invalid && error && (
        <p id={describedBy} role="alert" className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Field;

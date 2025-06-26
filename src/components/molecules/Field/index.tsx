import clsx from 'clsx';
import { type FC, type InputHTMLAttributes } from 'react';

import Block from '../../atoms/Block';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

type FieldProps = {
  name: string;
  type?: string;
  label?: string;
  error?: string;
  invalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Field: FC<FieldProps> = ({ name, type = 'text', label, error, invalid, ...props }) => {
  const inputProps = {
    id: name,
    name,
    type,
    'aria-describedby': `${name}Error`,
    'aria-invalid': invalid,
    ...props,
  };

  const renderInputFirst = type === 'checkbox' || type === 'radio';

  return (
    <div className="mb-4">
      <div
        className={clsx({
          'flex items-center': renderInputFirst,
        })}
      >
        {renderInputFirst && <Input {...inputProps} />}
        {label && (
          <Label htmlFor={inputProps.id} className="align-middle">
            {label}
          </Label>
        )}
        {!renderInputFirst && <Input {...inputProps} />}
      </div>

      {invalid && error && (
        <Block id={`${name}Error`} role="alert" palette="danger" className="mt-2">
          {error}
        </Block>
      )}
    </div>
  );
};

export default Field;

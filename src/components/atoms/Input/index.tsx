import { clsx } from 'clsx';
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  reverse?: boolean;
  inputHeight?: number;
  invalid?: boolean;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  inputHeight = 40,
  invalid,
  className,
  ...props
}) => {
  const isTextarea = type === 'textarea';
  const isSelect = type === 'select';
  const isCheck = type === 'checkbox' || type === 'radio';

  const Component = isTextarea ? 'textarea' : isSelect ? 'select' : 'input';

  const baseClass = clsx(
    'block w-full m-0 box-border font-display text-grayscale-100 bg-grayscale-100',
    'border rounded-sm',
    isCheck && 'inline-block border-0 rounded-none w-auto h-auto mr-[0.2rem]',
    !isCheck && clsx(invalid ? 'border-danger-300' : 'border-grayscale-300', 'focus:outline-none'),
    className,
  );

  const fontSize = `${inputHeight / 35.555555556}rem`;
  const padding = isTextarea ? '0.4444444444em' : '0 0.4444444444em';
  const style = {
    fontSize,
    padding,
    height: isTextarea ? 'auto' : '2.2222222222em',
    ...(props.style || {}),
  };

  return React.createElement(Component, {
    type: isTextarea || isSelect ? undefined : type,
    className: baseClass,
    style,
    ...props,
  });
};

export default Input;

import clsx from 'clsx';
import React from 'react';

export type InputType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio';

type CommonProps = {
  type?: InputType;
  reverse?: boolean;
  fontHeight?: number;
  invalid?: boolean;
  className?: string;
};

type InputTextProps = CommonProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    type?: 'text' | 'checkbox' | 'radio';
  };

type TextareaProps = CommonProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    type: 'textarea';
  };

type SelectProps = CommonProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    type: 'select';
  };

type InputProps = InputTextProps | TextareaProps | SelectProps;

const getFontSize = (fontHeight?: number): string => {
  const px = fontHeight ?? 40;
  const rem = px / 35.5555555556;
  return `${rem}rem`;
};

const getCommonClass = (props: InputProps) => {
  const { type, invalid } = props;

  const base = [
    'block w-full box-border m-0 rounded-sm font-primary',
    'border',
    invalid ? 'border-danger-400' : 'border-grayscale-300',
    'bg-grayscale-100/10 text-grayscale-100',
  ];

  const padding = type === 'textarea' ? 'p-[0.4444em]' : 'px-[0.4444em]';
  const heightClass = type === 'textarea' ? '' : 'h-[2.2222em]';

  const fontSize = getFontSize(props.fontHeight);

  return clsx(...base, padding, heightClass) + ` text-[${fontSize}]`;
};

const Input: React.FC<InputProps> = (props) => {
  const { type = 'text', className } = props;
  const finalClass = clsx(getCommonClass(props), className);

  switch (type) {
    case 'textarea': {
      const textareaProps = props as TextareaProps;
      return <textarea {...textareaProps} className={finalClass} />;
    }
    case 'select': {
      const selectProps = props as SelectProps;
      return <select {...selectProps} className={finalClass} />;
    }
    default: {
      const inputProps = props as InputTextProps;
      const checkboxRadioClass =
        type === 'checkbox' || type === 'radio'
          ? 'inline-block w-auto h-auto m-0 mr-[0.2rem] border-0 rounded-none'
          : '';
      return <input {...inputProps} type={type} className={clsx(finalClass, checkboxRadioClass)} />;
    }
  }
};

export default Input;

import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

export type Palette =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'alert'
  | 'success'
  | 'white'
  | 'grayscale';

type ButtonProps = {
  disabled?: boolean;
  palette?: Palette;
  transparent?: boolean;
  height?: number;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  palette = 'primary',
  transparent = false,
  height,
  to,
  href,
  children,
}) => {
  const baseFontSize = height ? `${height / 40}rem` : '1rem';

  const bgColor = transparent
    ? 'bg-transparent'
    : disabled
      ? {
          primary: 'bg-primary-200',
          secondary: 'bg-secondary-200',
          danger: 'bg-danger-200',
          alert: 'bg-alert-200',
          success: 'bg-success-200',
          grayscale: 'bg-grayscale-200',
          white: 'bg-white',
        }[palette]
      : {
          primary: 'bg-primary-300',
          secondary: 'bg-secondary-300',
          danger: 'bg-danger-300',
          alert: 'bg-alert-300',
          success: 'bg-success-300',
          grayscale: 'bg-grayscale-300',
          white: 'bg-white',
        }[palette];

  const textColor = transparent
    ? disabled
      ? {
          primary: 'text-primary-200',
          secondary: 'text-secondary-200',
          danger: 'text-danger-200',
          alert: 'text-alert-200',
          success: 'text-success-200',
          grayscale: 'text-grayscale-200',
          white: 'text-white',
        }[palette]
      : {
          primary: 'text-primary-300',
          secondary: 'text-secondary-300',
          danger: 'text-danger-300',
          alert: 'text-alert-300',
          success: 'text-success-300',
          grayscale: 'text-grayscale-300',
          white: 'text-white',
        }[palette]
    : 'text-white';

  const hoverBgColor =
    !disabled && !transparent
      ? {
          primary: 'hover:bg-primary-100',
          secondary: 'hover:bg-secondary-100',
          danger: 'hover:bg-danger-100',
          alert: 'hover:bg-alert-100',
          success: 'hover:bg-success-100',
          grayscale: 'hover:bg-grayscale-100',
          white: 'hover:bg-gray-100',
        }[palette]
      : '';

  const hoverTextColor =
    !disabled && transparent
      ? {
          primary: 'hover:text-primary-100',
          secondary: 'hover:text-secondary-100',
          danger: 'hover:text-danger-100',
          alert: 'hover:text-alert-100',
          success: 'hover:text-success-100',
          grayscale: 'hover:text-grayscale-100',
          white: 'hover:text-gray-800',
        }[palette]
      : '';

  const classes = clsx(
    'inline-flex items-center justify-center whitespace-nowrap',
    'font-primary text-center px-4 py-2 rounded-sm',
    'border transition-colors duration-200',
    disabled ? 'cursor-default pointer-events-none' : 'cursor-pointer',
    transparent ? 'border-current' : 'border-transparent',
    bgColor,
    textColor,
    hoverBgColor,
    hoverTextColor,
  );

  const style = { fontSize: baseFontSize };

  if (to)
    return (
      <Link to={to} className={classes} style={style}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  return (
    <button
      type="button"
      className="font-primary bg-red-500 text-white"
      style={{ fontSize: '1rem' }}
    >
      테스트 버튼
    </button>
  );
  // return (
  //   <button type={type} className={classes} style={style} disabled={disabled}>
  //     {children}
  //   </button>
  // );
};

export default Button;

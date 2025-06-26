import clsx from 'clsx';
import {
  type ReactNode,
  type CSSProperties,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type JSX,
} from 'react';
import { Link } from 'react-router-dom';

type Palette = 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'white';

type CommonProps = {
  children: ReactNode;
  transparent?: boolean;
  reverse?: boolean;
  palette?: Palette;
  height?: number;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
};

export type ButtonOnlyProps = {
  variant?: 'button';
  to?: never;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
} & CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type LinkProps = {
  variant?: 'link';
  to: string;
  href?: never;
} & CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type AnchorProps = {
  variant?: 'anchor';
  href: string;
  to?: never;
} & CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonOnlyProps | LinkProps | AnchorProps;

// ----------------- 색상 매핑 -------------------
const bgMap = {
  primary: 'bg-primary-100',
  secondary: 'bg-secondary-100',
  danger: 'bg-danger-100',
  alert: 'bg-alert-100',
  success: 'bg-success-100',
  grayscale: 'bg-grayscale-100',
  white: 'bg-white',
};

const textMap = {
  primary: 'text-white',
  secondary: 'text-white',
  danger: 'text-white',
  alert: 'text-black',
  success: 'text-white',
  grayscale: 'text-black',
  white: 'text-black',
};

const hoverBgMap = {
  primary: 'hover:bg-primary-200',
  secondary: 'hover:bg-secondary-200',
  danger: 'hover:bg-danger-200',
  alert: 'hover:bg-alert-200',
  success: 'hover:bg-success-200',
  grayscale: 'hover:bg-grayscale-200',
  white: 'hover:bg-gray-100',
};

const hoverTextMap = {
  primary: 'hover:text-primary-300',
  secondary: 'hover:text-secondary-300',
  danger: 'hover:text-danger-300',
  alert: 'hover:text-alert-300',
  success: 'hover:text-success-300',
  grayscale: 'hover:text-grayscale-300',
  white: 'hover:text-gray-300',
};

// ----------------- 컴포넌트 -------------------
const Button = (props: ButtonProps): JSX.Element => {
  const {
    disabled,
    transparent,
    reverse,
    palette = 'primary',
    height = 40,
    className,
    style,
    children,
    ...rest
  } = props;

  // reverse가 true면 배경 ↔ 텍스트 색상 전환
  const bg = reverse
    ? textMap[palette].replace('text-', 'bg-')
    : transparent
      ? 'bg-transparent'
      : bgMap[palette];

  const textColor = reverse ? bgMap[palette].replace('bg-', 'text-') : textMap[palette];

  const borderColor = transparent ? 'border-current' : 'border-transparent';

  const hoverBg = !disabled && !transparent && !reverse && hoverBgMap[palette];
  const hoverText = !disabled && (transparent || reverse) && hoverTextMap[palette];

  const baseClasses = clsx(
    'inline-flex items-center justify-center whitespace-nowrap font-display box-border border rounded transition-colors duration-250 text-center appearance-none',
    'px-4',
    bg,
    textColor,
    borderColor,
    hoverBg,
    hoverText,
    disabled && 'cursor-default pointer-events-none opacity-50',
    className,
  );

  const inlineStyle: CSSProperties = {
    height: '2.5em',
    fontSize: `${height / 40}rem`,
    ...style,
  };

  if ('to' in props && props.to) {
    const { to, ...linkProps } = rest as LinkProps;
    return (
      <Link to={to} className={baseClasses} style={inlineStyle} {...linkProps}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = rest as AnchorProps;
    return (
      <a href={href} className={baseClasses} style={inlineStyle} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonOnlyProps;
  return (
    <button
      type="button"
      disabled={disabled}
      className={baseClasses}
      style={inlineStyle}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;

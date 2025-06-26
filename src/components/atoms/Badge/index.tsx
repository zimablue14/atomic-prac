import { clsx } from 'clsx';
import React from 'react';

type BadgeProps = {
  palette?: 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'grayscale';
  reverse?: boolean;
  children: React.ReactNode;
  className?: string;
};

const bgMap: Record<NonNullable<BadgeProps['palette']>, string> = {
  primary: 'bg-primary-100',
  secondary: 'bg-secondary-100',
  danger: 'bg-danger-100',
  alert: 'bg-alert-100',
  success: 'bg-success-100',
  grayscale: 'bg-grayscale-100',
};

const textMap: Record<NonNullable<BadgeProps['palette']>, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  danger: 'text-white',
  alert: 'text-black',
  success: 'text-white',
  grayscale: 'text-black',
};

const Badge: React.FC<BadgeProps> = ({ palette = 'primary', reverse, children, className }) => {
  const bgColor = bgMap[palette];
  const textColor = reverse ? bgMap[palette].replace('bg-', 'text-') : textMap[palette];
  const bg = reverse ? textMap[palette].replace('text-', 'bg-') : bgColor;

  return (
    <span
      className={clsx(
        'font-display rounded-[0.16667em] px-[0.3em] py-[0.1em] text-xs leading-[1.5em]',
        bg,
        textColor,
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;

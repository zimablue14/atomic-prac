import { clsx } from 'clsx';
import React from 'react';

type AtomProps = {
  palette?: 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  reverse?: boolean;
  children: React.ReactNode;
};

const paletteMap: Record<NonNullable<AtomProps['palette']>, string> = {
  grayscale: 'text-grayscale-100',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const Atom: React.FC<AtomProps> = ({ palette = 'grayscale', reverse, children }) => {
  return (
    <span
      className={clsx(
        'font-display',
        paletteMap[palette],
        reverse && 'invert', // 필요 시 색 반전 효과
      )}
    >
      {children}
    </span>
  );
};

export default Atom;

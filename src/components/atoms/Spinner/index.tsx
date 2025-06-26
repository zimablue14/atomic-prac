import { clsx } from 'clsx';
import React from 'react';

type Palette = 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'grayscale';

type SpinnerProps = {
  palette?: Palette;
  reverse?: boolean;
  className?: string;
};

const borderBaseMap: Record<Palette, string> = {
  grayscale: 'border-grayscale-200',
  primary: 'border-primary-200',
  secondary: 'border-secondary-200',
  danger: 'border-danger-200',
  alert: 'border-alert-200',
  success: 'border-success-200',
};

const borderBottomMap: Record<Palette, string> = {
  grayscale: 'border-b-grayscale-100',
  primary: 'border-b-primary-100',
  secondary: 'border-b-secondary-100',
  danger: 'border-b-danger-100',
  alert: 'border-b-alert-100',
  success: 'border-b-success-100',
};

const Spinner: React.FC<SpinnerProps> = ({ palette = 'primary', className }) => {
  const borderBase = borderBaseMap[palette] ?? borderBaseMap.primary;
  const borderBottom = borderBottomMap[palette] ?? borderBottomMap.primary;

  return (
    <div
      className={clsx(
        'relative mx-auto h-[1em] w-[1em] animate-spin rounded-full border-[0.2em]',
        borderBase,
        borderBottom,
        className,
      )}
    />
  );
};

export default Spinner;

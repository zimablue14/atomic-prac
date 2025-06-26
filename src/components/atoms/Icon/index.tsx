// components/Icon.tsx
import { clsx } from 'clsx';
import React, { lazy } from 'react';

type IconProps = {
  icon: string;
  width?: number;
  height?: number;
  palette?: 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  reverse?: boolean;
  className?: string;
};

const colorMap: Record<string, string> = {
  grayscale: 'text-grayscale-200',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const loadIcon = (iconName: string) => lazy(() => import(`./icons/${iconName}.svg?react`));

const Icon: React.FC<IconProps> = ({ icon, width, height, palette, className }) => {
  const svg = loadIcon(icon);
  const size = width || height;
  const fontSize = size ? `${size / 16}rem` : '1.25em';

  return (
    <span
      className={clsx(
        'm-[0.1em] box-border inline-block h-[1em] w-[1em]',
        palette ? colorMap[palette] : 'text-current',
        className,
      )}
      style={{ fontSize }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default Icon;

import clsx from 'clsx';
import React, { lazy, Suspense } from 'react';

export type Palette =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'alert'
  | 'success'
  | 'white'
  | 'grayscale';

type IconProps = {
  icon: string;
  width?: number;
  height?: number;
  palette?: Palette;
  reverse?: boolean;
  className?: string;
};

const getColorClass = (palette: Palette = 'grayscale', reverse = false): string => {
  const colorMap: Record<Palette, [string, string]> = {
    grayscale: ['text-grayscale-100', 'text-grayscale-800'],
    primary: ['text-primary-100', 'text-primary-400'],
    secondary: ['text-secondary-100', 'text-secondary-400'],
    danger: ['text-danger-100', 'text-danger-400'],
    alert: ['text-alert-100', 'text-alert-400'],
    success: ['text-success-100', 'text-success-400'],
    white: ['text-white', 'text-black'],
  };

  const [normal, reversed] = colorMap[palette];
  return reverse ? reversed : normal;
};

const loadIcon = (iconName: string) => lazy(() => import(`./icons/${iconName}.svg?react`));

const Icon: React.FC<IconProps> = ({
  icon,
  width,
  height,
  palette = 'grayscale',
  reverse = false,
}) => {
  const SvgIcon = loadIcon(icon);
  const size = width || height || 20;

  return (
    <span
      className={clsx('m-[0.1em] box-border inline-block', getColorClass(palette, reverse))}
      style={{
        fontSize: `${size / 16}rem`,
        width: '1em',
        height: '1em',
      }}
    >
      <Suspense fallback={null}>
        <SvgIcon className="h-full w-full fill-current stroke-current" />
      </Suspense>
    </span>
  );
};

export default Icon;

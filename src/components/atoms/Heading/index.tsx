import clsx from 'clsx';
import React, { type JSX } from 'react';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  reverse?: boolean;
  palette?: 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'white' | 'grayscale';
  className?: string;
};

const levelToStyle: Record<number, string> = {
  1: 'text-2xl mt-4 mb-2',
  2: 'text-xl mt-4 mb-2',
  3: 'text-lg mt-3 mb-2',
  4: 'text-base mt-3 mb-1.5',
  5: 'text-sm mt-2 mb-1',
  6: 'text-xs mt-2 mb-1',
};

const paletteToColor = (palette: string = 'grayscale', reverse = false): string => {
  const map: Record<string, [string, string]> = {
    grayscale: ['text-grayscale-800', 'text-grayscale-0'],
    primary: ['text-primary-400', 'text-white'],
    secondary: ['text-secondary-400', 'text-white'],
    danger: ['text-danger-400', 'text-white'],
    alert: ['text-alert-400', 'text-white'],
    success: ['text-success-400', 'text-white'],
    white: ['text-white', 'text-black'],
  };

  const [normal, reversed] = map[palette] ?? map.grayscale;
  return reverse ? reversed : normal;
};

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  reverse = false,
  palette = 'grayscale',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        'font-primary font-medium',
        levelToStyle[level],
        paletteToColor(palette, reverse),
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;

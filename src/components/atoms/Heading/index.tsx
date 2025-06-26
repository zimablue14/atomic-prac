import { clsx } from 'clsx';
import React, { type JSX } from 'react';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  reverse?: boolean;
  palette?: keyof typeof textMap;
};

const levelToTextSize: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'text-3xl',
  2: 'text-2xl',
  3: 'text-xl',
  4: 'text-lg',
  5: 'text-base',
  6: 'text-sm',
};

const textMap = {
  grayscale: 'text-grayscale-200',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  palette = 'grayscale',
  ...rest
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  const textColor = textMap[palette] ?? textMap.grayscale;

  return React.createElement(
    Component,
    {
      className: clsx(
        'font-display font-medium mt-[0.85714em] mb-[0.57142em]',
        levelToTextSize[level],
        textColor,
      ),
      ...rest,
    },
    children,
  );
};

export default Heading;

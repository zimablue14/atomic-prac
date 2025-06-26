// components/Caption.tsx
import { clsx } from 'clsx';
import React from 'react';

type CaptionProps = {
  reverse?: boolean;
  palette?: keyof typeof textMap;
  children: React.ReactNode;
};

const textMap = {
  grayscale: 'text-grayscale-200',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const Caption: React.FC<CaptionProps> = ({ palette = 'grayscale', children }) => {
  return (
    <caption
      className={clsx(
        'font-display text-sm leading-8 font-medium uppercase',
        textMap[palette] ?? textMap.grayscale,
      )}
    >
      {children}
    </caption>
  );
};

export default Caption;

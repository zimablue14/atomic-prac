// components/PreformattedText.tsx
import { clsx } from 'clsx';
import React from 'react';

type PreformattedTextProps = {
  palette?: 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  reverse?: boolean;
  block?: boolean;
  wrapped?: boolean;
  children: React.ReactNode;
  className?: string;
};

const textMap = {
  grayscale: 'text-grayscale-100',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const bgMap = {
  grayscale: 'bg-grayscale-200',
  primary: 'bg-primary-200',
  secondary: 'bg-secondary-200',
  danger: 'bg-danger-200',
  alert: 'bg-alert-200',
  success: 'bg-success-200',
};

const PreformattedText: React.FC<PreformattedTextProps> = ({
  palette = 'grayscale',
  block,
  wrapped,
  children,
  className,
}) => {
  return (
    <pre
      className={clsx(
        block ? 'block' : 'inline',
        'font-pre overflow-auto leading-[150%]',
        wrapped ? 'whitespace-pre-wrap' : 'whitespace-nowrap',
        textMap[palette],
        bgMap[palette],
        block ? 'p-4' : 'px-2',
        className,
      )}
    >
      {children}
    </pre>
  );
};

export default PreformattedText;

// components/Label.tsx
import { clsx } from 'clsx';
import React from 'react';

type LabelProps = {
  reverse?: boolean; // 현재는 스타일에 반영되지 않음
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
};

const Label: React.FC<LabelProps> = ({ children, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx('font-display text-grayscale-200 text-base leading-[2em]', className)}
    >
      {children}
    </label>
  );
};

export default Label;

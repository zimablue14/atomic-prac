import clsx from 'clsx';
import React from 'react';

type LabelProps = {
  reverse?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ reverse, className, children, ...rest }) => {
  const colorClass = reverse ? 'text-grayscale-100' : 'text-grayscale-400';

  return (
    <label
      {...rest}
      className={clsx('font-primary text-base leading-[2em]', colorClass, className)}
    >
      {children}
    </label>
  );
};

export default Label;

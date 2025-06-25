import clsx from 'clsx';
import React from 'react';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  palette?: 'primary' | 'grayscale';
}

const Spinner: React.FC<SpinnerProps> = ({
  reverse = false,
  palette = 'grayscale',
  className,
  ...props
}) => {
  const outerBorder =
    palette === 'primary'
      ? reverse
        ? 'border-primary-100'
        : 'border-primary-500'
      : reverse
        ? 'border-gray-100'
        : 'border-gray-500';

  const bottomBorder = palette === 'primary' ? 'border-b-primary-100' : 'border-b-gray-100';

  const classes = clsx(
    'relative w-4 h-4 border-[0.2em] border-solid rounded-full animate-spin',
    outerBorder,
    bottomBorder,
    className,
  );

  return <div className={classes} {...props} />;
};

export default Spinner;

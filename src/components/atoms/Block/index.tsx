import clsx from 'clsx';
import React from 'react';

type BlockProps = {
  palette?: keyof typeof textMap;
  reverse?: boolean;
  opaque?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const textMap = {
  grayscale: 'text-grayscale-100',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const bgMap = {
  grayscale: 'bg-white',
  primary: 'bg-primary-100',
  secondary: 'bg-secondary-100',
  danger: 'bg-danger-100',
  alert: 'bg-alert-100',
  success: 'bg-success-100',
};

const Block: React.FC<BlockProps> = ({
  palette = 'grayscale',
  opaque,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        'font-display',
        textMap[palette],
        opaque ? bgMap[palette] : 'bg-transparent',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Block;

import clsx from 'clsx';
import type { ReactNode } from 'react';

type CaptionProps = {
  reverse?: boolean;
  children: ReactNode;
};

const Caption: React.FC<CaptionProps> = ({ children }) => {
  const classes = clsx(
    'font-primary',
    'text-grayscale-100',
    'font-medium',
    'leading-8',
    'text-sm',
    'uppercase',
  );

  return <caption className={classes}>{children}</caption>;
};

export default Caption;

import clsx from 'clsx';

type AtomProps = {
  palette?: 'primary' | 'secondary' | 'grayscale';
  reverse?: boolean;
  children: React.ReactNode;
};

export const Atom = ({ palette = 'grayscale', reverse, children }: AtomProps) => {
  const textColor = {
    grayscale: reverse ? 'text-white' : 'text-grayscale-800',
    primary: reverse ? 'text-white' : 'text-primary-400',
    secondary: reverse ? 'text-white' : 'text-secondary-400',
  }[palette];

  return <span className={clsx('font-primary', textColor)}>{children}</span>;
};

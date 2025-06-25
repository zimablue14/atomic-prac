import clsx from 'clsx';

type Palette = 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'white' | 'grayscale';

type BlockProps = {
  palette?: Palette;
  opaque?: boolean;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Block = ({ palette = 'grayscale', opaque = false, className, children }: BlockProps) => {
  const bgColor = opaque
    ? {
        primary: 'bg-primary-100',
        secondary: 'bg-secondary-100',
        danger: 'bg-danger-100',
        alert: 'bg-alert-100',
        success: 'bg-success-100',
        white: 'bg-white-100',
        grayscale: 'bg-grayscale-100',
      }[palette]
    : 'bg-transparent';

  const textColor = {
    primary: 'text-primary-200',
    secondary: 'text-secondary-200',
    danger: 'text-danger-200',
    alert: 'text-alert-200',
    success: 'text-success-200',
    white: 'text-white-200',
    grayscale: 'text-grayscale-200',
  }[palette];

  return <div className={clsx('font-primary', bgColor, textColor, className)}>{children}</div>;
};

export default Block;

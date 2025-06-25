import clsx from 'clsx';

type Palette = 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'white' | 'grayscale';

type BadgeProps = {
  palette?: Palette;
  reverse?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ palette = 'primary', reverse, children }: BadgeProps) => {
  const bgColor = {
    primary: 'bg-primary-100',
    secondary: 'bg-secondary-100',
    danger: 'bg-danger-100',
    alert: 'bg-alert-100',
    success: 'bg-success-100',
    white: 'bg-white-100',
    grayscale: 'bg-grayscale-100',
  }[palette];

  const textColor = reverse ? 'text-grayscale-800' : 'text-white';

  return (
    <span
      className={clsx(
        'font-primary rounded-[0.16667em] px-[0.3em] py-[0.1em] text-[0.75rem] leading-[1.5em]',
        bgColor,
        textColor,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;

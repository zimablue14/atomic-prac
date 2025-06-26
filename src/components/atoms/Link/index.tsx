import { clsx } from 'clsx';
import type { FC } from 'react';
import { NavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router-dom';

type LinkProps = {
  to?: string;
  className?: string | ((props: NavLinkRenderProps) => string);
  palette?: 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  reverse?: boolean;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> &
  Omit<NavLinkProps, 'className' | 'to'>;

const textMap: Record<string, string> = {
  grayscale: 'text-grayscale-200',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const Link: FC<LinkProps> = ({ to, palette = 'grayscale', className, children, ...rest }) => {
  const textColor = textMap[palette] ?? textMap.grayscale;
  const staticClasses = clsx('font-display font-medium no-underline hover:underline', textColor);

  if (to) {
    return (
      <NavLink
        to={to}
        className={
          typeof className === 'function'
            ? (props) => clsx(staticClasses, className(props))
            : clsx(staticClasses, className)
        }
        {...rest}
      >
        {children}
      </NavLink>
    );
  }

  // 나머지 props는 a 전용으로 제한되었기 때문에 안전하게 사용 가능
  return (
    <a className={clsx(staticClasses, className)} {...rest}>
      {children}
    </a>
  );
};

export default Link;

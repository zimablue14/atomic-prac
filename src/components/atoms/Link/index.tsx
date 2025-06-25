import clsx from 'clsx';
import React from 'react';
import { NavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router-dom';

type PaletteKey = 'primary' | 'secondary' | 'grayscale' | 'danger' | string;

interface CommonProps {
  reverse?: boolean;
  palette?: PaletteKey;
  className?: string;
  children?: React.ReactNode;
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & {
    to?: undefined;
  };

type InternalLinkProps = Omit<NavLinkProps, 'className' | 'children'> &
  CommonProps & {
    to: string;
  };

type LinkProps = InternalLinkProps | AnchorProps;

const baseClass = 'font-primary font-medium no-underline hover:underline';

const paletteClass = (palette: PaletteKey = 'primary', reverse?: boolean) => {
  const colorKey = reverse ? 'last' : 'default';
  const classMap: Record<PaletteKey, Record<'default' | 'last', string>> = {
    primary: {
      default: 'text-primary-500',
      last: 'text-primary-900',
    },
    secondary: {
      default: 'text-secondary-500',
      last: 'text-secondary-900',
    },
    grayscale: {
      default: 'text-grayscale-400',
      last: 'text-grayscale-900',
    },
    danger: {
      default: 'text-danger-500',
      last: 'text-danger-900',
    },
  };

  return classMap[palette]?.[colorKey] ?? 'text-primary-500';
};

const isInternalLink = (props: LinkProps): props is InternalLinkProps => {
  return typeof props.to === 'string';
};

const Link: React.FC<LinkProps> = (props) => {
  const { children, className, reverse, palette = 'primary' } = props;

  const composedClass = clsx(baseClass, paletteClass(palette, reverse), className);

  if (isInternalLink(props)) {
    const { to, ...navLinkProps } = props;

    return (
      <NavLink
        to={to}
        {...navLinkProps}
        className={({ isActive }: NavLinkRenderProps) => clsx(composedClass, isActive && 'active')}
      >
        {children}
      </NavLink>
    );
  }

  const { ...anchorProps } = props;

  return (
    <a {...anchorProps} className={composedClass}>
      {children}
    </a>
  );
};

export default Link;

import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

import Button, { type ButtonOnlyProps } from '../../atoms/Button';
import Icon from '../../atoms/Icon';

type Palette = 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'white';

type IconButtonProps = {
  icon: string;
  children?: ReactNode;
  collapsed?: boolean;
  responsive?: boolean;
  breakpoint?: number;
  right?: boolean;
  height?: number;
  palette?: Palette;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
} & Omit<ButtonOnlyProps, 'children' | 'to' | 'type'>;

const IconButton: FC<IconButtonProps> = ({
  icon,
  children,
  collapsed,
  responsive,
  breakpoint = 420,
  right,
  height,
  type = 'button',
  className,
  style,
  ...props
}) => {
  const hasText = !!children;

  const iconElement = (
    <Icon icon={icon} height={height ? height / 2.5 : undefined} className="flex-none" />
  );

  return (
    <Button
      {...(props as ButtonOnlyProps)}
      variant="button"
      type={type}
      className={clsx(
        'box-border flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out',
        hasText ? 'w-auto max-w-full px-2' : 'w-10 max-w-[2.5em] px-0',
        'flex-none',
        collapsed && 'hover:max-w-full',
        className,
      )}
      style={{ flex: responsive ? '0' : undefined, ...style }}
    >
      {!right && iconElement}
      {hasText && (
        <span className={clsx('text px-2', responsive && `max-[${breakpoint}px]:hidden`)}>
          {children}
        </span>
      )}
      {right && iconElement}
    </Button>
  );
};

export default IconButton;

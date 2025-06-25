import clsx from 'clsx';
import React from 'react';

import Button from '../../atoms/Button';
import Icon, { type Palette } from '../../atoms/Icon';

type SharedProps = {
  icon: string;
  height?: number;
  responsive?: boolean;
  breakpoint?: number;
  collapsed?: boolean;
  right?: boolean;
  children?: React.ReactNode;
  palette?: Palette;
  reverse?: boolean;
  className?: string;
};

// <a> 태그 용
type AnchorProps = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'type'> & {
    href: string;
  };

// <button> 태그 용
type ButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: undefined;
    type?: 'button' | 'submit' | 'reset';
  };

type IconButtonProps = AnchorProps | ButtonProps;

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    icon,
    height,
    responsive = false,
    breakpoint = 420,
    collapsed = false,
    right = false,
    children,
    palette = 'grayscale',
    reverse = false,
    className,
    ...rest
  } = props;

  const hasText = !!children;
  const iconSize = height ? height / 2.5 : 20;

  const commonClassName = clsx(
    'group box-border flex items-center justify-center overflow-hidden transition-all duration-200',
    hasText ? 'px-2' : 'w-10',
    collapsed && 'max-w-10 hover:max-w-full',
    responsive && `max-[${breakpoint}px]:w-auto max-[${breakpoint}px]:flex-none`,
    className,
  );

  // href 유무로 분기 처리
  if ('href' in props) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <Button {...anchorRest} href={href} className={commonClassName}>
        {!right && (
          <Icon
            icon={icon}
            height={iconSize}
            className="shrink-0"
            palette={palette}
            reverse={reverse}
          />
        )}
        {hasText && (
          <span
            className={clsx(
              'ml-1 text-sm',
              collapsed && 'animate-fadeIn hidden group-hover:inline-block',
              responsive && `max-[${breakpoint}px]:hidden`,
            )}
          >
            {children}
          </span>
        )}
        {right && (
          <Icon
            icon={icon}
            height={iconSize}
            className="ml-1 shrink-0"
            palette={palette}
            reverse={reverse}
          />
        )}
      </Button>
    );
  }

  // 일반 button
  return (
    <Button {...rest} className={commonClassName}>
      {!right && (
        <Icon
          icon={icon}
          height={iconSize}
          className="shrink-0"
          palette={palette}
          reverse={reverse}
        />
      )}
      {hasText && (
        <span
          className={clsx(
            'ml-1 text-sm',
            collapsed && 'animate-fadeIn hidden group-hover:inline-block',
            responsive && `max-[${breakpoint}px]:hidden`,
          )}
        >
          {children}
        </span>
      )}
      {right && (
        <Icon
          icon={icon}
          height={iconSize}
          className="ml-1 shrink-0"
          palette={palette}
          reverse={reverse}
        />
      )}
    </Button>
  );
};

export default IconButton;

import clsx from 'clsx';
import React from 'react';

import Icon, { type Palette } from '../../atoms/Icon';
import Link from '../../atoms/Link';

type IconLinkProps = {
  icon: string;
  height?: number;
  palette?: Palette;
  reverse?: boolean;
  responsive?: boolean;
  right?: boolean;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Link>;

const IconLink: React.FC<IconLinkProps> = ({
  height,
  icon,
  right = false,
  responsive = false,
  children,
  palette,
  reverse,
  className,
  ...props
}) => {
  const hasText = !!children;

  const iconSize = height ? height / 3 : 12; // px 단위
  const iconMargin = hasText ? (right ? 'ml-1' : 'mr-1') : '';

  const iconElement = (
    <Icon
      icon={icon}
      height={iconSize}
      palette={palette}
      reverse={reverse}
      className={clsx('inline-block align-middle', iconMargin, responsive && 'max-[420px]:m-0')}
    />
  );

  return (
    <Link {...props} className={clsx('inline-flex items-center', className)}>
      {!right && iconElement}
      {hasText && <span className={clsx(responsive && 'max-[420px]:hidden')}>{children}</span>}
      {right && iconElement}
    </Link>
  );
};

export default IconLink;

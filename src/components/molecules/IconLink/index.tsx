import clsx from 'clsx';

import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';

type IconLinkProps = {
  to?: string;
  icon: string;
  height?: number;
  palette?: 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  reverse?: boolean;
  responsive?: boolean;
  right?: boolean;
  children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconLink = ({
  icon,
  height,
  palette,
  reverse,
  responsive,
  right,
  children,
  className,
  ...props
}: IconLinkProps) => {
  const iconElement = (
    <Icon
      icon={icon}
      height={height}
      palette={palette}
      reverse={reverse}
      className={clsx(
        'inline-block',
        children && (right ? 'ml-1' : 'mr-1'),
        responsive && 'max-[420px]:m-0',
      )}
    />
  );

  return (
    <Link {...props} className={clsx('inline-flex items-center', className)}>
      {!right && iconElement}
      <span className={clsx(responsive && 'max-[420px]:hidden')}>{children}</span>
      {right && iconElement}
    </Link>
  );
};

export default IconLink;

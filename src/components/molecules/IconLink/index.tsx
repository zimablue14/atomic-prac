import React from 'react';
import styled from 'styled-components';

import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';

type StyledIconProps = {
  height?: number;
  $hasText?: boolean;
  $right?: boolean;
  responsive?: boolean;
};

type TextProps = {
  responsive?: boolean;
};

type IconLinkProps = {
  icon: string;
  height?: number;
  palette?: string;
  $reverse?: boolean;
  responsive?: boolean;
  $right?: boolean;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Link>;

const fontSize = ({ height }: StyledIconProps): string =>
  height ? `${height / 3 / 16}rem` : '0.75em';

const margin = ({ $hasText, $right }: StyledIconProps): string =>
  $hasText ? ($right ? '0 0 0 0.25em' : '0 0.25em 0 0') : '0';

const StyledIcon = styled(Icon)<StyledIconProps>`
  font-size: ${fontSize};
  margin: ${margin};

  @media screen and (max-width: 420px) {
    margin: ${({ responsive }) => (responsive ? 0 : undefined)};
  }
`;

const Text = styled.span<TextProps>`
  @media screen and (max-width: 420px) {
    display: ${({ responsive }) => (responsive ? 'none' : undefined)};
  }
`;

const IconLink: React.FC<IconLinkProps> = ({
  height,
  icon,
  $right,
  responsive,
  children,
  palette,
  $reverse,
  ...props
}) => {
  const iconElement = (
    <StyledIcon
      icon={icon}
      height={height}
      $hasText={!!children}
      $right={$right}
      responsive={responsive}
      palette={palette}
      $reverse={$reverse}
    />
  );

  return (
    <Link {...props}>
      {!$right && iconElement}
      <Text responsive={responsive}>{children}</Text>
      {$right && iconElement}
    </Link>
  );
};

export default IconLink;

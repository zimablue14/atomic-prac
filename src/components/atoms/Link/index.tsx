import React from 'react';
import { NavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type PaletteKey = keyof typeof theme.palette;

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

const linkStyles = css<CommonProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme, palette = 'primary', reverse }) =>
    reverse
      ? theme.palette[palette][theme.palette[palette].length - 1]
      : theme.palette[palette][1]};

  &:hover {
    text-decoration: underline;
  }
`;

const StyledAnchor = styled.a<CommonProps>`
  ${linkStyles}
`;

const StyledSpan = styled.span<CommonProps>`
  ${linkStyles}
`;

const isInternalLink = (props: LinkProps): props is InternalLinkProps => {
  return typeof props.to === 'string';
};

const Link: React.FC<LinkProps> = (props) => {
  const { children, className, reverse, palette } = props;

  if (isInternalLink(props)) {
    const { to, ...navLinkProps } = props;

    return (
      <NavLink
        to={to}
        {...navLinkProps}
        className={({ isActive }: NavLinkRenderProps) =>
          [className, isActive ? 'active' : null].filter(Boolean).join(' ')
        }
      >
        <StyledSpan className={className} reverse={reverse} palette={palette}>
          {children}
        </StyledSpan>
      </NavLink>
    );
  }

  const { to: _, ...anchorProps } = props;

  return (
    <StyledAnchor {...anchorProps} reverse={reverse} palette={palette}>
      {children}
    </StyledAnchor>
  );
};

export default Link;

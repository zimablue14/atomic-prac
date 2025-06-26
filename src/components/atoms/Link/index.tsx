import React from 'react';
import { NavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

const linkStyles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: none;
  font-weight: 500;

  color: ${({ theme }) => theme.palette.grayscale[0]};

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: ${({ theme }) => theme.palette.grayscale[7]};
  }
`;

const StyledAnchor = styled.a`
  ${linkStyles}
`;

const StyledSpan = styled.span`
  ${linkStyles}
`;

type InternalLinkProps = Omit<NavLinkProps, 'className' | 'children'> & {
  to: string;
  className?: string;
  children?: React.ReactNode;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: undefined;
  className?: string;
  children?: React.ReactNode;
};

type LinkProps = InternalLinkProps | AnchorProps;

const isInternalLink = (props: LinkProps): props is InternalLinkProps => {
  return typeof props.to === 'string';
};

const Link: React.FC<LinkProps> = (props) => {
  const { children, className } = props;

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
        <StyledSpan className={className}>{children}</StyledSpan>
      </NavLink>
    );
  }

  const { ...anchorProps } = props;

  return <StyledAnchor {...anchorProps}>{children}</StyledAnchor>;
};

export default Link;

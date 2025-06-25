import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type PaletteKey = keyof typeof theme.palette;

type ButtonProps = {
  disabled?: boolean;
  palette?: PaletteKey;
  transparent?: boolean;
  reverse?: boolean;
  height?: number;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  href?: string;
};

const fontSize = (height: number = 40) => `${height / 40}rem`;

const getBgColor = (p: ButtonProps & { theme: typeof theme }) => {
  if (p.transparent) return 'transparent';
  const tone = p.disabled ? 2 : 1;
  return p.theme.palette[p.palette || 'primary'][tone];
};

const getFgColor = (p: ButtonProps & { theme: typeof theme }) => {
  if (p.transparent) {
    const tone = p.disabled ? 2 : 1;
    return p.theme.palette[p.palette || 'primary'][tone];
  }
  return p.theme.palette.grayscale[0];
};

const getHoverBgColor = (p: ButtonProps & { theme: typeof theme }) => {
  if (p.disabled || p.transparent) return undefined;
  return p.theme.palette[p.palette || 'primary'][0];
};

const getHoverFgColor = (p: ButtonProps & { theme: typeof theme }) => {
  if (p.disabled || !p.transparent) return undefined;
  return p.theme.palette[p.palette || 'primary'][0];
};

const sharedStyles = css<ButtonProps>`
  display: inline-flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  align-items: center;
  white-space: nowrap;
  font-size: ${({ height }) => fontSize(height)};
  border: 0.0625em solid ${({ transparent }) => (transparent ? 'currentcolor' : 'transparent')};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition:
    background-color 250ms ease-out,
    color 250ms ease-out,
    border-color 250ms ease-out;
  background-color: ${getBgColor};
  color: ${getFgColor};

  &:hover,
  &:focus,
  &:active {
    background-color: ${getHoverBgColor};
    color: ${getHoverFgColor};
  }

  &:focus {
    outline: none;
  }
`;

const StyledLink = styled(Link)<ButtonProps>`
  ${sharedStyles}
`;

const Anchor = styled.a<ButtonProps>`
  ${sharedStyles}
`;

const StyledButton = styled.button<ButtonProps>`
  ${sharedStyles}
`;

const Button: React.FC<ButtonProps> = ({ type = 'button', ...props }) => {
  const { to, href } = props;

  if (to) return <StyledLink {...props} />;
  if (href) return <Anchor {...props} />;
  return <StyledButton {...props} type={type} />;
};

export default Button;

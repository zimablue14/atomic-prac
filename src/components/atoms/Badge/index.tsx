import styled from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type PaletteKey = keyof typeof theme.palette;

type BadgeProps = {
  palette?: PaletteKey;
  reverse?: boolean;
};

const Badge = styled.span<BadgeProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0.1em 0.3em;
  color: ${({ theme, reverse }) =>
    reverse ? theme.palette.grayscale[7] : theme.palette.grayscale[0]};
  background-color: ${({ theme, palette: p = 'primary' }) => theme.palette[p][0]};
  border-radius: 0.16667em;
`;

Badge.defaultProps = {
  palette: 'primary',
};

export default Badge;

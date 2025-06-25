import styled from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type PaletteKey = keyof typeof theme.palette;

type BlockProps = {
  palette?: PaletteKey;
  reverse?: boolean;
  opaque?: boolean;
};

const Block = styled.div<BlockProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme, opaque = false, palette: p = 'grayscale' }) =>
    opaque ? theme.palette[p][0] : 'transparent'};
  color: ${({ theme, palette: p = 'grayscale' }) => theme.palette[p][1]};
`;

export default Block;

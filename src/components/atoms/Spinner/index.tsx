import styled, { keyframes } from 'styled-components';

import type theme from '../../../styles/defaultTheme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface SpinnerProps {
  palette?: keyof typeof theme.palette;
  $reverse?: boolean;
}

const Spinner = styled.div<SpinnerProps>`
  position: relative;
  border: 0.2em solid
    ${({ theme, $reverse, palette = 'grayscale' }) =>
      $reverse
        ? theme.palette[palette][1]
        : theme.palette[palette][5] || theme.palette.grayscale[1]};
  border-bottom-color: ${({ theme, palette = 'primary' }) => theme.palette[palette][1]};
  border-radius: 50%;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;

import React from 'react';
import styled, { css } from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  reverse?: boolean;
  palette?: keyof typeof theme.palette;
};

const fontSize = ({ level = 1 }: { level?: number }) => `${0.75 + 1 * (1 / level)}rem`;

const styles = css<HeadingProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${({ theme, palette = 'grayscale', reverse }) =>
    reverse
      ? theme.palette[palette][theme.palette[palette].length - 1]
      : theme.palette[palette][0]};
`;

const Heading = styled(({ level = 1, children, ...props }: HeadingProps) =>
  React.createElement(`h${level}`, props, children),
)<HeadingProps>`
  ${styles}
`;

export default Heading;

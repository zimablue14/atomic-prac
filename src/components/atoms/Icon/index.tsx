import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type IconProps = {
  icon: string;
  width?: number;
  height?: number;
  palette?: keyof typeof theme.palette;
  reverse?: boolean;
};

type StyledWrapperProps = Omit<IconProps, 'icon'>;

const getFontSize = ({ width, height }: Pick<IconProps, 'width' | 'height'>) => {
  const size = width || height;
  return size ? `${size / 16}rem` : '1.25em';
};

const Wrapper = styled.span<StyledWrapperProps>`
  display: inline-block;
  font-size: ${getFontSize};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;
  color: ${({ theme, palette = 'grayscale', reverse }) =>
    reverse
      ? theme.palette[palette][theme.palette[palette].length - 1]
      : theme.palette[palette][1]};

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`;

const loadIcon = (iconName: string) => lazy(() => import(`./icons/${iconName}.svg?react`));

const Icon: React.FC<IconProps> = ({ icon, ...styleProps }) => {
  const SvgIcon = loadIcon(icon);

  return (
    <Wrapper {...styleProps}>
      <Suspense fallback={null}>
        <SvgIcon />
      </Suspense>
    </Wrapper>
  );
};

export default Icon;

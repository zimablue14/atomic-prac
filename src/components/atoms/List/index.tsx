import React from 'react';
import styled, { css } from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type ListProps = {
  ordered?: boolean;
  palette?: keyof typeof theme.palette;
  reverse?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLUListElement | HTMLOListElement>;

const styles = css<ListProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${({ theme, palette = 'grayscale', reverse }) =>
    reverse
      ? theme.palette[palette][theme.palette[palette].length - 1]
      : theme.palette[palette][1]};
`;

const Ol = styled.ol<ListProps>`
  ${styles}
`;

const Ul = styled.ul<ListProps>`
  ${styles}
`;

const List: React.FC<ListProps> = ({ ordered, children, ...props }) => {
  const Component = ordered ? Ol : Ul;
  return <Component {...props}>{children}</Component>;
};

export default List;

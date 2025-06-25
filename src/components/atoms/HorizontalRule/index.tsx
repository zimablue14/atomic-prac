import styled from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type HorizontalRuleProps = {
  palette?: keyof typeof theme.palette;
  reverse?: boolean;
};

const HorizontalRule = styled.hr<HorizontalRuleProps>`
  border-width: 0 0 1px;
  border-style: solid;
  width: 100%;
  border-color: ${({ theme, palette = 'grayscale', reverse }) =>
    reverse
      ? theme.palette[palette][theme.palette[palette].length - 1]
      : theme.palette[palette][1]};
`;

export default HorizontalRule;

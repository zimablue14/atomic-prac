import styled from 'styled-components';

type PreProps = {
  block?: boolean;
  wrapped?: boolean;
  reverse?: boolean;
  palette?: keyof typeof import('../../../styles/defaultTheme').default.palette;
};

const PreformattedText = styled.pre<PreProps>`
  display: ${({ block }) => (block ? 'block' : 'inline')};
  font-family: ${({ theme }) => theme.fonts.pre};
  color: ${({ theme, reverse }) =>
    reverse ? theme.palette.grayscale[7] : theme.palette.grayscale[0]};
  background-color: ${({ theme, reverse }) =>
    reverse ? theme.palette.grayscale[0] : theme.palette.grayscale[1]};
  padding: ${({ block }) => (block ? '1em' : '0 0.5em')};
  white-space: ${({ wrapped }) => (wrapped ? 'pre-wrap' : 'nowrap')};
  overflow: auto;
  line-height: 1.5;
`;

export default PreformattedText;

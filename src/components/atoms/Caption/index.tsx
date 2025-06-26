import styled from 'styled-components';

type CaptionProps = {
  $reverse?: boolean;
};

const Caption = styled.caption<CaptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.grayscale[1]};
  font-weight: 500;
  line-height: 2rem;
  font-size: 0.875rem;
  text-transform: uppercase;
`;

export default Caption;

import styled from 'styled-components';

type ParagraphProps = {
  $reverse?: boolean;
};

const Paragraph = styled.p<ParagraphProps>`
  font-family: theme('fontFamily.sans');
  color: theme('colors.gray.900');
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`;

export default Paragraph;

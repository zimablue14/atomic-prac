import styled from 'styled-components';

import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';
import Paragraph from '../../atoms/Paragraph';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.grayscale[1]};
  padding: 2rem;
`;

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`;

const Footer = (props: React.ComponentProps<typeof Wrapper>) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with <Icon icon="heart" /> by <Link href="https://github.com/diegohaz">Haz</Link>
      </Credits>
    </Wrapper>
  );
};

export default Footer;

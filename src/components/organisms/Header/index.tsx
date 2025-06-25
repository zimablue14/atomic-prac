import styled from 'styled-components';

import Block from '../../atoms/Block';
import IconLink from '../../molecules/IconLink';
import PrimaryNavigation from '../../molecules/PrimaryNavigation';

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`;

const Header = (props: React.ComponentProps<typeof Wrapper>) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="arc" height={100} />
        <PrimaryNavigation reverse />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;

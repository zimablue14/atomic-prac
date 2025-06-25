import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Hero = styled.section``;

const Sponsor = styled.section``;

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
`;

const Footer = styled.footer`
  margin-top: auto;
`;

type PageTemplateProps = {
  header: React.ReactNode;
  hero?: React.ReactNode;
  sponsor?: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
};

const PageTemplate: React.FC<PageTemplateProps> = ({
  header,
  hero,
  sponsor,
  footer,
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      {sponsor && <Sponsor>{sponsor}</Sponsor>}
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

export default PageTemplate;

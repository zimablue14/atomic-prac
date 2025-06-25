import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`;

type GenericTemplateProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const GenericTemplate: React.FC<GenericTemplateProps> = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default GenericTemplate;

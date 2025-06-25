import React from 'react';
import styled from 'styled-components';

const StyledBlockquote = styled.blockquote`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.quote};
  font-style: italic;
  font-size: 1.2rem;
  line-height: 2rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.grayscale[1]};
  border-left: 5px solid ${({ theme }) => theme.palette.grayscale[2]};
  margin: 1rem 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
`;

const Cite = styled.cite`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 300;
  font-style: normal;
  margin-top: 0.4rem;
`;

type BlockquoteProps = {
  cite?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Blockquote: React.FC<BlockquoteProps> = ({ cite, children, ...props }) => {
  return (
    <StyledBlockquote {...props}>
      <div>{children}</div>
      {cite && <Cite>{cite}</Cite>}
    </StyledBlockquote>
  );
};

export default Blockquote;

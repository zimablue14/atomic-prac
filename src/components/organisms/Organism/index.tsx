import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.grayscale[0]};
`;

type OrganismProps = {
  reverse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Organism: React.FC<OrganismProps> = (props) => {
  return <Wrapper {...props}>content</Wrapper>;
};

export default Organism;

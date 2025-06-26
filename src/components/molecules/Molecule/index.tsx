import React, { type ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.grayscale[0]};
`;

interface MoleculeProps extends React.HTMLAttributes<HTMLDivElement> {
  $reverse?: boolean;
  children?: ReactNode;
}

const Molecule: React.FC<MoleculeProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Molecule;

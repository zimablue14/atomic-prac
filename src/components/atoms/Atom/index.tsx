import styled from 'styled-components';

type AtomProps = {
  palette?: string;
  reverse?: boolean;
};

const Atom = styled.span<AtomProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.grayscale[0]};
`;

Atom.defaultProps = {
  palette: 'grayscale',
};

export default Atom;

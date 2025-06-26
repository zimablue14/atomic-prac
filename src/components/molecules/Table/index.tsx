import type { ReactNode } from 'react';
import styled from 'styled-components';

import Caption from '../../atoms/Caption';

const StyledTable = styled.table`
  font-family: ${({ theme }) => theme.fonts.primary};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.grayscale[1]};
  color: ${({ theme }) => theme.palette.grayscale[0]};
`;

type TableProps = {
  caption?: string;
  head?: ReactNode;
  foot?: ReactNode;
  children: ReactNode;
  $reverse?: boolean;
} & React.TableHTMLAttributes<HTMLTableElement>;

const Table = ({ caption, head, foot, children, $reverse, ...props }: TableProps) => {
  return (
    <StyledTable {...props}>
      {caption && <Caption $reverse={$reverse}>{caption}</Caption>}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </StyledTable>
  );
};

export default Table;

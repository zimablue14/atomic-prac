import type { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const cellStyles = css`
  text-align: left;
  padding: 0.75em;
`;

const Th = styled.th`
  ${cellStyles}
`;
const Td = styled.td`
  ${cellStyles}
`;

type TableCellProps = {
  heading?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

const TableCell = ({ heading = false, children, ...props }: TableCellProps) => {
  return heading ? <Th {...props}>{children}</Th> : <Td {...props}>{children}</Td>;
};

export default TableCell;

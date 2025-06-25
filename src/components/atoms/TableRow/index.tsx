import styled from 'styled-components';

type TableRowProps = {
  filled?: boolean;
};

const TableRow = styled.tr<TableRowProps>`
  background-color: ${({ filled, theme }) =>
    filled ? theme.palette.grayscale[1] : theme.palette.grayscale[0]};
`;

export default TableRow;

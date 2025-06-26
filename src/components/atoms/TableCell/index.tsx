import { clsx } from 'clsx';
import React from 'react';

type TableCellProps = {
  heading?: boolean;
  children?: React.ReactNode;
  className?: string;
} & React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  React.TdHTMLAttributes<HTMLTableDataCellElement>;

const TableCell: React.FC<TableCellProps> = ({
  heading = false,
  children,
  className,
  ...props
}) => {
  const baseClass = clsx('text-left p-3', className);

  if (heading) {
    return (
      <th className={baseClass} {...props}>
        {children}
      </th>
    );
  }

  return (
    <td className={baseClass} {...props}>
      {children}
    </td>
  );
};

export default TableCell;

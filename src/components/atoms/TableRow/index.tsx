import { clsx } from 'clsx';
import React from 'react';

type TableRowProps = {
  filled?: boolean;
  reverse?: boolean; // 현재는 사용되지 않음
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableRowElement>;

const TableRow: React.FC<TableRowProps> = ({ filled = false, className, children, ...props }) => {
  const baseClass = clsx(filled ? 'bg-gray-200' : 'bg-gray-100', className);

  return (
    <tr className={baseClass} {...props}>
      {children}
    </tr>
  );
};

export default TableRow;

import clsx from 'clsx';
import React from 'react';

type TableRowProps = {
  filled?: boolean;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLTableRowElement>;

const TableRow = ({ filled, children, className, ...props }: TableRowProps) => {
  const rowClasses = clsx(filled ? 'bg-gray-100' : 'bg-white', className);

  return (
    <tr className={rowClasses} {...props}>
      {children}
    </tr>
  );
};

export default TableRow;

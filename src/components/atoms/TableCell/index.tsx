import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

type TableCellProps = {
  heading?: boolean;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLTableCellElement>;

const TableCell = ({ heading = false, children, className, ...props }: TableCellProps) => {
  const commonClasses = clsx('text-left p-3', className);

  if (heading) {
    return (
      <th className={commonClasses} {...props}>
        {children}
      </th>
    );
  }

  return (
    <td className={commonClasses} {...props}>
      {children}
    </td>
  );
};

export default TableCell;

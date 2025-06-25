import type { ReactNode } from 'react';

import Caption from '../../atoms/Caption';

type TableProps = {
  caption?: string;
  head?: ReactNode;
  foot?: ReactNode;
  children: ReactNode;
  reverse?: boolean;
} & React.TableHTMLAttributes<HTMLTableElement>;

const Table = ({ caption, head, foot, children, reverse, ...props }: TableProps) => {
  return (
    <table
      className="border-grayscale-1 text-grayscale-0 font-primary w-full border-collapse border"
      {...props}
    >
      {caption && <Caption reverse={reverse}>{caption}</Caption>}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;

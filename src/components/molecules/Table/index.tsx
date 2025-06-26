import clsx from 'clsx';
import React from 'react';

type TableProps = {
  caption?: string;
  head?: React.ReactNode;
  foot?: React.ReactNode;
  children: React.ReactNode;
  reverse?: boolean;
};

const Table = ({ caption, head, foot, children, reverse = false }: TableProps) => {
  return (
    <table className="w-full border-collapse border border-gray-300 font-sans text-gray-900">
      {caption && (
        <caption
          className={clsx('caption-bottom py-2 text-sm', reverse ? 'text-right' : 'text-left')}
        >
          {caption}
        </caption>
      )}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;

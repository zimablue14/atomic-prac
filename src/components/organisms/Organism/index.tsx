import clsx from 'clsx';
import React from 'react';

type OrganismProps = React.HTMLAttributes<HTMLDivElement> & {
  reverse?: boolean;
};

const Organism = ({ reverse, className, ...props }: OrganismProps) => {
  return (
    <div
      className={clsx('font-sans', reverse ? 'text-white' : 'text-gray-900', className)}
      {...props}
    >
      content
    </div>
  );
};

export default Organism;

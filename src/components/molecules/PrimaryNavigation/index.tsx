import clsx from 'clsx';
import React from 'react';

import Link from '../../atoms/Link';

type PrimaryNavigationProps = React.HTMLAttributes<HTMLElement> & {
  reverse?: boolean;
};

const PrimaryNavigation: React.FC<PrimaryNavigationProps> = ({ className, ...props }) => {
  return (
    <nav className={clsx('flex list-none', className)} {...props}>
      <li>
        <Link
          to="/"
          className="text-grayscale-300 [&.active]:text-grayscale-100 text-xl font-light"
        >
          Home
        </Link>
      </li>
      <li className="ml-4">
        <Link
          to="/sample-page"
          className="text-grayscale-300 [&.active]:text-grayscale-100 text-xl font-light"
        >
          Sample page
        </Link>
      </li>
    </nav>
  );
};

export default PrimaryNavigation;

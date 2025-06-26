import clsx from 'clsx';
import type { FC } from 'react';

import Link from '../../atoms/Link';

type PrimaryNavigationProps = {
  className?: string;
  reverse?: boolean;
};

const PrimaryNavigation: FC<PrimaryNavigationProps> = ({ className }) => {
  return (
    <nav className={clsx('flex list-none', className)}>
      <li>
        <Link
          to="/"
          className={({ isActive }) =>
            clsx('text-xl font-light', isActive ? 'text-black' : 'text-gray-500')
          }
        >
          Home
        </Link>
      </li>
      <li className="ml-4">
        <Link
          to="/sample-page"
          className={({ isActive }) =>
            clsx('text-xl font-light', isActive ? 'text-black' : 'text-gray-500')
          }
        >
          Sample page
        </Link>
      </li>
    </nav>
  );
};

export default PrimaryNavigation;

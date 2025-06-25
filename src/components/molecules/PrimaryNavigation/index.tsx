import React from 'react';
import styled from 'styled-components';

import Link from '../../atoms/Link';

const Nav = styled.nav`
  display: flex;
  list-style: none;

  > :not(:first-child) {
    margin-left: 1rem;
  }

  a {
    font-weight: 300;
    color: ${({ theme }) => theme.palette.grayscale[2]};
    font-size: 1.25rem;

    &.active {
      color: ${({ theme }) => theme.palette.grayscale[0]};
    }
  }
`;

type PrimaryNavigationProps = React.HTMLAttributes<HTMLElement> & {
  reverse?: boolean;
};

const PrimaryNavigation: React.FC<PrimaryNavigationProps> = (props) => {
  return (
    <Nav {...props}>
      <li>
        <Link to="/" className="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/sample-page" className="active">
          Sample page
        </Link>
      </li>
    </Nav>
  );
};

export default PrimaryNavigation;

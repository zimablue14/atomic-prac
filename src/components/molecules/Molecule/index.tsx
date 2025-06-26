import clsx from 'clsx';
import { type ReactNode } from 'react';

type MoleculeProps = {
  children: ReactNode;
  className?: string;
};

const Molecule = ({ children, className }: MoleculeProps) => {
  return <div className={clsx('font-sans text-black', className)}>{children}</div>;
};

export default Molecule;

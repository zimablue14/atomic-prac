import clsx from 'clsx';
import React, { type ReactNode } from 'react';

interface MoleculeProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  children?: ReactNode;
}

const Molecule: React.FC<MoleculeProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        'text-grayscale-100 font-sans', // 필요에 따라 Tailwind config에서 font-family를 설정하세요.
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Molecule;

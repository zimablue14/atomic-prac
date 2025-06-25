import React from 'react';

type BlockquoteProps = {
  cite?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Blockquote: React.FC<BlockquoteProps> = ({ cite, children, className = '', ...props }) => {
  return (
    <blockquote
      className={`relative my-4 border-l-4 border-gray-300 pl-6 text-[1.2rem] leading-8 text-gray-600 italic ${className}`}
      {...props}
    >
      {children}
      {cite && (
        <cite className="mt-2 block text-sm font-light text-gray-500 not-italic">{cite}</cite>
      )}
    </blockquote>
  );
};

export default Blockquote;

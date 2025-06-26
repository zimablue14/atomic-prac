import { type ReactNode } from 'react';

type BlockquoteProps = {
  cite?: string;
  children: ReactNode;
  reverse?: boolean;
};

const Blockquote = ({ cite, children }: BlockquoteProps) => {
  return (
    <blockquote className="relative my-4 box-border border-l-4 border-gray-300 pl-6 text-lg text-gray-600 italic">
      <div>{children}</div>
      {cite && (
        <cite className="mt-2 block text-sm font-light text-gray-500 not-italic">{cite}</cite>
      )}
    </blockquote>
  );
};

export default Blockquote;

import clsx from 'clsx';
import React from 'react';

type PreProps = {
  block?: boolean;
  wrapped?: boolean;
  reverse?: boolean;
  palette?: 'grayscale' | string; // 확장 가능
} & React.HTMLAttributes<HTMLPreElement>;

const PreformattedText: React.FC<PreProps> = ({
  block = false,
  wrapped = false,
  reverse = false,
  className,
  ...props
}) => {
  const classes = clsx(
    block ? 'block p-4' : 'inline px-2',
    wrapped ? 'whitespace-pre-wrap' : 'whitespace-nowrap',
    'overflow-auto leading-[1.5] font-mono',
    reverse ? 'bg-gray-50 text-gray-800' : 'bg-gray-800 text-white',
    className,
  );

  return <pre className={classes} {...props} />;
};

export default PreformattedText;

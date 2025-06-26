import React from 'react';

type GenericTemplateProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const GenericTemplate = ({ children, className, ...props }: GenericTemplateProps) => {
  return (
    <div
      className={`box-border flex min-h-screen flex-col pt-[3.75rem] ${className ?? ''}`}
      {...props}
    >
      <section className="mx-auto my-8 box-border w-full max-w-[920px]">{children}</section>
    </div>
  );
};

export default GenericTemplate;

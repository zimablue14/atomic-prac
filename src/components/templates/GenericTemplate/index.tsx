import React from 'react';

type GenericTemplateProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const GenericTemplate: React.FC<GenericTemplateProps> = ({ children, className, ...props }) => {
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

import React from 'react';

type PageTemplateProps = {
  header: React.ReactNode;
  hero?: React.ReactNode;
  sponsor?: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const PageTemplate: React.FC<PageTemplateProps> = ({
  header,
  hero,
  sponsor,
  footer,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`box-border flex min-h-screen flex-col pt-[3.75rem] sm:pt-[3.25rem] ${className ?? ''}`}
      {...props}
    >
      <header className="fixed top-0 z-[999] w-full">{header}</header>
      {hero && <section>{hero}</section>}
      {sponsor && <section>{sponsor}</section>}
      <section className="mx-auto my-8 box-border w-full max-w-[920px]">{children}</section>
      <footer className="mt-auto">{footer}</footer>
    </div>
  );
};

export default PageTemplate;

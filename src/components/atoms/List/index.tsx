import { clsx } from 'clsx';
import React from 'react';

type ListProps = {
  ordered?: boolean;
  palette?: 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  reverse?: boolean;
  children: React.ReactNode;
  className?: string;
};

const textMap: Record<string, string> = {
  grayscale: 'text-grayscale-200',
  primary: 'text-primary-100',
  secondary: 'text-secondary-100',
  danger: 'text-danger-100',
  alert: 'text-alert-100',
  success: 'text-success-100',
};

const List: React.FC<ListProps> = ({
  ordered,
  palette = 'grayscale',
  children,
  className,
  ...props
}) => {
  const Tag = ordered ? 'ol' : 'ul';
  const textColor = textMap[palette] ?? textMap.grayscale;

  return React.createElement(
    Tag,
    {
      className: clsx('font-display my-4 pl-[1.6rem] leading-[1.7rem]', textColor, className),
      ...props,
    },
    children,
  );
};

export default List;

import clsx from 'clsx';
import React from 'react';

type PaletteKey = 'primary' | 'secondary' | 'grayscale' | 'danger' | string;

type ListProps = {
  ordered?: boolean;
  palette?: PaletteKey;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLUListElement | HTMLOListElement>;

const baseClass = 'font-primary pl-6 my-4 leading-7 list-inside';

const paletteClass = (palette: PaletteKey = 'grayscale', reverse?: boolean) => {
  const colorKey = reverse ? 'last' : 'default';
  const classMap: Record<PaletteKey, Record<'default' | 'last', string>> = {
    primary: {
      default: 'text-primary-500',
      last: 'text-primary-900',
    },
    secondary: {
      default: 'text-secondary-500',
      last: 'text-secondary-900',
    },
    grayscale: {
      default: 'text-grayscale-400',
      last: 'text-grayscale-900',
    },
    danger: {
      default: 'text-danger-500',
      last: 'text-danger-900',
    },
  };

  return classMap[palette]?.[colorKey] ?? 'text-primary-500';
};

const List: React.FC<ListProps> = ({
  ordered,
  palette = 'grayscale',
  reverse,
  className,
  children,
  ...props
}) => {
  const composedClass = clsx(
    baseClass,
    paletteClass(palette, reverse),
    ordered ? 'list-decimal' : 'list-disc',
    className,
  );

  const Tag = ordered ? 'ol' : 'ul';

  return React.createElement(Tag, { className: composedClass, ...props }, children);
};

export default List;

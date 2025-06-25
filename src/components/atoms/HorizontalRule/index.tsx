import clsx from 'clsx';
import React from 'react';

type Palette = 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'white' | 'grayscale';

type HorizontalRuleProps = {
  palette?: Palette;
  reverse?: boolean;
};

const paletteToBorder = (palette: Palette = 'grayscale', reverse = false): string => {
  const map: Record<Palette, [string, string]> = {
    grayscale: ['border-grayscale-100', 'border-grayscale-800'],
    primary: ['border-primary-100', 'border-primary-400'],
    secondary: ['border-secondary-100', 'border-secondary-400'],
    danger: ['border-danger-100', 'border-danger-400'],
    alert: ['border-alert-100', 'border-alert-400'],
    success: ['border-success-100', 'border-success-400'],
    white: ['border-white', 'border-black'],
  };

  const [normal, reversed] = map[palette] ?? map.grayscale;
  return reverse ? reversed : normal;
};

const HorizontalRule: React.FC<HorizontalRuleProps> = ({
  palette = 'grayscale',
  reverse = false,
}) => {
  return (
    <hr
      className={clsx(
        'w-full border-t-0 border-r-0 border-b border-l-0',
        paletteToBorder(palette, reverse),
      )}
    />
  );
};

export default HorizontalRule;

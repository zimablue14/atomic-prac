import { clsx } from 'clsx';
import React from 'react';

type HorizontalRuleProps = {
  palette?: 'grayscale' | 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  reverse?: boolean;
};

const borderMap: Record<NonNullable<HorizontalRuleProps['palette']>, string> = {
  grayscale: 'border-grayscale-100',
  primary: 'border-primary-100',
  secondary: 'border-secondary-100',
  danger: 'border-danger-100',
  alert: 'border-alert-100',
  success: 'border-success-100',
};

const HorizontalRule: React.FC<HorizontalRuleProps> = ({ palette = 'grayscale' }) => {
  return (
    <hr className={clsx('w-full border-0 border-b', borderMap[palette] ?? borderMap.grayscale)} />
  );
};

export default HorizontalRule;

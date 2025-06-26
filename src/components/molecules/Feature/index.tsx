import type { ReactNode } from 'react';

import Badge from '../../atoms/Badge';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';
import Paragraph from '../../atoms/Paragraph';
import PreformattedText from '../../atoms/PreformattedText';

type FeatureProps = {
  title: string;
  icon?: string;
  link?: string;
  soon?: boolean;
  code?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const Feature = ({ title, icon, link, soon = false, code, children, className }: FeatureProps) => {
  return (
    <div
      className={`relative box-border flex p-4 transition-opacity sm:p-2 ${
        soon ? 'opacity-40' : 'opacity-100'
      } ${className ?? ''}`}
    >
      {icon && <Icon icon={icon} width={64} className="flex-none sm:w-8" />}

      <div className="ml-4 overflow-auto">
        <Heading level={2}>{link ? <Link to={link}>{title}</Link> : title}</Heading>
        <Paragraph>{children}</Paragraph>
        {code && <PreformattedText block>{code}</PreformattedText>}
      </div>

      {soon && (
        <Badge palette="grayscale" className="absolute top-4 right-4 sm:top-2 sm:right-2">
          soon
        </Badge>
      )}
    </div>
  );
};

export default Feature;

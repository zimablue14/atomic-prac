import React from 'react';
import styled from 'styled-components';

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
  code?: React.ReactNode;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div<{ $soon?: boolean }>`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${({ $soon }) => ($soon ? 0.4 : 1)};
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const StyledIcon = styled(Icon)`
  flex: none;
  @media screen and (max-width: 640px) {
    width: 32px;
  }
`;

const Text = styled.div`
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  @media screen and (max-width: 640px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const Feature: React.FC<FeatureProps> = ({ icon, title, link, code, children, soon, ...props }) => {
  return (
    <Wrapper $soon={soon} {...props}>
      {icon && <StyledIcon icon={icon} width={64} />}
      <Text>
        <Heading level={2}>{link ? <Link href={link}>{title}</Link> : title}</Heading>
        <Paragraph>{children}</Paragraph>
        {code && <PreformattedText block>{code}</PreformattedText>}
      </Text>
      {soon && <StyledBadge palette="grayscale">soon</StyledBadge>}
    </Wrapper>
  );
};

export default Feature;

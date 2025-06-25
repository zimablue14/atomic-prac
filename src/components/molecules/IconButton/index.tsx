import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const fadeIn = keyframes`
  0% { display: none; opacity: 0; }
  1% { display: block; opacity: 0; }
  100% { display: block; opacity: 1; }
`;

type ExtraProps = {
  hasText?: boolean;
  collapsed?: boolean;
  responsive?: boolean;
  breakpoint?: number;
  children?: React.ReactNode;
};

const StyledButton = styled(Button)<ExtraProps>`
  max-width: ${({ hasText, collapsed }) => (hasText && !collapsed ? '100%' : '2.5em')};
  width: ${({ hasText }) => (hasText ? 'auto' : '2.5em')};
  padding: ${({ hasText }) => (hasText ? '0 0.4375em' : '0')};
  flex: 0 0 2.5em;
  box-sizing: border-box;

  ${({ collapsed }) =>
    collapsed &&
    css`
      overflow: hidden;
      transition: max-width 250ms ease-in-out;
      will-change: max-width;
      & .text {
        display: none;
      }
      &:hover {
        max-width: 100%;
        & .text {
          display: block;
          animation: ${fadeIn} 250ms;
        }
      }
    `}

  ${({ responsive, breakpoint = 420 }) =>
    responsive &&
    css`
      @media screen and (max-width: ${breakpoint}px) {
        width: auto;
        flex: 0 !important;
      }
    `}
`;

const Text = styled.span<{ responsive?: boolean; breakpoint?: number }>`
  padding: 0.4375em;
  ${({ responsive, breakpoint = 420 }) =>
    responsive &&
    css`
      @media screen and (max-width: ${breakpoint}px) {
        display: none !important;
      }
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledIcon = styled(Icon)`
  flex: none;
`;

type IconButtonProps = {
  icon: string;
  responsive?: boolean;
  breakpoint?: number;
  collapsed?: boolean;
  right?: boolean;
  height?: number;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Button>;

const IconButton = ({ icon, children, ...props }: IconButtonProps) => {
  const { breakpoint, right, responsive, height } = props;

  const iconElement = <StyledIcon height={height ? height / 2.5 : undefined} icon={icon} />;

  return (
    <StyledButton hasText={!!children} {...props}>
      <Wrapper>
        {!right && iconElement}
        {children && (
          <Text className="text" responsive={responsive} breakpoint={breakpoint}>
            {children}
          </Text>
        )}
        {right && iconElement}
      </Wrapper>
    </StyledButton>
  );
};

IconButton.defaultProps = {
  breakpoint: 420,
};

export default IconButton;

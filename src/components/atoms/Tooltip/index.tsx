import React, { cloneElement, type ReactElement } from 'react';
import styled, { css } from 'styled-components';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
type TooltipAlign = 'start' | 'center' | 'end';

interface TooltipPropsBase extends React.HTMLAttributes<HTMLElement> {
  $position?: TooltipPosition;
  $align?: TooltipAlign;
  $reverse?: boolean;
  ['data-title']: string;
}

const opposites: Record<TooltipPosition, TooltipPosition> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

const opposite = (position: TooltipPosition = 'top') => opposites[position];
const perpendicular = (position: TooltipPosition = 'top') =>
  position === 'left' || position === 'right' ? 'top' : 'left';
const perpendicularOpposite = (position: TooltipPosition = 'top') =>
  opposites[perpendicular(position) as TooltipPosition];
const perpendicularAxis = (position: TooltipPosition = 'top') =>
  position === 'left' || position === 'right' ? 'Y' : 'X';

const backgroundColor = ($reverse?: boolean) =>
  $reverse ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)';

const styles = css<TooltipPropsBase>`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    pointer-events: none;
    display: block;
    opacity: 0;
    transition:
      opacity 100ms ease-in-out,
      ${({ $position = 'top' }) => opposite($position)} 100ms ease-in-out;
    will-change: ${({ $position = 'top' }) => opposite($position)};
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
    ${({ $position = 'top' }) => opposite($position)}: calc(100% + 1rem);
  }

  &:hover:after,
  &:focus:after {
    opacity: 1;
    ${({ $position = 'top' }) => opposite($position)}: 100%;
  }

  &:before {
    content: attr(data-title);
    font-family: ${({ theme }) => theme.fonts.primary};
    white-space: nowrap;
    text-transform: none;
    font-size: 0.8125rem;
    line-height: 1.5;
    text-align: center;
    color: ${({ $reverse }) => ($reverse ? 'black' : 'white')};
    background-color: ${({ $reverse }) => backgroundColor($reverse)};
    border-radius: 0.15384em;
    padding: 0.75em 1em;
    ${({ $position = 'top' }) => opposite($position)}: calc(100% + 2rem);

    ${({ $align = 'center', $position = 'top' }) => {
      const perp = perpendicular($position);
      const axis = perpendicularAxis($position);
      const perpOpp = perpendicularOpposite($position);

      if ($align === 'start') {
        return css`
          ${perp}: 0;
        `;
      }
      if ($align === 'center') {
        return css`
          ${perp}: 50%;
          transform: translate ${axis}(-50%);
        `;
      }
      return css`
        ${perpOpp}: 0;
      `;
    }}
  }

  &:after {
    ${({ $position = 'top' }) => opposite($position)}: calc(100% + 1rem);
    ${({ $position = 'top' }) => perpendicular($position)}: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    ${({ $position = 'top', $reverse = false }) =>
      `border-${$position}-color: ${backgroundColor($reverse)};`}
    border-width: 0.5rem;
    ${({ $position = 'top' }) => `margin-${perpendicular($position)}: -0.5rem;`}
  }
`;

const TooltipWrapper = styled.div<TooltipPropsBase>`
  ${styles}
`;

function Tooltip<T extends React.HTMLAttributes<HTMLElement>>({
  position = 'top',
  align = 'center',
  $reverse = false,
  children,
  ...props
}: {
  children: ReactElement<T>;
  position?: TooltipPosition;
  align?: TooltipAlign;
  $reverse?: boolean;
} & Omit<TooltipPropsBase, '$position' | '$align' | '$reverse'>) {
  return (
    <TooltipWrapper {...props} $position={position} $align={align} $reverse={$reverse}>
      {cloneElement(children, {
        ...children.props,
        tabIndex: props.tabIndex ?? 0,
      })}
    </TooltipWrapper>
  );
}

export default Tooltip;

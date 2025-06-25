import clsx from 'clsx';
import React, { cloneElement, useState, type ReactElement } from 'react';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
type TooltipAlign = 'start' | 'center' | 'end';

type TooltipProps<T extends React.HTMLAttributes<HTMLElement>> = {
  position?: TooltipPosition;
  align?: TooltipAlign;
  reverse?: boolean;
  'data-title': string;
  children: ReactElement<T>;
};

const Tooltip = <T extends React.HTMLAttributes<HTMLElement>>({
  position = 'top',
  align = 'center',
  reverse = false,
  children,
  'data-title': title,
}: TooltipProps<T>) => {
  const [visible, setVisible] = useState(false);

  const bgColor = reverse ? 'bg-white text-black' : 'bg-black text-white';
  const tooltipBase = 'absolute z-10 whitespace-nowrap text-sm rounded px-3 py-2';

  const positionClass = clsx(
    {
      top: 'bottom-full mb-4',
      bottom: 'top-full mt-4',
      left: 'right-full mr-4',
      right: 'left-full ml-4',
    }[position],
  );

  const alignClass = clsx(
    {
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0',
    }[align],
  );

  const arrowClass = clsx(
    'absolute w-0 h-0 border-8 border-transparent',
    {
      top: `border-t-${reverse ? 'white' : 'black'} bottom-[-0.5rem] left-1/2 -translate-x-1/2`,
      bottom: `border-b-${reverse ? 'white' : 'black'} top-[-0.5rem] left-1/2 -translate-x-1/2`,
      left: `border-l-${reverse ? 'white' : 'black'} right-[-0.5rem] top-1/2 -translate-y-1/2`,
      right: `border-r-${reverse ? 'white' : 'black'} left-[-0.5rem] top-1/2 -translate-y-1/2`,
    }[position],
  );

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {cloneElement(children, {
        ...children.props,
        tabIndex: children.props.tabIndex ?? 0,
      })}

      {visible && (
        <>
          <div className={clsx(tooltipBase, bgColor, positionClass, alignClass)}>{title}</div>
          <div className={arrowClass} />
        </>
      )}
    </div>
  );
};

export default Tooltip;

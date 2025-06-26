import clsx from 'clsx';
import { cloneElement, type ReactElement } from 'react';

type Position = 'top' | 'right' | 'bottom' | 'left';
type Align = 'start' | 'center' | 'end';

type TooltipProps = {
  position?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  reverse?: boolean;
  children: ReactElement;
  'data-title': string;
};

const Tooltip = ({
  position = 'top',
  align = 'center',
  reverse = false,
  children,
  'data-title': title,
  ...props
}: TooltipProps) => {
  const baseColor = reverse ? 'bg-white text-black' : 'bg-black text-white';

  const positionClassMap: Record<Position, string> = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  const alignClassMap: Record<Align, string> = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
  };

  return (
    <div className="group relative" tabIndex={0}>
      {cloneElement(children, props)}
      <div
        className={clsx(
          'pointer-events-none absolute z-10 rounded px-3 py-2 text-sm whitespace-nowrap opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100',
          baseColor,
          positionClassMap[position],
          alignClassMap[align],
        )}
        role="tooltip"
      >
        {title}
      </div>
    </div>
  );
};

export default Tooltip;

import clsx from 'clsx';
import type { FC } from 'react';

type SliderProps = {
  id?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
  disabled?: boolean;
  responsive?: boolean;
  breakpoint?: number; // Tailwind 기준이면 sm: 640px, md: 768px 등으로 대체 가능
};

const Slider: FC<SliderProps> = ({
  id,
  min = 0,
  max = 2,
  defaultValue = 1,
  step = 1,
  disabled = false,
  responsive = false,
  breakpoint = 640, // default: sm 기준
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center font-sans text-sm font-medium text-gray-900">
      {/* Min 텍스트 */}
      <span className={clsx('px-2', responsive && `hidden max-[${breakpoint}px]:!hidden`)}>
        {min}
      </span>

      {/* 슬라이더 */}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        disabled={disabled}
        className={clsx(
          'mx-2 h-4 w-full appearance-none bg-transparent',
          'focus:outline-none',
          '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded [&::-webkit-slider-runnable-track]:bg-gray-300',
          '[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded [&::-moz-range-track]:bg-gray-300',
          '[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full',
          '[&::-webkit-slider-thumb]:bg-gray-600 hover:[&::-webkit-slider-thumb]:bg-black',
          '[&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gray-600 hover:[&::-moz-range-thumb]:bg-black',
        )}
      />

      {/* Max 텍스트 */}
      <span className={clsx('px-2', responsive && `hidden max-[${breakpoint}px]:!hidden`)}>
        {max}
      </span>
    </div>
  );
};

export default Slider;

import clsx from 'clsx';
import React from 'react';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
  reverse?: boolean;
  disabled?: boolean;
  responsive?: boolean;
  breakpoint?: number;
  height?: number;
}

const Slider: React.FC<SliderProps> = ({
  id,
  min = 0,
  max = 2,
  defaultValue = 1,
  step = 1,
  responsive = false,
  breakpoint = 420,
  height = 36,
  ...props
}) => {
  const fontSize = `${height / 35.5555555556}rem`;
  const textHideClass = responsive ? `max-[${breakpoint}px]:hidden` : '';

  return (
    <div
      className="font-primary text-grayscale-0 flex h-full w-full items-center justify-center bg-transparent"
      style={{ fontSize }}
    >
      <span className={clsx('px-[0.4375em]', textHideClass)}>{min}</span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        disabled={props.disabled}
        className={clsx(
          'mx-[0.4375em] h-4 w-full appearance-none bg-transparent focus:outline-none',
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6',
          '[&::-webkit-slider-thumb]:rounded [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-transparent',
          '[&::-webkit-slider-thumb]:transition-colors [&::-webkit-slider-thumb]:duration-150',
          props.disabled
            ? '[&::-webkit-slider-thumb]:bg-primary-2'
            : '[&::-webkit-slider-thumb]:bg-primary-1 [&::-webkit-slider-thumb]:hover:bg-primary-0',
          '[&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6',
          '[&::-moz-range-thumb]:rounded [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-transparent',
          props.disabled
            ? '[&::-moz-range-thumb]:bg-primary-2'
            : '[&::-moz-range-thumb]:bg-primary-1 [&::-moz-range-thumb]:hover:bg-primary-0',
          '[&::-ms-thumb]:h-6 [&::-ms-thumb]:w-6 [&::-ms-thumb]:rounded [&::-ms-thumb]:border [&::-ms-thumb]:border-transparent',
          '[&::-webkit-slider-runnable-track]:bg-grayscale-2 [&::-webkit-slider-runnable-track]:h-[0.6em] [&::-webkit-slider-runnable-track]:rounded',
          '[&::-moz-range-track]:bg-grayscale-2 [&::-moz-range-track]:h-[0.6em] [&::-moz-range-track]:rounded',
          '[&::-ms-fill-lower]:bg-grayscale-2 [&::-ms-fill-upper]:bg-grayscale-2',
        )}
        {...props}
      />
      <span className={clsx('px-[0.4375em]', textHideClass)}>{max}</span>
    </div>
  );
};

export default Slider;

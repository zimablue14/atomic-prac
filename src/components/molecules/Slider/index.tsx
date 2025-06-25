import React from 'react';
import styled from 'styled-components';

const thumbHeight = '1.5em';
const thumbWidth = '1.5em';
const barHeight = '0.6em';
const border = '0.0625em solid transparent';
const borderRadius = '0.125em';

const fontSize = ({ height = 36 }: { height?: number }) => `${height / 35.5555555556}rem`;

const Wrapper = styled.div<{ height?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${fontSize};
  color: ${({ theme }) => theme.palette.grayscale[0]};
  background-color: transparent;
`;

const Range = styled.input<{ disabled?: boolean }>`
  appearance: none;
  -webkit-appearance: none;
  margin: 0 0.4375em;
  width: 100%;
  height: 1rem;
  background: transparent;

  &:focus {
    outline: none;
  }

  /* Thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${({ theme, disabled }) => theme.palette.primary[disabled ? 2 : 1]};
    border: ${border};
    height: ${thumbHeight};
    width: ${thumbWidth};
    border-radius: ${borderRadius};
    cursor: pointer;
    margin-top: -0.53em;
    transition: background 0.15s ease-in-out;

    &:hover {
      background: ${({ theme, disabled }) => (disabled ? undefined : theme.palette.primary[0])};
    }
  }

  &::-moz-range-thumb {
    background: ${({ theme, disabled }) => theme.palette.primary[disabled ? 2 : 1]};
    height: ${thumbHeight};
    width: ${thumbWidth};
    border: ${border};
    border-radius: ${borderRadius};
    cursor: pointer;
    transition: background 0.15s ease-in-out;

    &:hover {
      background: ${({ theme, disabled }) => (disabled ? undefined : theme.palette.primary[0])};
    }
  }

  &::-ms-thumb {
    height: ${thumbHeight};
    width: ${thumbWidth};
    cursor: pointer;
    border: ${border};
    border-radius: ${borderRadius};
  }

  /* Track */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${barHeight};
    background: ${({ theme }) => theme.palette.grayscale[2]};
    border-radius: ${borderRadius};
    border: ${border};
  }

  &::-ms-track {
    width: 100%;
    height: ${barHeight};
    border: ${border};
    border-radius: ${borderRadius};
    color: transparent;
  }

  &::-moz-range-track {
    width: 100%;
    height: ${barHeight};
    background: ${({ theme }) => theme.palette.grayscale[2]};
    border-radius: ${borderRadius};
    border: ${border};
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    background: ${({ theme }) => theme.palette.grayscale[2]};
    border: ${border};
    border-radius: ${borderRadius};
  }
`;

const Text = styled.span<{ responsive?: boolean; breakpoint?: number }>`
  padding: 0.4375em;
  ${({ responsive, breakpoint }) =>
    responsive &&
    breakpoint &&
    `
    @media screen and (max-width: ${breakpoint}px) {
      display: none !important;
    }
  `}
`;

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
}

const Slider: React.FC<SliderProps> = ({
  id,
  min = 0,
  max = 2,
  defaultValue = 1,
  step = 1,
  responsive = false,
  breakpoint = 420,
  height, // 분리
  ...props
}) => {
  return (
    <Wrapper height={typeof height === 'number' ? height : undefined}>
      <Text responsive={responsive} breakpoint={breakpoint}>
        {min}
      </Text>
      <Range
        id={id}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        disabled={props.disabled}
        {...props}
      />
      <Text responsive={responsive} breakpoint={breakpoint}>
        {max}
      </Text>
    </Wrapper>
  );
};

export default Slider;

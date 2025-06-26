import React from 'react';
import styled, { css } from 'styled-components';

type CommonProps = {
  $reverse?: boolean;
  customHeight?: number;
  invalid?: boolean;
};

type TextInputProps = CommonProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    type?: Exclude<string, 'textarea' | 'select'>;
  };

type TextareaProps = CommonProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    type: 'textarea';
  };

type SelectProps = CommonProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    type: 'select';
  };

type InputProps = TextInputProps | TextareaProps | SelectProps;

const fontSize = ({ customHeight = 40 }: { customHeight?: number }) =>
  `${customHeight / 35.5555555556}rem`;

const styles = css<InputProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${({ type }) => (type === 'textarea' ? '0.4444444444em' : '0 0.4444444444em')};
  height: ${({ type }) => (type === 'textarea' ? 'auto' : '2.2222222222em')};
  color: ${({ theme }) => theme.palette.grayscale[0]};
  background-color: ${({ theme }) => theme.palette.grayscale[0]}10;
  border: 1px solid
    ${({ theme, invalid }) => (invalid ? theme.palette.danger[2] : theme.palette.grayscale[3])};
  border-radius: 2px;

  &[type='checkbox'],
  &[type='radio'] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;

const StyledTextarea = styled.textarea<InputProps>`
  ${styles}
`;
const StyledSelect = styled.select<InputProps>`
  ${styles}
`;
const StyledInput = styled.input<InputProps>`
  ${styles}
`;

const Input: React.FC<InputProps> = (props) => {
  const { type = 'text' } = props;

  if (type === 'textarea') {
    return <StyledTextarea {...props} />;
  }

  if (type === 'select') {
    return <StyledSelect {...props} />;
  }

  return <StyledInput {...props} />;
};

export default Input;

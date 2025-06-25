import React from 'react';
import styled, { css } from 'styled-components';

type InputType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio';

type InputProps = {
  type?: InputType;
  reverse?: boolean;
  height?: number;
  invalid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

const fontSize = ({ height = 40 }: { height?: number }) => `${height / 35.5555555556}rem`;

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

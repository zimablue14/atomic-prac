import React from 'react';
import styled from 'styled-components';

type LabelProps = {
  $reverse?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = styled.label<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.grayscale[1]};
  font-size: 1rem;
  line-height: 2em;
`;

export default Label;

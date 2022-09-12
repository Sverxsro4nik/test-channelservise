import React from 'react';
import styled from 'styled-components';

const FormLabel = styled.label`
  display: inline-block;
  font-size: 24px;
  padding-top: 2px;
  letter-spacing: 1px;
`;

const Label = ({ children }) => (
  <FormLabel>{children}</FormLabel>
);

export default Label;

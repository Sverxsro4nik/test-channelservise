import React from 'react';
import styled from 'styled-components';

const FormHeader = styled.h1`
  color: hsl(216, 60%, 38%);
  text-align: center;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 25px;
`;

const FormTitle = ({ children }) => (
  <FormHeader>{children}</FormHeader>
);

export default FormTitle;

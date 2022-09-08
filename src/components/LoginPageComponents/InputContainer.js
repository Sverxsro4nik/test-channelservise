import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

const InputContainer = ({ children }) => (
  <InputWrapper>{children}</InputWrapper>
);

export default InputContainer;

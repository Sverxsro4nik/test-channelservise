import React from 'react';
import styled from 'styled-components';

const SendButton = styled.button`
  background-color: hsl(36, 71%, 64%);
  display: block;
  outline: none;
  border: none;
  width: 213px;
  height: 43px;
  border-radius: 5px;
  font-weight: 800px;
  font-size: 24px;
  margin: 0 auto;
  cursor: pointer;
  &:hover{
    background-color: hsl(216, 60%, 38%);
    color: #fff;
  }
`;

const FormButton = ({ children }) => <SendButton type='submit'>{children}</SendButton>;

export default FormButton;

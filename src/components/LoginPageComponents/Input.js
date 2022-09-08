import React from 'react';
import styled from 'styled-components';

const FormInput = styled.input`
  display: inline-block;
  border: 5px solid hsl(216, 60%, 38%);
  border-radius: 6px;
  width: 295px;
  height: 45px;
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  const {
    type, usernameRef, name, id, value, onChange, onBlur,
  } = props;
  return <FormInput
  type={type}
    ref={usernameRef}
    name={name}
    id={id}
    value={value}
    onChange={onChange}
    onBlur={onBlur} />;
};

export default Input;

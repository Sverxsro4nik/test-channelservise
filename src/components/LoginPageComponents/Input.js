import React from 'react';
import styled from 'styled-components';

const FormInput = styled.input`
  display: inline-block;
  border: ${(props) => (props.haveError ? '3px solid red' : '3px solid hsl(216, 60%, 38%)')};
  border-radius: 8px;
  max-width: 295px;
  width: 295px;
  min-width: 212px;
  height: 45px;
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  const {
    type, usernameRef, name, id, value, onChange, onBlur, haveError,
  } = props;
  return <FormInput
  type={type}
    ref={usernameRef}
    name={name}
    id={id}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    haveError={haveError} />;
};

export default Input;

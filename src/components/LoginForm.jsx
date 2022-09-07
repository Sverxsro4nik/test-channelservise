import React, { useEffect, useRef } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  width: 480px;
  height: 330px;
  margin: 0 auto;
  margin-top: 347px;
  border: 5px solid hsl(216, 60%, 38%);
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 25px;
  font-size: 24px;
  font-weight: 800;
`
const FormHeader = styled.h1`
  color: hsl(216, 60%, 38%);
  text-align: center;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 25px;
`

const FormContainer = styled.form`
  display: block;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
`

const Label = styled.label`
  display: inline-block;
  font-size: 24px;
`

const Input = styled.input`
  display: inline-block;
  border: 5px solid hsl(216, 60%, 38%);
  border-radius: 6px;
  width: 295px;
  height: 45px;
  &:focus {
    outline: none;
  }
`

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
`

const LoginForm = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const validationSchema = yup.object().shape({
    username: yup.string().required('required'),
    password: yup.string().required('required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });

  const { handleChange, handleSubmit, handleBlur, values } = formik;

  return (
    <LoginWrapper>
      <FormHeader>Authorization</FormHeader>
      <FormContainer onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor='username'>login</Label>
          <Input type="text"
            ref={usernameRef}
            name='username'
            id='username'
            autoComplete='username'
            onChange={handleChange}
            value={values.username}
            onBlur={handleBlur}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='password'>password</Label>
          <Input type="text"
            name='password'
            id='password'
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
        </InputWrapper>
        <SendButton type='submit' onSubmit={handleSubmit}>
          Submit
        </SendButton>
      </FormContainer>
    </LoginWrapper>
  )
}

export default LoginForm;
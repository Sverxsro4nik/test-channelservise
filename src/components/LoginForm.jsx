import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';
import InputContainer from './LoginPageComponents/InputContainer';
import Label from './LoginPageComponents/Label';
import Input from './LoginPageComponents/Input';
import FormButton from './LoginPageComponents/FormButton';
import getAdmin from '../data';
import getRoutes from '../routes/routes';
import { useAuth } from '../context/AuthProvider';

const ErrorField = styled.span`
  position: absolute;
  left: 0;
  bottom: -20px;
  color: red;
  font-weight: normal;
  font-size: 16px;
`;

const loginValidation = (userValues) => {
  const { username, password } = userValues;
  return yup.object().shape({
    username: yup.string().required('required').oneOf([username], 'incorrect username'),
    password: yup.string().required('required').oneOf([password], ['incorrect password']),
  });
};

const LoginForm = () => {
  const { logIn } = useAuth();
  const navidate = useNavigate();
  const usernameRef = useRef(null);
  const admin = getAdmin();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidation(admin),
    onSubmit: (values) => {
      const { username, password } = values;
      if (admin.username === username && admin.password === password) {
        logIn(admin);
        navidate(getRoutes.loginPage);
      }
    },
  });

  const {
    handleChange, handleSubmit, handleBlur, values, errors, touched,
  } = formik;

  return (
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor='username'>login</Label>
          <div style={{ position: 'relative' }}>
            <Input type="text"
              usernameRef={usernameRef}
              name='username'
              id='username'
              autoComplete='username'
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
              onTouchEnd={touched}
              haveError={errors.username}
            />
            {
              touched && errors.username ? <ErrorField>{errors.username}</ErrorField> : null
            }
          </div>
        </InputContainer>
        <InputContainer>
          <Label htmlFor='password'>password</Label>
          <div style={{ position: 'relative' }}>
            <Input type="text"
              name='password'
              id='password'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              onTouchEnd={touched}
              haveError={errors.password}
            />
            {
              touched && errors.password ? <ErrorField>{errors.password}</ErrorField> : null
            }
          </div>
        </InputContainer>
        <FormButton>
          Submit
        </FormButton>
      </form>
  );
};

export default LoginForm;

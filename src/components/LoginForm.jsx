import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import InputContainer from './LoginPageComponents/InputContainer';
import Label from './LoginPageComponents/Label';
import Input from './LoginPageComponents/Input';
import FormButton from './LoginPageComponents/FormButton';
import getAdmin from '../data';
import getRoutes from '../routes/routes';
import { useAuth } from '../context/AuthProvider';

const LoginForm = () => {
  const { logIn } = useAuth();
  const navidate = useNavigate();
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
    onSubmit: (values) => {
      const admin = getAdmin();
      const { username, password } = values;
      if (admin.username === username && admin.password === password) {
        logIn(admin);
        navidate(getRoutes.loginPage);
      }
    },
  });

  const {
    handleChange, handleSubmit, handleBlur, values,
  } = formik;

  return (
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor='username'>login</Label>
          <Input type="text"
            usernameRef={usernameRef}
            name='username'
            id='username'
            autoComplete='username'
            onChange={handleChange}
            value={values.username}
            onBlur={handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='password'>password</Label>
          <Input type="text"
            name='password'
            id='password'
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
        </InputContainer>
        <FormButton>
          Submit
        </FormButton>
      </form>
  );
};

export default LoginForm;

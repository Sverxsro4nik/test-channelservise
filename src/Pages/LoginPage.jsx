import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm.jsx';

import FormTitle from '../components/LoginPageComponents/FormTitle';

const LoginPageContainer = styled.div`
  max-width: 480px;
  min-width: 290px;
  height: auto;
  margin: 0 auto;
  margin-top: 230px;
  border: 5px solid hsl(216, 60%, 38%);
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px 14px;
  font-size: 24px;
  font-weight: 800;
`;

const LoginPage = () => (
    <LoginPageContainer>
      <FormTitle>Authorization</FormTitle>
      <LoginForm />
    </LoginPageContainer>
);

export default LoginPage;

import React from 'react';
import styled from 'styled-components';

import logOutImage from '../../assets/logOut.svg';
import { useAuth } from '../../context/AuthProvider';

const LogOutButton = styled.button`
  width: 62px;
  height: 56px;
  background-image: url(${logOutImage});
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LogOut = () => {
  const { logOut } = useAuth();
  return <LogOutButton onClick={logOut} />;
};

export default LogOut;

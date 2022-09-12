import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthProvider';
import logOutImage from '../assets/logOut.svg';
import Logo from './Logo';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: hsl(36, 71%, 64%);
  padding: 27px 41px;
`;

const CabinetWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogOutButton = styled.button`
  width: 62px;
  height: 56px;
  background-image: url(${logOutImage});
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const UsernameContainer = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 800;
  margin-right: 32px;
  &::first-letter{
    text-transform: uppercase;
  }
`;

const Nav = () => {
  const { user, logOut } = useAuth();
  return (
    <NavWrapper>
      <Logo />
      {user ? (<CabinetWrapper>
        <UsernameContainer>{user.username}</UsernameContainer>
        <LogOutButton onClick={logOut}/>
      </CabinetWrapper>) : null
      }
    </NavWrapper>
  );
};

export default Nav;

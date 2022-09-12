import React from 'react';
import styled from 'styled-components';

import logoImage from '../assets/logo 2.svg';

const LogoWrapper = styled.div`
  width: 273px;
  height: auto;
  display: flex;
  align-items: center;
  column-gap: 20px;
  font-size: 24px;
  font-weight: 800;
`;

const Logo = () => (
    <LogoWrapper>
      <img src={logoImage} alt='Логотип компании Каналсервис' />
    </LogoWrapper>
);

export default Logo;

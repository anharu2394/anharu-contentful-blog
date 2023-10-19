import React from 'react';
import styled from 'styled-components';
import PcTitleImage from '../assets/header-wider-title.png';
import BackgroundImage from '../assets/header-background.jpg';

const HeaderComponent = () => (
  <Header>
    <PinkBackground>
      <TitleImage />
      <Message>トビタテ留学での活動を中心に発信していきます</Message>
    </PinkBackground>
  </Header>
);

const Header = styled.header`
  background-image: url(${BackgroundImage});
  height: 300px;
`;

const PinkBackground = styled.div`
  position: relative;
  background: rgba(240, 0, 210, 0.2);
  height: 100%;
`;

const TitleImage = styled.div`
  background-image: url(${PcTitleImage});
  background-size: cover;
  width: 250px;
  height: 180px;
  margin: 0 auto;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const Message = styled.p`
  @media (max-width:481px) {
    width: auto;
  }
  display: block;
  text-align: center;
  width: 500px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin:auto;
  padding-top: 230px;
`;

export default HeaderComponent;

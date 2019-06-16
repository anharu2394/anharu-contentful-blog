import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';
import MobileTitleImage from '../assets/header-title.png';
import PcTitleImage from '../assets/header-wider-title.png';
import BackgroundImage from '../assets/header-background.jpg';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
  <Header>
    <PinkBackground>
      <Link to="/">
      <TitleImage />
      </Link>
    </PinkBackground>
  </Header>
);

const Header = styled.header`
  height: 70px;
  background-image: url(${BackgroundImage});
  /*height: 300px;*/
`;

const PinkBackground = styled.div`
  position: relative;
  background: rgba(240, 0, 210, 0.1);
  height: 100%;
`;

const TitleImage = styled.div`
  background-image: url(${MobileTitleImage});
  width: 230px;
  height: 65px;
  top: 3px;
  /*
  background-image: url(${PcTitleImage});
  width: 250px;
  height: 180px;
  top: 40px;
  */
  background-size: cover;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

export default HeaderComponent;

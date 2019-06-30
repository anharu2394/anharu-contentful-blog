import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const FooterComponent = () => (
  <Footer>
      <Inner>
        <Message>© Copyright 2019 Anharu All rights reserved.</Message>
      </Inner>
  </Footer>
);

const Footer = styled.footer`
  height: 140px;
  padding-top: 10px;
  background-color: #f7f7f7;
`;

const Inner = styled.div`
  height: calc(100% - 15px);
  background: linear-gradient(#f7f7f7 0%,rgba(240,150,210,0.4) 100%);
`;

const Message = styled.p`
  color: rgba(240,150,210);
  padding-top: 40px;
  text-align: center;
`;

export default FooterComponent;

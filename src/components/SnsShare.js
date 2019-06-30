import React from 'react';
import styled from 'styled-components';

const SnsShare = ({url: url}) => (
  <Wrapper>
    <div>
      <a href={"http://twitter.com/intent/tweet?text=" + url} className="tw">
        <i class="fa fa-twitter"></i>
      </a>
    </div>
    <div>
      <a href={"http://www.facebook.com/sharer.php?u=" + url} className="facebook">
        <i class="fa fa-facebook"></i>
      </a>
    </div>
    <div>
      <a href={"http://b.hatena.ne.jp/entry/" + url} className="hatebu">
        <i class="fa fa-hatebu"></i>
      </a>
    </div>
    <div></div>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:3;
  right:10px;
  top: 10vh;
  a {
    width: 30px;
    display: inline-block;
    height: 30px;
    margin: 5px;
    padding: 10px 10px;
    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)  
    font-weight: bold;
    border-radius: 50%;
    color: #fff;
    background: #7dcdf7;
    opacity: 0.95;
  }
  a .tw {
    background: #7dcdf7;
  }
  a.facebook {
    background: #7c9dec;
    padding-left:15px;
    padding-right:5px;
  }
  a.hatebu {
    background: #7cb1ec;
  }
  .fa-hatebu:before {
    font-family: "Quicksand","Arial",sans-serif;
    font-size: 1.1em;
    font-weight: bold;
    line-height: .9;
    content: "B!";
  }
  i {
    text-align: center;
    font-size: 2rem; 
  }
}
`;

export default SnsShare;

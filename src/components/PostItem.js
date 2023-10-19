import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const date = new Date(post.fields.date);
  return (
    <Wrapper>
      <StyledLink to={"/posts/" + post.fields.url}>
        <ImgWrapper>
          <Image
            crossOrigin="anonymous"
            src={post.fields.image.fields.file.url + "?fit=fill&w=200"}
          />
        </ImgWrapper>
        <Detail>
          <DateText>
            {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
          </DateText>
          <Title>{post.fields.title}</Title>
        </Detail>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (max-width: 1000px) {
    width: 40%;
    margin: 20px 10px;
  }
  width: 25%;
  margin: 40px 20px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
`;

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DateText = styled.p`
  margin: 2px;
  font-size: 0.7rem;
  color: #b5b5b5;
  font-weight: 900;
`;

const Detail = styled.div`
  @media (max-width: 481px) {
    padding: 5px;
  }
  background: #fff;
  min-height: 100px;
  padding: 20px;
`;

const Title = styled.h2`
  @media (max-width: 481px) {
    font-size: 1rem;
  }
  margin: 0;
  color: #222;
  font-size: 1rem;
`;

export default PostItem;

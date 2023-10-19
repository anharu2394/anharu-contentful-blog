import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const Posts = ({posts}) => (
  <Wrapper>
    {
      posts.map(post => <PostItem post={post} />)
    }
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Posts;

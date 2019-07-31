import React from 'react';
import styled from 'styled-components';
import { Subscribe, Provider } from 'unstated';
import Posts from './Posts';

export default class Home extends React.Component {  
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <Wrapper>
        <Posts posts={this.props.state.posts} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
`;

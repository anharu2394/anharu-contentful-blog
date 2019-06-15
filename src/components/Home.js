import React from 'react';
import { Subscribe, Provider } from 'unstated';
import Posts from './Posts';

export default class Home extends React.Component {  
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Posts posts={this.props.state.posts} />
      </div>
    );
  }
}


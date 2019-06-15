import {Container} from 'unstated';

export default class AllPostsContainer extends Container {
  state = { posts:[{title:"fdfdtitle","body":"aa","date":"19"}] };
  fetch = () => {
    this.setState(
      state => {
        return { posts: [{title:"a","body":"aa","date":"19"}]};
      },
      () => {
        console.log('Updated!');
      }
    );
  };
}

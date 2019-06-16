import {Container} from 'unstated';
import Actions from '../ContentfulActions';

export default class AllPostsContainer extends Container {
  state = { posts:[] };
  fetch = () => {
    Actions.fetchAllPosts.then(data => {
      this.setState(
        state => {
          return { posts: data.items};
        },
        () => {
          console.log('Updated!');
        }
      );
    });
  };
}

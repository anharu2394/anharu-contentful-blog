import {Container} from 'unstated';
import Actions from '../ContentfulActions';

export default class PostContainer extends Container {
  state = { post: {}, existPost: false, loading: true };
  retrievePost = (id) => {
    Actions.retrievePost(id).then(data => {
      this.setState(
        state => {
          if (data.items.length !== 0) {
            return { post: data.items[0],existPost: true, loading: false};
          } else {
           return {loading: false}; 
          }
        },
        () => {
          console.log('Updated!');
        }
      );
    });
  };
}

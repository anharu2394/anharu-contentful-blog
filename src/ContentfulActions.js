import * as contentful from 'contentful';
import config from './config';

const client = contentful.createClient(config);

const Actions = {
  fetchAllPosts: new Promise(resolve => {
    client.getEntries({
      order: 'sys.createdAt',
    }).then((entries) => {
      console.log(entries);
      resolve(entries);
    }).catch(error => console.log(error)); 
  }),
  retrievePost: (url) => { 
    return new Promise(resolve => {
      client.getEntries({
        'fields.url': url,
        'content_type': 'blog',
      }).then((entries) => {
        console.log(entries);
        resolve(entries);
      }).catch(error => console.log(error)); 
    });
  }
};

export default Actions;

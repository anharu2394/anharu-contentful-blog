import React from 'react';
import { Subscribe, Provider } from 'unstated';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SmallHeader from './components/SmallHeader';
import Home from './components/Home';
import PostPage from './components/PostPage';
import AllPostsContainer from './containers/AllPostsContainer';
import PostContainer from './containers/PostContainer';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Header />} />
          <Route exact path='/posts/:id' render={() => <SmallHeader />} />
          <Route exact path='/' render={() => (
            <Subscribe to={[AllPostsContainer]}>
              {
                props => <Home {...props}/>
              }
            </Subscribe>
          )} />
          <Route exact path='/about' render={() => <h1>OK</h1>} />
          <Route exact path="/posts/:id" render={router => (
            <Subscribe to={[PostContainer]}>
              {
                props => <PostPage {...props} id={router.match.params.id} />
              }
            </Subscribe>
          )} />
          <Route exact path='/offline' render={() => (
            <div>
              <Header />
              <h1>Oops, you appear to be offline</h1>
            </div>
          )} />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

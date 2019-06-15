import React from 'react';
import { Subscribe, Provider } from 'unstated';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllPostsContainer from './containers/AllPostsContainer';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => (
            <Subscribe to={[AllPostsContainer]}>
              {
                props => <Home {...props}/>
              }
            </Subscribe>
          )} />
          <Route path='/about' render={() => <h1>OK</h1>} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' render={() => <h1>a</h1>} />
        <Route path='/about' render={() => <h1>OK</h1>} />
      </div>
    </BrowserRouter>
  );
}

export default App;

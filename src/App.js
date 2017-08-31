import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchComponent from './SearchComponent';
import DetailComponent from './DetailComponent';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={SearchComponent} />
          <Route path="/person/:id" component={DetailComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  state = {
    works: true
  };

  render() {
    return (
      <div>
        <h3> - Hello there</h3>
        <h3> - General Kenobi!</h3>
      </div>
    );
  }
}

export default hot(module)(App);

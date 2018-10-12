import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { hot } from 'react-hot-loader';

import store from './store/index';

import CalculatorContainer from './containers/CalculatorContainer';
class App extends Component {
  state = {
    works: true
  };

  render() {
   return (
     <Provider store={store}>
        <CalculatorContainer></CalculatorContainer>
     </Provider>
   );
  }
}

export default hot(module)(App);

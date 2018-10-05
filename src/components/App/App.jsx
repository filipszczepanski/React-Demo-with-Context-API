import React, { Component } from 'react';
import Actions from '../../actions';
import { StoreProvider } from '../../services/store';
import Header from './../Header/Header';

class App extends Component {
  render() {
    return (
      <StoreProvider initState={{counter: 0}} actions={Actions}>
        <Header title="This is a demo with Context API" />
      </StoreProvider>
    );
  }
}

export default App;

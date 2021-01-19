import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Components/Header';
import Main from './Components/Main';
// import './App.css';

class App extends Component {
  state={
    
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  };
}

export default App;

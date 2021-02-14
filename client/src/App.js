import logo from './logo.svg';
import React, {Component } from 'react';
import './App.css';

import Enter from './component/enter';
import Jumbotron from './component/jumbotron';
import Manage from './component/manage';

class App extends Component { 
  render() { 
    return (
      <div className="App">
      <Jumbotron /> 
      <Enter /> 
      {/* <Manage /> */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World </h1>
//     </div>
//   );
// }

export default App;

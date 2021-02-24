import React, { Component } from 'react';
import './App.css';

import Jumbotron from './component/Jumbotron.js';
import TabBar from './component/TabBar.js';
import Footer from './component/Footer.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Jumbotron />
          <TabBar />
            <br />
            <br />
            <Footer>
              <Footer />
            </Footer>
      </div>
    )
  }
}

export default App;

// import logo from './logo.svg';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Enter from './component/enter';
import Jumbotron from './component/jumbotron';
import Manage from './component/manage';
import TabBar from './component/tabBar';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <TabBar />
        {/* <Container>
          <Col>
            <Enter />
          </Col>
      &emsp;
          <Col>
            <Manage />
          </Col>
        </Container> */}
         <br />
         <br />
         <Footer>
          <Footer />
         </Footer>
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

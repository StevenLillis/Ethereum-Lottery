import React, { Component } from 'react';
import './App.css';

import Jumbotron from './component/Jumbotron.js';
import TabBar from './component/TabBar.js';
import Footer from './component/Footer.js';

import axios from 'axios';
import lottery from './lottery.js';
import web3 from './web3';

class App extends Component {

  state = {
    owner: '',
    players: [],
    balance: '',
    value: '',
    loadingEnter: false,
    loadingPick: false,
    errorMessage: '',
    sucessMessage: '',
    otherNetwork: null,
  };

  async componentDidMount() {
    //runs only once, when the component is rendered to the screen for the first time
      const network = await web3.eth.net.getNetworkType();
      if (network !== 'rinkeby') {
        this.setState({ otherNetwork: network });
      }

      const owner = await lottery.methods.owner().call();
      //we don't need configure call (putting the from property) as the provider that we hijacked
      //from metamask has a default account (which is the first account we are logged into @Metamask)
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      this.setState({ owner, players, balance });
    } 


  render() {
    return (
      <div className="App">
        <Jumbotron
        owner={this.state.owner}
        players={this.state.players}
        balance={this.state.balance}
         />
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

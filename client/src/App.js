import React, { Component } from 'react';
import './App.css';

import Jumbotron from './component/jumbotron.js';
import TabBar from './component/tabBar.js';
import Footer from './component/footer.js';

import axios from 'axios';
import lottery from './lottery.js';
import web3 from './web3'; 
import Web3 from 'web3'; 

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
      let playerAddress;
      let playerAccountBalance;
      if (window.ethereum) { // using metamask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        playerAddress = accounts[0];
        const accountBalance = await window.ethereum.request({ method: 'eth_getBalance', params: [playerAddress]});
        playerAccountBalance = web3.utils.fromWei(accountBalance, "ether")
      }
    
      this.setState({ owner, players, balance, playerAddress, playerAccountBalance });
    } 


  render() {
    return (
      <div className="App">
        <Jumbotron
        owner={this.state.owner}
        players={this.state.players}
        balance={this.state.balance}
        playerAddress={this.state.playerAddress}
        playerAccountBalance={this.state.playerAccountBalance}
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

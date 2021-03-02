import React, { Component } from 'react';
import './App.css';

import Jumbotron from './component/Jumbotron.js';
import TabBar from './component/TabBar.js';
import Footer from './component/Footer.js';

import lottery from './lottery.js';
import web3 from './web3';

class App extends Component {

  state = {
    owner: '',
    players: [],
    balance: '',
    value: '',
    ethaddress:'',
    loadingEnter: false,
    loadingPick: false,
    errorMessage: '',
    successMessage: '',
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
      const ethaddress = await web3.eth.getAccounts(console.log);

      this.setState({ owner, players, balance, ethaddress });
    } 

    //Sumbit Function - Allows participents to enter into the Lottery
    onSubmit = async event => {
      event.preventDefault(); //making sure that the form doesn't attemp to submit itself in a classic html way
  
      this.setState({
        errorMessage: '',
        sucessMessage: '',
        loadingEnter: true
      });
  
      try {
        if (parseFloat(this.state.value) < 0.011) {
          throw Error('Please enter a greater than the specified minimum (0.1 Ether)');
        }
  
        const accounts = await web3.eth.getAccounts();
  
        await lottery.methods.join().send({
          //for the current version of web3, we do have to mention from property while sending transaction
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, 'ether')
        });
  
        this.setState({
          successMessage: "Cheers! You've successfully entered into the lottery",
          loadingEnter: false,
          players: await lottery.methods.getPlayers().call(),
          balance: await web3.eth.getBalance(lottery.options.address)
        });
      } catch (err) {
        if (
          err.message ===
          'No "from" address specified in neither the given options, nor the default options.'
        ) {
          err.message =
            'Metamask (operating over Rinkeby n/w) is required! Please check if you are signed into Metamask.';
        }
        this.setState({ errorMessage: err.message, loadingEnter: false });
      }
    };

    //Pick Winner Function - enables ONLY the owner of the lottery to select the winner (Admin)
    pickWinner = async () => {
      this.setState({
        errorMessage: '',
        successMessage: '',
        loadingPick: true
      });
  
      try {
        const accounts = await web3.eth.getAccounts();
  
        if (accounts[0] !== this.state.owner) {
          throw Error(
            "You are NOT the manager of this lottery and therefore can't pick a winner"
          );
        }
  
        await lottery.methods.pickWinner().send({
          from: accounts[0]
        });
  
        this.setState({
          successMessage: 'Yay! A winner is picked.',
          loadingPick: false,
          players: await lottery.methods.getPlayers().call(),
          balance: await web3.eth.getBalance(lottery.options.address)
        });
      } catch (err) {
        if (
          err.message ===
          'No "from" address specified in neither the given options, nor the default options.'
        ) {
          err.message =
            'Metamask (operating over Rinkeby n/w) is required to create campaign! Please check if you are signed into metamask.';
        }
        this.setState({ errorMessage: err.message, loadingPick: false });
      }
    };
    
  render() {

    let networkError = this.state.otherNetwork ? (
      <div
        className="alert alert-danger z-depth-2 text-center animated fadeIn"
        role="alert"
        style={{ fontSize: '20px', marginTop: '10px', fontWeight: 'bold' }}
      >
        <div className="mt-3 mb-3">
          You are on the{' '}
          <u>{this.state.otherNetwork.toUpperCase()}</u> network. At
          this moment in time, Lottery DApp operates only on the{' '}
          <u>Rinkeby</u> network. <br />Therefore, in order to use the
          Lottery DApp, please switch the network in your Metamask extension to
          Rinkeby.
        </div>
      </div>
    ) : null;

    let errorAlert, successAlert;

    if (this.state.errorMessage) {
      errorAlert = (
        <div
          className="alert alert-danger mt-4 z-depth-2 text-center animated fadeIn"
          style={{ fontSize: '20px' }}
          role="alert"
        >
          <strong>Error: </strong>
          {this.state.errorMessage}
        </div>
      );
    }

    if (this.state.sucessMessage) {
      successAlert = (
        <div
          className="alert alert-success mt-4 z-depth-2 clearfix mb-5 text-center animated fadeIn"
          style={{ fontSize: '20px' }}
          role="alert"
        >
          {this.state.sucessMessage}
        </div>
      );
    }

    return (
      <div className="App">
        <Jumbotron
        owner={this.state.owner}
        players={this.state.players}
        balance={this.state.balance}
        ethaddress={this.state.ethaddress}
         />
         {errorAlert} {successAlert} {networkError}
         <br />
          <TabBar
          onSubmit={this.onSubmit}
          value={this.state.value}
          loading={this.state.loadingEnter}
          onChange={event => this.setState({ value: event.target.value })}
          />
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

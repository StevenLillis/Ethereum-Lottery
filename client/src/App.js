import React, { Component } from 'react';
import './App.css';

import Jumbotron from './component/jumbotron.js';
import TabBar from './component/tabBar.js';
import Footer from './component/footer.js';

import lottery from './lottery.js';
import web3 from './web3';

class App extends Component {

  state = {
    owner: '',
    players: [],
    balance: '',
    value: '',
    ethaddress: '',
    ethbalance: '',
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
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      const ethaddress = await web3.eth.getAccounts();
      if(ethaddress.length == 0) { 
        ethaddress.push("0x1234567891234567891234567891234567891234");
        this.setState({
          errorMessage: 'Please sign in through Metamask'
        });
      }
      const ethbalance = await web3.eth.getBalance(ethaddress.toString(), function(err, result) {
        if (err) {
          console.log(err)
        } else {
          web3.utils.fromWei(result, "ether");
        }
      });

      this.setState({ owner, players, balance, ethaddress, ethbalance });
    } 

    //Sumbit Function - Allows participents to enter into the Lottery
    onSubmit = async event => {
      event.preventDefault();
  
      this.setState({
        errorMessage: '',
        successMessage: '',
        loadingEnter: true
      });
  
      try {
        if (parseFloat(this.state.value) < 0.01) {
          throw Error('Please enter a greater than the specified minimum (0.01 Ether)');
        }
  
        const accounts = await web3.eth.getAccounts();
  
        await lottery.methods.join().send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, 'ether')
        });
  
        this.setState({
          successMessage: "Cheers! You've been successfully entered into the lottery",
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
        this.setState({ 
          errorMessage: err.message, 
          loadingEnter: false 
        });
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
            'Metamask (operating over Rinkeby n/w) is required! Please check if you are signed into metamask.';
        }
        this.setState({ 
          errorMessage: err.message, 
          loadingPick: false 
        });
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
          style={{ fontSize: '20px', fontWeight: 'bold' }}
          role="alert"
        >
          <strong>Error: </strong>
          {this.state.errorMessage}
        </div>
      );
    }

    if (this.state.successMessage) {
      successAlert = (
        <div
          className="alert alert-success mt-4 z-depth-2 clearfix mb-5 text-center animated fadeIn"
          style={{ fontSize: '20px', fontWeight: 'bold' }}
          role="alert"
        >
          {this.state.successMessage}
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
        ethbalance={this.state.ethbalance}
         />
         {errorAlert} {successAlert} {networkError}
         <br />
          <TabBar
          onSubmit={this.onSubmit}
          value={this.state.value}
          loading={this.state.loadingEnter}
          onChange={event => this.setState({ value: event.target.value })}
          loadingPick={this.state.loadingPick}
          pickWinner={this.pickWinner}
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

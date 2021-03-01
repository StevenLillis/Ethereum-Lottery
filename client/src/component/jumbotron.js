import React from 'react';
import '../index.css';
import Logo from '../assets/logo.png';
import { Jumbotron, Button } from 'reactstrap';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import axios from 'axios';
import web3 from '../web3.js';

//Jumbotron Component

// axios orp

const ReactJumbotron = ({owner, players, balance}) => {

    // componentDidMount() { 
    //     // Make a request for a user with a given ID
    // axios.get('https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=0x469e15f2c3c5481b8b10fc4f7644069f5c6cd2cf&tag=latest&apikey=URHX59UVIJNEDWBITMYYD869HJ1P2PRMIT')
    // .then(function (response) {
    // // handle success
    // console.log(response);
    // })
    // .catch(function (error) {
    // // handle error
    // console.log(error);
    // })
    // .then(function () {
    // // always executed
    // });

    return (
        <Jumbotron className="background-colour">
            <h1 className="display-3">Welcome To The Ethereum Lottery</h1>
            <img src={Logo} alt="My logo" />
            <br />
            <h2 className="lead">This Lottery is run and managed by {owner} </h2>
            <br />
            <h2 className="lead">Currently, we have {players.length} entries, completing to win {web3.utils.fromWei(balance, 'ether')} Ether!</h2>
            <br />
            <hr className="my-2" />
            <br />
            <p className="lead">
                &emsp;
                        <Button tag="p" color="primary" id="toggler" style={{ marginBottom: '1rem', width: '280px', height: '40px', fontSize: '0.9rem' }}>
                    Account Information
                        </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card className="background-colour">
                        <CardBody>
                            Current Account: [Account Address]
                                </CardBody>
                        <CardBody>
                            Current Account Balance: [Account Balance] Ether
                                </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </p>
        </Jumbotron>
    )
}

export default ReactJumbotron;
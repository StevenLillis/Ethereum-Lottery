import React from 'react';
import '../index.css';
import Logo from '../assets/logo.png';
import { Jumbotron, Button } from 'reactstrap';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import web3 from '../web3.js';

//Jumbotron Component 

const ReactJumbotron = ({owner, players, balance, ethaddress, ethbalance}) => {

    return (
        <Jumbotron className="background-colour">
            <h1 className="display-3">Welcome To The Ethereum Lottery</h1>
            <img src={Logo} alt="My logo" className="rotate" />
            <br />
            {/* Displaying Lottery Information */}
            <h2 className="lead">This Lottery is run and managed by <a href="https://rinkeby.etherscan.io/address/0x01f7b3f5ef19d1b2f87f1c0085e125166659431e" target="_blank">{owner}</a> </h2>
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
                        {/* Account Information from Metamask */}
                        <CardBody>
                            Current Account: {ethaddress}
                        </CardBody>
                        <CardBody>
                            Current Account Balance: {parseFloat(web3.utils.fromWei(ethbalance, "ether")).toFixed(3)} Ether
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </p>
        </Jumbotron>
    )
}

export default ReactJumbotron;
import React from 'react';
import '../index.css';
import Wheel from '../assets/wheel.svg';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import lottery from '../lottery.js';
import Web3 from 'web3'; 
import web3 from '../web3'; 

// Enter Card Component

const Enter = () => {
    return (
        <div>
            <Card className="background-shadow">
                <CardBody>
                    <CardTitle tag="h1">Enter The Ethereum Lottery</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">Want To Try Your Luck?</CardSubtitle>
                </CardBody>
                <div style={{ textAlign: 'center' }}>
                    <img width="10%" src={Wheel} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardText tag="h4">Amount of Ether (Minimum 0.01 Ether)</CardText>
                    &emsp;
                    <div className="md-form col-md-6 offset-md-3">
                        <input
                            type="text"
                            className="form-control"
                            value=""
                            placeholder="Enter Ether Amount"
                            onChange=""
                        />
                        <br />
                        <Button onClick={enterlottery} tag="p" color="primary" style={{ marginBottom: '1rem', width: '220px', height: '40px', fontSize: '0.9rem' }}>
                            Enter Lottery
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
async function enterlottery() {
    if (window.ethereum) { // using metamask
        window.web3 = new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract([
            {
                "constant": false,
                "inputs": [],
                "name": "join",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pickWinner",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getPlayers",
                "outputs": [
                    {
                        "name": "",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "players",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ], lottery.options.address);
  
        const amount = web3.utils.toWei('0.011', 'ether');
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const playerAddress = accounts[0];
        const lotteryJoin = await window.contract.methods.join().send({
            from: playerAddress,
            to: lottery.options.address,
            value: amount,
            gas: '1000000',
        }, (error) => {
        if (error) {
            throw error
        }
        })
        console.log(lotteryJoin)
    }
  }

export default Enter;
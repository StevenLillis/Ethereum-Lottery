import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import './jumbotron.css';

const ReactJumbotron = () => {
    return (
        <div>
            <Jumbotron className="background-colour">
                <h1 className="display-3">Welcome To The Ethereum Lottery</h1>
                &emsp;
                <p className="lead">This Lottery is run and managed by Steven Lillis | 40211625</p>
                &emsp;
                <p className="lead">Currently, we have 10 entries, completing to win 11.47 Ether!</p>
                &emsp;
                <hr className="my-2" />
                &emsp;
                <p className="lead">
                &emsp;
                        <Button color="primary" id="toggler" style={{ marginBottom: '1rem', width: '200px', height: '60px', fontSize: '1.1rem'}}>
                            ACCOUNT INFORMATION
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                            <Card className="background-colour">
                                <CardBody>
                                   Current Account: 0x5o475oi3ht384tn4t89n34t8
                                </CardBody>
                                <CardBody>
                                   Current Account Balance: 20 Ether
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                </p>
            </Jumbotron>
        </div>
    )
}

export default ReactJumbotron;
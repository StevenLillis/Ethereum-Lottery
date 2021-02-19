import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Dice from '../assets/dice.svg';
import './enter.css';
import { Container, Col, Button } from 'reactstrap';

const Enter = () => {
    return (
        <div>
            <Card className="background-shadow">
                <CardBody>
                    <CardTitle tag="h1">Enter The Lottery</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">Want To Try Your Luck?</CardSubtitle>
                </CardBody>
                <div style={{ textAlign: 'center' }}>
                    <img width="10%" src={Dice} alt="Card image cap" />
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
                    </div>
                    {/* <Container>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <input
                                    type="text"
                                    className="form-control"
                                    //NEED TO REMOVE VALUE TO START TYPING
                                    value=""
                                    placeholder="Enter the ether amount"
                                    onChange=""
                                />
                            </Col>
                    </Container> */}
                </CardBody>
            </Card>
        </div>
    )
}

export default Enter;
import React from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import Dice from '../assets/dice.svg';
import './enter.css';
import { Container, Row, Col } from 'reactstrap';

const Enter = () => {
    return (
        <div>
            <Card className="background-shadow">
                <CardBody>
                    <CardTitle tag="h5">Enter The Lottery</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Want To Try Your Luck?</CardSubtitle>
                </CardBody>
                <div style={{ textAlign: 'center' }}>
                    <img width="5%" src={Dice} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardText>Amount of Ether (Minimum 0.011 eth)</CardText>
                    <Container>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <input
                        type="text"
                        className="form-control"
                        value=""
                        placeholder="Enter the ether amount"
                        onChange=""
                    />
                    </Col>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default Enter;
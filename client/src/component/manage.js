import React from 'react';
import '../index.css';
import Ethereum from '../assets/ethereum.svg';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

//Manager Component

const Manage = () => {
    return (
        <div>
            <Card className="background-shadow">
                <CardBody>
                    <CardTitle tag="h1">Manage The Lottery</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">Manager Section Only</CardSubtitle>
                </CardBody>
                <div style={{ textAlign: 'center' }}>
                    <img width="10%" src={Ethereum} alt="Card image cap" />
                </div>
                &emsp;
                <CardBody>
                    <CardText tag="h4">This Section Is Specific To The Manager Of This Lottery.</CardText>
                    <CardText tag="h4">Any Individual Other Then The Manager Would Fail To Pick.</CardText>
                        <br />
                    <Button tag="p" color="primary" style={{ marginBottom: '1rem', width: '220px', height: '40px', fontSize: '0.9rem' }}>
                        Pick Winner
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Manage;
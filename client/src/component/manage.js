import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Container, Col } from 'reactstrap';
import Ethereum from '../assets/ethereum.svg';
import { Button } from 'reactstrap';

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
                    <button>
                        Pick Winner
                    </button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Manage;
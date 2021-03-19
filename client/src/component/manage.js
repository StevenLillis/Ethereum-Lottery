import React from 'react';
import '../index.css';
import Ethereum from '../assets/ethereum.svg';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Spinner } from 'reactstrap';

//Manager Component - For Owner of the Lottery to pick winner

//Only accessable by the owner of the lottery!

const Manage = ({loading, pickWinner}) => {
    return (
        <div>
            <Card className="background-shadow">
                <CardBody>
                    <CardTitle tag="h1">Manage the lottery</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">Manager section only</CardSubtitle>
                </CardBody>
                <div style={{ textAlign: 'center' }}>
                    <img width="10%" src={Ethereum} alt="Card image cap" />
                </div>
                &emsp;
                <CardBody>
                    <CardText tag="h4">This section is specific to the manager of this Lottery.</CardText>
                    <CardText tag="h4">Any individual other then the manager would fail to pick a winner.</CardText>
                    {/* Conditional Rendering Based on the value of the loading prop */}
                        {loading ? (
                            <div>
                                <button
                                    className="btn btn-lg btn-primary mt-4 animated fadeIn button-weight "
                                    disabled
                                >
                                     <Spinner color="dark" />  Picking...
                                </button>{' '}
                            </div> ) : (
                                <button
                                    onClick={pickWinner}
                                    className="btn btn-lg btn-primary mt-4 animated fadeIn button-weight "
                                >
                                    Pick a Winner
                                </button>
                                    )}
                </CardBody>
            </Card>
        </div>
    )
}

export default Manage;
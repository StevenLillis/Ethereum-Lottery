import React from 'react';
import '../index.css';
import Wheel from '../assets/wheel.svg';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// Enter Card Component

const Enter = ({loading, onSubmit, value, onChange }) => {
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
                            value={value}
                            placeholder="Enter Ether Amount"
                            onChange={onChange}
                        />
                        {loading ? (
                        <div>
                        <button
                            className="btn btn-lg btn-primary mt-4 animated fadeIn button-weight"
                            disabled
                        >
                        <i className="fa fa-refresh fa-spin mr-3"> </i>
                            Entering...
                        </button>{' '}
                        </div>
                            ) : (
                            <button
                            onClick={onSubmit}
                            className="btn btn-lg btn-primary mt-4 animated fadeIn button-weight"
                            >
                            Enter the Lottery!
                            </button>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Enter;
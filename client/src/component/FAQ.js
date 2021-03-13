import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Questions = () => { 

    return (
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading tag="p">What do I need to play?</ListGroupItemHeading>
            <ListGroupItemText style={{textAlign: 'center'}}>
            Chrome, Metamask (Rinkeby Network) and one account with a minimum of 0.01 Ether exc. Fees
            </ListGroupItemText>
          </ListGroupItem>
          <br />
          <ListGroupItem>
            <ListGroupItemHeading tag="p">Where is the source code?</ListGroupItemHeading>
            <ListGroupItemText>
            The Lottery DApp source code can be found <a href="https://rinkeby.etherscan.io/address/0x01f7b3f5ef19d1b2f87f1c0085e125166659431e" target="_blank">here</a> under 'Contract'
            </ListGroupItemText>
          </ListGroupItem>
          <br />
          <ListGroupItem>
            <ListGroupItemHeading tag="p">Who has entered the Lottery?</ListGroupItemHeading>
            <ListGroupItemText>
            Everyone who has entered the Lottery can be found <a href="https://rinkeby.etherscan.io/address/0x01f7b3f5ef19d1b2f87f1c0085e125166659431e" target="_blank">here</a> under 'Transactions'
            </ListGroupItemText>
          </ListGroupItem>
          <br />
          <ListGroupItem>
            <ListGroupItemHeading tag="p">How is the winner selected?</ListGroupItemHeading>
            <ListGroupItemText>
            The winner is selected based on a random number generated from Smart Contract code.
            </ListGroupItemText>
          </ListGroupItem>
          <br /> 
          <ListGroupItem>
            <ListGroupItemHeading tag="p">Are there fees?</ListGroupItemHeading>
            <ListGroupItemText>
            Yes.  Every entry contains a small gas fee required to add a new block to the Blockchain.
            </ListGroupItemText>
          </ListGroupItem>
          <br />
          <ListGroupItem>
            <ListGroupItemHeading tag="p">Will I be notified when a winner is picked?</ListGroupItemHeading>
            <ListGroupItemText>
            Unfortunately not.  However, you can see who has won based on the transctions found <a href="https://rinkeby.etherscan.io/address/0x01f7b3f5ef19d1b2f87f1c0085e125166659431e" target="_blank">here</a> 
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      );
}

export default Questions; 


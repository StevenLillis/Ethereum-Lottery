import React, {useState} from 'react';
import '../index.css';
import 'react-vertical-timeline-component/style.min.css';
import { GiPodiumWinner, GiCardPickup, GiTakeMyMoney } from "react-icons/gi";
import { RiArrowDropRightLine, RiAccountPinCircleFill } from "react-icons/ri";
import { MdNetworkCheck } from "react-icons/md";
import { GrPowerReset} from "react-icons/gr";
import { AiOutlineStop } from "react-icons/ai";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

//Instruction Component

const Instruction = () => {

    return (      
        <Timeline lineColor={'#86bfee'}>
  <TimelineItem
    key="001"
    dateText={<RiAccountPinCircleFill />}
    dateInnerStyle={{ background: '#86bfee', color: '#000' }}
    bodyContainerStyle={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
      }}
  >
    <h2 className="weight"><RiArrowDropRightLine />Installing Metamask</h2>
    <br />
    <p>
        <ul> 
            <li className="weight">
            You must have <a href="https://metamask.io/download.html" target="_blank">MetaMask </a>  
            installed with an account created &nbsp;
            </li>
            <br />
            <li className="weight">
                The Metamask account must have a minimum balance of 0.01 Ether
            </li>
            <br />
            <li className="weight">
                The Metamask account must have enough ether to cover the gas fee
            </li>
        </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText={<MdNetworkCheck />}
    dateInnerStyle={{ background: '#86bfee', color: '#000' }}
    bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h2 className="weight"><RiArrowDropRightLine />Metamask Network</h2>
    <br />
    <p>
        <ul>
            <li className="weight">
            Please ensure that you are connected to the <a href="https://www.rinkeby.io/#stats" target="_blank"> rinkeby test network </a>  
            </li>
            <br />
            <li className="weight">
            Connecting to any network other than Rinekby will result in a error being thrown
            </li>
        </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText={<GiTakeMyMoney />}
    dateInnerStyle={{ background: '#86bfee', color: '#000' }}
    bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      className: 'weight'
    }}
  >
    <h2 className="weight"><RiArrowDropRightLine />Entering The Lottery</h2>
    <br />
    <p>
        <ul>
            <li className="weight">
            Participate by entering deposting 0.01 ether from  one of your accounts
            </li>
            <br />
            <li className="weight">
                Please have enough money in your account to cover the gas fees also
            </li>
        </ul> 
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText={<AiOutlineStop />}
    dateInnerStyle={{ background: '#86bfee', color: '#000' }}
    bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h2 className="weight"><RiArrowDropRightLine />Lottery Entry Limit</h2>
    <br />
    <p>
        <ul>
            <li className="weight">
            There is no limit, players may enter the lottery as many times as they wish
            </li>
            <br />
            <li className="weight">
            The more times you enter, the better chance you have to win
            </li>
        </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="005"
    dateText={<GiCardPickup />}
    dateInnerStyle={{ background: '#86bfee', color: '#000' }}
    bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h2 className="weight"><RiArrowDropRightLine />Selecting The Winner</h2>
    <br />
    <p>
        <ul> 
            <li className="weight">
            Once a suitable number of people have entered, the lottery will be drawn
            </li>
            <br />
            <li className="weight">
            This can only be done by the owner of the lottery dapp
            </li>
        </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="006"
    dateText={<GiPodiumWinner />}
    dateInnerStyle={{ background: '#86bfee', color: '#000' }}
    bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h2 className="weight"><RiArrowDropRightLine />Winner Selected</h2>
    <br />
    <p>
        <ul>
            <li className="weight">
            Once the lottery has been drawn, the winner will recieve the entire lottery Jackpot.
            </li>
            <br />
            <li className="weight">
            Winning amount may be reduced by gas fee as a result of the transaction
            </li>
        </ul> 
    </p>
  </TimelineItem>
  <TimelineItem
    key="006"
    dateText={<GrPowerReset />}
    dateInnerStyle={{ background: '#86bfee', color: '#000' }}
    bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h2 className="weight"><RiArrowDropRightLine />Lottery Reset</h2>
    <br />
    <p>
        <ul>
            <li className="weight">
            Gamble Aware and be safe <br /><a href="https://www.begambleaware.org/" target="_blank"> when the fun stops, stop.</a> 
            </li>
            <br />
            <li className="weight">
            Please only gamble within your limits
            </li>
        </ul> 
    </p>
  </TimelineItem>
</Timeline>
    )
}

export default Instruction; 
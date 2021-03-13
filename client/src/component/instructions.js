import React, {useState} from 'react';
import '../index.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { GrCircleInformation } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa";
import { GiPodiumWinner, GiCardPickup, GiTakeMyMoney } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import { MdNetworkCheck } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { AiOutlineStop } from "react-icons/ai";

//Instruction Component

const Instruction = () => {

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<RiAccountPinCircleFill />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Metamask</h3>
                <p>
                    Please ensure that you have <a href="https://metamask.io/download.html" target="_blank">MetaMask</a> installed and have an account created, with a minimum balance of 0.01 Ether&nbsp;   
                        <GrCircleInformation id="Popover1" type="button"/>
                    <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                    <PopoverHeader tag="p">Metamask</PopoverHeader>
                        <PopoverBody tag="p">Metamask can be installed by following the link provided.  Please be sure to remember your seed phrase as this is important.  Be sure that you are logged in when attempting to enter the Lottery. </PopoverBody>
                    </Popover>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<MdNetworkCheck />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> MetaMask Network</h3>
                <p>
                    Please ensure that you are connected to the <a href="https://www.rinkeby.io/#stats" target="_blank"> Rinkeby Test Network</a>  The Lottery DApp will only connect to the Rinkeby Network
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<GiTakeMyMoney />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Entering The Lottery</h3>
                <p>
                    You can participate in the Lottery by entering deposting 0.01 Ether from any one of your Metamask accounts
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<AiOutlineStop />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Enter Limit</h3>
                <p>
                    There is no limit, players may enter the Lottery <br /> as many times as they wish <br /> The more times you enter, the better chance you have to win!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<GiCardPickup />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Selecting A Winner</h3>
                <p>
                    Once a suitable number of people have entered, the Lottery will be drawn <br /> <u>This can only be done by <br />the Owner of the Lottery DApp</u>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<GiPodiumWinner />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Winner Selected</h3>
                <p>
                    Once the Lottery has been drawn, the winner will recieve the entire Lottery Jackpot.  <br />Time to Celebrate!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<GrPowerReset />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Lottery Reset</h3>
                <p>
                    Once the winner has been selected, <br />  a new Lottery will begin <br /> allowing players to enter again.    
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#000' }}
                icon={<FaThumbsUp />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Best Of Luck</h3>
                <p>
                    Gamble Aware, be safe, <br /><a href="https://www.begambleaware.org/" target="_blank"> When the fun stops. Stop.</a> <br /> Please Gamble within your limits!
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>        
    )
}

export default Instruction; 
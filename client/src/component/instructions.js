import React, {useState} from 'react';
import '../index.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { GrCircleInformation } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa";



//Instruction Component

const Instruction = () => {

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateBefore />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Metamask</h3>
                <p>
                    Please ensure that you have <u><a href="https://metamask.io/download.html" target="_blank">MetaMask</a></u> installed and have an account created&nbsp;   
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
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> MetaMask Network</h3>
                <p>
                    Please ensure that you are connected to the <u><a href="https://www.rinkeby.io/#stats" target="_blank"> 'Rinkeby Test Network'</a></u>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateBefore />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Entering The Lottery</h3>
                <p>
                    Participate in the Lottery by entering an amount greater than or equal to 0.01 Ether
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Enter Limit</h3>
                <p>
                    Players may enter the Lottery <br /> as many times as they wish
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateBefore />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Selecting A Winner</h3>
                <p>
                    Once a suitable number of people have entered, the Lottery will be drawn <br /> <u>(Only by the Owner)</u>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Winner Selected</h3>
                <p>
                    The winner will recieve the entire 'Lottery Pot' once he Lottery has been drawn
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateBefore />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Lottery Reset</h3>
                <p>
                    Once the winner has been selected, <br />  a new Lottery will begin <br /> allowing players to play again
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <FaEthereum /> Best Of Luck</h3>
                <p>
                    Gamble Aware, be safe, <br /> <u><a href="https://www.begambleaware.org/" target="_blank"> When the fun stops. Stop. </a></u>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Instruction; 
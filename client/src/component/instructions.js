import React from 'react';
import '../index.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdFilter1, MdFilter2, MdFilter3, MdFilter4, MdFilter5, MdFilter6, MdFilter7, MdFilter8, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

//Instruction Component

const Instruction = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateBefore />}
            >
                <h3 className="vertical-timeline-element-title weight"> <MdFilter1 /> MetaMask</h3>
                <p>
                    Please ensure that you have <u><a href="https://metamask.io/download.html" target="_blank">MetaMask</a></u> installed and have an account created
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <MdFilter2 /> MetaMask Network</h3>
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
                <h3 className="vertical-timeline-element-title weight"> <MdFilter3 /> Entering The Lottery</h3>
                <p>
                    Participate in the Lottery by entering an amount creater than 0.01 Ether
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8FC1E3', color: '#000' }}
                iconStyle={{ background: '#8FC1E3', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <MdFilter4 /> Enter Limit</h3>
                <p>
                    Players may enter the Lottery <br /> as many times as they wish
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8FC1E3', color: '#000' }}
                iconStyle={{ background: '#8FC1E3', color: '#fff' }}
                icon={<MdNavigateBefore />}
            >
                <h3 className="vertical-timeline-element-title weight"> <MdFilter5 /> Selecting A Winner</h3>
                <p>
                    Once a suitable number of people have entered, the Lottery will be drawn <br /> <u>(Only by the Owner)</u>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8FC1E3', color: '#000' }}
                iconStyle={{ background: '#8FC1E3', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <MdFilter6 /> Winner Selected</h3>
                <p>
                    The winner will recieve the entire 'Lottery Pot' once he Lottery has been drawn
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8FC1E3', color: '#000' }}
                iconStyle={{ background: '#8FC1E3', color: '#fff' }}
                icon={<MdNavigateBefore />}
            >
                <h3 className="vertical-timeline-element-title weight"> <MdFilter7 /> Lottery Reset</h3>
                <p>
                    Once the winner has been selected, <br />  a new Lottery will begin <br /> allowing players to play again
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8FC1E3', color: '#000' }}
                iconStyle={{ background: '#8FC1E3', color: '#fff' }}
                icon={<MdNavigateNext />}
            >
                <h3 className="vertical-timeline-element-title weight"> <MdFilter8 /> Best Of Luck</h3>
                <p>
                    Gamble Aware, be safe, <br /> <u><a href="https://www.begambleaware.org/" target="_blank"> When the fun stops. Stop. </a></u>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Instruction; 
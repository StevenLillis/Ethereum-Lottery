import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import './instructions.css'

const Instruction = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">MetaMask</h3>
                <p>
                    Please Ensure That You Have <a href="https://metamask.io/download.html" target="_blank">MetaMask</a> Installed and Have An Account Created
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFCCCB', color: '#000' }}
                iconStyle={{ background: '#FFCCCB', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">MetaMask Network</h3>
                <p>
                    Please Ensure That You Are Connected To The <a href="https://www.rinkeby.io/#stats" target="_blank"> 'Rinkeby Test Network'</a>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">Entering The Lottery</h3>
                <p>
                    Participate In The Lottery By Entering An Amount Creater Than 0.01 Ether
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFCCCB', color: '#000' }}
                iconStyle={{ background: '#FFCCCB', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">Enter Limit</h3>
                <p>
                    Players May Enter The Lottery <br /> As A Many Times As They Wish
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">Selecting A Winner</h3>
                <p>
                    Once A Suitable Number Of People Have Entered, The Lottery Will Be Drawn <br /> <u>(Only By The Owner)</u>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFCCCB', color: '#000' }}
                iconStyle={{ background: '#FFCCCB', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">Winner Selected</h3>
                <p>
                    The Winner Will Recieve The Entire Lottery Pot Once The Lottery Has Been Drawn
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#000' }}
                iconStyle={{ background: '#86bfee', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">Lottery Reset</h3>
                <p>
                    Once The Winner Has Been Selected, <br />  A New Lottery Will Begin <br /> Allowing Players To Play Again
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFCCCB', color: '#000' }}
                iconStyle={{ background: '#FFCCCB', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">Best Of Luck</h3>
                <p>
                    Gamble Aware, Be Safe, <br /> <a href="https://www.begambleaware.org/" target="_blank"> When The Fun Stops. Stop. </a>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Instruction; 
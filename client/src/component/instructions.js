import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import './instructions.css'

const Instruction = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#86bfee', color: '#fff' }}
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
                contentStyle={{ background: '#86bfee', color: '#fff' }}
                iconStyle={{ background: '#86bfee', color: '#fff'}}
                icon={''}
            >
                <h3 className="vertical-timeline-element-title weight">MetaMask Network</h3>
                <p>
                    Please Ensure That You Are Connected To The 'Rinkeby Test Network'
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={''}
            />
        </VerticalTimeline>
    )
}

export default Instruction; 
import React from 'react';
import '../index.css';
import { MdFingerprint } from 'react-icons/md';

//Simple Footer Component

const Footer = () => {
    return (
        <div className="container-fulid">
            <div className="footer">
                <MdFingerprint />Ethereum Lottery - Created and Designed by Steven Lillis | 40211625
            </div>
        </div>
    )
}

export default Footer;
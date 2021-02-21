import React from 'react'; 
import './footer.css'
import {MdFingerprint} from 'react-icons/md'

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
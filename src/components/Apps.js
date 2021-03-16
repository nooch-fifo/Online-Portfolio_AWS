import React from 'react';
import './Apps.css';
/*import { Link } from 'react-router-dom';*/

function Apps(){
    return(
        <div className='apps-container'>
        <div className='apps'>
            <h2>My Social Media </h2>
            <div className="apps-logos">
                <a href="https://www.linkedin.com/in/dominic-rego-7b6b28161/">
                    <img src="linkedin.png" alt="linkedin" className="linkedin" />
                </a>
                <a href="https://app.joinhandshake.com/users/18532699">
                    <img src="handshake.png" alt="handshake" className="handshake" />
                </a>
                <a href="https://github.com/nooch-fifo">
                    <img src="github.png" alt="github" className="github" />
                </a>
                <a href="https://leetcode.com/nooch/">
                    <img src="LeetCode_Logo_2.png" alt="leetcode" className="leetcode" />
                </a>
            </div>
                <div className="apps-names">
                    <h5 className="linkedin_name">LinkedIN</h5>
                    <h5 className="handshake_name">Handshake</h5>
                    <h5 className="github_name">gitHub</h5>
                    <h5 className="leetcode_name">LeetCode</h5>
                </div>
        </div>
        </div>
    )
}

export default Apps;
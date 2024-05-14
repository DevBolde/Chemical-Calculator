import React from 'react';
import '../Style/AlertMessage.css'

const AlertMessage = ({ chlorine, ph, alkalinity, stabilizer }) => {
    return (
        <div className='alert'>
            <h2>You Submitted:</h2>
            <p>Chlorine (ppm): {chlorine}</p>
            <p>PH: {ph}</p>
            <p>Alkalinity (ppm): {alkalinity}</p>
            <p>Stabilizer (ppm): {stabilizer}</p>
        </div>
    );
}

export default AlertMessage;

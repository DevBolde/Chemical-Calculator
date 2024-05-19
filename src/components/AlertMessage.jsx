import React from 'react';
import '../Style/AlertMessage.css'

const AlertMessage = ({ chlorine, ph, alkalinity, stabilizer }) => {
    return (
        <div className='alert'>
        <div className='info-section'>
            <h2>You Submitted:</h2>
            <div className='info'>
                <div className='column'>
                    <p>Chlorine (ppm): {chlorine}</p>
                    <p>PH: {ph}</p>
                    <p>Alkalinity (ppm): {alkalinity}</p>
                    <p>Stabilizer (ppm): {stabilizer}</p>
                </div>
            </div>
        </div>
        <div className='info-section'>
            <h2>Correct Levels:</h2>
            <div className='info'>
                <div className='column'>
                    <p>Chlorine (ppm): 3</p>
                    <p>PH: 7.4 - 7.6</p>
                    <p>Alkalinity (ppm): 80 - 120</p>
                    <p>Stabilizer (ppm): 60 - 80</p>
                </div>
            </div>
        </div>
    </div>
    
    
    );
}

export default AlertMessage;

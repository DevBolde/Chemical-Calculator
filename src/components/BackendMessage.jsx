import React, { useState, useEffect } from "react";
import '../Style/BackendMessage.css'; // Import CSS file for styling
import axios from "axios";

const BackendMessage = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        axios.get('/api')
            .then(response => {
                setMessage(response.data.message1);
                setIsVisible(true);

                setTimeout(() => {
                    setMessage(response.data.message2);
                }, 2000);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);
    
    return (
        <div className={`alert ${isVisible ? 'show' : ''}`}>
            {message}
        </div>
    );
}

export default BackendMessage;


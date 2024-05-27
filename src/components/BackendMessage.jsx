import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Style/AlertMessage.css';

const BackendMessage = () => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        setMessage(response.data.message1);
        setIsVisible(true);

        // Transition to the second message after 2 seconds
        setTimeout(() => {
          setMessage(response.data.message2);
        }, 2000);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  return (
    <div className={`alert ${isVisible ? 'visible' : 'hidden'}`}>
      {message}
    </div>
  );
}

export default BackendMessage;



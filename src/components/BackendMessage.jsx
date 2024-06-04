import React, { useState, useEffect } from "react";
import '../Style/BackendMessage.css'; 
import axios from "axios";

const BackendMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('/backendmessage');
        setMessage(response.data.message1);
        setTimeout(() => {
          setMessage(response.data.message2)
        }, [2000])
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Failed to fetch data');
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className='alert'>
      {message}
    </div>
  );
}

export default BackendMessage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/CustomerInfo.css';
import Navigation from './Navigation';
import axios from 'axios';
import CustomerDataTable from './CustomerDataTable';

const CustomerInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        const phoneValue = event.target.value;
        const formattedPhone = phoneValue.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        setPhone(formattedPhone);
    }

    const addCustomer = async (customerData) => {
        try {
            const response = await axios.post('/api/customers', customerData);
            console.log('Customer added:', response.data);
            setRefreshTrigger(prev => prev + 1);  // This will trigger a refresh in CustomerDataTable
        } catch (error) {
            console.error('Error adding customer:', error);
            throw error;  // Re-throw the error so it can be caught in handleSubmit
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
            await addCustomer({ name, email, phone });
            // Clear the form after successful submission
            setName('');
            setEmail('');
            setPhone('');
            navigate(0);  // This will trigger a refresh in CustomerDataTable
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='customer-info-wrapper'>
            <Navigation />   
            <div className='add-customer'>    
                <h1>Add Customer:</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    <button type="submit">Add Customer</button>
                </form>
            </div>
            
            <CustomerDataTable refreshTrigger={refreshTrigger} /> 
        </div>
    );
};

export default CustomerInfo;
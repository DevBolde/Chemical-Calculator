import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/CustomerDataTable.css';

const CustomerDataTable = ({ triggerRefresh }) => {
    const [customers, setCustomers] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);


    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCustomers();
    }, [triggerRefresh]);

    const toggleTable = () => {
        setIsExpanded(!isExpanded);
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/customers/${id}`);
            setCustomers(customers.filter((customer) => customer.id !== id));
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    }
    
    const createDeleteButton = (id) => {
        return <button onClick={() => handleDelete(id)}>Delete</button>
    }



    return (
        <div className='customer-data-table-container'>
            <div className='table-header'>
                <button onClick={toggleTable} className='toggle-button'>
                    {isExpanded ? '-' : '+'} Customer Data Table
                </button>
            </div>
            {isExpanded && 
            <div className='customer-data-table'>
                <h1>Customer Data Table</h1>
            <p>Click on a customer to delete</p>
            <></>
            <table className="customer-DTA">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{createDeleteButton(customer.id)}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            }
        </div>
    );
};

export default CustomerDataTable;
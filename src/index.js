import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root using the new API
root.render(
  <React.StrictMode>
    <Router> {/* Wrap the App component with Router */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();



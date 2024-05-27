import React from 'react';
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router> {/* Wrap the App component with Router */}
      <App />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();


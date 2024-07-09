import React from 'react';
import './App.css';
import ChemicalLevelsForm from './components/ChemForm/Form';
import CustomerInfo from './components/CustomerInfo';
import { Route, Routes } from 'react-router-dom';
import Cover from './components/CoverPage';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Cover />} />
        <Route path='/form' element={<ChemicalLevelsForm />} />
        <Route path='/Customer-Info' element={<CustomerInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;




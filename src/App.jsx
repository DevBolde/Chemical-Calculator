import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ChemicalLevelsForm from './components/ChemForm/Form';
import { Route, Routes } from 'react-router-dom';
import Cover from './components/CoverPage';

function App() {
  

  

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Cover />} />
        <Route path='/form' element={<ChemicalLevelsForm />} />
      </Routes>
    </div>
  );
}

export default App;




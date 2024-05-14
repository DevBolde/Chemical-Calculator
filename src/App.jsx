import React from 'react';
import './App.css';
import ChemicalLevelsForm from './ChemForm/Form.js';
import { Route, Routes } from 'react-router-dom';
import Cover from './components/CoverPage';






function App() {
  return (
    <div className='app'>
    <Routes>
      <Route path='/' Component={Cover}/>
      <Route path='/form' Component={ChemicalLevelsForm}/>
    </Routes>
    </div>
  );
}

export default App;

